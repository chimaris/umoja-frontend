<template>
    <!-- Edit Contact Section -->
    <v-sheet class="pt-8" max-width="550" width="100%" style="padding: 40px; margin: 0 auto; border-radius: 15px; margin-bottom: 20px">
        <div style="background-color: #fff">
            <v-avatar color="#EDF0FC" size="x-large">
                <v-icon icon="mdi mdi-account-plus" color="#1273EB"></v-icon>
            </v-avatar>
            <h1 style="font-weight: 600; font-size: 32px; color: ##333333">Contact</h1>
            <p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #969696">Just few more steps to go and you are done⚡️</p>

            <div class="pt-8" style="max-width: 502px">
                <div class="mb-4">
                    <v-label class="inputLabel">Email Address </v-label>
                    <v-text-field :rules="emailRules" v-model="email" placeholder="Enter email address" density="comfortable"> </v-text-field>
                </div>
                <div class="mb-4">
                    <p class="inputLabel">Phone Number</p>
                    <MazPhoneNumberInput style="width: 100%;"
                                         v-model="results.phoneNumber "
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
    </v-sheet>
    <v-sheet max-width="550" width="100%" style="margin: auto; background-color: #f8f8f8">
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
                            v-model="selectedBusinessCountry"
                            :items="countries"
                            append-inner-icon="mdi mdi-chevron-down"
                            placeholder="Select Country"
                            density="comfortable"
							@change="fetchStates(selectedBusinessCountry)"
                    >
                    </v-select>
                </div>
				<div class="mb-4">
                    <p class="inputLabel">State</p>
                    <v-select 
						:items= "states"
						@change="fetchCities(selectedBusinessCountry, selectedState)"
						v-model="selectedState" 
						append-inner-icon="mdi mdi-chevron-down" 
						placeholder="Select State" density="comfortable"> 
					</v-select>
                </div>
                <div class="mb-4">
                    <p class="inputLabel">City</p>
                    <v-select 
						v-model="selectedCity"
						:items="cities"
						append-inner-icon="mdi mdi-chevron-down" 
						placeholder="Select" density="comfortable">
					</v-select>
                </div>

               

                <div class="mb-4">
                    <p class="inputLabel">Street Address</p>
                    <v-text-field :rules="inputRules" v-model="businessAddress" placeholder="Enter address" density="comfortable"> </v-text-field>
                </div>
                <div class="mb-4">
                    <p class="inputLabel">Complex Building (Optional)</p>
                    <v-text-field v-model="buildingName" placeholder="Building name, unit number or floor" density="comfortable"> </v-text-field>
                </div>
            </div>
        </div>
        <v-btn @click="submit" flat style="background-color: #2c6e63; color: #fff" size="x-large">Save and continue</v-btn>
    </v-sheet>

    <!-- View Contact Section -->
    <v-sheet max-width="550" width="100%" style="padding: 40px; margin: 0 auto; border-radius: 15px">
        <v-sheet>
            <div class="mb-5">
                <p class="mb-1 contact-label">Business Email</p>
                <p :contenteditable="isEditing" class="mb-5 contact-value">{{ email }}</p>
            </div>
            <div class="mb-5">
                <p class="mb-1 contact-label">Phone Number</p>
                <p :contenteditable="isEditing" class="mb-5 contact-value">{{ results.phoneNumber }}</p>
            </div>
            <div class="mb-5">
                <p class="mb-1 contact-label">Office Address</p>
                <p :contenteditable="isEditing" class="d-flex flex-column contact-value">
                    <span>{{ businessAddress }}</span>
                    <span>{{ selectedCity }}, {{ selectedState }}</span>
                    <span>{{ selectedBusinessCountry }}</span>
                </p>
            </div>
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
import { ref, defineEmits } from 'vue';
import { countries, fetchStates, fetchCities, states, cities } from '~/utils/countryapi'
import {emailRules, inputRules} from '~/utils/formrules'
import {useVendorProfileStore} from "~/stores/vendorProfile"

		const results = ref("")
        const email = ref('');
        const twitter = ref('');
        const socialMedia = ["Twitter", "Instagram", "Facebook", "Youtube"];
        const accordionOpen = ref(-1);
        const socialMediaHandles = ref(Array(socialMedia.length).fill(''));
        const selectedBusinessCountry = ref('');
        const selectedCity = ref('');
        const selectedState = ref('');
        const businessAddress = ref('');
		const buildingName = ref('')
		const isEditing = ref(false)

        const vendorProfile = useVendorProfileStore();
		const emit = defineEmits(['submit']);

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

watchEffect(() => {
	fetchStates(selectedBusinessCountry.value)
});

watchEffect(() => {
	fetchCities(selectedBusinessCountry.value, selectedState.value);
});

const submit = () => {
	const data = { 
		email: email.value,
		phoneNumber: results.value.phoneNumber,
		twitterHandle: socialMediaHandles.value[0],
		instagramHandle: socialMediaHandles.value[1],
		facebookHandle: socialMediaHandles.value[2],
		youtubeHandle: socialMediaHandles.value[3],
		Country: selectedBusinessCountry.value,
		state: selectedState.value,
		city: selectedCity.value,
		Address: businessAddress.value,
		complexBuilding: buildingName.value
	}
	vendorProfile.addContactInfo(data)
	emit("submit");
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