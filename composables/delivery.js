import { vendorUseApi } from "./vendorApi";

export const createDeliveryAddress = async (data) => {
    const api = vendorUseApi()
    try{
        const res = await api ({
            url: 'vendor/local_deliveries',
            method: 'POST',
            data: data
        });
        return true
    }catch(error){
        console.error(error)
        return false
    }
    
}
export const createPickupAddress = async (data) => {
    const api = vendorUseApi()
   try{
    const res = await api ({
        url: 'vendor/local_pickups',
        method: 'POST',
        data: data
    });
    return true
   }catch(error){
    console.error(error)
    return false
   }
}
export const getDeliveryAddress = async () => {
    const api = vendorUseApi()
   try{
    const res = await api ({
        url: 'vendor/local_deliveries',
        method: 'GET'
    });
    return res.data.data
   }catch(error){
    console.error(error);
    return []
   }
}
export const getPickupAddress = async () => {
    const api = vendorUseApi()
   try{
    const res = await api ({
        url: 'vendor/local_pickups',
        method: 'GET'
    });
    return res.data.data
   }catch(error){
    console.error(error);
    return []
   }
}
export const updateDeliveryAddress = async (data, id) => {
    const api = vendorUseApi()
    const res = await api ({
        url: `vendor/local_deliveries/${id}`,
        method: 'POST',
        data: {
            _method: 'PUT',
            ...data
        }
    });
    return res
}
export const updatePickupAddress = async (data, id) => {
    const api = vendorUseApi()
    const res = await api ({
        url: `vendor/local_pickups/${id}`,
        method: 'POST',
        data: {
            _method: 'PUT',
            ...data
        }
    });
    return res
}