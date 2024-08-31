import React from 'react'
import Card from '../components/Card'
import { getBrandCards } from '../utils/getBrandCards'

const BRAND_CARDS = getBrandCards()

const Home = () => {
    return (
        <div
            className="container"
            style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px' }}
        >
            <div className="row mt-5 justify-content-center">
                {BRAND_CARDS.map(({ id, icon, text, path, disabled, message, dealers }) => (
                    <div key={id} className="col-sm-12 col-md-5 col-lg-4 my-3">
                        <Card
                            icon={icon}
                            text={text}
                            path={path}
                            disabled={disabled}
                            message={message}
                            dealers={dealers}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
