<template>
    <!-- Edit Contact Section -->
    <v-sheet class="pt-8" max-width="550" width="100%" style=" margin: 0 auto; background-color: #f8f8f8;  margin-bottom: 20px">
        <div style="background-color: #fff; padding: 40px; border-radius: 15px;">
            <v-avatar color="#EDF0FC" size="x-large">
                <v-icon icon="mdi mdi-account-plus" color="#1273EB"></v-icon>
            </v-avatar>
            <h1 style="font-weight: 600; font-size: 32px; color: ##333333">Contact</h1>
            <p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #969696">Just few more steps to go and you are done⚡️</p>

            <div class="pt-8" style="max-width: 502px">
                <div class="mb-4">
                    <v-label class="inputLabel">Email Address* </v-label>
                    <v-text-field :rules="emailRules" v-model="vendor.busniess_email" placeholder="Enter email address" density="comfortable"> </v-text-field>
                </div>
                <div class="mb-4">
                    <p class="inputLabel">Phone Number*</p>
                    <MazPhoneNumberInput style="width: 100%;"
                                         v-model="vendor.busniess_phone_number"
                                         show-code-on-list
                                         :success="results?.isValid"
                                         @update="results = $event"
                                         dense
                                         filled
                                         placeholder="Enter Phone Number"
                                         class="pt-3 pb-3"
                    />
                </div>

                <div>
                    <div v-for="(socialMedia, index) in socialMedia" :key="index" class="mb-4">
                        <v-btn @click="toggleAccordion(index)" flat>
                            <v-icon style="color: #969696; font-size: 22px; margin-right: 8px;">{{ accordionOpen === index ? 'mdi mdi-minus-circle-outline' : 'mdi mdi-plus-circle-outline' }}</v-icon>


                            <span style="font-size: 16px; color: #1273eb; font-weight: 500">{{ socialMedia }}</span>
                        </v-btn>
                        <v-expand-transition>
                            <div v-if="accordionOpen === index">
                                <v-label class="inputLabel">{{ socialMedia }} Username</v-label>
                                <v-text-field v-model="socialMediaHandles[index]" :placeholder="`https://${socialMedia }.com/`" density="comfortable"></v-text-field>
                            </div>
                        </v-expand-transition>
                    </div>
                </div>
            </div>
        </div>
        <p style="color: red; font-size: 16px;" class="mb-4">{{ formError }}</p>
        <v-btn @click="submit" flat style="background-color: #2c6e63; color: #fff" size="x-large">Save and continue</v-btn>
    </v-sheet>
    <!-- <v-sheet max-width="550" width="100%" style="margin: auto; background-color: #f8f8f8">
        <div style="background-color: #fff; padding: 40px; border-radius: 15px; margin-bottom: 20px">
            <div class="d-flex align-center">
                <v-avatar size="x-large" color="#EDF0FC" class="mr-4">
                    <v-icon icon="mdi mdi-account-circle" color="#1273EB"></v-icon>
                </v-avatar>
                <h1 style="font-weight: 600; font-size: 32px; color: #333; line-height: 20px; letter-spacing: -3%">Office Address</h1>
            </div>

            <div class="pt-8" style="max-width: 502px">
                <div class="mb-4">
                    <p class="inputLabel">Country</p>
                    <v-select
                            v-model="vendor.office_country"
                            :items="countries"
                            placeholder="Select Country"
                            density="comfortable"
							@input="fetchStates(vendor.office_country)"
                    >
                    </v-select>
                </div>
				<div class="mb-4">
                    <p class="inputLabel">State</p>
                    <v-select 
						:items= "states"
						@input="fetchCities(vendor.office_country, vendor.office_state)"
						v-model="vendor.office_state" 
						append-inner-icon="mdi mdi-chevron-down" 
						placeholder="Select State" density="comfortable"> 
					</v-select>
                </div>
                <div class="mb-4">
                    <p class="inputLabel">City</p>
                    <v-select 
						v-model="vendor.office_city"
						:items="cities" 
						placeholder="Select" density="comfortable">
					</v-select>
                </div>

               

                <div class="mb-4">
                    <p class="inputLabel">Street Address</p>
                    <v-text-field :rules="inputRules" v-model="vendor.office_address" placeholder="Enter address" density="comfortable"> </v-text-field>
                </div>
                <div class="mb-4">
                    <p class="inputLabel">Complex Building (Optional)</p>
                    <v-text-field v-model="vendor.complex_building_address" placeholder="Building name, unit number or floor" density="comfortable"> </v-text-field>
                </div>
            </div>
        </div>
        
    </v-sheet> -->

    <!-- View Contact Section -->
    <v-sheet max-width="550" width="100%" style="padding: 40px; margin: 25px auto 0; border-radius: 15px">
        <v-sheet>
            <div class="mb-5">
                <p class="mb-1 contact-label">Business Email</p>
                <p :contenteditable="isEditing" class="mb-5 contact-value">{{ vendor.busniess_email }}</p>
            </div>
            <div class="mb-5">
                <p class="mb-1 contact-label">Phone Number</p>
                <p :contenteditable="isEditing" class="mb-5 contact-value">{{ vendor.busniess_phone_number }}</p>
            </div>
            <!-- <div class="mb-5">
                <p class="mb-1 contact-label">Office Address</p>
                <p :contenteditable="isEditing" class="d-flex flex-column contact-value">
                    <span>{{ vendor.office_address }}</span>
                    <span>{{ vendor.office_city }}, {{ vendor.office_state }}</span>
                    <span>{{ vendor.office_country }}</span>
                </p>
            </div> -->
            <div>
                <div class="mb-4" v-for="(socialMedia, index) in socialMedia" :key="index">
                    <p  class="mb-2">
                        <v-icon :icon="getSocialMediaIcon(socialMedia)" color="#969696" class="mr-2"></v-icon>
                        <span style="font-size: 16px; color: #969696; font-weight: 500">{{ socialMedia }}</span>
                    </p>
                    <span :contenteditable="isEditing" style="font-size: 16px; color: #1273eb; font-weight: 400">{{ socialMediaHandles[index] }}</span>
                </div>
            </div>
        </v-sheet>
        <div class="py-4 d-flex justify-space-between">
            <v-btn @click="isEditing = !isEditing" size="x-large" style="border: 1px solid #969696" flat>
                <span style="color: #333; font-size: 16px; font-weight: 600; line-height: 24px"> Edit</span></v-btn>

            <v-btn @click="emit('submit')" size="x-large" style="border: 1px solid #969696" flat>
                <span style="color: #333; font-size: 16px; font-weight: 600; line-height: 24px"> Next</span></v-btn>
        </div>
    </v-sheet>
