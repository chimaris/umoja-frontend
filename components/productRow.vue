<template>
	<v-container style="margin-bottom: 50px" class="parent-container" :style="'max-width:' + maxw">
		<div class="d-flex my-8 align-center">
			<div
				class=""
				:style="{
					color: 'var(--magnetic-green-4, #000)',
					fontSize: $vuetify.display.mobile ? '24px' : '32px',
					fontWeight: '600',
					width: 'auto',
					minWidth: '155px',
					lineHeight: '120%' /* 16.8px */,
					letterSpacing: '-0.24px',
				}"
			>
				{{ title }}
			</div>
			<v-divider style="flex: auto" class="mx-4"></v-divider>
			<v-btn class="d-none d-md-flex" color="#333" size="large" style="" variant="outlined" rounded="xl">
				See All <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
			</v-btn>
		</div>

		<div
			id="homepage"
			:style="vendorBol ? 'height: 470px!important;' : showVendor ? 'height: 545px !important;' : ''"
			style="background: transparent !important"
			:class="maxwidth == '1400px' ? 'maxw' : ''"
			class="rower mt-8 d-none d-md-block"
		>
			<div class="d-inline-block mr-4" style="width: 254px" v-for="(n, i) in items" :key="i">
				<vendor-component :category="category" v-if="vendorBol" :index="i" :item="n" />
				<product-component
					:cover="coverbol"
					:category="category"
					v-else
					:index="i"
					:showVendor="showVendor"
					:showdisco="showdisco"
					:item="n"
				/>
			</div>

			<div class="d-inline-block mr-4" style="width: 254px" v-for="(n, i) in items" :key="i">
				<vendor-component :category="category" v-if="vendorBol" :index="i" :item="n" />
				<product-component
					:cover="coverbol"
					:category="category"
					v-else
					:index="i"
					:showVendor="showVendor"
					:showdisco="showdisco"
					:item="n"
				/>
			</div>
		</div>
		<!-- For mobile View -->
		<div class="d-block d-md-none">
			<v-row dense>
				<v-col v-for="(n, i) in items" :key="i" cols="6" :md="6" :lg="3">
					<vendor-component :category="category" v-if="vendorBol" :index="i" :item="n" />
					<product-component
						:cover="coverbol"
						:category="category"
						v-else
						:index="i"
						:showVendor="showVendor"
						:showdisco="showdisco"
						:item="n"
					/>
				</v-col>
			</v-row>

			<v-btn block class="d-flex d-md-none mt-10" color="#333" size="x-large" style="" variant="outlined" rounded="xl">
				See All <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
			</v-btn>
		</div>
	</v-container>
</template>
<style>
.maxw {
	max-width: 1400px !important;
}
.divbtn {
	transition: all 0.3s ease-in-out;
}
/* .parent-container:hover .divbtn .v-btn__content {
color: #fff!important;
} */
/* .parent-container:hover .divbtn {
background-color: #333;
border: none!important;
} */
</style>
<script>
import { useProductStore } from "~/stores/productStore.js";
import { useCartStore } from "~/stores/cartStore";
import { useUserStore } from "~/stores/userStore";

export default {
	props: ["showVendor", "vendorlist", "cover", "category", "showdisco", "vendor", "items", "title", "maxwidth"],
	computed: {
		maxw() {
			return this.maxwidth ? this.maxwidth : "1400px";
		},
		vendorBol() {
			return this.vendor !== undefined ? this.vendor : false;
		},
		coverbol() {
			// Returns true if this.cover is set, otherwise returns true
			return this.cover !== undefined ? this.cover : true;
		},
		productStore() {
			return useProductStore();
		},
		items() {
			if (this.vendor) {
				if (this.vendor == true) {
					return this.vendorlist;
				} else {
					return this.getitems;
				}
			} else {
				return this.getitems;
			}
		},
		getitems() {
			if (this.items) {
				if (this.items.length > 0) {
					return this.items;
				} else {
					return this.productStore.getProductsArray("row");
				}
			} else {
				return this.productStore.getProductsArray("row");
			}
		},
	},
	data() {
		return {
			loaded: false,
			category: "All",
			filters: ["All", "Fashion", "Art", "Home Decoration", "Cosmetics"],
		};
	},
	methods: {
		filt(text) {
			var newText = text.length > 50 ? text.slice(0, 50) + "..." : text;
			return newText;
		},
	},
};
</script>
