import { SiMicrosoftexcel } from 'react-icons/si'

const Example = ({ brand, dealer }) => {
    return (
        <div
            className="d-flex align-items-center position-absolute"
            style={{ right: '13.5%', top: '13%' }}
        >
            <p className="mt-3 font-italic">Ejemplo</p>
            <a
                href={`/example/${brand}?dealer=${dealer}`}
                className="text-success h3 ml-2 "
            >
                <SiMicrosoftexcel />
            </a>
        </div>
    )
}

export default Example
