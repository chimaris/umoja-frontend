import { vendorUseApi } from "./vendorApi";
import { useProductStore } from "~/stores/productStore.js";
import {ref} from 'vue'

export const loadProduct = ref(false)

export const popularProducts = async (page) => {
    const api = useApi()
    const productStore = useProductStore()
    loadProduct.value = true
    try{
      const response = await api({
        url: `dis_popular_products/?page=${page}`,
        method: 'GET'
      });
      const data = response.data.data
      productStore.products.popular = [...productStore.products.popular, ...data]
      productStore.popCurrentPage = response.data.meta.current_page
      productStore.popLastPage = response.data.meta.last_page
      loadProduct.value = false
    }catch(error){
      console.error(error)
    }finally{
        loadProduct.value = false
    }
}
export const topSelling = async (page) => {
    const api = useApi()
    const productStore = useProductStore()
    loadProduct.value = true
    try{
      const response = await api({
        url: `top_selling_products/?page=${page}`,
        method: 'GET'
      });
      const data = response.data.data
      productStore.products.mostSelling = [...productStore.products.mostSelling, ...data]
      productStore.mostCurrentPage = response.data.meta.current_page
      productStore.mostLastPage = response.data.meta.last_page
      loadProduct.value = false
    }catch(error){
      console.error(error)
    }finally{
        loadProduct.value = false
    }
}
export const promo = async (page) => {
    const api = useApi()
    const productStore = useProductStore()
    loadProduct.value = true
    try{
      const response = await api({
        url: `dis_products_on_promo/?page=${page}`,
        method: 'GET'
      });
      const data = response.data.data
      productStore.products.sale = [...productStore.products.sale, ...data]
      productStore.promoCurrentPage = response.data.meta.current_page
      productStore.promoLastPage = response.data.meta.last_page
      loadProduct.value = false
    }catch(error){
      console.error(error)
    }finally{
        loadProduct.value = false
    }
}