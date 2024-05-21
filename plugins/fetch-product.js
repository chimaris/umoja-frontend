import { useProductStore } from '~/stores/productStore';
import { fetchAllPosts, fetchAllArticle } from '~/composables/usePost';


export default defineNuxtPlugin(async (nuxtApp) => {
  const productStore = useProductStore();
  await productStore.fetchProducts();
  fetchAllPosts()
  fetchAllArticle()
});
