<template>
	<!-- Edit Business Section -->
	<v-sheet max-width="550" width="100%" style="margin: 0 auto; background-color: #f8f8f8">
		<div style="background-color: #fff; padding: 40px; margin-bottom: 10px; border-radius: 15px">
			<v-avatar color="#EDF0FC" size="x-large">
				<v-icon icon="mdi mdi-account-plus" color="#1273EB"></v-icon>
			</v-avatar>
			<h1 style="font-weight: 600; font-size: 32px; color: ##333333">Select Subscription Package</h1>
			<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #969696">Complete these simple steps to get your store up and running</p>

			<div class="mt-10 mb-5">
				<v-sheet style="background-color: #edf0ef; border: 1px solid #2c6e63; padding: 24px; border-radius: 15px">
					<div class="d-flex mb-2 justify-space-between">
						<v-chip flat variant="elevated" elevation="0" class="pa-5 px-6" size="large" color="green">
							<span style="font-size: 16.879px !important; font-weight: 500">Basic Plan</span></v-chip
						>
						<v-icon size="30" color="#2C6E63" icon="mdi mdi-check-circle"></v-icon>
					</div>
					<p style="color: #333; font-size: 40px; font-weight: 600">€ Free/Month</p>
					<p style="color: #333; font-size: 16px; font-weight: 400" class="mb-8">Our free plan has...</p>

					<div v-for="n in 4" :key="n" class="mb-4 d-flex align-center">
						<v-icon class="mr-2" icon="mdi mdi-check-circle-outline" color="green"></v-icon>
						<p style="color: #333; font-size: 14px; font-weight: 400">Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</v-sheet>

				<v-sheet class="my-10" style="border: 1px solid #ededed; padding: 24px; border-radius: 15px; opacity: 0.5">
					<div class="d-flex mb-2 justify-space-between">
						<v-chip flat variant="elevated" elevation="0" class="pa-5 px-6" size="large" color="green">
							<span style="font-size: 16.879px !important; font-weight: 500">Medium Plan</span></v-chip
						>
						<v-icon size="30" color="#A0A0A0" icon="mdi mdi-circle-outline"></v-icon>
					</div>
					<p style="color: #2c6e63; font-size: 40px; font-weight: 600">€ 30/Month</p>
					<p style="color: #333; font-size: 16px; font-weight: 400" class="mb-8">Everything in our free plan plus...</p>

					<div v-for="n in 7" :key="n" class="mb-4 d-flex align-center">
						<v-icon class="mr-2" icon="mdi mdi-check-circle-outline" color="green"></v-icon>
						<p style="color: #333; font-size: 14px; font-weight: 400">Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</v-sheet>

				<v-sheet style="border: 1px solid #ededed; padding: 24px; border-radius: 15px; opacity: 0.5">
					<div class="d-flex mb-2 justify-space-between">
						<v-chip flat variant="elevated" elevation="0" class="pa-5 px-6" size="large" color="green">
							<span style="font-size: 16.879px !important; font-weight: 500">Premium Plan</span></v-chip
						>
						<v-icon size="30" color="#A0A0A0" icon="mdi mdi-circle-outline"></v-icon>
					</div>
					<p style="color: #2c6e63; font-size: 40px; font-weight: 600">€ 39/Month</p>
					<p style="color: #333; font-size: 16px; font-weight: 400" class="mb-8">Everything in our free plan plus...</p>

					<div v-for="n in 9" :key="n" class="mb-4 d-flex align-center">
						<v-icon class="mr-2" icon="mdi mdi-check-circle-outline" color="green"></v-icon>
						<p style="color: #333; font-size: 14px; font-weight: 400">Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</v-sheet>
			</div>
		</div>
		<v-btn flat style="background-color: #2c6e63; color: #fff" size="x-large">Join basic plan (Free)</v-btn>
	</v-sheet>

	<!-- View Subscription Section -->
	<v-sheet class="px-6 pt-8" max-width="550" width="100%" style="padding: 40px; margin: auto; border-radius: 15px">
		<h1 style="font-weight: 600; font-size: 32px; color: ##333333">My Plan</h1>
		<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #969696">Change your plan based on your needs</p>
		<v-sheet class="pt-8"> </v-sheet>
		<div class="py-4 d-flex justify-space-between">
			<v-btn size="x-large" style="border: 1px solid #969696" flat>
				<span style="color: #c20052; font-size: 16px; font-weight: 600; line-height: 24px"> Cancel Subscription</span></v-btn
			>

			<v-btn size="x-large" style="border: 1px solid #969696" flat>
				<span style="color: #333; font-size: 16px; font-weight: 600; line-height: 24px"> Finish</span></v-btn
			>
		</div>
	</v-sheet>
</template>
<script>
export default {
	name: "subcription",
	data() {
		return {
			value: "",
		};
	},
	methods: {
		submit() {
			this.$emit("submit");
		},
	},
};
</script>
