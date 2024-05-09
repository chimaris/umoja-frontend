<template>
	<div style="background-color: #f8f8f8; min-height: 100vh">
		<authHeader />

		<div style="min-height: 80vh" class="d-flex align-center justify-center pa-3">
			<div>
				<p
					:style="{ fontSize: $vuetify.display.mobile ? '24px' : '48px' }"
					style="font-weight: 700; line-height: 60px; text-align: center; letter-spacing: -0.03em"
					class="my-12 text-center"
				>
					Select a sign up category
				</p>
				<v-card
					flat
					@click="$router.push('/user/signup')"
					:style="{ width: $vuetify.display.mobile ? '100%' : '859px', height: $vuetify.display.mobile ? 'auto' : '169px' }"
					class="mb-8 py-4 rounded-lg pa-6 d-flex align-center"
				>
					<div class="d-flex align-center" style="margin-right: 100px">
						<v-avatar :size="$vuetify.display.mobile ? 40 : 80" class="mr-6" variant="tonal" color="green">
							<v-icon :size="$vuetify.display.mobile ? 20 : 40" class="" icon="mdi mdi-account"></v-icon>
						</v-avatar>

						<div>
							<p :style="{ fontSize: $vuetify.display.mobile ? '14px' : '24px' }" style="font-weight: 700; line-height: 30px; color: #333333">
								Sign Up as a Customer
							</p>
							<p :style="{ fontSize: $vuetify.display.mobile ? '8px' : '16px' }" style="font-weight: 400; max-width: 317px; color: #333333">
								Lorem ipsum dolor sit amet consectetur. Sit urna neque pellentesque at cras.
							</p>
						</div>
					</div>

					<v-img class="signupimg" src="https://res.cloudinary.com/payhospi/image/upload/v1686202938/Frame_yg0jej.png"></v-img>
				</v-card>
				<v-card
					:style="{ width: $vuetify.display.mobile ? '100%' : '859px', height: $vuetify.display.mobile ? 'auto' : '169px' }"
					flat
					@click="$router.push('/vendor/signup')"
					class="mb-4 rounded-lg pa-6 d-flex align-center"
				>
					<div class="d-flex align-center" style="margin-right: 100px">
						<v-avatar :size="$vuetify.display.mobile ? 40 : 80" class="mr-6" variant="tonal" color="green">
							<v-icon :size="$vuetify.display.mobile ? 20 : 40" class="" icon="mdi mdi-store"></v-icon>
						</v-avatar>
						<div>
							<p :style="{ fontSize: $vuetify.display.mobile ? '14px' : '24px' }" style="font-weight: 700; line-height: 30px; color: #333333">
								Sign Up as a Vendor
							</p>
							<p :style="{ fontSize: $vuetify.display.mobile ? '8px' : '16px' }" style="font-weight: 400; color: #333333; max-width: 317px">
								Lorem ipsum dolor sit amet consectetur. Sit urna neque pellentesque at cras.
							</p>
						</div>
					</div>

					<v-img class="signupimg" src="https://res.cloudinary.com/payhospi/image/upload/v1686202934/Frame_1_dlp4zd.png"></v-img>
				</v-card>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		cols() {
			const { lg, sm, md } = this.$vuetify.display;
			return lg
				? [4, 6, 6, 6, 4, 8, 4, 3, 10, 2]
				: md
				? [4, 6, 6, 12, 6, 8, 4, 3, 10, 2]
				: sm
				? [6, 12, 12, 12, 12, 12, 12, 12, 12]
				: [6, 12, 12, 12, 12, 12, 12, 12, 12];
		},
	},
};
</script>
