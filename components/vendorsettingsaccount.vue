<template>
	<div>
		<p style="color: #000; font-size: 20px; font-weight: 600" class="pa-5">Account Details</p>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<div class="mb-10 d-flex align-center justify-space-between">
				<p style="font-size: 20px; font-weight: 600">Your bank account details</p>

				<div>
					<v-btn
						@click="bankDetails = true"
						style="border: 1px solid #e5e5e5"
						variant="outlined"
						size="default"
						class="ml-4 menubar text-grey-darken-3"
					>
						<v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
						Edit
					</v-btn>
					<v-btn @click="newDetails = true" color="green" flat size="default" class="ml-4 menubar text-grey-darken-3">
						<v-icon class="mr-2" icon="mdi mdi-plus"></v-icon>
						Add New Account
					</v-btn>
				</div>
			</div>
			<div style="max-width: 506px">
				<v-snackbar v-model="notify" :timeout="timeout" location="top" color="success">
					Copied! <v-icon icon="mdi mdi-checkbox-marked-circle"></v-icon>
				</v-snackbar>

				<div class="d-flex mb-8 justify-space-between align-center">
					<p style="color: #969696; font-size: 14px; font-weight: 500">Account Name</p>
					<div class="d-flex align-center">
						<p style="color: #000; font-size: 14px; font-weight: 500; text-transform: capitalize">{{ vendor.vendor_details?.name_on_account }}</p>
						<v-icon
							@click="copyToClipboard(vendor.vendor_details?.name_on_account)"
							color="green"
							size="small"
							class="ml-3"
							icon="mdi mdi-content-copy"
						></v-icon>
					</div>
				</div>
				<div class="d-flex mb-8 justify-space-between align-center">
					<p style="color: #969696; font-size: 14px; font-weight: 500">Account Number</p>
					<div class="d-flex align-center">
						<p style="color: #000; font-size: 14px; font-weight: 500">{{ vendor.vendor_details?.bank_account_number }}</p>
						<v-icon
							@click="copyToClipboard(vendor.vendor_details?.bank_account_number)"
							color="green"
							size="small"
							class="ml-3"
							icon="mdi mdi-content-copy"
						></v-icon>
					</div>
				</div>
				<div class="d-flex mb-8 justify-space-between align-center">
					<p style="color: #969696; font-size: 14px; font-weight: 500">Sort Code</p>
					<div class="d-flex align-center">
						<p style="color: #000; font-size: 14px; font-weight: 500"></p>
						<!-- <v-icon color="green" size="small" class="ml-3" icon="mdi mdi-content-copy"></v-icon> -->
					</div>
				</div>
				<div class="d-flex mb-8 justify-space-between align-center">
					<p style="color: #969696; font-size: 14px; font-weight: 500">Swift Code</p>
					<div class="d-flex align-center">
						<p style="color: #000; font-size: 14px; font-weight: 500"></p>
						<!-- <v-icon color="green" size="small" class="ml-3" icon="mdi mdi-content-copy"></v-icon> -->
					</div>
				</div>
				<div class="d-flex mb-8 justify-space-between align-center">
					<p style="color: #969696; font-size: 14px; font-weight: 500">Bank Name</p>
					<div class="d-flex align-center">
						<p style="color: #000; font-size: 14px; font-weight: 500; text-transform: capitalize">{{ vendor.vendor_details?.bank_name }}</p>
						<v-icon
							@click="copyToClipboard(vendor.vendor_details?.bank_name)"
							color="green"
							size="small"
							class="ml-3"
							icon="mdi mdi-content-copy"
						></v-icon>
					</div>
				</div>
				<div class="d-flex mb-8 justify-space-between align-center">
					<p style="color: #969696; font-size: 14px; font-weight: 500">IBAN</p>
					<div class="d-flex align-center">
						<p style="color: #000; font-size: 14px; font-weight: 500"></p>
						<!-- <v-icon color="green" size="small" class="ml-3" icon="mdi mdi-content-copy"></v-icon> -->
					</div>
				</div>
				<div class="d-flex mb-8 justify-space-between align-center">
					<p style="color: #969696; font-size: 14px; font-weight: 500">Address</p>
					<div class="d-flex align-center">
						<p class="text-right" style="color: #000; font-size: 14px; max-width: 228px; text-transform: capitalize; font-weight: 500">
							{{ vendor.vendor_details?.address }}
						</p>
						<v-icon
							@click="copyToClipboard(vendor.vendor_details?.address)"
							color="green"
							size="small"
							class="ml-3"
							icon="mdi mdi-content-copy"
						></v-icon>
					</div>
				</div>
			</div>
		</div>
		<v-dialog max-width="750" v-model="bankDetails">
			<v-sheet max-width="949" class="pa-4 pa-md-6">
				<div class="d-flex align-center justify-space-between">
					<p style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 600">Edit Account Details</p>
				</div>
				<v-card flat class="mt-6 bg-white rounded-lg py-8">
					<v-form v-model="valid" @submit.prevent="editBankDets()">
						<v-row>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">Account Name<span class="mb-2">*</span></p>
								<v-text-field v-model="vendor.vendor_details.name_on_account" placeholder="Enter your account name" density="comfortable">
								</v-text-field>
							</v-col>
							<v-col cols="12" md="6" class="pt-0">
								<p class="inputLabel">Account Number<span class="mb-2">*</span></p>
								<v-text-field v-model="vendor.vendor_details.bank_account_number" placeholder="Enter your account number" density="comfortable">
								</v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">Bank Name<span class="mb-2">*</span></p>
								<v-text-field v-model="vendor.vendor_details.bank_name" placeholder="Enter your bank name" density="comfortable"> </v-text-field>
							</v-col>
							<v-col cols="12" md="6" class="pt-0">
								<p class="inputLabel">Sort Code<span class="mb-2">*</span></p>
								<v-text-field v-model="vendor.vendor_details.sort_code" placeholder="Enter your sort code" density="comfortable"> </v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">Swift Code<span class="mb-2">*</span></p>
								<v-text-field v-model="vendor.vendor_details.swift_code" placeholder="Enter your swift code" density="comfortable"> </v-text-field>
							</v-col>
							<v-col cols="12" md="6" class="pt-0">
								<p class="inputLabel">IBAN<span class="mb-2">*</span></p>
								<v-text-field v-model="vendor.vendor_details.iban_number" placeholder="Enter your IBAN" density="comfortable"> </v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="pt-0">
								<p class="inputLabel">Address<span class="mb-2">*</span></p>
								<v-text-field v-model="vendor.vendor_details.address" placeholder="Enter your address" density="comfortable"> </v-text-field>
							</v-col>
						</v-row>
						<p style="color: red; font-size: 16px">{{ bankError }}</p>
						<v-btn class="textClass px-8" rounded="xl" :disabled="status" type="submit" color="green" flat>{{
							status ? "Saving" : "Save changes"
						}}</v-btn>
						<v-btn @click="bankDetails = false" variant="tonal" class="textClass ml-2 px-8 d-none d-md-inline-block" rounded="xl" color="green" flat
							>Cancel</v-btn
						>
					</v-form>
				</v-card>
			</v-sheet>
		</v-dialog>
		<v-dialog max-width="750" v-model="newDetails">
			<v-sheet max-width="949" class="pa-4 pa-md-6">
				<div class="d-flex align-center justify-space-between">
					<p style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 600">Edit Account Details</p>
				</div>
				<v-card flat class="mt-6 bg-white rounded-lg py-8">
					<v-form v-model="valid" @submit.prevent="editBankDets()">
						<v-row>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">Account Name<span class="mb-2">*</span></p>
								<v-text-field v-model="acctName" placeholder="Enter your account name" density="comfortable"> </v-text-field>
							</v-col>
							<v-col cols="12" md="6" class="pt-0">
								<p class="inputLabel">Account Number<span class="mb-2">*</span></p>
								<v-text-field v-model="acctNumber" placeholder="Enter your account number" density="comfortable"> </v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">Bank Name<span class="mb-2">*</span></p>
								<v-text-field v-model="bankName" placeholder="Enter your bank name" density="comfortable"> </v-text-field>
							</v-col>
							<v-col cols="12" md="6" class="pt-0">
								<p class="inputLabel">Sort Code<span class="mb-2">*</span></p>
								<v-text-field v-model="sortCode" placeholder="Enter your sort code" density="comfortable"> </v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="pt-0" md="6">
								<p class="inputLabel">Swift Code<span class="mb-2">*</span></p>
								<v-text-field v-model="swiftCode" placeholder="Enter your swift code" density="comfortable"> </v-text-field>
							</v-col>
							<v-col cols="12" md="6" class="pt-0">
								<p class="inputLabel">IBAN<span class="mb-2">*</span></p>
								<v-text-field v-model="ibanNum" placeholder="Enter your IBAN" density="comfortable"> </v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" class="pt-0">
								<p class="inputLabel">Address<span class="mb-2">*</span></p>
								<v-text-field v-model="address" placeholder="Enter your address" density="comfortable"> </v-text-field>
							</v-col>
						</v-row>
						<p style="color: red; font-size: 16px">{{ bankError }}</p>
						<v-btn class="textClass px-8" rounded="xl" :disabled="status" type="submit" color="green" flat>{{
							status ? "Adding" : "Add Account"
						}}</v-btn>
						<v-btn @click="newDetails = false" variant="tonal" class="textClass ml-2 px-8 d-none d-md-inline-block" rounded="xl" color="green" flat
							>Cancel</v-btn
						>
					</v-form>
				</v-card>
			</v-sheet>
		</v-dialog>
	</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useVendorStore } from "~/stores/vendorStore";

