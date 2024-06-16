// utils/api.js
import { vendorUseApi } from "./vendorApi";

export const getCountryByRegion = async (continent) => {
  const api = vendorUseApi();
  try {
    const res = await api({
      url: `https://restcountries.com/v3.1/region/${continent}`,
      method: 'GET',
    });
    return res.data.map((country) => ({
      name: country.name.common,
      flag: country.flags.png,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
