<template>
	<v-card
		:style="{ width: $vuetify.display.mobile ? '100%' : '254px' }"
		v-if="loaded"
		style="overflow: visible"
		flat
		class="bg-white parent-card rounded-lg mb-2"
	>
		<v-img eager class="bg-grey-lighten-5" cover style="border-radius: 16px" width="100%" height="237" :src="item.cover_image ? item.cover_image : 'https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893068/umoja-backup2/Rectangle_448_2_lh8kz3_fhxaab.png'"> </v-img>
		<div class="px-md-4">
			<v-avatar style="margin-top: -37px" :size="$vuetify.display.mobile ? 43 : 67">
				<v-img eager class="bg-grey-lighten-2" cover style="border-radius: 16px" width="100%" height="237" :src="item.profile_photo ? item.profile_photo : 'https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890679/umoja-backup/profile_image_pd4dcv_k3cl6j.png'"> </v-img>
			</v-avatar>
			<p
				style="font-weight: 600; text-transform: capitalize; line-height: normal; cursor: pointer; color: #000000"
				:style="{ fontSize: $vuetify.display.mobile ? '16px' : '20px' }"
				class="mt-0 mt-md-4"
			>
				{{ item.business_name }}
			</p>
			<div class="d-block mt-1">
				<div class="d-flex align-center">
					<p
						:style="{ fontSize: $vuetify.display.mobile ? '12px' : '14px' }"
						style="color: #969696; font-weight: 500; line-height: 140%"
						class="text-capitalize"
					>
						{{ item.business_type }}
					</p>
					<v-icon class="mx-1" size="5" color="grey-lighten-1" icon="mdi mdi-circle"></v-icon>
					<p :style="{ fontSize: $vuetify.display.mobile ? '12px' : '14px' }" style="color: #969696; font-weight: 500; line-height: 140%">
						<!-- {{ item.subCategory }} -->
					</p>
				</div>
			</div>
			<p style="font-weight: 600; font-size: 10px; line-height: 10px; color: #000000" class="d-flex mb-1 pb-0 pt-1 align-center">
				<v-rating readonly model-value="0" color="grey-lighten-2" active-color="#E7CE5D" class="rts" density="compact" size="x-small"></v-rating
				><span style="margin-left: 3px; margin-top: 3px">({{ item.total_ratings }})</span>
			</p>
			<span
				:style="{ fontSize: $vuetify.display.mobile ? '10px' : '12px' }"
				style="font-weight: 500; border-radius: 6px; color: #f38218; letter-spacing: -0.12px"
				class="d-flex items-center"
			>
				<span style="width: 10px">
					<v-img height="14" width="10" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1717990498/umoja/Vector_fl2a3t_b6ptcc.png"> </v-img>
				</span>
				<span class="ml-1">Delivery within 5 Working Days</span>
			</span>
		</div>

		<v-btn @click="$router.push(`/vendor_page/${item.id}`)"
			variant="outlined"
			class="bizbtn mt-8"
			style="border: 0.66px solid #ced2d6; color: #1a1d1f; font-size: 12px; font-weight: 600; line-height: 13.11px"
			rounded="xl"
			block
			size="large"
			><span>See Business Page</span></v-btn
		>
	</v-card>
	<vendorloader v-else />
</template>
<script>
import { useLikedStore } from "~/stores/likedStore";
import { loaded } from "~/composables/useProducts";

export default {
	props: ["item", "category", "index"],
	computed: {
		likedStore() {
			return useLikedStore();
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
<style>
.parent-card:hover .bizbtn {
	opacity: 1 !important;
	transform: translateY(0px) !important;
	visibility: visible;
}
.parent-card .bizbtn {
	opacity: 0 !important;
	visibility: hidden;
	transition: all 0.3s ease-in-out;
	transform: translateY(20px) !important;
}
</style>
