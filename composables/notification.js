import { vendorUseApi } from "./vendorApi";
import {ref} from 'vue'

export const getNotification = async(tab) => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/notifications',
            method: 'GET'
        });
        // console.log(res.data)
        return res.data
    }catch(error){
        console.error(error)
        return []
    }
}
export const getOrderNotification = async() => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/notifications/orders',
            method: 'GET'
        });
        
        return res.data
    }catch(error){
        console.error(error)
        return []
    }
}
export const getReviewNotification = async() => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/notifications/reviews',
            method: 'GET'
        });
        // console.log(res.data)
        return res.data
    }catch(error){
        console.error(error)
        return []
    }}
export const getCustomerNotification = async() => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/notifications/customers',
            method: 'GET'
        });
        return res.data
    }catch(error){
        console.error(error)
        return []
    }
}
export const getProductNotification = async() => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/notifications/products',
            method: 'GET'
        });
        // console.log(res.data)
        return res.data
    }catch(error){
        console.error(error)
        return []
    }
}
export const readNotification = async(id) => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: `vendor/notifications/${id}/read`,
            method: 'POST'
        });
        console.log(data)
        return true
    }catch(error){
        console.error(error)
        return []
    }
}