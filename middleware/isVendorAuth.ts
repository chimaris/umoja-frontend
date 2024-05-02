import { useVendorStore } from "~/stores/vendorStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const vendorStore = useVendorStore()
  if (vendorStore.vendorIsLoggedIn) {
   return navigateTo('/vendor/dashboard/homepage')
  }

 
})