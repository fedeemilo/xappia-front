import React from "react";

const Form = ({ handleSubmit, handleFileUpload, isLoading }) => (
    <form onSubmit={handleSubmit}>
        <div className="input-group input-group-lg">
            <input
                type="file"
                className="form-control h-100"
                name="file"
                aria-label="Upload"
                onChange={handleFileUpload}
                required
            />
            <button className="btn btn-outline-secondary" type="submit">
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
);

export default Form;
