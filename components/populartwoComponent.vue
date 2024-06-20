<template>
	<v-card
		width="100%"
		v-if="popularLoaded"
		:style="{ overflow: $vuetify.display.mobile ? 'scroll' : 'hidden' }"
		style="border-radius: 15px"
		flat
		color="#F8F8F8"
		class="parent-card rounded-lg"
	>
		<v-img eager class="bg-grey-lighten-2" cover width="100%" :height="'313'" :src="item.photo.split(',')[0]"> </v-img>
		<div class="d-flex flex-row flex-md-column justify-space-between pa-3 pa-md-6">
			<div class="d-flex align-center justify-space-between">
				<div>
					<p
						@click="$router.push(`/product_page/${item.id}`)"
						style="font-weight: 600; line-height: 18px; cursor: pointer; color: #000000"
						:style="{ fontSize: $vuetify.display.mobile ? '16px' : '20px' }"
						class="mt-2"
					>
						{{ filt(item.name) }}
					</p>
					<p style="color: #969696; font-size: 14px; font-weight: 500; letter-spacing: -0.42px" class="mt-1">
						Sold by
						<span style="color: #1273eb; text-transform: capitalize; font-weight: 600">{{item.vendor_firstname}} {{ item.vendor_lastname }}</span>
					</p>
				</div>
				<!-- <div v-if="showBid">
					<p
						@click="$router.push('/product_page')"
						style="font-weight: 600; font-size: 20px; line-height: 18px; cursor: pointer; color: #000000"
						class="mt-2"
					>
						€ 2430.00
					</p>
					<p style="color: #969696; font-size: 12px; font-weight: 500; letter-spacing: 1.26px; text-transform: uppercase" class="mt-1">Current Bid</p>
				</div> -->
			</div>

			<div class="d-flex mt-4 align-end">
				<v-btn
					height="44"
					width="161"
					@click="$router.push(`/product_page/${item.id}`)"
					rounded="xl"
					style="border-radius: 6px"
					color="green"
					flat
					class="parent-btn"
				>
					<span style="font-weight: 600" class="">{{ showBid ? "Bid" : "Shop" }} Now</span>
				</v-btn>
			</div>
		</div>
	</v-card>
	<popularloader v-else />
</template>
<script>
import { useLikedStore } from "~/stores/likedStore";
import { popularLoaded } from "~/composables/useProducts";

export default {
	props: ["item", "index", "showBid"],
	computed: {
		likedStore() {
			return useLikedStore();
		},
	},
	methods: {
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
