<template>
	<v-card
		max-width="290"
		width="100%"
		v-if="loaded"
		style="overflow: visible; background: transparent !important"
		flat
		class="bg-white parent-card rounded-lg mb-2"
	>
		<v-img
			class="rounded-lg bg-grey-lighten-5"
			:cover="coverbol"
			v-if="item.photo == null"
			@click="$router.push(`/product_page/${item.id}`)"
			eager
			width="100%"
			:height="$vuetify.display.mobile ? '200px' : '236px'"
			src="https://res.cloudinary.com/payhospi/image/upload/v1714649462/umoja/download_1_dwnmbf.png"
		>
			<v-btn
				@click.self="toggleLike(item, index)"
				:ref="item.name + index"
				rounded="xl"
				icon
				style="position: absolute; right: 12px; top: 12px"
				class="pa-0"
				flat
				size="x-small"
			>
				<v-icon size="15" :color="!isLiked(index) ? '#1C274C' : 'red '" :icon="!isLiked(index) ? 'mdi mdi-heart-outline' : 'mdi mdi-heart'"></v-icon
			></v-btn>
		</v-img>
		<v-img
			class="rounded-lg bg-grey-lighten-5"
			cover
			v-else-if="item.photo.includes(',')"
			@click="$router.push(`/product_page/${item.id}`)"
			eager
			width="100%"
			:height="$vuetify.display.mobile ? '200px' : '236px'"
			:src="item.photo.split(',')[0]"
		>
			<v-btn
				@click="toggleLike(item, index)"
				:ref="item.name + index"
				rounded="xl"
				icon
				style="position: absolute; right: 12px; top: 12px"
				class="pa-0"
				flat
				size="x-small"
			>
				<v-img
					width="15"
					height="15"
					:color="!isLiked(index) ? '#1C274C' : 'red'"
					src="https://res.cloudinary.com/payhospi/image/upload/v1716290614/umoja/like-icon.svg"
				/>
				<!-- <v-icon size="15" :color="!isLiked(index) ? '#1C274C' : 'red '" :icon="!isLiked(index) ? 'mdi mdi-heart-outline' : 'mdi mdi-heart'"></v-icon> -->
			</v-btn>
		</v-img>
		<v-img
			class="rounded-lg bg-grey-lighten-5"
			cover
			v-else
			@click="$router.push(`/product_page/${item.id}`)"
			eager
			width="100%"
			:height="$vuetify.display.mobile ? '200px' : '236px'"
			:src="item.photo"
		>
			<v-btn
				@click="toggleLike(item, index)"
				:ref="item.name + index"
				rounded="xl"
				icon
				style="position: absolute; right: 12px; top: 12px"
				class="pa-0"
				flat
				size="x-small"
			>
				<v-img
					width="15"
					height="15"
					:color="!isLiked(index) ? '#1C274C' : 'red'"
					src="https://res.cloudinary.com/payhospi/image/upload/v1716290614/umoja/like-icon.svg"
				/>
				<!-- <v-icon size="15" :color="!isLiked(index) ? '#1C274C' : 'red '" :icon="!isLiked(index) ? 'mdi mdi-heart-outline' : 'mdi mdi-heart'"></v-icon> -->
			</v-btn>
		</v-img>
		<div
			@click="$router.push(`/vendor_page/${item.vendor_id}`)"
			class="mt-3 d-block d-md-none"
			:style="{ fontSize: $vuetify.display.mobile ? '12px' : '14px', fontWeight: $vuetify.display.mobile ? 500 : 600 }"
			style="cursor: pointer; color: #1e1e1e; letter-spacing: -0.14px"
		>
			<span class="mr-2">
				{{ item.vendor_firstname }} {{ item.vendor_lastname }}
				<span style="font-size: 1rem; margin-left: 5px" :class="getCountryIconClass(item.vendor_country)"></span>
			</span>
			<v-icon icon="mdi mdi-information-outline" color="#969696" />
		</div>
		<p
			@click="$router.push(`/product_page/${item.id}`)"
			style="font-weight: 600; font-size: 14px; line-height: 18px; cursor: pointer; color: #000000"
			class="mt-1 mt-md-3 text-wrap"
		>
			{{ filt(item.name) }}
		</p>
		<p class="mt-1" style="font-weight: 500; font-size: 12px; line-height: 15px; color: #000000">
			{{ item.category_name }}
		</p>
		<p style="font-weight: 600; font-size: 10px; line-height: 10px; color: #000000" class="d-flex mb-1 pb-0 pt-1 align-center">
			<v-rating readonly model-value="4" color="grey-lighten-2" active-color="#E7CE5D" class="rts" density="compact" size="x-small"></v-rating
			><span style="margin-left: 3px; margin-top: 3px" :style="{ fontSize: $vuetify.display.mobile ? '8px' : '12px' }">(65)</span>
		</p>
		<v-chip
			v-if="item.deliv"
			class="mb-2"
			variant="elevated"
			size="x-small"
			color="#1273EB"
			style="font-size: 10px; font-weight: 500; border-radius: 6px; letter-spacing: 0.5px"
			>FREE DELIVERY</v-chip
		>
		<div v-if="vendorShow" class="d-none d-md-block">
			<div class="d-flex mt-2">
				<v-avatar @click="$router.push(`/vendor_page/${item.vendor_id}`)" size="40"><v-img :src="item.vendor_profile_photo"></v-img></v-avatar>
				<div style="cursor: pointer" @click="$router.push(`/vendor_page/${item.vendor_id}`)" class="ml-2">
					<p style="color: #1e1e1e; font-size: 14px; font-weight: 600; letter-spacing: -0.14px">
						{{ item.vendor_firstname }} {{ item.vendor_lastname }}
					</p>
					<p style="color: #969696; font-size: 12px; font-weight: 500; letter-spacing: -0.12px">{{ item.vendor_country }} <span style="font-size: 1rem; margin-left: 5px" :class="getCountryIconClass(item.vendor_country)"></span></p>
				</div>
			</div>
			<v-divider color="#a4a4a4" class="mt-4"></v-divider>
		</div>
		<div class="d-flex flex-column flex-md-row justify-md-space-between align-md-end">
			<div :class="showdisco ? 'mt-0' : 'mt-3'">
				<h4 v-if="item.compare_at_price" class="text-decoration-line-through priceClass" >{{formattedPrice(item.compare_at_price)}}</h4>
				<h1 :style="{ fontSize: $vuetify.display.mobile ? '14px' : '20px' }" style="color: #1a1d1f" class="priceClass mb-1">
					{{ formattedPrice(item.price) }}
				</h1>
				<div v-if="showdisco" class="d-flex align-center">
					<p style="color: var(--carbon-3, #969696); font-weight: 600; line-height: 17.673px; text-decoration: line-through">€15,000.00</p>
					<v-chip style="font-size: 9.429px; font-weight: 600" class="ml-1" size="x-small" :color="discountColor" rounded="lg"> 20% OFF </v-chip>
				</div>
			</div>
			<v-btn
				v-if="!role"
				@click="addToCart(item)"
				rounded="xl"
				style="border: 0.66px solid #ced2d6; border-radius: 6px"
				:width="$vuetify.display.mobile ? '100%' : 106"
				:height="$vuetify.display.mobile ? 40 : 28"
				color="green"
				variant="outlined"
				flat
				class="parent-btn ml-0 ml-md-2 mt-2 mt-md-0"
			>
				<span style="color: #1a1d1f; font-weight: 600" :style="{ fontSize: $vuetify.display.mobile ? '12px' : '14px' }" class="smallBtn">
					{{ isInCart(item) ? "Added to Cart" : "Add to cart" }}
				</span>
			</v-btn>
		</div>
	</v-card>
	<productloader :vendorShow="vendorShow" :short="short" v-else />
