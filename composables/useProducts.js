import { vendorUseApi } from "./vendorApi";
import { useProductStore } from "~/stores/productStore.js";
import {ref} from 'vue'


export const loaded = ref(false)
export const isLoading = ref(false)
export const articleLoading = ref(false)
export const popularLoaded = ref(false)


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
      popularLoaded.value = false
      const response = await api({
        url: 'home_popular_products',
        method: 'GET'
      });
      productStore.products.homePopular = response.data.data
    }catch(error){
      console.error(error)
      return []
    }finally{
      popularLoaded.value = true
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
      productStore.products.hotDeals = response.data.data
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
      articleLoading.value = false
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