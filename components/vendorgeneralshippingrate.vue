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
						<v-btn @click="localDeliveryModal = true" variant="text" size="default" style="color: #1273eb; font-size: 16px; font-weight: 500">
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
						@click="localPickupModal = true"
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
</template>

<script>
import { useVendorStore } from "~/stores/vendorStore";

export default {
	data() {
		return {};
	},
	computed: {
		vendorStore() {
			console.log("Rate ", useVendorStore().renderRate);
			return useVendorStore();
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
</style>
