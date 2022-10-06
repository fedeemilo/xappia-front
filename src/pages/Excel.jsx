import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { URL_BACKEND } from "../constants/urls";
import Form from "../components/Form";
import { SiMicrosoftexcel } from "react-icons/si";
import { capitalizeFirstLetter } from "../utils/capitalize";

const Excel = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { brand } = useParams();
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const dealer = query.get("dealer");
    const navigate = useNavigate();
    const urlBackend = URL_BACKEND(window.location.host);

    const fetch = async () => {
        const url = `${urlBackend}/leads/${brand}?dealer=${dealer}`;

        try {
            setIsLoading(true);
            const {
                data: { ok, result }
            } = await axios.post(url, data);

            if (ok)
                navigate(`/result`, {
                    state: { result, brand, dealer: dealer || "" }
                });
        } catch (err) {
            console.log(err.response);
            const { ok, error } = err.response.data;
            setIsLoading(false);

            if (!ok)
                navigate(
                    `/error?brand=${brand}&dealer=${dealer}&error=${error}`
                );
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
                style={{ right: "13.5%", top: "13%" }}
            >
                <p className="mt-3 font-italic">Ejemplo</p>
                <a href={`/example/${brand}`} className="text-success h3 ml-2 ">
                    <SiMicrosoftexcel />
                </a>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center p-3 mt-5">
                <h2 className="p-3 mt-5">Cargar archivo excel </h2>

                <p className="font-weight-light font-italic mt-n3">
                    Envío de leads a {capitalizeFirstLetter(brand)}
                </p>
                <div className="d-flex mt-4 pb-5">
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
