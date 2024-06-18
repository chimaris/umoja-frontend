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
							<p style="font-size: 16px; font-weight: 500; color: #969696">{{ vendor?.country_name }}</p>
						</div>
					</div>
					<v-btn variant="text" class="ml-4 menubar text-grey-darken-3 d-flex align-center" size="default" style="font-weight: 600; font-size: 16px">
						<v-img
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718099894/umoja/Pen_2_cdzgaq.svg"
							contain
							class="mr-1"
							width="20"
							height="20"
						></v-img>
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

				<v-card v-if="shippingZones.length > 0" v-for="zone in shippingZones" :key="zone" class="mx-auto my-5 pa-6 cardStyle" flat style="justify-content: between">
					<div class="cardStyle pa-4">
						<div class="d-flex justify-space-between align-center w-100">
							<div class="d-flex">
								<v-avatar color="#EDF0EF" size="50" class="mr-2">
									<v-img
										width="28"
										height="20"
										color="green"
										src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718106780/umoja/Vector_dkiz5b.svg"
									/>
								</v-avatar>
								<div>
									<p style="font-size: 16px; font-weight: 600; color: #333333">{{ zone.name }} <v-icon icon="mdi mdi-chevron-down"></v-icon></p>
									<p style="font-size: 16px; font-weight: 500; color: #969696">
										
										{{ zone.showAll ? `${zone.countries.join(', ')} .` : `${zone.countries.slice(0, 3).join(', ')}` }}
										<span v-if="zone.countries.length > 3" style="color: #1273eb; cursor: pointer; white-space: nowrap" @click="zone.showAll = !zone.showAll">{{ zone.showAll ? 'Show less' : 'Show all' }}</span>
									</p>
								</div>
							</div>
							<div class="d-flex">
								<v-menu>
									<template v-slot:activator="{ props }">
										<v-icon icon="mdi mdi-dots-horizontal" v-bind="props"></v-icon>
									</template>

									<v-card class="bg-white d-flex flex-column text-left pa-4 h-auto">
										<span @click="openEditZone(zone)" class="pa-2 text-left d-flex">
											<div class="mr-4" style="width: 20px; height: 20px">
												<v-img
													src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718099894/umoja/Pen_2_cdzgaq.svg"
													contain
													width="100"
													height="100"
												></v-img>
											</div>

											<span style="font-size: 14px; cursor: pointer; font-weight: 600">Edit Zone</span>
										</span>

										<span @click="openDelete(zone.id)" class="pa-2 text-left d-flex">
											<div class="mr-4" style="width: 20px; height: 20px">
												<v-img
													src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718101570/umoja/Trash_Bin_Trash_m6u5on.svg"
													contain
													width="100"
													height="100"
												></v-img>
											</div>
											<span style="font-size: 14px; font-weight: 600; color: #c20052; cursor: pointer">Delete Zone</span>
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
					<v-row class="mb-1" v-for="rate in zone.rates" :key="rate" style="font-size: 16px; font-weight: 400; color: #333">
						<v-col cols="3">
							<p>{{ rate.name }}</p>
						</v-col>
						<v-col cols="3">
							<p v-if="rate.minimum_price">from {{formattedPrice(rate.minimum_price)}} <span v-if="rate.maximum_price">to {{ formattedPrice(rate.maximum_price) }}</span></p>
							<p v-if="rate.minimum_weight">from {{rate.minimum_weight}}Kg <span v-if="rate.maximum_weight">to {{ rate.maximum_weight }}</span></p>
						</v-col>
						<v-col>
							<p>{{ formattedPrice(rate.price) }}</p>
						</v-col>
						<v-col>
							<v-btn
								@click="openEditRate(zone.id, rate)"
								style="border: 1px solid #e5e5e5"
								variant="outlined"
								size="default"
								class="menubar text-grey-darken-3"
								>
								Edit rate
							</v-btn>
						</v-col>
					</v-row>

					<v-btn
						@click="saveRate(zone.id)"
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
		<!-- <div class="d-flex justify-end ga-4">
			<v-btn size="default" style="border: 1px solid #e5e5e5" flat>
				<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Discard</span></v-btn
			>
			<v-btn size="default" color="green" flat>
				<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save</span></v-btn
			>
		</div> -->
	</div>
	<v-dialog v-model="confirmDelete" persistent max-width="400">
		<v-card>
			<v-card-title class="text-h5">Confirm Delete</v-card-title>
			<v-card-text>Are you sure you want to delete this shipping zone?</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn class="bg-green" :disabled="deleting" color="white rounded-lg" text @click="deleteZone()">{{deleting ? 'deleting' : 'Yes'}}</v-btn>
				<v-btn class="bg-red" color="white rounded-lg" text @click="confirmDelete = false">No</v-btn>
			</v-card-actions>
	</v-card>								
	</v-dialog>
	<v-dialog width="auto" v-model="createZoneModal">
		<v-sheet width="100vw" max-width="669px" class="cardStyle px-0">
			<div class="px-6 d-flex justify-space-between">
				<div class="d-flex align-center">
					<v-avatar color="#EDF3F0" size="50" class="mr-3">
						<v-img width="28" height="20" color="green" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718106780/umoja/Vector_dkiz5b.svg" />
					</v-avatar>
					<p style="color: #333; font-size: 24px; font-weight: 600; line-height: 20px; letter-spacing: -0.24px">Create new shipping zone</p>
				</div>
				<v-icon @click="createZoneModal = false" size="24" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
			</div>
			<v-divider class="my-4"></v-divider>
			<div class="px-7">
				<p class="inputLabel">Zone name</p>
				<v-text-field class="mb-3" placeholder="Enter package name" v-model="zoneName" density="comfortable" hint="Customers won’t see this." persistent-hint>
				</v-text-field>

				<v-text-field
					hide-details
					class=""
					style="border: 1px solid #e5e5e5"
					persistent-hint
					variant="outlined"
					prepend-inner-icon="mdi mdi-magnify"
					placeholder="Search countries and regions by name or code"
					density="compact"
					v-model="searchQuery"
					block
				>
				</v-text-field>
			</div>
			<div class="my-3 px-7" style="background-color: #f8f8f8 !important; overflow: scroll; height: 300px">
				<!-- <ul>
					<li class="d-flex align-center" v-for="(continent, i) in continentsCon" :key="i" style="color: #333; font-size: 14px; font-weight: 600; line-height: 17px">
						<v-checkbox density="compact" class="pr-3" v-model="continent.checked" :label="continent.name"></v-checkbox>
						 <ul v-if="selectedContinent">
						<li v-for="(country, index) in countries" :key="index" class="d-flex align-center">
							<v-checkbox density="compact" class="my-0 py-0">
							<template v-slot:label>
								<v-avatar color="#EDF3F0" size="24" class="mx-4">
								<v-img :src="country.flag" />
								</v-avatar>
								{{ country.name }}
							</template>
							</v-checkbox>
						</li>
						</ul>
					</li>
					
				</ul> -->
				<v-expansion-panels multiple v-model="panels">
						<v-expansion-panel  class="w-100"  :key="index" :value="continent.name" v-for="(continent, index) in filteredContinents">
						<v-expansion-panel-title >
							<li class="d-flex align-center"  style="color: #333; font-size: 14px; font-weight: 600; line-height: 17px">
								<v-checkbox @click.stop density="compact" class="pr-3" v-model="continent.checked" @change="toggleContinent(continent)" :label="continent.name"></v-checkbox>
							</li>
						</v-expansion-panel-title>
						<v-expansion-panel-text class="">
							<ul>
								<li v-for="(country, index) in continent.countries" :key="index" class="d-flex align-center">
									<v-checkbox v-model="country.checked" @change="toggleCountry(country, continent)" density="compact" class="my-0 py-0">
									<template v-slot:label>
										<v-avatar color="#EDF3F0" size="24" class="mx-4">
										<v-img :src="country.flag" />
										</v-avatar>
										{{ country.name }}
									</template>
									</v-checkbox>
								</li>
							</ul>
						</v-expansion-panel-text>
						</v-expansion-panel>
					</v-expansion-panels>
			</div>
			<p class="py-4 px-7" style="color: red; font-size: 16px">{{ zoneError }}</p>
			<div class="py-4 px-7">
				
				<v-row>
					<v-col cols="6"
						><v-btn @click="createZoneModal = false" size="large" style="border: 1px solid #e5e5e5" flat block>
							<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
						></v-col
					>
					<v-col cols="6">
						<v-btn @click="saveZone()" size="large" color="green" flat block>
							<span :style="{opacity: loading ? '0.5' : ''}" style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> {{loading ? 'Saving' : 'Save'}}</span></v-btn
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
						<v-img width="20" height="20" color="green" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718108482/umoja/Vector_qthzhv.svg" />
					</v-avatar>
					<div class="mx-4">
						<p style="color: #333; font-size: 24px; font-weight: 600; line-height: 20px; letter-spacing: -0.24px">Add Rate</p>
						<p style="color: #969696; font-size: 16px; font-weight: 500; letter-spacing: -0.16px" class="mt-2">
							This rate will affect all the products your are
						</p>
						<p style="color: #969696; font-size: 16px; font-weight: 500; letter-spacing: -0.16px">shipping to a particular region</p>
					</div>
				</div>
				<v-icon @click="addRateModal = false" size="24" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
			</div>
			<v-divider class="my-4"></v-divider>

			<div class="px-7">
				<p class="inputLabel">Shipping rate</p>
				<v-text-field v-model="rateName" placeholder="Custom" density="comfortable"> </v-text-field>

				<p class="inputLabel">Custom rate name</p>
				<v-text-field v-model="customName" placeholder="Enter custom rate name" density="comfortable"> </v-text-field>

				<p class="inputLabel">Custom delivery description (optional)</p>
				<v-text-field v-model="description" placeholder="Custom delivery description" density="comfortable"> </v-text-field>

				<p class="inputLabel">Price</p>
				<v-text-field v-model="ratePrice"  prefix="$" density="comfortable">
					<template v-if="!ratePrice" v-slot:append-inner>
						<v-btn flat style="font-size: 12px" class="pa-1" variant="tonal">Free</v-btn>
					</template>
				</v-text-field>

				<span @click="isConditionPrice = !isConditionPrice" style="color: #1273eb; font-weight: 500; font-size: 14px; cursor: pointer">
					<span>{{ isConditionPrice ? "Remove" : "Add" }} Conditional Pricing</span>
				</span>
				<div v-if="isConditionPrice">
					<v-radio-group v-model="basedOn">
						<v-radio color="#00966D" label="Based on item weight" value="weight"></v-radio>
						<v-radio color="#00966D" label="Based on order price" value="price"></v-radio>
					</v-radio-group>
					<v-row dense v-if="basedOn == 'weight'">
						<v-col>
							<p class="inputLabel">Minimum weight</p>
							<v-text-field v-model="minWeight" density="comfortable" placeholder="0" suffix="kg"> </v-text-field
						></v-col>
						<v-col>
							<p class="inputLabel">Maximum weight</p>
							<v-text-field v-model="maxWeight" density="comfortable" placeholder="No Limit" suffix="kg"> </v-text-field
						></v-col>
					</v-row>
					<v-row dense v-if="basedOn == 'price'">
						<v-col>
							<p class="inputLabel">Minimum price</p>
							<v-text-field prefix="$" v-model="minPrice" density="comfortable" placeholder="0"> </v-text-field
						></v-col>
						<v-col>
							<p class="inputLabel">Maximum price</p>
							<v-text-field v-model="maxPrice" prefix="$" density="comfortable" placeholder="No Limit"> </v-text-field
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
							{{customName || 'Custom name'}} <br />
							<span style="color: #969696">{{ description || 'Custom Delivery' }}</span>
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

					<v-btn flat density="default" variant="tonal">{{ ratePrice? formattedPrice(ratePrice) : 'Free' }}</v-btn>
				</div>
			</div>
			<p class="py-4 px-7" style="color: red; font-size: 16px">{{ rateError }}</p>
			<div class="pb-4 px-7">
				<v-row>
					<v-col cols="6"
						><v-btn @click="addRateModal = false" size="large" style="border: 1px solid #e5e5e5" flat block>
							<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
						></v-col
					>
					<v-col cols="6">
						<v-btn @click = "addZoneRate()" size="large" color="green" flat block>
							<span :style="{opacity: loading ? '0.5' : ''}" style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> {{loading ? 'Saving' : 'Save'}}</span></v-btn
						></v-col
					>
				</v-row>
			</div>
		</v-sheet>
	</v-dialog>
	<v-dialog width="auto" v-model="editRateModal">
		<v-sheet width="100vw" max-width="669px" class="cardStyle px-0">
			<div class="px-6 d-flex justify-space-between">
				<div class="d-flex align-center">
					<v-avatar color="#EDF3F0" size="70" class="mr-2">
						<v-img width="20" height="20" color="green" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718108482/umoja/Vector_qthzhv.svg" />
					</v-avatar>
					<div class="mx-4">
						<p style="color: #333; font-size: 24px; font-weight: 600; line-height: 20px; letter-spacing: -0.24px">Add Rate</p>
						<p style="color: #969696; font-size: 16px; font-weight: 500; letter-spacing: -0.16px" class="mt-2">
							This rate will affect all the products your are
						</p>
						<p style="color: #969696; font-size: 16px; font-weight: 500; letter-spacing: -0.16px">shipping to a particular region</p>
					</div>
				</div>
				<v-icon @click="editRateModal = false" size="24" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
			</div>
			<v-divider class="my-4"></v-divider>

			<div class="px-7">
				<p class="inputLabel">Shipping rate</p>
				<v-text-field v-model="editRate.name" placeholder="Custom" density="comfortable"> </v-text-field>

				<p class="inputLabel">Custom rate name</p>
				<v-text-field v-model="editRate.custom_rate_name" placeholder="Enter custom rate name" density="comfortable"> </v-text-field>

				<p class="inputLabel">Custom delivery description (optional)</p>
				<v-text-field v-model="editRate.custom_delivery_description" placeholder="Custom delivery description" density="comfortable"> </v-text-field>

				<p class="inputLabel">Price</p>
				<v-text-field v-model="editRate.price"  prefix="$" density="comfortable">
					<template v-if="!editRate.price" v-slot:append-inner>
						<v-btn flat style="font-size: 12px" class="pa-1" variant="tonal">Free</v-btn>
					</template>
				</v-text-field>

				<span @click="isConditionPrice = !isConditionPrice" style="color: #1273eb; font-weight: 500; font-size: 14px; cursor: pointer">
					<span>{{ isConditionPrice ? "Remove" : "Add" }} Conditional Pricing</span>
				</span>
				<div v-if="isConditionPrice">
					<v-radio-group v-model="basedOn">
						<v-radio color="#00966D" label="Based on item weight" value="weight"></v-radio>
						<v-radio color="#00966D" label="Based on order price" value="price"></v-radio>
					</v-radio-group>
					<v-row dense v-if="basedOn == 'weight'">
						<v-col>
							<p class="inputLabel">Minimum weight</p>
							<v-text-field v-model="editRate.minimum_weight" density="comfortable" placeholder="0" suffix="kg"> </v-text-field
						></v-col>
						<v-col>
							<p class="inputLabel">Maximum weight</p>
							<v-text-field v-model="editRate.maximum_weight" density="comfortable" placeholder="No Limit" suffix="kg"> </v-text-field
						></v-col>
					</v-row>
					<v-row dense v-if="basedOn == 'price'">
						<v-col>
							<p class="inputLabel">Minimum price</p>
							<v-text-field prefix="$" v-model="editRate.minimum_price" density="comfortable" placeholder="0"> </v-text-field
						></v-col>
						<v-col>
							<p class="inputLabel">Maximum price</p>
							<v-text-field v-model="editRate.maximum_price" prefix="$" density="comfortable" placeholder="No Limit"> </v-text-field
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
							{{editRate.custom_rate_name || 'Custom name'}} <br />
							<span style="color: #969696">{{ editRate.custom_delivery_description || 'Custom Delivery' }}</span>
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

					<v-btn flat density="default" variant="tonal">{{ editRate.price? formattedPrice(editRate.price) : 'Free' }}</v-btn>
				</div>
			</div>
			<p class="py-4 px-7" style="color: red; font-size: 16px">{{ editRateError }}</p>
			<div class="pb-4 px-7">
				<v-row>
					<v-col cols="6"
						><v-btn @click="addRateModal = false" size="large" style="border: 1px solid #e5e5e5" flat block>
							<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
						></v-col
					>
					<v-col cols="6">
						<v-btn @click = "editZoneRate()" size="large" color="green" flat block>
							<span :style="{opacity: loading ? '0.5' : ''}" style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> {{loading ? 'Saving' : 'Save Changes'}}</span></v-btn
						></v-col
					>
				</v-row>
			</div>
		</v-sheet>
	</v-dialog>
	<v-dialog width="auto" v-model="editShippingModal">
		<v-sheet width="100vw" max-width="669px" class="cardStyle px-0">
			<div class="px-6 d-flex justify-space-between">
				<div class="d-flex align-center">
					<v-avatar color="#EDF3F0" size="50" class="mr-3">
						<v-img width="28" height="20" color="green" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718106780/umoja/Vector_dkiz5b.svg" />
					</v-avatar>
					<p style="color: #333; font-size: 24px; font-weight: 600; line-height: 20px; letter-spacing: -0.24px">Create new shipping zone</p>
				</div>
				<v-icon @click="editShippingModal = false" size="24" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
			</div>
			<v-divider class="my-4"></v-divider>
			<div class="px-7">
				<p class="inputLabel">Zone name</p>
				<v-text-field class="mb-3" placeholder="Enter package name" v-model="editShipping.name" density="comfortable" hint="Customers won’t see this." persistent-hint>
				</v-text-field>

				<v-text-field
					hide-details
					class=""
					style="border: 1px solid #e5e5e5"
					persistent-hint
					variant="outlined"
					prepend-inner-icon="mdi mdi-magnify"
					placeholder="Search countries and regions by name or code"
					density="compact"
					v-model="searchQuery"
					block
				>
				</v-text-field>
			</div>
			<div class="my-3 px-7" style="background-color: #f8f8f8 !important; overflow: scroll; height: 300px">
				<v-expansion-panels multiple v-model="panels">
						<v-expansion-panel  class="w-100"  :key="index" :value="continent.name" v-for="(continent, index) in filteredContinents">
						<v-expansion-panel-title >
							<li class="d-flex align-center"  style="color: #333; font-size: 14px; font-weight: 600; line-height: 17px">
								<v-checkbox @click.stop density="compact" class="pr-3" v-model="checkedContinents[continent.name]" @change="toggleEditContinent(continent)"  :label="continent.name"></v-checkbox>
							</li>
						</v-expansion-panel-title>
						<v-expansion-panel-text class="">
							<ul>
								<li v-for="(country, index) in continent.countries" :key="index" class="d-flex align-center">
									<v-checkbox v-model="checkedCountries[country.name]" @change="toggleEditCountry(country, continent)" density="compact" class="my-0 py-0">
									<template v-slot:label>
										<v-avatar color="#EDF3F0" size="24" class="mx-4">
										<v-img :src="country.flag" />
										</v-avatar>
										{{ country.name }}
									</template>
									</v-checkbox>
								</li>
							</ul>
						</v-expansion-panel-text>
						</v-expansion-panel>
					</v-expansion-panels>
			</div>
			<p class="py-4 px-7" style="color: red; font-size: 16px">{{ editShippingError }}</p>
			<div class="py-4 px-7">
				
				<v-row>
					<v-col cols="6"
						><v-btn @click="editShippingModal = false" size="large" style="border: 1px solid #e5e5e5" flat block>
							<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
						></v-col
					>
					<v-col cols="6">
						<v-btn @click="editZone()" size="large" color="green" flat block>
							<span :style="{opacity: loading ? '0.5' : ''}" style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> {{loading ? 'Saving' : 'Save Changes'}}</span></v-btn
						></v-col
					>
				</v-row>
			</div>
		</v-sheet>
	</v-dialog>
