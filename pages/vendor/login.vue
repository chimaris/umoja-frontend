<template>
	<beta-test />
	<div class="authBg">
		<authHeader />
		<div class="d-flex justify-center py-12 px-2">
			<v-card flat class="pa-12 rounded-lg" width="100%" max-width="562px">
				<h1
					style="
						font-style: normal;
						font-weight: 900;
						font-size: 48px;
						line-height: 60px;
						letter-spacing: -0.03em;

						/* Carbon/4 */

						color: #333333;
					"
				>
					Welcome Back
				</h1>
				<p class="font-weight-medium mb-6 mt-1">
					Don't have an account?
					<span @click="$router.push('/vendor/signup')" style="cursor: pointer; color: #0076ff">Sign Up</span>
				</p>

				<v-form v-model="valid" @submit.prevent="handleLogin">
					<p class="inputLabel">Email Address</p>

					<v-text-field v-model="email" :rules="emailRules" placeholder="Enter email address" density="comfortable"> </v-text-field>

					<p class="inputLabel">Password</p>
					<v-text-field
						:append-inner-icon="visible ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
						:type="visible ? 'text' : 'password'"
						placeholder="Enter Password"
						density="comfortable"
						@click:append-inner="visible = !visible"
						:rules="passwordRules"
						v-model="password"
					></v-text-field>
					<v-btn to="/vendor/forgot" style="color: #0076ff; text-decoration: none" variant="text" class="px-0 mb-4"> Forgot Password? </v-btn>
					<p style="color: red; font-size: 16px">{{ loginError }}</p>
					<v-btn type="submit" :disabled="!valid" block color="green" flat size="x-large" class="rounded-lg mt-6">
						<span class="mr-4" style="text-transform: none">Login</span>
						<v-progress-circular v-if="vendorStore.loading" indeterminate :width="2" :size="25"></v-progress-circular>
					</v-btn>
				</v-form>
			</v-card>
		</div>
	</div>
	<tutorial />
</template>
<script setup>
import { useVendorStore } from "~/stores/vendorStore";
import { useRouter } from "#vue-router";
import { passwordRules, emailRules } from "~/utils/formrules";

definePageMeta({
	middleware: ["is-vendor-auth"]
});
const email = ref("");
const password = ref("");
const visible = ref(false);
const valid = ref(false);
const vendorStore = useVendorStore();
const router = useRouter();
const loginError = ref("")

async function handleLogin() {
	if (valid.value) {
			const result = await vendorStore.login({ email: email.value, password: password.value });
			if (result.success) {
				email.value = "";
				password.value = "";
				vendorStore.selectedItem = 'Homepage';
				router.push('/vendor/dashboard/Homepage');
				loginError.value = "";
			}else{
				loginError.value = result.message
			}
		} 
	}
</script>
