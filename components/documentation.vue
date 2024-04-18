<template>
	<div>
		<h1 style="font-weight: 600; font-size: 32px; color: #1a1d1f">Provide your business documents</h1>
		<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #9ea5ad">
			Please provide additional business information and upload business documents
		</p>
		<div class="pt-8 pb-12" style="max-width: 502px">
			<p class="inputLabel">BN Number</p>
			<v-text-field v-model="bnNumber" density="comfortable"></v-text-field>

			<p class="inputLabel">Tax Identification Number</p>
			<v-text-field v-model="taxIdNumber" density="comfortable"></v-text-field>

			<p class="inputLabel">Utility Bill</p>
			<v-select
				v-model="selectedUtilityBill"
				:items="typeOfUtilityBills"
				append-inner-icon="mdi mdi-chevron-down"
				placeholder="Select a utility bill"
				density="comfortable"
			>
			</v-select>

			<p class="inputLabel">Copy of utility bill (Valid within 3 months)</p>
			<v-card
				flat
				class="mb-8"
				style="
					justify-content: center;
					align-items: center;
					padding: 27px;
					display: flex;
					width: 100%;
					height: 100px;
					background: #f8f8f8;
					border-radius: 6px;
				"
			>
				<div class="d-flex align-center">
					<v-icon color="#9EA5AD" class="mr-2" icon="mdi mdi-file-upload-outline"></v-icon>
					<p style="font-weight: 400; font-size: 16px; color: #9ea5ad">
						Drag and drop document here or Browse Supported file types: JPEG, PNG, PDF. Max file size: 2mb
					</p>
				</div>
			</v-card>

			<p class="inputLabel">BN Document</p>
			<v-card
				flat
				class="mb-8"
				style="
					justify-content: center;
					align-items: center;
					padding: 27px;
					display: flex;
					width: 100%;
					height: 100px;
					background: #f8f8f8;
					border-radius: 6px;
				"
			>
				<div class="d-flex align-center">
					<v-icon color="#9EA5AD" class="mr-2" icon="mdi mdi-file-upload-outline"></v-icon>
					<p style="font-weight: 400; font-size: 16px; color: #9ea5ad">
						Drag and drop document here or Browse Supported file types: JPEG, PNG, PDF. Max file size: 2mb
					</p>
				</div>
			</v-card>

			<v-btn @click="submit()" flat style="border: 1px solid #e5e5e5" size="large" variant="outlined">Save and continue</v-btn>
		</div>
	</div>
</template>
<script>
export default {
	name: "documentation",
	data() {
		return {
			typeOfUtilityBills: ["Electricity", "Water", "Gas", "Internet", "Telephone"],
			bnNumber: "345678675",
			taxIdNumber: "465434567",
			selectedUtilityBill: "Electricity",
		};
	},
	methods: {
		submit() {
			this.$emit("submit");
		},
	},
};
</script>
