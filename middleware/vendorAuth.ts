import { useVendorStore } from "~/stores/vendorStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const vendorStore = useVendorStore()
  if (!vendorStore.vendorIsLoggedIn || !vendorStore.verified) {
   return navigateTo('/vendor/login')
  }
  if (!vendorStore.vendor.complete_setup){
      if (to.path !== '/vendor/dashboard/Profile Setup'){
        return navigateTo('/vendor/dashboard/Profile Setup')
      }
    
  }

 
})