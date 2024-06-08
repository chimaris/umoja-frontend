import { vendorUseApi } from "./vendorApi";
import { useProductStore } from "~/stores/productStore.js";
import {ref} from 'vue'

export const loadProduct = ref(false)

export const discoverPageProducts = async(page) => {
    const api = useApi()
    const productStore = useProductStore()
    loadProduct.value = true
    try{
      const response = await api({
        url: `allproducts/?page=${page}`
      });
      const data = response.data.data
      productStore.products.popular = [...productStore.products.popular, ...data]
      productStore.discoveryCurrentPage = response.data.meta.current_page
      productStore.discoveryLastPage = response.data.meta.last_page
      loadProduct.value = false
    }catch(error){
      console.error(error)
    }finally{
        loadProduct.value = false
    }
   
  }
  export const productDetail = async(id) => {
    const api = useApi()
   try {
      const res = await api({
        url: `vendor/products/${id}/show_product`,
        method: 'GET'
      });
    return res.data.data
   }catch(err){
    console.error(err)
    return null
   }
  }