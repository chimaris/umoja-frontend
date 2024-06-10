<template>
	<v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
		<div class="d-flex align-center justify-space-between">
			<div class="d-flex w-100 align-center">
				<div class="d-flex align-center">
					<v-text-field
					    v-model="searchQuery"
						style="width: 235px; border: 1px solid #cecece; border-radius: 6px"
						variant="outlined"
						density="compact"
						hide-details
						prepend-inner-icon="mdi mdi-magnify"
						placeholder="Search "
						
					>
					<template v-slot:append-inner>
						<v-progress-circular v-if="loading"
						color="grey"
						:size="24"
						:width="3"
						indeterminate
						></v-progress-circular>
					</template>
					</v-text-field>
				</div>
				<div class="d-flex align-center">
					<v-btn id="activate" style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3" v-on="on">
						Sort by
						<v-icon class="ml-2" icon="mdi mdi-tune-vertical"></v-icon>
					</v-btn>
						<!-- <v-menu activator="#activate" open-on-hover  transition="slide-x-transition"   :close-on-content-click="false">
							<v-list >
								<v-list-item class="sort-options" style="cursor: pointer; font-weight: 500">Availability</v-list-item>
								<v-list-item class="sort-options" style="cursor: pointer; font-weight: 500" >Sold</v-list-item>
							</v-list>
						</v-menu> -->
					<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3">
						Collection type
						<v-icon class="ml-2" icon="mdi mdi-tune-vertical"></v-icon>
					</v-btn>
					<v-btn @click="togglePriceSort" style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3">
						Price Range
						<v-icon class="ml-2" icon="mdi mdi-tune-vertical"></v-icon>
					</v-btn>
				</div>
			</div>
			<div class="d-flex align-center">
				<v-btn
					@click="choose('Import Product')"
					style="border: 1px solid #e5e5e5"
					variant="outlined"
					size="default"
					class="ml-4 menubar text-grey-darken-3"
				>
					<v-icon class="mr-2" icon="mdi mdi-tray-arrow-down"></v-icon>
					Import
				</v-btn>
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-tray-arrow-up"></v-icon>
					Export
				</v-btn>
				<v-btn @click="choose('Add Products')" flat color="green" size="default" class="ml-4 menubar text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-plus"></v-icon>
					Add products
				</v-btn>
			</div>
		</div>

		<div class="mt-5">
			<v-tabs v-model="tab" class="orders" color="green">
				<v-tab @click.stop="sort(item.prop, item.value)" v-for="item in tabs" :key="item" :value="item" class="d-flex text-capitalize align-center">
					{{ item.name }}
				</v-tab>
			</v-tabs>
			<v-divider></v-divider>
			<div v-if="productLoading" class="d-flex align-center justify-center" style="position: relative; height: 100%; min-height: 500px;">
				<v-progress-circular
					color="green"
				indeterminate
				></v-progress-circular>
				</div>
			<v-table v-if="filteredProductsData.length > 0 && !productLoading"
				style="    height: 80% !important; overflow: scroll;"
			>
				<thead >
					<tr style="background: #f8f8f8; border-radius: 6px" class="rounded-lg">
						<th style="width: 50px" class="font-weight-medium text-left">
							<v-checkbox hide-details></v-checkbox>
						</th>
						<th style="font-size: 14px; width: 100px" class="font-weight-medium text-left ">Product Details</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Category</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Options/Colors</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Status</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Price</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Stock</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">SKU</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Actions</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium"></th>
					</tr>
				</thead>
				<tbody  >
					<!-- @click="chosen = item.sn" -->
					<tr :style="chosen == item.id ? 'background:#DFDFDF' : ''" v-for="item in filteredProductsData" :key="item.id">
						<td class="text-grey-lighten-1 pl-4 px-1">
							<v-checkbox hide-details></v-checkbox>
						</td>
						<td style="position: relative; font-size: 14px; height: 100px">
							<div style="position: ; top: 24px; width: ">
								<v-menu class="pl-0" offset="9px" open-on-hover location="top">
									<template v-slot:activator="{ props }">
										<div v-bind="props" class="d-flex align-center pr-4 pl-2">
											<v-avatar color="grey-lighten-4" class="rounded-lg mr-3 ml-0" size="50"
												><v-img
													:src="item.photo.split(',')[0]"
													cover
												></v-img
											></v-avatar>
											<div>
												<p class="mb-1 text-truncate"  style="font-weight: 600; max-width: 250px; white-space: nowrap; font-size: 16px !important; line-height: 20px; color: #333333" >
													{{ item.name }}
												</p>
												<p style="font-weight: 400; max-width: 200px; font-size: 14px; text-overflow: ellipsis; white-space: nowrap; line-height: 18px; color: #969696" class="text-truncate">
													{{ item.description }}
												</p>
											</div>
										</div></template
									>
									<v-card max-width="310" class="pa-6 rounded-lg" color="#2C6E63">
										<v-row class="d-flex align-start">
											<v-avatar color="grey-lighten-4" size="70" rounded="lg">
												<v-img
													:src="item.photo.split(',')[1]"
													cover
												></v-img>
											</v-avatar>
											<v-col class="py-0">
												<p style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px">
													{{item.name}}
												</p>
												<p style="color: #cdd6d4; font-size: 12px; font-weight: 500; line-height: 20px">{{ item.category_name }}</p>

												<p style="color: #edf0ef; font-size: 16px; font-weight: 600; line-height: 20px" class="mt-1">{{formattedPrice(item.price)}} per {{ item.unit }}</p>
											</v-col>
										</v-row>
									</v-card>
								</v-menu>
							</div>
						</td>

						<td style="height: 100px" class="align-center d-flex px-1">
							<v-chip style="color: #333; font-size: 10px; font-weight: 500" rounded="lg" class="mx-2" size="small" color="grey" variant="tonal">
								{{ item.sub_category_name }}
							</v-chip>
						</td>
						<td class="tableThick px-1">
							<div v-if="item.variations.length > 0" class=" d-flex align-center" style="flex-wrap: wrap; gap: 1px; max-width: 90px">
								<v-icon v-for="(color, index) in item.colors" :key=index icon="mdi mdi-circle" class="mx-1" :color="`${color}`" size="12"></v-icon>
							</div>
						</td>
						<td class="tableLight px-1">
							<v-chip style="color: #333; font-size: 10px; font-weight: 500" rounded="lg" class="" size="small" color="green" variant="tonal">
								{{ item.status }}
							</v-chip>
						</td>
						<td class="tableThick px-1">{{ formattedPrice(item.price) }}</td>
						<td class="tableThick px-1">
							<p>{{ item.made_with_ghana_leather }} in stock</p>
							<p style="color: #969696; font-weight: 400">for {{item.variations.length}} variants</p>
						</td>

						<td class="tableLight px-1"><p style="color: #333; font-size: 14px; font-style: normal; font-weight: 600">{{ item.sku }}</p></td>
						<td class="text-grey-lighten-1 text-center px-1">
							<v-btn @click="editProduct(item)" style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="menubar text-grey-darken-3"> Edit </v-btn>
						</td>
						<td v-if="tab.name === 'Archived'" class="um px-1">
							<v-btn @click="handleRestore(item)"  style="border: 1px solid #e5e5e5" color="green" variant="outlined" size="default" class="menubar text-grey-darken-3"> Restore </v-btn>
						</td>
						<td v-else class="um px-1">
							<v-btn @click="handleDelete(item)"  style="border: 1px solid #e5e5e5" color="green" variant="outlined" size="default" class="menubar text-grey-darken-3"> Delete </v-btn>
						</td>
					
						<!-- <td style="font-size: 14px;" class="text-grey-lighten-1 px-1">
           <span v-if="chosen !== item.sn ">
               {{ item.total }}
           </span>
           <v-btn v-else color="green" size="small" class=" rounded-lg"> See details</v-btn>
       </td> -->
					</tr>
				</tbody>
				<v-dialog persistent v-model="showDeleteModal" max-width="400">
								<v-card>
									<v-card-title>Archive Product</v-card-title>
									<v-card-text>
										This product will be archived and after 30 days it will be deleted.
									</v-card-text>
									<v-card-actions style="display: flex; justify-content: flex-end;">
										<v-btn @click="archiveProduct()" color="green" text>Archive</v-btn>
										<v-btn @click="deleteProduct()" color="green" text>Delete Permanently</v-btn>
										<v-btn @click="showDeleteModal = false" text>Cancel</v-btn>
									</v-card-actions>
								</v-card>
				</v-dialog>
				<v-dialog persistent v-model="showRestore" max-width="400">
								<v-card>
									<v-card-title>Delete Product</v-card-title>
									<v-card-text>
										This product will be restored and removed from archive.
									</v-card-text>
									<v-card-actions style="display: flex; justify-content: flex-end;">
										<v-btn @click="restoreProduct()" color="green" text>Restore</v-btn>
										<v-btn @click="showRestore = false" text>Cancel</v-btn>
									</v-card-actions>
								</v-card>
				</v-dialog>
				<v-dialog persistent v-model="vendorProducts.successArchive" max-width="400">
								<v-card>
									<v-card-text>
										Product has been Archived Successfully
									</v-card-text>
									<v-card-actions style="display: flex; justify-content: flex-end;">
										<v-btn @click="vendorProducts.successArchive = false" text>OK</v-btn>
									</v-card-actions>
								</v-card>
				</v-dialog>
				<v-dialog persistent v-model="vendorProducts.successRestore" max-width="400">
								<v-card>
									<v-card-text>
										Product has been restored Successfully
									</v-card-text>
									<v-card-actions style="display: flex; justify-content: flex-end;">
										<v-btn @click="vendorProducts.successRestore = false" text>OK</v-btn>
									</v-card-actions>
								</v-card>
				</v-dialog>
				<v-dialog persistent v-model="vendorProducts.successDelete" max-width="400">
								<v-card>
									<v-card-text>
										Product has been deleted permanently
									</v-card-text>
									<v-card-actions style="display: flex; justify-content: flex-end;">
										<v-btn @click="vendorProducts.successDelete = false" text>OK</v-btn>
									</v-card-actions>
								</v-card>
				</v-dialog>
				
			</v-table>

			<div
			v-if="!hasProduct"
			class="d-flex flex-column justify-center align-center"
			style="max-height: 100%; height: 90vh;"
		>
			<v-sheet class="d-flex flex-column justify-center align-center text-center" style="width: 450px">
				<v-img
					:width="300"
					cover
					src="https://res.cloudinary.com/payhospi/image/upload/v1713433043/umoja/product-empty-box.png"
					style="filter: grayscale(100%) brightness(100%)"
				></v-img>
				<h2 style="color: #333; font-size: 24px; font-weight: 700; line-height: 30px">Your products will show here</h2>
				<p style="color: #969696; font-size: 16px; font-weight: 500">
					This is where you'll fulfill orders, collect payments, and track order progress.
				</p>
				<div class="mt-10">
					<v-btn class="mr-4" size="x-large" width="191" style="border: 1px solid #cecece; padding: 12px 20px" flat @click="choose('Import Product')">
						<v-icon class="mr-2" icon="mdi mdi-tray-arrow-down"></v-icon>
						<span style="color: #333; font-size: 16px; font-weight: 600; line-height: 20px"> Import</span></v-btn
					>
					<v-btn
						size="x-large"
						width="191"
						style="background-color: #2c6e63; color: #edf0ef; padding: 12px 20px"
						flat
						@click="choose('Add Products')"
					>
						<v-icon class="mr-2" icon="mdi mdi-plus"></v-icon>
						<span style="font-size: 16px; font-weight: 600; line-height: 20px"> Add product</span></v-btn
					>
				</div>
			</v-sheet>
			</div>
			<div 
				class="w-100 mt-4 d-flex justify-space-between align-center"
				style="background-color: #f8f8f8; border: 1px solid #ededed; border-radius: 6px; padding: 10px 20px; height: 60px; overflow: hidden;"
			>
				<div style="display: flex; align-items: center">
					<span style="font-size: 14px; font-weight: 400">{{vendorProducts.from}} - {{vendorProducts.toPage}} of {{vendorProducts.pagesNo}} Pages</span>
				</div>
				<div class="d-flex align-center" style="margin-left: auto">
					<span style="font-size: 12px; font-weight: 400; margin-right: 10px">The Page you’re on</span>
					<v-select class="mt-5" 
						variant="outlined"
						placeholder="1"
						style="background-color: #f8f8f8; min-width: 40px"
						:items = pageOptions
						v-model = "selectedPage"
					>
					</v-select>
					
					<v-img
						:width="10"
						:height="40"
						src="https://res.cloudinary.com/payhospi/image/upload/v1713471908/umoja/vertical-line.svg"
						class="mx-2"
					></v-img>

					<v-btn :disabled = "vendorProducts.currentPage == 1" @click="selectedPage --;"  class="mr-1" flat><v-icon icon="mdi mdi-undo"></v-icon></v-btn>
					<v-btn :disabled = "vendorProducts.currentPage == vendorProducts.pagesNo" @click="selectedPage ++;" flat><v-icon icon="mdi mdi-redo"></v-icon></v-btn>
				</div>
			</div>

		</div>

	
		
	<v-dialog v-model="vendorProducts.newProductAdded" max-width="1200">
		<v-card style="width: 100%; border-radius: 5px; background-color: #EDF3F0; position: absolute; left: 170px; top: -300px">
			<div class="d-flex align-center justify-between pa-10" style="width: 100%; border-radius: 30px">
				<div class="d-flex align-center justify-center" style="background-color:#CBDED6; width: 50px; height: 50px; border-radius: 50%">
					<v-icon color="green" size="24">mdi mdi-checkbox-marked-circle</v-icon>
				</div>
				<div class="ml-5" style="flex: 1">
					<h4 style="font-size: 20px">Product Added Successfully</h4>
					<p style="font-size: 18px">You have successfully added <span style="color:
