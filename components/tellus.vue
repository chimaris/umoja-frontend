<template>
	<div>
		<h1 style="font-weight: 600; font-size: 32px; color: #1a1d1f">Tell us more about your business</h1>
		<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #9ea5ad">Complete your company information</p>
		<div class="pt-8 pb-12" style="max-width: 502px">
			<p class="inputLabel">What African country are you representing?</p>
			<v-select
				v-model="selectedCountry"
				:items="countries"
				append-inner-icon="mdi mdi-chevron-down"
				placeholder="Select African Country"
				density="comfortable"
				:rules="inputRules"
			>
			</v-select>
		
			<p class="inputLabel" >What type of company is (Business name)</p>

			<v-select
				v-model="selectedCompanyCategory"
				append-inner-icon="mdi mdi-chevron-down"
				:items="companyCategories"
				placeholder="Select"
				density="comfortable"
				:rules="inputRules"
			>
			</v-select>
			<p class="inputLabel">Business name</p>

			<v-text-field :rules="inputRules" v-model="businessName" placeholder="Type your official business name" density="comfortable"> </v-text-field>

			<p class="inputLabel">Business Website <span><i class="mdi mdi-information" style="color: #1C274C"></i></span></p>

			<v-text-field :rules="inputRules" v-model="businessWebsite" placeholder="http://www." density="comfortable"> </v-text-field>
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
			<v-text-field :rules="inputRules" v-model="businessAddress" placeholder="Enter address" density="comfortable"> </v-text-field>

			
			<p class="inputLabel">Country</p>

			<v-select
				v-model="selectedBusinessCountry"
				:items="countries"
				append-inner-icon="mdi mdi-chevron-down"
				placeholder="Select Country"
				density="comfortable"
				:rules="inputRules"
				@change="fetchStates(selectedBusinessCountry)"
			>
			</v-select>
			<p class="inputLabel">State</p>
			<v-select 
			v-model="selectedState" 
			color="green"
			:loading="loadingStates"
			append-inner-icon="mdi mdi-chevron-down" 
			placeholder="Select State" 
			density="comfortable" 
			:items="states"
			@change="fetchCities(selectedBusinessCountry, selectedState)"
			:rules="inputRules"> 
			</v-select>

				<p class="inputLabel">City</p>
			<v-select 
			v-model="selectedCity" 
			:loading="loadingCities"
			color="green"
			append-inner-icon="mdi mdi-chevron-down" 
			placeholder="Select" density="comfortable" 
			:items="cities"
			:rules="inputRules"> 
					
			</v-select>
			<p style="color: red; font-size: 16px;" class="mb-4">{{ formError }}</p>
			<v-btn @click="submit()" style="border: 1px solid #e5e5e5" size="large" variant="outlined">Save and continue</v-btn>
		</div>
	</div>
</template>

<script setup>
import { ref, defineEmits, reactive, watchEffect} from 'vue';
import { useVendorStore } from '~/stores/vendorStore';
import axios from 'axios'
import { on } from 'events';
import {inputRules} from '~/utils/formrules'
import { countries, fetchStates, fetchCities, states, cities, loadingStates, loadingCities } from '~/utils/countryapi'

const vendorStore = useVendorStore()


const selectedCountry = ref("");
const selectedCompanyCategory = ref("");
const businessName = ref("");
const businessWebsite = ref("")
const businessAddress = ref("");
const selectedBusinessCountry = ref("");
const selectedState = ref("");
const selectedCity = ref("");
const businessImages = ref([])

const errorMessage = ref("")
const formError = ref("")


const files = ref([])
const upLoadedFiles = ref([])
const showProgress = ref(false)


// const states = ref([]);
// const cities = ref([]);

const emit = defineEmits(['submit']);





const companyCategories = [
  "Technology", "Finance", "Fashion", "Healthcare", "Retail", "Manufacturing", "Education",
  "Transportation", "Hospitality", "Real Estate", "Energy", "Media", "Construction", "Other"
];

const submit = () => {
	const companyInfo = {
		selectedCountry : selectedCountry.value,
		selectedCompanyCategory: selectedCompanyCategory.value,
		businessName: businessName.value,
		businessWebsite: businessWebsite.value,
		business_image: businessImages.value.join(', '),
		businessAddress: businessAddress.value,
		selectedBusinessCountry: selectedBusinessCountry.value,
		selectedState: selectedState.value,
		selectedCity: selectedCity.value
	}
	if (!isFormValid()) {
		formError.value = "Please fill in all required fields."
		return;
	} 
	formError.value = ""
	if (!vendorStore.isCompanyInfoComplete) {
		vendorStore.setCompanyInfo(companyInfo)
		vendorStore.markSectionComplete('isCompanyInfoComplete')
		console.log(vendorStore.companyInfo)
	}
	emit('submit')
			
};





watchEffect(() => {
	fetchStates(selectedBusinessCountry.value)
});

watchEffect(() => {
	fetchCities(selectedBusinessCountry.value, selectedState.value);
});

function isFormValid() {
	if (businessImages.value.length < 5) {
		errorMessage.value = 'You must upload a minimum of 5 images!!'
	}
	if (
		selectedCountry.value &&
		selectedCompanyCategory.value &&
		businessName.value &&
		businessWebsite.value &&
		businessAddress.value && 
		selectedBusinessCountry.value &&
		selectedCity.value &&
		selectedState.value &&
		businessImages.value.length >= 5
	) {
		errorMessage.value = ''
		return true
	}else {
		return false
	}
}
function upLoadFile() {
	    if (upLoadedFiles.value.length == 10) {
			errorMessage.value = "Maximum number of files images allowed is 10"
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

			axios.post("https://umoja-production-9636.up.railway.app/api/auth/upload", formData, {
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

			axios.post("https://umoja-production-9636.up.railway.app/api/auth/upload", formData, {
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

