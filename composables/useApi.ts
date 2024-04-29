import axios from 'axios'
import { getLocalStorageItem, setLocalStorageItem } from '~/utils/storage';

export const useApi = () => {
    const token = localStorage.getItem('token') || null;
    const refreshToken = localStorage.getItem('refreshToken') || null;
    const baseURL = 'https://umoja-production-9636.up.railway.app/api/';

    const instance = axios.create({
        baseURL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    });

    // instance.interceptors.response.use(
    //     response => response,
    //     async error => {
    //         const originalRequest = error.config;
    //         if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
    //             originalRequest._retry = true;
    //             try {
    //                 const response = await axios.post(`${baseURL}/auth/refresh_token`, { refresh_token: refreshToken });
    //                 const newToken = response.data.access_token;
    //                 localStorage.setItem("token", newToken);
    //                 originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
    //                 return axios(originalRequest);
    //             } catch (refreshError) {
    //                 console.error('Failed to refresh token:', refreshError);
    //                 // Handle refresh token failure (e.g., log out user)
    //             }
    //         }
    //         return Promise.reject(error);
    //     }
    // );

    return instance;
};