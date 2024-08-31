import Form from '../components/Form'
import Example from '../components/Example'
import useExcelLoad from '../hooks/useExcelLoad'

const Excel = () => {
    const { brand, dealer, handleSubmit, handleFileUpload, isLoading, fileIsValid, fileInputRef } =
        useExcelLoad()

    return (
        <>
            <Example brand={brand} dealer={dealer} />
            <div className="d-flex flex-column justify-content-center align-items-center p-4 mt-5">
                <h2 className="p-3 mt-4 text-primary font-weight-bold">Cargar archivo Excel</h2>

                <p className="font-weight-light font-italic mt-n2 text-secondary">
                    Envío de leads a <strong>{brand.toUpperCase()}</strong>
                </p>
                <div className="d-flex mt-4 pb-5">
                    <Form
                        handleSubmit={handleSubmit}
                        handleFileUpload={handleFileUpload}
                        isLoading={isLoading}
                        fileIsValid={fileIsValid}
                        fileInputRef={fileInputRef}
                    />
                </div>
            </div>
        </>
    )
}

export default Excel
