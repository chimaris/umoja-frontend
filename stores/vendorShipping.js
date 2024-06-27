import { defineStore } from 'pinia'

export const useMyVendorShippingStore = defineStore({
  id: 'myVendorShippingStore',
  state: () => ({
    shippingZones: []
   }),
   persist: {
    enabled: true,
    storage: persistedState.localStorage,
    },

  })