import { useProductStore } from '~/stores/productStore';
import { fetchAllPosts, fetchAllArticle } from '~/composables/usePost';
import { useUserStore } from "~/stores/userStore";


export default defineNuxtPlugin(async (nuxtApp) => {
  const userStore = useUserStore();
  const productStore = useProductStore();
  await productStore.fetchProducts();
  fetchAllPosts(userStore.postPage)
  fetchAllArticle(userStore.articlePage)
});
