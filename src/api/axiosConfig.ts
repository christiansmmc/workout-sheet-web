import axios, {AxiosInstance} from "axios";
import {getToken, removeToken} from "../utils/authUtils.ts";

const createApiInstance = (): AxiosInstance => {
    const instance = axios.create();

    instance.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

    instance.interceptors.request.use((config) => {
        const token = getToken();

        if (token) {
            config.headers.setAuthorization(`Bearer ${token}`)
        }

        return config;
    })

    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            const token = getToken();

            if (
                error.response
                && error.response.status === 401
                && token
            ) {
                removeToken();
                //TODO navigate to home page
            }

            return Promise.reject(error);
        }
    );

    return instance;
}

const api = createApiInstance();
export default api;

