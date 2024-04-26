import axios from 'axios';
import { getLocalStorageItem, setLocalStorageItem } from '~/utils/storage';

export const vendorUseApi = () => {
    const token = localStorage.getItem('vendorToken') || null;
    const refreshToken = localStorage.getItem('vendorRefreshToken') || null;
    const baseURL = 'https://umoja-production-9636.up.railway.app/api/';

    const instance = axios.create({
        baseURL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    });

    instance.interceptors.response.use(
        response => response,
        async error => {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
                originalRequest._retry = true;
                try {
                    const refreshResponse = await instance.post('/auth/refresh_token', { refresh_token: refreshToken });
                    const newToken = refreshResponse.data.access_token;
                    localStorage.setItem('vendorToken', newToken);
                    originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                    return instance(originalRequest);
                } catch (refreshError) {
                    console.error('Failed to refresh token:', refreshError);
               
                }
            }
            return Promise.reject(error);
        }
    );

    return instance;
};
