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
										<span style="text-align: center; color: #333; font-size: 14px; font-weight: 500">{{ color.name }}</span>
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
										{{ value.name }}
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
										<span style="text-align: center; color: #333; font-size: 14px; font-weight: 500">{{ size.name }}</span>
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
										{{ value.name }}
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
										<span style="text-align: center; color: #333; font-size: 14px; font-weight: 500">{{ style.name }}</span>
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
										{{ value.name }}
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
										<span style="text-align: center; color: #333; font-size: 14px; font-weight: 500">{{ material.name }}</span>
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
										{{ value.name }}
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
										{{ value.name }}
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
								</tr>
							</thead>
							<tbody>
								<tr :style="chosen == item.sn ? 'background:#DFDFDF' : ''" v-for="item in  filterVariantsByOption()" :key="item.sn">
									<td class="text-grey-lighten-1 px-4">
										<v-checkbox hide-details></v-checkbox>
									</td>

									<td class="tableThick px-4">{{item.name}}</td>

									<td class="tableThick px-1">
										<span style="background-color: #f8f8f8; padding: 10px 14px; display: block; border-radius: 6px">{{item.price}}</span>
									</td>
									<td class="tableThick px-1">
										<span style="background-color: #f8f8f8; outline: none; padding: 10px 14px; display: block; border-radius: 6px">{{item.quantity}}</span>
									</td>

									<td class="px-1">
										<v-btn @click="showEditPrice = true" size="large" style="border: 1px solid #969696" flat>
											<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Edit</span></v-btn
										>
									</td>
								</tr>
							</tbody>
						</v-table> 
	</v-card> 
	<p style="color: #B00020; font-size: 14px; margin-top: 20px">{{vendorProducts.productError}}</p>
    <p style="color: #B00020; font-size: 14px; margin-top: 20px">{{error}}</p>
    <v-btn @click="addProduct"  class="my-6" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
		<span class="mr-4"> Add Product</span>
		<v-progress-circular v-if="vendorProducts.loading" indeterminate :width="2" :size="25"></v-progress-circular>
	</v-btn>
						<!-- edit price  -->
	<v-dialog persistent v-model="showEditPrice" max-width="800" style="border: 1px solid #cecece; border-radius: 15px">

							<v-card title="Edit Prices">
								<v-divider class="my-4"></v-divider>

								<v-card-text>
									<div>
										<p class="inputLabel">Apply a price to all variants</p>
										<div class="d-flex">
											<v-text-field class="mr-3" :rules="numRules" v-model="allVariantPrice" append-inner-icon="mdi mdi-chevron-down" placeholder="Enter price" density="comfortable"> </v-text-field>
											<v-btn @click="applyVariantPrice" flat style="background-color: #2c6e63; color: #edf0ef; font-size: 14px; font-weight: 600; " size="large"
												:style="{ opacity: allVariantPrice ? 1 : 0.5 }"
												>Apply to all</v-btn
											>
										</div>
									</div>
									<v-divider class="my-4"></v-divider>
									<div v-for="variant in allVariants" :key=variant>
										<div class="d-flex justify-space-between" >
										<span>{{variant.name}}</span>
										<div>
											<v-text-field v-model="variant.price" placeholder="€ 0.00" density="comfortable" class="align-end" style="width: 200px; text-align: right">
                                                
											</v-text-field>
											<p v-if="vendorProducts.priceInfo.costPerItem">${{vendorProducts.priceInfo.costPerItem}} cost per item • Projected margin: {{vendorProducts.priceInfo.margin}}%</p>
											<p v-else>$0.00 cost per item • Projected margin: 0%</p>
										</div>
										</div>
										<v-divider class="my-4"></v-divider>
									</div>
								</v-card-text>

								<v-card-actions>
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
</template>

<script>

