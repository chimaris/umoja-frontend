<template>
	<v-container class="parent-container" :style="'max-width:' + maxw">
		<div class="d-flex my-4 justify-space-between align-center">
			<div
				class=""
				style="
					color: var(--magnetic-green-4, #000);
					font-size: 24px;
					font-weight: 600;
					width: auto;
					min-width: 155px;
					line-height: 120%; /* 16.8px */
					letter-spacing: -0.24px;
				"
			>
				{{ title }}
			</div>
			<v-btn @click="$router.push('/post_page')" class="mx-0 px-0" color="blue" size="small" style="" variant="text" rounded="xl">
				See all posts <v-icon class="ml-1" icon="mdi mdi-arrow-right"></v-icon>
			</v-btn>
		</div>
		<v-divider style="flex: auto" class="mb-4"></v-divider>
		<div
			dense
			id="homepage"
			style="width: 100%; position: relative; height: 600px !important; background-color: #fff"
			:style="'max-width:' + maxw2 + '!important'"
			class="rower my-8 d-none d-md-block"
		>
			<div class="d-inline-block mr-2" style="width: 275px" v-for="(n, i) in items" :key="i" cols="6" lg="3">
				<postComponent :index="i" :load="load" :item="n" :likedPost="likedPosts[n.id]" @likePost="likedPosts[n.id] = true" @unLikePost="likedPosts[n.id] = false" />
			</div>	
		</div>

		<!-- For mobile View -->
		<div class="d-block d-md-none">
			<v-row dense>
				<v-col v-for="(n, i) in items" :key="i" cols="12" class="mb-4">
					<postComponent :load="load" @likePost="likedPosts[n.id] = true" @unLikePost="likedPosts[n.id] = false" :likedPost="likedPosts[n.id]" :index="i" :item="n" />
				</v-col>
			</v-row>
			<v-btn
				@click="$router.push('/post_page')"
				block
				class="d-flex d-md-none mt-8"
				color="#333"
				size="large"
				style="border: 1px solid #333; font-weight: 500; color: #333"
				variant="outlined"
				rounded="xl"
			>
				<span style="font-size: 14px">See All</span> <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
			</v-btn>
		</div>
	</v-container>
</template>
<style>
/* .divbtn{
transition: all 0.3s ease-in-out;
}
.parent-container:hover .divbtn .v-btn__content {
color: #fff!important;
}
.parent-container:hover .divbtn {
background-color: #333;
border: none!important;
} */
</style>
<script>
import { useProductStore } from "~/stores/productStore.js";
import { hasLiked } from "~/composables/useLike";
import { useUserStore } from "~/stores/userStore";

export default {
	props: ["showVendor", "load", "vendor", "items", "title", "maxwidth"],
	data(){
		return{
			likedPosts: []
		}
	},
	async mounted(){
		if(useUserStore().isLoggedIn){
			for (const post of this.items) {
				this.likedPosts[post.id] = await hasLiked(post.id)
			}
		}
	},
	computed: {
		maxw() {
			return this.maxwidth ? this.maxwidth : "1400px";
		},
		maxw2() {
			return this.maxwidth ? "1340px" : "1168px";
		},
		vendorBol() {
			return this.vendor ? this.vendor : false;
		},
		productStore() {
			return useProductStore();
		},
	},
	methods: {
		filt(text) {
			var newText = text.length > 50 ? text.slice(0, 50) + "..." : text;
			return newText;
		},
	},
};
</script>
