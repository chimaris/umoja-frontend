<template>
	<div>
		<p style="color: #000; font-size: 20px; font-weight: 600" class="pa-5">My Profile</p>
		<v-divider></v-divider>

		<div class="pa-5 py-8 d-flex align-center justify-space-between">
			<div class="d-flex align-center">
				<v-avatar size="100">
					<v-img
						cover
						:src="
							vendor.vendor_details?.profile_photo
								? vendor.vendor_details?.profile_photo
								: 'https://res.cloudinary.com/payhospi/image/upload/v1713956914/umoja/profile_image_pd4dcv.png'
						"
					>
					</v-img>
				</v-avatar>
				<div class="ml-3">
					<p style="font-size: 20px; text-transform: capitalize; font-weight: 600">{{ vendor?.vendor_details.business_name }}</p>
					<p style="font-size: 16px; text-transform: capitalize; font-weight: 600">
						{{ vendor?.vendor_details.rep_country }} <span>{{ getFlag() }}</span>
					</p>
					<p style="color: #969696; font-size: 16px; font-weight: 500">{{ vendor?.vendor_details.business_type }}</p>
				</div>
			</div>
			<v-btn @click="profile = true" style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3">
				<v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
				Edit
			</v-btn>
		</div>

		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<div class="mb-4 d-flex align-center justify-space-between">
				<p style="font-size: 20px; font-weight: 600">Personal Information</p>

				<v-btn
					@click="vendorDetails = true"
					style="border: 1px solid #e5e5e5"
					variant="outlined"
					size="default"
					class="ml-4 menubar text-grey-darken-3"
				>
					<v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
					Edit
				</v-btn>
			</div>
			<div class="mt-4" style="max-width: 559px">
				<v-row class="mb-2">
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Name</p>
						<p style="color: #333; text-transform: capitalize; font-size: 14px; font-weight: 500">{{ vendor?.first_name }}</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Last Name</p>
						<p style="color: #333; font-size: 14px; font-weight: 500; text-transform: capitalize">{{ vendor?.last_name }}</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Email Address</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">{{ vendor?.email }}</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Phone</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">{{ vendor?.vendor_details.busniess_phone_number }}</p>
					</v-col>
				</v-row>
			</div>
			<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Short Bio</p>
			<p style="max-width: 856px; color: #333; font-size: 14px; font-weight: 500">{{ vendor?.vendor_details.business_bio }}</p>
		</div>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<div class="mb-4 d-flex align-center justify-space-between">
				<p style="font-size: 20px; font-weight: 600">Address</p>

				<v-btn
					@click="vendorAddress = true"
					style="border: 1px solid #e5e5e5"
					variant="outlined"
					size="default"
					class="ml-4 menubar text-grey-darken-3"
				>
					<v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
					Edit
				</v-btn>
			</div>
			<div class="mt-4" style="max-width: 559px">
				<v-row class="mb-4">
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Country</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">{{ vendor?.vendor_details.country_name }}</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">City/Sate</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">{{ vendor?.vendor_details.city }}, {{ vendor?.vendor_details.state }}</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Postal Code</p>
						<p style="color: #333; font-size: 14px; font-weight: 500"></p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Tax ID</p>
						<p style="color: #333; font-size: 14px; font-weight: 500"></p>
					</v-col>
				</v-row>
			</div>
		</div>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<div class="mb-4 d-flex align-center justify-space-between">
				<p style="font-size: 20px; font-weight: 600">Delete Account</p>
				<div>
					<v-btn @click="deleteAccount = true" color="red" flat size="default" class="ml-4 menubar text-grey-darken-3">
						<v-icon class="mr-2" icon="mdi mdi-trash-can-outline"></v-icon>
						Delete Account
					</v-btn>
					<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3"> Learn More </v-btn>
				</div>
			</div>
			<div class="mt-4 mb-8" style="max-width: 470px">
				<p style="color: #333; font-size: 14px; font-weight: 500">
					When you delete your account, you lose access to Umojas account services, and we permanently delete your personal data. You can cancel the
					deletion for 14 days.
				</p>
			</div>
		</div>
		<v-dialog v-model="deleteAccount" persistent max-width="600">
			<v-card class="pa-5 text-center rounded-lg" style="align-items: center" flat tile>
				<v-card-title>
					<div
						class="d-flex align-center justify-center"
						style="width: 60px; height: 60px; border-radius: 50%; background-color: #f7edee; border: 1px solid #c20052"
					>
						<v-icon size="20" large color="red">mdi mdi-trash-can-outline</v-icon>
					</div>
				</v-card-title>
				<v-card-title style="font-weight: 700" :style="{ fontSize: $vuetify.display.mobile ? '20px' : '24px' }" class="justify-center"
					>Delete Account</v-card-title
				>
				<v-card-text class="text-center mb-5">Are you sure you want to delete your account. Please note this action cannot be reversed?</v-card-text>
				<v-card-actions class="justify-center w-100">
					<v-btn
						rounded="xl"
						size="large"
						style="border: 1px solid #cecece; flex: 1"
						@click="deleteAccount = false"
						:style="{ fontSize: $vuetify.display.mobile ? '14px' : '18px' }"
						>Cancel</v-btn
					>
					<v-btn
						rounded="xl"
						size="large"
						style="background-color: #c20052; color: #fff; flex: 1"
						:style="{ fontSize: $vuetify.display.mobile ? '14px' : '18px' }"
						>Delete</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-dialog max-width="800" v-model="vendorDetails">
			<v-sheet class="pa-4 pa-md-6 w-100">
				<p style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 600">Edit Personal Information</p>
				<v-card flat class="mt-6 bg-white rounded-lg py-8 px-2">
					<v-form v-model="valid" @submit.prevent="editDetails()">
						<v-row>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">First Name<span class="mb-2">*</span></p>
								<v-text-field
									placeholder="Enter your first name"
									disabled="true"
									v-model="vendor.first_name"
									:rules="inputRules"
									density="comfortable"
								>
								</v-text-field>
							</v-col>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">Last Name<span class="mb-2">*</span></p>
								<v-text-field placeholder="Enter your last name" disabled="true" v-model="vendor.last_name" :rules="inputRules" density="comfortable">
								</v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">Email Address<span class="mb-2">*</span></p>
								<v-text-field :rules="emailRules" disabled="true" v-model="vendor.email" placeholder="Enter your email address" density="comfortable">
								</v-text-field
							></v-col>
							<v-col cols="12" md="6" class="pt-0">
								<p class="inputLabel">Phone Number<span class="mb-2">*</span></p>
								<MazPhoneNumberInput
									v-model="vendor.vendor_details.busniess_phone_number"
									show-code-on-list
									:success="results?.isValid"
									@update="results = $event"
									dense
									filled
									placeholder="Enter Phone Number"
								/>
							</v-col>
						</v-row>
						<v-row class="" style="position: relative">
							<v-col cols="12" class="pt-0">
								<p class="inputLabel">Bio<span class="mb-2">*</span></p>
								<v-textarea rows="6" v-model="vendor.vendor_details.business_bio"></v-textarea>
								<div class="char-count">{{ charCount }}/{{ maxCount }}</div>
							</v-col>
						</v-row>
						<p style="color: red; font-size: 16px">{{ detailsError }}</p>
						<v-btn class="textClass px-8" rounded="xl" type="submit" :disabled="status" color="green" flat>{{
							status ? "Saving" : "Save changes"
						}}</v-btn>
						<v-btn @click="vendorDetails = false" variant="tonal" class="textClass ml-2 px-8 d-none d-md-inline-block" rounded="xl" color="green" flat
							>Cancel</v-btn
						>
					</v-form>
				</v-card>
			</v-sheet>
		</v-dialog>
		<v-dialog max-width="750" v-model="vendorAddress">
			<v-sheet max-width="949" class="pa-4 pa-md-6">
				<div class="d-flex align-center justify-space-between">
					<p style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 600">Edit Address</p>
					<div>
						<v-img
							class="d-block d-md-none"
							width="21"
							height="21"
							@click="vendorAddress = false"
							src="https://res.cloudinary.com/payhospi/image/upload/v1716243322/umoja/close-icon.svg"
						/>
					</div>
				</div>
				<v-card flat class="mt-6 bg-white rounded-lg py-8">
					<v-form v-model="valid" @submit.prevent="editAddress()">
						<v-row class="">
							<v-col cols="12" class="pt-0">
								<p class="inputLabel">Country<span class="mb-2">*</span></p>
								<v-select
									v-model="vendor.vendor_details.country_name"
									placeholder="Select Country"
									:items="allCountries"
									:rules="inputRules"
									@input="fetchStates(vendor.vendor_details.country_name)"
									density="comfortable"
								>
								</v-select>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">State<span class="mb-2">*</span></p>
								<v-select
									v-model="vendor.vendor_details.state"
									color="green"
									:items="states"
									@input="fetchCities(vendor.vendor_details.country_name, vendor.vendor_details.state)"
									:rules="inputRules"
									:loading="loadingStates"
									placeholder="Select state"
									density="comfortable"
								>
								</v-select>
							</v-col>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">City<span class="mb-2">*</span></p>
								<v-select
									v-model="vendor.vendor_details.city"
									:items="cities"
									color="green"
									:loading="loadingCities"
									:rules="inputRules"
									placeholder="Select City"
									density="comfortable"
								>
								</v-select>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">Postal code<span class="mb-2">*</span></p>
								<v-text-field v-model="postalCode" placeholder="Enter your postal code" density="comfortable"> </v-text-field>
							</v-col>
							<v-col cols="12" md="6" class="pt-0">
								<p class="inputLabel">Tax ID<span class="mb-2">*</span></p>
								<v-text-field v-model="taxId" placeholder="Enter you tax id" density="comfortable"> </v-text-field>
							</v-col>
						</v-row>
						<p style="color: red; font-size: 16px">{{ addressError }}</p>
						<v-btn class="textClass px-8" rounded="xl" :disabled="status" type="submit" color="green" flat>{{
							status ? "Saving" : "Save changes"
						}}</v-btn>
						<v-btn @click="vendorAddress = false" variant="tonal" class="textClass ml-2 px-8 d-none d-md-inline-block" rounded="xl" color="green" flat
							>Cancel</v-btn
						>
					</v-form>
				</v-card>
			</v-sheet>
		</v-dialog>
		<v-dialog max-width="750" v-model="profile">
			<v-sheet max-width="550" width="100%" style="margin: 0 auto; background-color: #f8f8f8">
				<div style="background-color: #fff; padding: 40px; margin-bottom: 10px; border-radius: 15px">
					<div class="mb-8">
						<h3 style="font-size: 20px; color: #333" class="mb-2">Business Logo</h3>
						<v-row style="align-items: center; display: flex" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop">
							<v-col cols="3">
								<v-avatar size="100">
									<v-img
										class="bg-grey-lighten-3 rounded-xl"
										cover
										:src="
											profile_photo ||
											vendor?.vendor_details?.profile_photo ||
											'https://res.cloudinary.com/payhospi/image/upload/v1713956914/umoja/profile_image_pd4dcv.png'
										"
									></v-img>
								</v-avatar>
							</v-col>
							<v-col cols="9">
								<p
									style="
										font-weight: 500;
										font-size: 12px;
										color: #969696;
										border: 1px dotted #cecece;
										border-radius: 6px;
										padding: 15px;
										width: 100%;
									"
								>
									<v-label style="color: #1273eb; font-size: 12px; font-weight: 600" for="profile">Click to Upload</v-label> or drag and drop <br />
									SVG, PNF, JPG, or GIF (max 800X400px)
								</p>
								<input
									class="profile-picture"
									id="profile"
									@change="upLoadFile($event)"
									type="file"
									style="display: none"
									accept=".svg, .png, .jpeg, .jpg, .gif"
								/>
							</v-col>
						</v-row>
						<p style="color: red; font-size: 14px">{{ errorMessage }}</p>
					</div>

					<ul class="my-7" v-if="showProgress">
						<li
							v-for="(file, index) in profilePicture"
							:key="index"
							class="d-flex align-center py-2 rounded-lg px-4 mb-4"
							style="border: 1px solid #eaecf0; justify-content: space-between"
						>
							<fileUploading :file="file" />
						</li>
					</ul>
					<ul>
						<li
							v-for="(file, index) in upLoadedFiles"
							:key="index"
							class="d-flex align-center py-2 rounded-lg px-4 mb-4"
							style="border: 1px solid #eaecf0; justify-content: space-between"
						>
							<fileUploaded :file="file" />
						</li>
					</ul>
					<p class="inputLabel">Business name</p>
					<v-text-field
						:rules="inputRules"
						v-model="vendor.vendor_details.business_name"
						placeholder="Type your official business name"
						density="comfortable"
					></v-text-field>
					<p class="inputLabel">What African country are you representing</p>
					<v-text-field
						:rules="inputRules"
						v-model="vendor.vendor_details.rep_country"
						placeholder="Type your official business name"
						density="comfortable"
					></v-text-field>
					<p class="inputLabel">Business Category</p>

					<v-select
						v-model="vendor.vendor_details.business_type"
						:items="companyCategories"
						placeholder="Select"
						density="comfortable"
						:rules="inputRules"
					>
					</v-select>

					<p style="color: red; font-size: 16px" class="mb-2">{{ profileError }}</p>
					<v-btn @click="editProfile" :disabled="status" class="textClass px-8" rounded="xl" type="submit" color="green" flat>{{
						status ? "Saving" : "Save changes"
					}}</v-btn>
					<v-btn @click="profile = false" variant="tonal" class="textClass ml-2 px-8 d-none d-md-inline-block" rounded="xl" color="green" flat
						>Cancel</v-btn
					>
				</div>
			</v-sheet>
		</v-dialog>
	</div>
