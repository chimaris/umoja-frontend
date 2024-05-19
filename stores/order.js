import {defineStore} from "pinia";
import {vendorUseApi} from '~/composables/vendorApi'

export const useOrderStore = defineStore('order', {
    state: () => ({
        orderDetail: []
    }),
    persist: {
        enabled: true,
        storage: persistedState.localStorage,
    },
})