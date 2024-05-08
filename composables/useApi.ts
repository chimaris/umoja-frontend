import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()

export const useApi = () => {
    const token = localStorage.getItem('token') || null;
    const baseURL = 'https://umoja-production-9636.up.railway.app/api/';

    const instance = axios.create({
        baseURL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    });

    instance.interceptors.response.use(
        response => response,
        error => {
            if (error.response.status === 401) {
                // Redirect to login page
                const sessionExpiredEvent = new Event('userSessionExpired');
                window.dispatchEvent(sessionExpiredEvent);
            }
            return Promise.reject(error);
        }
    );



    return instance;
};