<template>
	<Header2 />
	<articleDetail :article = "article" />
	<Mainfooter :showBaloon="true" />
</template>
<script setup>
    import { useRoute } from '#vue-router';
    import {onMounted, ref } from 'vue';
	import { useUserStore } from "~/stores/userStore";

	const route = useRoute();
	const articleId = route.params.id;
	const article = ref(null);
	const userStore = useUserStore();

		const articleIndex = userStore.allPosts.findIndex(item => articleId == item.id);
		if (articleIndex !== -1){
			article.value = userStore.allArticles[articleIndex]
		}
		if (articleIndex == -1){
			article.value = userStore.allArticles[0]
		}

		// watch(() => articleId, () => {
		// 	const articleIndex = userStore.allPosts.findIndex(item => item.id == articleId);
		// if (articleIndex !== -1){
		// 	article.value = userStore.allArticles[articleIndex]
		// }
		// if (articleIndex == -1){
		// 	article.value = userStore.allArticles[0]
		// }
		// });

	
</script>