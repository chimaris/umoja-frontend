<template>
	<v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
		<div v-if="vendorProducts.Products.length > 0" class="d-flex align-center justify-space-between">
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
					</v-text-field>
				</div>
				<div class="d-flex align-center">
					<v-btn id="activate" style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3" v-on="on">
						Sort by
						<v-icon class="ml-2" icon="mdi mdi-tune-vertical"></v-icon>
					</v-btn>
						<v-menu activator="#activate" open-on-hover  transition="slide-x-transition"   :close-on-content-click="false">
							<v-list >
								<v-list-item class="sort-options" style="cursor: pointer; font-weight: 500">Availability</v-list-item>
								<v-list-item class="sort-options" style="cursor: pointer; font-weight: 500" >Sold</v-list-item>
							</v-list>
						</v-menu>
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

		<div v-if="vendorProducts.Products.length > 0" class="mt-5">
			<v-tabs v-model="tab" class="orders" color="green">
				<v-tab @click.stop="sort(item.prop, item.value)" v-for="item in tabs" :key="item" :value="item" class="d-flex text-capitalize align-center">
					{{ item.name }}
				</v-tab>
			</v-tabs>
			<v-divider></v-divider>
			<v-table
				style="    height: 80%; !important;
   overflow: scroll;"
			>
				<thead>
					<tr style="background: #f8f8f8; border-radius: 6px" class="rounded-lg">
						<th style="width: 50px" class="font-weight-medium text-left">
							<v-checkbox hide-details></v-checkbox>
						</th>
						<th style="font-size: 14px; width: 100px" class="font-weight-medium text-left">Product Details</th>
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
				<tbody>
					<!-- @click="chosen = item.sn" -->
					<tr :style="chosen == item.id ? 'background:#DFDFDF' : ''" v-for="item in filteredProducts" :key="item.id">
						<td class="text-grey-lighten-1 pl-4 px-1">
							<v-checkbox hide-details></v-checkbox>
						</td>
						<td style="position: relative; font-size: 14px; height: 100px">
							<div style="position: ; top: 24px; width: ">
								<v-menu class="pl-0" offset="9px" open-on-hover location="top">
									<template v-slot:activator="{ props }">
										<div v-bind="props" class="d-flex align-center pr-4 pl-2">
											<v-avatar color="grey-lighten-4" class="rounded-lg pa-1 mr-3 ml-0" size="50"
												><v-img
													:src="item.photo.split(',')[0]"
												></v-img
											></v-avatar>
											<div>
												<p class="mb-1" style="font-weight: 600; white-space: nowrap; font-size: 16px !important; line-height: 20px; color: #333333">
													{{ item.name }}
												</p>
												<p style="font-weight: 400; max-width: 300px; font-size: 14px; text-overflow: ellipsis; white-space: nowrap; line-height: 18px; color: #969696" class="text-truncate">
													{{ item.description }}
												</p>
											</div>
										</div></template
									>
									<v-card max-width="310" class="pa-6 rounded-lg" color="#2C6E63">
										<v-row class="d-flex align-start">
											<v-avatar color="grey-lighten-4" class="pa-1" size="70" rounded="lg">
												<v-img
													:src="item.photo.split(',')[1]"
												></v-img>
											</v-avatar>
											<v-col class="py-0">
												<p style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px">
													{{item.name}}
												</p>
												<p style="color: #cdd6d4; font-size: 12px; font-weight: 500; line-height: 20px">{{ item.category_name }}</p>

												<p style="color: #edf0ef; font-size: 16px; font-weight: 600; line-height: 20px" class="mt-1">€ {{item.price}}.00 per {{ item.unit }}</p>
											</v-col>
										</v-row>
									</v-card>
								</v-menu>
							</div>
						</td>

						<td style="height: 100px" class="align-center d-flex px-1">
							<v-chip style="color: #333; font-size: 10px; font-weight: 500" rounded="lg" class="" size="small" color="grey" variant="tonal">
								{{item.category_name}}
							</v-chip>
							<v-chip style="color: #333; font-size: 10px; font-weight: 500" rounded="lg" class="mx-2" size="small" color="grey" variant="tonal">
								{{ item.sub_category_name }}
							</v-chip>
						</td>
						<td class="tableThick px-1">
							<div class="h-100 d-flex align-center">
								<v-icon icon="mdi mdi-circle" class="mx-1" color="black" size="12"></v-icon>
								<v-icon icon="mdi mdi-circle" class="mx-1" color="yellow" size="12"></v-icon>
								<v-icon icon="mdi mdi-circle" class="mx-1" color="brown" size="12"></v-icon>
							</div>
						</td>
						<td class="tableLight px-1">
							<v-chip style="color: #333; font-size: 10px; font-weight: 500" rounded="lg" class="" size="small" color="green" variant="tonal">
								{{ item.status }}
							</v-chip>
						</td>
						<td class="tableThick px-1">€{{ item.price }}</td>
						<td class="tableThick px-1">
							<p>{{ item.made_with_ghana_leather }} in stock</p>
							<p style="color: #969696; font-weight: 400">for 3 variants</p>
						</td>

						<td class="tableLight px-1"><p style="color: #333; font-size: 14px; font-style: normal; font-weight: 600">{{ item.sku }}</p></td>
						<td class="text-grey-lighten-1 text-center px-1">
							<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="menubar text-grey-darken-3"> Edit </v-btn>
						</td>
						<td class="um px-1"><v-icon icon="mdi mdi-dots-horizontal"></v-icon></td>

						<!-- <td style="font-size: 14px;" class="text-grey-lighten-1 px-1">
           <span v-if="chosen !== item.sn ">
               {{ item.total }}
           </span>
           <v-btn v-else color="green" size="small" class=" rounded-lg"> See details</v-btn>
       </td> -->
					</tr>
				</tbody>
			</v-table>
		</div>

		<!-- If there is no Product show this -->
		<div
			v-if="vendorProducts.Products.length === 0"
			class="d-flex flex-column justify-center align-center"
			style="max-height: 100%; height: 90vh; border: 1px solid #cecece; border-radius: 15px"
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
export default {
	setup(props, ctx) {
		const choose = (x) => {
			ctx.emit("changePage", x);
		}
		const vendorProducts = useVendorProductStore()
		return {
			choose,
			vendorProducts
		};
	},
	data() {
		return {
			sortByPrice: null,
			dialog: true,
			searchQuery: "",
			tab: "",
			tabs: [
				{ name: "All Products", prop: null, filterBy: null },
				{ name: "Active", prop: "status", filterBy: 'Active' },
				{ name: "Drafts", prop: "status", filterBy: 'Draft' },
				{ name: "Archived", prop: "status", filterBy: null },
			],
			items1: [],
			items: []
		};
	},

	computed: {
  filteredProducts() {
    let result = this.vendorProducts.Products;

    // Filter based on the selected tab
    if (this.tab) {
      const prop = this.tab.prop;
      const value = this.tab.filterBy;
      result = result.filter(item => {
        if (prop === null) {
          return true; // Show all products for "All Products" tab
        } else {
          return item[prop] === value; // Filter products based on the selected tab
        }
      });
    }

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
  }
},
	created() {
		this.vendorProducts.getAllProduct()
	},
	methods: {
		
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
