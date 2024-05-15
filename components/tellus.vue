<template>
	<div>
		<h1 style="font-weight: 600; font-size: 32px; color: #1a1d1f">Tell us more about your business</h1>
		<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #9ea5ad">Complete your company information</p>
		<div class="pt-8 pb-12" style="max-width: 502px">
			<p class="inputLabel">What African country are you representing?</p>
			<v-select
				v-model="vendor.rep_country"
				:items="countries"
				append-inner-icon="mdi mdi-chevron-down"
				placeholder="Select African Country"
				density="comfortable"
				:rules="inputRules"
			>
			</v-select>
		
			<p class="inputLabel" >What type of company is your Business Category</p>

			<v-select
				v-model="vendor.business_type"
				append-inner-icon="mdi mdi-chevron-down"
				:items="companyCategories"
				placeholder="Select"
				density="comfortable"
				:rules="inputRules"
			>
			</v-select>
			<p class="inputLabel">Business name</p>

			<v-text-field :rules="inputRules" v-model="vendor.business_name" placeholder="Type your official business name" density="comfortable"> </v-text-field>

			<p class="inputLabel">Business Website <span><i class="mdi mdi-information" style="color: #1C274C"></i></span></p>

			<v-text-field :rules="inputRules" v-model="vendor.business_website" placeholder="http://www." density="comfortable"> </v-text-field>
			<p class="inputLabel">Add business images <span style="color: #969696;">(at least 5-10 pictures)</span></p>
			<div 
			@dragenter.prevent
			@dragleave.prevent
			@dragover.prevent
			@drop.prevent="drop"
			@change="upLoadFile"
			 class="d-flex align-center flex-column rounded-lg pa-5" style="border: 1px solid #EAECF0;">
        <label for="file-input">
					<v-icon style="border: 1px solid #EAECF0; width: 50px; height: 50px;" color="#9EA5AD" class="mb-4 rounded-lg d-flex align-center justify-center" icon="mdi mdi-file-upload-outline"></v-icon>
				</label>
				<label class="mb-1" style="color: #475467; font-weight: 400; font-size: 16px;" for="file-input"><span style="color: #2C6E63; font-weight: 600;">Click to upload</span> or drag and drop </label>
				<span style="font-weight: 400; font-size: 16px; color: #475467;">SVG, PNG, JPG, or GIF (max, 800px x 400px)</span>
				<input class="droppedFile" id="file-input" type="file" multiple style="display: none;" accept=".svg, .png, .jpeg, .jpg, .gif">
      </div>
			<p style="color:red; font-size: 14px;">{{ errorMessage }} </p>
		
			<ul class="my-7" v-if="showProgress">
				<li v-for="(file, index) in files" :key="index" class="d-flex align-center py-2 rounded-lg px-4 mb-4" style="border: 1px solid #EAECF0; justify-content: space-between; ">
					<fileUploading :file="file" />
				</li>
			</ul>
			<ul>
				<li v-for="(file, index) in upLoadedFiles" :key="index" class="d-flex align-center py-2 rounded-lg px-4 mb-4" style="border: 1px solid #EAECF0; justify-content: space-between; ">
					<fileUploaded :file="file" />
				</li>
			</ul>
			
			<p class="mt-4" style="font-weight: 600; font-size: 20px; line-height: 30px; color: #1a1d1f">Verify your business location</p>
			<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #9ea5ad" class="mb-8">
				You will need to upload a copy of a utility bill associated with this address in the documentation part of the onboarding.
			</p>
			

			<p class="inputLabel">Address</p>
			<v-text-field :rules="inputRules" v-model="vendor.address" placeholder="Enter address" density="comfortable"> </v-text-field>

			
			<p class="inputLabel">Country</p>

			<v-select
				v-model="vendor.country_name"
				:items="countries"
				append-inner-icon="mdi mdi-chevron-down"
				placeholder="Select Country"
				density="comfortable"
				:rules="inputRules"
				@change="fetchStates(vendor?.country_name)"
			>
			</v-select>
			<p class="inputLabel">State</p>
			<v-select 
			v-model="vendor.state" 
			color="green"
			:loading="loadingStates"
			append-inner-icon="mdi mdi-chevron-down" 
			placeholder="Select State" 
			density="comfortable" 
			:items="states"
			@change="fetchCities(vendor?.country_name, vendor?.state)"
			:rules="inputRules"> 
			</v-select>

				<p class="inputLabel">City</p>
			<v-select 
			v-model="vendor.city" 
			:loading="loadingCities"
			color="green"
			append-inner-icon="mdi mdi-chevron-down" 
			placeholder="Select" density="comfortable" 
			:items="cities"
			:rules="inputRules"> 
					
			</v-select>
			<p style="color: red; font-size: 16px;" class="mb-4">{{ formError }}</p>
			<v-btn class="my-5" @click="submit" flat style="background-color: #2c6e63; color: #fff" size="large">Save and continue</v-btn>
		</div>
	</div>
