import {defineStore} from "pinia";
import {vendorUseApi} from '~/composables/vendorApi'

export const useOrderStore = defineStore('order', {
    state: () => ({
        orderDetail: [],
        allOrder: [],
        revenue: []
    }),
    persist: {
        enabled: true,
        storage: persistedState.localStorage,
    },
    actions: {
        async getOrder(){
            const api = vendorUseApi();
	try{
		const response = await api({
			url : 'vendor/orders',
			method: 'GET'
		});
		this.allOrder = response.data.data
        return 
	}catch(error){
		console.error(error);
	}
},
async getRevenues(){
    const api = vendorUseApi()
    const year = new Date().getFullYear()
        try{
            const res = await api({
                url: `vendor/revenue_growth?filter=year&years=${year}`,
                method: 'GET'
            });
            this.revenue = res.data
        }catch(error){
            console.error(error)
        }
}
    }
})