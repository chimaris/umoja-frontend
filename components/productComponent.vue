<template>
	<v-card
		max-width="290"
		width="100%"
		height="100%"
		v-if="!loading"
		style="overflow: visible; background: transparent !important"
		flat
		:style="{padding: $vuetify.display.mobile ? '0': '4px'}"
		class="bg-white parent-card rounded-lg mb-2"
	>
		<v-img
			class="rounded-lg bg-grey-lighten-5"
			cover
			v-if="item?.photo?.includes(',')"
			@click="role ? '' : $router.push(`/product_page/${item?.id}`)"
			eager
			width="100%"
			:height="$vuetify.display.mobile ? '200px' : '236px'"
			:src="getCloudinaryImageUrl(item?.photo.split(',')[0], 800)"
		>
			<v-btn
				@click="toggleLike(item, index)"
				:ref="item?.name + index"
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
					:src="getCloudinaryImageUrl('https://res.cloudinary.com/payhospi/image/upload/v1716290614/umoja/like-icon.svg', 30)"
				/>
				<!-- <v-icon size="15" :color="!isLiked(index) ? '#1C274C' : 'red '" :icon="!isLiked(index) ? 'mdi mdi-heart-outline' : 'mdi mdi-heart'"></v-icon> -->
			</v-btn>
		</v-img>
		<v-img
			class="rounded-lg bg-grey-lighten-5"
			cover
			v-else
			@click="role ? '' : $router.push(`/product_page/${item?.id}`)"
			eager
			width="100%"
			:height="$vuetify.display.mobile ? '200px' : '236px'"
			:src="getCloudinaryImageUrl(item?.photo, 800)"
		>
			<v-btn
				@click="toggleLike(item, index)"
				:ref="item?.name + index"
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
					:src="getCloudinaryImageUrl('https://res.cloudinary.com/payhospi/image/upload/v1716290614/umoja/like-icon.svg', 30)"
				/>
				<!-- <v-icon size="15" :color="!isLiked(index) ? '#1C274C' : 'red '" :icon="!isLiked(index) ? 'mdi mdi-heart-outline' : 'mdi mdi-heart'"></v-icon> -->
			</v-btn>
		</v-img>
		<div
			@click="role ? '' : $router.push(`/vendor_page/${item?.vendor_id}`)"
			class="mt-3 d-block d-md-none"
			:style="{ fontSize: $vuetify.display.mobile ? '12px' : '14px', fontWeight: $vuetify.display.mobile ? 500 : 600 }"
			style="cursor: pointer; color: #1e1e1e; letter-spacing: -0.14px"
		>
			<span class="mr-2">
				<span style="text-transform: capitalize">{{ item?.vendor_business_name }}</span>
				<span style="font-size: 1rem; margin-left: 5px; margin-top: 3px">{{ getCountryIconClass(item?.vendor_country) }}</span>
			</span>
			<v-icon icon="mdi mdi-information-outline" color="#969696" />
		</div>
		<p
			@click="role? '' : $router.push(`/product_page/${item?.id}`)"
			style="font-weight: 600; font-size: 14px; line-height: 18px; cursor: pointer; color: #000000; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis"
			class="mt-1 mt-md-3 text-wrap"
		>
			{{ filt(item?.name) }}
		</p>
		<p class="mt-1" style="font-weight: 500; font-size: 12px; line-height: 15px; color: #000000">
			{{ item?.category_name }}
		</p>
		<p style="font-weight: 600; font-size: 10px; line-height: 10px; color: #000000" class="d-flex mb-1 pb-0 pt-1 align-center">
			<v-rating readonly model-value="4" color="grey-lighten-2" active-color="#E7CE5D" class="rts" density="compact" size="x-small"></v-rating
			><span style="margin-left: 3px" :style="{ fontSize: $vuetify.display.mobile ? '8px' : '12px' }">(65)</span>
		</p>
		<v-chip
			v-if="item?.deliv"
			class="mb-2"
			variant="elevated"
			size="x-small"
			color="#1273EB"
			style="font-size: 10px; font-weight: 500; border-radius: 6px; letter-spacing: 0.5px"
			>FREE DELIVERY</v-chip
		>
		<div v-if="vendorShow" class="d-none d-md-block">
			<div class="d-flex mt-6">
				<v-avatar @click="role ? '' : $router.push(`/vendor_page/${item?.vendor_id}`)" size="40"><v-img cover :src="getCloudinaryImageUrl(item?.vendor_profile_photo, 300)"></v-img></v-avatar>
				<div style="cursor: pointer" @click="role ? '' : $router.push(`/vendor_page/${item?.vendor_id}`)" class="ml-2">
					<p style="color: #1e1e1e; text-transform: capitalize; font-size: 14px; font-weight: 600; letter-spacing: -0.14px">
						{{ item?.vendor_business_name }}
					</p>
					<p style="color: #969696; font-size: 12px; font-weight: 500; letter-spacing: -0.12px">
						{{ item?.vendor_country }}
						<span style="font-size: 1rem; margin-top: 3px; margin-left: 5px">{{ getCountryIconClass(item?.vendor_country) }}</span>
					</p>
				</div>
			</div>
			<v-divider color="#a4a4a4" class="mt-4"></v-divider>
		</div>
		<div class="d-flex flex-column flex-md-row justify-md-space-between align-md-end">
			<div :class="item?.compare_at_price ? 'mt-4' : 'mt-9'">
				<h1 :style="{ fontSize: $vuetify.display.mobile ? '14px' : '20px' }" style="color: #1a1d1f" class="priceClass mb-1">
					{{ formattedPrice(item?.price) }}
				</h1>
				<div class="d-flex align-center">
					<p
						style="color: var(--carbon-3, #969696); font-weight: 600; line-height: 17.673px; text-decoration: line-through"
					>
						{{item?.compare_at_price? formattedPrice(item?.compare_at_price) : '' }}
					</p>
					<v-chip v-if="item?.compare_at_price" style="font-size: 9.429px; font-weight: 600" class="ml-1" size="x-small" :color="discountColor" rounded="lg">
						{{ Math.floor(((item?.compare_at_price - item?.price) / item?.compare_at_price) * 100) }}% OFF
					</v-chip>
				</div>
			</div>
			<v-btn
				v-if="!role"
				@click="addToCart(item)"
				rounded="xl"
				style="border: 0.66px solid #ced2d6; border-radius: 6px"
				:height="$vuetify.display.mobile ? 40 : 28"
				color="green"
				variant="outlined"
				flat
				class="parent-btn ml-0 ml-md-2 mt-2 mt-md-0 justify-content-end"
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
import emojiFlags from "emoji-flags";
import { getCloudinaryImageUrl } from '~/utils/cloudinary';

export default {
	props: ["item", "loading", "short", "category", "cover", "index", "showVendor", "showdisco", "role"],
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

	methods: {
		isInCart(product) {
			const cartStore = useCartStore();
			const index = cartStore.items.findIndex((item) => item?.id == product.id);
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
			return emojiFlags.countryCode(countryCode).emoji;
		},
		async addToCart(item) {
			const userStore = useUserStore();

			const cartStore = useCartStore();
			if (userStore.getIsLoggedIn) {
				const index = cartStore.items.findIndex((cart) => cart.id == item?.id);
				if (index !== -1) {
					cartStore.clearItem(item?.id);
					return;
				}
				cartStore.addItem(item, 1);
			} else {
				this.$router.push("/user/login");
			}
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
