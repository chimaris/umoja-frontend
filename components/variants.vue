<template>
    <v-sheet class="cardStyle mt-4 pb-8" width="800">
						<div class="d-flex align-center">
							<p style="color: #333; font-size: 20px; font-weight: 600">Variants</p>
						</div>
						<v-divider class="my-4"></v-divider>
						
						
						<div v-if="showValues">

							<div v-if="colorOptions.length >= 1">
								<div class="d-flex justify-space-between align-center" >
									<span>Color</span>
									<v-btn @click="editColorVariants = true" size="large" style="border: 1px solid #969696" flat>
										<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Edit</span></v-btn
									>
								</div>
								<div class="py-4">
									<v-chip
										v-for="color of colorOptions"
										:key="color"
										color="#969696"
										size="x-large"
										density="compact"
										style="border-radius: 15px; margin-right: 5px"
									>
										<span style="text-align: center; color: #333; font-size: 14px; font-weight: 500">{{ color }}</span>
									</v-chip>
								</div>
								<v-divider class="mb-3"></v-divider> 
							</div>	
							<div v-if="editColorVariants">
							<div>
								<p class="inputLabel">Option Name</p>
								<v-select model-value="Color" append-inner-icon="mdi mdi-chevron-down" placeholder="Select option" :items="variantOptions" density="comfortable">
								</v-select>
							</div>

							<div>
								<p class="inputLabel">Option Values</p>
								<v-text-field @keyup.enter="handleColorUpdate" v-model="colorVariant" placeholder="Each product value should be seperated with a comma (,) Eg. Blue, Black, Red" density="comfortable" append-inner-icon="mdi mdi-alert-circle"> </v-text-field>

								<div  style="width: 100%; gap: 15px" class="mb-5 d-flex align-center" v-for="(value, index) of colorOptions" :key="value">
									<div style="background-color: #F8F8F8;  font-size: 16px; font-weight: 500; border-radius: 12px; padding: 16px; flex: 1;">
										{{ value }}
									</div>
									<div @click="deleteColor(index)" style="background-color: #f7edee; border-radius: 6px; padding: 7px 14px ">
										<v-icon style="cursor: pointer;  color: #C20052; font-size:23px;">mdi mdi-delete</v-icon>
									</div>
									</div>
							</div>
							<v-btn @click="editColorVariants = false" size="large" style="border: 1px solid #969696" flat>
								<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Done</span></v-btn>
							</div>
	
							<div v-if="sizeOptions.length >= 1">
								<div class="d-flex justify-space-between align-center">
									<span>Size</span>
									<v-btn @click="editSizeVariants = true" size="large" style="border: 1px solid #969696" flat>
										<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Edit</span></v-btn
									>
								</div>
								<div class="py-4">
									<v-chip
										v-for="size of sizeOptions"
										:key="size"
										color="#969696"
										size="x-large"
										density="compact"
										style="border-radius: 15px; margin-right: 5px"
									>
										<span style="text-align: center; color: #333; font-size: 14px; font-weight: 500">{{ size }}</span>
									</v-chip>
								</div>
								<v-divider class="mb-3"></v-divider>
							</div>
							<div v-if="editSizeVariants">
							<div>
								<p class="inputLabel">Option Name</p>
								<v-select model-value="Size" append-inner-icon="mdi mdi-chevron-down" placeholder="Select option" :items="variantOptions" density="comfortable">
								</v-select>
							</div>

							<div>
								<p class="inputLabel">Option Values</p>
								<v-text-field @keyup.enter="handleSizeUpdate" v-model="sizeVariant" placeholder="Each product value should be seperated with a comma (,) Eg. Blue, Black, Red" density="comfortable" append-inner-icon="mdi mdi-alert-circle"> </v-text-field>

								<div  style="width: 100%; gap: 15px" class="mb-5 d-flex align-center" v-for="(value, index) of sizeOptions" :key="value">
									<div style="background-color: #F8F8F8;  font-size: 16px; font-weight: 500; border-radius: 12px; padding: 16px; flex: 1;">
										{{ value }}
									</div>
									<div @click="deleteSize(index)" style="background-color: #f7edee; border-radius: 6px; padding: 7px 14px ">
										<v-icon style="cursor: pointer;  color: #C20052; font-size:23px;">mdi mdi-delete</v-icon>
									</div>
									</div>
							</div>
							<v-btn @click="editSizeVariants = false" size="large" style="border: 1px solid #969696" flat>
								<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Done</span></v-btn>
							</div>
	
		
							<div v-if="styleOptions.length >= 1">
								<div class="d-flex justify-space-between align-center">
									<span>Style</span>
									<v-btn @click="editStyleVariants" size="large" style="border: 1px solid #969696" flat>
										<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Edit</span></v-btn
									>
								</div>
								<div class="py-4">
									<v-chip
										v-for="style of styleOptions"
										:key="style"
										color="#969696"
										size="x-large"
										density="compact"
										style="border-radius: 15px; margin-right: 5px"
									>
										<span style="text-align: center; color: #333; font-size: 14px; font-weight: 500">{{ style }}</span>
									</v-chip>
								</div>
								<v-divider class="mb-3"></v-divider>
							</div> 
							<div v-if="editSizeVariants">
							<div>
								<p class="inputLabel">Option Name</p>
								<v-select model-value="Style" append-inner-icon="mdi mdi-chevron-down" placeholder="Select option" :items="variantOptions" density="comfortable">
								</v-select>
							</div>

							<div>
								<p class="inputLabel">Option Values</p>
								<v-text-field @keyup.enter="handleStyleUpdate" v-model="sizeVariant" placeholder="Each product value should be seperated with a comma (,) Eg. Blue, Black, Red" density="comfortable" append-inner-icon="mdi mdi-alert-circle"> </v-text-field>

								<div  style="width: 100%; gap: 15px" class="mb-5 d-flex align-center" v-for="(value, index) of styleOptions" :key="value">
									<div style="background-color: #F8F8F8;  font-size: 16px; font-weight: 500; border-radius: 12px; padding: 16px; flex: 1;">
										{{ value }}
									</div>
									<div @click="deleteStyle(index)" style="background-color: #f7edee; border-radius: 6px; padding: 7px 14px ">
										<v-icon style="cursor: pointer;  color: #C20052; font-size:23px;">mdi mdi-delete</v-icon>
									</div>
									</div>
							</div>
							<v-btn @click="editStyleVariants = false" size="large" style="border: 1px solid #969696" flat>
								<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Done</span></v-btn>
							</div>
		
							<div v-if="materialOptions.length >= 1">
								<div class="d-flex justify-space-between align-center">
									<span>Material</span>
									<v-btn @click="editMaterialVariants = true" size="large" style="border: 1px solid #969696" flat>
										<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Edit</span></v-btn
									>
								</div>
								<div class="py-4">
									<v-chip
										v-for="material of materialOptions"
										:key="material"
										color="#969696"
										size="x-large"
										density="compact"
										style="border-radius: 15px; margin-right: 5px"
									>
										<span style="text-align: center; color: #333; font-size: 14px; font-weight: 500">{{ material }}</span>
									</v-chip>
								</div>
								<v-divider class="mb-3"></v-divider>
							</div> 
							<div v-if="editMaterialVariants">
							<div>
								<p class="inputLabel">Option Name</p>
								<v-select model-value="Material" append-inner-icon="mdi mdi-chevron-down" placeholder="Select option" :items="variantOptions" density="comfortable">
								</v-select>
							</div>

							<div>
								<p class="inputLabel">Option Values</p>
								<v-text-field @keyup.enter="handleMaterialUpdate" v-model="materialVariant" placeholder="Each product value should be seperated with a comma (,) Eg. Blue, Black, Red" density="comfortable" append-inner-icon="mdi mdi-alert-circle"> </v-text-field>

								<div  style="width: 100%; gap: 15px" class="mb-5 d-flex align-center" v-for="(value, index) of materialOptions" :key="value">
									<div style="background-color: #F8F8F8;  font-size: 16px; font-weight: 500; border-radius: 12px; padding: 16px; flex: 1;">
										{{ value }}
									</div>
									<div @click="deleteMaterial(index)" style="background-color: #f7edee; border-radius: 6px; padding: 7px 14px ">
										<v-icon style="cursor: pointer;  color: #C20052; font-size:23px;">mdi mdi-delete</v-icon>
									</div>
									</div>
							</div>
							<v-btn @click="editMaterialVariants = false" size="large" style="border: 1px solid #969696" flat>
								<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Done</span></v-btn>
							</div>
						</div>
								

						<div v-if="showOptions">
							<div>
								<p class="inputLabel">Option Name</p>
								<v-select v-model="optionName" append-inner-icon="mdi mdi-chevron-down" placeholder="Select option" :items="variantOptions" density="comfortable">
								</v-select>
							</div>

							<div>
								<p class="inputLabel">Option Values</p>
								<v-text-field @keyup.enter="handleInput" v-model="inputValues" placeholder="Each product value should be seperated with a comma (,) Eg. Blue, Black, Red" density="comfortable" append-inner-icon="mdi mdi-alert-circle"> </v-text-field>

								<div  style="width: 100%; gap: 15px" class="mb-5 d-flex align-center" v-for="(value, index) of optionValues" :key="value">
									<div style="background-color: #F8F8F8; font-size: 16px; font-weight: 500; border-radius: 12px; padding: 16px; flex: 1;">
										{{ value }}
									</div>
									<div @click="deleteValue(index)" style="background-color: #f7edee; border-radius: 6px; padding: 7px 14px ">
										<v-icon style="cursor: pointer;  color: #C20052; font-size:23px;">mdi mdi-delete</v-icon>
									</div>
									</div>
							</div>
							<p style="color: #B00020; font-size: 14px; margin-top: 20px; margin-bottom: 20px">{{optionValueError}}</p>
							<v-btn @click="saveOptionValues" size="large" style="border: 1px solid #969696" flat>
								<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Done</span></v-btn>
						</div>

						<v-sheet class="cardStyle mt-4 pb-8" >
							<p @click="showOptions = !showOptions ? true : showOptions" style="color: #1273eb; cursor:pointer; font-size: 14px;font-weight: 600" class="d-flex align-center">
							<v-icon icon="mdi mdi-plus" class="mr-2"></v-icon> Add Options like size or color
							</p>
						</v-sheet>
	</v-sheet>
				
	<v-card style="padding: 20px; border-radius: 15px; width: 800px" v-if="allVariants.length >= 1">
						 
						<div class="d-flex py-4" style="gap: 20px; color: #1273eb;  font-size: 14px; font-weight: 600; line-height: 17px">
							<span style="color: #000">Select</span>
							<span @click="optionFilter = 'All'" style="cursor: pointer;">All</span>
							<span @click="optionFilter = 'Color'" style="cursor: pointer;">Color</span>
							<span @click="optionFilter = 'Size'" style="cursor: pointer;">Size</span>
							<span @click="optionFilter = 'Style'" style="cursor: pointer;">Style</span>
							<span @click="optionFilter = 'Material'" style="cursor: pointer;">Material</span>
						</div> 

						
						<v-table style="height: 80%; !important; overflow: scroll;" >
							<thead style="color: #2c6e63">
								<tr style="background: #edf0ef; border-radius: none">
									<th style="width: 40px" class="font-weight-medium text-left">
										<v-checkbox hide-details></v-checkbox>
									</th>
									<th style="font-size: 14px; width: 40%" class="font-weight-medium text-left">Variant</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Price</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Available</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">SKU</th>
									<th  @click="showEditPrice = true" style="font-size: 14px; cursor: pointer;" class="text-left px-1 font-weight-medium">Edit All</th>
								</tr>
							</thead>
							<tbody>
								<tr :style="chosen == index ? 'background:#DFDFDF' : ''" v-for="(variant, index) in allVariants" :key="index">
									<td class="text-grey-lighten-1 px-4">
										<v-checkbox  hide-details></v-checkbox>
									</td>

									<td class="tableThick px-4">{{variant.name}}</td>

									<td class="tableThick px-1">
										<span style="background-color: #f8f8f8; padding: 10px 14px; display: block; border-radius: 6px">{{formattedPrice(variant.price)}}</span>
									</td>
									<td class="tableThick px-1">
										<span style="background-color: #f8f8f8; outline: none; padding: 10px 14px; display: block; border-radius: 6px">{{variant.quantity}}</span>
									</td>
									<td class="tableThick px-1">
										<span style="background-color: #f8f8f8; outline: none; min-height: 40px; padding: 10px 14px; display: block; border-radius: 6px">{{variant.sku}}</span>
									</td>
									<td class="px-1">
										<v-btn @click="handleEditSingle(variant)" size="large" style="border: 1px solid #969696" flat>
											<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Edit</span></v-btn
										>
									</td>
								</tr>
						<v-dialog persistent v-model="showEditPrice" max-width="800"  >
							<v-card style="padding-bottom: 70px;" title="Edit Prices">
								<v-divider class="my-4"></v-divider>
								<v-card-text>
									<div style="display: flex; column-gap: 20px; flex-wrap: wrap; align-items: center; ">
										<div style="flex: 1; min-width: 500px;">
											<p class="inputLabel">Apply a price to all variants</p>
											<div class="d-flex">
												<v-text-field class="mr-3" :rules="numRules" v-model="allVariantPrice" placeholder="Enter price" density="comfortable"> </v-text-field>
												<v-btn @click="applyVariantPrice" flat style="background-color: #2c6e63; color: #edf0ef; font-size: 14px; font-weight: 600; " size="large"
													:style="{ opacity: allVariantPrice ? 1 : 0.5 }"
													>Apply to all</v-btn
												>
											</div>
										</div>
										<div style="flex: 1; min-width: 300px;">
											<p class="inputLabel">Apply quantity to all variants</p>
											<div class="d-flex">
												<v-text-field class="mr-3" :rules="numRules" v-model="allVariantQuantity" placeholder="Enter quantity" density="comfortable"> </v-text-field>
												<v-btn @click="applyVariantQuantity" flat style="background-color: #2c6e63; color: #edf0ef; font-size: 14px; font-weight: 600; " size="large"
													:style="{ opacity: allVariantQuantity ? 1 : 0.5 }"
													>Apply to all</v-btn
												>
											</div>
										</div>
										<div style="flex: 1; min-width: 300px;">
											<p class="inputLabel">Apply sku to all variants</p>
											<div class="d-flex">
												<v-text-field class="mr-3" v-model="allVariantSku"  placeholder="Enter sku" density="comfortable"> </v-text-field>
												<v-btn @click="applyVariantSku" flat style="background-color: #2c6e63; color: #edf0ef; font-size: 14px; font-weight: 600; " size="large"
													:style="{ opacity: allVariantSku ? 1 : 0.5 }"
													>Apply to all</v-btn
												>
											</div>
										</div>

									</div>
									<v-divider class="my-2"></v-divider>
									<v-table>
										<thead>
											<tr>
												<th style="font-size: 14px; width: 40%" class="font-weight-medium text-left">Variant</th>
												<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Available</th>
												<th style="font-size: 14px" class="text-left px-1 font-weight-medium">SKU</th>
												<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Price</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="variant in allVariants" :key=variant>
												<td>{{variant.name}}</td>
												<td>
													<v-text-field class="py-5" v-model="variant.quantity" placeholder="€ 0.00" density="comfortable"></v-text-field>
												</td>
												<td>
													<v-text-field class="py-5" v-model="variant.sku" density="comfortable"></v-text-field>
												</td>
												<td>
													<v-text-field class="py-5" v-model="variant.price" placeholder="€ 0.00" density="comfortable"></v-text-field>
												</td>
											</tr>
										</tbody>
									</v-table>
									<p style="text-align: end" v-if="vendorProducts.priceInfo.costPerItem">${{vendorProducts.priceInfo.costPerItem}} cost per item • Projected margin: {{vendorProducts.priceInfo.margin}}%</p>
									<p style="text-align: end" v-else>$0.00 cost per item • Projected margin: 0%</p>
									<v-divider class="my-4"></v-divider>
								</v-card-text>

								<v-card-actions style="position: fixed; bottom: 0; left: 0; right: 0; background-color: #ffffff; height: 70px;">
									<v-spacer></v-spacer>

									<v-btn @click="showEditPrice = false" size="large" style="border: 1px solid #969696" flat>
										<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
									>
									<v-btn @click="showEditPrice = false" flat style="background-color: #2c6e63; color: #edf0ef; font-size: 14px; font-weight: 600;" size="large"
										>Done</v-btn
									>
								</v-card-actions>
							</v-card>
						</v-dialog>
						<v-dialog persistent v-model="showEditSinglePrice" max-width="800" style="border: 1px solid #cecece; border-radius: 15px">
							<v-card title="Edit Variant">
								<v-divider class="my-4"></v-divider>

								<v-card-text>
									<v-table>
										<thead>
											<tr>
												<th style="font-size: 14px; width: 40%" class="font-weight-medium text-left">Variant</th>
												<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Available</th>
												<th style="font-size: 14px" class="text-left px-1 font-weight-medium">SKU</th>
												<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Price</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>{{selectedVariant.name}}</td>
												<td>
													<v-text-field class="pa-5" v-model="selectedVariant.quantity" placeholder="€ 0.00" density="comfortable"></v-text-field>
												</td>
												<td>
													<v-text-field v-model="selectedVariant.sku" density="comfortable"></v-text-field>
												</td>
												<td>
													<v-text-field v-model="selectedVariant.price" placeholder="€ 0.00" density="comfortable"></v-text-field>
												</td>
											</tr>
										</tbody>
									</v-table>
									
									<p style="text-align: end" v-if="vendorProducts.priceInfo.costPerItem">${{vendorProducts.priceInfo.costPerItem}} cost per item • Projected margin: {{vendorProducts.priceInfo.margin}}%</p>
									<p style="text-align: end" v-else>$0.00 cost per item • Projected margin: 0%</p>
									<v-divider class="my-4"></v-divider>
								</v-card-text>

								<v-card-actions>
									<v-spacer></v-spacer>

									<v-btn @click="showEditSinglePrice = false" size="large" style="border: 1px solid #969696" flat>
										<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
									>
									<v-btn @click="savePrice(selectedVariant)" flat style="background-color: #2c6e63; color: #edf0ef; font-size: 14px; font-weight: 600;" size="large"
										>Done</v-btn
									>
								</v-card-actions>
							</v-card>
						</v-dialog>
							</tbody>
						</v-table> 
	</v-card> 
	<p style="color: #B00020; font-size: 14px; margin-top: 20px">{{vendorProducts.productError}}</p>
    <p style="color: #B00020; font-size: 14px; margin-top: 20px">{{error}}</p>
    <v-btn @click="addProduct"  class="my-6" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
		<span class="mr-4"> Add Product</span>
		<v-progress-circular v-if="vendorProducts.loading" indeterminate :width="2" :size="25"></v-progress-circular>
	</v-btn>

	