</template>

<script setup>
import { ref, defineEmits, onBeforeMount} from 'vue';
import { countries, fetchStates, fetchCities, states, cities } from '~/utils/countryapi'
import {emailRules, inputRules} from '~/utils/formrules'
import { useVendorStore } from '~/stores/vendorStore';

		const results = ref("")
        const socialMedia = ["Twitter", "Instagram", "Facebook", "Youtube"];
        const accordionOpen = ref(-1);
		const isEditing = ref(false)
        const vendorStore = useVendorStore()
        const vendor = ref(vendorStore.vendor.vendor_details)

        onBeforeMount(() => {
            if (!vendorStore.vendor.vendor_details) {
                vendor.value =  []
            }
        })
            
        const formError = ref("")

		const emit = defineEmits(['submit']);
        const socialMediaHandles = computed(() => [
            vendor.value?.twitter_handle,
            vendor.value?.instagram_handle,
            vendor.value?.facebook_handle,
            vendor.value?.youtube_handle
        ]);

    
        const toggleAccordion = (index) => {
            accordionOpen.value = accordionOpen.value === index ? -1 : index;
        };

        const getSocialMediaIcon = (socialMedia) => {
            switch (socialMedia.toLowerCase()) {
                case 'twitter':
                    return 'mdi mdi-twitter';
                case 'instagram':
                    return 'mdi mdi-instagram';
                case 'facebook':
                    return 'mdi mdi-facebook';
                case 'youtube':
                    return 'mdi mdi-youtube';
                default:
                    return '';
            }
        };

watch(() => vendor.value?.office_state, () => {
	fetchCities(vendor.value?.office_country, vendor.value.office_state);
});
watch(() => vendor.value?.office_country, () => {
	fetchStates(vendor.value?.office_country)
});

const submit = async () => {
    formError.value = ""
	const data = { 
		busniess_email: vendor.value.busniess_email,
		busniess_phone_number: results.value.phoneNumber,
		twitter_handle: socialMediaHandles.value[0],
		instagram_handle: socialMediaHandles.value[1],
		facebook_handle: socialMediaHandles.value[2],
		youtube_handle: socialMediaHandles.value[3],
		// office_country: vendor.value.office_country,
		// office_state: vendor.value.office_state,
		// office_city: vendor.value.office_city,
		// office_address: vendor.value.office_address,
		// complex_building_address: vendor.value.complex_building_address
	}
    try{
        formError.value = ""
       await vendorStore.registerVendor(data)
	    emit("submit");
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

}
</script>

<style scoped>
* {
	outline: none;
}
.contact-label {
    font-size: 16px;
    font-weight: 500;
    color: #969696;
}

.contact-value {
    font-size: 16px;
    font-weight: 400;
    color: #333;
}
</style>
~/utils/formrules