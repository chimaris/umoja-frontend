<template>
	<div>
		<span class="pa-5 d-flex align-center">
			<v-icon class="mr-4" icon="mdi mdi-arrow-left" @click="vendorStore.renderReturnRule = false"></v-icon>
			<p style="color: #000; font-size: 20px; font-weight: 600" class="">Default Return Rules</p>
		</span>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">Return Policy</p>
			<v-card class="mx-auto my-2 px-6 cardStyle" flat rel="noopener">
				<div>
					<p class="" style="font-size: 18px; font-weight: 600; color: #333">Return window</p>
					<p class="mb-4" style="font-size: 16px; font-weight: 500; color: #969696">Most stores offer common return windows such as 30 or 90 days.</p>
					<v-radio-group v-model="returnWindow" style="font-size: 14px; font-weight: 500; color: #333">
						<v-radio color="#00966D" label="14 Days" value="14 Days"></v-radio>
						<v-radio color="#00966D" label="30 Days" value="30 Days"></v-radio>
						<v-radio color="#00966D" label="90  Days" value="90 Days"></v-radio>
						<v-radio color="#00966D" label="Unlimited" value="Unlimited"></v-radio>
						<v-radio color="#00966D" label="Custom Days" value="custom"></v-radio>
					</v-radio-group>
				</div>
				<v-row v-show="returnWindow == 'custom'">
					<v-col cols="6">
						<v-text-field
						v-model="durationValue"
						label="Enter duration"
						type="number"
						min="1"
						></v-text-field>
					</v-col>
					<v-col cols="6">
						<v-select
						v-model="durationUnit"
						:items="['Days', 'Weeks', 'Months']"
						label="Select unit"
						style="width: 150px;"
						></v-select>
					</v-col>
				</v-row>
				<div>
					<p class="" style="font-size: 18px; font-weight: 600; color: #333">Return shipping cost</p>
					<p class="mb-4" style="font-size: 16px; font-weight: 500; color: #969696">Most stores offer common return windows such as 30 or 90 days.</p>
					<v-radio-group v-model="shippingCost" style="font-size: 14px; font-weight: 500; color: #333">
						<v-radio color="#00966D" label="Customer provides return shipping" value="Customer provides return shipping"></v-radio>
						<v-radio color="#00966D" label="Free return shipping" value="Free return shipping"></v-radio>
						<v-radio color="#00966D" label="Flat rate return shipping" value="Flat rate return shipping"></v-radio>
					</v-radio-group>
				</div>

				<div>
					<p class="" style="font-size: 18px; font-weight: 600; color: #333">Refund policy</p>
					<p class="mb-4" style="font-size: 16px; font-weight: 500; color: #969696">This is our terms for refunds of a product</p>
					<v-radio-group v-model="refundPolicy" style="font-size: 14px; font-weight: 500; color: #333">
						<v-radio color="#00966D" label="No refund (Product will be replaced)" value="No refund  (Product will be replaced)"></v-radio>
						<v-radio color="#00966D" label="Full Refund" value="Full Refund"></v-radio>
						<v-radio color="#00966D" label="50% Refund" value="50% Refund"></v-radio>
					</v-radio-group>
				</div>
		
				<!-- <div>
					<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">Restocking fee</p>
					<v-checkbox density="comfortable" v-model="selectAll" label="Charge restocking fee"></v-checkbox>
				</div> -->
			</v-card>

			<v-card class="mx-auto my-2 py-5 px-6 cardStyle" flat rel="noopener">
				<div class="d-flex justify-space-between align-center">
					<p style="font-size: 18px; font-weight: 600; color: #333">Return rules summary</p>
					<v-chip color="green" style="border-radius: 6px"> On </v-chip>
				</div>

				<v-card class="mx-auto my-2 py-5 px-6 cardStyle" flat rel="noopener">
					<div>
						<p class="mb-2" style="font-size: 16px; font-weight: 600; color: #333">Default Rules</p>
						<ul class="mx-5" style="text-transform: capitalize;">
							<li v-show="returnWindow" style="font-weight: 500; font-size: 16px; color: #969696">{{ returnWindow == 'custom'? `${durationValue} ${durationUnit}` : returnWindow }} return window.</li>
							<li v-show="shippingCost" style="font-weight: 500; font-size: 16px; color: #969696">{{ shippingCost }}</li>
							<li v-show="refundPolicy" style="font-weight: 500; font-size: 16px; color: #969696">{{ refundPolicy }}</li>
						</ul>
					</div>
					<div class="my-5">
						<p class="mb-2" style="font-size: 16px; font-weight: 600; color: #333">Refund Policy</p>
						<ul class="mx-5" style="text-transform: capitalize;">
							<li v-show="refundPolicy" style="font-weight: 500; font-size: 16px; color: #969696">{{ refundPolicy }}</li>
						</ul>
					</div>

					<!-- <div>
						<p class="mb-2" style="font-size: 16px; font-weight: 600; color: #333">Final Sales Item</p>
						<ul v-for="item in ['No final sale items']" :key="item" class="mx-5">
							<li style="font-weight: 500; font-size: 16px; color: #969696">{{ item }}</li>
						</ul>
					</div> -->
				</v-card>
				<p style="color: red; text-align: end; font-size: 16px;">{{ policyError }}</p>
				<div class="d-flex justify-end mt-2 ga-4">
					<v-btn v-show="!hasPolicy" size="default" style="border: 1px solid #e5e5e5" flat>
						<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Discard</span></v-btn
					>
					<v-btn @click="createPolicy()" v-if="!hasPolicy" size="default" color="green" flat>
						<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save</span>
						<v-progress-circular v-if="loading" class="ml-2" indeterminate :width="2" :size="20"></v-progress-circular>
					</v-btn
					>
					<v-btn v-else size="default" color="green" flat>
						<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Edit</span>
						<v-progress-circular v-if="loading" class="ml-2" indeterminate :width="2" :size="20"></v-progress-circular>
					</v-btn
					>
				</div> 
			</v-card>
		</div>
		<p class="text-center py-4" style="font-size: 16px; font-weight: 500; color: #969696; width: 85%">
			Learn more about <span style="color: #1273eb">return rules</span>
		</p>
		
	</div>
