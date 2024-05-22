<template>
	<Header2 />
	<articleDetail :article = "article" />
	<Mainfooter :showBaloon="true" />
</template>
<script setup>
    import { useRoute } from 'vue-router';
    import {onMounted, ref } from 'vue';
	import { useUserStore } from "~/stores/userStore";

	const route = useRoute();
	const articleId = route.params.id;
	const article = ref(null);
	const userStore = useUserStore();

	article.value = userStore.allArticles.find(art => art.id == articleId);
	// onMounted(() => {
	// 	getArticle(articleId)
	// })


	
</script>