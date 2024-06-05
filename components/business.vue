<template>
	<!-- Edit Business Section -->
	<v-sheet max-width="550" width="100%" style="margin: 0 auto; background-color: #f8f8f8">
		<div style="background-color: #fff; padding: 40px; margin-bottom: 10px; border-radius: 15px">
			<v-avatar color="#EDF0FC" size="x-large">
				<v-icon icon="mdi mdi-account-plus" color="#1273EB"></v-icon>
			</v-avatar>
			<h1 style="font-weight: 600; font-size: 32px; color: #333333">Your business profile</h1>
			<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #969696">Complete these simple steps to get your store up and running</p>

			<div class="mt-10 mb-5">
				<div class="mb-8">
					<p style="font-size: 16px; color: #969696" class="mb-2">
						<span style="font-weight: 500; color: #333">Upload business profile picture</span> (Business logo preferably)
					</p>
					<v-row 
						style="align-items: center; display: flex" 
						@dragenter.prevent
						@dragleave.prevent
						@dragover.prevent
						@drop.prevent="drop"
						>
						<v-col cols="2">
							<v-avatar color="#EDF0EF" class="mr-4" size="x-large">
								<v-label for='profile'><v-icon color="#9EA5AD" icon="mdi mdi-file-upload-outline"></v-icon></v-label>
							</v-avatar>
						</v-col>
						<v-col cols="10">
							<p style="font-weight: 500; font-size: 12px; color: #969696; border: 1px dotted #cecece; border-radius: 6px; padding: 15px; width: 100%">
								<v-label style="color: #1273eb; font-size: 12px; font-weight: 600" for='profile'>Click to Upload</v-label> or drag and drop <br />
								SVG, PNF, JPG, or GIF (max 800X400px)
							</p>
							<input class="profile-picture" id="profile" @change="upLoadFile($event)" type="file" style="display: none;" accept=".svg, .png, .jpeg, .jpg, .gif">
						</v-col>
					</v-row>
					<p style="color: red; font-size: 14px;">{{ errorMessage }}</p>
				</div>
				
				<ul class="my-7" v-if="showProgress">
					<li v-for="(file, index) in profilePicture" :key="index" class="d-flex align-center py-2 rounded-lg px-4 mb-4" style="border: 1px solid #EAECF0; justify-content: space-between;">
					<fileUploading :file="file" />
					</li>
     			 </ul>
				  <ul>
				<li v-for="(file, index) in upLoadedFiles" :key="index" class="d-flex align-center py-2 rounded-lg px-4 mb-4" style="border: 1px solid #EAECF0; justify-content: space-between; ">
					<fileUploaded :file="file" />
				</li>
				</ul>
				<div class="mb-8">
					<p style="font-size: 16px; color: #969696" class="mb-2">
						<span style="font-weight: 500; color: #333">Upload cover photo</span> (Optional)
					</p>
					<v-row 
						style="align-items: center; display: flex" 
						@dragenter.prevent
						@dragleave.prevent
						@dragover.prevent
						@drop.prevent="drop1"
						>
						<v-col cols="2">
							<v-avatar color="#EDF0EF" class="mr-4" size="x-large">
								<v-label for='profile'><v-icon color="#9EA5AD" icon="mdi mdi-file-upload-outline"></v-icon></v-label>
							</v-avatar>
						</v-col>
						<v-col cols="10">
							<p style="font-weight: 500; font-size: 12px; color: #969696; border: 1px dotted #cecece; border-radius: 6px; padding: 15px; width: 100%">
								<v-label style="color: #1273eb; font-size: 12px; font-weight: 600" for='profile1'>Click to Upload</v-label> or drag and drop <br />
								SVG, PNF, JPG, or GIF (max 800X400px)
							</p>
							<input class="profile-picture1" id="profile1" @change="upLoadFile1($event)" type="file" style="display: none;" accept=".svg, .png, .jpeg, .jpg, .gif">
						</v-col>
					</v-row>
					<p style="color: red; font-size: 14px;">{{ errorMessage1 }}</p>
				</div>
				
				<ul class="my-7" v-if="showProgress1">
					<li v-for="(file, index) in coverPicture" :key="index" class="d-flex align-center py-2 rounded-lg px-4 mb-4" style="border: 1px solid #EAECF0; justify-content: space-between;">
					<fileUploading :file="file" />
					</li>
     			 </ul>
				  <ul>
				<li v-for="(file, index) in upLoadedFiles1" :key="index" class="d-flex align-center py-2 rounded-lg px-4 mb-4" style="border: 1px solid #EAECF0; justify-content: space-between; ">
					<fileUploaded :file="file" />
				</li>
				</ul>
				<div class="textarea-wrapper">
					<p class="mb-4">Business Bio</p>
					<v-textarea :disabled="disableTextarea" v-model="vendor.business_bio" :rules="rules" rows="6" placeholder="Write a short bio about your business here..."></v-textarea>
					<div class="char-count">{{ charCount }}/{{ maxCount }}</div>
				</div>
			</div>
		</div>
		<p style="color: red; font-size: 16px;" class="mb-2">{{ bioError }}</p>
		<v-btn class="mb-5" @click="submit" flat style="background-color: #2c6e63; color: #fff" size="large">Save and continue</v-btn>
	</v-sheet>

	<!-- View Business Section -->
	<v-sheet class="px-6 pt-8" max-width="550" width="100%" style="padding: 40px; margin: auto; border-radius: 15px">
		<h6 class="mb-2" style="font-weight: 600; font-size: 20px; line-height: 30px; color: #333333">Cover Photo</h6>
		<v-img
			style="height: 200px; position: relative;"
			width="100%"
			cover
			:src="cover_photo || vendor?.cover_image || 'https://res.cloudinary.com/payhospi/image/upload/v1685854735/Rectangle_448_2_lh8kz3.png'"
		></v-img>
		<h6 class="mt-4 mb-2" style="font-weight: 600; font-size: 20px; line-height: 30px; color: #333333">Logo</h6>
		<v-avatar  size="100">
			<v-img class="bg-grey-lighten-3 rounded-xl" cover :src="profile_photo || vendor?.profile_photo || 'https://res.cloudinary.com/payhospi/image/upload/v1713956914/umoja/profile_image_pd4dcv.png'"></v-img>
		</v-avatar>
		

		<v-sheet class="pt-4">
			<h3 style="font-weight: 700; font-size: 24px; line-height: 30px; color: #333333">BIO <span class="text-grey">({{vendor.business_type}})</span></h3>

			<p contenteditable="true" @input="vendor.business_bio = $event.target.innerText" class="editable text-left mt-2 mb-8" style="font-weight: 400; font-size: 14px; line-height: 19.6px; color: #333333" v-if="isEditing">{{ vendor.business_bio }}</p>
			<p :disabled="disableTextarea" @click="isEditing = true" v-else>{{ vendor.business_bio }}</p>
		</v-sheet>
		<div class="py-4 d-flex justify-space-between">
			<v-btn @click="isEditing=!isEditing" size="x-large" style="border: 1px solid #969696" flat>
				<span style="color: #333; font-size: 16px; font-weight: 600; line-height: 24px"> Edit</span></v-btn
			>

			<v-btn @click="emit('submit')" size="x-large" style="border: 1px solid #969696" flat>
				<span style="color: #333; font-size: 16px; font-weight: 600; line-height: 24px"> Next</span></v-btn
			>
		</div>
	</v-sheet>
