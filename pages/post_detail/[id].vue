<template>
	<Header2 />
	<PostDetail :post="post" :id="postId"/>
	<Mainfooter :showBaloon="true" />
</template>
<script setup>
    import { useRoute } from '#vue-router';
    import {ref, onBeforeMount } from 'vue';
	import { getPostById } from '~/composables/usePost';

	const route = useRoute();
	const postId = route.params.id;
	const post = ref(null)
	
		onBeforeMount(async () => {
			post.value = await getPostById(postId)
		})
	
</script>