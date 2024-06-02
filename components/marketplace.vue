<template>
	<v-divider></v-divider>
	<v-container class="pt-0" style="max-width: 1400px">
		<div style="height: 122px" class="align-center justify-space-between d-flex">
			<div>
				<p :style="{ fontSize: $vuetify.display.mobile ? '20px' : '24px' }" style="font-weight: 600; letter-spacing: -0.72px">Happy shopping Frank</p>
				<p
					:style="{ fontSize: $vuetify.display.mobile ? '14px' : '16px' }"
					style="color: #969696; font-weight: 500; letter-spacing: -0.48px"
					class="mt-1 mr-10"
				>
					Get lots of products with attractive offers up to 50% Discount
				</p>
			</div>
			<v-menu location="bottom" offset="10px" max-height="500">
				<template v-slot:activator="{ props }">
					<div
						v-ripple
						v-bind="props"
						style="cursor: pointer; width: auto; height: 44px; border: 1px solid #cecece"
						:style="{ minWidth: $vuetify.display.mobile ? '' : '209px' }"
						size="large"
						color="white"
						variant="elevated"
						flat
						class="rounded-xl elevation-0 chipper px-2"
					>
						<div class="d-flex justify-space-between w-25 w-100 h-100 align-center">
							<div class="d-flex align-center">
								<v-avatar v-if="!getFlag(country)" size="30.88" class="mr-md-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/rw-rwanda-medium_oui3ln.png"></v-img
								></v-avatar>
								<p class="d-flex align-center" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: -0.14px; font-weight: 500">
									<span class="mx-2" style="font-size: 24px;">{{ getFlag(country) }}</span><span class="d-none mr-2 d-md-flex">{{ country }}</span>
								</p>
							</div>
							<v-icon class="" icon="mdi mdi-chevron-down"></v-icon>
						</div>
					</div>
				</template>
				<v-list>
					<v-list-item v-for="(item, index) in countries" :key="index" :value="index" @click="selectCountry(item)">
						<p class="d-flex align-center"><span class="mr-3" style="font-size: 25px;">{{getFlag(item)}}</span> {{ item }}</p>
					</v-list-item>
				</v-list>
			</v-menu>
		</div>
		<v-divider class="mb-6" color="#a4a4a4"></v-divider>
		<v-row>
			<filter-card v-if="!$vuetify.display.mobile" />
			<v-col cols="12" lg="9" class="mx-0">
				<div>
					<div v-if="$vuetify.display.mobile">
						<div class="d-flex align-center justify-space-between">
							<v-btn
								variant="tonal"
								color="#2C6E63"
								class="textClass"
								flat
								@click="filterDrawer = true"
								style="border: 1px solid #94aaa5; border-radius: 100px !important"
							>
								<v-img
									class="mr-2"
									width="20"
									height="20"
									src="https://res.cloudinary.com/payhospi/image/upload/v1716242897/umoja/Filter_k0khdy.svg"
								/>
								Filter</v-btn
							>

							<div class="d-flex align-center">
								<p class="mr-2" style="font-size: 14.995px; font-weight: 500">Sort by :</p>
								<v-menu location="bottom" offset="10px" max-height="500">
									<template v-slot:activator="{ props }">
										<v-btn v-bind="props" style="border: 0.937px solid var(--carbon-2, #cecece)" rounded="xl" variant="outlined"
											><span
												style="
													color: var(--carbon-4, #333);

													font-size: 13.121px;
													font-weight: 600;
													line-height: 18.744px;
												"
												>{{ sort }}</span
											>
											<v-icon icon="mdi mdi-chevron-down"></v-icon
										></v-btn>
									</template>
									<v-list>
										<v-list-item v-for="(item, index) in sortTypes" :key="index" :value="index" @click="selectSort(item)">
											<v-list-item-title>{{ item }}</v-list-item-title>
										</v-list-item>
									</v-list>
								</v-menu>
							</div>
						</div>

						<!-- <p class="mt-4" :style="{ fontSize: $vuetify.display.mobile ? '14px' : '15.281px' }" style="font-weight: 500; letter-spacing: -0.153px">
							Showing {{ productStore.productFrom }} - {{ productStore.productTo }} items out of a total of {{ productStore.totalProducts }} for
							“fashion”
						</p> -->
					</div>

					<div class="d-none d-md-flex align-center justify-space-between">
						<p v-if="useProductStore().params.category_name" style="font-size: 15.281px; font-weight: 500; letter-spacing: -0.153px">
							Showing {{ productStore.productFrom }} - {{ productStore.productTo }} items out of a total of {{ productStore.totalProducts }} for “{{useProductStore().params.category_name}}”
						</p>
						<div class="d-flex align-center">
							<p class="mr-2" style="font-size: 14.995px; font-weight: 500">Sort by :</p>

							<v-menu location="bottom" offset="10px" max-height="500">
								<template v-slot:activator="{ props }">
									<v-btn v-bind="props" style="border: 0.937px solid var(--carbon-2, #cecece)" rounded="xl" variant="outlined"
										><span
											style="
												color: var(--carbon-4, #333);

												font-size: 13.121px;
												font-weight: 600;
												line-height: 18.744px;
											"
											>{{ sort }}</span
										>
										<v-icon icon="mdi mdi-chevron-down"></v-icon
									></v-btn>
								</template>
								<v-list>
									<v-list-item v-for="(item, index) in sortTypes" :key="index" :value="index" @click="selectSort(item)">
										<v-list-item-title>{{ item }}</v-list-item-title>
									</v-list-item>
								</v-list>
							</v-menu>
						</div>
					</div>
					<div class="pt-4 d-none d-md-block">
						<v-chip-group color="green" column>
							<v-chip
								:value="value"
								style="border-radius: 6px; border: 1px solid var(--carbon-2, #cecece)"
								v-for="(value, key) in filters"
								:key="key"
								rounded="xl"
								closable="true"
								close-icon="mdi mdi-close-circle-outline"
								@click:close.prevent="removeFilter(key)"
								class="px-5 py-4"
								variant="outlined"
								grow
								active-class="bordergreen text--green"
							>
								<span style="font-size: 13px; font-weight: 600; letter-spacing: -0.42px" class="pr-3"> {{ value }}</span>
							</v-chip>
							<!-- <v-chip
								style="border-radius: 6px; border: 1px solid var(--carbon-2, #cecece)"
								rounded="xl"
								closable=""
								close-icon="mdi mdi-close-circle-outline"
								class="px-5 py-4"
								variant="outlined"
								grow
								active-class="bordergreen text--green"
							>
								<div class="d-flex align-center">
									<v-rating
										:model-value="4"
										active-color="#F0B136"
										half-increments
										density="comfortable"
										color="grey-lighten-1"
										size="x-small"
									></v-rating>
									<span style="font-size: 13px; font-weight: 600; letter-spacing: -0.42px" class="px-2"> and above</span>
								</div>
							</v-chip> -->
						</v-chip-group>
					</div>
					<div v-if="productStore.searchError" style="width: 100%; text-align: center; color: red; margin-bottom: 20px">
						<p>{{ productStore.searchError }}</p>
					</div>
					<div>
						<!-- <v-row id="homepage" style="background-color: #fff" class="mt-2">
							<v-col v-for="(n, i) in productStore.filteredProducts()" :key="i" lg="3" cols="6" sm="6" md="4">
								<product-component :index="i" :item="n" />
							</v-col>
						</v-row> -->

						<v-row dense class="mt-2 align-items-stretch"  >
							<v-col v-for="(n, i) in productStore.getProductsArray('main')" :key="i" cols="6" :md="3" :lg="3" >
								<product-component :item="n" :index="i" />
							</v-col>
						</v-row>
					</div>
				</div>
				<!-- Responsive fILTER dRAWER -->

				<v-layout class="d-block d-md-none">
					<v-navigation-drawer v-model="filterDrawer" :location="$vuetify.display.mobile ? 'right' : undefined" temporary style="width: 85%; top: 0%">
						<div style="height: auto">
							<div class="d-flex align-center justify-space-between px-4 pt-4">
								<p style="font-size: 24px; font-weight: 600; letter-spacing: -0.72px">Filter</p>
								<div>
									<v-img
										class="d-block d-md-none"
										width="21"
										height="21"
										@click.stop="filterDrawer = false"
										src="https://res.cloudinary.com/payhospi/image/upload/v1716243322/umoja/close-icon.svg"
									/>
								</div>
							</div>

							<filter-card />
						</div>
					</v-navigation-drawer>
				</v-layout>
			</v-col>
		</v-row>
	</v-container>
</template>
<style>
.bordergreen {
	border: 1px solid var(--carbon-4, #333);
}
.prat .v-label {
	opacity: 1 !important;
}
</style>
<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import emojiFlags from 'emoji-flags';
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { useCartStore } from "~/stores/cartStore";
import { useProductStore } from "~/stores/productStore";
import { useUserStore } from "~/stores/userStore";
import { countries, countryCodes } from "~/utils/countryapi";

export default {
	components: {
		EditorContent,
	},
	created() {
		this.productStore = useProductStore();
	},
	async mounted() {
		await this.productStore.fetchFilteredProducts();
		this.editor = new Editor({
			extensions: [
				StarterKit,
				Link,
				Underline,
				TextAlign.configure({
					types: ["heading", "paragraph"],
				}),
			],
			content: "<p>This sneakers is made from one of the best  ankara material in Ghana</p>",
		});
	},
	beforeUnmount() {
		this.editor.destroy();
	},
	data() {
		return {
			filterDrawer: false,
			productStore: null,
			editor: null,
			country: "All of Africa",
			sizeExpand: false,
			sort: "Popular",
			sortTypes: ["Popular", "Newest", "Price: Low to High", "Price: High to Low"],
		};
	},
	computed: {
		filters(){
			const params = this.productStore.params;
				return Object.keys(params).reduce((filtered, key) => {
					if (params[key] !== "" && params[key] !== null) {
					filtered[key] = params[key];
					}
					return filtered;
				}, {});
		}
	},
	methods: {
		getFlag(country) {
			const countryCode = countryCodes[country]
			if (countryCode){
				return emojiFlags.countryCode(countryCodes[country]).emoji;
			}
			
		},
		async removeFilter(key) {
        // Reset gender and category_name to default values if they are removed
        if (key === 'gender') {
            this.productStore.params.gender = "Unisex";
        } else if (key === 'category_name') {
            this.productStore.params.category_name = "Clothing";
        } else {
            this.productStore.removeParam(key);
        }
        
        await this.productStore.fetchFilteredProducts();
    },
		selectCountry(item) {
			this.country = item;
		},
		selectSort(item) {
			this.sort = item;
		},
		filt(text) {
			var newText = text.length > 50 ? text.slice(0, 50) + "..." : text;
			return newText;
		},
	},
};
</script>
