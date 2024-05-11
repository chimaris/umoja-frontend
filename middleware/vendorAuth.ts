import { useVendorStore } from "~/stores/vendorStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const vendorStore = useVendorStore()
  if (!vendorStore.vendorIsLoggedIn ) {
   return navigateTo('/vendor/login')
  }
  if (!vendorStore.vendorCleared && to.path !== '/vendor/dashboard/Homepage' && to.path !== '/vendor/dashboard/Profile Setup'){
    return navigateTo('/vendor/dashboard/Homepage')
  }
 
})