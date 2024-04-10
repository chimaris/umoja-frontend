<template>
	<!-- Edit Contact Section -->
	<v-sheet class="pt-8" max-width="550" width="100%" style="padding: 40px; margin: 0 auto; border-radius: 15px; margin-bottom: 20px">
		<div style="background-color: #fff">
			<v-avatar color="#EDF0FC" size="x-large">
				<v-icon icon="mdi mdi-account-plus" color="#1273EB"></v-icon>
			</v-avatar>
			<h1 style="font-weight: 600; font-size: 32px; color: ##333333">Contact</h1>
			<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #969696">Just few mmore steps to go and you are done⚡️</p>

			<div class="pt-8" style="max-width: 502px">
				<div class="mb-4">
					<v-label class="inputLabel">Email Address </v-label>
					<v-text-field v-model="email" placeholder="Enter email address" density="comfortable"> </v-text-field>
				</div>
				<div class="mb-4">
					<v-label class="inputLabel">Phone Number </v-label>
					<v-text-field v-model="phoneNumber" append-inner-icon="mdi mdi-phone-outline" placeholder="NG" density="comfortable"> </v-text-field>
				</div>

				<div class="">
					<v-label class="inputLabel">Twitter Username</v-label>
					<v-text-field v-model="twitter" density="comfortable">
						<template #prepend-inner>twitter.com/ </template>
					</v-text-field>
				</div>
				<div>
					<p v-for="n of socialMedia" :key="n" class="mt-4">
						<v-icon icon="mdi mdi-close-circle-outline" color="#969696" class="mr-4"></v-icon>
						<span style="font-size: 18px; color: #1273eb; font-weight: 500">{{ n }}</span>
					</p>
				</div>
			</div>
		</div>
	</v-sheet>
	<v-sheet max-width="550" width="100%" style="margin: auto; background-color: #f8f8f8">
		<div style="background-color: #fff; padding: 40px; border-radius: 15px; margin-bottom: 20px">
			<div class="d-flex align-center">
				<v-avatar size="x-large" color="#EDF0FC" class="mr-4">
					<v-icon icon="mdi mdi-account-circle" color="#1273EB"></v-icon>
				</v-avatar>
				<h1 style="font-weight: 600; font-size: 32px; color: #333; line-height: 20px; letter-spacing: -3%">Office Address</h1>
			</div>

			<div class="pt-8" style="max-width: 502px">
				<div class="mb-4">
					<p class="inputLabel">Country</p>
					<v-select
						v-model="selectedBusinessCountry"
						:items="countries"
						append-inner-icon="mdi mdi-chevron-down"
						placeholder="Select Country"
						density="comfortable"
					>
					</v-select>
				</div>
				<div class="mb-4">
					<p class="inputLabel">City</p>
					<v-select v-model="selectedCity" append-inner-icon="mdi mdi-chevron-down" placeholder="Select" density="comfortable"> </v-select>
				</div>

				<div class="mb-4">
					<p class="inputLabel">State</p>
					<v-select v-model="selectedState" append-inner-icon="mdi mdi-chevron-down" placeholder="Select State" density="comfortable"> </v-select>
				</div>

				<div class="mb-4">
					<p class="inputLabel">Street Address</p>
					<v-text-field v-model="businessAddress" placeholder="Enter address" density="comfortable"> </v-text-field>
				</div>
				<div class="mb-4">
					<p class="inputLabel">Complex Building (Optional)</p>
					<v-text-field v-model="businessAddress" placeholder="Building name, unit number or floor" density="comfortable"> </v-text-field>
				</div>
			</div>
		</div>
		<v-btn flat style="background-color: #2c6e63; color: #fff" size="x-large">Save and continue</v-btn>
	</v-sheet>

	<!-- View Contact Section -->
	<v-sheet max-width="550" width="100%" style="padding: 40px; margin: 0 auto; border-radius: 15px">
		<v-sheet>
			<div class="mb-5">
				<p class="mb-1 contact-label">Business Email</p>
				<p class="contact-value">Thatdesignpro@gmail.com</p>
			</div>
			<div class="mb-5">
				<p class="mb-1 contact-label">Phone Number</p>
				<p class="contact-value">+234 816 828 6370</p>
			</div>
			<div class="mb-5">
				<p class="mb-1 contact-label">Office Address</p>
				<p class="d-flex flex-column contact-value">
					<span>Flat 7 No 3 Ezekewesili Crescent</span>
					<span>Enugu, Enugu</span>
					<span>Nigeria</span>
				</p>
			</div>
			<div>
				<div class="mb-4">
					<p class="mb-2">
						<v-icon icon="mdi mdi-twitter" color="#969696" class="mr-2"></v-icon>
						<span style="font-size: 16px; color: #969696; font-weight: 500">Twitter</span>
					</p>
					<span style="font-size: 16px; color: #1273eb; font-weight: 400">Thatdesignpro</span>
				</div>
				<div class="mb-4">
					<p class="mb-2">
						<v-icon icon="mdi mdi-twitter" color="#969696" class="mr-2"></v-icon>
						<span style="font-size: 16px; color: #969696; font-weight: 500">Instagram</span>
					</p>
					<span style="font-size: 16px; color: #1273eb; font-weight: 400">Thatdesignpro</span>
				</div>
				<div class="mb-4">
					<p class="mb-2">
						<v-icon icon="mdi mdi-facebook" color="#969696" class="mr-2"></v-icon>
						<span style="font-size: 16px; color: #969696; font-weight: 500">Facebook</span>
					</p>
					<span style="font-size: 16px; color: #1273eb; font-weight: 400">Thatdesignpro</span>
				</div>
				<div class="mb-4">
					<p class="mb-2">
						<v-icon icon="mdi mdi-twitter" color="#969696" class="mr-2"></v-icon>
						<span style="font-size: 16px; color: #969696; font-weight: 500">Youtube</span>
					</p>
					<span style="font-size: 16px; color: #1273eb; font-weight: 400">Thatdesignpro</span>
				</div>
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
	data() {
		return {
			socialMedia: ["Instagram", "Facebook", "Youtube"],
		};
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
