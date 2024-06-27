<template>
	<div>
		<span class="pa-5 d-flex align-center">
			<v-icon class="mr-4" icon="mdi mdi-arrow-left" @click="$router.push('/vendor/dashboard/Settings/Policies')"></v-icon>
			<p style="color: #000; font-size: 20px; font-weight: 600" class="">Default Return Rules</p>
		</span>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">Return Policy</p>
			<v-card class="mx-auto my-2 px-6 cardStyle" flat rel="noopener">
				<div>
					<p class="" style="font-size: 18px; font-weight: 600; color: #333">Return window</p>
					<p class="mb-4" style="font-size: 16px; font-weight: 500; color: #969696">Most stores offer common return windows such as 30 or 90 days.</p>
					<v-radio-group v-model="returnPolicies.return_window" style="font-size: 14px; font-weight: 500; color: #333">
						<v-radio color="#00966D" label="14 Days" value="14 Days"></v-radio>
						<v-radio color="#00966D" label="30 Days" value="30 Days"></v-radio>
						<v-radio color="#00966D" label="90  Days" value="90 Days"></v-radio>
						<v-radio color="#00966D" label="Unlimited" value="Unlimited"></v-radio>
						<v-radio color="#00966D" label="Custom Days" value="custom"></v-radio>
					</v-radio-group>
					
				</div>
				<v-row v-show="returnPolicies.return_window === 'custom' || durationValue">
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
					<v-radio-group v-model="returnPolicies.return_shipping_cost" style="font-size: 14px; font-weight: 500; color: #333">
						<v-radio color="#00966D" label="Customer provides return shipping" value="Customer provides return shipping"></v-radio>
						<v-radio color="#00966D" label="Free return shipping" value="Free return shipping"></v-radio>
						<v-radio color="#00966D" label="Flat rate return shipping" value="Flat rate return shipping"></v-radio>
					</v-radio-group>
				</div>

				<div>
					<p class="" style="font-size: 18px; font-weight: 600; color: #333">Refund policy</p>
					<p class="mb-4" style="font-size: 16px; font-weight: 500; color: #969696">This is our terms for refunds of a product</p>
					<v-radio-group v-model="returnPolicies.refund_policy" style="font-size: 14px; font-weight: 500; color: #333">
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
							<li v-show="returnPolicies.return_window" style="font-weight: 500; font-size: 16px; color: #969696">{{ returnPolicies.return_window == 'custom'? `${durationValue} ${durationUnit}` : returnPolicies.return_window }} return window.</li>
							<li v-show="returnPolicies.return_shipping_cost" style="font-weight: 500; font-size: 16px; color: #969696">{{ returnPolicies.return_shipping_cost }}</li>
							<li v-show="returnPolicies.refund_policy" style="font-weight: 500; font-size: 16px; color: #969696">{{ returnPolicies.refund_policy }}</li>
						</ul>
					</div>
					<div class="my-5">
						<p class="mb-2" style="font-size: 16px; font-weight: 600; color: #333">Refund Policy</p>
						<ul class="mx-5" style="text-transform: capitalize;">
							<li v-show="returnPolicies.refund_policy" style="font-weight: 500; font-size: 16px; color: #969696">{{ returnPolicies.refund_policy }}</li>
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
					<v-btn @click="discardChanges()" size="default" style="border: 1px solid #e5e5e5" flat>
						<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Discard</span></v-btn
					>
					<v-btn @click="createPolicy()" :disabled="!allFieldsSelected" v-if="!hasPolicy" size="default" color="green" flat>
						<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save</span>
						<v-progress-circular v-if="loading" class="ml-2" indeterminate :width="2" :size="20"></v-progress-circular>
					</v-btn
					>
					<v-btn @click="updatePolicy()" :disabled="!allFieldsSelected" v-else size="default" color="green" flat>
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
import { savePolicy, editPolicy } from "~/composables/policy";

const vendorStore = useVendorStore()
const durationValue = ref(null)
const durationUnit = ref("")
const policyError = ref("")
const loading = ref(false)
const hasPolicy = computed(() => vendorStore.vendor.vendor_details.policy)
const returnPolicies = ref(vendorStore.vendor.vendor_details.policy)
const initialReturnPolicies = ref(null);

onBeforeMount(() => {
	if (!vendorStore.vendor.vendor_details.policy){
		returnPolicies.value = []
	}
})
onMounted(() => {

	initialReturnPolicies.value = {...returnPolicies.value}
	if (
	hasPolicy.value &&
    !['14 Days', '30 Days', '90 Days', 'Unlimited'].includes(returnPolicies.value.return_window)
  ) {
    const [value, unit] = returnPolicies.value.return_window.split(' ');
    durationValue.value = value;
    durationUnit.value = unit;
  }
})
watch(() => returnPolicies.value, () => {
	if (
    hasPolicy.valueS &&
    !['14 Days', '30 Days', '90 Days', 'Unlimited'].includes(returnPolicies.value.return_window)
  ) {
    const [value, unit] = returnPolicies.value.return_window.split(' ');
    durationValue.value = value;
    durationUnit.value = unit;
  }
})
function discardChanges() {
  returnPolicies.value = {...initialReturnPolicies.value}
}
async function createPolicy(){
	policyError.value = ""
	if(!allFieldsSelected.value){
		policyError.value = "Select all necessary fields"
		return
	}
	const data = {
		return_window: returnPolicies.value?.return_window == 'custom' ? `${durationValue.value} ${durationUnit.value}` : returnPolicies.value?.return_window, 
		return_shipping_cost: returnPolicies.value?.return_shipping_cost,
		refund_policy: returnPolicies.value?.refund_policy
	}
	const result = await savePolicy(data, loading)
	if(!result.success){
		policyError.value = result.message
	}
}
async function updatePolicy(){
	policyError.value = ""
	if(!allFieldsSelected.value){
		policyError.value = "Select all necessary fields"
		return
	}
	const data = {
		return_window: returnPolicies.value?.return_window !== 'custom' ?  returnPolicies.value?.return_window : `${durationValue.value} ${durationUnit.value}`, 
		return_shipping_cost: returnPolicies.value?.return_shipping_cost,
		refund_policy: returnPolicies.value?.refund_policy
	}
	const result = await editPolicy(returnPolicies.value.id, data, loading)
	if(!result.success){
		policyError.value = result.message
	}
}

const allFieldsSelected = computed(() => {
  return returnPolicies.value?.return_window && 
         returnPolicies.value?.return_shipping_cost && 
         returnPolicies.value?.refund_policy &&
         (returnPolicies.value?.return_window !== 'custom' || (durationValue.value && durationUnit.value));
});
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
