<template>
	<!-- Edit Contact Section -->
	<v-sheet max-width="550" width="100%" style="margin: auto; background-color: #f8f8f8">
		<div style="background-color: #fff; padding: 40px; margin-bottom: 10px; border-radius: 15px">
			<v-avatar size="x-large" color="#EDF0FC">
				<v-icon icon="mdi mdi-account-circle" color="#1273EB"></v-icon>
			</v-avatar>
			<h1 style="font-weight: 600; font-size: 32px; color: #333">Personal Bank Account</h1>
			<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #9ea5ad">Just few mmore steps to go and you are done⚡️</p>
			<div class="pt-8">
				<div class="mb-4">
					<v-label class="inputLabel">How would you like to receive payments </v-label>
					<v-select
						placeholder="Select preferred mode of payment"
						v-model="paymentMode"
						:items="paymentModes">
					</v-select>
				</div>
			</div>
			<div v-if="paymentMode == 'Bank Account'">
				<div class="mb-4">
					<v-label class="inputLabel">Bank Name* </v-label>
					<v-text-field  v-model="vendor.bank_name" density="comfortable" placeholder="Enter your bank name"></v-text-field>
				</div>
				<div class="mb-4">
					<v-label class="inputLabel">Account Number </v-label>
					<v-text-field :rules="numRules" v-model="vendor.bank_account_number" placeholder="Enter your account number" density="comfortable"> </v-text-field>
				</div>
				<div class="mb-4">
					<v-label class="inputLabel">Sort Code </v-label>
					<v-text-field :rules="numRules" v-model="vendor.sort_code"  placeholder="Enter your sort code" density="comfortable"> </v-text-field>
				</div>
				<div class="mb-4">
					<v-label class="inputLabel">Swift Code </v-label>
					<v-text-field  v-model="vendor.swift_code"  placeholder="Enter your swift code" density="comfortable"> </v-text-field>
				</div>
				<div class="mb-4">
					<v-label class="inputLabel">IBAN </v-label>
					<v-text-field  v-model="vendor.iban"  placeholder="Enter your IBAN" density="comfortable"> </v-text-field>
				</div>
				<div class="mb-4">
					<v-label class="inputLabel">Name on Account* </v-label>
					<v-text-field  v-model="vendor.name_on_account" density="comfortable"> </v-text-field>
				</div>

				<p style="font-weight: 500; font-size: 16px; color: #969696">
					To help us verify your account, the name on your bank account should match the name you provided as the owner of your business Verifying.
				</p>
			</div>
			<div v-if="paymentMode == 'PayPal'" class="pt-2">
				<div class="mb-4">
					<v-label class="inputLabel">PayPal Email Address </v-label>
					<v-text-field   density="comfortable" placeholder="Enter your paypal email address"></v-text-field>
				</div>
				<div class="mb-4">
					<v-label class="inputLabel">PayPal Account Holder Name </v-label>
					<v-text-field   placeholder="Enter your account name" density="comfortable"> </v-text-field>
				</div>
				<p style="font-weight: 500; font-size: 16px; color: #969696">
					To help us verify your account, the name on your paypal account should match the name you provided as the owner of your business Verifying.
				</p>
			</div>
		</div>
		<p style="color: red; font-size: 16px;" class="mb-2">{{ formError }}</p>
		<v-btn :disabled="paymentMode == 'PayPal' || !isFormValid()" @click="submit" flat style="background-color: #2c6e63; color: #fff" size="x-large">Save and continue</v-btn>
	</v-sheet>

	<!-- View Contact Section -->
	<v-sheet max-width="550" width="100%" style="padding-top: 10px; margin: 25px auto 0; padding: 40px; border-radius: 15px">
		<v-sheet class="pt-8">
			<div class="mb-4">
				<p class="mb-1 contact-label">Bank Name</p>
				<p :contenteditable="isEditing" class="contact-value">{{vendor?.bank_name}}</p>
			</div>
			<div class="mb-4">
				<p class="mb-1 contact-label">Account Number</p>
				<p :contenteditable="isEditing" class="contact-value">{{vendor?.bank_account_number}}</p>
			</div>
			<div class="mb-4">
				<p class="mb-1 contact-label">Sort Code</p>
				<p :contenteditable="isEditing" class="contact-value">{{vendor?.sort_code}}</p>
			</div>
			<div class="mb-4">
				<p class="mb-1 contact-label">Swift Code</p>
				<p :contenteditable="isEditing" class="contact-value">{{vendor?.swift_code}}</p>
			</div>
			<div class="mb-4">
				<p class="mb-1 contact-label">IBAN</p>
				<p :contenteditable="isEditing" class="contact-value">{{vendor?.iban}}</p>
			</div>
			<div class="mb-4">
				<p class="mb-1 contact-label">Account Name</p>
				<p :contenteditable="isEditing" class="contact-value">{{vendor?.name_on_account}}</p>
			</div>
		</v-sheet>
		<div class="py-4 d-flex justify-space-between">
			<v-btn @click="isEditing = !isEditing" size="x-large" style="border: 1px solid #969696" flat>
				<span style="color: #333; font-size: 16px; font-weight: 600; line-height: 24px"> Edit</span></v-btn
			>

			<v-btn  @click="emit('submit')" size="x-large" style="border: 1px solid #969696" flat>
				<span style="color: #333; font-size: 16px; font-weight: 600; line-height: 24px"> Next</span></v-btn
			>
		</div>
	</v-sheet>
</template>
<script setup>
import {ref, defineEmits, onBeforeMount} from 'vue'
import { useVendorStore } from '~/stores/vendorStore';
import {numRules, inputRules} from '~/utils/formrules'

const isEditing = ref(false)
const vendorStore = useVendorStore()
const vendor = ref(vendorStore.vendor.vendor_details)

onBeforeMount(() => {
	if (!vendorStore.vendor.vendor_details) {
		vendor.value =  []
	}
})

const formError = ref("")
const paymentMode = ref("Bank Account")
const paymentModes = ["Bank Account", "PayPal"]

const emit = defineEmits(['submit'])

function isFormValid () {
	return vendor.value?.name_on_account && vendor.value?.bank_name
}
const submit = async () => {
		if (!isFormValid()){
			return
		}
		const data = {
		bank_name: vendor.value?.bank_name,
		bank_account_number: vendor.value?.bank_account_number,
		name_on_account: vendor.value?.name_on_account,
		sort_code: vendor.value?.sort_code,
		swift_code: vendor.value?.swift_code,
		iban: vendor.value?.iban
	}

	try{
		await vendorStore.registerVendor(data)
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
