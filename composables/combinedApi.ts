import axios from 'axios'
import { useRouter } from 'vue-router';

const router = useRouter()

export const combinedApi = () => {
    const token = localStorage.getItem('vendorToken') || localStorage.getItem('token') || null;
    const baseURL = 'https://umoja-production-9636.up.railway.app/api/';

    const instance = axios.create({
        baseURL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    });



    return instance;
};