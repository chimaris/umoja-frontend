
import { useApi } from "./useApi";

export const makeReview = async(data) => {
    const api = useApi()
        const res = await api ({
            url: 'customer/reviews',
            method: 'POST',
            data: data
        });
        return res
    
}

export const getReview = async (id) => {
    const api = useApi()
    try{
        const res = await api({
            url: `customer/allreviews?product_id=${id}`,
            method:'GET'
        });
        return res.data.data
    }catch(error){
        console.error(error)
        return false
    }
}