const vendorStore = useVendorStore();
const bankDetails = ref(false);
const newDetails = ref(false);
const status = ref(false);
const bankError = ref("");
const notify = ref(false);
const timeout = ref(2000);
const props = defineProps({
	vendor: {
		type: Array,
		required: true,
	},
});

const copyToClipboard = (refName) => {
	navigator.clipboard.writeText(refName);
	notify.value = true;
};

async function editBankDets() {
	if (
		!props.vendor.vendor_details?.address ||
		!props.vendor.vendor_details?.bank_name ||
		!props.vendor.vendor_details?.bank_account_number ||
		!props.vendor.vendor_details?.name_on_account
	) {
		return;
	}
	const data = {
		address: props.vendor.vendor_details?.address,
		bank_name: props.vendor.vendor_details?.bank_name,
		bank_account_number: props.vendor.vendor_details?.bank_account_number,
		name_on_account: props.vendor.vendor_details?.name_on_account,
	};
	try {
		bankError.value = "";
		status.value = true;
		await vendorStore.registerVendor(data);
		bankDetails.value = false;
	} catch (error) {
		if (error.response) {
			bankError.value = error.response.data.message || "An error occurred while saving changes.";
		} else if (error.request) {
			bankError.value = "No response received from server. Please try again later.";
		} else {
			bankError.value = "An error occurred. Please try again later.";
		}
	} finally {
		status.value = false;
	}
}
</script>
