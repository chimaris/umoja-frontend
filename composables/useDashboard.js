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
export const getTopProducts = async () => {
    const api = vendorUseApi()
    try{
        const res = await api({
            url: 'vendor/top_weekly_products',
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

export const getFilteredValues = async (filter, date) => {
    const api = vendorUseApi()
    let url;
    switch (filter) {
        case 'This Year':
            const year = new Date().getFullYear()
            url = `vendor/vendor_stats?filter=year&year=${year}`
            break;
        case 'This Month':
            url = `vendor/vendor_stats?filter=month&month=${new Date().getMonth() + 1}`
            break;
        case 'Last 7 days':
            url = `vendor/vendor_stats?filter=last7days`
            break;
        case 'Date':
            if (date) {
                url = `vendor/vendor_stats?filter=custom&start_date=${date}`
            } else {
                throw new Error('Date filter selected but no date provided')
            }
            break;
        default:
            throw new Error('Invalid filter')
        }
    
    try {
        const res = await api({
            url: url,
            method: 'GET'
        });
            return res.data
        } catch (err) {
            console.error(err)
            return []
        }
    }
    
