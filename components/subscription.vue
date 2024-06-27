<template>
	<!-- Edit subscription Section -->
	<v-sheet v-if="editSubscriptionInfo" max-width="550" width="100%" style="margin: 0 auto; background-color: #f8f8f8">
		<div style="background-color: #fff; padding: 40px; margin-bottom: 10px; border-radius: 15px">
			<v-avatar color="#EDF0FC" size="x-large">
				<v-icon icon="mdi mdi-account-plus" color="#1273EB"></v-icon>
			</v-avatar>
			<h1 style="font-weight: 600; font-size: 32px; color: #333333">Select Subscription Package</h1>
			<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #969696">Complete these simple steps to get your store up and running</p>

			<div class="mt-10 mb-5">
				<v-sheet style="background-color: #edf0ef; border: 1px solid #2c6e63; padding: 24px; border-radius: 15px">
					<div class="d-flex mb-2 justify-space-between">
						<v-chip flat variant="elevated" elevation="0" class="pa-5 px-6" size="large" color="green">
							<span style="font-size: 16.879px !important; font-weight: 500">Free Plan</span></v-chip
						>
						<v-icon size="30" color="#2C6E63" icon="mdi mdi-check-circle"></v-icon>
					</div>
					<p style="color: #333; font-size: 40px; font-weight: 600">€ Free/Month</p>
					<p style="color: #333; font-size: 16px; font-weight: 400" class="mb-8">Our free plan has...</p>

					<div v-for="n in seeBasic ? freeFeatures : freeFeatures.slice(0,4)" :key="n" class="mb-4 d-flex align-center">
						<v-icon class="mr-2" icon="mdi mdi-check-circle-outline" color="green"></v-icon>
						<p style="color: #333; font-size: 14px; font-weight: 400">{{n}}</p>
					</div>
					<p @click="seeBasic = !seeBasic" style="color: #2C6E63; font-weight: 500; font-size: 14px; cursor: pointer; margin-bottom: 15px">{{ seeBasic ? 'See Less' : 'See More Features' }}</p>
				</v-sheet>

				<v-sheet class="my-10" style="border: 1px solid #ededed; padding: 24px; border-radius: 15px; opacity: 0.5">
					<div class="d-flex mb-2 justify-space-between">
						<v-chip flat variant="elevated" elevation="0" class="pa-5 px-6" size="large" color="green">
							<span style="font-size: 16.879px !important; font-weight: 500">Business Plan</span></v-chip
						>
						<v-icon size="30" color="#A0A0A0" icon="mdi mdi-circle-outline"></v-icon>
					</div>
					<p style="color: #2c6e63; font-size: 40px; font-weight: 600">€ 49.99/Month</p>
					<p style="color: #333; font-size: 16px; font-weight: 400" class="mb-8">Everything  our business plan has...</p>

					<div v-for="n in seeBusiness ? businessPackage : businessPackage.slice(0, 4)" :key="n" class="mb-4 d-flex align-center">
						<v-icon class="mr-2" icon="mdi mdi-check-circle-outline" color="green"></v-icon>
						<p style="color: #333; font-size: 14px; font-weight: 400">{{n}}</p>
					</div>
					<p @click="seeBusiness = !seeBusiness" style="color: #2C6E63; font-weight: 500; font-size: 14px; cursor: pointer; margin-bottom: 15px">{{ seeBusiness ? 'See Less' : 'See More Features' }}</p>
				</v-sheet>

				<v-sheet style="border: 1px solid #ededed; padding: 24px; border-radius: 15px; opacity: 0.5">
					<div class="d-flex mb-2 justify-space-between">
						<v-chip flat variant="elevated" elevation="0" class="pa-5 px-6" size="large" color="green">
							<span style="font-size: 16.879px !important; font-weight: 500">Premium Plan</span></v-chip
						>
						<v-icon size="30" color="#A0A0A0" icon="mdi mdi-circle-outline"></v-icon>
					</div>
					<p style="color: #2c6e63; font-size: 40px; font-weight: 600">€ Custom/Month</p>
					<p style="color: #333; font-size: 16px; font-weight: 400" class="mb-8">Everything our premium plan has...</p>

					<div v-for="n in seePremium ? premiumPackage : premiumPackage.slice(0, 4)" :key="n" class="mb-4 d-flex align-center">
						<v-icon class="mr-2" icon="mdi mdi-check-circle-outline" color="green"></v-icon>
						<p style="color: #333; font-size: 14px; font-weight: 400">{{ n }}</p>
					</div>
					<p @click="seePremium = !seePremium" style="color: #2C6E63; font-weight: 500; font-size: 14px; cursor: pointer; margin-bottom: 15px">{{ seePremium ? 'See Less' : 'See More Features' }}</p>
				</v-sheet>
			</div>
		</div>
		<stripe-checkout
		ref="checkoutRef"
		mode = "subscription"
		:pk="publishableKey"
		:lineItems = "lineItems"
    />
		<v-btn @click="submit" flat style="background-color: #2c6e63; color: #fff" size="x-large">Join basic plan (Free)</v-btn>
	</v-sheet>

	<!-- View Subscription Section -->
	<v-sheet v-if="subscriptionInfo" class="px-6 pt-8" max-width="550" width="100%" style="padding: 40px; margin: auto; border-radius: 15px">
		<div>
			<h1 style="font-weight: 600; font-size: 32px; color: #333333">My Plan</h1>
			<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #969696">Change your plan based on your needs</p>
			<v-sheet>
				<div style="padding: 32px 24px; margin-bottom: 20px; border: 1px solid #cecece; border-radius: 10px">
					<span>Basic Plan</span>
					<v-chip class="ma-2" color="cyan" label> Billed Monthly </v-chip>
					<p>€ 0.00 EUR (Next billing date: 9th March, 2024)</p>
				</div>
				<v-btn flat style="background-color: #2c6e63; color: #fff" size="x-large">Explore Plans</v-btn>
			</v-sheet>
		</div>
		<div class="my-10">
			<h1 style="font-weight: 600; font-size: 32px; color: #333333">Payment Method</h1>
			<p style="font-weight: 500; font-size: 16px; line-height: 24px; color: #969696">Change how you pay your plan</p>
			<v-sheet class="pt-8">
				<div style="padding: 32px 24px; border: 1px solid #cecece; border-radius: 10px">
					<div class="d-flex justify-space-between">
						<p>Nweke Franklin O.</p>
						<v-btn size="small" class="smallText" variant="text"><v-icon class="ml-2" size="24" icon="mdi mdi-dots-horizontal"></v-icon></v-btn>
					</div>

					<div class="align-center d-flex">
						<p style="color: #1e1e1e; font-size: 16px; font-weight: 600" class="  ">**** 9373</p>

						<div class="mx-4" style="border-radius: 4.536px; border: 0.588px solid var(--carbon-1, #ededed)">
							<v-img width="54" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893048/umoja-backup2/logo2_jpei5o_b1rtj8.png"></v-img>
						</div>
						<p style="color: var(--carbon-4, #333); font-size: 14px; font-weight: 500">Expiry 10/2024</p>
					</div>
				</div>

				<p style="color: #969696; font-size: 16px; font-weight: 500">
					Notes: Please be careful on choosing your payment method, because we will automatically cut your balance.
				</p>
			</v-sheet>
		</div>

		<div class="py-4 d-flex justify-space-between">
			<v-btn size="x-large" style="border: 1px solid #969696" flat @click="cancelSubscription()">
				<span style="color: #c20052; font-size: 16px; font-weight: 600; line-height: 24px"> Cancel Subscription</span></v-btn
			>

			<v-btn size="x-large" style="border: 1px solid #969696" flat @click="dialog = true">
				<span style="color: #333; font-size: 16px; font-weight: 600; line-height: 24px"> Finish</span></v-btn
			>
		</div>
	</v-sheet>

	<!-- Modal on successful registration -->
	<v-dialog v-model="dialog" max-width="600px">
		<v-card class="d-flex flex-column text-center pa-10" style="width: 550px; justify-content: center; align-items: center; border-radius: 15px">
			<v-avatar color="#FEF6ED" size="x-large" class="mb-5"> 🎉</v-avatar>
			<h3 style="font-size: 32px; font-weight: 600; line-height: 40px; color: #2a2a2a">Your profile setup has been successfully completed</h3>
			<p class="my-4" style="font-size: 16px; font-weight: 500; line-height: 22px; color: #333; width: 340px">
				You are almost done, welldone 👏🏽👏🏽🎉
			</p>
			<p style="font-size: 16px; font-weight: 500; text-align: center; max-width: 400px;">Now unto the next step to complete your business settings 👇🏽👇🏽👇🏽</p>
			<v-card-actions class="d-flex justify-center align-center pt-10 w-100">
				<!-- <v-btn @click="toDashboard" size="large" style="border: 1px solid #969696" flat>
					<span style="color: #333; font-size: 16px; font-weight: 600; line-height: 20px; padding: 10px"> Go back to dashboard</span></v-btn
				> -->
				<v-btn @click="toDashboard" flat style="background-color: #2c6e63; color: #edf0ef; font-size: 16px; font-weight: 600; padding: 10px 25px" size="large"
					>Continue</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script setup>
	import {ref, defineEmits} from 'vue'
	import { StripeCheckout } from '@vue-stripe/vue-stripe';
	import {vendorUseApi} from '~/composables/vendorApi'
	import {useRouter} from 'vue-router'
	import { useVendorStore } from '~/stores/vendorStore';

	const value = ref("")
	const checkoutRef = ref(null)
	const dialog = ref(false)
	const config = useRuntimeConfig();
	const publishableKey = config.public.stripePK
	const subscriptionInfo = ref(false)
	const editSubscriptionInfo = ref(true)
	const emit = defineEmits(['submit']);
	const router = useRouter()
	const vendorStore = useVendorStore()
	const seeBasic = ref(false)
	const seeBusiness = ref(false)
	const seePremium = ref(false)
	const freeFeatures = [
        "Price: Free",
        "Basic Features",
        "Limited Support",
        "1 account",
		"Basic storefront on the Umoja platform to showcase products.",
		"Access to essential inventory management & Order processing tools.",
		"Advanced analytics and reporting for deeper insights into sales performance.",
		"Standard customer support via email.",
		"Sales Commission: 10% of each sale made through the platform.",
		"Ideal for: Businesses and start-ups looking to test the platform and get started with minimal upfront costs."
	]
	const businessPackage = [
        "Price: €49.99",
        "Verified business",
        "Umoja business application",
        "Customer support",
		"Verified business profile",
		"Expanded storefront on the Umoja platform to showcase more products",
		"Enhanced inventory management tools with additional features",
		"Full order processing and fulfillment capabilities",
		"Access to basic analytics and reporting",
		"Standard customer support via email",
		"Sales Commission: 8% of each sale made through the platform",
		"Listing Fee: $0.15 per product listing",
		"Ideal for: Small businesses and startups ready to expand their online presence and manage their operations more efficiently."
	]
	const premiumPackage = [
        "Price: *Customised*",
        "Umoja business application",
        "Customer support & partnership",
        "Unlimited accounts",
		"All features included in the Basic Plan",
		"Enhanced marketing and promotional tools, including featured listings and discounts",
		"Advanced analytics and reporting for deeper insights into sales performance",
		"Priority customer support with faster response times and dedicated account management",
		"Sales Commission: 6% of each sale made through the platform",
		"Listing Fee: $0.10 per product listing",
		"Ideal for: Growing businesses seeking to increase their sales, drive customer engagement, and optimize their operations with additional support and features"
	]
	const lineItems = [
		{
			price: 'price_1PFHkMP7XylLhhgiIodwtUZX',
			quantity: 1
		}
	]
	function cancelSubscription() {
		this.subscriptionInfo = false;
		this.editSubscriptionInfo = true;
	}
    function toDashboard(){
		router.push('/vendor/dashboard/Settings/Shipping and Delivery')
		dialog.value = false
		// vendorStore.showNotif = true
	}
	async function submit(){
		const api = vendorUseApi()
		try{
			const response =  await api({
				url: 'vendor/subscribe/',
				method: 'POST'
			});
			await vendorStore.getUser(vendorStore.vendor.id)
			vendorStore.vendor.complete_setup = 1
			dialog.value = true
		}catch(error){
			console.error(error)
		}
		// emit('submit')
	}
</script>

