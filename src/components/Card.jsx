const Card = ({ icon, text, path, disabled, dealers }) => {
    return (
        <div className="card w-100 bg-light h-100">
            <div className="mx-auto p-2">{icon}</div>
            <div className="card-body justify-content-center mx-auto text-center w-100">
                <h5 className="card-title">{text}</h5>

                {dealers?.map(({ id, disabled }) => (
                    <a
                        key={id}
                        href={`${path}?dealer=${id}`}
                        className={`btn btn-outline-info mt-2 m-1 ${
                            disabled ? 'disabled' : ''
                        }`}
                        style={{ width: '6rem' }}
                    >
                        {id}
                    </a>
                ))}

                {!dealers && (
                    <a
                        href={path}
                        className={`btn btn-outline-info w-50 mt-2 ${
                            disabled ? 'disabled' : ''
                        }`}
                    >
                        Cargar
                    </a>
                )}
            </div>
        </div>
    )
}

export default Card
