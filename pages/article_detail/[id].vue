<template>
	<Header2 />
	<articleDetail :article = "article" />
	<Mainfooter :showBaloon="true" />
</template>
<script setup>
    import { useRoute } from 'vue-router';
    import {onBeforeMount, ref } from 'vue';
	import { getArticleById} from '~/composables/usePost';

	const route = useRoute();
	const articleId = route.params.id;
	const article = ref(null);

	onBeforeMount(async () => {
		article.value = await getArticleById(articleId)
	})


	
</script>