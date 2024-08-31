import React from 'react'

const Card = ({ icon, text, path, disabled, dealers }) => {
    return (
        <div className="card w-100 bg-white h-100 shadow-sm border-0 rounded">
            <div className="mx-auto p-3 text-center">{icon}</div>
            <div className="card-body text-center">
                <h5 className="card-title mb-3">{text}</h5>

                {dealers?.map(({ id, disabled }) => (
                    <a
                        key={id}
                        href={`${path}?dealer=${id}`}
                        className={`btn btn-outline-info mt-2 m-1 ${disabled ? 'disabled' : ''}`}
                        style={{ width: '6rem', transition: 'all 0.3s ease' }}
                    >
                        {id}
                    </a>
                ))}

                {!dealers && (
                    <a
                        href={path}
                        className={`btn btn-outline-info w-50 mt-2 ${disabled ? 'disabled' : ''}`}
                        style={{ transition: 'all 0.3s ease' }}
                    >
                        Cargar
                    </a>
                )}
            </div>
        </div>
    )
}

export default Card
