import axios from "axios"
import configObj from "./config"
import { Cookies } from "react-cookie"

const cook = new Cookies()
const token = cook.get('token')
const axiosInstance = axios.create({
    baseURL: `https://${configObj.base}`,
    headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
    }
})

export { axiosInstance}