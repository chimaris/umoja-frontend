import {defineStore} from "pinia";
import {vendorUseApi} from '~/composables/vendorApi'

export const useSaleStore = defineStore('sale', {
    state: () => ({
        allSales: []
    }),
    persist: {
        enabled: true,
        storage: persistedState.localStorage,
    },
    actions: {
        async getSales(){
            const api = vendorUseApi()
            try{
                const res = await api({
                    url: 'vendor/sold_products',
                    method: 'GET'
                });
                console.log(res)
            }catch(error){
                console.error(error)
            }
        }
    }
})