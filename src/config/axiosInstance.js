import axios from "axios";
import configObj from "./config";

const axiosInstance = axios.create({
    baseURL: `https://${configObj.base}`,
    headers: {
        "Content-Type" : "application/json"
    }
})

export { axiosInstance }