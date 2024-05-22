import { useVendorStore } from "~/stores/vendorStore";
import {useCreateStore} from '~/stores/createPostStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const vendorStore = useVendorStore()
  if (!vendorStore.vendorIsLoggedIn || !vendorStore.verified) {
   return navigateTo('/vendor/login')
  }
  if (vendorStore.vendor.complete_setup !== 1){
      if (to.path !== '/vendor/dashboard/Profile Setup'){
        return navigateTo('/vendor/dashboard/Profile Setup')
      }
    
  }
  if (to.path == '/vendor/dashboard/Posts'){
    const postStore = useCreateStore()
    if (postStore.posts.length == 0){
      return navigateTo('/vendor/dashboard/Create Post')
    }
 
  }
  if (to.path == '/vendor/dashboard/Articles'){
    const postStore = useCreateStore()
    if (postStore.articles.length == 0){
      return navigateTo('/vendor/dashboard/Create Article')
    }
 
  }

 
})