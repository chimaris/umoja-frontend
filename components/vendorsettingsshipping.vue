<template>
	<div>
		<p style="color: #000; font-size: 20px; font-weight: 600" class="pa-5">Shipping and Delivery</p>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<p style="font-size: 20px; font-weight: 600">Set Up Your Manual Shipping.</p>

			<!-- <v-select
				v-model="selected"
				:items="items"
				item-value="value"
				item-title="none"
				:label="computedLabel"
				outlined
				append-inner-icon=""
				class="my-5"
				:bg-color="selected == 'umoja logistics' ? '#EDF0EF' : selected == 'manual shipping' ? '#FDF1ED' : ''"
			>
				<template v-slot:selection="{ item }">
					<v-list-item>
						<div class="d-flex py-2">
							<v-avatar class="mr-4" size="50" :color="selected == 'manual shipping' ? '#fff' : '#fff'">
								<v-img height="24" width="24" :src="item.raw.icon" />
							</v-avatar>
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">{{ item.raw.text }}</p>
								<p style="font-size: 14px; font-weight: 400; color: #333333">{{ item.raw.description }}</p>
							</div>
						</div>
					</v-list-item>
				</template>
				<template v-slot:item="{ props, item }">
					<v-list-item v-bind="props">
						<div class="d-flex py-2">
							<v-avatar class="mr-4" size="50" :color="item.raw.value == 'manual-shipping' ? '#FDF1ED' : '#fff'">
								<v-img height="24" width="24" :src="item.raw.icon" />
							</v-avatar>
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">{{ item.raw.text }}</p>
								<p style="font-size: 14px; font-weight: 400; color: #333333">{{ item.raw.description }}</p>
							</div>
						</div>
					</v-list-item>
				</template>
			</v-select> -->
			<!-- If manuel shipping is selected -->
			<v-card class="my-5 pa-6 cardStyle" flat>
				<div class="d-flex justify-space-between align-center w-100 mb-4">
					<div>
						<p style="font-size: 18px; font-weight: 600; color: #333">Shipping <v-icon icon="mdi mdi-information-outline" size="20"></v-icon></p>
						<p style="font-size: 16px; font-weight: 500; color: #969696">Choose where you ship and how much you charge for shipping at checkout.</p>
					</div>
					<div>
						<!-- <v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3"> New Profile </v-btn> -->
					</div>
				</div>
				<div class="" flat style="border: 1px solid #cecece; border-radius: 15px">
					<div class="d-flex justify-space-between align-center w-100 pa-4">
						<p style="font-size: 18px; font-weight: 600; color: #333">General Shipping Rates</p>
						<v-btn
							@click="navTo()"
							v-if="shippingZones.length == 0"
							variant="text"
							class="ml-4 menubar text-grey-darken-3 d-flex align-center"
							size="default"
							style="font-weight: 600; font-size: 16px"
						>
							<v-img
								src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718099894/umoja/Pen_2_cdzgaq.svg"
								contain
								class="mr-1"
								width="20"
								height="20"
							></v-img>
							Create Profile
						</v-btn>
						<v-btn
							@click="navTo()"
							v-if="shippingZones.length > 0"
							variant="text"
							class="ml-4 menubar text-grey-darken-3 d-flex align-center"
							size="default"
							style="font-weight: 600; font-size: 16px"
						>
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
					<v-divider v-if="shippingZones.length > 0"></v-divider>

					<div class="pa-4" v-if="shippingZones.length > 0">
						<p style="font-size: 16px; font-weight: 600">Rates for</p>

						<div class="d-flex justify-space-between align-center">
							<div>
								<span v-for="item in shippingZones" :key="item" class="d-flex align-center mt-1">
									<v-icon class="mr-2" icon="mdi mdi-web"></v-icon>
									<span style="font-weight: 500; font-size: 16px; text-transform: capitalize; color: #969696">{{ item.name }}</span>
								</span>
							</div>
							<v-btn @click="navTo()" class="" size="default" variant="text">
								<v-icon icon="fas fa-chevron-right"></v-icon>
							</v-btn>
						</div>
					</div>
				</div>
			</v-card>
			<!-- if manual-shipping is selected -->
			<v-card class="mx-auto my-5 py-2 pb-5 px-6 cardStyle" flat>
				<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">
					Expected Delivery Dates <v-icon icon="mdi mdi-information-outline" size="20"></v-icon>
				</p>
				<div class="cardStyle mb-5">
					<div class="d-flex justify-space-between align-center w-100">
						<div class="d-flex py-2">
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">Manual delivery dates</p>
								<p style="font-size: 16px; font-weight: 500; color: #969696">Show delivery dates at checkout</p>
							</div>
						</div>
						<div>
							<v-btn
								@click="deliveryDateModal = true"
								style="border: 1px solid #e5e5e5"
								variant="outlined"
								size="default"
								class="ml-4 menubar text-grey-darken-3"
							>
								Update
							</v-btn>
						</div>
					</div>
				</div>
				<div class="cardStyle">
					<v-row style="font-size: 16px; font-weight: 500; color: #333">
						<v-col cols="3">
							<p>Region</p>
						</v-col>
						<v-col cols="3" style="color: #969696">
							<p>Rates</p>
						</v-col>
						<v-col>
							<p>Delivery Dates</p>
						</v-col>
					</v-row>
					<v-divider class="my-3"></v-divider>
					<v-row v-for="zone in shippingZones" :key="zone" style="font-size: 16px; font-weight: 500; color: #333">
						<v-col cols="3">
							<p style="text-transform: capitalize">{{ zone?.name }}</p>
						</v-col>
						<v-col cols="3" style="color: #969696">
							<p v-if="zone?.rates[0]?.minimum_price">
								from {{ formattedPrice(zone?.rates[0]?.minimum_price) }}
								<span v-if="zone?.rates[0]?.maximum_price">to {{ formattedPrice(zone?.rates[0]?.maximum_price) }}</span>
							</p>
							<p v-if="zone?.rates[0]?.minimum_weight">
								from {{ zone?.rates[0]?.minimum_weight }}Kg <span v-if="zone?.rates[0]?.maximum_weight">to {{ zone?.rates[0]?.maximum_weight }}</span>
							</p>
							<!-- <p>€60.00 - €100.00</p> -->
							<!-- <p v-if="zone?.rates[0]?.minimum_price">from {{formattedPrice(zone?.rates[0]?.minimum_price)}} <span v-if="zone?.rates[0]?.maximum_price">to {{ formattedPrice(zone?.rates[0]?.maximum_price) }}</span></p> -->
							<!-- <p v-if="zone?.rates.length > 1" style="color: #1273eb">See more rates</p> -->
						</v-col>
						<v-col>
							<!-- <p>Within Jan 1st to Jan 10th</p> -->
							<p>{{ zone?.delivery_date_range }}</p>
						</v-col>
					</v-row>
				</div>
			</v-card>

			<!-- If Umoja shipping is selected -->
			<!-- <v-card v-if="selected == 'manual-shipping'" class="mx-auto my-5 pa-6 cardStyle" flat >
				<p style="font-size: 18px; font-weight: 600; color: #333">
					Expected Delivery Dates <v-icon icon="mdi mdi-information-outline" size="20"></v-icon>
				</p>
				<p style="font-size: 16px; font-weight: 500; color: #969696">Choose where you ship and how much you charge for shipping at checkout.</p>
			</v-card> -->

			<v-card class="my-5 pa-6 cardStyle" flat style="justify-content: between">
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 18px; font-weight: 600; color: #333">
							Local Delivery <v-icon icon="mdi mdi-information-outline" size="20"></v-icon>
						</p>
						<p style="font-size: 16px; font-weight: 500; color: #969696">Deliver orders directly to customers in the area.</p>
					</div>
					<div>
						<v-btn
							@click="localDeliveryModal = true"
							style="border: 1px solid #e5e5e5"
							variant="outlined"
							size="default"
							class="ml-4 menubar text-grey-darken-3"
						>
							Setup
						</v-btn>
					</div>
				</div>
			</v-card>

			<v-card class="my-5 pa-6 cardStyle" flat style="justify-content: between">
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 18px; font-weight: 600; color: #333">Local Pickups <v-icon icon="mdi mdi-information-outline" size="20"></v-icon></p>
						<p style="font-size: 16px; font-weight: 500; color: #969696">Deliver orders directly to customers in the area.</p>
					</div>
					<div>
						<v-btn
							@click="localPickupModal = true"
							style="border: 1px solid #e5e5e5"
							variant="outlined"
							size="default"
							class="ml-4 menubar text-grey-darken-3"
						>
							Setup
						</v-btn>
					</div>
				</div>
			</v-card>

			<!-- <v-card class="mx-auto my-5 pa-6 cardStyle" flat rel="noopener" style="justify-content: between">
				<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">
					Saved Packages <v-icon icon="mdi mdi-information-outline" size="20"></v-icon>
				</p>
				<div class="cardStyle">
					<div class="d-flex justify-space-between align-center w-100">
						<div class="d-flex py-2">
							<v-avatar class="mr-4" size="50" color="#EDEDED">
								<v-img width="18" height="18" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718101987/umoja/Vector_chjtbc.svg"></v-img>
							</v-avatar>
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">Beispielbox</p>
								<p style="font-size: 16px; font-weight: 500; color: #969696">22 × 13.7 × 4.2 cm, 0 kg</p>
							</div>
						</div>
						<div class="d-flex">
							<v-btn class="mr-4" size="small" text="Default package" variant="tonal"></v-btn>
							<v-menu>
								<template v-slot:activator="{ props }">
									<v-btn class="pa-0" flat icon="mdi mdi-dots-horizontal" v-bind="props"></v-btn> 
									<v-icon icon="mdi mdi-dots-horizontal" v-bind="props"></v-icon>
								</template>

								<v-card class="bg-white d-flex flex-column text-left pa-4 h-auto">
									<span class="pa-2 text-left d-flex">
										<div class="mr-4" style="width: 20px; height: 20px">
											<v-img
												src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718099894/umoja/Pen_2_cdzgaq.svg"
												contain
												width="100"
												height="100"
											></v-img>
										</div>

										<span style="font-size: 14px; font-weight: 600; color: #969696">Edit</span>
									</span>
									<span class="pa-2 text-left d-flex">
										<div class="mr-4" style="width: 20px; height: 20px">
											<v-img
												src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718101388/umoja/Clipboard_Check_me7i9x.svg"
												contain
												width="100"
												height="100"
											></v-img>
										</div>
										<span style="font-size: 14px; font-weight: 600; color: #969696">Set as default</span>
									</span>
									<span class="pa-2 text-left d-flex">
										<div class="mr-4" style="width: 20px; height: 20px">
											<v-img
												src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718101570/umoja/Trash_Bin_Trash_m6u5on.svg"
												contain
												width="100"
												height="100"
											></v-img>
										</div>
										<span style="font-size: 14px; font-weight: 600; color: #c20052">Delete</span>
									</span>
								</v-card>
							</v-menu>
						</div>
					</div>
					<v-alert
						text="Used to calculate shipping rates at checkout and pre-selected when buying labels"
						icon="mdi mdi-information-outline"
						type="warning"
						variant="tonal"
						class="mt-5 pa-3"
						style="font-size: 16px; font-weight: 400"
					></v-alert>

					<span
						@click="savePackageModal = true"
						class="d-flex align-center mt-5"
						style="color: #1273eb; font-weight: 600; font-size: 16px; cursor: pointer"
					>
						<v-icon class="mr-2" icon="mdi mdi-plus"></v-icon>
						<span>Saved Packages</span>
					</span>
				</div>
			</v-card> -->

			<v-card class="mx-auto my-5 py-2 px-6 cardStyle" flat style="justify-content: between">
				<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">
					Packing Slipss <v-icon icon="mdi mdi-information-outline" size="20"></v-icon>
				</p>
				<div class="cardStyle">
					<div class="d-flex justify-space-between align-center w-100">
						<div class="d-flex py-2">
							<v-avatar class="mr-4" size="50" color="#EDEDED">
								<v-img width="18" height="18" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718102214/umoja/Vector_ncodnt.svg"></v-img>
							</v-avatar>
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">Packing Slip Template</p>
								<p style="font-size: 16px; font-weight: 500; color: #969696">See what it looks like</p>
							</div>
						</div>
						<div>
							<v-btn
								@click="printSlipModal = true"
								style="border: 1px solid #e5e5e5"
								variant="outlined"
								size="default"
								class="ml-4 menubar text-grey-darken-3"
							>
								View
							</v-btn>
						</div>
					</div>
				</div>
			</v-card>
			<!-- <div v-if="!vendorStore.vendor.vendor_details.shipping_method" class="d-flex flex-column align-end justify-end ga-2">
					<p class="" style="color: red; font-size: 16px">{{shippingError}}</p>
					<v-btn @click="saveZone()" size="default" color="green" flat>
						<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save shipping method</span></v-btn
					>
				</div>
				<div @click="editZone()" v-else class="d-flex flex-column align-end justify-end ga-2">
					<p class="" style="color: red; font-size: 16px">{{shippingError}}</p>
					<v-btn size="default" color="green" flat>
						<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Update shipping method</span></v-btn
					>
				</div> -->
		</div>
	</div>

	<v-dialog width="auto" v-model="savePackageModal">
		<v-sheet width="100vw" max-width="744px" class="cardStyle px-0">
			<div class="px-6 d-flex justify-space-between">
				<div class="d-flex align-center ga-3">
					<v-avatar color="#EDF3F0" size="50" class="mr-2">
						<v-img width="20" height="20" color="green" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718102885/umoja/Vector_mq9lgb.svg" />
					</v-avatar>
					<p style="color: #333; font-size: 24px; font-weight: 600; line-height: 20px; letter-spacing: -0.24px">Add Package</p>
				</div>
				<v-icon @click="savePackageModal = false" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
			</div>
			<v-divider class="my-3"></v-divider>
			<div class="px-6">
				<div>
					<p class="inputLabel">Package name</p>
					<v-text-field :rules="inputRules" placeholder="Enter package name" density="comfortable"></v-text-field>
				</div>
				<div class="inputLabel">
					<p class="my-2">Package type</p>
					<v-radio-group>
						<v-radio color="#00966D" label="Box" value="one"></v-radio>
						<v-radio color="#00966D" label="Envelope" value="two"></v-radio>
						<v-radio color="#00966D" label="Soft package or satchel" value="three"></v-radio>
					</v-radio-group>
				</div>

				<v-row dense>
					<v-col cols="2">
						<p class="inputLabel">Length</p>
						<v-text-field density="comfortable"> </v-text-field
					></v-col>
					<v-col cols="2">
						<p class="inputLabel">Width</p>
						<v-text-field density="comfortable"> </v-text-field
					></v-col>
					<v-col cols="2">
						<p class="inputLabel">Height</p>
						<v-text-field density="comfortable"> </v-text-field
					></v-col>
					<v-col cols="6">
						<p class="inputLabel text-center">Weight (Optional)</p>
						<v-row dense>
							<v-col cols="3.5">
								<v-select :items="['cm', 'c']" label="cm" outlined append-outer-icon="mdi mdi-chevron-down" dense density="comfortable"></v-select>
							</v-col>
							<v-col cols="5">
								<v-select
									:items="['kg', 'g']"
									label="Select State"
									outlined
									append-outer-icon="mdi mdi-chevron-down"
									dense
									density="comfortable"
								></v-select>
							</v-col>
							<v-col cols="3.5">
								<v-select :items="['kg', 'g']" label="kg" outlined append-outer-icon="mdi mdi-chevron-down" dense density="comfortable"></v-select>
							</v-col>
						</v-row>
					</v-col>
				</v-row>

				<v-checkbox hide-details density="comfortable" color="#00966D">
					<template v-slot:label>
						<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2">
							<p>Use as default package</p>
							<p>Used to calculate rates at checkout and pre-selected when buying labels</p>
						</div>
					</template>
				</v-checkbox>

				<div class="mt-8">
					<v-row>
						<v-col cols="6"
							><v-btn size="large" style="border: 1px solid #e5e5e5" flat block>
								<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
							></v-col
						>
						<v-col cols="6">
							<v-btn size="large" color="green" flat block>
								<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Add Package </span></v-btn
							></v-col
						>
					</v-row>
				</div>
			</div>
		</v-sheet>
	</v-dialog>
	<v-dialog width="auto" height="auto" v-model="printSlipModal">
		<v-sheet width="100vw" max-width="1000px" height="auto" class="cardStyle px-0 bg-black">
			<div class="px-6 d-flex justify-end">
				<v-icon @click="printSlipModal = false" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
			</div>
			<div class="px-16 py-8 bg-white mx-auto" style="width: 793px">
				<div class="d-flex justify-space-between align-center mb-4">
					<h3 style="font-size: 22px; font-weight: 600; text-transform: uppercase; color: #333; line-height: 31px">Thatdesignpro</h3>
					<div style="font-weight: 500; font-size: 12px; color: #969696">
						<p>Order #9999</p>
						<p>June 2, 2024</p>
					</div>
				</div>
				<div class="d-flex ga-16">
					<div>
						<h4 class="mb-1" style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: #333; line-height: 15px; letter-spacing: 3%">
							Delivery To
						</h4>
						<div style="font-weight: 500; font-size: 12px; color: #969696">
							<p>Steve Shipper</p>
							<p>Shipping Company</p>
							<p>123 Shipping Street</p>
							<p>Shippington KY 40003</p>
							<p>United States</p>
							<p>555-555-SHIP</p>
						</div>
					</div>

					<div>
						<h4 class="mb-1" style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: #333; line-height: 15px; letter-spacing: 3%">
							Bill To
						</h4>
						<div style="font-weight: 500; font-size: 12px; color: #969696">
							<p>Bob Biller</p>
							<p>Thatdesignpro</p>
							<p>123 Design Street</p>
							<p>Design City CA 54321</p>
							<p>United States</p>
						</div>
					</div>
				</div>
				<v-divider class="my-3 border-opacity-100" :thickness="2" color="#000"></v-divider>

				<div class="d-flex justify-space-between my-3">
					<h4 style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: #333; line-height: 15px; letter-spacing: 3%">items</h4>
					<h4 style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: #333; line-height: 15px; letter-spacing: 3%">quantity</h4>
				</div>
				<div class="d-flex flex-column ga-3">
					<div v-for="n in 2" :key="n" class="d-flex justify-end">
						<div class="d-flex justify-space-between w-75">
							<div>
								<p style="font-weight: 500; font-size: 12px; color: #333">Aviator sunglasses</p>
								<p style="font-weight: 500; font-size: 12px; color: #969696">SKU2006-001</p>
							</div>
							<div>
								<p style="font-weight: 500; font-size: 12px; color: #565656">0 of 0</p>
							</div>
						</div>
					</div>
				</div>
				<v-divider class="my-3 border-opacity-100" :thickness="2" color="#000"></v-divider>
				<div class="my-3">
					<h4 class="mb-1" style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: #333; line-height: 15px; letter-spacing: 3%">
						delivery instructions
					</h4>
					<p style="font-weight: 500; font-size: 12px; color: #969696">Please deliver to my front door and ring the door bell.</p>
				</div>
				<div class="text-center">
					<p class="mb-2" style="font-weight: 500; font-size: 12px; color: #969696">Thank you for shopping with us!</p>
					<h4 style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: #333; line-height: 15px; letter-spacing: 3%">
						Thatdesignpro
					</h4>
					<p style="font-weight: 500; font-size: 12px; color: #969696">Humboldtgasse 12, 1100 , Austria</p>
					<p style="font-weight: 500; font-size: 12px; color: #969696">david.obuse@gmail.com</p>
					<p style="font-weight: 500; font-size: 12px; color: #969696">45edcc-51.myshopify.com</p>
				</div>
			</div>
			<div class="mt-8 mx-auto" style="width: 793px">
				<v-row>
					<v-col cols="6"
						><v-btn size="large" style="border: 1px solid #e5e5e5; background-color: transparent" flat block>
							<span style="color: #fff; font-size: 14px; font-weight: 600; line-height: 20px"> Download PDF</span></v-btn
						></v-col
					>
					<v-col cols="6">
						<v-btn size="large" color="green" flat block>
							<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Print </span></v-btn
						></v-col
					>
				</v-row>
			</div>
		</v-sheet>
	</v-dialog>
	<v-dialog width="auto" v-model="deliveryDateModal">
		<v-sheet width="100vw" max-width="800px" class="cardStyle px-6 py-10">
			<div>
				<v-row style="font-size: 16px; font-weight: 500; color: #333">
					<v-col cols="3">
						<p>Region</p>
					</v-col>
					<v-col cols="3" style="color: #969696">
						<p>Rates</p>
					</v-col>
					<v-col>
						<p>No. of Delivery Days</p>
					</v-col>
				</v-row>
				<v-divider class="my-3"></v-divider>
				<v-row v-for="zone in shippingZones" :key="zone" style="font-size: 16px; font-weight: 500; color: #333">
					<v-col cols="3">
						<p style="text-transform: capitalize">{{ zone?.name }}</p>
					</v-col>
					<v-col cols="3" style="color: #969696">
						<p v-if="zone?.rates[0]?.minimum_price">
							from {{ formattedPrice(zone?.rates[0]?.minimum_price) }}
							<span v-if="zone?.rates[0]?.maximum_price">to {{ formattedPrice(zone?.rates[0]?.maximum_price) }}</span>
						</p>
						<p v-if="zone?.rates[0]?.minimum_weight">
							from {{ zone?.rates[0]?.minimum_weight }}Kg <span v-if="zone?.rates[0]?.maximum_weight">to {{ zone?.rates[0]?.maximum_weight }}</span>
						</p>
						<!-- <p>€60.00 - €100.00</p> -->
						<!-- <p style="color: #1273eb">See more rates</p> -->
					</v-col>
					<v-col>
						<v-card flat>
							<div class="d-flex my-2 align-center ga-1">
								<div class="d-flex bg-grey-lighten-3" style="border-radius: 6px">
									<v-text-field
										style="max-width: 50px"
										class="mr-3 rounded-lg bg-grey-lighten-3"
										density="compact"
										hide-details
										variant="outline"
										v-model="zone.delivery_date_range"
									></v-text-field>
									<div>
										<v-btn
											@click="zone.delivery_date_range++"
											size="x-small"
											height="18px"
											color="grey-lighten-3"
											flat
											class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg"
											icon="mdi mdi-menu-up"
										></v-btn>
										<v-btn
											@click="zone.delivery_date_range = zone.delivery_date_range <= 0 ? zone.delivery_date_range : zone.delivery_date_range - 1"
											size="x-small"
											height="18px"
											color="grey-lighten-3"
											flat
											class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg"
											icon="mdi mdi-menu-down"
										></v-btn>
									</div>
								</div>
								<p>Business working days</p>
							</div>
						</v-card>
					</v-col>
				</v-row>

				<!-- <span class="d-flex align-center mt-5" style="color: #1273eb; font-weight: 600; font-size: 16px; cursor: pointer">
					<v-icon class="mr-2" icon="mdi mdi-plus"></v-icon>
					<span>Create new zone</span>
				</span> -->

				<div class="mt-8">
					<v-row>
						<v-col cols="6"
							><v-btn size="large" style="border: 1px solid #e5e5e5" flat block @click="deliveryDateModal = false">
								<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
							></v-col
						>
						<v-col cols="6">
							<v-btn @click="updateDeliveryDays()" :disabled="updating" size="large" color="green" flat block>
								<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px">{{ updating ? "Saving" : "Done" }} </span></v-btn
							></v-col
						>
					</v-row>
				</div>
			</div>
		</v-sheet>
	</v-dialog>
	<v-dialog width="auto" v-model="localDeliveryModal">
		<v-sheet width="100vw" max-width="669px" class="cardStyle px-0">
			<div class="px-6 d-flex justify-space-between">
				<div class="d-flex align-center">
					<v-avatar color="#EDF3F0" size="70" class="mr-2">
						<v-img width="28" height="20" color="green" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718105027/umoja/Vector_hsb576.svg" />
					</v-avatar>
					<div class="mx-4">
						<p style="color: #333; font-size: 24px; font-weight: 600; line-height: 20px; letter-spacing: -0.24px">Local Delivery</p>
						<p style="color: #969696; font-size: 16px; font-weight: 500; line-height: 20px; letter-spacing: -0.16px" class="mt-2">
							Enter office address for local delivery
						</p>
					</div>
				</div>
				<v-icon @click="localDeliveryModal = false" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
			</div>
			<v-divider class="my-4"></v-divider>

			<div class="px-7">
				<p class="inputLabel">Company</p>
				<v-text-field placeholder="Company" v-model="localDelivery[0].local_delivery_company" density="comfortable"> </v-text-field>

				<p class="inputLabel">Country/region</p>
				<v-select v-model="localDelivery[0].local_delivery_country_name" :items="allCountries" placeholder="Country/region" density="comfortable">
				</v-select>

				<p class="inputLabel">Address</p>

				<v-text-field v-model="localDelivery[0].local_delivery_address" placeholder="Enter customer address" density="comfortable"> </v-text-field>

				<p class="inputLabel">Apartment, suite, etc</p>
				<v-text-field v-model="localDelivery[0].local_delivery_apartment" placeholder="Apartment, suite, etc" density="comfortable"> </v-text-field>
			</div>
			<div class="px-7">
				<v-row class="mt-0">
					<v-col>
						<p class="inputLabel">City</p>
						<v-text-field placeholder="Enter city" v-model="localDelivery[0].local_delivery_city" density="comfortable"> </v-text-field
					></v-col>
					<v-col>
						<p class="inputLabel">State</p>
						<v-select
							v-model="localDelivery[0].local_delivery_state"
							:items="deliveryAddress"
							:loading="loadingStates"
							color="green"
							placeholder="Select State"
							density="comfortable"
						>
						</v-select>
					</v-col>
					<v-col>
						<p class="inputLabel">Zipcode</p>

						<v-text-field v-model="localDelivery[0].local_delivery_zipcode" placeholder="Enter last name" density="comfortable"> </v-text-field
					></v-col>
				</v-row>

				<p class="inputLabel">Phone</p>
				<v-text-field v-model="localDelivery[0].local_delivery_phone_number" append-inner-icon="mdi mdi-phone" placeholder="NG" density="comfortable">
				</v-text-field>

				<div class="py-4">
					<p class="mb-2" style="color: red; font-size: 16px">{{ deliveryError }}</p>
					<v-row>
						<v-col cols="6"
							><v-btn @click="localDeliveryModal = false" size="large" style="border: 1px solid #e5e5e5" flat block>
								<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
							></v-col
						>
						<v-col cols="6">
							<v-btn @click="editDeliveryAddress()" :disabled="loading" size="large" color="green" flat block>
								<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> {{ loading ? "Saving" : "Save" }}</span></v-btn
							></v-col
						>
					</v-row>
				</div>
			</div>
		</v-sheet>
	</v-dialog>
	<v-dialog width="auto" v-model="localPickupModal">
		<v-sheet width="100vw" max-width="669px" class="cardStyle px-0">
			<div class="px-6 d-flex justify-space-between">
				<div class="d-flex align-center">
					<v-avatar color="#EDF3F0" size="70" class="mr-2">
						<v-img
							width="40"
							height="40"
							color="green"
							src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718105858/umoja/Routing_2_wvo6mc.svg"
						/>
					</v-avatar>
					<div class="mx-4">
						<p style="color: #333; font-size: 24px; font-weight: 600; line-height: 20px; letter-spacing: -0.24px">Local Pickups</p>
						<p style="color: #969696; font-size: 16px; font-weight: 500; line-height: 20px; letter-spacing: -0.16px" class="mt-2">
							Enter office address for local pickups
						</p>
					</div>
				</div>
				<v-icon @click="localPickupModal = false" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
			</div>
			<v-divider class="my-4"></v-divider>

			<div class="px-7">
				<p class="inputLabel">Company</p>
				<v-text-field v-model="localPickup[0].local_pickup_company" placeholder="Company" density="comfortable"> </v-text-field>

				<p class="inputLabel">Country/region</p>
				<v-select v-model="localPickup[0].local_pickup_country_name" :items="allCountries" placeholder="Country/region" density="comfortable">
				</v-select>

				<p class="inputLabel">Address</p>

				<v-text-field v-model="localPickup[0].local_pickup_address" placeholder="Enter customer address" density="comfortable"> </v-text-field>

				<p class="inputLabel">Apartment, suite, etc</p>
				<v-text-field v-model="localPickup[0].local_pickup_apartment" placeholder="Apartment, suite, etc" density="comfortable"> </v-text-field>
			</div>
			<div class="px-7">
				<v-row class="">
					<v-col>
						<p class="inputLabel">City</p>
						<v-text-field v-model="localPickup[0].local_pickup_phone_number" placeholder="Enter city" density="comfortable"> </v-text-field
					></v-col>
					<v-col>
						<p class="inputLabel">State</p>
						<v-select
							v-model="localPickup[0].local_pickup_state"
							:loading="loadingStates"
							color="green"
							:items="pickupAddress"
							placeholder="Select State"
							density="comfortable"
						>
						</v-select>
					</v-col>
					<v-col>
						<p class="inputLabel">Zipcode</p>

						<v-text-field v-model="localPickup[0].local_pickup_zipcode" placeholder="Enter last name" density="comfortable"> </v-text-field
					></v-col>
				</v-row>

				<p class="inputLabel">Phone</p>
				<v-text-field v-model="localPickup[0].local_pickup_phone_number" append-inner-icon="mdi mdi-phone" placeholder="NG" density="comfortable">
				</v-text-field>

				<div class="py-4">
					<p class="mb-2" style="color: red; font-size: 16px">{{ pickupError }}</p>
					<v-row>
						<v-col cols="6"
							><v-btn @click="localPickupModal = false" size="large" style="border: 1px solid #e5e5e5" flat block>
								<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
							></v-col
						>
						<v-col cols="6">
							<v-btn @click="editPickupAddress()" :disabled="loading" size="large" color="green" flat block>
								<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> {{ loading ? "Saving" : "Save" }}</span></v-btn
							></v-col
						>
					</v-row>
				</div>
			</div>
		</v-sheet>
	</v-dialog>
