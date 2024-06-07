<template>
	<div>
		<p style="color: #000; font-size: 20px; font-weight: 600" class="pa-5">Security</p>
		<v-divider></v-divider>
		<v-row>
			<v-col cols="12" lg="8">
				<div class="pa-5 py-8">
					<div class="d-flex align-center justify-space-between">
						<div>
							<p style="font-size: 20px; font-weight: 600">Two-factor Authentication</p>
							<p class="mt-1" style="color: #969696; font-size: 14px; max-width: 425px; font-weight: 400">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque massa tellus ac augue.
							</p>
						</div>

						<div>
							<v-btn color="green" flat size="default" class="ml-4 menubar text-grey-darken-3"> Enable </v-btn>
						</div>
					</div>
					<v-divider class="my-6"></v-divider>
					<div class="d-flex align-center justify-space-between">
						<div>
							<p style="font-size: 14px; font-weight: 600">Authentication app</p>
							<p style="color: #969696; font-size: 14px; max-width: 425px; font-weight: 400">Google auth app</p>
						</div>

						<div>
							<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3"> Setup </v-btn>
						</div>
					</div>
					<v-divider class="my-6"></v-divider>
					<div class="d-flex align-center justify-space-between">
						<div>
							<p style="font-size: 14px; font-weight: 600">Another e-mail</p>
							<p style="color: #969696; font-size: 14px; max-width: 425px; font-weight: 400">E-mail to send verification link</p>
						</div>

						<div>
							<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3"> Setup </v-btn>
						</div>
					</div>
					<v-divider class="my-6"></v-divider>
					<div class="d-flex align-center justify-space-between">
						<div>
							<p style="font-size: 14px; font-weight: 600">SMS Recovery</p>
							<p style="color: #969696; font-size: 14px; max-width: 425px; font-weight: 400">Your phone number or something</p>
						</div>

						<div>
							<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3"> Setup </v-btn>
						</div>
					</div>
				</div>
				<v-divider class="my-6 mt-12"></v-divider>
				<div class="pa-5">
					<v-row>
						<v-col cols="12" lg="7">
							<div class="mb-4">
								<p style="font-size: 20px; font-weight: 600">Password</p>
								<p class="mt-1" style="color: #969696; font-size: 14px; max-width: 425px; font-weight: 400">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque massa tellus ac augue. Lectus arcu at in in rhoncus
									malesuada ipsum turpis.
								</p>
							</div>
							<p class="inputLabel">Current Password</p>
							<v-text-field append-inner-icon="mdi mdi-eye-outline" placeholder="Enter current password" density="comfortable"> </v-text-field>
							<p class="inputLabel">New Password</p>
							<v-text-field append-inner-icon="mdi mdi-eye-outline" placeholder="Enter new password" density="comfortable"> </v-text-field>
							<p class="inputLabel">Confirm Password</p>
							<v-text-field append-inner-icon="mdi mdi-eye-outline" placeholder="Confirm password" density="comfortable"> </v-text-field>
							<v-row>
								<v-col cols="6">
									<v-btn block style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="menubar text-grey-darken-3"> Cancel </v-btn>
								</v-col>
								<v-col cols="6">
									<v-btn block color="green" flat size="large" class="menubar text-grey-darken-3"> Update password </v-btn>
								</v-col>
							</v-row>
						</v-col>
						<v-col cols="12" lg="5">
							<v-sheet width="100%" class="pa-5" style="border-radius: 15px; background: #edf0ef">
								<p style="font-size: 16px; font-weight: 600">Rules for Password</p>
								<p class="my-4" style="font-size: 14px; font-weight: 400">
									To create a new password, you have to meet all of the following requirements:
								</p>
								<div style="font-size: 14px; font-weight: 400">
									<p>• Minimum 8 character</p>
									<p>• At least one special character</p>
									<p>• At least one number</p>
									<p>• Can't be the same as a previous</p>
								</div>
							</v-sheet>
						</v-col>
					</v-row>
				</div>
			</v-col>
			<v-divider style="margin-top: 11px" vertical="" class="" inset></v-divider>
			<v-col cols="12" lg="4">
				<div class="py-5 px-3">
					<v-avatar size="60" class="mb-12"
						><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689951111/frame-7_cgys91.png"></v-img
					></v-avatar>

					<p style="font-size: 20px; font-weight: 600">Devices</p>
					<p class="mt-0" style="color: #969696; font-size: 14px; font-weight: 400">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo.
					</p>
					<v-btn color="green" flat size="large" class="mt-5 mb-8 menubar text-grey-darken-3"> Sign out from all devices </v-btn>
					<!-- <div v-for="(n, i) in [{icon:'cellphone', name: 'iPhone 11'}, {icon:'laptop', name: 'Macbook Pro'},  {icon:'cellphone', name: 'iphone SE'},{icon:'cellphone', name: 'iPhone 11'}  ]" :key="i">
    <v-divider  class=" my-5"></v-divider>
<div class="d-flex justify-space-between">
    <div class="d-flex">
<v-icon color="#1C274C" :icon="'mdi mdi-'+ n.icon" class="mr-2"></v-icon>
<div>
    <p style="color: #333;
font-size: 14px;
font-weight: 600;">{{n.name}}</p>
<p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;">London, UK . Oct 23 at 1:15 AM</p>
</div>
</div>
<v-icon class="ml-3" icon="mdi mdi-dots-vertical"></v-icon>
</div>
</div> -->
					<v-btn block style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="mt-8 menubar text-grey-darken-3"> Need help? </v-btn>
				</div>
			</v-col>
		</v-row>
	</div>
</template>
