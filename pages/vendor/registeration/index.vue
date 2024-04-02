<template>
	<div style="background-color: #f8f8f8; min-height: 100vh">
		<authHeader />

		<div style="min-height: 80vh" class="d-flex align-center justify-center pa-3">
			<div>
				<p style="font-weight: 700; font-size: 48px; line-height: 60px; text-align: center; letter-spacing: -0.03em" class="my-12 text-center">
					Select a sign up category
				</p>
				<v-card
					flat
					@click="$router.push('/user/signup')"
					style="height: 169px; max-width: 859px; width: 616px"
					class="mb-8 py-4 rounded-lg pa-6 d-flex align-center"
				>
					<v-avatar size="80" class="mr-6" variant="tonal" color="green">
						<v-icon size="40" class="" icon="mdi mdi-account"></v-icon>
					</v-avatar>

					<div style="max-width: 54%">
						<p style="font-weight: 700; font-size: 24px; line-height: 30px; color: #333333">Sign Up as a Customer</p>
						<p style="font-weight: 400; font-size: 16px; line-height: 20px; max-width: 317px; color: #333333">
							Lorem ipsum dolor sit amet consectetur. Sit urna neque pellentesque at cras.
						</p>
					</div>
					<v-img class="signupimg" src="https://res.cloudinary.com/payhospi/image/upload/v1686202938/Frame_yg0jej.png"></v-img>
				</v-card>
				<v-card
					style="height: 169px; max-width: 859px; width: 616px"
					flat
					@click="$router.push('/vendor/registeration/form')"
					class="mb-4 rounded-lg pa-6 d-flex align-center"
				>
					<v-avatar size="80" class="mr-6" variant="tonal" color="green">
						<v-icon size="40" class="" icon="mdi mdi-store"></v-icon>
					</v-avatar>
					<div style="max-width: 54%">
						<p style="font-weight: 700; font-size: 24px; line-height: 30px; color: #333333">Sign Up as a Vendor</p>
						<p style="font-weight: 400; font-size: 16px; line-height: 20px; color: #333333; max-width: 317px">
							Lorem ipsum dolor sit amet consectetur. Sit urna neque pellentesque at cras.
						</p>
					</div>
					<v-img class="signupimg" src="https://res.cloudinary.com/payhospi/image/upload/v1686202934/Frame_1_dlp4zd.png"></v-img>
				</v-card>
			</div>
		</div>
	</div>
</template>
