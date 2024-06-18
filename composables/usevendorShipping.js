import { vendorUseApi } from "./vendorApi";

export const createShippingMethod = async (data) => {
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
    console.log(res)
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