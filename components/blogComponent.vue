<template>
	<v-card
		width="100%"
		v-if="loaded"
		style="overflow: visible; background: transparent !important"
		flat
		class="bg-white parent-card rounded-lg mb-10 mb-md-2"
	>
		<v-img eager class="rounded-lg bg-grey-lighten-5" cover @click="$router.push(`/article_detail/${item.id}`)" width="100%" height="267" :src="item.cover_image"> </v-img>
		
		<p
			class="d-flex my-4 align-center"
			style="color: var(--carbon-4, #333); font-size: 14px; text-transform: capitalize; font-weight: 400; line-height: 180%; /* 25.2px */ letter-spacing: -0.14px"
		>
			<span class="mr-1">{{ "By " }}</span> <strong> {{item.vendor_firstname}} {{ item.vendor_lastname }}</strong>
			<v-icon icon="mdi mdi-circle" class="mx-2" size="5" color="#CECECE"></v-icon> {{ getdateRegistered(item.created_at) }}
		</p>
		<p style="font-weight: 600; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; font-size: 24px; line-height: 140%; cursor: pointer; color: #1e1e1e" class="text-wrap">{{ item.title }}</p>
		<!-- <p style="font-weight: 500; font-size: 16px; line-height: 140%; color: #333" class="mt-1 text-wrap">
			Lorem ipsum dolor sit amet consectetur. Nibh vitae facilisi suspendisse tempor non.
		</p> -->
		<div class="text-truncate" v-html="item.content" style="display: -webkit-box; height: 50px; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis"></div>
		<div class="d-flex align-center mt-4">
			<v-chip
				class="d-flex justify-center align-center"
				:color="getRandomColor"
				variant="tonal"
				size="x-small"
				style="font-size: 10px; font-weight: 600; border-radius: 6px; width: 97px; text-align: center; letter-spacing: 0.3px"
				>{{ item.category_name }}</v-chip
			>

			<v-icon icon="mdi mdi-circle" size="5" class="mx-2" color="#CECECE"></v-icon>
			<span
				style="color#333;
font-size: 14px;
font-weight: 400;
line-height: 140%; /* 19.6px */
letter-spacing: -0.14px;"
			>
				7 mins Read
			</span>
		</div>
	</v-card>
	<productloader :vendorShow="vendorShow" :short="short" v-else />
</template>
<script>
import { useLikedStore } from "~/stores/likedStore";
import { getdateRegistered } from "~/utils/date";

export default {
	props: ["item", "short", "category", "cover", "index", "showVendor", "showdisco"],
	computed: {
		likedStore() {
			return useLikedStore();
		},
		getRandomColor() {
		const randomIndex = Math.floor(Math.random() * this.Colors.length);
		return this.Colors[randomIndex];
		},
		discountColor() {
			var ty =
				this.category == "fashion"
					? "green"
					: this.category == "art"
					? "orange"
					: this.category == "cosmetics"
					? "orange"
					: this.category == "home decoration"
					? "green"
					: "green";
			return ty;
		},
		coverbol() {
			return this.cover !== undefined ? this.cover : true;
		},

		vendorShow() {
			return this.showVendor !== undefined ? this.showVendor : true;
		},

		short() {
			return this.short ? this.short : false;
		},
	},
	data() {
		return {
			loaded: false,
			Colors: ["#1273EB", "#F38218", "#00966D", "#1273EB"]
		};
	},
	mounted() {
		this.mockLoading();
	},
	methods: {
		mockLoading() {
			setTimeout(() => {
				this.loaded = true;
			}, 2000);
		},
		toggleLike(item, index) {
			this.likedStore.toggleLike(item, index);
		},
		isLiked(i) {
			return this.likedStore.isLiked(i);
		},
		filt(text) {
			var newText = text.length > 50 ? text.slice(0, 50) + "..." : text;
			return newText;
		},
	},
};
</script>
<style></style>