#2C6E63">{{ vendorProducts.newProductName }} <span>{{ vendorProducts.newProductsku }}</span></span></p>
				</div>
				<div @click="vendorProducts.newProductAdded = false" style="color: red" class="d-flex align-center">
					<span style="font-size: 18px">Close</span>
					<v-icon class="ml-1" size="24" style="cursor: pointer;">mdi mdi-close-circle-outline</v-icon>
				</div>
			</div>
		</v-card>
	</v-dialog>
	</v-container>
</template>
<script>
import {useVendorProductStore} from '~/stores/vendorProducts'
import {formattedPrice} from '~/utils/price'
import { onBeforeMount, onMounted, ref, watchEffect } from 'vue';
import {useEditVendorStore} from '~/stores/editProduct';
import {vendorUseApi} from '~/composables/vendorApi';
import { debounce } from 'lodash';
import { useVendorStore } from '~/stores/vendorStore';
import { onEvent } from '@/utils/eventBus';

export default {
	setup(props, ctx) {
		const selectedPage = ref(1)
		
		const tabs = [
				{ name: "All Products", prop: null, filterBy: null },
				{ name: "Active", prop: "status", filterBy: 'active' },
				{ name: "Drafts", prop: "status", filterBy: 'draft' },
				{ name: "Archived", prop: "archive", filterBy: 'archive' },
			]

		const vendorProducts = useVendorProductStore()
		const productLoading = ref(false)
		const filteredProductsData = ref([])
		const tab = ref("")
		const searchQuery = ref("")
		const loading = ref(false)
		const vendorStore = useVendorStore()
		const vendor = ref(vendorStore.vendor)
		const hasProduct = computed(() => vendor.value.vendor_details?.product_count > 0)
	
		const choose = (x) => {
			ctx.emit("changePage", x);
		}

		onEvent('product-updated', fetchFilteredProducts);
		
		onBeforeMount(async () => {
			if (vendor.value.vendor_details?.product_count > 0){
				await fetchFilteredProducts();
			}	
		});
		watch(() => [tab.value, selectedPage.value,searchQuery.value ], async() => {
			if (hasProduct.value){
				await fetchFilteredProducts();
			}
		});

		const editProduct = (product) => {
			choose('Edit Product')
			useEditVendorStore().setCurrentProduct(product)
		}
		async function fetchFilteredProducts() {
			try {
			filteredProductsData.value = await filterproductBy();
			} catch (error) {
			console.error(error);
			}
		} 
		async function  filterproductBy() {
			try {
			const api = vendorUseApi();
			let url = `vendor/products/?${tab.value.prop}=${tab.value.filterBy}&page=${selectedPage.value}`;
			productLoading.value = true
			
			// Check if the tab name is "Archived" and set the parameter accordingly
			if (tab.value.name === "All Products") {
				url=`vendor/products/?page=${selectedPage.value}`
			}
			if (tab.value.name === "Archived") {
				url = `vendor/products/?archive=true&page=${selectedPage.value}`;
			}
			if (searchQuery.value.trim()) {
				loading.value = true
				 url = `vendor/products/?search_global=${searchQuery.value}&page=${selectedPage.value}`;
			}

			const response = await api({
				url: url,
				method: 'get'
			});
			// Update vendorProducts with the response data
			vendorProducts.Products = response.data.data;
			vendorProducts.pagesNo = response.data.meta.last_page;
			vendorProducts.from = response.data.meta.from;
			vendorProducts.toPage = response.data.meta.to;
			vendorProducts.currentPage = response.data.meta.current_page;
			} catch (error) {
			console.error(error);
			}finally {
				loading.value = false
				productLoading.value = false
			}

			return vendorProducts.Products;
		}
		// onBeforeMount(async () => {
      	// 	await vendorProducts.getAllProduct();
    	// });
		
		return {
			choose,
			vendorProducts,
			vendor,
			selectedPage,
			editProduct,
			tabs,
			hasProduct,
			filteredProductsData,
			tab,
			fetchFilteredProducts,
			filterproductBy,
			searchQuery,
			loading,
			vendorStore,
			productLoading
		};
	},
	data() {
		return {
			showRestore: false,
			itemToArchive: null,
			sortByPrice: null,
			showDeleteModal: false,
			dialog: true,
			items1: [],
			items: [],
		
		};
	},

	computed: {
		pageOptions() {
            // Generate an array of numbers from 1 to vendorProducts.pagesNo
            return Array.from({ length: this.vendorProducts.pagesNo }, (_, index) => index + 1);
        },
  filteredProducts() {

    // Further filter based on the search query
    if (this.searchQuery) {
      result = result.filter(product => {
        return product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               product.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }

	// filter by price
	if (this.sortByPrice) {
      result = result.slice().sort((a, b) => {
        if (this.sortByPrice === 'highToLow') {
          return b.price - a.price;
        } else {
          return a.price - b.price;
        }
      });
    }

    return result;
  }},

	methods: {
		async archiveProduct(){
			this.showDeleteModal = false;
			try {
				const response = await this.vendorProducts.archiveProduct(this.itemToArchive)
				if (response){
					await this.fetchFilteredProducts();
					this.vendorProducts.successArchive = true
				}
			}catch(error) {
				console.error(error)
			}	
		},
		async deleteProduct(){
			this.showDeleteModal = false;
			try {
				const response = await this.vendorProducts.deleteProductPerm(this.itemToArchive)
				if (response){
					await this.fetchFilteredProducts();
					this.vendorProducts.successDelete = true
				}
			}catch(error) {
				console.error(error)
			}	
		},
		async restoreProduct() {
			this.showRestore = false;
			console.log(this.itemToArchive.id)
			try{
				const response = await this.vendorProducts.restoreArchived(this.itemToArchive)
				if (response){
					await this.fetchFilteredProducts();
					this.vendorProducts.successRestore = true
				}
			}catch(error) {
				console.error(error)
			}
		},
		handleDelete(item){
			this.itemToArchive = item;
			this.showDeleteModal = true;
			
		},
		handleRestore(item){
			this.itemToArchive = item;
			this.showRestore = true
		},
		sort(x, y) {
			var itm = this.items1;
			this.items = itm.filter((item) => {
				return item[x] == y;
			});
		},
		togglePriceSort() {
		this.sortByPrice = this.sortByPrice === 'highToLow' ? 'lowToHigh' : 'highToLow';
		
		this.vendorProducts.Products.sort((a, b) => {
		if (this.sortByPrice === 'highToLow') {
			return b.price - a.price; // For descending order
		} else {
			return a.price - b.price; // For ascending order
		}
    });
  },
	},
};
</script>
<style scoped>
	.sort-options:hover {
		background-color: #e5e5e5;
	}
</style>
