import { useProductStore } from '~/stores/productStore';

export default async ({ app }) => {
  const productStore = useProductStore();
  await productStore.fetchProducts();
};