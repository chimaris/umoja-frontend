import { vendorUseApi } from "./vendorApi";
import { useProductStore } from "~/stores/productStore.js";
import {ref} from 'vue'

export const loadProduct = ref(false)
export const loaded = ref(false)
export const isLoading = ref(false)

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
  export const popularProducts = async() => {
    const api = useApi()
    const productStore = useProductStore()
    try{
      const response = await api({
        url: 'home_popular_products',
        method: 'GET'
      });
      productStore.products.homePopular = response.data.data
    }catch(error){
      console.error(error)
      return []
    }
   
  }
  export const promoProducts = async() => {
    const api = useApi()
    const productStore = useProductStore()
    try{
      const response = await api({
        url: 'products_on_promo',
        method: 'GET'
      });
      productStore.products.homePromo = response.data.data
    }catch(error){
      console.error(error)
      return []
    }
   
  }
  export const mostSellingProducts = async() => {
    const api = useApi()
    const productStore = useProductStore()
    try{
      isLoading.value = true
      const response = await api({
        url: 'most_selling_products',
        method: 'GET'
      });
      productStore.products.homeMostSelling = response.data.data
    }catch(error){
      console.error(error)
      return []
    }finally{
      isLoading.value = false
    }
   
  }
  export const latestArticles = async() => {
    const api = useApi()
    const productStore = useProductStore()
    try{
      const response = await api({
        url: 'latest_articles',
        method: 'GET'
      });
      productStore.topArticle = response.data.data
    }catch(error){
      console.error(error)
      return []
    }
   
  }
  export const bestSellingStores = async(id, category) => {
    const api = useApi()
    const productStore = useProductStore()
    try{
      loaded.value = false
      const response = await api({
        url: `stores?category_id=${id}`,
        method: 'GET'
      });
      productStore.bestSelling[category] = response.data.data
    }catch(error){
      console.error(error)
      return []
    }finally{
      loaded.value = true
    }
   
  }