</template>

<script setup>
import { ref, computed, defineEmits, onMounted, onBeforeMount } from 'vue';
import profileVue from '~/pages/vendor/profile.vue';
import { useVendorStore } from '~/stores/vendorStore';
import {upLoadPicture, uploadCoverImage} from '~/utils/upload';
import axios from 'axios'
import Compressor from 'compressorjs';
  	

    const value = ref('');
    const rules = ref([(v) => v?.length <= 250 || "Max 250 characters"]);
	const isEditing = ref(false)

	const vendorStore = useVendorStore();

	const profilePicture = ref([])
	const coverPicture = ref([])
	const upLoadedFiles = ref([])
	const upLoadedFiles1 = ref([])
	const errorMessage = ref("")
	const errorMessage1 = ref("")
	const showProgress = ref(false)
	const showProgress1 = ref(false)
	const profile_photo = ref("")
	const bioError = ref("")
	const cover_photo = ref("")

	const vendor = ref(vendorStore.vendor.vendor_details)

	onBeforeMount(() => {
		if (!vendorStore.vendor.vendor_details) {
			vendor.value =  []
		}
	})
	const emit = defineEmits(['submit']);
	

    const charCount = computed(() => {
      return vendor.value.business_bio?.length;
    });

    const maxCount = computed(() => {
      return 250; // You can change this value to match your maximum count
    });

    const submit = async () => {
		bioError.value = ""
		const data = {
			profile_photo: profile_photo.value,
			business_bio: vendor.value.business_bio,
			cover_image: cover_photo.value
		}
		if (profile_photo.value && vendor.value.business_bio){
			try{
				const response = await vendorStore.registerVendor(data)
				emit("submit");
				return
			}catch(error){
			if (error.response) {
				bioError.value = error.response.data.message || 'An error occurred during.';
			} else if (error.request) {
				bioError.value = 'No response received from server. Please try again later.';
			} else {
				bioError.value = 'An error occurred. Please try again later.';
			}
			return 
		}
			
		}
		
    
    };

	const disableTextarea = computed(() => {
					return charCount.value >= maxCount.value;
	});

	async function upLoadFile(event){
	await upLoadPicture({event, upLoadedFiles, showProgress, profilePicture, profile_photo, errorMessage})
	}
	async function upLoadFile1(event){
	await uploadCoverImage({event, upLoadedFiles1, showProgress1, coverPicture, cover_photo, errorMessage1})
	}

	async function drop1(e) {
		await uploadCoverImage({event:e, upLoadedFiles1, showProgress1, coverPicture, cover_photo, errorMessage1, mode: 'drop'})
	}
	async function drop(e) {
		await upLoadPicture({event: e, upLoadedFiles, showProgress, profilePicture, profile_photo, errorMessage, mode: 'drop'})
	}
</script>

<style scoped>
.textarea-wrapper {
	position: relative;
}

.char-count {
	position: absolute;
	bottom: 0px;
	right: 5px;
	font-size: 14px;
	font-weight: 500;
	color: #333333;
}
.editable {
    outline: none;
}
</style>
