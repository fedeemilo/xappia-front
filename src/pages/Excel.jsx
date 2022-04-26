import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BACKEND } from "../constants/urls";
import Form from "../components/Form";
import { SiMicrosoftexcel } from "react-icons/si";
import { capitalizeFirstLetter } from "../utils/capitalize";

const Excel = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { brand } = useParams();
    const navigate = useNavigate();
    const urlBackend = URL_BACKEND(window.location.host);

    const fetch = async () => {
        const url = `${urlBackend}/leads-to-json/${brand}`;

        try {
            setIsLoading(true);
            const {
                data: { result }
            } = await axios.post(url, data);

            navigate("/result", { state: { result, brand } });
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    const handleFileUpload = e => {
        const file = e.target.files[0];

        if (file) {
            let formData = new FormData();
            formData.append("file", file);
            setData(formData);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        fetch();
    };

    return (
        <>
            <div
                className="d-flex align-items-center position-absolute"
                style={{ right: "13%", top: "15%" }}
            >
                <p className="mt-3 font-italic">Ejemplo</p>
                <a href={`/example/${brand}`} className="text-success h3 ml-2 ">
                    <SiMicrosoftexcel />
                </a>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <h3 className="p-3">Cargar archivo excel </h3>

                <p className="font-weight-light mt-n4">
                    Envío de leads a {capitalizeFirstLetter(brand)}
                </p>
                <div className="d-flex">
                    <Form
                        handleSubmit={handleSubmit}
                        handleFileUpload={handleFileUpload}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        </>
    );
};

export default Excel;
