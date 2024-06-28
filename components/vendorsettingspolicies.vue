<template>
	<div>
		<p style="color: #000; font-size: 20px; font-weight: 600" class="pa-5">Policies</p>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<p style="font-size: 20px; font-weight: 600">Store Policies</p>
			<p style="font-size: 16px; font-weight: 500; color: #969696; width: 85%">
				Saved policies are automatically linked in the footer of your checkout and can be
				<span style="color: #1273eb">added to your online store menu.</span> Templates aren’t legal advice. By using these templates, you agree that
				you’ve read and agree to the <span style="color: #1273eb">disclaimer.</span>
			</p>

			<div class="mt-5" style="border: 1px solid #cecece; border-radius: 15px">
				<div class="d-flex justify-space-between align-center w-100 pa-4">
					<p style="font-size: 18px; font-weight: 600; color: #333">Return Policy</p>
					<v-btn @click="moveTo()" variant="text" class="ml-4 menubar text-grey-darken-3 d-flex align-center" size="default" style="font-weight: 600; font-size: 16px">
						<v-img
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718099894/umoja/Pen_2_cdzgaq.svg"
							contain
							class="mr-1"
							width="20"
							height="20"
						></v-img>
						{{ hasPolicy ? 'Edit' : 'Set Return Rule' }}
					</v-btn>
				</div>
				<v-divider></v-divider>

				<div class="pa-4">
					<div class="d-flex justify-space-between align-center w-100">
						<div class="d-flex py-2">
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">
									Return Rule <v-chip class="px-2" style="border-radius: 6px"> Off </v-chip>
								</p>
								<p style="font-size: 16px; font-weight: 500; color: #969696; width: 85%">
									Define conditions for <span style="color: #1273eb">customer return requests</span> and returns using Point of Sale. Return rules
									will only apply to items purchased after the return rules were turned on or updated.
								</p>
							</div>
						</div>
						<div>
							<v-btn
								@click="deliveryDateModal = true"
								style="border: 1px solid #e5e5e5"
								variant="outlined"
								size="default"
								class="ml-4 menubar text-grey-darken-3"
							>
								Turn on
							</v-btn>
						</div>
					</div>

					<div class="d-flex justify-space-between align-center pa-4" style="border: 1px solid #cecece; border-radius: 15px">
						<div>
							<ul
								v-if="returnPolicies"
								class="mx-5"
							>
								<li style="font-weight: 500; font-size: 16px; color: #969696">{{ returnPolicies?.refund_policy }}</li>
								<li style="font-weight: 500; font-size: 16px; color: #969696">{{ returnPolicies?.return_shipping_cost }}</li>
								<li style="font-weight: 500; font-size: 16px; color: #969696">{{ returnPolicies?.return_window }} return window</li>
							</ul>
						</div>
						<span @click="moveTo()" style="color: #1273eb; font-weight: 500; font-size: 14px; cursor: pointer">
							<span>Manage</span>
						</span>
					</div>
				</div>
			</div>
		</div>

		<!-- <div class="d-flex justify-end ga-4 py-4">
			<v-btn size="default" style="border: 1px solid #e5e5e5" flat>
				<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Discard</span></v-btn
			>
			<v-btn size="default" color="green" flat>
				<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save</span></v-btn
			>
		</div> -->
	</div>
</template>

<script setup>
import { useVendorStore } from "~/stores/vendorStore";
import { usePolicy } from "~/composables/policy";

const vendorStore = useVendorStore()
const vendor = computed(() => vendorStore.vendor)
const hasPolicy = computed(() => vendorStore.vendor.vendor_details?.policy)
const returnPolicies = computed(() => vendorStore.vendor.vendor_details?.policy)
const router = useRouter()

function moveTo(){
	router.push('/vendor/dashboard/Settings/Return Rule')
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
