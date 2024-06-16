import { useCartStore } from "~/stores/cartStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const cartStore = useCartStore();
    if (to.path == '/order/cart' && cartStore.totalCartItems == 0){
        return navigateTo('/market_place')
    }

    if (to.path == '/order/checkout' && cartStore.totalCheckoutItems == 0){
        return navigateTo('/market_place')
    }
})
