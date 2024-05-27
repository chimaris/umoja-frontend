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

export const replyReview = async (id, data) => {
    const api = vendorUseApi()
        const res = await api({
            url: `customer/reviews/${id}/reply`,
            method: 'POST',
            data: data
        });
        return res
}
export const editReview = async (id, comment) => {
    const api = vendorUseApi()
        const res = await api({
            url: `customer/reviews/${id}/reply`,
            method: 'POST',
            data: {
                _method: 'PUT',
                review_reply: comment
            }
        });
        return res
}
export const deleteReview = async (id) => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: `customer/reviews/${id}/reply`,
            method: 'POST',
            data: {
                _method: 'DELETE'
            }
        });
        return true
    }catch(error){
        console.error(error)
        return false
    }
}