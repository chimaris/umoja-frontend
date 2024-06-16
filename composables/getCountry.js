
import axios from 'axios';
import { getGeolocation } from '~/utils/geolocation';
import { useUserStore } from '~/stores/userStore';
import { countryNames } from '~/utils/countryapi';

 const useGeolocation = async () => {
    const userStore = useUserStore();
    let ip;

    if (process.server) {
        ip = process.server ? 'your-server-ip' : null; // Use a placeholder or retrieve the IP another way
    } else {
        try {
            const response = await axios.get('https://api64.ipify.org?format=json');
            ip = response.data.ip;
        } catch (error) {
            console.error('Error fetching IP:', error);
        }
    }

    if (ip) {
        try {
            const geoData = await getGeolocation(ip);
            if (geoData && geoData.country) {
                const countryName = countryNames[geoData.country]
                userStore.setCountry(countryName);
                console.log(countryName);
            }
        } catch (error) {
            console.error('Error fetching geolocation data:', error);
        }
    }
};
export default useGeolocation;