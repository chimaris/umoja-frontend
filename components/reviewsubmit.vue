<template>
	<div>
		<h1 style="font-weight: 600; font-size: 32px; color: #1a1d1f">Review your application</h1>
		<p style="font-weight: 500; font-size: 16px; max-width: 502px; line-height: 24px; color: #9ea5ad">
			Here’s a final look at your application, make sure you have met all our registration requirements
		</p>
		<div class="pt-8 pb-12" style="max-width: 502px">
			<v-card flat height="64" class="d-flex px-4 align-center mb-4" style="border: 1px solid #e5e7ea; border-radius: 8px">
				<div>
					<v-checkbox v-model="isCompanyInfo" @click="isCompanyInfo = !isCompanyInfo" color="#0076FF" hide-details>
						<template v-slot:label>
							<div class="font-weight-medium">Company Information</div>
						</template>
					</v-checkbox>
				</div>
			</v-card>
			<v-card flat height="64" class="d-flex px-4 align-center mb-4" style="border: 1px solid #e5e7ea; border-radius: 8px">
				<div>
					<v-checkbox v-model="isOwnerInfo" @click="isOwnerInfo = !isOwnerInfo" color="#0076FF" hide-details>
						<template v-slot:label>
							<div class="font-weight-medium">Owner’s Information</div>
						</template>
					</v-checkbox>
				</div>
			</v-card>
			<v-card flat height="64" class="d-flex px-4 align-center mb-4" style="border: 1px solid #e5e7ea; border-radius: 8px">
				<div>
					<v-checkbox v-model="isBusinessDocumentation" @click="isBusinessDocumentation = !isBusinessDocumentation" color="#0076FF" hide-details>
						<template v-slot:label>
							<div class="font-weight-medium">Business documentation</div>
						</template>
					</v-checkbox>
				</div>
			</v-card>

			<v-checkbox v-model="isConfirmation" @click="isConfirmation = !isConfirmation" color="#0076FF" hide-details>
				<template v-slot:label>
					<div class="font-weight-medium">I/We confirm that the information provided are accurate and truthful.</div>
				</template>
			</v-checkbox>

			<p style="color: red">{{ vendorStore.signupError }}</p>
			<p style="color: red; font-size: 16px" class="mt-4">{{ formError }}</p>
			<v-btn @click="handleSubmission()" flat class="mt-8" color="green" size="large">
				<span class="mr-4" style="text-transform: none">Submit application</span>
				<v-progress-circular v-if="vendorStore.loading" indeterminate :width="2" :size="25"></v-progress-circular>
			</v-btn>
		</div>
		<v-dialog v-model="showModal" persistent max-width="568">
			<!-- Modal content -->
			<v-card style="width: 550px; justify-content: center; align-items: center; border-radius: 15px" class="d-flex flex-column text-center pa-10">
				<v-avatar color="#FEF6ED" size="x-large" class="mb-5">
					<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1713546697/umoja/good.svg"></v-img>
				</v-avatar>
				<h3 style="font-size: 32px; font-weight: 600; line-height: 40px; color: #2a2a2a">
					You have successfully submitted your business registeration
				</h3>
				<p class="mt-4" style="font-size: 16px; font-weight: 500; line-height: 22px; color: #333; width: 340px">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, sequi impedit, eius non numquam officia nobis mollitia architecto minima
					ipsam iure laborum sit quasi voluptate nemo eligendi adipisci facere? Quo.
				</p>
				<v-card-actions class="d-flex justify-center align-center pt-10 w-100">
					<v-btn
						width="250"
						flat
						style="background-color: #2c6e63; color: #edf0ef; font-size: 16px; font-weight: 600; padding: 10px"
						size="x-large"
						to="/"
						>Go back to web page</v-btn
					>
					<v-btn
						width="250"
						flat
						style="background-color: transparent color: #000000; border: 1px solid #000000; font-size: 16px; font-weight: 600; padding: 10px"
						size="x-large"
						@click="showModal = false"
						>Got it</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useVendorStore } from "~/stores/vendorStore";
import { useRouter } from "vue-router";
import { formatDate } from "~/utils/date";

const isCompanyInfo = ref(false);
const isOwnerInfo = ref(false);
const isBusinessDocumentation = ref(false);
const isConfirmation = ref(false);
const showModal = ref(false);
const vendorStore = useVendorStore();
const router = useRouter();
const formError = ref("");


async function handleSubmission() {
	if (isCompanyInfo.value && isOwnerInfo.value && isBusinessDocumentation.value && isConfirmation.value && vendorStore.areAllFormsSubmitted()) {
		try {
			const isRegistered = await vendorStore.registerVendor();
			if (isRegistered) {
				showModal.value = true;
				vendorStore.signupError = "";
			}
		} catch (error) {
			console.error(error);
		}
	} else {
		formError.value = "Please make sure you have filled all the form inputs!!";
	}
}
</script>