</template>

<script setup>
import { ref, defineEmits, onMounted} from 'vue';
import { useVendorStore } from '~/stores/vendorStore';
import axios from 'axios'
import { on } from 'events';
import {inputRules} from '~/utils/formrules'
import { countries, fetchStates, fetchCities, states, cities, loadingStates, loadingCities } from '~/utils/countryapi'

const vendorStore = useVendorStore()
const vendor = ref([])

onMounted(()=> {
	if (!vendorStore.vendor.vendor_details) {
		vendor.value = []
	}else {
		vendor.value = vendorStore.vendor.vendor_details
		console.log(vendorStore.getVendor)
	}
})

const businessImages = ref([])

const errorMessage = ref("")
const formError = ref("")


const files = ref([])
const upLoadedFiles = ref([])
const showProgress = ref(false)


const emit = defineEmits(['submit']);



const companyCategories = [
  "Technology", "Finance", "Fashion", "Healthcare", "Retail", "Manufacturing", "Education",
  "Transportation", "Hospitality", "Real Estate", "Energy", "Media", "Construction", "Other"
];

const submit = async () => {
	formError.value = ""
	const companyInfo = {
		rep_country: vendor.value.rep_country,
		business_type: vendor.value.business_type,
		business_name: vendor.value.business_name,
		business_website: vendor.value.business_website,
		business_image: businessImages.value.join(', '),
		address: vendor.value.address,
		state: vendor.value.state,
		city: vendor.value.city,
		country_name: vendor.value.country_name
	}
	if (!isFormValid()) {
		formError.value = "Please fill in all required fields."
		return;
	} 	
	try{
		await vendorStore.registerVendor(companyInfo)
		emit('submit')
		return
	}catch(error){
		if (error.response) {
			formError.value = error.response.data.message || 'An error occurred.';
        } else if (error.request) {
			formError.value = 'No response received from server. Please try again later.';
        } else {
			formError.value = 'An error occurred. Please try again later.';
        }
        return 
	}
	
			
};



watch(() => vendor.value.country_name, () => {
	fetchStates(vendor.value.country_name)
		});

watch(() => vendor.value.state, () => {
	fetchCities(vendor.value.country_name, vendor.value.state);
		});