</template>

<script setup>
import { useVendorStore } from "~/stores/vendorStore";
import { useMyVendorShippingStore } from "~/stores/vendorShipping";
import {ref} from 'vue'
import { formattedPrice } from "~/utils/price";
import { getCountryByRegion } from "~/composables/useContinent";
import { Continents } from "~/utils/continent";
import { getZones, getShipping, createShippingMethod, createZones, deleteShippingZone } from "~/composables/usevendorShipping";

const createZoneModal = ref(false)
const shippingStore = useMyVendorShippingStore()
const vendorStore = useVendorStore()
const addRateModal= ref(false)
const vendor = ref(vendorStore.vendor.vendor_details)
const isConditionPrice= ref(false)
const searchQuery = ref("")
const loading = ref(false)
const panels = ref([])
const basedOn = ref('')
const rateError = ref("")
const zoneError = ref("")
const confirmDelete = ref(false)
const deleteId = ref(null)
const deleting = ref(false)
// edit
const editShipping = ref(null)
const editShippingModal = ref(false)
const editShippingError = ref("")

const editRateModal = ref(false)
const editRate = ref(null)
const editRateError = ref("")
const editZoneId = ref(null)
// things to send to database
const zoneName = ref("")
const selectedCountries = ref([])
const zoneId = ref(null)
const rateName = ref("")
const customName = ref("")
const description = ref("")
const ratePrice = ref(null)
const minWeight = ref(null)
const maxWeight = ref(null)
const minPrice = ref(null)
const maxPrice = ref(null)

