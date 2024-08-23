import {defaultAxiosInstance} from "./DataFetch.ts";

const createBasicAuthHeader = (username: string, password: string) => {
    const encodedCredentials = btoa(`${username}:${password}`);
    return `Basic ${encodedCredentials}`;
};

export const login = async (firstName: string, password: string): Promise<void> => {
    try {
        const authHeader = createBasicAuthHeader(firstName, password);

        defaultAxiosInstance.interceptors.request.use(function (config) {
            config.headers.Authorization = authHeader;
            return config;
        });

    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed");
    }
};