function isFormValid() {
	if (businessImages.value.length < 5) {
		errorMessage.value = 'You must upload a minimum of 5 images!!'
	}
	if (
		vendor.value.rep_country &&
		vendor.value.business_type &&
		vendor.value.business_name&&
		vendor.value.business_website &&
		vendor.value.address && 
		vendor.value.city &&
		vendor.value.state &&
		vendor.value.country_name
	) {
		errorMessage.value = ''
		return true
	}else {
		return false
	}
}
function upLoadFile() {
	    if (upLoadedFiles.value.length == 10) {
			errorMessage.value = "Maximum number of file allowed is 10"
			return;
		}
		const file = document.querySelector(".droppedFile").files[0]
		if(!file) return;
		
		const allowedFiles = [".gif", ".png", ".jpeg", ".jpg", ".svg"]
		const maxAllowedWidth = 800;
		const maxAllowedHeight = 400;
		const fileExtension = file.name.split(".").pop().toLowerCase();
		
		if (!allowedFiles.includes("." + fileExtension)) {
					errorMessage.value = "Please upload files having extensions: " + allowedFiles.join(', ');
					return;
			}
		errorMessage.value = ""

		const img = new Image();
		img.src = URL.createObjectURL(file);
		img.onload = function () {
			if (img.width > maxAllowedWidth || img.height > maxAllowedHeight) {
				errorMessage.value = "Image dimensions exceeds the maximum allowed dimensions (800px x 400px)."
				return;
			}
			errorMessage.value = "";
			const filename = file.name
			const formData = new FormData();
			formData.append('business_image', file)
			files.value.push({name: filename, loading: 0})
			showProgress.value = true;

			axios.post("https://umoja-production-9636.up.railway.app/api/vendor/upload", formData, {
			headers: {
					Authorization: `Bearer ${localStorage.getItem('vendorToken')}`
					},
			onUploadProgress: ({loaded, total}) => {
				files.value[files.value.length - 1].loading = Math.floor((loaded / total) * 100);
				if (loaded == total) {
					const fileSize = (total < 1024) ? total + "KB" : (loaded / (1024 * 1024)).toFixed(2) + "MB";
					upLoadedFiles.value.push({name: filename, size: fileSize});
					files.value = [];
				}
			}
			
			})
			.then(response => {
				const businessImg = response.data.business_image
				businessImages.value = [...businessImages.value, businessImg]
			})
			.catch(error => {
				if (error.response) {
				this.error = error.response.data.message || 'An error occurred during file upload.';
				} else if (error.request) {
				this.error = 'No response received from server. Please try again later.';
				} else {
				this.error = 'An error occurred. Please try again later.';
				}
			});
			};

		img.onerror = function () {
			errorMessage.value = "Failed to load the image"
		};


	
}

function drop(e) {
	if (upLoadedFiles.value.length >= 10) {
			errorMessage.value = "Maximum number of files images allowed is 10"
			return;
		}
	const file= e.dataTransfer.files[0]
	if(!file) return;
		
		const allowedFiles = [".gif", ".png", ".jpeg", ".jpg", ".svg"]
		const maxAllowedWidth = 800;
		const maxAllowedHeight = 400;
		const fileExtension = file.name.split(".").pop().toLowerCase();
		
		if (!allowedFiles.includes("." + fileExtension)) {
					errorMessage.value = "Please upload files having extensions: " + allowedFiles.join(', ');
					return;
			}
		errorMessage.value = ""

		const img = new Image();
		img.src = URL.createObjectURL(file);
		img.onload = function () {
			if (img.width > maxAllowedWidth || img.height > maxAllowedHeight) {
				errorMessage.value = "Image dimensions exceeds the maximum allowed dimensions (800px x 400px)."
				return;
			}
			errorMessage.value = "";
			const filename = file.name
			const formData = new FormData();
			formData.append('business_image', file)
			files.value.push({name: filename, loading: 0})
			showProgress.value = true;

			axios.post("https://umoja-production-9636.up.railway.app/api/vendor/upload", formData, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('vendorToken')}`
					},
			onUploadProgress: ({loaded, total}) => {
				files.value[files.value.length - 1].loading = Math.floor((loaded / total) * 100);
				if (loaded == total) {
					const fileSize = (total < 1024) ? total + "KB" : (loaded / (1024 * 1024)).toFixed(2) + "MB";
					upLoadedFiles.value.push({name: filename, size: fileSize});
					files.value = [];
				}
			}
			
			})
			.then(response => {
				const businessImg = response.data.business_image
				businessImages.value = [...businessImages.value, businessImg]
			})
			.catch(error => {
				// Handle errors here
				console.error(error);
			});
			};

		img.onerror = function () {
			errorMessage.value = "Failed to load the image"
		};

	}

	



	

</script>