// things to render 
const shippingZones = computed(() => shippingStore.shippingZones)
const continentsCon = ref(
					[
						{ name: "Africa", checked: false, countries: [] },
						{ name: "Asia", checked: false, countries: [] },
						{ name: "Europe", checked: false, countries: [] },
						{ name: "North America", checked: false, countries: [] },
						{ name: "Oceania", checked: false, countries: [] },
						{ name: "South America", checked: false, countries: [] },
    				]);
const fetchCountries = async () => {
      for (const continent of continentsCon.value) {
        continent.countries = await getCountryByRegion(continent.name);
      }
};
onMounted(async () => {
	await fetchCountries()
})

// everything for shipping zone
function openEditZone(item){
	editShipping.value = item
	editShippingModal.value = true
}

async function saveZone (){
	const data = {
		shipping_method_id: 2,
		name: zoneName.value,
		countries: selectedCountries.value
	}
	if (!zoneName.value || selectedCountries.value == 0){
		return
	}
	try{
		loading.value = true
		await createShippingMethod(data)
		shippingStore.shippingZones = await getShipping()
		createZoneModal.value = false
		zoneName.value = ""
		selectedCountries.value = []
		for (const continent of continentsCon.value) {
			continent.checked = false;
			continent.countries.forEach((country) => {
			country.checked = false;
        });
		}
	}catch(error){
		if (error.response) {
            zoneError.value = error.response.data.message || 'An error occurred while adding shipping zone.';
          } else if (error.request) {
            zoneError.value = 'No response received from server. Please try again later.';
          } else {
            zoneError.value = 'An error occurred. Please try again later.';
          }
	}finally{
		loading.value = false
	}}
