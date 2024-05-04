<template>
	<Header2 />
	<div>
		<v-container style="max-width: 1400px; width: 100%">
			<v-breadcrumbs class="breadcrumbstick pl-0" v-model="item" active-class="text--green" :items="items">
				<template v-slot:divider>
					<v-icon color="#969696" icon="mdi mdi-chevron-right"></v-icon>
				</template>
				<template v-slot:title="{ item }">
					<span
						v-if="item.highlight"
						style="color: #2c6e63; font-size: 14px; font-weight: 600; line-height: 20px; /* 142.857% */ letter-spacing: -0.14px"
					>
						{{ item.title }}
					</span>
					<span
						v-else
						style="
							color: #969696;
							font-size: 14px;
							font-weight: 500;
							opacity: 1 !important;
							line-height: 20px; /* 142.857% */
							letter-spacing: -0.14px;
						"
					>
						{{ item.title }}
					</span>
				</template>
			</v-breadcrumbs>
			<v-divider class="mb-4"></v-divider>
			<v-row class="pt-2">
				<v-col cols="12" lg="8">
					<v-card flat class="cardStyle bg-white rounded-lg py-6 pa-4">
						<p class="chkt mb-8">Select Payment Method</p>

						<v-card flat class="mb-4 cardStyle">
							<div class="align-center justify-space-between d-flex">
								<div class="d-flex align-center">
									<v-icon color="green" icon="mdi mdi-circle-slice-8" size="30"></v-icon>
									<div class="text-capitalize px-4">
										<p style="font-weight: 500; font-size: 14px; line-height: 24px; color: #333333" class="">Credit Card</p>
									</div>
								</div>
								<div class="d-flex align-center justify-end">
									<v-img v-if="visa" contain src="https://res.cloudinary.com/payhospi/image/upload/v1691581811/logo_shmb54.png" width="53" height="auto"></v-img>
									<v-img v-if="master" contain src="https://res.cloudinary.com/payhospi/image/upload/v1691581811/logo2_jpei5o.png" width="53" height="auto"></v-img>
									<v-img v-if="verve" contain src="https://res.cloudinary.com/payhospi/image/upload/v1714813559/umoja/234-2342510_aerocontractors-the-reliable-way-to-fly-verve-card_i7s2un.jpg" width="53" height="auto"></v-img>
								</div>
							</div>

							<v-divider class="my-4"></v-divider>

							<v-text-field  v-model="cardNumber" @input="detectCardType" placeholder="Card number" density="comfortable"> </v-text-field>
							<p v-if="cardError" style="color: red; font-size: 14px; margin-top: -20px; margin-bottom: 10px;">{{cardError}}</p>
							<v-text-field v-model="cardName" placeholder="Name on card" density="comfortable"> </v-text-field>
							<p v-if="nameError" style="color: red; font-size: 14px; margin-top: -15px; margin-bottom: 10px;">{{ nameError }}</p>
							<v-row class="mb-1">
								<v-col class="pb-0" cols="12" md="6">
									<v-text-field v-model="expiryDate" placeholder="Expiration date (MM/YY)" density="comfortable"> </v-text-field
								>
								<p v-if="expiryError" style="color: red; font-size: 14px; margin-top: -15px;margin-bottom: 10px;">{{ expiryError }}</p>
							</v-col>
								<v-col class="pb-0" cols="12" md="6">
									 <v-text-field v-model="cvv" placeholder="CVV" density="comfortable"> </v-text-field>
									 <p style="color: red; font-size: 14px; margin-top: -15px;margin-bottom: 10px;">{{ cvvError }}</p>
								</v-col>
							</v-row>
							<v-btn @click="handleSaveCard" class="textClass px-8" rounded="xl" color="green" flat>Add Payment Method</v-btn>
						</v-card>
						<v-card
							flat
							:color="n.cost == '0.00' ? '#EDF3F0' : ''"
							class="pa-4 cardStyle rounded-lg justify-space-between align-center my-4 d-flex"
							v-for="n in paymenthods"
							:key="n"
						>
							<div class="align-center d-flex">
								<v-icon
									size="20"
									:color="n.cost == '0.00' ? '#2C6E63' : ''"
									:icon="n.cost == '0.00' ? 'mdi mdi-radiobox-marked' : 'mdi mdi-circle-outline'"
								></v-icon>
								<div class="text-capitalize px-4">
									<p style="font-weight: 500; font-size: 14px; line-height: 24px; color: #333333" class="">{{ n.name }}</p>
								</div>
							</div>
							<v-spacer></v-spacer>
							<v-avatar style="width: 100px; max-height: 20px" rounded="0" size="40">
								<v-img :src="n.image"></v-img>
							</v-avatar>
						</v-card>
					</v-card>

					 <v-card flat class="cardStyle bg-white rounded-lg my-4 pa-4">
						<p class="chkt mb-">Billing Address</p>
						<v-checkbox v-model="useShippingAddress" @click="useShippingAddress = !useShippingAddress" hide-details="" class="my-4" color="green">
							<template v-slot:label>
								<div style="font-size: 14px" class="font-weight-medium">Same as my shipping address</div>
							</template>
						</v-checkbox>
						<p class="inputLabel">Phone Number*</p>

						<v-text-field :rules="phoneRules" v-model="phoneNo" placeholder="Enter your phone number" density="comfortable"> </v-text-field>
						<p class="inputLabel">Street Name and House Number*</p>

						<v-text-field v-model="streetName" :rules="inputRules" placeholder="Enter your street address" density="comfortable"> </v-text-field>
						<v-row class="">
							<v-col cols="12" md="6">
								<p class="inputLabel">Country</p>
								<v-select 
									:items="allCountries"
									:rules="inputRules"
									 append-inner-icon="mdi mdi-chevron-down"
									  placeholder="Select country"
									  v-model="billingCountry"
									   density="comfortable"> 
									</v-select>
							</v-col>
							<v-col cols="12" md="6">
								<p class="inputLabel">State</p>
								<v-select 
									@input="fetchStates(billingCountry.value)"
									:loading="loadingStates"
									color="green"
									:items="states"
									:rules="inputRules"
									hint="**Make sure you select your country first**" 
									append-inner-icon="mdi mdi-chevron-down" 
									placeholder="Enter your state" 
									v-model="billingState"
									density="comfortable"> 
								</v-select>
							</v-col>
						</v-row>
						<v-row class="">
							<v-col cols="12" md="6">
								<p class="inputLabel">City</p>
								<v-select 
									@input="fetchCities(billingCountry.value, billingState.value)"
									append-inner-icon="mdi mdi-chevron-down" 
									placeholder="Select City" 
									v-model="billingCity"
									:items="cities"
									:loading="loadingCities"
									hint="**Make sure you select your state first**"
									:rules="inputRules"
									density="comfortable"> 
								</v-select>
							</v-col>
							<v-col cols="12" md="6">
								<p class="inputLabel">Zipcode</p>
								<v-text-field :rules="numRules" v-model="zipcode" placeholder="Enter your zipcode" density="comfortable"> </v-text-field>
							</v-col>
						</v-row>
						<p style="color: red; font-size: 16px; margin-bottom: 6px;">{{cartStore.billingError}}</p>
						<v-btn v-if="added" class="textClass px-8" rounded="xl" :disabled="useShippingAddress" @click="updateAddress()" color="green" flat>Edit Billing Address</v-btn>
						<v-btn v-else class="textClass px-8" rounded="xl" :disabled="useShippingAddress" @click="addBillingAddress()" color="green" flat>Add Billing Address</v-btn>
					</v-card>
					<v-card flat class="cardStyle bg-white rounded-lg pa-4">
						<p class="chkt mb-">Remember my information</p>
						<v-checkbox hide-details="" color="green">
							<template v-slot:label>
								<div style="font-size: 14px" class="font-weight-medium">Save my information for future checkout</div>
							</template>
						</v-checkbox>
					</v-card>
				</v-col>
				<Cartsummary :route="'/order/summary'" :text="'Proceed'" @handleSubmit="handlePayment()"/>
			</v-row>
		</v-container>
	</div>
	<Mainfooter />
