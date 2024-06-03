import {vendorUseApi} from './vendorApi.ts'

export const getWeeklyRevenue = async () => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/weekly_revenue',
            method: 'GET'
        });
        return res.data
    }catch(error){
        console.error(error)
        return []
    }
}
export const getTotalRevenue = async () => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/total_revenue',
            method: 'GET'
        });
        return res.data.total_amount
    }catch(error){
        console.error(error)
        return false
    }
}
export const getTransactions = async () => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/weekly_transactions',
            method: 'GET'
        });
        return res.data.total_transactions
    }catch(error){
        console.error(error)
        return false
    }
}
export const getCustomers = async () => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/weekly_total_users',
            method: 'GET'
        });
        return res.data.total_customers
    }catch(error){
        console.error(error)
        return false
    }
}
export const getNoSold = async () => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/weekly_products_sold',
            method: 'GET'
        });
        return res.data.total_products_sold
    }catch(error){
        console.error(error)
        return false
    }
}
export const getTopTransaction = async () => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/top_weekly_transactions',
            method: 'GET'
        });
        return res.data
    }catch(error){
        console.error(error)
        return []
    }
}

export const getRecentOrders = async () => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/recent_weekly_orders',
            method: 'GET'
        });
        console.log(res.data)
        return res.data
    }catch(error){
        console.error(error)
        return []
    }
}
export const getOutOfStock = async () => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/weekly_out_of_stock_products',
            method: 'GET'
        });
        console.log(res.data)
        return res.data
    }catch(error){
        console.error(error)
        return []
    }
}
export const getCountrySold = async () => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/weekly_orders_by_country',
            method: 'GET'
        });
        return res.data
    }catch(error){
        console.error(error)
        return []
    }
}