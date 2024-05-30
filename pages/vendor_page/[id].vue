<template>
	<Header2 />
	<Vendorpage @refresh-vendor="refreshData()" :fetchingAll="fetchingAll" :vendor="vendorDetails" :posts="vendorPost" :articles="vendorArticles" :products="vendorProducts" :promos="vendorPromos" />
	<Mainfooter />
</template>
<script setup>
    import { useRoute } from '#vue-router';
    import {ref, onBeforeMount } from 'vue';
	import {fetchProducts, fetchDetails, fetchPromos, fetchPosts, fetchArticles  } from '~/composables/useVendorPage'

	const route = useRoute();
	const vendorId = route.params.id;
	const vendorPost = ref(null)
	const vendorArticles = ref(null)
	const vendorPromos = ref(null)
	const vendorProducts = ref(null)
	const vendorDetails = ref(null)
	const fetchingAll = ref(true)

	
		onBeforeMount(async () => {
			vendorArticles.value = await fetchArticles(vendorId)
			vendorPost.value = await fetchPosts(vendorId)
			vendorProducts.value = await fetchProducts(vendorId)
			vendorPromos.value = await fetchPromos(vendorId)
			vendorDetails.value = await fetchDetails(vendorId)
			if (vendorArticles.value && vendorPost.value && vendorProducts.value && vendorPromos.value && vendorDetails.value){
				fetchingAll.value = false
			}
		})
		async function refreshData(){
			vendorDetails.value = await fetchDetails(vendorId)
		}
	
</script>