<template>
	<Header2 />
	<articleDetail :article = "article" :loading="loading" />
	<Mainfooter :showBaloon="true" />
</template>
<script setup>
    import { useRoute } from 'vue-router';
    import {onBeforeMount, ref } from 'vue';
	import { getArticleById} from '~/composables/usePost';

	const route = useRoute();
	const articleId = route.params.id;
	const article = ref(null);
	const loading = ref(true)

	onBeforeMount(async () => {
		article.value = await getArticleById(articleId)
		if (article.value){
			loading.value = false
		}
	})


	
</script>