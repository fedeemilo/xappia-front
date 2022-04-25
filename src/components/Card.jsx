import React from "react";

const Card = ({ icon, text, path, disabled, message }) => {
    return (
        <div className="card w-100 bg-light h-100" style={{ width: "18rem" }}>
            <div className="mx-auto p-2">{icon}</div>
            <div className="card-body mx-auto text-center w-100">
                <h5 className="card-title">{text}</h5>
                {message && (
                    <h6 class="card-subtitle mb-2 text-muted">{message}</h6>
                )}
                <a
                    href={path}
                    className={`btn btn-outline-info w-50 mt-2 ${
                        disabled ? "disabled" : ""
                    }`}
                >
                    Cargar
                </a>
            </div>
        </div>
    );
};

export default Card;
