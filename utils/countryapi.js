import axios from 'axios'
import {ref} from 'vue'

export const states = ref([]);
export const cities = ref([]);
export const loadingStates = ref(false);
export const loadingCities = ref(false);

export const countries = [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde",
  "Cameroon", "Central African Republic", "Chad", "Comoros", "Congo, Republic of the",
  "Congo, Democratic Republic of the", "Cote d'Ivoire", "Djibouti", "Egypt", "Equatorial Guinea",
  "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea",
  "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali",
  "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda",
  "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa",
  "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe" 
  ];

  export const fetchStates = async (selectedBusinessCountry) => {
    loadingStates.value = true;
    try {
      const response = await axios.post('https://countriesnow.space/api/v0.1/countries/states', {
        country: selectedBusinessCountry
      });
      const stateNames = response.data.data.states.map(state => state.name);
      states.value = stateNames;
    } catch (error) {
      console.error('Error fetching states:', error);
      states.value = [];
    } finally {
      loadingStates.value = false;
    }
  };

  export const fetchCities = async (selectedBusinessCountry, selectedState) => {
    loadingCities.value = true;
    try {
      const response = await axios.post('https://countriesnow.space/api/v0.1/countries/state/cities', {
        country: selectedBusinessCountry,
        state: selectedState
      });
      const cityNames = response.data.data;
      cities.value = cityNames;
    } catch (error) {
      console.error('Error fetching cities:', error);
      cities.value = [];
    } finally {
      loadingCities.value = false;
    }
  };
  
  export const countryCodes = {
    "Algeria": "DZ",
    "Angola": "AO",
    "Benin": "BJ",
    "Botswana": "BW",
    "Burkina Faso": "BF",
    "Burundi": "BI",
    "Cabo Verde": "CV",
    "Cameroon": "CM",
    "Central African Republic": "CF",
    "Chad": "TD",
    "Comoros": "KM",
    "Congo, Republic of the": "CG",
    "Congo, Democratic Republic of the": "CD",
    "Cote d'Ivoire": "CI",
    "Djibouti": "DJ",
    "Egypt": "EG",
    "Equatorial Guinea": "GQ",
    "Eritrea": "ER",
    "Eswatini": "SZ",
    "Ethiopia": "ET",
    "Gabon": "GA",
    "Gambia": "GM",
    "Ghana": "GH",
    "Guinea": "GN",
    "Guinea-Bissau": "GW",
    "Kenya": "KE",
    "Lesotho": "LS",
    "Liberia": "LR",
    "Libya": "LY",
    "Madagascar": "MG",
    "Malawi": "MW",
    "Mali": "ML",
    "Mauritania": "MR",
    "Mauritius": "MU",
    "Morocco": "MA",
    "Mozambique": "MZ",
    "Namibia": "NA",
    "Niger": "NE",
    "Nigeria": "NG",
    "Rwanda": "RW",
    "Sao Tome and Principe": "ST",
    "Senegal": "SN",
    "Seychelles": "SC",
    "Sierra Leone": "SL",
    "Somalia": "SO",
    "South Africa": "ZA",
    "South Sudan": "SS",
    "Sudan": "SD",
    "Tanzania": "TZ",
    "Togo": "TG",
    "Tunisia": "TN",
    "Uganda": "UG",
    "Zambia": "ZM",
    "Zimbabwe": "ZW"
};
