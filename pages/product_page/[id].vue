<template>
    <Header2 />
    <Productpage :product= "product" :review="review"/>
    <Mainfooter />
</template>

<script setup>
    import {useProductStore} from '~/stores/productStore';
    import { useRoute, useRouter } from '#vue-router';
    import {onMounted, ref } from 'vue';
    import {getReview} from '~/composables/useReview'

    const route = useRoute();
    const productId = route.params.id;
    const productStore = useProductStore()
    const product = ref([]);
    const review = ref([])
    const router = useRouter()

  
    onMounted(async () => {
        const itemIndex = productStore.allProducts.findIndex(product => product.id == productId);
        if (itemIndex == -1){
            router.push('/')
        }
        if (itemIndex !== -1) {
            product.value = productStore.allProducts[itemIndex]
            review.value = await getReview(product.value.id)
        }
        
    })
  

</script>