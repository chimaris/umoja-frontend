import { useApi } from "./useApi";
import {ref} from 'vue'

export const addressError = ref("")

export const fetchShippingAdress = async () => {
    const api = useApi()
    try {
        const response = await api({
          url: "customer/shippingAddresses",
          method: "get",
        });
        return response.data.data;
      }catch(error) {
        console.error(error)
      }
}

export const shippingMethods = async () => {
  const api = useApi()
    try {
      const response = await api ({
        url: 'admin/shippingMethods',
        method: 'get',
      });
      return response.data.data
      
    }catch(error) {
      console.error(error);
    }
}

export const createShippingAddress = async (data) =>{
    addressError.value = "";
    const api = useApi()
    try {
        const response = await api ({
          url: 'customer/shippingAddresses',
          method: 'post',
          data: data
        });
        return true
    }catch (error) {
      if (error.response) {
        addressError.value  = error.response.data.message || 'An error occurred while adding shipping address.';
      } else if (error.request) {
        addressError.value  = 'No response received from server. Please try again later.';
      } else {
        addressError.value  = 'An error occurred. Please try again later.';
      }
      return false;
    }
}

export const updateShippingAddress = async (data) => {
  addressError.value = "";
    const api = useApi()
    try {
        const response = await api ({
          url: `customer/shippingAddresses/${data.id}`,
          method: 'post',
          data: {
            _method: 'PUT',
            shipping_full_name: data.full_name, 
            shipping_email: data.email,
            shipping_phone_number: data.phone_number,
            shipping_address: data.shipping_address,
            shipping_region: data.shipping_region,
            shipping_city: data.shipping_city,
            shipping_postal_code: data.shipping_postal_code
          }
        });
        return true
    }catch (error) {
      if (error.response) {
        addressError.value = error.response.data.message || 'An error occurred while updating shipping address.';
      } else if (error.request) {
        addressError.value = 'No response received from server. Please try again later.';
      } else {
        addressError.value = 'An error occurred. Please try again later.';
      }
      return false;
    }
}