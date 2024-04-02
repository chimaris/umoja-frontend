<template>
	<v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
		<div class="d-flex pb-8 pt-4 justify-space-between">
			<div class="align-center">
				<h1 style="font-weight: 700; font-size: 24px; line-height: 30px; letter-spacing: -0.02em">Create Post</h1>
				<p style="color: #969696; font-size: 16px; font-weight: 400">Complete your post details, to engage with your audience</p>
				<div></div>
			</div>
		</div>
		<v-row>
			<v-col cols="12" sm="8">
				<v-sheet class="cardStyle">
					<div class="d-flex justify-space-between">
						<p style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px; letter-spacing: -0.2px">Products</p>
					</div>
					<div class="justify-space-between">
						<v-row class="my-4">
							<v-col cols="4">
								<v-card
									width="100%"
									image="https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png"
									flat
									style="border-radius: 6px"
									height="266"
									class="d-flex justify-end align-start pa-2"
									color="#F8F8F8"
								>
									<v-btn size="x-small" class="rounded-xl" icon="mdi mdi-trash-can-outline"> </v-btn>
								</v-card>
							</v-col>
							<v-col v-for="n in 2" :key="n" cols="4">
								<v-card
									width="100%"
									flat
									style="border-radius: 6px; border: 1px dashed var(--carbon-2, #cecece)"
									height="266"
									class="d-flex justify-center align-center"
									color="#F8F8F8"
								>
									<div class="text-center">
										<v-img
											src="https://res.cloudinary.com/payhospi/image/upload/v1688740513/gallery_azmmka.png"
											class="rounded-lg mx-auto mb-2"
											width="45"
										></v-img>
										<p style="color: #333; font-size: 13px; font-weight: 400">Drop your images here, or</p>
										<p style="color: #333; font-size: 13px; font-weight: 400">select <span style="color: #1273eb">click to browse </span></p>

										<p class="mt-3" style="color: #969696; font-size: 10px; font-weight: 500">SVG, PNF, JPG, or GIF (max 800X400px)</p>
									</div>
								</v-card>
							</v-col>
						</v-row>

						<v-btn style="border: 1px solid #e5e5e5" size="large" variant="outlined">Add More Image</v-btn>
					</div>
					<v-divider class="my-4"></v-divider>
					<p class="inputLabel">Text</p>
					<v-textarea counter="200" persistent-counter="" placeholder="Enter post text here" density="comfortable"> </v-textarea>
					<v-divider class="my-4"></v-divider>
					<v-row class="mt-3">
						<v-col>
							<p class="inputLabel">Category</p>
							<v-select placeholder="Select post category" append-inner-icon="mdi mdi-chevron-down" density="comfortable"> </v-select
						></v-col>
						<v-col>
							<p class="inputLabel">Location</p>

							<v-text-field placeholder="Enter location" density="comfortable"> </v-text-field
						></v-col>
					</v-row>
				</v-sheet>

				<v-sheet class="cardStyle mt-4 py-8">
					<div class="d-flex justify-space-between align-center">
						<p style="color: #333; font-size: 20px; font-weight: 600">Add Related Products</p>
						<v-btn size="x-small" flat variant="text" color="blue"
							><span style="color: #1273eb; font-size: 14px; font-weight: 500">Add custom item</span>
						</v-btn>
					</div>
					<div class="d-flex my-8 justify-space-between">
						<v-text-field
							hide-details
							class="borderedinput mr-2"
							persistent-hint
							variant="outlined"
							prepend-inner-icon="mdi mdi-magnify"
							placeholder="Search Products"
							density="compact"
						>
						</v-text-field>

						<v-btn style="border: 1px solid #e5e5e5" size="large" variant="outlined">Browse products</v-btn>
					</div>
				</v-sheet>
			</v-col>
			<v-col cols="12" sm="4">
				<v-sheet class="cardStyle d-block">
					<div class="d-flex mb-6 mt-2 justify-space-between align-center">
						<p style="color: #333; font-size: 20px; font-weight: 600">Post Preview</p>
					</div>
					<div>
						<div class="mb-4 d-flex">
							<v-avatar size="50">
								<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1687702335/rectangle-1939_khvhag.png"></v-img>
							</v-avatar>
							<div class="ml-3">
								<div class="d-block">
									<div class="d-flex align-center">
										<p style="color: #1e1e1e; font-size: 16px; font-weight: 600; line-height: 140%">Thatdesignpro</p>
										<v-icon class="mx-1" size="5" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
										<p style="color: #969696; font-size: 14px; font-weight: 400; line-height: 140%">27th Nov, 2023</p>
									</div>
								</div>
								<div class="d-block mt-1">
									<div class="d-flex align-center">
										<v-chip style="justify-content: center; align-items: center; display: flex" color="#936900" size="small" rounded="lg">
											Category</v-chip
										>
										<v-icon class="mx-1" size="5" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
										<div class="text-truncate" style="color: #1e1e1e; font-size: 14px !important; font-weight: 400">Address</div>
									</div>
								</div>
							</div>
						</div>
						<v-card flat color="grey-lighten-4" width="100%" height="313px" class="d-flex align-center justify-center rounded-lg">
							<div>
								<v-img
									style="opacity: 0.25"
									width="175px"
									src="https://res.cloudinary.com/payhospi/image/upload/v1688740513/gallery_azmmka.png"
								></v-img>
							</div>
						</v-card>
						<div class="rounded-lg pa-2 w-100 bg-grey-lighten-4 mt-6"></div>
						<div class="rounded-lg pa-2 w-100 bg-grey-lighten-4 mt-3"></div>
						<div class="rounded-lg pa-2 w-50 bg-grey-lighten-4 mt-3"></div>
						<div class="d-flex mt-4 align-center justify-space-between">
							<div class="d-flex">
								<v-icon icon="mdi mdi-heart-outline"></v-icon>
								<div style="width: 40px" class="rounded-lg pa-1 ml-2 bg-grey-lighten-4"></div>
								<v-icon class="ml-3" icon="mdi mdi-comment-outline"></v-icon>
								<div style="width: 40px" class="rounded-lg pa-1 ml-2 bg-grey-lighten-4"></div>
							</div>
							<v-icon icon="mdi mdi-tray-arrow-up"></v-icon>
						</div>
					</div>
					<v-divider class="my-8"></v-divider>

					<div>
						<div class="mb-4 d-flex">
							<v-avatar size="50">
								<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1687702335/rectangle-1939_khvhag.png"></v-img>
							</v-avatar>

							<div class="pl-3" style="min-width: 0">
								<div class="d-flex align-center">
									<p style="color: #1e1e1e; font-size: 16px; font-weight: 600; line-height: 140%">Thatdesignpro</p>
									<v-icon class="mx-1" size="5" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
									<p style="color: #969696; font-size: 14px; font-weight: 400; line-height: 140%">27th Nov, 2023</p>
								</div>
								<div class="d-block mt-1">
									<div class="d-flex align-center">
										<v-chip style="justify-content: center; align-items: center; display: flex" color="#936900" size="small" rounded="lg">
											Fashion</v-chip
										>
										<v-icon class="mx-1" size="5" color="grey-lighten-1" icon="mdi mdi-circle"></v-icon>
										<div class="text-truncate" style="color: #1e1e1e; font-size: 14px !important; font-weight: 400">
											Shaftesbury Avenue Accra, Ghana
										</div>
									</div>
								</div>
							</div>
						</div>
						<v-card
							image="https://res.cloudinary.com/payhospi/image/upload/v1689243700/rectangle-53_mxs2dz.png"
							flat
							color="grey-lighten-4"
							width="100%"
							height="313px"
							class="d-flex align-center justify-center rounded-lg"
						>
						</v-card>
						<p style="color: #1e1e1e; font-size: 14px; font-weight: 400" class="mt-4">
							Lorem ipsum dolor sit amet consectetur. Duis pulvinar semper ornare quis. Est faucibus eu nullam ornare in.Lorem ipsum dolor sit amet
							consectetur. Duis pulvinar semper ornare quis. Est faucibus eu nullam ornare.
						</p>
						<div class="d-flex mt-4 align-center justify-space-between">
							<div class="d-flex">
								<v-icon icon="mdi mdi-heart-outline"></v-icon>
								<div style="width: 40px" class="rounded-lg pa-1 ml-2 bg-grey-lighten-4"></div>
								<v-icon class="ml-3" icon="mdi mdi-comment-outline"></v-icon>
								<div style="width: 40px" class="rounded-lg pa-1 ml-2 bg-grey-lighten-4"></div>
							</div>
							<v-icon icon="mdi mdi-tray-arrow-up"></v-icon>
						</div>
					</div>

					<v-divider class="my-8"></v-divider>
					<div>
						<p class="my-5" style="color: #333; font-size: 20px; font-weight: 600; line-height: 20px">Related products</p>

						<div class="cardStyle">
							<v-card flat color="grey-lighten-4" width="100%" height="313px" class="d-flex align-center justify-center rounded-lg">
								<v-btn rounded="xl" flat size="x-small" style="position: absolute; top: 15px; right: 15px" icon="mdi mdi-heart-outline"></v-btn>
								<v-img
									contain
									height="100%"
									width="100%"
									src="https://res.cloudinary.com/payhospi/image/upload/v1689252826/matskirt_ecf6ym.png"
								></v-img>
							</v-card>
							<p
								style="
									font-weight: 600;
									font-size: 14px;
									line-height: 18px;

									color: #000000;
								"
								class="mt-2"
							>
								Multicolored Ankara Material from Ghana
							</p>
							<p style="font-weight: 500; font-size: 12px; line-height: 15px; color: #000000" class="mt-1">Organic cotton certified</p>
							<p style="font-weight: 600; font-size: 12px; line-height: 13px; color: #000000" class="d-flex my-1 align-center">
								<v-rating v-model="rating" color="grey-lighten-2 " active-color="#E7CE5D" class="" density="compact" size="small"></v-rating
								><span style="margin-left: 9px">(0)</span>
							</p>
							<div class="d-flex align-center justify-space-between">
								<div class="d-flex align-center">
									<h1 style="font-size: 16px; line-height: 20px; color: #1a1d1f" class="priceClass">N15,000.00</h1>
								</div>
								<v-btn style="border: 1px solid #e5e5e5" size="small" variant="outlined"
									><span
										style="
											color: var(--grey-1000, #1a1d1f);

											font-size: 12px;
											font-weight: 600;
										"
										>Pre-Order</span
									></v-btn
								>
							</div>
						</div>
						<div class="cardStyle mt-4">
							<v-card flat color="grey-lighten-4" width="100%" height="313px" class="d-flex align-center justify-center rounded-lg">
								<v-btn rounded="xl" flat size="x-small" style="position: absolute; top: 15px; right: 15px" icon="mdi mdi-heart-outline"></v-btn>
								<div>
									<v-img
										style="opacity: 0.25"
										width="175px"
										src="https://res.cloudinary.com/payhospi/image/upload/v1688740513/gallery_azmmka.png"
									></v-img>
								</div>
							</v-card>
							<div class="rounded-lg pa-2 w-100 bg-grey-lighten-4 mt-6"></div>
							<div class="rounded-lg pa-2 w-100 bg-grey-lighten-4 mt-3"></div>
							<div class="rounded-lg pa-2 w-50 bg-grey-lighten-4 mt-3"></div>
							<div class="d-flex mt-4 align-center justify-space-between">
								<div class="d-flex">
									<span
										style="
											color: #1a1d1f;

											font-size: 16px;
											font-weight: 700;
										"
									>
										Price
									</span>
								</div>
								<v-btn style="border: 1px solid #e5e5e5" size="small" variant="outlined"
									><span
										style="
											color: var(--grey-1000, #1a1d1f);

											font-size: 12px;
											font-weight: 600;
										"
										>Pre-Order</span
									></v-btn
								>
							</div>
						</div>
					</div>
				</v-sheet>
			</v-col>
		</v-row>
		<v-divider class="my-8"></v-divider>
		<div class="d-flex justify-end">
			<v-btn style="border: 1px solid #e5e5e5" size="large" color="white" flat @click="dialog1 = true">
				<span style="font-size: 14px; font-weight: 600; line-height: 20px"> Schedule post </span>
			</v-btn>
			<v-btn class="mx-2" style="border: 1px solid #e5e5e5" size="large" color="white" flat>
				<span style="font-size: 14px; font-weight: 600; line-height: 20px"> Save post as draft </span>
			</v-btn>
			<v-btn size="large" style="border: 1px solid #e5e5e5" color="green" flat>
				<span style="font-size: 14px; font-weight: 600; line-height: 20px"> Post </span>
			</v-btn>
		</div>

		<v-dialog v-model="dialog1" max-width="900">
			<v-card style="padding: 20px">
				<v-card-title>
					<h3 style="font-size: 30px; font-weight: 600; color: #333">Schedule this post</h3>
					<span style="font-size: 20px; color: #969696">Want to post later on? Choose when to publish your work</span>
				</v-card-title>
				<v-card-text>
					<v-row>
						<v-col cols="12" sm="6" md="5">
							<div class="column-content" style="max-height: 406px">
								<!-- Content for Column 1 -->
								<v-card
									image="https://res.cloudinary.com/payhospi/image/upload/v1689243700/rectangle-53_mxs2dz.png"
									flat
									color="grey-lighten-4"
									width="100%"
									height="250px"
									class="d-flex align-center justify-center rounded-lg"
								>
								</v-card>
								<p style="color: #1e1e1e; font-size: 14px; font-weight: 400" class="mt-4">
									Lorem ipsum dolor sit amet consectetur. Duis pulvinar semper ornare quis.
								</p>
								<div class="d-flex mt-2 align-center justify-space-between">
									<div class="d-flex align-center" style="height: 10px">
										<v-icon icon="mdi mdi-heart-outline"></v-icon>
										<div style="width: 40px" class="rounded-lg pa-1 ml-2 bg-grey-lighten-4"></div>
										<v-icon class="ml-3" icon="mdi mdi-comment-outline"></v-icon>
										<div style="width: 40px" class="rounded-lg pa-1 ml-2 bg-grey-lighten-4"></div>
									</div>
									<v-icon icon="mdi mdi-tray-arrow-up"></v-icon>
								</div>
								<p class="pt-2" style="font-weight: 600; font-size: 20px; color: #333333">Post Preview</p>
							</div>
						</v-col>
						<v-col cols="12" sm="6" md="5">
							<div class="column-content" style="height: 406px">
								<v-container>
									<v-row justify="space-around">
										<v-date-picker v-model="selectedDate" hide-header></v-date-picker>
									</v-row>
								</v-container>
							</div>
						</v-col>
						<v-col cols="12" md="2">
							<div style="overflow-y: auto; max-height: 400px; font-size: 16px; color: #333">
								<!-- Content for Column 3 -->
								<span>Time</span>
								<v-radio-group v-model="selectedTime" style="padding-top: 10px">
									<v-radio v-for="(time, index) in times" :key="index" :label="time" :value="time" color="#00966D" style="font-weight: 600"></v-radio>
								</v-radio-group>
							</div>
						</v-col>
					</v-row>
				</v-card-text>
				<div class="d-flex justify-space-between items-center mt-6" style="border-top: 1px solid #cecece; padding: 15px 30px">
					<div class="d-flex align-center justify-space-between" style="color: #969696">
						<v-icon icon="mdi mdi-account-search" style="padding-right: 20px"></v-icon>
						<span>Support</span>
					</div>
					<div>
						<v-btn class="mx-2" style="border: 1px solid #e5e5e5" size="large" color="white" flat @click="dialog1 = false">
							<span style="font-size: 14px; font-weight: 600; line-height: 20px"> Cancel </span>
						</v-btn>
						<v-btn size="large" style="border: 1px solid #e5e5e5" color="green" flat>
							<span style="font-size: 14px; font-weight: 600; line-height: 20px"> Schedule Post </span>
						</v-btn>
					</div>
				</div>
			</v-card>
		</v-dialog>

		<v-dialog width="auto" v-model="dialog">
			<v-sheet width="100vw" max-width="669px" class="cardStyle px-0">
				<div class="px-6 d-flex justify-space-between">
					<div class="d-flex align-center">
						<v-avatar size="70" color="#EDEDED"><v-icon icon="mdi mdi-account-plus"></v-icon></v-avatar>
						<div class="mx-4">
							<p style="color: #333; font-size: 24px; font-weight: 600; line-height: 20px; letter-spacing: -0.24px">Add New Customer</p>
							<p style="color: #969696; font-size: 16px; font-weight: 500; line-height: 20px; letter-spacing: -0.16px" class="mt-2">
								Add New Customers to your lists
							</p>
						</div>
					</div>
					<v-icon @click="dialog = false" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
				</div>
				<v-divider class="my-4"></v-divider>
				<div class="px-2">
					<v-breadcrumbs
						@click="window = 'ship'"
						style="color: var(--magnetic-green-4, #2c6e63); font-size: 14px; font-weight: 600; line-height: 20px; letter-spacing: -0.14px"
						density="compact"
						class="my-2"
						color="green"
						:items="['Basic Information', 'Shipping Details']"
					>
						<template v-slot:divider>
							<v-icon icon="mdi mdi-chevron-right"></v-icon>
						</template>
					</v-breadcrumbs>
				</div>
				<v-divider></v-divider>
				<v-window v-model="window" :show-arrows="false">
					<v-window-item value="basic">
						<div class="px-7 pt-6">
							<p style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px">Upload customer profile picture</p>
							<v-row class="pt-4 align-center pl-2 d-flex">
								<v-avatar size="70" color="#EDF0EF"><v-icon icon="mdi mdi-image-outline"></v-icon></v-avatar>

								<v-col>
									<div class="d-flex justify-center align-center pa-4 rounded-lg" style="height: ; width: 100%; border: 3.4px dashed #e1e1e1">
										<p class="text-center ma-auto" style="text-align: center; font-size: 12px; font-weight: 600; max-width: 260px">
											<span style="color: #1273eb"> Click to upload </span>
											or drag and drop SVG, PNF, JPG, or GIF (max 800X400px)
										</p>
									</div>
								</v-col>
							</v-row>
							<v-row class="mt-3">
								<v-col>
									<p class="inputLabel">city</p>
									<v-text-field placeholder="Enter first name" density="comfortable"> </v-text-field
								></v-col>
								<v-col>
									<p class="inputLabel">Last Name</p>

									<v-text-field placeholder="Enter last name" density="comfortable"> </v-text-field
								></v-col>
							</v-row>
							<p class="inputLabel">Language</p>
							<v-select
								persistent-hint
								hint="This customer will receive notification in this language"
								append-inner-icon="mdi mdi-chevron-down"
								placeholder="English (Default)"
								density="comfortable"
							>
							</v-select>
							<p class="inputLabel mt-5">Gender</p>
							<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select Gender" density="comfortable"> </v-select>
						</div>
						<div class="px-5">
							<p class="inputLabel">Email</p>
							<v-text-field placeholder="Enter customer email address" density="comfortable"> </v-text-field>
							<v-checkbox hide-details density="compact" color="#00966D">
								<template v-slot:label>
									<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
										Customer accepts email marketing
									</div>
								</template>
							</v-checkbox>
							<v-checkbox hide-details density="compact" color="#00966D">
								<template v-slot:label>
									<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
										Customer is tax exempt
									</div>
								</template>
							</v-checkbox>

							<div class="py-8">
								<v-row>
									<v-col cols="6"
										><v-btn size="large" style="border: 1px solid #e5e5e5" flat block>
											<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
										></v-col
									>
									<v-col cols="6">
										<v-btn size="large" color="green" flat block>
											<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save and Proceed </span></v-btn
										></v-col
									>
								</v-row>
							</div>
						</div>
					</v-window-item>
					<v-window-item value="ship">
						<div class="px-7 pt-6">
							<p class="inputLabel">Country/region</p>
							<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Country/region" density="comfortable"> </v-select>

							<p class="inputLabel">Company</p>
							<v-text-field placeholder="Company" density="comfortable"> </v-text-field>
							<p class="inputLabel">Address</p>

							<v-text-field placeholder="Enter customer address" density="comfortable"> </v-text-field>
							<p class="inputLabel">Apartment, suite, etc</p>
							<v-select
								persistent-hint
								hint="This customer will receive notification in this language"
								append-inner-icon="mdi mdi-chevron-down"
								placeholder="English (Default)"
								density="comfortable"
							>
							</v-select>
						</div>
						<div class="px-5">
							<v-row class="mt-3">
								<v-col>
									<p class="inputLabel">City</p>
									<v-text-field placeholder="Enter city" density="comfortable"> </v-text-field
								></v-col>
								<v-col>
									<p class="inputLabel">State</p>
									<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select State" density="comfortable"> </v-select>
								</v-col>
								<v-col>
									<p class="inputLabel">Zipcode</p>

									<v-text-field placeholder="Enter last name" density="comfortable"> </v-text-field
								></v-col>
							</v-row>

							<p class="inputLabel">Phone</p>
							<v-text-field append-inner-icon="mdi mdi-phone" placeholder="NG" density="comfortable"> </v-text-field>

							<div class="py-8">
								<v-row>
									<v-col cols="6"
										><v-btn size="large" style="border: 1px solid #e5e5e5" flat block>
											<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
										></v-col
									>
									<v-col cols="6">
										<v-btn size="large" color="green" flat block>
											<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save and Proceed </span></v-btn
										></v-col
									>
								</v-row>
							</div>
						</div>
					</v-window-item>
				</v-window>
			</v-sheet>
		</v-dialog>
	</v-container>
</template>
<style>
.rt .v-icon--size-default {
	font-size: 18px;
}

.column-content {
	padding: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
}
</style>
<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";

export default {
	components: {
		EditorContent,
	},
	data() {
		return {
			tags: ["Fashion", "Sneakers", "Unisex shoes", "Men shoes", "Black", "Fashion and style", "Ghana Ankara Material"],
			checkqty: true,
			window: "basic",
			radioship: true,
			dialog: false,
			dialog1: false,
			editor: null,
			tab: "Customer Details",
			chip: "All",
			chosen: "",
			times: [],
			selectedTime: null,
			selectedDate: new Date(),

			notes: [
				{
					name: "Benjamin Franklin O.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1687265847/Rectangle_1929_qzdwmq.png",
				},
				{
					name: "Nweke Franklin",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1687265844/Rectangle_1929_1_x8i5ic.png",
				},
				{
					name: "Nweke Franklin",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1687265844/Rectangle_1929_1_x8i5ic.png",
				},
			],
			summary: [
				{
					title: "Total Quantity",
					value: "4 Items",
				},
				{
					title: "Grand Total",
					value: "€ 1,829.00",
				},
				{
					title: "Sub-Total",
					value: "€ 1,817.00",
				},
				{
					title: "Shipping International",
					value: "€ 12.00",
				},
				{
					title: "Taxes",
					value: "€ 0.00",
				},
			],
			items: [
				{
					sn: "#23942",
					name: "Leather crop top & pants......",
					date: "17 May",
					total: "€2,349‎",
				},
				{
					sn: "#23442",
					name: "Leather crop top & pants......",
					date: "17 May",
					total: "€2,349‎",
				},
				{
					sn: "#26042",
					name: "Leather crop top & pants......",
					date: "17 May",
					total: "€2,349‎",
				},
			],
		};
	},
	computed: {
		orderDetails() {
			return [
				{
					title: "Name",
					value: "Benjamin Franklin O.",
				},
				{
					title: "Email",
					value: "sylvesterfranklin007@gmail.com",
				},
				{
					title: "Phone",
					value: "+145789900",
				},
				{
					title: "Billing",
					value: "Michael Johnson, Michael’s Corp LLC Rose Str. 120 New York, PH 10000 United States (US)",
				},
				{
					title: "Shipping",
					value: "Michael Johnson, Michael’s Corp LLC Rose Str. 120 New York, PH 10000 United States (US)",
				},
				{
					title: "Shipping Company",
					value: "Umoja Free Shipping",
					img: "https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png",
				},
			];
		},
	},
	mounted() {
		this.items = this.items1;
		this.generateTimes();

		this.editor = new Editor({
			extensions: [
				StarterKit,
				Link,
				Underline,
				TextAlign.configure({
					types: ["heading", "paragraph"],
				}),
			],
			content: "<p>This sneakers is made from one of the best  ankara material in Ghana</p>",
		});
	},
	beforeUnmount() {
		this.editor.destroy();
	},

	methods: {
		generateTimes() {
			for (let hour = 8; hour < 24; hour++) {
				for (let minute = 0; minute < 60; minute += 30) {
					let period = hour < 12 ? "AM" : "PM";
					let formattedHour = hour % 12 === 0 ? 12 : hour % 12;
					let formattedMinute = minute.toString().padStart(2, "0");
					this.times.push(`${formattedHour}:${formattedMinute} ${period}`);
				}
			}
		},
	},
};
</script>