</template>
<script>
import { useLikedStore } from "~/stores/likedStore";
import { formattedPrice } from "~/utils/price";
import { countryCodes } from "~/utils/countryapi";
import { useCartStore } from "~/stores/cartStore";
import { useUserStore } from "~/stores/userStore";

export default {
	props: ["item", "short", "category", "cover", "index", "showVendor", "showdisco", "role"],
	computed: {
		likedStore() {
			return useLikedStore();
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
		};
	},
	mounted() {
		this.mockLoading();
	},

	methods: {
		isInCart(product) {
			const cartStore = useCartStore();
			const index = cartStore.items.findIndex((item) => item.id == product.id);
			if (index !== -1) {
				return true;
			} else {
				return false;
			}
		},
		getCountryIconClass(country) {
			const countryCode = countryCodes[country];
			if (!countryCode) {
				console.error("Invalid or missing country code");
				return ""; // Or provide a default class
			}
			return `fi fi-${countryCode.toLowerCase()}`;
		},
		async addToCart(item) {
			const userStore = useUserStore();

			const cartStore = useCartStore();
			if (userStore.getIsLoggedIn) {
				const index = cartStore.items.findIndex((cart) => cart.id == item.id);
				if (index !== -1) {
					cartStore.clearItem(item.id);
					return;
				}
				cartStore.addItem(item, 1);
			} else {
				this.$router.push("/user/login");
			}
		},
		mockLoading() {
			setTimeout(() => {
				this.loaded = true;
			}, 1000);
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
