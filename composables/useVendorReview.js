import { vendorUseApi } from "./vendorApi";

export const getAllReview = async (page) => {
    const api = vendorUseApi()
        const res = await api({
            url: `customer/reviews/?page=${page}`,
            method: 'GET'
        });
        return res
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
export const dissapproveReview = async (id) => {
    const api = vendorUseApi()
        const res = await api({
            url: `customer/reviews/${id}/mark_as_pending`,
            method: 'POST'
        });
        return res
}
export const searchReview = async (search, date) => {
    const api = vendorUseApi()
        const res = await api({
            url: `customer/review_search?search_global=${search}&start_date=${date}`,
            method: 'GET'
        });
        return res
}
export const filterReview = async (status) => {
    const api = vendorUseApi()
        const res = await api({
            url: `customer/review_filter?review_status=${status}`,
            method: 'GET'
        });
        return res
}