</template>
<script setup>
import { ref } from "vue";
import emojiFlags from "emoji-flags";
import { countryCodes } from "~/utils/countryapi";
import { upLoadPicture } from "~/utils/upload";
import { useVendorStore } from "~/stores/vendorStore";
const props = defineProps({
	vendor: {
		type: Array,
		required: true,
	},
});

watch(
	() => props.vendor.vendor_details.country_name,
	() => {
		fetchStates(props.vendor.vendor_details.country_name);
	}
);

watch(
	() => props.vendor.vendor_details.state,
	() => {
		fetchCities(props.vendor.vendor_details.country_name, props.vendor.vendor_details.state);
	}
);

const companyCategories = ["Fashion", "Cosmetic", "Art", "Home decoration", "Furniture", "Accessories"];
const vendorStore = useVendorStore();

const postalCode = ref("");
const taxId = ref("");
const upLoadedFiles = ref([]);
const showProgress = ref(false);
const errorMessage = ref("");
const profilePicture = ref([]);
const profile_photo = ref("");
const profileError = ref("");
const deleteAccount = ref(false);
const vendorDetails = ref(false);
const vendorAddress = ref(false);
const profile = ref(false);
const status = ref(false);
const detailsError = ref("");
const addressError = ref("");
const results = ref("");
const maxCount = 250;
const charCount = computed(() => {
	return props.vendor.vendor_details.business_bio?.length;
});

