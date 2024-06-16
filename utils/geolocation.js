import axios from 'axios';

export const getGeolocation = async (ip) => {
  try {
    const config = useRuntimeConfig();
    const apiKey = config.public.ipInfoToken;
    const response = await axios.get(`https://ipinfo.io/${ip}?token=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching geolocation data:', error);
    return null;
  }
};
