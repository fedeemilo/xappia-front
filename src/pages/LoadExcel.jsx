import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BACKEND } from "../constants/urls";

const LoadExcel = () => {
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
            <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <h3 className="p-3">Cargar archivo excel</h3>
                <p className="font-weight-light mt-n4">
                    Envío de leads a {brand}
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="file"
                            className="form-control h-100"
                            name="uploadfile"
                            aria-label="Upload"
                            onChange={handleFileUpload}
                            required
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="submit"
                        >
                            Cargar
                        </button>
                        <div
                            className={`spinner-border text-secondary ml-2 mt-1 ${
                                !isLoading ? "d-none" : ""
                            }`}
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoadExcel;
