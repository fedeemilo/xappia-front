export const URLS = {
    home: "/",
    other: "*",
    excel: "/excel/:brand",
    result: "/result",
    example: "/example/:brand",
    error: "/error"
};

export const URL_BACKEND = host =>
    host.includes("localhost")
        ? "http://localhost:8000"
        : "http://ec2-13-58-180-105.us-east-2.compute.amazonaws.com:8000";
