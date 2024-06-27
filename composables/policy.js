import { vendorUseApi } from "./vendorApi"
import { useVendorStore } from "~/stores/vendorStore";

export const usePolicy = async() => {
  const api = vendorUseApi()
  try{
    const res = await api({
      url: 'vendor/policies',
      method: 'GET'
    });
    return res.data.data
  }catch(err){
    console.error(err)
    return []
  }
}
export const savePolicy = async(data, loading) => {
  const api = vendorUseApi()
  const vendorStore = useVendorStore()
  try{
    loading.value = true
    await api({
      url: 'vendor/policies',
      method: 'POST',
      data: data
    });
    await vendorStore.getUser(vendorStore.vendor.id)
    return {success: true}
  }catch(err){
    let errorMessage = "An error occurred. Please try again later."
    if (err.response) {
      errorMessage= err.response.data.message || 'An error occurred while setting up policy.';
      } else if (err.request) {
          errorMessage  = 'No response received from server. Please try again later.';
      }
      return {success: false, message: errorMessage}
  }finally{
    loading.value = false
  }
}
export const editPolicy = async(id, data, loading) => {
  const api = vendorUseApi()
  const vendorStore = useVendorStore()
  try{
    loading.value = true
    const res = await api({
      url: `vendor/policies/${id}`,
      method: 'POST',
      data: {
        _method: 'PUT',
        ...data
      }
    });
 
    await vendorStore.getUser(vendorStore.vendor.id)
    return {success: true}
  }catch(err){
    let errorMessage = "An error occurred. Please try again later."
    if (err.response) {
      errorMessage= err.response.data.message || 'An error occurred while setting updating policy.';
      } else if (err.request) {
          errorMessage  = 'No response received from server. Please try again later.';
      }
      return {success: false, message: errorMessage}
  }finally{
    loading.value = false
  }
}