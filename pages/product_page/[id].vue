<template>
    <Header2 />
    <Productpage :product= "product" :loading="loading" :review="review"/>
    <Mainfooter />
</template>

<script setup>
    import { useRoute, useRouter } from '#vue-router';
    import {onMounted, ref } from 'vue';
    import {getReview} from '~/composables/useReview'
    import { productDetail } from '~/composables/useProducts';

    const route = useRoute();
    const productId = route.params.id;
    const product = ref([]);
    const review = ref([])
    const router = useRouter()
    const loading = ref(true)

    onMounted(async () => {
        product.value = await productDetail(productId)
        review.value = await getReview(product.value.id)
        if (product.value){
            loading.value = false
        }
        if (!product.value){
            router.push('/')
        }
    });

  

</script>