</template>

<script setup>
import { useVendorStore } from "~/stores/vendorStore";
import { useMyVendorShippingStore } from "~/stores/vendorShipping";
import {
	createDeliveryAddress,
	createPickupAddress,
	getDeliveryAddress,
	getPickupAddress,
	updateDeliveryAddress,
	updatePickupAddress,
} from "~/composables/delivery";
import { ref } from "vue";
import { fetchStates, loadingStates, allCountries } from "~/utils/countryapi";
import { chooseShippingMethod, updateShipping, changeShippingMethod } from "~/composables/usevendorShipping";

const model = ref(null);
const shippingError = ref("");
const savingMethod = ref(false);
const vendorStore = useVendorStore();
const vendor = ref(vendorStore.vendor.vendor_details);
const shippingStore = useMyVendorShippingStore();
const selected = ref(null);
const router = useRouter();
// const selected = ref("")
const shippingZones = computed(() => shippingStore.shippingZones);
const localDeliveryModal = ref(false);
const localPickupModal = ref(false);
const savePackageModal = ref(false);
const printSlipModal = ref(false);
const deliveryDateModal = ref(false);
const menu = ref(false);
const items = [
	{
		value: "umoja logistics",
		text: "Umoja Logistics",
		description: "Let Umoja handle your entire business logistics and make it easier for you",
		icon: "https://res.cloudinary.com/payhospi/image/upload/v1717407683/umoja/favicon_fpqa9y.png",
		none: "",
	},
	{
		value: "manual shipping",
		text: "Manual Shipping",
		description: "The business owners handles everything concerns shipping their product",
		icon: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1718096905/umoja/Hand_Stars_ezru3e.svg",
		none: "",
	},
];

