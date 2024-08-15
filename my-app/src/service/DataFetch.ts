import axios, { AxiosError, type AxiosInstance } from "axios";

export const defaultAxiosInstance: AxiosInstance = axios.create({
        baseURL: 'http://localhost:8080',
    }
)

