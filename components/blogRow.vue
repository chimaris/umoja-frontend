<template>
	<v-container class="parent-container" tyle="margin-bottom: 50px" :style="'max-width:' + maxw">
		<div class="d-flex my-6 align-center">
			<div class="d-flex align-center">
				<div
					class=""
					style="
						color: var(--magnetic-green-4, #000);
						font-weight: 600;
						width: auto;
						font-size: 24px;
						min-width: 155px;
						line-height: 120%; /* 16.8px */
						letter-spacing: -0.24px;
					"
				>
					{{ title }}
				</div>
				<v-divider class="d-block d-md-none" :style="{ maxWidth: $vuetify.display.mobile ? '60px' : '' }"></v-divider>
			</div>
			<v-divider style="flex: auto" class="mx-4 d-none d-md-block"></v-divider>

			<v-btn class="d-none d-md-flex" color="#333" size="large" style="" variant="outlined" rounded="xl">
				See All <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
			</v-btn>
		</div>

		<div id="homepage" style="height: 578px !important; background: transparent !important" class="rower d-none d-md-block">
			<div class="d-inline-block mr-4" style="width: 343px; height: 520px" v-for="(n, i) in items" :key="i">
				<blog-component :index="i" :item="n" />
			</div>
		</div>
		<!-- For mobile View -->
		<div class="d-block d-md-none">
			<v-row dense>
				<v-col v-for="(n, i) in items" :key="i" cols="12">
					<blog-component :index="i" :item="n" />
				</v-col>
			</v-row>

			<v-btn block class="d-flex d-md-none" color="#333" size="large" style="" variant="outlined" rounded="xl">
				See All <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
			</v-btn>
		</div>
	</v-container>
</template>
<style>
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

export default {
	props: ["category", "showdisco", "vendor", "items", "title", "maxwidth"],
	computed: {
		maxw() {
			return this.maxwidth ? this.maxwidth : "1400px";
		},
		vendorBol() {
			return this.vendor ? this.vendor : false;
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
