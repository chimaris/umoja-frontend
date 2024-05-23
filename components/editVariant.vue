<template>
    <v-sheet class="cardStyle mt-4 pb-8" width="800">
						<div class="d-flex align-center">
							<p style="color: #333; font-size: 20px; font-weight: 600">Variants</p>
						</div>
						<v-divider class="my-4"></v-divider>

							<div v-if="product.colors && product.colors.length >= 1">
								<div class="d-flex justify-space-between align-center" >
									<span>Color</span>
									<v-btn @click="editColorVariants = true" size="large" style="border: 1px solid #969696" flat>
										<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Edit</span></v-btn
									>
								</div>
								<div class="py-4">
									<v-chip
										v-for="color of product.colors"
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

								<div  style="width: 100%; gap: 15px" class="mb-5 d-flex align-center" v-for="(value, index) of product.colors" :key="value">
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
	
							<div v-if="product.sizes && product.sizes.length >= 1">
								<div class="d-flex justify-space-between align-center">
									<span>Size</span>
									<v-btn @click="editSizeVariants = true" size="large" style="border: 1px solid #969696" flat>
										<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Edit</span></v-btn
									>
								</div>
								<div class="py-4">
									<v-chip
										v-for="size of product.sizes"
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

								<div  style="width: 100%; gap: 15px" class="mb-5 d-flex align-center" v-for="(value, index) of product.sizes" :key="value">
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
	
		
							<div v-if="product.styles && product.styles.length >= 1">
								<div class="d-flex justify-space-between align-center">
									<span>Style</span>
									<v-btn @click="editStyleVariants" size="large" style="border: 1px solid #969696" flat>
										<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Edit</span></v-btn
									>
								</div>
								<div class="py-4">
									<v-chip
										v-for="style of product.styles"
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

								<div  style="width: 100%; gap: 15px" class="mb-5 d-flex align-center" v-for="(value, index) of product.styles" :key="value">
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
		
							<div v-if="product.materials && product.materials.length >= 1">
								<div class="d-flex justify-space-between align-center">
									<span>Material</span>
									<v-btn @click="editMaterialVariants = true" size="large" style="border: 1px solid #969696" flat>
										<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Edit</span></v-btn
									>
								</div>
								<div class="py-4">
									<v-chip
										v-for="material of product.materials"
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

								<div  style="width: 100%; gap: 15px" class="mb-5 d-flex align-center" v-for="(value, index) of product.materials" :key="value">
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
				
	<v-card style="padding: 20px; border-radius: 15px; width: 800px" v-if="allVariants?.length >= 0">
						 
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
										<span style="background-color: #f8f8f8; outline: none; padding: 10px 14px; display: block; border-radius: 6px">{{variant.no_available}}</span>
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
													<v-text-field class="py-5" v-model="variant.no_available" placeholder="€ 0.00" density="comfortable"></v-text-field>
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
													<v-text-field class="pa-5" v-model="selectedVariant.no_available" placeholder="€ 0.00" density="comfortable"></v-text-field>
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
    <p style="color: #B00020; font-size: 14px; margin-top: 20px">{{error}}</p>
    <v-btn @click="saveVariant()"   class="my-6" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
		<span class="mr-4"> Save</span>
		<v-progress-circular v-if="editStore.loading" indeterminate :width="2" :size="20"></v-progress-circular>
	</v-btn>

	
</template>

<script>

import {inputRules, numRules} from '~/utils/formrules'
import {formattedPrice} from '~/utils/price'
import { ref, computed, onMounted, onBeforeUnmount} from 'vue';
import {useVendorProductStore} from '~/stores/vendorProducts'
import Variants from './variants.vue'
import {useRoute} from 'vue-router'
import {useEditVendorStore} from '~/stores/editProduct';



