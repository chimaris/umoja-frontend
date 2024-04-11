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
					<v-label class="inputLabel">Bank Name </v-label>
					<v-select v-model="bankName" append-inner-icon="mdi mdi-chevron-down" placeholder="Select" density="comfortable"> </v-select>
				</div>
				<div class="mb-4">
					<v-label class="inputLabel">Account Number </v-label>
					<v-text-field v-model="accountNumber" placeholder="Enter your account number" density="comfortable"> </v-text-field>
				</div>
				<div class="mb-4">
					<v-label class="inputLabel">Name on Account </v-label>
					<v-text-field v-model="accountName" density="comfortable"> </v-text-field>
				</div>

				<p style="font-weight: 500; font-size: 16px; color: #969696">
					To help us verify your account, the name on your bank account should match the name you provided as the owner of your business Verifying.
				</p>
			</div>
		</div>
		<v-btn flat style="background-color: #2c6e63; color: #fff" size="x-large">Save and continue</v-btn>
	</v-sheet>

	<!-- View Contact Section -->
	<v-sheet max-width="550" width="100%" style="padding-top: 10px; margin: auto; padding: 40px; border-radius: 15px">
		<v-sheet class="pt-8">
			<div class="mb-4">
				<p class="mb-1 contact-label">Bank Name</p>
				<p class="contact-value">Access Bank PLC</p>
			</div>
			<div class="mb-4">
				<p class="mb-1 contact-label">Account Number</p>
				<p class="contact-value">0067682431</p>
			</div>
			<div class="mb-4">
				<p class="mb-1 contact-label">Account Name</p>
				<p class="contact-value">Nweke Franklin Odira (Thatdesignpro)</p>
			</div>
		</v-sheet>
		<div class="py-4 d-flex justify-space-between">
			<v-btn size="x-large" style="border: 1px solid #969696" flat>
				<span style="color: #333; font-size: 16px; font-weight: 600; line-height: 24px"> Edit</span></v-btn
			>

			<v-btn size="x-large" style="border: 1px solid #969696" flat>
				<span style="color: #333; font-size: 16px; font-weight: 600; line-height: 24px"> Next</span></v-btn
			>
		</div>
	</v-sheet>
</template>
<script>
export default {
	name: "account",
	data() {
		return {};
	},

	methods: {
		submit() {
			this.$emit("submit");
		},
	},
};
</script>

<style scoped>
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
