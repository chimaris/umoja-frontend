import { id } from "date-fns/locale";
import { vendorUseApi } from "./vendorApi";

export const chooseShippingMethod = async (method, savingMethod) => {
    const api = vendorUseApi()
    let data = {
        admin_shipping_id: 1,
        name: 'umoja logistics'
    }
    if(method == 'manual shipping'){
        data = {
            admin_shipping_id: 2,
            name: 'manual shipping'
        }
    }
    try{
        savingMethod.value = true
        await api ({
            url: 'vendor/shippingMethods',
            method: 'POST',
            data: data
        });
        return {success: true}
    }catch(err){
        let errorMessage = "An error occurred. Please try again later."
        if (err.response) {
        errorMessage= err.response.data.message || 'An error occurred while saving shipping method.';
        } else if (err.request) {
            errorMessage  = 'No response received from server. Please try again later.';
        }
        return {success: false, message: errorMessage}
    }finally{
        savingMethod.value = false
    }
}
export const changeShippingMethod = async (id, method, savingMethod) => {
    const api = vendorUseApi()
    let data = {
        admin_shipping_id: 1,
        name: 'umoja logistics'
    }
    if(method == 'Manual Shipping'){
        data = {
            admin_shipping_id: 2,
            name: 'manual shipping'
        }
    }
    try{
        savingMethod.value = true
        const res = await api ({
            url: `vendor/shippingMethods/${id}`,
            method: 'POST',
            data:{
                _method: 'PUT',
                ...data
            }
        });
        return {success: true}
    }catch(err){
        let errorMessage = "An error occurred. Please try again later."
        if (err.response) {
        errorMessage= err.response.data.message || 'An error occurred while saving shipping method.';
        } else if (err.request) {
            errorMessage  = 'No response received from server. Please try again later.';
        }
        return {success: false, message: errorMessage}
    }finally{
        savingMethod.value = false
    }
}
export const createShippingZone = async (data) => {
    const api = vendorUseApi()
    const res = await api ({
        url: `vendor/shipping_zones`,
        method: 'POST',
        data: data
    });
    return res
}
export const updateShipping = async (data, id) => {
    const api = vendorUseApi()

    const res = await api ({
        url: `vendor/shipping_zones/${id}`,
        method: 'POST',
        data: {
            _method: 'PUT',
            ...data
        }
    });
    return res
   
}
export const getShipping = async () => {
    const api = vendorUseApi()
   try{
    const res = await api ({
        url: 'vendor/shipping_zones',
        method: 'GET'
    });
    return res.data.data
   }catch(error){
    console.error(error);
    return []
   }
}
// zones
export const getZones = async (id) => {
    const api = vendorUseApi()
   try{
    const res = await api ({
        url: `vendor/shipping_zones/${id}/zone_rates`,
        method: 'GET'
    });
   }catch(error){
    console.error(error);
    return []
   }
}
export const createZones = async (data, id) => {
    const api = vendorUseApi()
    const res = await api ({
        url: `vendor/shipping_zones/${id}/zone_rates`,
        method: 'POST',
        data: data
    });
    return res
}
export const updateZone = async (data, id, rateId) => {
    const api = vendorUseApi()
    const res = await api ({
        url: `vendor/shipping_zones/${id}/zone_rates/${rateId}`,
        method: 'POST',
        data: {
            _method: 'PUT',
            ...data
        }
    });
    return res
}
export const deleteZone = async (id, rateId) => {
    const api = vendorUseApi()
   try{
    const res = await api ({
        url: `vendor/shipping_zones/${id}/zone_rates/${rateId}`,
        method: 'POST',
        data: {
            _method: 'DELETE'
        }
    });
   }catch(error){
    console.error(error);
   }
}
export const deleteShippingZone = async (id) => {
    const api = vendorUseApi()
   try{
    const res = await api ({
        url: `vendor/shipping_zones/${id}`,
        method: 'POST',
        data: {
            _method: 'DELETE'
        }
    });
    return true
   }catch(error){
    console.error(error);
    return false
   }
}