export default {  
    setup() {
        const vendorProducts = useVendorProductStore()
        const route = useRoute()
		

        return {
            vendorProducts,
            route
        }
    },
    props: ["product"],
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
			inputValues: "",
			selectedVariant: "",
			showEditSinglePrice: false,
			optionName: "",
			optionValues: [],
			showOptions: false,
			variantOptions: ["Size", "Color", "Material", "Style"],
        }
    },
	computed: {
        editStore(){
            return useEditVendorStore()
        },
		currentVariants() {
			const variants = []
		

		// Check if any of the option arrays are non-empty
		const hasOptions = this.product.colors.length > 0 || this.product.sizes.length > 0 || this.product.styles.length > 0 || this.product.materials.length > 0;

		if (!hasOptions) {
			return variants;
		}

		// Otherwise, proceed to generate variants based on available options
		const optionArrays = [this.product.colors, this.product.sizes, this.product.styles, this.product.materials];

		function generateVariants(index, currentVariantName) {
			if (index >= optionArrays.length) {
			variants.push({ name: currentVariantName, price: 0, no_available: 0, sku: "", selected: false });
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
		},
		deleteVariant() {
			const currentVariants = this.currentVariants;
			const existingVariants = this.product.variations || [];

			// Compare existing variants with current variants and find variants to delete
			const deleteVariants = existingVariants.filter(existingVariant => {
				return !currentVariants.some(currentVariant => currentVariant.name === existingVariant.name);
			});

			return deleteVariants;
		},
		allVariants() {
    const variants = [];
    const existingVariants = this.product.variations || [];

    // Check if any of the option arrays are non-empty
    const hasOptions = this.product.colors.length > 0 || this.product.sizes.length > 0 || this.product.styles.length > 0 || this.product.materials.length > 0;

    if (!hasOptions) {
        return existingVariants; // Return existing variants if no options are available
    }

    // Otherwise, proceed to generate variants based on available options
    const optionArrays = [this.product.colors, this.product.sizes, this.product.styles, this.product.materials];

    function generateVariants(index, currentVariantName) {
        if (index >= optionArrays.length) {
            // Check if the variant name already exists in existing variants and not in deleteVariants
            if (!existingVariants.some(variant => variant.name === currentVariantName)) {
                variants.push({ name: currentVariantName, price: 0, no_available: 0, sku: "", selected: false });
            }
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

    // Merge existing variants with generated variants
    return variants.concat(existingVariants);
}


},

	methods: {
        async saveVariant() {
			if (this.allVariants.length == 0){
				return
			}
        try {
            this.editStore.loading = true;
            this.editStore.saveVariantsInfo(this.allVariants);
			this.editStore.saveDeleteVariant(this.deleteVariant);
			this.editStore.saveCurrentVariant(this.currentVariants)
            const data = {
                colors: this.product.colors,
                sizes: this.product.sizes,
                styles: this.product.styles,
                materials: this.product.materials
            };


            await this.editStore.updateVariants(data);
			this.$router.push('/vendor/dashboard/Products')
            // If the update is successful, update the local storage item
            setLocalStorageItem("current-edit", this.product);
        } catch (error) {
            // Handle errors
            if (error.response) {
                this.error = error.response.data.message || 'An error occurred while updating variants';
            } else if (error.request) {
                this.error = 'No response received from the server. Please try again later.';
            } else {
                this.error = 'An error occurred. Please try again later.';
            }
            return false;
        } finally {
            this.editStore.loading = false;
        }
        },

		savePrice(selectedVariant){
			const index = this.allVariants.findIndex(variant => variant.name == selectedVariant.name)
			if (index !== -1) {
				this.allVariants[index].price = selectedVariant.price
				this.allVariants[index].no_available = selectedVariant.no_available
				this.allVariants[index].sku = selectedVariant.sku
				this.showEditSinglePrice = false;
			}
		},
		handleEditSingle(item) {
			this.selectedVariant = item;
			this.showEditSinglePrice = true;
		},
		filterVariantsByOption() {
        if (this.optionFilter === 'Color') {
            return this.allVariants.filter(variant => this.product.colors.includes(variant));
        } else if (this.optionFilter === 'Size') {
            return this.allVariants.filter(variant => this.product.sizes.includes(variant));
        } else if (this.optionFilter === 'Material') {
            return this.allVariants.filter(variant => this.product.materials.includes(variant));
        } else if (this.optionFilter === 'Style') {
            return this.allVariants.filter(variant => this.product.styles.includes(variant));
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
			if (!this.product.colors.some(option => option === value)) {
                this.product.colors.push(value);
			}
		});
		this.colorVariant = ""
	},
	handleMaterialUpdate() {
		const values = this.materialVariant.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			if (!this.product.materials.some(option => option === value)) {
                this.product.materials.push(value);
			}
		});
		this.materialVariant= ""
	},
	handleSizeUpdate() {
		const values = this.sizeVariant.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			if (!this.product.sizes.some(option => option === value)) {
                this.product.sizes.push(value);
			}
		});
		this.sizeVariant = ""
	},
	handleStyleUpdate() {
		const values = this.styleVariant.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			if (!this.product.styles.some(option => option === value)) {
                this.product.styles.push(value);
			}
		});
		this.styleVariant= ""
	},
	deleteValue(index) {
		this.optionValues.splice(index, 1);
	},
	deleteColor(index){
		this.product.colors.splice(index, 1);
	},
	deleteSize(index){
		this.product.sizes.splice(index, 1);
	},
	deleteMaterial(index){
		this.product.materials.splice(index, 1);
	},
	deleteStyle(index){
		this.product.sizes.splice(index, 1);
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
				return this.product.sizes.includes(value);
			} else if (this.optionName === "Color") {
				return this.product.colors.includes(value);
			} else if (this.optionName === "Material") {
				return this.product.materials.includes(value);
			} else if (this.optionName === "Style") {
				return this.product.styles.includes(value);
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
                this.product.sizes = [...this.product.sizes, ...this.optionValues];
			} else if (this.optionName === "Color") {
                this.product.colors = [...this.product.colors, ...this.optionValues];
			} else if (this.optionName === "Material") {
                this.product.materials = [...this.product.materials, ...this.optionValues];
			} else if (this.optionName === "Style") {
                this.product.styles = [...this.product.styles, ...this.optionValues];
			}

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
			variant.no_available = this.allVariantQuantity;
        });
		this.allVariantQuantity = ""
        }
	},
	}
}
</script>
