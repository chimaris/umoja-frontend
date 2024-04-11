<template>
	<!-- Edit Business Section -->
	<v-sheet max-width="550" width="100%" style="margin: 0 auto; background-color: #f8f8f8">
		<div style="background-color: #fff; padding: 40px; margin-bottom: 10px; border-radius: 15px">
			<v-avatar color="#EDF0FC" size="x-large">
				<v-icon icon="mdi mdi-account-plus" color="#1273EB"></v-icon>
			</v-avatar>
			<h1 style="font-weight: 600; font-size: 32px; color: ##333333">Your business info</h1>
			<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #969696">Complete these simple steps to get your store up and running</p>

			<div class="mt-10 mb-5">
				<div class="mb-8">
					<p style="font-size: 16px; color: #969696" class="mb-2">
						<span style="font-weight: 500; color: #333">Upload business profile picture</span> (Business logo preferably)
					</p>
					<v-row style="align-items: center; display: flex">
						<v-col cols="2">
							<v-avatar color="#EDF0EF" class="mr-4" size="x-large">
								<v-icon color="#9EA5AD" icon="mdi mdi-file-upload-outline"></v-icon>
							</v-avatar>
						</v-col>
						<v-col cols="10">
							<p
								style="font-weight: 500; font-size: 12px; color: #969696; border: 1px dotted #cecece; border-radius: 6px; padding: 15px; width: 100%"
							>
								<span style="color: #1273eb; font-weight: 600">Click to upload</span> or drag and drop <br />
								SVG, PNF, JPG, or GIF (max 800X400px)
							</p>
						</v-col>
					</v-row>
				</div>

				<div class="textarea-wrapper">
					<p class="mb-4">Business Bio</p>
					<v-textarea v-model="value" :rules="rules" rows="6" placeholder="Write a short bio about your business here..."></v-textarea>
					<div class="char-count">{{ charCount }}/{{ maxCount }}</div>
				</div>
			</div>
		</div>
		<v-btn flat style="background-color: #2c6e63; color: #fff" size="large">Save and continue</v-btn>
	</v-sheet>

	<!-- View Business Section -->
	<v-sheet class="px-6 pt-8" max-width="550" width="100%" style="padding: 40px; margin: auto; border-radius: 15px">
		<v-avatar class="mx-auto" style="border: 2.93049px solid #fce7ce" size="100">
			<v-img class="bg-grey-lighten-3 rounded-xl" src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684497818/Frame_481586_zfgoph.png"></v-img>
		</v-avatar>

		<v-sheet class="pt-8">
			<h3 style="font-weight: 700; font-size: 24px; line-height: 30px; color: #333333">BIO <span class="text-grey">(Fabric)</span></h3>

			<p class="text-left mt-2 mb-8" style="font-weight: 400; font-size: 14px; line-height: 19.6px; color: #333333">
				Lorem ipsum dolor sit amet consectetur. Morbi massa facilisis sed vulputate diam pellentesque morbi. Fermentum id diam felis lectus sem
				aliquam sem nec tincidunt. Integer auctor euismod praesent nam.
				<br />
				<br />
				Et ut nunc nisi non mollis aenean habitasse nam. Fermentum arcu pharetra et neque leo sed turpis suspendisse consectetur. In tellus tortor
				semper elementum. Sit eu fermentum mi amet.
			</p>
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
	name: "business",
	data() {
		return {
			rules: [(v) => v.length <= 25 || "Max 25 characters"],
			value: "",
		};
	},
	computed: {
		charCount() {
			return this.value.length;
		},
		maxCount() {
			return 250; // You can change this value to match your maximum count
		},
	},
	methods: {
		submit() {
			this.$emit("submit");
		},
	},
};
</script>

<style scoped>
.textarea-wrapper {
	position: relative;
}

.char-count {
	position: absolute;
	bottom: 0px;
	right: 5px;
	font-size: 14px;
	font-weight: 500;
	color: #333333;
}
</style>
