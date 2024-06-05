import { vendorUseApi } from "./vendorApi";

export const getNoFollowers = async(id) => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: `vendor/${id}/followers_count`,
            method: 'GET'
        });
        console.log(res)
    }catch(error){
        console.error(error)
        return false
    }
}

export const getVendorFollowers = async(id) => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: `vendor/${id}/followers`,
            method: 'GET'
        });
        return res.data
    }catch(error){
        console.error(error)
        return false
    }
}