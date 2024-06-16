<template>
	<div>
		<p style="color: #000; font-size: 20px; font-weight: 600" class="pa-5">Shipping and Delivery</p>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<p style="font-size: 20px; font-weight: 600">How do you want to handle your shipping?</p>

			<v-select
				v-model="selected"
				:items="items"
				item-value="value"
				item-title="none"
				:label="computedLabel"
				outlined
				append-inner-icon=""
				class="my-5"
				:bg-color="selected == 'umoja-logistics' ? '#EDF0EF' : selected == 'manual-shipping' ? '#FDF1ED' : ''"
			>
				<template v-slot:selection="{ item }">
					<v-list-item>
						<div class="d-flex py-2">
							<v-avatar class="mr-4" size="50" :color="selected == 'manual-shipping' ? '#fff' : '#fff'">
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
			</v-select>
		<template v-if="selected">
				<!-- If manuel shipping is selected -->
			<v-card v-if="selected == 'manual-shipping'" class="my-5 pa-6 cardStyle" flat>
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
						<v-btn @click="vendorStore.renderRate = true" v-if="shippingZones.length == 0"
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
						<v-btn @click="vendorStore.renderRate = true" v-if="shippingZones.length > 0"
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
									<span style="font-weight: 500; font-size: 16px; color: #969696">{{ item.name }}</span>
								</span>
							</div>
							<v-btn @click="vendorStore.renderRate = true" class="" size="default" variant="text">
								<v-icon icon="fas fa-chevron-right"></v-icon>
							</v-btn>
						</div>
					</div>
				</div>
			</v-card>
			<!-- if manual-shipping is selected -->
			<v-card v-if="selected == 'manual-shipping'"  class="mx-auto my-5 py-2 px-6 cardStyle" flat >
				<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">
					Expected Delivery Dates <v-icon icon="mdi mdi-information-outline" size="20"></v-icon>
				</p>
				<div class="cardStyle">
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
							<p>{{zone.name}}</p>
						</v-col>
						<v-col cols="3" style="color: #969696">
							<p class="text-truncate" style="max-width: 200px;">{{zone.rates[0].condition}}</p>
							<p>€60.00 - €100.00</p>
							<p v-if="zone.rates.length > 1" style="color: #1273eb">See more rates</p>
						</v-col>
						<v-col>
							<!-- <p>Within Jan 1st to Jan 10th</p> -->
							<!-- <p>8 business days</p> -->
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
			<div v-if="selected == 'umoja-logistics'" class="d-flex justify-end ga-4">
			<v-btn size="default" color="green" flat>
				<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save shipping method</span></v-btn
			>
		</div>
		</template>
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
						<p>Delivery Dates</p>
					</v-col>
				</v-row>
				<v-divider class="my-3"></v-divider>
				<v-row style="font-size: 16px; font-weight: 500; color: #333">
					<v-col cols="3">
						<p>Africa</p>
					</v-col>
					<v-col cols="3" style="color: #969696">
						<p>€60.00 and up</p>
						<p>€60.00 - €100.00</p>
						<p style="color: #1273eb">See more rates</p>
					</v-col>
					<v-col>
						<v-card flat>
							<!-- <div class="d-flex align-center" style="border: 1px solid #e5e5e5; border-radius: 6px; min-width: 300px; "> -->
							<v-date-input class=""
							v-model="model"
							prepend-icon=""
        					append-inner-icon="$calendar"
							label="Select date range"
							multiple="range"
							></v-date-input>
							
						<!-- </div> -->
							<!-- <v-menu open-on-hover :close-on-content-click="false" v-model="menu">
								<template v-slot:activator="{ props }">
									<v-text-field
										v-bind="props"
										
										style="border: 1px solid #e5e5e5; border-radius: 6px; min-width: 300px"
										variant="outlined"
										density="compact"
										hide-details
										placeholder="Select Date"
										:value="formattedDate"
									>
										<template v-slot:append-inner>
											<v-icon color="#2C6E63">mdi mdi-calendar</v-icon>
										</template>
									</v-text-field>
								</template>
								 <v-date-picker style="width: 100%" v-model="dateRange" mode="range" @change="menu = false"></v-date-picker> 
							</v-menu> -->
						</v-card>
					</v-col>
				</v-row>
				<v-row style="font-size: 16px; font-weight: 500; color: #333">
					
					<v-col cols="3">
						<p>Asia</p>
					</v-col>
					<v-col cols="3" style="color: #969696">
						<p>€60.00 and up</p>
						<p>€60.00 - €100.00</p>
					</v-col>
					<v-col> </v-col>
				</v-row>
				<v-row style="font-size: 16px; font-weight: 500; color: #333">
					<v-col cols="3">
						<p>Domestic</p>
					</v-col>
					<v-col cols="3" style="color: #969696">
						<p>€60.00 and up</p>
						<p>€60.00 - €100.00</p>
					</v-col>
					<v-col> </v-col>
				</v-row>
				<v-row style="font-size: 16px; font-weight: 500; color: #333">
					<v-col cols="3">
						<p>International</p>
					</v-col>
					<v-col cols="3" style="color: #969696">
						<p>€60.00 and up</p>
						<p>€60.00 - €100.00</p>
						<p style="color: #1273eb">See more rates</p>
					</v-col>
					<v-col> </v-col>
				</v-row>

				<span class="d-flex align-center mt-5" style="color: #1273eb; font-weight: 600; font-size: 16px; cursor: pointer">
					<v-icon class="mr-2" icon="mdi mdi-plus"></v-icon>
					<span>Create new zone</span>
				</span>

				<div class="mt-8">
					<v-row>
						<v-col cols="6"
							><v-btn size="large" style="border: 1px solid #e5e5e5" flat block @click="deliveryDateModal = false">
								<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
							></v-col
						>
						<v-col cols="6">
							<v-btn size="large" color="green" flat block>
								<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Done </span></v-btn
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
				<v-text-field placeholder="Company" v-model="vendor.business_name" density="comfortable"> </v-text-field>

				<p class="inputLabel">Country/region</p>
				<v-select append-inner-icon="mdi mdi-chevron-down" v-model="vendor.country_name" placeholder="Country/region" density="comfortable"> </v-select>

				<p class="inputLabel">Address</p>

				<v-text-field v-model="vendor.address" placeholder="Enter customer address" density="comfortable"> </v-text-field>

				<p class="inputLabel">Apartment, suite, etc</p>
				<v-text-field placeholder="Apartment, suite, etc" density="comfortable"> </v-text-field>
			</div>
			<div class="px-7">
				<v-row class="mt-0">
					<v-col>
						<p class="inputLabel">City</p>
						<v-text-field placeholder="Enter city" v-model="vendor.city" density="comfortable"> </v-text-field
					></v-col>
					<v-col>
						<p class="inputLabel">State</p>
						<v-text-field v-model="vendor.state" placeholder="Select State" density="comfortable"> </v-text-field>
					</v-col>
					<v-col>
						<p class="inputLabel">Zipcode</p>

						<v-text-field placeholder="Enter last name" density="comfortable"> </v-text-field
					></v-col>
				</v-row>

				<p class="inputLabel">Phone</p>
				<v-text-field v-model="vendor.busniess_phone_number" append-inner-icon="mdi mdi-phone" placeholder="NG" density="comfortable"> </v-text-field>

				<div class="py-4">
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
				<v-text-field v-model="vendor.business_name" placeholder="Company" density="comfortable"> </v-text-field>

				<p class="inputLabel">Country/region</p>
				<v-select v-model="vendor.country_name" append-inner-icon="mdi mdi-chevron-down" placeholder="Country/region" density="comfortable"> </v-select>

				<p class="inputLabel">Address</p>

				<v-text-field v-model="vendor.address" placeholder="Enter customer address" density="comfortable"> </v-text-field>

				<p class="inputLabel">Apartment, suite, etc</p>
				<v-text-field placeholder="Apartment, suite, etc" density="comfortable"> </v-text-field>
			</div>
			<div class="px-7">
				<v-row class="">
					<v-col>
						<p class="inputLabel">City</p>
						<v-text-field v-model="vendor.city" placeholder="Enter city" density="comfortable"> </v-text-field
					></v-col>
					<v-col>
						<p class="inputLabel">State</p>
						<v-select v-model="vendor.state" append-inner-icon="mdi mdi-chevron-down" placeholder="Select State" density="comfortable"> </v-select>
					</v-col>
					<v-col>
						<p class="inputLabel">Zipcode</p>

						<v-text-field placeholder="Enter last name" density="comfortable"> </v-text-field
					></v-col>
				</v-row>

				<p class="inputLabel">Phone</p>
				<v-text-field v-model="vendor.busniess_phone_number" append-inner-icon="mdi mdi-phone" placeholder="NG" density="comfortable"> </v-text-field>

				<div class="py-4">
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
			</div>
		</v-sheet>
	</v-dialog>