function getFlag() {
	const country = props.vendor?.vendor_details?.rep_country;
	const countryCode = countryCodes[country];
	if (countryCode) {
		return emojiFlags.countryCode(countryCode).emoji;
	}
}

async function upLoadFile(event) {
	await upLoadPicture({ event, upLoadedFiles, showProgress, profilePicture, profile_photo, errorMessage });
}
async function drop(e) {
	await upLoadPicture({ event: e, upLoadedFiles, showProgress, profilePicture, profile_photo, errorMessage, mode: "drop" });
}
async function editProfile() {
	if (!props.vendor.vendor_details.business_type || !props.vendor.vendor_details.business_name || !props.vendor.vendor_details.rep_country) {
		return;
	}
	const data = {
		business_type: props.vendor.vendor_details.business_type,
		business_name: props.vendor.vendor_details.business_name,
		rep_country: props.vendor.vendor_details.rep_country,
		profile_photo: profile_photo.value ? profile_photo.value : props.vendor.vendor_details.profile_photo,
	};
	try {
		profileError.value = "";
		status.value = true;
		const res = await vendorStore.registerVendor(data);
		profile.value = false;
	} catch (error) {
		if (error.response) {
			profileError.value = error.response.data.message || "An error occurred while saving changes.";
		} else if (error.request) {
			profileError.value = "No response received from server. Please try again later.";
		} else {
			profileError.value = "An error occurred. Please try again later.";
		}
	} finally {
		status.value = false;
	}
}
async function editDetails() {
	if (charCount.value >= maxCount) {
		return;
	}
	if (!props.vendor.vendor_details.business_bio || !results.value.phoneNumber) {
		return;
	}
	const data = {
		business_bio: props.vendor.vendor_details.business_bio,
		busniess_phone_number: results.value.phoneNumber,
	};
	try {
		detailsError.value = "";
		status.value = true;
		await vendorStore.registerVendor(data);
		vendorDetails.value = false;
	} catch (error) {
		if (error.response) {
			detailsError.value = error.response.data.message || "An error occurred while saving changes.";
		} else if (error.request) {
			detailsError.value = "No response received from server. Please try again later.";
		} else {
			detailsError.value = "An error occurred. Please try again later.";
		}
	} finally {
		status.value = false;
	}
}
async function editAddress() {
	if (!props.vendor.vendor_details.country_name || !props.vendor.vendor_details.state || !props.vendor.vendor_details.city) {
		return;
	}
	const data = {
		country_name: props.vendor.vendor_details.country_name,
		state: props.vendor.vendor_details.state,
		city: props.vendor.vendor_details.city,
	};
	try {
		addressError.value = "";
		status.value = true;
		const res = await vendorStore.registerVendor(data);
		vendorAddress.value = false;
	} catch (error) {
		if (error.response) {
			addressError.value = error.response.data.message || "An error occurred while saving changes.";
		} else if (error.request) {
			addressError.value = "No response received from server. Please try again later.";
		} else {
			addressError.value = "An error occurred. Please try again later.";
		}
	} finally {
		status.value = false;
	}
}
</script>
<style scoped>
.char-count {
	position: absolute;
	bottom: 0px;
	right: 15px;
	font-size: 14px;
	font-weight: 500;
	color: #333333;
}
</style>