async function editZone (){
	const data = {
		shipping_method_id: 2,
		name: editShipping.value.name,
		countries: editShipping.value.countries
	}

	if (!editShipping.value.name || editShipping.value.countries == 0){
		return
	}
	try{
		loading.value = true
		await updateShipping(data, editShipping.value.id)
		shippingStore.shippingZones = await getShipping()
		editShippingModal.value = false
	}catch(error){
		if (error.response) {
            editShippingError.value = error.response.data.message || 'An error occurred while updating shipping zone.';
          } else if (error.request) {
            editShippingError.value = 'No response received from server. Please try again later.';
          } else {
            editShippingError.value = 'An error occurred. Please try again later.';
          }
	}finally{
		loading.value = false
	}
}

// everything for zone rate
function openEditRate(id, rate){
	editZoneId.value = id
	editRate.value = rate
	editRateModal.value = true
}
function saveRate(id){
	addRateModal.value = true 
	zoneId.value = id
}
async function addZoneRate(){
	const data = {
		shipping_zone_id: zoneId.value,
		name: rateName.value,
		custom_rate_name: customName.value,
		custom_delivery_description: description.value,
		price: ratePrice.value,
		based_on_item_weight: basedOn.value == 'weight' ? 1 : 0,
		based_on_order_price: basedOn.value == 'price' ? 1 : 0,
		minimum_weight: minWeight.value,
		maximum_weight: maxWeight.value,
		minimum_price: minPrice.value,
		maximum_price: maxPrice.value
	}
	rateError.value = ""
	if (!zoneId.value || !customName.value){
		rateError.value = "You need to enter custom rate name."
		return
	}
	try{
		loading.value = true
		await createZones(data, zoneId.value)
		shippingStore.shippingZones = await getShipping()
		addRateModal.value = false
		rateName.value = ""
		customName.value = ""
		description.value = ""
		ratePrice.value = null
		minWeight.value = null
		maxWeight.value = null
		minPrice.value = null
		maxPrice.value = null
		rateError.value = ""
	}catch(error){
		console.error(error, "fff")
		if (error.response) {
            rateError.value = error.response.data.message || 'An error occurred while adding rate.';
          } else if (error.request) {
            rateError.value = 'No response received from server. Please try again later.';
          } else {
            rateError.value = 'An error occurred. Please try again later.';
          }
	}finally{
		loading.value = false
	}
}
async function editZoneRate(){
	const data = {
		name: editRate.value.name,
		custom_rate_name: editRate.value.custom_rate_name,
		custom_delivery_description: editRate.value.custom_delivery_description,
		price: editRate.value.price,
		based_on_item_weight: basedOn.value == 'weight' ? 1 : 0,
		based_on_order_price: basedOn.value == 'price' ? 1 : 0,
		minimum_weight: editRate.value.minimum_weight,
		maximum_weight: editRate.value.maximum_weight,
		minimum_price: editRate.value.minimum_price,
		maximum_price: editRate.value.maximum_price
	}
	editRateError.value = ""
	if (!editRate.value.custom_rate_name){
		rateError.value = "You need to enter custom rate name."
		return
	}
	try{
		loading.value = true
		await updateZone(data, editZoneId.value, editRate.value.id)
		shippingStore.shippingZones = await getShipping()
		editRateModal.value = false
		editRateError.value = ""
	}catch(error){
		if (error.response) {
            editRateError.value = error.response.data.message || 'An error occurred while updating rate.';
          } else if (error.request) {
            editRateError.value = 'No response received from server. Please try again later.';
          } else {
            editRateError.value= 'An error occurred. Please try again later.';
          }
	}finally{
		loading.value = false
	}
}