import {inputRules, numRules} from '~/utils/formrules'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import {useVendorProductStore} from '~/stores/vendorProducts'
import Variants from './variants.vue'
import {useRoute} from 'vue-router'



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
			optionName: "",
			optionValues: [],
			showOptions: false,
			variantOptions: ["Size", "Color", "Material", "Style"],
        }
    },
    computed: {
		allVariants() {
        return [...this.sizeOptions, ...this.colorOptions, ...this.materialOptions, ...this.styleOptions];
    	},
    },
	methods: {
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
			if (!this.optionValues.some(option => option.name === value)) {
			// If not, add it to optionValues
			this.optionValues.push({name: value, price: '€0.00', quantity: 0});
			}
		});
		this.inputValues = ""
    },
	handleColorUpdate() {
		const values = this.colorVariant.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			if (!this.colorOptions.some(option => option.name === value)) {
			this.colorOptions.push({name: value, price: '€0.00', quantity: 0, optionName: 'Color'});
			}
		});
		this.colorVariant = ""
	},
	handleMaterialUpdate() {
		const values = this.materialVariant.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			if (!this.materialOptions.some(option => option.name === value)) {
			this.materialOptions.push({name: value, price: '€0.00', quantity: 0, optionName: 'Material'});
			}
		});
		this.materialVariant= ""
	},
	handleSizeUpdate() {
		const values = this.sizeVariant.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			if (!this.sizeOptions.some(option => option.name === value)) {
			this.sizeOptions.push({name: value, price: '€0.00', quantity: 0, optionName: 'Size'});
			}
		});
		this.sizeVariant = ""
	},
	handleStyleUpdate() {
		const values = this.styleVariant.split(',').map(value => value.trim());
		const filteredValues = values.filter(value => value !== '');

		filteredValues.forEach(value => {
			if (!this.styleOptions.some(option => option.name === value)) {
			this.styleOptions.push({name: value, price: '€0.00', quantity: 0, optionName: 'Style'});
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
			this.optionValueError = ""
			if (!this.optionName || this.optionValues.length <= 0) {
				this.optionValueError = "Please enter Option Name and Values!! make sure you click enter to save option values "
				return
			} 
			if (this.optionName == "Size") {
				this.sizeOptions = [...this.sizeOptions, ...this.optionValues]
                this.sizeOptions.forEach(option => {
                    option.optionName = 'Size'
                });
			}
			if (this.optionName == "Color") {
				this.colorOptions = [...this.colorOptions, ...this.optionValues]
                this.colorOptions.forEach(option => {
                    option.optionName = 'Color'
                });
			}
			if (this.optionName == "Material") {
				this.materialOptions = [...this.materialOptions, ...this.optionValues]
                this.materialOptions.forEach(option => {
                    option.optionName = 'Material'
                });
			}
			if (this.optionName == "Style") {
				this.styleOptions = [...this.styleOptions, ...this.optionValues]
                this.styleOptions.forEach(option => {
                    option.optionName = 'Style'
                });
			}

			this.showValues = true;
			this.showOptions = false;
			this.optionName = "";
			this.optionValues = [];
			this.editColorVariants = false;
	
		},
        applyVariantPrice() {
            if (!isNaN(this.allVariantPrice)) {
            this.allVariants.forEach(variant => {
            variant.price = `€${this.allVariantPrice}.00`;
        });
        }
	},
	async addProduct() {
		this.error = "";
    if (this.allVariants.length < 1) {
        this.error = "You have not provided any information on variants";
		await this.vendorProducts.getAllProduct()

        return;
    } else {
        this.vendorProducts.saveVariantsInfo(this.allVariants);
    }

    if (
        this.vendorProducts.generalInfo &&
        this.vendorProducts.textInfo &&
        this.vendorProducts.priceInfo &&
        this.vendorProducts.pictureInfo &&
        this.vendorProducts.inventoryInfo &&
        this.vendorProducts.shippingInfo &&
        this.vendorProducts.variantsInfo
    ) {
		const response =  await this.vendorProducts.addVendorProduct();
		if (response) {
			this.$router.push('/vendor/dashboard/Products');
			this.vendorProducts.newProductAdded = true;
		}
       
    } else { 
		this.error = "Make sure you provided all necessary information for adding products"
	}
}
	}
}
</script>
