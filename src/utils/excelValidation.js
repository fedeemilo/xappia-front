export const excelColsByBrand = {
    toyota: ['A', 'B', 'C', 'D', 'E', 'F'],
    volkswagen: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    chevrolet: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    ean: ['A', 'B', 'C', 'D', 'E', 'F']
}

const excelTypesByCol = {
    toyota: {
        A: { colName: 'Nombre y Apellido', type: 'string' },
        B: { colName: 'Teléfono', type: 'number' },
        C: { colName: 'Email', type: 'string' },
        D: { colName: 'Modelo de Interés', type: 'number' },
        E: { colName: 'Consulta', type: 'string' },
        F: { colName: 'Origen', type: 'string' }
    },
    volkswagen: {
        A: { colName: 'Nombre y Apellido', type: 'string' },
        B: { colName: 'Teléfono', type: 'number' },
        C: { colName: 'Email', type: 'string' },
        D: { colName: 'ID Concesionario', type: 'string' },
        E: { colName: 'Producto', type: 'string' },
        F: { colName: 'Origen', type: 'string' },
        G: { colName: 'Autoahorro', type: 'boolean' }
    }
}

function getDynamicColumnRange(sheet) {
    const columnRange = []
    let column = 'A'
    while (sheet[column + '1']) {
        columnRange.push(column)
        column = incrementColumn(column)
    }
    return columnRange
}

function incrementColumn(column) {
    return String.fromCharCode(column.charCodeAt(0) + 1)
}

export const validateExcelFile = (workbook, brand) => {
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]

    const errors = []

    const columnRange = getDynamicColumnRange(sheet)

    let rowNum = 2

    while (sheet[columnRange[0] + rowNum]) {
        const row = {}

        columnRange.forEach(column => {
            const cell = sheet[column + rowNum]
            if (cell) {
                row[column] = cell.v
            }
        })

        for (const column in row) {
            if (column === 'G' && brand === 'toyota') return

            const value = row[column]
            const validationType = excelTypesByCol[brand][column].type
            const colName = excelTypesByCol[brand][column].colName

            if (typeof value !== validationType)
                errors.push(
                    `🔴 Error en la columna ${column} (${colName}), 
                        fila ${rowNum}: El valor ${value} no es un ${validationType}.`
                )
        }

        rowNum++
    }

    return errors
}
