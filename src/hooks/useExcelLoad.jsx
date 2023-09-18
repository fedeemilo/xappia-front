import { useState, useRef } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import * as XLSX from 'xlsx'
import { URL_BACKEND } from '../constants/urls'
import { excelColsByBrand, validateExcelFile } from '../utils/excelValidation'

const useExcelLoad = () => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [fileIsValid, setFileIsValid] = useState(true)

    const { brand } = useParams()
    const useQuery = () => new URLSearchParams(useLocation().search)
    const query = useQuery()
    const dealer = query.get('dealer')
    const navigate = useNavigate()
    const urlBackend = URL_BACKEND(window.location.host)

    const fileInputRef = useRef(null)

    const fetch = async () => {
        const url = `${urlBackend}/leads/${brand}?dealer=${dealer}`

        try {
            setIsLoading(true)
            const {
                data: { ok, result }
            } = await axios.post(url, data)

            if (ok)
                navigate(`/result`, {
                    state: { result, brand, dealer: dealer || '' }
                })
        } catch (err) {
            console.log(err)
            setIsLoading(false)
            navigate(
                `/error?brand=${brand}&dealer=${dealer}&error=${
                    err?.response?.data?.error || 'Error desconocido'
                }`
            )
        }
    }

    const obtainSimplifiedColumns = arrCols => {
        const colLetters = arrCols.filter(col => /^[A-Z]+\d*$/.test(col))
        const letters = colLetters.map(col => col.replace(/\d+/, ''))
        return Array.from(new Set(letters))
    }

    const handleFileUpload = async e => {
        const file = e.target.files[0]

        if (file) {
            let formData = new FormData()
            formData.append('file', file)

            // Leer el archivo Excel
            const reader = new FileReader()
            reader.onload = async e => {
                const data = new Uint8Array(e.target.result)
                const workbook = XLSX.read(data, { type: 'array' })
                const worksheet = workbook.Sheets[workbook.SheetNames[0]]
                const requiredColumns = excelColsByBrand[brand]
                const columns = Object.keys(worksheet)
                const simplifiedColumns = obtainSimplifiedColumns(columns)

                const validColumns =
                    requiredColumns.length === simplifiedColumns.length

                const errorMessages = document.getElementById('errorMessages')
                const errors = validateExcelFile(workbook, brand)
                errorMessages.innerHTML = errors?.join('<br>')
                errorMessages.style.opacity = errors?.length && 1

                console.log({ validColumns })

                if (validColumns && !errors.length) {
                    setFileIsValid(true)
                    setData(formData)
                    errorMessages.style.opacity = 0
                } else {
                    fileInputRef.current.value = ''
                    setFileIsValid(false)
                }
            }

            reader.readAsArrayBuffer(file)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch()
    }

    return {
        brand,
        dealer,
        handleSubmit,
        handleFileUpload,
        isLoading,
        fileIsValid,
        fileInputRef
    }
}

export default useExcelLoad
