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
					Forgot your password?
				</h1>
				<p class="font-weight-medium mb-12 mt-1">
					Enter the email address associated with your account and we’ll send you a link to reset your password
				</p>

				<p class="inputLabel">Email Address</p>

				<v-text-field v-model="email" :rules="emailRules" placeholder="Enter email address" density="comfortable"> </v-text-field>
				<p color="red">{{ vendorStore.error }}</p>
				<v-row>
					<v-col cols="6">
						<v-btn @click="handleReset"  block color="green" flat size="x-large" class="rounded-lg mr-1 mt-6">
							<span class="mr-4" style="text-transform: none"> Reset password </span>
							<v-progress-circular v-if="vendorStore.loading"
								indeterminate
								:width="2"
								:size="25" 
							></v-progress-circular>
						</v-btn></v-col
					>
					<v-col cols="6">
						<v-btn to="/vendor/login" block variant="outlined" flat size="x-large" class="rounded-lg ml-1 mt-6">
							<span style="text-transform: none"> Go back to login </span>
						</v-btn></v-col
					>
				</v-row>
			</v-card>
		</div>
	</div>
</template>
<script setup>
	import {emailRules} from '~/utils/formrules'
	import {useVendorStore} from '~/stores/vendorStore'
	import { useRouter } from '#vue-router';

	const vendorStore = useVendorStore()
	const email = ref("")
	const router = useRouter()

	async function handleReset() {
		if (email.value) {
			try {
				const linkSent = await vendorStore.forgotPassword(email.value)
				if (linkSent) {
					router.push('/vendor/resetsent')
				}
			} catch (error){
				console.error(error)
			}
		}
	}
</script>
