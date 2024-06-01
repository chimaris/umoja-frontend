<template>
	<Header2 @searchProduct="searchProduct" />
	<Discoverypage />
	<Mainfooter :showBaloon="true" />
</template>
<script setup>
import { useProductStore } from "~/stores/productStore";
function searchProduct(term){
	console.log("ggg", term)
}
</script>
