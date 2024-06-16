import { defineStore } from 'pinia'

export const useMyVendorShippingStore = defineStore({
  id: 'myVendorShippingStore',
  state: () => ({
    deliveryAddress: null,
    pickupAddress: null,
    shippingZones: []
   }),
   persist: {
    enabled: true,
    storage: persistedState.localStorage,
    },
  actions: {
      saveDeliveryAdd(data){
        this.deliveryAddress = data
      },
      savePickupAdd(data){
        this.deliveryAddress = data
      }
  }
})
