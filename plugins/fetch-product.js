import { useProductStore } from '~/stores/productStore';
import { useCartStore } from '~/stores/cartStore';

export default async ({ app }) => {
  const productStore = useProductStore();
  await productStore.fetchProducts();
};