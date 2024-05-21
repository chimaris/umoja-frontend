<template>
	<Header2 />
	<PostDetail :post="post"/>
	<Mainfooter :showBaloon="true" />
</template>
<script setup>
    import { useRoute } from '#vue-router';
    import {onMounted, ref } from 'vue';
	import { useUserStore } from "~/stores/userStore";

	const route = useRoute();
	const postId = route.params.id;
	const post = ref(null);
	const userStore = useUserStore();

		const postIndex = userStore.allPosts.findIndex(item => item.id == postId);
		if (postIndex !== -1){
			post.value = userStore.allPosts[postIndex]
		}
	
</script>