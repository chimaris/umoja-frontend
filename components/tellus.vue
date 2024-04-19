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
				<li v-for="(file, index) in upLoadedFiles" :key="index" class="d-flex align-center py-2 rounded-lg px-4" style="border: 1px solid #EAECF0; justify-content: space-between; ">
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
			<div class="d-flex mb-2" >
				<p class="inputLabel">State</p>
				<v-spacer></v-spacer>
				<v-progress-circular v-if="loadingStates"
						:width="2"
						color="green"
						indeterminate
					></v-progress-circular>
				</div>
			<v-select 
			v-model="selectedState" 
			append-inner-icon="mdi mdi-chevron-down" 
			placeholder="Select State" 
			density="comfortable" 
			:items="states"
			@change="fetchCities(selectedBusinessCountry, selectedState)"
			:rules="inputRules"> 
				<v-progress-circular
					:width="3"
					color="green"
					indeterminate
				></v-progress-circular>
			</v-select>
			

			<div class="d-flex mb-2">
				<p class="inputLabel">City</p>
				<v-spacer></v-spacer>
				<v-progress-circular v-if="loadingCities"
							:width="3"
							color="green"
							indeterminate
				></v-progress-circular>
			</div>
			<v-select 
			v-model="selectedCity" 
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
		files: files.value,
		businessAddress: businessAddress.value,
		selectedBusinessCountry: selectedBusinessCountry.value,
		selectedState: selectedState.value,
		selectedCountry: selectedCity.value
	}
	if (!isFormValid()) {
		formError.value = "Please fill in all required fields."
		return;
	} 
	formError.value = ""
	if (!vendorStore.isCompanyInfoComplete) {
		vendorStore.setCompanyInfo(companyInfo)
		console.log(vendorStore.companyInfo)
		vendorStore.markSectionComplete('isCompanyInfoComplete')
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
	if (
		selectedCountry.value &&
		selectedCompanyCategory.value &&
		businessName.value &&
		businessWebsite.value &&
		businessAddress.value &&
		selectedBusinessCountry.value &&
		selectedCity.value &&
		selectedState.value &&
		files.value.length > 0
	) {
		return true
	}else {
		return false
	}
}
function upLoadFile() {
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
			formData.append("file", file);
			const form = {name: filename, loading: 0}
			// files.value = [...files.value, form]
			files.value.push({name: filename, loading: 0})
			showProgress.value = true;
			console.log(files.value)
			console.log(showProgress.value)
		};

		img.onerror = function () {
			errorMessage.value = "Failed to load the image"
		};


		// axios.post("", formData, {
		// 	onUploadProgress: ({loaded, total}) => {
		// 		files.value[files.value.length - 1].loading = Math.floor((loaded / total) * 100);
		// 		if (loaded == total) {
		// 			const fileSize = (total < 1024) ? total + "KB" : (loaded / (1024 * 1024)).toFixed(2) + "MB";
		// 			upLoadedFiles.value.push({name: filename, size: fileSize});
		// 			this.files = [];
		// 			this.showProgress = false
		// 		}
		// 	}
		// }).catch(console.error) 
}

function drop(e) {
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
		formData.append("file", file);
		const form = {name: filename, loading: 0}
		// files.value = [...files.value, form]
		files.value.push({name: filename, loading: 0})
		showProgress.value = true;
		console.log(files.value)
		console.log(showProgress.value)
	};

	img.onerror = function () {
		errorMessage.value = "Failed to load the image"
	};

			// axios.post("", formData, {
		// 	onUploadProgress: ({loaded, total}) => {
		// 		files.value[files.value.length - 1].loading = Math.floor((loaded / total) * 100);
		// 		if (loaded == total) {
		// 			const fileSize = (total < 1024) ? total + "KB" : (loaded / (1024 * 1024)).toFixed(2) + "MB";
		// 			upLoadedFiles.value.push({name: filename, size: fileSize});
		// 			this.files = [];
		// 			this.showProgress = false
		// 		}
		// 	}
		// }).catch(console.error) 
	}

	



	

</script>

