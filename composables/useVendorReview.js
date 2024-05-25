import { vendorUseApi } from "./vendorApi";

export const getAllReview = async () => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'customer/reviews',
            method: 'GET'
        });
        return res.data.data
    }catch(error){
        console.error(error)
    }
}