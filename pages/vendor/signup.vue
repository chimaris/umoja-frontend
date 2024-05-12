<!-- <template>
    <div>
     <authHeader/>
     <div class="d-flex justify-center py-8 px-2">
 
         <v-card class="rounded-lg" width="100%" max-width="562px">
             <h1>Create an account</h1>
             <p class="mt-1">Already have an account? <span  class="pointhere" style="color:#0076FF">Sign In</span></p>
 
             <v-row>
                 <v-col> 
                     
     <v-text-field placeholder="First name" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col> 
                     
     <v-text-field placeholder="Last name" density="comfortable"  >
         </v-text-field></v-col>
         </v-row>                 
                     
     <v-text-field placeholder="Enter company name" density="comfortable"  >
         </v-text-field>
                  
                     
     <v-select placeholder="Select Industry" density="comfortable"  >
         </v-select>
                  
                     
     <v-select placeholder="Select Country" density="comfortable"  >
         </v-select>
                  
                     
     <v-text-field placeholder="Enter email address" density="comfortable"  >
         </v-text-field>
     <v-text-field placeholder="Enter phone number" density="comfortable"  >
         </v-text-field>
     <v-text-field placeholder="Enter Password" density="comfortable"  >
         </v-text-field>
           <v-btn block color="green" flat size="x-large" class="rounded-xl"> Create an account</v-btn>
         </v-card>
     </div>
    </div> 
 </template> -->

<template>
	<div class="authBg">
		<authHeader />
		<div class="d-flex justify-center py-md-12 px-md-2">
			<v-card flat class="pa-4 pa-md-12 rounded-lg" width="100%" max-width="562px">
				<h1 style="font-style: normal; font-weight: 900; font-size: 48px; line-height: 60px; letter-spacing: -0.03em; color: #333333">
					Sign Up as a Vendor
				</h1>
				<p class="font-weight-medium mb-6 mt-1">
					Already have an account? <span style="color: #0076ff; cursor: pointer" @click="$router.push('/vendor/login')">Sign In</span>
				</p>
				<v-row>
					<v-col cols="6">
						<v-btn @click="socialMediaLogin('google')" size="x-large" flat variant="outlined" block>
							<v-avatar rounded="0" size="24" class="mr-2">
								<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686302222/flat-color-icons_google_vhnhqm.png"></v-img> </v-avatar
							><span style="font-size: 12px; font-weight: 500">Sign Up with Google</span>
						</v-btn>
					</v-col>
					<v-col cols="6">
						<v-btn @click="socialMediaLogin('facebook')" size="x-large" flat color="black" block>
							<v-avatar rounded="0" size="24" class="mr-2">
								<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686302222/bi_apple_qka2so.png"></v-img> </v-avatar
							><span style="font-size: 12px; font-weight: 500">Sign Up with Facebook</span>
						</v-btn>
					</v-col>
				</v-row>
				<div class="d-flex py-8 px-5 justify-space-between align-center">
					<v-divider></v-divider>
					<p class="px-2 w-100 text-center" :style="{ fontSize: $vuetify.display.mobile ? '14px' : '16px' }">or sign up with</p>
					<v-divider></v-divider>
				</div>
				<v-form v-model="valid" @submit.prevent="handleSubmit">
					<v-row>
						<v-col>
							<p class="inputLabel">First Name</p>
							<v-text-field n v-model="first_name" :rules="firstNameRules" placeholder="First name" density="comfortable"></v-text-field>
						</v-col>
						<v-col>
							<p class="inputLabel">Last Name</p>
							<v-text-field v-model="last_name" :rules="lastNameRules" placeholder="Last name" density="comfortable"></v-text-field>
						</v-col>
					</v-row>
					<p class="inputLabel">Email Address</p>
					<v-text-field v-model="email" :rules="emailRules" placeholder="Enter email address" density="comfortable"></v-text-field>
					<p class="inputLabel">Password</p>
					<v-text-field
						:append-inner-icon="visible ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
						:type="visible ? 'text' : 'password'"
						placeholder="Enter Password"
						density="comfortable"
						prepend-inner-icon="mdi mdi-lock-outline"
						@click:append-inner="visible = !visible"
						:rules="passwordRules"
						v-model="password"
					></v-text-field>
					<p class="inputLabel">Confirm Password</p>
					<v-text-field
						:append-inner-icon="visible1 ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
						:type="visible1 ? 'text' : 'password'"
						placeholder="Confirm Password"
						density="comfortable"
						prepend-inner-icon="mdi mdi-lock-outline"
						@click:append-inner="visible1 = !visible1"
						:rules="confirmpasswordRules"
						v-model="confirmPassword"
					></v-text-field>
					<v-checkbox v-model="agree" :rules="agreeRule" @click="agree = !agree" color="green">
						<template v-slot:label>
							<div class="font-weight-medium" :style="{ fontSize: $vuetify.display.mobile ? '14px' : '16px' }">
								I agree to Umoja
								<a href="#" style="color: #0076ff; text-decoration: none" @click="openPrivacyPolicy">Privacy Policy</a> and
								<a href="#" style="color: #0076ff; text-decoration: none" @click="openTermsOfUse">Terms of Use</a>
							</div>
						</template>
					</v-checkbox>
					<p v-if="vendorStore.signUpError" style="color: red">{{ vendorStore.signUpError }}</p>
					<v-btn type="submit" :disabled="!valid" block color="green" flat size="x-large" class="rounded-lg mt-6">
						<span class="mr-4" style="text-transform: none">Create an account</span>
						<v-progress-circular v-if="vendorStore.loading" indeterminate :width="2" :size="25"></v-progress-circular>
					</v-btn>
				</v-form>
			</v-card>
		</div>
	</div>
</template>
<script setup>
import { ref, reactive } from "vue";
import {useVendorStore} from '~/stores/vendorStore'
import { useRouter } from "vue-router";
import { emailRules, passwordRules, firstNameRules, lastNameRules } from "~/utils/formrules";

const vendorStore = useVendorStore();
const router = useRouter();
const visible = ref(false);
const visible1 = ref(false);

const email = ref("");
const last_name = ref("");
const first_name = ref("");
const password = ref("");
const confirmPassword = ref("");
const agree = ref(false);
const valid = ref(false)

const agreeRule = [(v) => !!v || "You must agree to the terms and conditions"];

const confirmpasswordRules = [(v) => !!v || "Confirm Password is required", (v) => v === password.value || "Passwords do not match"];

async function socialMediaLogin(provider) {
	try {
		const response = await vendorStore.socialLogin(provider);
		window.location.href = response.data.url;
	} catch (error) {
		console.log(error);
	}
}

async function handleSubmit() {
	if (valid.value) {
		try {
			const isSignedUp = await vendorStore.signupVendor({
				first_name: first_name.value,
				last_name: last_name.value,
				email: email.value,
				password: password.value,
				password_confirmation: confirmPassword.value,
				terms_accepted: 1,
			});
			if (isSignedUp) {
				router.push("/vendor/verification");
				vendorStore.signupError = "";
				first_name.value = "";
				last_name.value = "";
				email.value = "";
				password.value = "";
				password_confirmation.value = "";
				agree.value = false;
			}
		} catch (error) {
			// Handle any unexpected errors
			vendorStore.signupError = error.message;
		}
	}
}
</script>