// local delivery address
const localDelivery = ref([]);
const deliveryAddress = ref([]);
const deliveryError = ref("");
const loading = ref(false);
const updating = ref(false);
// local pickup address
const localPickup = ref([]);
const pickupAddress = ref([]);
const pickupError = ref("");

function navTo() {
	router.push("/vendor/dashboard/Settings/Shipping Zone");
}
onMounted(async () => {
	// selected.value = vendorStore.vendor.vendor_details.shipping_method?.name
	shippingStore.shippingZones = [];
	shippingStore.shippingZones = await getShipping();
	localDelivery.value = await getDeliveryAddress();
	if (localDelivery.value?.length == 0) {
		await saveDeliveryAddress();
	}
	localPickup.value = await getPickupAddress();
	if (localPickup.value?.length == 0) {
		await savePickupAddress();
	}
});

watch(
	() => localPickup.value[0]?.local_pickup_country_name,
	async () => {
		pickupAddress.value = await fetchStates(localPickup.value[0].local_pickup_country_name);
	}
);
watch(
	() => localDelivery.value[0]?.local_delivery_country_name,
	async () => {
		deliveryAddress.value = await fetchStates(localDelivery.value[0].local_delivery_country_name);
	}
);
const computedLabel = computed(() => {
	return selected.value ? "" : "Select Shipping Method";
});