</template>

<script setup>
import { useVendorStore } from "~/stores/vendorStore";
import { vendorUseApi } from "~/composables/vendorApi";

const vendorStore = useVendorStore()
const hasPolicy = computed(() => vendorStore.vendor.vendor_details?.policy)
const returnWindow = ref("")
const shippingCost = ref("")
const refundPolicy = ref("")
const durationValue = ref(null)
const durationUnit = ref("")
const policyError = ref("")
const loading = ref(false)

async function createPolicy(){
	const api = vendorUseApi()
	policyError.value = ""
	if(!returnWindow.value || !shippingCost.value || !refundPolicy.value){
		policyError.value = "Select all necessary fields"
		return
	}
	try{
		loading.value = true
		const res = await api({
			url: 'vendor/policies',
			method: 'POST',
			data: {
			'14_days': returnWindow.value == '14 Days' ? 'yes' : '',
			'30_days': returnWindow.value == '30 Days' ? 'yes' : '',
			'90_days': returnWindow.value == '90 Days' ? 'yes' : '',
			'unlimited': returnWindow.value == 'Unlimited' ? 'yes' : '',
			'custom_days': returnWindow.value == 'custom' ? `${durationValue.value} ${durationUnit.value}` : '',
			'customer_provides_return_shipping': shippingCost.value == 'Customer provides return shipping' ? 'yes' : '',
			'free_return_shipping': shippingCost.value == 'Free return shipping' ? 'yes' : '',
			'flat_rate_return_shipping': shippingCost.value == 'Flat rate return shipping' ? 'yes' : '',
			'no_refund': refundPolicy.value == 'No refund (Product will be replaced)' ? 'yes' : '',
			'full_refund': refundPolicy.value == 'Full Refund' ? 'yes' : '',
			'50%_refund': refundPolicy.value == '50% Refund' ? 'yes' : ''
			}
		});
		await vendorStore.getUser(vendorStore.vendor.id)
		console.log(res)
	}catch(err){
		console.error("rr", err)
		if (err.response) {
            policyError.value = err.response.data.message || 'An error occurred while setting up policy.';
            } else if (err.request) {
                policyError.value  = 'No response received from server. Please try again later.';
            } else {
                policyError.value   = 'An error occurred. Please try again later.';
            }
	}finally{
		loading.value = false
	}
}
</script>

<style scoped>
.inputLabel {
	font-size: 14px;
	font-weight: 500;
	color: #333;
}
.v-text-field {
	cursor: pointer;
}
</style>
