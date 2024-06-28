import { useVendorStore } from "~/stores/vendorStore";
import {useEditVendorStore} from '~/stores/editProduct';
import {useCreateStore} from '~/stores/createPostStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const vendorStore = useVendorStore()
  if (!vendorStore.vendorIsLoggedIn || !vendorStore.verified) {
   return navigateTo('/vendor/login')
  }

  if (vendorStore.vendor.complete_setup !== 1 || 
    !vendorStore.vendor.vendor_details?.policy || 
    !vendorStore.vendor.vendor_details?.shipping_method) {
  // Allow navigation only to Profile Setup or Settings (including optional parameters)
  if (!to.path.startsWith('/vendor/dashboard/Profile Setup') && 
      !to.path.startsWith('/vendor/dashboard/Settings')) {
    // Redirect based on missing information
    if (vendorStore.vendor.complete_setup !== 1) {
      return navigateTo('/vendor/dashboard/Profile Setup');
    } else if (!vendorStore.vendor.vendor_details?.policy) {
      return navigateTo('/vendor/dashboard/Settings/Policies');
    }
  }
}
  if (to.path == '/vendor/dashboard/Posts'){
    if (vendorStore.vendor.vendor_details?.post_count == 0){
      return navigateTo('/vendor/dashboard/Create Post')
    }
 
  }
  if (to.path == '/vendor/dashboard/Articles'){
    if (vendorStore.vendor.vendor_details?.article_count == 0){
      return navigateTo('/vendor/dashboard/Create Article')
    }
 
  }
  if (to.path == '/vendor/dashboard/Edit%20Product'){
    if (!useEditVendorStore().currentEditProduct){
      return navigateTo('/vendor/dashboard/Products')
    }
 
  }
  if (to.path == '/vendor/dashboard/Edit%20Article'){
    const postStore = useCreateStore()
    if (!postStore.articleToEdit){
      return navigateTo('/vendor/dashboard/Articles')
    }
 
  }
  if (to.path == '/vendor/dashboard/Edit%20Post'){
    const postStore = useCreateStore()
    if (!postStore.postToEdit){
      return navigateTo('/vendor/dashboard/Posts')
    }
 
  }

 
})