<template>
	<Header2 />
	<PostDetail :post="post" :id="postId" :loading="loading"/>
	<Mainfooter :showBaloon="true" />
</template>
<script setup>
    import { useRoute } from '#vue-router';
    import {ref, onBeforeMount } from 'vue';
	import { getPostById } from '~/composables/usePost';

	const route = useRoute();
	const postId = route.params.id;
	const post = ref(null)
	const loading = ref(true)
	
		onBeforeMount(async () => {
			post.value = await getPostById(postId)
			if (post.value){
			loading.value = false
		}
		})
	
</script>