</template>

<script setup>
import { useVendorStore } from "~/stores/vendorStore";
import { VDateInput } from 'vuetify/lib/labs/VDateInput'
import { useMyVendorShippingStore } from "~/stores/vendorShipping";
import {ref} from 'vue'

			
const model = ref(null)
const vendorStore = useVendorStore()
const vendor = ref(vendorStore.vendor.vendor_details)
const shippingStore = useMyVendorShippingStore()
const selected = ref(vendorStore.vendor.vendor_details.shipping_method.type)
const shippingZones = computed(() => shippingStore.shippingZones)

onMounted(async () => {
	if(selected.value = "manual-shipping"){
		shippingStore.shippingZones = await getShipping()
	}
});

const localDeliveryModal = ref(false)
const localPickupModal = ref(false)
const savePackageModal = ref(false)
const printSlipModal = ref(false)
const deliveryDateModal = ref(false)
const menu = ref(false)
const dateRange = ref([]) // { start: new Date(), end: new Date() },
const items = [
				{
					value: "umoja-logistics",
					text: "Umoja Logistics",
					description: "Let Umoja handle your entire business logistics and make it easier for you",
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1717407683/umoja/favicon_fpqa9y.png",
					none: "",
				},
				{
					value: "manual-shipping",
					text: "Manual Shipping",
					description: "The business owners handles everything concerns shipping their product",
					icon: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1718096905/umoja/Hand_Stars_ezru3e.svg",
					none: "",
				},
			]

		const computedLabel = computed(() => {
			return selected.value ? "" : "Select Shipping Method";
		})
		const computedLabel1 = computed(() => {
			return menu.value ? "" : "Select date";
		})

		// formattedDate() {
		// 	const options = { year: "numeric", month: "long", day: "numeric" };
		// 	const start = this.dateRange.start.toLocaleDateString(undefined, options);
		// 	const end = this.dateRange.end.toLocaleDateString(undefined, options);
		// 	return `${start} - ${end}`;
		// },
		const formattedDate = computed(() => {
			if (dateRange.value.length === 2) {
				const [start, end] = dateRange.value;
				return `${formatDate.value(start)} - ${formatDate.value(end)}`;
			}
			return "";
		})

		function updateDate(value) {
			dateRange.value = value;
			menu.value = false;
		}
		function openMenu() {
			menu.value = true;
		}
		function formatDate(date) {
			if (!date) return "";
			const options = { year: "numeric", month: "short", day: "numeric" };
			return new Date(date).toLocaleDateString(undefined, options);
		}

		const data = {
			name: "Africa Zone ",
			contient: "Africa",
			shipping_method_id: 1,
			countries: ["Nigeria","Kenya","South Africa"],
			delivery_date_range: {
				"start": "2024-07-01 00:00:00",
				"end": "2024-07-10 23:59:59"
			},
			local_delivery_company: "Africa Delivery Co.",
			local_delivery_address: "1234 Delivery Rd.",
			local_delivery_country_name: "Nigeria",
			local_delivery_city: "Lagos",
			local_delivery_state: "Lagos State",
			local_delivery_apartment: "Suite 102",
			local_delivery_zipcode: "100001",
			local_delivery_phone_number: "+234-123-456-78901",
			local_pickup_company: "Africa Pickup Co.",
			local_pickup_address: "5678 Pickup Blvd.",
			local_pickup_country_name: "Nigeria",
			local_pickup_city: "Abuja",
			local_pickup_state: "FCT",
			local_pickup_apartment: "Apt 203",
			local_pickup_zipcode: "900001",
			local_pickup_phone_number: "+234-098-765-4321"
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
