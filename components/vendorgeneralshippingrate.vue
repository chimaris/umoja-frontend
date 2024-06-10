<template>
	<div>
		<span class="pa-5 d-flex align-center">
			<v-icon class="mr-4" icon="mdi mdi-arrow-left" @click="vendorStore.renderRate = false"></v-icon>
			<p style="color: #000; font-size: 20px; font-weight: 600" class="">General Shipping Rates</p>
		</span>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<v-card class="mx-auto my-2 py-5 px-6 cardStyle" flat rel="noopener" style="justify-content: between">
				<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">
					Shipping Origins <v-icon icon="mdi mdi-information-outline" size="24"></v-icon>
				</p>
				<div class="d-flex justify-space-between align-center w-100">
					<div class="d-flex py-2">
						<v-avatar class="mr-4" size="50" color="#EDEDED">
							<v-icon icon="mdi mdi-map-marker"></v-icon>
						</v-avatar>
						<div>
							<p style="font-size: 16px; font-weight: 600; color: #333333">Store location</p>
							<p style="font-size: 16px; font-weight: 500; color: #969696">Ghana</p>
						</div>
					</div>
					<v-btn variant="text" class="ml-4 menubar text-grey-darken-3" size="default" style="font-weight: 600; font-size: 16px">
						<v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
						Edit
					</v-btn>
				</div>
			</v-card>

			<v-card class="my-5 pa-6 cardStyle" flat style="background-color: #f8f8f8; border: 1px solid #cecece">
				<div class="d-flex justify-space-between align-center w-100">
					<p style="font-size: 18px; font-weight: 600; color: #333">Shipping Zones</p>
					<div>
						<v-btn @click="createZoneModal = true" variant="text" size="default" style="color: #1273eb; font-size: 16px; font-weight: 500">
							Create Zone
						</v-btn>
					</div>
				</div>

				<v-card class="mx-auto my-5 pa-6 cardStyle" flat rel="noopener" style="justify-content: between">
					<div class="cardStyle pa-4">
						<div class="d-flex justify-space-between align-center w-100">
							<div class="d-flex">
								<v-avatar class="mr-4" size="50" color="#EDF0EF">
									<v-icon icon="mdi mdi-equal-box"></v-icon>
								</v-avatar>
								<div>
									<p style="font-size: 16px; font-weight: 600; color: #333333">Africa <v-icon icon="mdi mdi-chevron-down"></v-icon></p>
									<p style="font-size: 16px; font-weight: 500; color: #969696">
										Algerien, Angola, Ascension... <span style="color: #1273eb">Show all</span>
									</p>
								</div>
							</div>
							<div class="d-flex">
								<v-menu>
									<template v-slot:activator="{ props }">
										<v-icon icon="mdi mdi-dots-horizontal" v-bind="props"></v-icon>
									</template>

									<v-card class="bg-white d-flex flex-column text-left pa-4 h-auto">
										<span class="pa-2 text-left">
											<v-icon icon="mdi mdi-logout"></v-icon> <span style="font-size: 14px; font-weight: 600"> Edit Zone </span>
										</span>

										<span class="pa-2" flat style="color: #c20052">
											<v-icon icon="mdi mdi-delete"></v-icon> <span style="font-size: 14px; font-weight: 600">Delete Zone </span>
										</span>
									</v-card>
								</v-menu>
							</div>
						</div>
					</div>

					<v-row class="mt-2" style="font-size: 16px; font-weight: 600; color: #333">
						<v-col cols="3">
							<p>Rate name <v-icon icon="mdi mdi-chevron-down"></v-icon></p>
						</v-col>
						<v-col cols="3">
							<p>Condition</p>
						</v-col>
						<v-col>
							<p>Price</p>
						</v-col>
					</v-row>
					<v-divider class="my-2"></v-divider>
					<v-row class="mb-1" style="font-size: 16px; font-weight: 400; color: #333">
						<v-col cols="3">
							<p>Africa</p>
						</v-col>
						<v-col cols="3">
							<p>€60.00 and up</p>
						</v-col>
						<v-col>
							<p>€15.00 EUR</p>
						</v-col>
					</v-row>

					<v-btn
						@click="addRateModal = true"
						style="border: 1px solid #e5e5e5"
						variant="outlined"
						size="default"
						class="mt-4 menubar text-grey-darken-3"
					>
						Add rate
					</v-btn>
				</v-card>

				<v-card class="mx-auto my-5 pa-6 cardStyle" flat rel="noopener" style="justify-content: between">
					<div class="cardStyle pa-4">
						<div class="d-flex justify-space-between align-center w-100">
							<div class="d-flex">
								<v-avatar class="mr-4" size="50" color="#FDF1ED">
									<v-icon icon="mdi mdi-equal-box"></v-icon>
								</v-avatar>
								<div>
									<p style="font-size: 16px; font-weight: 600; color: #333333">Asia <v-icon icon="mdi mdi-chevron-down"></v-icon></p>
									<p style="font-size: 16px; font-weight: 500; color: #969696">
										Afghanistan, Armenien, Aserbaidschan, Bahrain, Bangladesch, Bhutan, Brunei Darussalam, Kambodscha, China, Zypern, Georgien,
										Indien, Indonesien, Irak, Jordanien, Kasachstan, Kuwait, Kirgisistan, Laos, Libanon, Sonderverwaltungsregion Macau, Malediven,
										Mongolei, Myanmar, Nepal, Oman, Pakistan, Palästinensische Autonomiegebiete, Philippinen, Katar, Saudi-Arabien, Sri Lanka, Taiwan,
										Tadschikistan, Thailand, Timor-Leste, Türkei, Turkmenistan, Usbekistan, Vietnam, Jemen.
										<span style="color: #1273eb">Show less</span>
									</p>
								</div>
							</div>
							<div class="d-flex">
								<v-menu>
									<template v-slot:activator="{ props }">
										<v-icon icon="mdi mdi-dots-horizontal" v-bind="props"></v-icon>
									</template>

									<v-card class="bg-white d-flex flex-column text-left pa-4 h-auto">
										<span class="pa-2 text-left">
											<v-icon icon="mdi mdi-logout"></v-icon> <span style="font-size: 14px; font-weight: 600"> Edit Zone </span>
										</span>

										<span class="pa-2" flat style="color: #c20052">
											<v-icon icon="mdi mdi-delete"></v-icon> <span style="font-size: 14px; font-weight: 600">Delete Zone </span>
										</span>
									</v-card>
								</v-menu>
							</div>
						</div>
					</div>

					<v-row class="mt-2" style="font-size: 16px; font-weight: 600; color: #333">
						<v-col cols="3">
							<p>Rate name <v-icon icon="mdi mdi-chevron-down"></v-icon></p>
						</v-col>
						<v-col cols="3">
							<p>Condition</p>
						</v-col>
						<v-col>
							<p>Price</p>
						</v-col>
					</v-row>
					<v-divider class="my-2"></v-divider>
					<v-row class="mb-1" style="font-size: 16px; font-weight: 400; color: #333">
						<v-col cols="3">
							<p>Asia</p>
						</v-col>
						<v-col cols="3">
							<p>€80.00 and up</p>
						</v-col>
						<v-col>
							<p>€15.00 EUR</p>
						</v-col>
					</v-row>

					<v-btn
						@click="localPickupModal = true"
						style="border: 1px solid #e5e5e5"
						variant="outlined"
						size="default"
						class="mt-4 menubar text-grey-darken-3"
					>
						Add rate
					</v-btn>
				</v-card>
			</v-card>
		</div>
		<div class="d-flex justify-end ga-4">
			<v-btn size="default" style="border: 1px solid #e5e5e5" flat>
				<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Discard</span></v-btn
			>
			<v-btn size="default" color="green" flat>
				<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save</span></v-btn
			>
		</div>
	</div>

	<v-dialog width="auto" v-model="createZoneModal">
		<v-sheet width="100vw" max-width="669px" class="cardStyle px-0">
			<div class="px-6 d-flex justify-space-between">
				<div class="d-flex align-center">
					<v-avatar color="#EDF3F0" size="50" class="mr-4">
						<v-img width="20" height="20" color="green" src="https://res.cloudinary.com/payhospi/image/upload/v1716455424/umoja/Vector_ds0yoy.svg" />
					</v-avatar>
					<p style="color: #333; font-size: 24px; font-weight: 600; line-height: 20px; letter-spacing: -0.24px">Create new shipping zone</p>
				</div>
				<v-icon @click="createZoneModal = false" size="30" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
			</div>
			<v-divider class="my-4"></v-divider>
			<div class="px-7">
				<p class="inputLabel">Zone name</p>
				<v-text-field class="mb-3" placeholder="Enter package name" density="comfortable" hint="Customers won’t see this." persistent-hint>
				</v-text-field>

				<v-text-field
					hide-details
					class=""
					style="border: 1px solid #e5e5e5"
					persistent-hint
					variant="outlined"
					prepend-inner-icon="mdi mdi-magnify"
					placeholder="Search Products"
					density="compact"
					block
				>
				</v-text-field>
			</div>
			<div class="my-3 px-7" style="background-color: #f8f8f8 !important; overflow: scroll; height: 300px">
				<ul>
					<li class="d-flex align-center" style="color: #333; font-size: 14px; font-weight: 600; line-height: 17px">
						<v-checkbox density="compact" class="pr-3" v-model="selectAll" label="Africa" @change="selectAllCountries"></v-checkbox>
					</li>
					<ul class="pl-5">
						<li v-for="(country, index) in countries" :key="index" class="d-flex align-center">
							<v-checkbox density="compact" class="my-0 py-0" :input-value="country.selected" @change="toggleCountry(index)">
								<template v-slot:label>
									<v-avatar color="#EDF3F0" size="24" class="mx-4">
										<v-img :src="country.flag" />
									</v-avatar>
									{{ country.name }}
								</template>
							</v-checkbox>
						</li>
					</ul>
				</ul>
			</div>
			<div class="py-4 px-7">
				<v-row>
					<v-col cols="6"
						><v-btn size="large" style="border: 1px solid #e5e5e5" flat block>
							<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
						></v-col
					>
					<v-col cols="6">
						<v-btn size="large" color="green" flat block>
							<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save</span></v-btn
						></v-col
					>
				</v-row>
			</div>
		</v-sheet>
	</v-dialog>
	<v-dialog width="auto" v-model="addRateModal">
		<v-sheet width="100vw" max-width="669px" class="cardStyle px-0">
			<div class="px-6 d-flex justify-space-between">
				<div class="d-flex align-center">
					<v-avatar color="#EDF3F0" size="70" class="mr-2">
						<v-img width="20" height="20" color="green" src="https://res.cloudinary.com/payhospi/image/upload/v1716455424/umoja/Vector_ds0yoy.svg" />
					</v-avatar>
					<div class="mx-4">
						<p style="color: #333; font-size: 24px; font-weight: 600; line-height: 20px; letter-spacing: -0.24px">Add Rate</p>
						<p style="color: #969696; font-size: 16px; font-weight: 500; letter-spacing: -0.16px" class="mt-2">
							This rate will affect all the products your are
						</p>
						<p style="color: #969696; font-size: 16px; font-weight: 500; letter-spacing: -0.16px">shipping to a particular region</p>
					</div>
				</div>
				<v-icon @click="addRateModal = false" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
			</div>
			<v-divider class="my-4"></v-divider>

			<div class="px-7">
				<p class="inputLabel">Shipping rate</p>
				<v-text-field placeholder="Custom" density="comfortable"> </v-text-field>

				<p class="inputLabel">Custom rate name</p>
				<v-text-field placeholder="Enter custom rate name" density="comfortable"> </v-text-field>

				<p class="inputLabel">Custom delivery description (optional)</p>
				<v-text-field placeholder="Custom delivery description" density="comfortable"> </v-text-field>

				<p class="inputLabel">Price</p>
				<v-text-field model-value="10.00" prefix="$" density="comfortable">
					<template v-slot:append-inner>
						<v-btn flat style="font-size: 12px" variant="tonal">Free</v-btn>
					</template>
				</v-text-field>

				<span @click="isConditionPrice = !isConditionPrice" style="color: #1273eb; font-weight: 500; font-size: 14px; cursor: pointer">
					<span>{{ isConditionPrice ? "Remove" : "Add" }} Conditional Pricing</span>
				</span>
				<div v-if="isConditionPrice">
					<v-radio-group>
						<v-radio color="#00966D" label="Based on item weight" value="one"></v-radio>
						<v-radio color="#00966D" label="Based on order price" value="two"></v-radio>
					</v-radio-group>
					<v-row dense>
						<v-col>
							<p class="inputLabel">Minimum weight</p>
							<v-text-field density="comfortable" placeholder="0" suffix="kg"> </v-text-field
						></v-col>
						<v-col>
							<p class="inputLabel">Maximum weight</p>
							<v-text-field density="comfortable" placeholder="No Limit" suffix="kg"> </v-text-field
						></v-col>
					</v-row>
				</div>
			</div>

			<p class="inputLabel mx-7 mt-5">Checkout Preview</p>
			<div class="mx-7 py-4" style="background-color: #f8f8f8">
				<div class="d-flex justify-space-between mx-auto px-2 py-4 bg-white" style="width: 300px">
					<div class="d-flex ga-2">
						<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718026593/umoja/Check_Square_mqlbjv.svg" width="24" height="24" />
						<p class="inputLabel">
							Custom name <br />
							<span style="color: #969696">Custom Delivery</span>
						</p>
						<!-- <v-radio density="compact" value="one" color="#00966D">
							<template v-slot:label>
								<p class="inputLabel ml-2 pt-3">
									Custom name <br />
									<span style="color: #969696">Custom Delivery</span>
								</p>
							 </template>
						</v-radio> -->
					</div>

					<v-btn flat density="default" variant="tonal">Free</v-btn>
				</div>
			</div>
			<div class="py-4 px-7">
				<v-row>
					<v-col cols="6"
						><v-btn size="large" style="border: 1px solid #e5e5e5" flat block>
							<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
						></v-col
					>
					<v-col cols="6">
						<v-btn size="large" color="green" flat block>
							<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save</span></v-btn
						></v-col
					>
				</v-row>
			</div>
		</v-sheet>
	</v-dialog>