</template>
<script>
import { numRules, phoneRules, inputRules } from '~/utils/formrules';
import {watchEffect, ref} from 'vue';
import { allCountries, fetchStates, fetchCities, states, cities, loadingStates, loadingCities } from '~/utils/countryapi';
import { useCartStore } from '~/stores/cartStore';
export default {
	setup(){
		definePageMeta({
        middleware: ["auth"]
    	});

		const billingCountry = ref("");
		const billingState = ref("");
		const billingCity = ref("");
		const cartStore = useCartStore()

		watchEffect(() => {
	    fetchStates(billingCountry.value)
    	});

		watchEffect(() => {
	    fetchCities(billingCountry.value, billingState.value);
    });

	return{
		billingCountry,
		billingCity,
		billingState,
		cartStore
	}
	},
	data() {
		return {
			added: false,
			billingId: "",
			phoneNo: "",
			streetName: "",
			zipcode: "",
			useShippingAddress: false,
			cvv: "",
			expiryDate: "",
			visa: null,
			master: null,
			verve: null,
			cardNumber: "",
			cardName: "",
			cardError: "",
			nameError: "",
			expiryError: "",
			cvvError: "",
			placescards: false,
			mods: 1,
			tab: null,
			chip: "POPULAR products",
			shippingTypes: [
				{
					title: "Free Shipping",
					duration: "7-30 Business Days",
					cost: "0.00",
				},
				{
					title: "Regular Shipping",
					duration: "3-14 Business Days",
					cost: "7.50",
				},
				{
					title: "Express Shipping",
					duration: "1-3 Business Days",
					cost: "22.50",
				},
			],
			items: [
				{
					title: "Cart",
					disabled: false,
					href: "/order/cart",
				},
				{
					title: "Checkout",
					disabled: false,
					href: "/order/checkout",
				},
				{
					title: "Payment",
					disabled: false,
					highlight: true,
				},
			],
			paymenthods: [
				{
					name: "Paypal",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1691582666/pay-pal-1_dtxv1k.png",
				},
				{
					name: "Neteller",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1691582681/neteller-1_mjjfeu.png",
				},
			],
		};
	},
	computed: {
		orderSummary() {
			return [
				{
					name: "Items (3):",
					value: "$1384.32",
				},
				{
					name: "Shipping & handling:",
					value: "$0.00",
				},
				{
					name: "Before tax:",
					value: "$100.00",
				},
				{
					name: "Tax collected",
					value: "$45.32",
				},
			];
		},
		buttons() {
			return [
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684591614/umoja/Vector_mgadhr.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/facebook_tup8rq.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/instagram_wogd5x.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/globe-americas_annyvh.png",
				},
			];
		},
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
	methods: {
		async updateAddress(){
			if (
				this.billingCountry && 
				this.billingState && 
				this.billingCity && this.phoneNo && this.streetName && this.zipcode) {
				const data = {
					billing_phone_number: this.phoneNo,
					billing_address: this.streetName,
					billing_city: this.billingCity,
					billing_region: this.billingState,
					billing_postal_code: this.zipcode,
					billing_country: this.billingCountry
				}
				await this.cartStore.editBillingAddress(data, this.billingId)
		}},
		async addBillingAddress() {
			if (
				this.billingCountry && 
				this.billingState && 
				this.billingCity && this.phoneNo && this.streetName && this.zipcode) {
				const data = {
					billing_phone_number: this.phoneNo,
					billing_address: this.streetName,
					billing_city: this.billingCity,
					billing_region: this.billingState,
					billing_postal_code: this.zipcode,
					billing_country: this.billingCountry
				}
				const response = await this.cartStore.createBillingAddress(data)
				if (response) {
					this.added = true;
					this.billingId = response.data.data.id;
				}
			}
		},
		isCvv(){
			this.cvvError="";
			const cvvRegex = /^[0-9]{3,4}$/;
			if (!this.cvv) {
				this.cvvError = "Field is required"
				return false
			}
			if (!cvvRegex.test(this.cvv)) {
				this.cvvError = "Enter a valid cvv number"
				return false
			}
			return this.cvv && cvvRegex.test(this.cvv)
		},
		isExpiryDate(){
			const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
			this.expiryError = ""
			if (!this.expiryDate) {
				this.expiryError = 'Expiration date is required';
				return false
			}
			if (!expiryRegex.test(this.expiryDate)) {
				this.expiryError = 'Expiration date must be in MM/YY format';
				return false
			}
			return this.expiryDate && expiryRegex.test(this.expiryDate)
		},
		isCardName() {
			const nameRegex = /^((?:[A-Za-z]+ ?){1,5})$/;
			this.nameError = "";
			if (!this.cardName) {
				this.nameError = "Card Name is Required!!";
				return false
			}
			if (!nameRegex.test(this.cardName)) {
				this.nameError = "Enter a valid card name";
				return false
			}
			return this.cardName && nameRegex.test(this.cardName)
		},
		isCardNumberValid(cardNumber) {
			const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, '');

			// Check if the card number is valid using the Luhn algorithm
			if (/[^0-9-\s]/.test(cardNumberWithoutSpaces)) return false;

			let nCheck = 0,
				bEven = false;
			const nDigits = cardNumberWithoutSpaces.length;

			for (let n = nDigits - 1; n >= 0; n--) {
				const cDigit = cardNumberWithoutSpaces.charAt(n);
				let nDigit = parseInt(cDigit, 10);

				if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

				nCheck += nDigit;
				bEven = !bEven;
			}

			return nCheck % 10 === 0;
		},
		isCardNumber() {
			this.cardError = ""
			if (!this.cardNumber) {
				this.cardError = "Card number is required!!"
				return false
			}
			const isValid = this.isCardNumberValid(this.cardNumber);
			if (!isValid) {
				this.cardError = "Enter a valid card number"
			}
			return isValid;
		},
		isFormValid() {
			const isValid = this.isCardNumber() && this.isCardName() && this.isExpiryDate() && this.isCvv();
			if (isValid) {
				// Clear all error messages
				this.cardError = this.cvvError = this.expiryError = this.nameError = "";
			}
			return isValid;
		},
		handleSaveCard(){
			if (this.isFormValid()) {
				console.log("a")
			}
		},
		detectCardType() {
			let value = this.cardNumber.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
 
      		this.cardNumber = value;
			const cardNumberWithoutSpaces = this.cardNumber.replace(/\s/g, '');

			const visaRegex = /^4[0-9]{12}(?:[0-9]{3,4})?$/;
			const mastercardRegex = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
			const verveRegex = /^(?:50[067][180]|6500)(?:[0-9]{15})$/; // Verve cards start with 506
			const mastercard_local = /^(?:5[13]99|55[35][19]|514[36])(?:11|4[10]|23|83|88)(?:[0-9]{10})$/;
			const visa_local = /^4[19658][7684][0785][04278][128579](?:[0-9]{10})$/

			this.visa = visaRegex.test(cardNumberWithoutSpaces) || visa_local.test(cardNumberWithoutSpaces);
			this.master = mastercardRegex.test(cardNumberWithoutSpaces) || mastercard_local.test(cardNumberWithoutSpaces);
			this.verve = verveRegex.test(cardNumberWithoutSpaces);

			// Reset card types if the number is too short to determine
			if (cardNumberWithoutSpaces.length < 4) {
				this.visa = this.master = this.verve = false;
			}
	},
		handlePayment() {
			this.$router.push("/order/summary");
		},
		filt(text) {
			var newText = text.length > 50 ? text.slice(0, 50) + "..." : text;
			return newText;
		},
	},
};
</script>