async function updateDeliveryDays() {
	updating.value = true;
	const updatePromises = shippingZones.value.map((zone) => {
		const data = {
			delivery_date_range: zone?.delivery_date_range,
		};
		return updateShipping(data, zone?.id);
	});

	await Promise.all(updatePromises);

	shippingStore.shippingZones = await getShipping();
	updating.value = false;
	deliveryDateModal.value = false;
}
async function editDeliveryAddress() {
	const data = {
		local_delivery_company: localDelivery.value[0].local_delivery_company,
		local_delivery_address: localDelivery.value[0].local_delivery_address,
		local_delivery_country_name: localDelivery.value[0].local_delivery_country_name,
		local_delivery_city: localDelivery.value[0].local_delivery_city,
		local_delivery_state: localDelivery.value[0].local_delivery_state,
		local_delivery_apartment: localDelivery.value[0].local_delivery_apartment,
		local_delivery_zipcode: localDelivery.value[0].local_delivery_zipcode,
		local_delivery_phone_number: localDelivery.value[0].local_delivery_phone_number,
	};
	try {
		loading.value = true;
		await updateDeliveryAddress(data, localDelivery.value[0].id);
		localDelivery.value = await getDeliveryAddress();

		deliveryError.value = "";
	} catch (error) {
		if (error.response) {
			deliveryError.value = error.response.data.message || "An error occurred while saving local pickup address.";
		} else if (error.request) {
			deliveryError.value = "No response received from server. Please try again later.";
		} else {
			deliveryError.value = "An error occurred. Please try again later.";
		}
	} finally {
		loading.value = false;
	}
}
async function editPickupAddress() {
	const data = {
		local_pickup_company: localPickup.value[0].local_pickup_company,
		local_pickup_address: localPickup.value[0].local_pickup_address,
		local_pickup_country_name: localPickup.value[0].local_pickup_country_name,
		local_pickup_city: localPickup.value[0].local_pickup_city,
		local_pickup_state: localPickup.value[0].local_pickup_state,
		local_pickup_apartment: localPickup.value[0].local_pickup_apartment,
		local_pickup_zipcode: localPickup.value[0].local_pickup_zipcode,
		local_pickup_phone_number: localPickup.value[0].local_pickup_phone_number,
	};
	try {
		loading.value = true;
		await updatePickupAddress(data, localPickup.value[0].id);
		localPickup.value = await getPickupAddress();
		pickupError.value = "";
	} catch (error) {
		if (error.response) {
			pickupError.value = error.response.data.message || "An error occurred while saving local pickup address.";
		} else if (error.request) {
			pickupError.value = "No response received from server. Please try again later.";
		} else {
			pickupError.value = "An error occurred. Please try again later.";
		}
	} finally {
		loading.value = false;
	}
}
async function saveDeliveryAddress() {
	const data = {
		local_delivery_company: vendor.value.business_name,
		local_delivery_address: vendor.value.address,
		local_delivery_country_name: vendor.value.country_name,
		local_delivery_city: vendor.value.city,
		local_delivery_state: vendor.value.state,
		local_delivery_apartment: "",
		local_delivery_zipcode: "",
		local_delivery_phone_number: vendor.value.busniess_phone_number,
	};
	const res = await createDeliveryAddress(data);
	if (res) {
		localDelivery.value = await getDeliveryAddress();
	}
}
async function savePickupAddress() {
	const data = {
		local_pickup_company: vendor.value.business_name,
		local_pickup_address: vendor.value.address,
		local_pickup_country_name: vendor.value.country_name,
		local_pickup_city: vendor.value.city,
		local_pickup_state: vendor.value.state,
		local_pickup_apartment: "",
		local_pickup_zipcode: "",
		local_pickup_phone_number: vendor.value.busniess_phone_number,
	};
	const res = await createPickupAddress(data);
	if (res) {
		localPickup.value = await getPickupAddress();
	}
}
async function saveZone() {
	const result = await chooseShippingMethod(selected.value, savingMethod);
	if (!result.success) {
		shippingError.value = result.message;
	} else {
		await vendorStore.getUser(vendorStore.vendor.id);
	}
}
async function editZone() {
	const id = vendorStore.vendor.vendor_details.shipping_method.id;
	const result = await changeShippingMethod(id, selected.value, savingMethod);
	if (!result.success) {
		shippingError.value = result.message;
	} else {
		await vendorStore.getUser(vendorStore.vendor.id);
	}
}
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