</template>

<script>
import { useVendorStore } from "~/stores/vendorStore";

export default {
	data() {
		return {
			createZoneModal: false,
			addRateModal: false,
			selectAll: false,
			isConditionPrice: false,
			countries: [
				{ name: "Cameroon", flag: "https://flagcdn.com/w320/cm.png", selected: false },
				{ name: "Egypt", flag: "https://flagcdn.com/w320/eg.png", selected: false },
				{ name: "Ivory Coast", flag: "https://flagcdn.com/w320/ci.png", selected: false },
				{ name: "Kenya", flag: "https://flagcdn.com/w320/ke.png", selected: false },
				{ name: "Mauritius", flag: "https://flagcdn.com/w320/mu.png", selected: false },
			],
		};
	},
	computed: {
		vendorStore() {
			console.log("Rate ", useVendorStore().renderRate);
			return useVendorStore();
		},
	},
	methods: {
		selectAllCountries() {
			this.countries.forEach((country) => {
				country.selected = this.selectAll;
			});
		},
		toggleCountry(index) {
			this.countries[index].selected = !this.countries[index].selected;
			this.selectAll = this.countries.every((country) => country.selected);
		},
	},
};
</script>

<style scoped>
.inputLabel {
	font-size: 14px;
	font-weight: 500;
	color: #333;
}
.v-text-field {
	cursor: pointer;
}
.v-messages__message {
	color: red; /* Change this to your desired color */
	font-weight: bold; /* Optional: make the message bold */
}
</style>
