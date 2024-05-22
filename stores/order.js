import {defineStore} from "pinia";
import {vendorUseApi} from '~/composables/vendorApi'

export const useOrderStore = defineStore('order', {
    state: () => ({
        orderDetail: [],
        allOrder: []
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
}
    }
})