<template>
	<v-col cols="12" lg="3">
		<v-card flat :class="$vuetify.display.mobile ? '' : 'cardStyle'">
			<p class="d-none d-md-block" style="font-size: 24px; font-weight: 600; letter-spacing: -0.72px">Filter</p>

			<div @click="genderExpand = !genderExpand" style="cursor: pointer" class="d-flex mt-4 mb-2 justify-space-between align-center">
				<p style="color: #1e1e1e; font-size: 18.118px; font-weight: 600; letter-spacing: -0.544px">Gender</p>
				<v-icon icon="mdi mdi-chevron-down"></v-icon>
			</div>
			<v-expand-transition leave-absolute>
				<div v-if="genderExpand">
					<v-row dense>
							<v-col @click="productStore.params.gender = n"  :key="i" v-for="(n, i) in ['male', 'female']">
								<p
									class="px-3 py-2 d-flex align-center justify-center"
									style="
										font-size: 14px;
										min-width: 100px;
										max-width: 150px;
										font-weight: 500;
										cursor: pointer;
										letter-spacing: -0.42px;
										border-radius: 6px;
										border: 1px solid var(--carbon-2, #cecece);
										text-transform: capitalize;
									"
									:style="{
										backgroundColor: productStore.params.gender === n ? '#E5EDEC' : '#ffffff',
										color: productStore.params.gender === n ? '#2C6E63' : '#1e1e1e'
									}"
								>
									{{ n }}
								</p>
							</v-col>
						</v-row>
				</div>
			</v-expand-transition>

			<v-divider class="my-4"></v-divider>

			<div @click="categoryExpand = !categoryExpand" style="cursor: pointer" class="d-flex mt-4 mb-2 justify-space-between align-center">
				<p style="color: #1e1e1e; font-size: 18.118px; font-weight: 600; letter-spacing: -0.544px">Category</p>
				<v-icon icon="mdi mdi-chevron-down"></v-icon>
			</div>
			<v-expand-transition leave-absolute>
				<div v-if="categoryExpand">
					<v-row dense>
							<v-col @click="productStore.params.category_name = n"  :key="i" v-for="(n, i) in categoryNames">
								<p
									class="px-3 py-2 d-flex align-center justify-center"
									style="
										font-size: 14px;
										max-width: 150px;
										font-weight: 500;
										white-space: nowrap;
										cursor: pointer;
										border-radius: 6px;
										border: 1px solid var(--carbon-2, #cecece);
									"
									:style="{
										backgroundColor: productStore.params.category_name === n ? '#E5EDEC' : '#ffffff',
										color: productStore.params.category_name === n ? '#2C6E63' : '#1e1e1e'
									}"
								>
									{{ n }}
								</p>
							</v-col>
						</v-row>
				</div>
			</v-expand-transition>

			<div>
				<v-divider class="my-4"></v-divider>
				<div @click="subCategoryExpand = !subCategoryExpand" style="cursor: pointer" class="d-flex mt-4 mb-2 justify-space-between align-center">
					<p style="color: #1e1e1e; font-size: 18.118px; font-weight: 600; letter-spacing: -0.544px">Sub Category</p>
					<v-icon>{{ subCategoryExpand ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down" }}</v-icon>
				</div>
				<v-expand-transition leave-absolute>
				
					<v-list v-if="subCategoryExpand" dense>
						<p v-if="!productStore.params.category_name  || !productStore.params.gender" style="text-align: center; font-size: 14px">You need to select gender and category</p>
							<v-list-item
								v-for="(sub, subIndex) in subCategories"
								:key="subIndex"
								:style="{
								color: productStore.params.sub_category_name === sub.subcategory_name ? '#2C6E63' : '',
								backgroundColor: productStore.params.sub_category_name === sub.subcategory_name ? '#E5EDEC' : '',
								}"
								:title="sub.subcategory_name"
								style="cursor: pointer; font-size: 10px; border-radius: 10px; width: 200px;"
								@click="productStore.params.sub_category_name = sub.subcategory_name"
							></v-list-item>
					</v-list>
					</v-expand-transition>
			</div>

			<!-- <div>
				<v-divider class="my-4"></v-divider>
				<div @click="sellingExpand = !sellingExpand" style="cursor: pointer" class="d-flex mt-4 mb-2 justify-space-between align-center">
					<p style="color: #1e1e1e; font-size: 18.118px; font-weight: 600; letter-spacing: -0.544px">Selling Type</p>
					<v-icon icon="mdi mdi-chevron-down"></v-icon>
				</div>
				<v-expand-transition leave-absolute>
					<div v-if="sellingExpand">
						<v-checkbox
							class="mb-1"
							hide-details=""
							density="compact"
							v-for="n in ['In-store selling only', 'Online selling only', 'Available in-store and online']"
							color="green"
							inset
						>
							<template v-slot:label>
								<div>
									<p class="pl-2" style="color: #000 !important; font-size: 14px; font-weight: 500">{{ n }}</p>
								</div>
							</template>
						</v-checkbox>
					</div>
				</v-expand-transition>
			</div> -->

			<div>
				<v-divider class="my-4"></v-divider>
				<div @click="priceExpand = !priceExpand" style="cursor: pointer" class="d-flex mt-4 mb-2 justify-space-between align-center">
					<p style="color: #1e1e1e; font-size: 18.118px; font-weight: 600; letter-spacing: -0.544px">Price</p>
					<v-icon icon="mdi mdi-chevron-down"></v-icon>
				</div>
				<v-expand-transition leave-absolute>
					<div v-if="priceExpand">
						<v-text-field
							class="mb-2"
							hide-details=""
							v-model="productStore.params.priceMinimum"
							density="compact"
							style="text-align: center; font-size: 14px; font-weight: 400"
							prepend-inner-icon="mdi mdi-currency-eur"
							placeholder="Minimum"
							@input="productStore.fetchFilteredProducts()"
						></v-text-field>
						
						<v-text-field
							class="mb-4"
							hide-details=""
							density="compact"
							style="text-align: center; font-size: 14px; font-weight: 400"
							prepend-inner-icon="mdi mdi-currency-eur"
							placeholder="Maximum"
							v-model="productStore.params.priceMaximum"
							@input="productStore.fetchFilteredProducts()"
						></v-text-field>
								<v-chip-group v-model="price" color="green" column>
									<v-chip
									:value="n"
									:key="n"
									v-for="n in ['€5.00 - €10.00', '€50.00 - €100.00', '€5.00 - €1000.00', '€50.00 - €5000.00']"
									style="border-radius: 6px; border: 1px solid var(--carbon-2, #cecece)"
									rounded="lg"
									class="px-4 py-3"
									variant="outlined"
									grow
									active-class="bordergreen text--green"
								>
								<span style="font-size: 12px; font-weight: 500; letter-spacing: -0.42px"> {{ n }}</span>
								</v-chip>
								</v-chip-group>
					</div>
				</v-expand-transition>
			</div>

			<div>
				<v-divider class="my-4"></v-divider>
				<div @click="sizeExpand = !sizeExpand" style="cursor: pointer" class="d-flex mt-4 mb-2 justify-space-between align-center">
					<p style="color: #1e1e1e; font-size: 18.118px; font-weight: 600; letter-spacing: -0.544px">Sizes</p>
					<v-icon icon="mdi mdi-chevron-down"></v-icon>
				</div>
				<v-expand-transition leave-absolute>
					<div v-if="sizeExpand">
						<v-text-field
							class="mb-4"
							hide-details=""
							density="comfortable"
							style="text-align: center; font-size: 14px; font-weight: 400"
							prepend-inner-icon="mdi mdi-magnify"
							placeholder="Search to add sizes"
						></v-text-field>
						<v-row dense>
							<v-col @click="productStore.params.sizes = n" cols="4" :key="i" v-for="(n, i) in ['XXS', 'XL', 'XS', 'S', 'M', 'L', 'XXL', '3XL', '4XL']">
								<p
									class="w-100 d-flex align-center justify-center"
									style="
										font-size: 14px;
										font-weight: 400;
										height: 40px;
										border-radius: 6px;
										border: 1px solid var(--carbon-1, #ededed);
									"
									:style="{
										backgroundColor: productStore.params.sizes === n ? '#E5EDEC' : '',
										color: productStore.params.sizes === n ? '#2C6E63' : '#1e1e1e'
									}"
								>
									{{ n }}
								</p>
							</v-col>
						</v-row>
					</div>
				</v-expand-transition>
			</div>

			<!-- <div>
				<v-divider class="my-4"></v-divider>
				<div @click="payExpand = !payExpand" style="cursor: pointer" class="d-flex mt-4 mb-2 justify-space-between align-center">
					<p style="color: #1e1e1e; font-size: 18.118px; font-weight: 600; letter-spacing: -0.544px">Payment</p>
					<v-icon icon="mdi mdi-chevron-down"></v-icon>
				</div>
				<v-expand-transition leave-absolute>
					<div v-if="payExpand">
						<v-checkbox
							class="mb-1"
							hide-details=""
							density="compact"
							v-for="n in ['Cash on Delivery', 'Gengspayler', 'Card Payment']"
							color="green"
							inset
						>
							<template v-slot:label>
								<div>
									<p class="pl-2" style="color: #000 !important; font-size: 14px; font-weight: 500">{{ n }}</p>
								</div>
							</template>
						</v-checkbox>
					</div>
				</v-expand-transition>
			</div> -->
			<div>
				<v-divider class="my-4"></v-divider>
				<div @click="productExpand = !productExpand" style="cursor: pointer" class="d-flex mt-4 mb-2 justify-space-between align-center">
					<p style="color: #1e1e1e; font-size: 18.118px; font-weight: 600; letter-spacing: -0.544px">Product Rating</p>
					<v-icon icon="mdi mdi-chevron-down"></v-icon>
				</div>
				<v-expand-transition leave-absolute>
					<div v-if="productExpand">
						<v-checkbox class="mb-1 prat" hide-details="" density="compact" v-for="n in [4, 3, 2, 1]" color="green" inset>
							<template style="opacity: 1 !important" v-slot:label>
								<div class="d-flex pb-1 align-center">
									<v-rating
										:model-value="n"
										active-color="#F0B136"
										half-increments
										density="comfortable"
										color="grey-lighten-1"
										size="x-small"
									></v-rating>
									<p class="pl-2" style="color: #000 !important; font-size: 14px; font-weight: 500">and above</p>
								</div>
							</template>
						</v-checkbox>
					</div>
				</v-expand-transition>
			</div>

			<div>
				<v-divider class="my-4"></v-divider>
				<div @click="discountExpand = !discountExpand" style="cursor: pointer" class="d-flex mt-4 mb-2 justify-space-between align-center">
					<p style="color: #1e1e1e; font-size: 18.118px; font-weight: 600; letter-spacing: -0.544px">Discount%</p>
					<v-icon icon="mdi mdi-chevron-down"></v-icon>
				</div>
				<v-expand-transition leave-absolute>
					<div v-if="discountExpand">
						<v-text-field
							class="mb-4"
							hide-details=""
							density="comfortable"
							style="text-align: center; font-size: 14px; font-weight: 400"
							prepend-inner-icon="mdi mdi-magnify"
							placeholder="Search to add sizes"
						></v-text-field>
						<v-checkbox class="mb-1"  hide-details="" density="compact" color="green" inset>
							<template v-slot:label>
								<div>
									<p class="pl-2" style="color: #000 !important; font-size: 14px; font-weight: 500">Free Delivery</p>
								</div>
							</template>
						</v-checkbox>
						<v-radio-group v-model="productStore.params.compare_at_price" hide-details="" dense>
							<v-radio
								class="mb-1"
								v-for="(n, index) in discounts"
								:key="index"
								:value="n"
								color="green"
								:label="n + '%' + ' Discount'"
							></v-radio>
						</v-radio-group>
					</div>
				</v-expand-transition>
			</div>
		</v-card>
	</v-col>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useProductStore } from "~/stores/productStore";
