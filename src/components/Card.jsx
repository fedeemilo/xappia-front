const Card = ({ icon, text, path, disabled, dealers }) => {
    return (
        <div className="card w-100 bg-light h-100" style={{ width: "18rem" }}>
            <div className="mx-auto p-2">{icon}</div>
            <div className="card-body mx-auto text-center w-100">
                <h5 className="card-title">{text}</h5>

                {dealers?.map(({ id, disabled }) => (
                    <>
                        <a
                            href={`${path}?dealer=${id}`}
                            className={`btn btn-outline-info w-25 mt-2 ml-2 ${
                                disabled ? "disabled" : ""
                            }`}
                        >
                            {id}
                        </a>
                    </>
                ))}

                {!dealers && (
                    <a
                        href={path}
                        className={`btn btn-outline-info w-50 mt-2 ${
                            disabled ? "disabled" : ""
                        }`}
                    >
                        Cargar
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
