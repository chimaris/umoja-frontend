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
			>
				<template v-slot:selection="{ item }">
					<v-list-item>
						<div class="d-flex py-2">
							<v-avatar class="mr-4" size="50" color="#FDF1ED">
								<v-icon>{{ item.raw.icon }}</v-icon>
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
							<v-avatar class="mr-4" size="50" color="#FDF1ED">
								<v-icon>{{ item.raw.icon }}</v-icon>
							</v-avatar>
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">{{ item.raw.text }}</p>
								<p style="font-size: 14px; font-weight: 400; color: #333333">{{ item.raw.description }}</p>
							</div>
						</div>
					</v-list-item>
				</template>
			</v-select>

			<!-- If manuel shipping is selected -->
			<v-card class="my-5 pa-6 cardStyle" flat>
				<div class="d-flex justify-space-between align-center w-100 mb-4">
					<div>
						<p style="font-size: 18px; font-weight: 600; color: #333">Shipping <v-icon icon="mdi mdi-information-outline" size="24"></v-icon></p>
						<p style="font-size: 16px; font-weight: 500; color: #969696">Choose where you ship and how much you charge for shipping at checkout.</p>
					</div>
					<div>
						<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3"> New Profile </v-btn>
					</div>
				</div>
				<div class="" flat style="border: 1px solid #cecece; border-radius: 15px">
					<div class="d-flex justify-space-between align-center w-100 pa-4">
						<p style="font-size: 18px; font-weight: 600; color: #333">General Shipping Rates</p>
						<v-btn variant="text" class="d-flex align-center" style="font-weight: 600; font-size: 16px">
							<v-icon class="mr-2" icon="mdi mdi-border-color"></v-icon>
							<span>Edit</span>
						</v-btn>
					</div>
					<v-divider></v-divider>

					<div class="pa-4">
						<p style="font-size: 16px; font-weight: 600">Rates for</p>

						<div class="d-flex justify-space-between align-center">
							<div>
								<span v-for="item in ['Africa', 'Asia', 'Domestic', 'International']" :key="item" class="d-flex align-center mt-1">
									<v-icon class="mr-2" icon="mdi mdi-web"></v-icon>
									<span style="font-weight: 500; font-size: 16px; color: #969696">{{ item }}</span>
								</span>
							</div>
							<v-icon class="mr-2" icon="fas fa-chevron-right"></v-icon>
						</div>
					</div>
				</div>
			</v-card>

			<v-card class="mx-auto my-5 py-2 px-6 cardStyle" flat rel="noopener" style="justify-content: between">
				<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">
					Expected Delivery Dates <v-icon icon="mdi mdi-information-outline" size="24"></v-icon>
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
							<p>Within Jan 1st to Jan 10th</p>
							<p>8 business days</p>
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
						<v-col>
							<p>Within Jan 1st to Jan 10th</p>
							<p>8 business days</p>
						</v-col>
					</v-row>
					<v-row style="font-size: 16px; font-weight: 500; color: #333">
						<v-col cols="3">
							<p>Domestic</p>
						</v-col>
						<v-col cols="3" style="color: #969696">
							<p>€60.00 and up</p>
							<p>€60.00 - €100.00</p>
						</v-col>
						<v-col>
							<p>Within Jan 1st to Jan 10th</p>
							<p>8 business days</p>
						</v-col>
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
						<v-col>
							<p>Within Jan 1st to Jan 10th</p>
							<p>8 business days</p>
						</v-col>
					</v-row>
				</div>
			</v-card>

			<!-- If Umoja shipping is selected -->
			<v-card class="mx-auto my-5 pa-6 cardStyle" flat rel="noopener">
				<p style="font-size: 18px; font-weight: 600; color: #333">
					Expected Delivery Dates <v-icon icon="mdi mdi-information-outline" size="24"></v-icon>
				</p>
				<p style="font-size: 16px; font-weight: 500; color: #969696">Choose where you ship and how much you charge for shipping at checkout.</p>
			</v-card>

			<v-card class="my-5 pa-6 cardStyle" flat style="justify-content: between">
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 18px; font-weight: 600; color: #333">
							Local Delivery <v-icon icon="mdi mdi-information-outline" size="24"></v-icon>
						</p>
						<p style="font-size: 16px; font-weight: 500; color: #969696">Deliver orders directly to customers in the area.</p>
					</div>
					<div>
						<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3"> Setup </v-btn>
					</div>
				</div>
			</v-card>

			<v-card class="my-5 pa-6 cardStyle" flat style="justify-content: between">
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 18px; font-weight: 600; color: #333">Local Pickups <v-icon icon="mdi mdi-information-outline" size="24"></v-icon></p>
						<p style="font-size: 16px; font-weight: 500; color: #969696">Deliver orders directly to customers in the area.</p>
					</div>
					<div>
						<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3"> Setup </v-btn>
					</div>
				</div>
			</v-card>

			<v-card class="mx-auto my-5 pa-6 cardStyle" flat rel="noopener" style="justify-content: between">
				<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">
					Saved Packages <v-icon icon="mdi mdi-information-outline" size="24"></v-icon>
				</p>
				<div class="cardStyle">
					<div class="d-flex justify-space-between align-center w-100">
						<div class="d-flex py-2">
							<v-avatar class="mr-4" size="50" color="#FDF1ED">
								<v-icon icon="mdi mdi-equal-box"></v-icon>
							</v-avatar>
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">Beispielbox</p>
								<p style="font-size: 16px; font-weight: 500; color: #969696">22 × 13.7 × 4.2 cm, 0 kg</p>
							</div>
						</div>
						<div class="d-flex">
							<v-btn class="mr-4" size="small" text="Default package" variant="tonal"></v-btn>
							<!-- <v-icon icon="mdi mdi-dots-horizontal"></v-icon> -->
							<v-menu>
								<template v-slot:activator="{ props }">
									<!-- <v-btn class="pa-0" flat icon="mdi mdi-dots-horizontal" v-bind="props"></v-btn> -->
									<v-icon icon="mdi mdi-dots-horizontal" v-bind="props"></v-icon>
								</template>

								<v-card class="bg-white d-flex flex-column text-left pa-4 h-auto">
									<span class="pa-2 text-left">
										<v-icon icon="mdi mdi-logout"></v-icon> <span style="font-size: 14px; font-weight: 600"> Edit </span>
									</span>
									<span class="pa-2" flat>
										<v-icon icon="mdi mdi-logout"></v-icon> <span style="font-size: 14px; font-weight: 600">Set as default </span>
									</span>
									<span class="pa-2" flat>
										<v-icon icon="mdi mdi-delete"></v-icon> <span style="font-size: 14px; font-weight: 600">Delete </span>
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
						class="mt-5"
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
			</v-card>

			<v-card class="mx-auto my-5 py-2 px-6 cardStyle" flat rel="noopener" style="justify-content: between">
				<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">
					Packing Slip <v-icon icon="mdi mdi-information-outline" size="24"></v-icon>
				</p>
				<div class="cardStyle">
					<div class="d-flex justify-space-between align-center w-100">
						<div class="d-flex py-2">
							<v-avatar class="mr-4" size="50" color="#FDF1ED">
								<v-icon icon="mdi mdi-equal-box"></v-icon>
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
		</div>
	</div>

	<v-dialog width="auto" v-model="savePackageModal">
		<v-sheet width="100vw" max-width="744px" class="cardStyle px-0">
			<div class="px-6 d-flex justify-space-between">
				<div class="d-flex align-center ga-3">
					<v-avatar size="70" color="#EDF3F0"><v-icon icon="mdi mdi-account-plus"></v-icon></v-avatar>
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
						<div style="color: #333; font-size: 14px; font-weight: 500" class="ml-2">
							<h4>Use as default package</h4>
							<h6>Used to calculate rates at checkout and pre-selected when buying labels</h6>
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
						<VDatePicker v-model.range="range" mode="dateTime" />
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
					<v-col>
						<p>Within Jan 1st to Jan 10th</p>
						<p>8 business days</p>
					</v-col>
				</v-row>
				<v-row style="font-size: 16px; font-weight: 500; color: #333">
					<v-col cols="3">
						<p>Domestic</p>
					</v-col>
					<v-col cols="3" style="color: #969696">
						<p>€60.00 and up</p>
						<p>€60.00 - €100.00</p>
					</v-col>
					<v-col>
						<p>Within Jan 1st to Jan 10th</p>
						<p>8 business days</p>
					</v-col>
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
					<v-col>
						<p>Within Jan 1st to Jan 10th</p>
						<p>8 business days</p>
					</v-col>
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
</template>

<script>
export default {
	data() {
		return {
			selected: null,
			savePackageModal: false,
			printSlipModal: false,
			deliveryDateModal: false,
			range: null,
			items: [
				{
					value: "umoja-logistics",
					text: "Umoja Logistics",
					description: "Let Umoja handle your entire business logistics and make it easier for you",
					icon: "mdi mdi-truck",
					none: "",
				},
				{
					value: "manual-shipping",
					text: "Manual Shipping",
					description: "The business owners handles everything concerns shipping their product",
					icon: "mdi mdi-package-variant",
					none: "",
				},
			],
		};
	},
	computed: {
		computedLabel() {
			return this.selected ? "" : "Select Shipping Method";
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
</style>
