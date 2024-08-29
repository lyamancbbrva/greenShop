import axios from "axios";
import configObj from "./config";
import { Cookies } from "react-cookie";

const cook = new Cookies()

const token = cook.get('token')
const axiosInstance = axios.create({
    baseURL: `https://${configObj.base}`,
    headers: {
        "Content-Type" : "application/json"
    }
})

axiosInstance.interceptors.request.use(request => {
    const token = cook.get('token');
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request
    }, error => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refresh = cook.get('refresh');
<<<<<<< HEAD
                const { data } = await axios.post(`http://${configObj.base}/auth/refresh-token`, { refreshToken: refresh });
=======
                const { data } = await axios.post(`https://${configObj.base}/auth/refresh-token`, { refreshToken: refresh });
>>>>>>> 8bd8fa2e6ef51d2480036136f3cf84227e6407de
                
                cook.set('token', data.token);
                cook.set('refresh', data.refresh);

                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
                return axiosInstance(originalRequest);
            } catch (err) {
                cook.remove('token');
                cook.remove('refresh');
<<<<<<< HEAD
                cook.remove('user');
=======
>>>>>>> 8bd8fa2e6ef51d2480036136f3cf84227e6407de
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);


export { axiosInstance}