import {fetchCategories, getCategoryId, getCategoryName, loadingSub, fetchSubCategories} from '~/composables/useCategories';

const props = defineProps({
	closeModal: {
		type: Function,
		required: true,
	},
});


const productStore = useProductStore();

const categories = ref([])
const subCategories = ref([])
const price = ref("")
const categoryNames = computed(() => categories.value?.map(category => category.name))

const disable = computed(() => {
	if (productStore.params.category_name == 'Art' || productStore.params.category_name == "Home decoration"){
		return true
	}
})
onMounted(async () => {
	productStore.clearParams();
	categories.value = await fetchCategories("customer")
});
			// watch for change ins any of the filter value
			// watch(() => [productStore.params.gender, productStore.params.priceMinimum, productStore.params.priceMaximum, productStore.params.category_name, productStore.params.sizes, productStore.params.product_rating, productStore.params.compare_at_price, productStore.params.sub_category_name], 
			// async ([]) => {
			// 	productStore.pageNo = 1
			// 	await productStore.fetchFilteredProducts()
			// });
			// watch(() =>  productStore.pageNo, async() => {
			// 	await productStore.fetchFilteredProducts()
			// })
			let isFetching = false;

// Watch for changes in filter parameters
		watch(() => [
			productStore.params.gender,
			productStore.params.priceMinimum,
			productStore.params.priceMaximum,
			productStore.params.category_name,
			productStore.params.sizes,
			productStore.params.product_rating,
			productStore.params.compare_at_price,
			productStore.params.sub_category_name
		], async () => {
			if (!isFetching) {
				// Set the flag
				isFetching = true;
				// Reset the page number when any filter parameter changes
				productStore.pageNo = 1;
				// Fetch filtered products
				await productStore.fetchFilteredProducts();
				// Reset the flag
				isFetching = false;
			}
		});

		// Watch for changes in page number
		watch(() => productStore.pageNo, async () => {
			if (!isFetching) {
				// Set the flag
				isFetching = true;
				// Fetch filtered products for the new page number
				await productStore.fetchFilteredProducts();
				// Reset the flag
				isFetching = false;
			}
		});
			watch(() => [productStore.params.gender, productStore.params.category_name], async () => {
				if (productStore.params.category_name && productStore.params.gender){
					subCategories.value = await fetchSubCategories({selectedCat: productStore.params.category_name, Categories: categories.value,role: "customer"});
					// productStore.params.sub_category_name = subCategories.value[0].subcategory_name
				}
				if(!productStore.params.category_name  || !productStore.params.gender){
					subCategories.value = []
				}
			});
			watch(() => price.value, async (newPrice) => {
					if (newPrice) {
					const [min, max] = newPrice.split(' - ').map(price => price.replace('€', '').trim());
					productStore.params.priceMinimum = min;
					productStore.params.priceMaximum = max;
					}
				}
				);

			
			const categoryExpand = ref(false);
			const subCategoryExpand = ref(false);
			const genderExpand = ref(false);
			const country = ref("All of Africa");
			const sellingExpand = ref(false);
			const priceExpand = ref(false);
			const payExpand = ref(false);
			const productExpand = ref(false);
			const sizeExpand = ref(false);
			const discountExpand = ref(false);
			const discounts = ref(["10", "20", "30", "45", "50", "60", "75"]);
			// const subCategories = ref([
			// 	{
			// 		title: "Clothing Male",
			// 		subcategories: [
			// 			"T-shirts & Polos",
			// 			"Shirts",
			// 			"Sweatshirts & Hoodies",
			// 			"Trousers",
			// 			"Jeans",
			// 			"Shorts",
			// 			"Jackets",
			// 			"Knitwear",
			// 			"Sportswear",
			// 			"Tracksuits & Joggers",
			// 			"Suits & Tailoring",
			// 			"Coats",
			// 			"Underwear & Socks",
			// 			"Swimwear",
			// 			"Loungewear & Sleepwear",
			// 		],
			// 	},
			// 	{
			// 		title: "Clothing Female",
			// 		subcategories: [
			// 			"Dresses",
			// 			"T-shirts & tops",
			// 			"Trousers",
			// 			"Jeans",
			// 			"Shirts & Blouses",
			// 			"Jackets & Blazers",
			// 			"Swimwear",
			// 			"Sweatshirts & Hoodies",
			// 			"Skirts",
			// 			"Knitwear & Cardigans",
			// 			"Sportswear",
			// 			"Shorts",
			// 			"Jumpsuits",
			// 			"Coats",
			// 			"Underwear",
			// 			"Nightwear & Loungewear",
			// 			"Socks & Tights",
			// 		],
			// 	},
			// 	{
			// 		title: "Accessories Male",
			// 		subcategories: [
			// 			"Bags & cases",
			// 			"Shoes",
			// 			"Sneakers",
			// 			"Beanies, hats & caps",
			// 			"Sunglasses",
			// 			"Jewellery",
			// 			"Watches",
			// 			"Belts",
			// 			"Wallets & card holders",
			// 			"Blue-light glasses",
			// 			"Ties & accessories",
			// 			"Scarves & Shawls",
			// 			"Gloves",
			// 			"Lifestyle Electronics",
			// 			"Umbrellas",
			// 			"Miscellaneous",
			// 		],
			// 	},
			// 	{
			// 		title: "Accessories Female",
			// 		subcategories: [
			// 			"Bags & cases",
			// 			"Shoes",
			// 			"Sneakers",
			// 			"Jewellery",
			// 			"Sunglasses",
			// 			"Hats & headscarves",
			// 			"Belts",
			// 			"Watches",
			// 			"Wallets & card holders",
			// 			"Scarves",
			// 			"Blue-light glasses",
			// 			"Gloves",
			// 			"Umbrellas",
			// 			"Miscellaneous",
			// 			"Lifestyle Electronics",
			// 		],
			// 	},
			// 	{
			// 		title: "Cosmetics Male",
			// 		subcategories: ["Fragrance", "Shaving", "Skincare", "Hair care", "Luxe", "Gifts"],
			// 	},
			// 	{
			// 		title: "Cosmetics Female",
			// 		subcategories: ["Luxe", "Gifts", "Solutions", "Skin", "Makeup", "Fragrance", "Hair"],
			// 	},
			// 	{
			// 		title: "Home decoration",
			// 		subcategories: [
			// 			"Traditional Textiles",
			// 			"Handcrafted Furniture",
			// 			"Lighting and Lamps",
			// 			"Ethnic Wall Art",
			// 			"Ceramics and Pottery",
			// 			"Woven Baskets",
			// 		],
			// 	},
			// 	{
			// 		title: "Art",
			// 		subcategories: ["Drawing", "Painting", "Sculpting", "Photography", "Decorative Ads"],
			// 	},
			// ]);
function closeModal() {
	props.closeModal();
}
</script>

