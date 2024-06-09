import { vendorUseApi } from "./vendorApi";
import {ref} from 'vue'

export const loading = ref(false)
export const getNotification = async(tab) => {
    const api = vendorUseApi()
    try{
        loading.value = true 
        const res = await api({
            url: 'vendor/notifications',
            method: 'GET'
        });
        return res.data
    }catch(error){
        console.error(error)
        return []
    }finally{
        loading.value = false
    }
}
export const getOrderNotification = async() => {
    const api = vendorUseApi()
    try{
        loading.value = true 
        const res = await api({
            url: 'vendor/notifications/orders',
            method: 'GET'
        });
        return res.data
    }catch(error){
        console.error(error)
        return []
    }finally{
        loading.value = false
    }
}
export const getReviewNotification = async() => {
    const api = vendorUseApi()
    try{
        loading.value = true 
        const res = await api({
            url: 'vendor/notifications/reviews',
            method: 'GET'
        });
        return res.data
    }catch(error){
        console.error(error)
        return []
    }finally{
        loading.value = false
    }
}
export const getCustomerNotification = async() => {
    const api = vendorUseApi()
    try{
        loading.value = true 
        const res = await api({
            url: 'vendor/notifications/customers',
            method: 'GET'
        });
        return res.data
    }catch(error){
        console.error(error)
        return []
    }finally{
        loading.value = false
    }
}