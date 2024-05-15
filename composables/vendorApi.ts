import axios from 'axios';
import { useRouter } from 'vue-router';
import { useVendorStore } from '~/stores/vendorStore';


export const vendorUseApi = () => {
    
    const token = useVendorStore().vendorToken;
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
                const sessionExpiredEvent = new Event('sessionExpired');
                window.dispatchEvent(sessionExpiredEvent);
            }
            return Promise.reject(error);
        }
    );

    return instance;
};
