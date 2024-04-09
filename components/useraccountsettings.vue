<template>
	<div class="px-6 py-10">
		<p style="color: #000; font-size: 24px; font-weight: 600">Account Settings</p>
		<p style="color: var(--carbon-3, #969696); font-family: Faktum; font-size: 14px; font-style: normal; font-weight: 500">
			Here you can manage your profile settongs.
		</p>
	</div>
	<div class="cardStyle mx-6 mb-6">
		<div class="pa-5 py-8">
			<div class="mb-4 d-flex align-center justify-space-between">
				<p style="font-size: 20px; font-weight: 600">Personal Information</p>

				<v-btn
					rounded="xl"
					@click="choose('Import Product')"
					style="border: 1px solid #e5e5e5"
					variant="outlined"
					size="default"
					class="ml-4 menubar text-grey-darken-3"
				>
					<v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
					Edit
				</v-btn>
			</div>
			<div class="mt-4" style="max-width: 559px">
				<v-row class="mb-2">
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Name</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">Franklin O.</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Last Name</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">Benjamin</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Email Address</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">sylvesterfranklin007@gmailcom</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Phone</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">08033685498</p>
					</v-col>
				</v-row>
			</div>
			<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Short Bio</p>
			<p style="max-width: 856px; color: #333; font-size: 14px; font-weight: 500">
				Lorem ipsum dolor sit amet consectetur. Lobortis sagittis porta tincidunt nibh eget lacus. Tristique tellus tempus dolor semper aliquam amet
				ipsum at. Ultricies porttitor scelerisque elementum nullam amet. Mi blandit donec lorem donec condimentum gravida pulvinar. Egestas dictum
				interdum tempor elit felis molestie aliquet ut sapien.
			</p>
		</div>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<div class="mb-4 d-flex align-center justify-space-between">
				<p style="font-size: 20px; font-weight: 600">Address</p>

				<v-btn
					rounded="xl"
					@click="choose('Import Product')"
					style="border: 1px solid #e5e5e5"
					variant="outlined"
					size="default"
					class="ml-4 menubar text-grey-darken-3"
				>
					<v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
					Edit
				</v-btn>
			</div>
			<div class="mt-4" style="max-width: 559px">
				<v-row class="mb-4">
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Country</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">Ghana</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">City/Sate</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">9b Nza street, Ghana</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Postal Code</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">ERT 2354</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Tax ID</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">08033685498</p>
					</v-col>
				</v-row>
			</div>
		</div>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<div class="mb-4 d-flex align-center justify-space-between">
				<p style="font-size: 20px; font-weight: 600">Delete Account</p>
				<div>
					<v-btn rounded="xl" color="red" flat size="default" class="ml-2 menubar text-grey-darken-3">
						<v-icon class="mr-2" icon="mdi mdi-trash-can-outline"></v-icon>
						Delete Account
					</v-btn>
					<v-btn rounded="xl" style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3">
						Learn More
					</v-btn>
				</div>
			</div>
			<div class="mt-4 mb-8" style="max-width: 470px">
				<p style="color: #333; font-size: 14px; font-weight: 500">
					When you delete your account, you lose access to Umojas account services, and we permanently delete your personal data. You can cancel the
					deletion for 14 days.
				</p>
			</div>
		</div>
	</div>
</template>