// deleting zone
function openDelete(id){
	deleteId.value = id
	confirmDelete.value = true
}
async function deleteZone(){
	deleting.value = true
	const res = await deleteShippingZone(deleteId.value)
	if (res){
		shippingStore.shippingZones = await getShipping()
		confirmDelete.value = false
		deleting.value = false
	}
}
// for edit continent and edit country, to check the ones that is in the zone countries
const checkedCountries = computed(() => {
      const checked = {};
      continentsCon.value.forEach(continent => {
        continent.countries.forEach(country => {
          checked[country.name] = editShipping.value.countries.includes(country.name);
        });
      });
      return checked;
    });
const checkedContinents = computed(() => {
      const continentsChecked = {};
      continentsCon.value.forEach(continent => {
        continentsChecked[continent.name] = continent.countries.some(country => checkedCountries.value[country.name]);
      });
      return continentsChecked;
    });

const isSelected = (country) => {
      return selectedCountries.value.some(
        (selectedCountry) => selectedCountry === country.name
      );
    };

    const toggleCountry = (country, continent) => {
      if (country.checked) {
        if (!isSelected(country)) {
          selectedCountries.value.push(country.name);
        }
      } else {
        selectedCountries.value = selectedCountries.value.filter(
          (c) => c !== country.name
        );
      }
      continent.checked = continent.countries.every((c) => c.checked);
    };
	const toggleEditCountry = (country, continent) => {
      if (checkedCountries.value[country.name]) {
        if (!editShipping.value.countries.includes(country.name)) {
          editShipping.value.countries.push(country.name);
        }
      } else {
        editShipping.value.countries = editShipping.value.countries.filter(
          (c) => c !== country.name
        );
      }
      checkedContinents.value[continent.name] = continent.countries.every((c) => checkedCountries.value[c.name]);
    };
    const toggleContinent = (continent) => {
      if (continent.checked) {
        // Add all countries in the continent
        continent.countries.forEach((country) => {
          country.checked = true;
          if (!isSelected(country)) {
            selectedCountries.value.push(country.name);
          }
        });
      } else {
        // Remove all countries in the continent
        continent.countries.forEach((country) => {
          country.checked = false;
          selectedCountries.value = selectedCountries.value.filter(
            (c) => c !== country.name
          );
        });
      }
    };
	const toggleEditContinent = (continent) => {
      if (checkedContinents.value[continent.name]) {
        // Add all countries in the continent
        continent.countries.forEach((country) => {
          checkedCountries.value[country.name] = true;
          if (!editShipping.value.countries.includes(country.name)) {
            editShipping.value.countries.push(country.name);
          }
        });
      } else {
        // Remove all countries in the continent
        continent.countries.forEach((country) => {
          checkedCountries.value[country.name] = false;
          editShipping.value.countries = editShipping.value.countries.filter(
            (c) => c !== country.name
          );
        });
      }
    };
	// to render the continents and it's countries and also search if there is a search query
	const filteredContinents = computed(() => {
      if (!searchQuery.value) {
        return continentsCon.value;
      }

      const lowerQuery = searchQuery.value.trim().toLowerCase();

      return continentsCon.value.filter((continent) => {
        const matchesContinent = continent.name.toLowerCase().includes(lowerQuery);
        const matchingCountries = continent.countries.filter((country) =>
          country.name.toLowerCase().includes(lowerQuery)
        );

        if (matchesContinent || matchingCountries.length > 0) {
          return {
            ...continent,
            countries: matchesContinent ? continent.countries : matchingCountries,
          };
        }

        return false;
      });
    });


</script>

<style>
.v-expansion-panel-title__icon {
	font-size: 9px;
}

.v-expansion-panel-text__wrapper {
  padding: 0;
}
.v-expansion-panel{
	border-radius: 0;
	background-color: transparent;
}
.v-expansion-panel-title {
  border-radius: 0;
  padding: 0;
}
.v-expansion-panel-title:hover > .v-expansion-panel-title__overlay {
  opacity: 0;
}
.v-expansion-panel:not(:first-child)::after {
  border: 0;
}
.v-expansion-panel-text {
  border-radius: none;
  margin-left: 20px;
}
.v-expansion-panel__shadow {
  box-shadow: none;
}
.v-expansion-panel--active:not(:first-child),
.v-expansion-panel--active + .v-expansion-panel {
  margin-top: 0;
}
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
