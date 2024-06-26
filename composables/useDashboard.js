import {vendorUseApi} from './vendorApi.ts'



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

export const getTotalFilteredValues = async (filter, date) => {
    const api = vendorUseApi()
    let url;
    switch (filter) {
        case 'This Year':
            const year = new Date().getFullYear()
            url = `vendor/vendor_allstats?filter=year&year=${year}`
            break;
        case 'This Month':
            url = `vendor/vendor_allstats?filter=month&month=${new Date().getMonth() + 1}`
            break;
        case 'Last 7 days':
            url = `vendor/vendor_allstats?filter=last7days`
            break;
        case 'Date':
            if (date) {
                url = `vendor/vendor_allstats?filter=custom&start_date=${date}`
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

    
