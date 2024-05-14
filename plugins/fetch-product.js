import { useProductStore } from '~/stores/productStore';



export default defineNuxtPlugin(async (nuxtApp) => {
  const productStore = useProductStore();
  await productStore.fetchProducts();
});