</template>

<script>

import {inputRules, numRules} from '~/utils/formrules'
import {formattedPrice} from '~/utils/price'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import {useVendorProductStore} from '~/stores/vendorProducts'
import Variants from './variants.vue'
import {useRoute} from 'vue-router'
import { emitEvent } from '~/utils/eventBus';



export default {  
    setup() {
        const vendorProducts = useVendorProductStore()
        const route = useRoute()

        return {
            vendorProducts,
            route
        }
    },
        data() {
        return {
            error: "",
            allVariantPrice: "",
			allVariantQuantity: "",
			allVariantSku: "",
			colorVariant: "",
			styleVariant:"",
			sizeVariant:"",
			materialVariant:"",
			editColorVariants:  false ,
			editSizeVariants:  false ,
			editStyleVariants:  false ,
			editMaterialVariants:  false ,
			allVariantPrice: "",
			showEditPrice: false,
			optionFilter: "All",
			optionValueError: "",
			showValues: false,
			inputValues: "",
			colorOptions: [],
			sizeOptions: [],
			styleOptions: [],
			materialOptions: [],
			selectedVariant: "",
			showEditSinglePrice: false,
			optionName: "",
			optionValues: [],
			showOptions: false,
			variantOptions: ["Size", "Color", "Material", "Style"],
        }
    },
	computed: {
		allVariants() {
		const variants = [];

		// Check if any of the option arrays are non-empty
		const hasOptions = this.colorOptions.length > 0 || this.sizeOptions.length > 0 || this.styleOptions.length > 0 || this.materialOptions.length > 0;

		if (!hasOptions) {
			return variants;
		}

		// Otherwise, proceed to generate variants based on available options
		const optionArrays = [this.colorOptions, this.sizeOptions, this.styleOptions, this.materialOptions];

		function generateVariants(index, currentVariantName) {
			if (index >= optionArrays.length) {
			variants.push({ name: currentVariantName, price: 0, quantity: 0, sku: "", selected: false });
			} else {
			const currentOptions = optionArrays[index];
			if (currentOptions.length > 0) {
				currentOptions.forEach(option => {
				const variantName = currentVariantName ? `${currentVariantName}/${option}` : `${option}`;
				generateVariants(index + 1, variantName);
				});
			} else {
				generateVariants(index + 1, currentVariantName);
			}
			}
		}

		generateVariants(0, "");

		return variants;
		}



},

	methods: {
		savePrice(selectedVariant){
			const index = this.allVariants.findIndex(variant => variant.name == selectedVariant.name)
			if (index !== -1) {
				this.allVariants[index].price = selectedVariant.price
				this.allVariants[index].quantity = selectedVariant.quantity
				this.allVariants[index].sku = selectedVariant.sku
				console.log(this.allVariants)
				this.showEditSinglePrice = false;
			}
		},
		handleEditSingle(item) {
			this.selectedVariant = item;
			this.showEditSinglePrice = true;
		},
		filterVariantsByOption() {
        if (this.optionFilter === 'Color') {
            return this.allVariants.filter(variant => this.colorOptions.includes(variant));
        } else if (this.optionFilter === 'Size') {
            return this.allVariants.filter(variant => this.sizeOptions.includes(variant));
        } else if (this.optionFilter === 'Material') {
            return this.allVariants.filter(variant => this.materialOptions.includes(variant));
        } else if (this.optionFilter === 'Style') {
            return this.allVariants.filter(variant => this.styleOptions.includes(variant));
        } else {
            return this.allVariants;
        }
    },

	 handleInput() {
		const values = this.inputValues.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			// Check if the value already exists in optionValues
			if (!this.optionValues.some(option => option === value)) {
			// If not, add it to optionValues
			this.optionValues.push(value);
			}
		});
		this.inputValues = ""
    },
	handleColorUpdate() {
		const values = this.colorVariant.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			if (!this.colorOptions.some(option => option === value)) {
			this.colorOptions.push(value);
			}
		});
		this.colorVariant = ""
	},
	handleMaterialUpdate() {
		const values = this.materialVariant.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			if (!this.materialOptions.some(option => option === value)) {
			this.materialOptions.push(value);
			}
		});
		this.materialVariant= ""
	},
	handleSizeUpdate() {
		const values = this.sizeVariant.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			if (!this.sizeOptions.some(option => option === value)) {
			this.sizeOptions.push(value);
			}
		});
		this.sizeVariant = ""
	},
	handleStyleUpdate() {
		const values = this.styleVariant.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			if (!this.styleOptions.some(option => option === value)) {
			this.styleOptions.push(value);
			}
		});
		this.styleVariant= ""
	},
	deleteValue(index) {
		this.optionValues.splice(index, 1);
	},
	deleteColor(index){
		this.colorOptions.splice(index, 1);
	},
	deleteSize(index){
		this.sizeOptions.splice(index, 1);
	},
	deleteMaterial(index){
		this.materialOptions.splice(index, 1);
	},
	deleteStyle(index){
		this.sizeOptions.splice(index, 1);
	},
	saveOptionValues() {
		this.optionValueError = "";

			// Check if Option Name and Values are provided
			if (!this.optionName || this.optionValues.length <= 0) {
			this.optionValueError = "Please enter Option Name and Values!! make sure you click enter to save option values ";
			return;
			}

			// Check if any of the option values already exist in the corresponding options array
			const existingValues = this.optionValues.filter(value => {
			if (this.optionName === "Size") {
				return this.sizeOptions.includes(value);
			} else if (this.optionName === "Color") {
				return this.colorOptions.includes(value);
			} else if (this.optionName === "Material") {
				return this.materialOptions.includes(value);
			} else if (this.optionName === "Style") {
				return this.styleOptions.includes(value);
			}
			return false;
			});

			if (existingValues.length > 0) {
			this.optionValueError = `The following values already exist for ${this.optionName}: ${existingValues.join(', ')}`;
			setTimeout(() => {
			// Remove existing values from optionValues array
			existingValues.forEach(value => {
			const index = this.optionValues.indexOf(value);
			if (index !== -1) {
				this.optionValues.splice(index, 1);
			}
			});
			// Clear inputValues
			this.inputValues = "";
			this.optionValueError = "";
			}, 2000);
			return;
			}

			// Add new option values to the corresponding options array
			if (this.optionName === "Size") {
			this.sizeOptions = [...this.sizeOptions, ...this.optionValues];
			} else if (this.optionName === "Color") {
			this.colorOptions = [...this.colorOptions, ...this.optionValues];
			} else if (this.optionName === "Material") {
			this.materialOptions = [...this.materialOptions, ...this.optionValues];
			} else if (this.optionName === "Style") {
			this.styleOptions = [...this.styleOptions, ...this.optionValues];
			}

			this.showValues = true;
			this.showOptions = false;
			this.optionName = "";
			this.optionValues = [];
			this.editColorVariants = false;
	
		},
        applyVariantPrice() {
            if (this.allVariantPrice) {
            this.allVariants.forEach(variant => {
            variant.price = this.allVariantPrice;
        });
		this.allVariantPrice = ""
        }
	},
	applyVariantSku() {
            if (this.allVariantSku) {
            this.allVariants.forEach(variant => {
			variant.sku = this.allVariantSku;
        });
		this.allVariantSku = ""
        }
	},
	applyVariantQuantity() {
            if (this.allVariantQuantity) {
            this.allVariants.forEach(variant => {
			variant.quantity = this.allVariantQuantity;
        });
		this.allVariantQuantity = ""
        }
	},
	async addProduct() {
		this.error = "";
		this.vendorProducts.saveVariantsInfo(this.allVariants);
		this.vendorProducts.saveColorOptions(this.colorOptions);
		this.vendorProducts.saveSizeOptions(this.sizeOptions);
		this.vendorProducts.saveStyleOptions(this.styleOptions);
		this.vendorProducts.saveMaterialOptions(this.materialOptions);
    if (
        this.vendorProducts.generalInfo &&
        this.vendorProducts.textInfo &&
        this.vendorProducts.priceInfo &&
        this.vendorProducts.pictureInfo &&
        this.vendorProducts.inventoryInfo &&
        this.vendorProducts.shippingInfo
    ) {
		
		const response =  await this.vendorProducts.addVendorProduct();
		if (response) {	
			this.vendorProducts.newProductAdded = true;
			this.$emit('clear')
			this.colorOptions = [],
			this.sizeOptions = [],
			this.styleOptions = [],
			this.materialOptions = [],
			emitEvent('product-updated');
			this.$router.push('/vendor/dashboard/Products');
			
		}
       
    } else { 
		this.error = "Make sure you provided all necessary information for adding products"
	}
}
	}
}
</script>
