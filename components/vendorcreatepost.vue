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
							<v-col v-for="(n, i) in 3" :key="n" cols="4" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event, i)">
								<v-card v-if="imagePreviews[i]"
									width="100%"
									:image="imagePreviews[i]"
									flat
									style="border-radius: 6px"
									height="266"
									class="d-flex justify-end align-start pa-2"
									color="#F8F8F8"
								>
									<v-btn @click="deletePreview(i)" size="x-small" class="rounded-xl" icon="mdi mdi-trash-can-outline"> </v-btn>
								</v-card>
								<v-card v-else
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
										<p style="color: #333; font-size: 13px; font-weight: 400">select <v-label :for="'product' + i" style="color: #1273eb; cursor: pointer;">click to browse </v-label></p>

										<p class="mt-3" style="color: #969696; font-size: 10px; font-weight: 500">SVG, PNF, JPG, or GIF (max 800X400px)</p>
										<input style="display: none" :id="'product' + i" type="file" @change="handleFileInputChange($event, i)"/>
									</div>
								</v-card>
							</v-col>
						</v-row>
						<p style="color: #B00020; font-size: 14px; margin-top: 20px">{{pictureError}}</p>
						<!-- <v-btn style="border: 1px solid #e5e5e5" size="large" variant="outlined">Add More Image</v-btn> -->
					</div>
					<v-divider class="my-4"></v-divider>
					<p class="inputLabel">Text</p>
					<v-textarea  counter="600" v-model="postContent" persistent-counter="" placeholder="Enter post text here" density="comfortable"> </v-textarea>
					<p style="color: #B00020; font-size: 14px; margin-top: 0px">{{postError}}</p>
					<v-divider class="my-4"></v-divider>
					<v-row class="mt-3">
						<v-col>
							<p class="inputLabel">Category</p>
							<v-select placeholder="Select post category" :rules="inputRules" :items="categories.map(category => category.name)" v-model="selectedCat" density="comfortable"> </v-select
						></v-col>
						<v-col>
							<p class="inputLabel">Location</p>

							<v-text-field placeholder="Enter location" v-model="location" :rules="inputRules" density="comfortable"> </v-text-field
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
							v-model = "searchQuery"
							@input="postStore.getProduct(searchQuery.trim())"
						>
						<template v-slot:append-inner>
						<v-progress-circular v-if="postStore.loading"
						color="grey"
						:size="24"
						:width="3"
						indeterminate
						></v-progress-circular>
						</template>
						</v-text-field>

						<v-btn @click="postStore.getProduct(searchQuery.trim())" style="border: 1px solid #e5e5e5" size="large" variant="outlined">Browse products</v-btn>
					</div>
					<v-table style="height: 328 !important; overflow: scroll" v-if="relatedProducts.length > 0">
							<thead>
								<tr class=" ">
									<th style="font-size: 14px" class="font-weight-medium">Product</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium"></th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Price</th>
								</tr>
							</thead>
							<tbody>
								<tr
									 v-for="item in relatedProducts" :key="item"
								>
									<td style="font-size: 14px" class="px-1 py-10">
										<v-avatar color="grey-lighten-2" class="pa-1 ml-1" size="44" rounded="lg"
											><v-img :src="item.photo.split(',')[0]"></v-img
										></v-avatar>
										
									</td>
									<td class="px-1">
										<div class="">
											<p style="color: #1273EB; font-size: 18px; text-decoration: underline" class="px-1 mb-1">{{item.name}}</p>
											<p style="font-size: 16px;" class="px-1 mb-1">SKU: {{item.sku}}</p>
											<p style="font-size: 16px;" class="px-1">{{formattedPrice(item.price)}}</p>
										</div>
									</td>
									<td class="tiny2 px-1 font-weight-bold">{{ formattedPrice(item.price) }}</td>
									<td class="tiny2 px-1 font-weight-bold"><v-btn @click="postStore.deleteProduct(item.id)" size="x-small" class="rounded-xl" icon="mdi mdi-trash-can-outline"> </v-btn></td>	
								</tr>
							</tbody>
						</v-table>
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
								<v-img :src="vendor.vendor_details?.profile_photo" cover></v-img>
							</v-avatar>

							<div class="pl-3" style="min-width: 0">
								<div class="d-flex align-center">
									<p style="color: #1e1e1e; font-size: 16px; font-weight: 600; line-height: 140%">{{vendor.vendor_details?.business_name}}</p>
									<v-icon class="mx-1" size="5" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
									<p style="color: #969696; font-size: 14px; font-weight: 400; line-height: 140%">{{formatDate()}}</p>
								</div>
								<div class="d-block mt-1">
									<div class="d-flex align-center">
										<v-chip style="justify-content: center; align-items: center; display: flex" color="#936900" size="small" rounded="lg">
											{{selectedCat}}</v-chip
										>
										<v-icon class="mx-1" size="5" color="grey-lighten-1" icon="mdi mdi-circle"></v-icon>
										<div class="text-truncate" style="color: #1e1e1e; font-size: 14px !important; font-weight: 400">
											{{location}}
										</div>
									</div>
								</div>
							</div>
						</div>
						<v-card
							:image="imagePreviews[0] || imagePreviews[1] || imagePreviews[2]"
							flat
							color="grey-lighten-4"
							width="100%"
							height="313px"
							class="d-flex align-center justify-center rounded-lg"
						>
						</v-card>
						<p style="color: #1e1e1e; font-size: 14px; font-weight: 400" class="mt-4">
							{{postContent}}
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

					<!-- <v-divider class="my-8"></v-divider> -->
					<div>
						<p class="my-5" style="color: #333; font-size: 20px; font-weight: 600; line-height: 20px">Related products</p>

						<div v-if="relatedProducts.length > 0" v-for="item in relatedProducts" :key="item" class="cardStyle mb-4">
							<v-card flat color="grey-lighten-4" width="100%" height="313px" class="d-flex align-center justify-center rounded-lg"> 
								<v-btn rounded="xl" flat size="x-small" style="position: absolute; top: 15px; right: 15px" icon="mdi mdi-heart-outline"></v-btn>
								<v-img
									contain
									height="100%"
									width="100%"
									:src="item.photo.split(',')[0]"
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
								{{item.name}}
							</p>
							<p style="font-weight: 500; font-size: 12px; line-height: 15px; color: #000000" class="mt-1">{{item.category_name}}</p>
							<p style="font-weight: 600; font-size: 12px; line-height: 13px; color: #000000" class="d-flex my-1 align-center">
								<v-rating v-model="rating" color="grey-lighten-2 " active-color="#E7CE5D" class="" density="compact" size="small"></v-rating
								><span style="margin-left: 9px">(0)</span>
							</p>
							<div class="d-flex align-center justify-space-between">
								<div class="d-flex align-center">
									<h1 style="font-size: 16px; line-height: 20px; color: #1a1d1f" class="priceClass">{{formattedPrice(item.price)}}</h1>
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
						<div class="cardStyle mt-4" v-else>
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
		<p class="d-flex justify-end"  style="color: #B00020; font-size: 14px; margin-bottom: 10px">{{postStore.errorPost}}</p>
		<div class="d-flex justify-end">
			<v-btn style="border: 1px solid #e5e5e5" size="large" color="white" flat @click="checkSchedule()">
				<span style="font-size: 14px; font-weight: 600; line-height: 20px"> Schedule post </span>
			</v-btn>
			<v-btn @click="handleDraft()" class="mx-2" style="border: 1px solid #e5e5e5" size="large" color="white" flat>
				<span style="font-size: 14px; margin-right: 10px; font-weight: 600; line-height: 20px"> Save post as draft </span>
				<v-progress-circular v-if="postStore.load3" indeterminate :width="2" :size="18"></v-progress-circular>
			</v-btn>
			<v-btn @click="handlePost" size="large" style="border: 1px solid #e5e5e5" color="green" flat>
				<span style="font-size: 14px; font-weight: 600; line-height: 20px; margin-right: 10px"> Post </span>
				<v-progress-circular v-if="postStore.load" indeterminate :width="2" :size="18"></v-progress-circular>
			</v-btn>
		</div>

		<v-dialog v-model="dialog1" persistent max-width="900">
			<v-card style="padding: 20px; border-radius: 15px">
				<v-card-title>
					<h3 style="font-size: 30px; font-weight: 600; color: #333">Schedule this post</h3>
					<span style="font-size: 20px; color: #969696; font-weight: 400">Want to post later on? Choose when to publish your work</span>
				</v-card-title>
				<v-card-text>
					<v-row>
						<v-col cols="12" sm="6" md="5">
							<div class="column-content" style="max-height: 406px">
								<!-- Content for Column 1 -->
								<v-card
									:image="imagePreviews[0] || imagePreviews[1] || imagePreviews[2]"
									flat
									color="grey-lighten-4"
									width="100%"
									height="250px"
									class="d-flex align-center justify-center rounded-lg"
								>
								</v-card>
								<p style="color: #1e1e1e; font-size: 14px; font-weight: 400" class="mt-4">
									{{postContent}}
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
								<v-container class="p-0">
									<v-row>
										<VDatePicker
											v-model="selectedDate"
											mode="date"
											expanded
											trim-weeks
											borderless
											transparent
											color="teal"
											fillMode="solid"
											:min="new Date().toISOString().substr(0, 10)"
											content="red"
											:locale="{ firstDayOfWeek: 2, masks: { weekdays: 'WWW' } }"
											style="width: 100%; margin: auto"
										/>
									</v-row>
								</v-container>
							</div>
						</v-col>
						<v-col cols="12" md="2">
							<div style="overflow-y: auto; max-height: 400px; font-size: 16px; color: #333">
								<!-- Content for Column 3 -->
								<span class="pl-2">Time</span>
								<v-radio-group v-model="selectedTime" style="padding-top: 10px">
									<v-radio
										v-for="(time, index) in times"
										:key="index"
										:label="time"
										:value="time"
										color="#00966D"
										style="font-weight: 600; font-size: 16px"
									></v-radio>
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
					<p class="d-flex justify-end"  style="color: #B00020; font-size: 14px; margin-bottom: 10px">{{postStore.scheduleError}}</p>
					<div>
						<v-btn class="mx-2" style="border: 1px solid #e5e5e5" size="large" color="white" flat @click="dialog1 = false">
							<span style="font-size: 14px; font-weight: 600; line-height: 20px"> Cancel </span>
						</v-btn>
						<v-btn size="large" style="border: 1px solid #e5e5e5" color="green" flat @click="schedulePostHandler">
							<span style="font-size: 14px; margin-right:10px; font-weight: 600; line-height: 20px"> Schedule Post </span>
							<v-progress-circular v-if="postStore.load2"
							color="grey"
							:size="20"
							:width="2"
							indeterminate
							></v-progress-circular>
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
								placeholder="English (Default)"
								density="comfortable"
							>
							</v-select>
							<p class="inputLabel mt-5">Gender</p>
							<v-select  placeholder="Select Gender" density="comfortable"> </v-select>
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
							<v-select placeholder="Country/region" density="comfortable"> </v-select>

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

		<v-dialog v-model="showAlert" persistent max-width="1100px">
			<v-card style="bottom: 270px; right: -155px; box-shadow: none !important; width: 100%; background-color: #edf3f0">
				<v-alert style="border-radius: 10px">
					<div class="d-flex justify-between align-center">
						<div class="d-flex align-center w-100">
							<div style="background-color: #cbded6; padding: 9px 0px 9px 9px; border-radius: 50%; margin-right: 10px">
								<v-icon class="mr-2" icon="mdi mdi-check-circle" size="20" color="#00966D"></v-icon>
							</div>

							<div style="font-size: 16px; color: #333333">
								<h4 style="font-weight: 600">Post Scheduled Successfully</h4>
								<span style="font-weight: 400">Your post will be published on {{selectedDate}} at {{selectedTime}}</span>
							</div>
						</div>
						<v-btn style="color: #c20052; background-color: transparent" flat @click="showAlert = false">
							Close
							<v-icon class="ml-2" icon="mdi mdi-close-circle-outline"></v-icon>
						</v-btn>
					</div>
				</v-alert>
			</v-card>
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
	border-radius: 15px;
	/* background-color: transparent; */
}

.vc-weeks {
	padding-top: 20px;
}
.vc-header {
	border-bottom: 1px solid #ededed;
	padding-bottom: 50px;
}
.vc-week,
.vc-weekdays {
	padding-bottom: 15px;
}
.vc-weekdays {
	text-transform: uppercase;
	font-size: 12px;
	color: #969696;
	font-weight: 300;
}
</style>
<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import { fetchCategories, getCategoryId } from "~/composables/useCategories";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import {useVendorStore} from '~/stores/vendorStore'
import {formatDate} from '~/utils/date'
import {formattedPrice} from '~/utils/price'
import {useCreateStore} from '~/stores/createPostStore'
import {ref, onMounted, computed} from 'vue'
import {inputRules} from '~/utils/formrules'

export default {
	setup(){
		const vendorStore = useVendorStore()
		const vendor = computed(() => vendorStore.vendor)
		const postStore = useCreateStore()
		const relatedProducts =  computed(() => postStore.relatedPosts)
		const searchQuery = ref("")
		const categories = ref([])

		onMounted(async() => {
			postStore.relatedPosts = []
			categories.value = await fetchCategories()
		})

		return{
			vendorStore,
			vendor,
			postStore,
			relatedProducts,
			searchQuery,
			categories
		}
	},
	components: {
		EditorContent,
	},
	data() {
		return {
			imagePreviews: [],
			selectedCat: "",
			location: "",
			postContent: "",
			pictureError: "",
			postError: "",
			tags: ["Fashion", "Sneakers", "Unisex shoes", "Men shoes", "Black", "Fashion and style", "Ghana Ankara Material"],
			checkqty: true,
			window: "basic",
			radioship: true,
			dialog: false,
			dialog1: false,
			showAlert: false,
			editor: null,
			tab: "Customer Details",
			chip: "All",
			chosen: "",
			times: [],
			selectedTime: null,
			selectedDate: null,
		};
	},
	mounted() {
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
	// beforeUnmount() {
	// 	this.editor.destroy();
	// },

	methods: {
	isValid(){
		this.pictureError = ""
		this.postError = ""
		if (this.imagePreviews.length == 0){
			this.pictureError = "You have to upload atleast one image"
			return false
		}
		if (this.postContent.length > 600){
			this.postError = "No of characters has exceeded the maximum limit of 600 characters"
			return false
		}
		if (this.postContent.length <= 100){
			this.postError = "No of characters is below the minimum limit of 100 characters"
			return false
		}
		if (this.postContent.length > 100 && this.postContent.length <= 600 && this.location && this.selectedCat && this.imagePreviews.length > 0 && this.relatedProducts.length > 0){
			return true
		}
	},
	async handlePost(){
		
		if (this.isValid()){
			this.pictureError = ""
			this.postError = ""
			const data = {
				category_id: getCategoryId(this.selectedCat, this.categories),
				product_ids: this.relatedProducts.map(product => product.id),
				location: this.location,
				description: this.postContent
			}
			const res = await this.postStore.createPost(this.imagePreviews, data)
			if (res){
				this.$router.push('/vendor/dashboard/Posts')
				this.postStore.errorPost = ""
				this.imagePreviews = []
				this.postContent = []
				this.location = ""
				this.selectedCat = ""
				
			}
	
		}
	},
	formatScheduledAt(dateString, timeString) {
	const date = new Date(dateString);
	const timeParts = timeString.match(/(\d+):(\d+) (\w+)/);

	// Extract hours and minutes from the time string
	let hours = parseInt(timeParts[1], 10);
	const minutes = timeParts[2];
	const ampm = timeParts[3];

	// Convert 12-hour time to 24-hour time
	if (ampm === 'PM' && hours < 12) {
		hours += 12;
	} else if (ampm === 'AM' && hours === 12) {
		hours = 0;
	}

	// Format the date and time parts into the desired format
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes}:00`;

	return `${year}-${month}-${day} ${formattedTime}`;
	},
	deletePreview(index){
		this.imagePreviews.splice(index, 1);
	},
	handleFileInputChange(event, index) {
      const file = event.target.files[0]; // Get the first selected file
      if (!file) return; // Return if no file is selected
	  		const allowedFiles = [".svg", ".png", ".jpeg", ".jpg"]
			const maxFileSize = 5 * 1024 * 1024;
			const fileExtension = file.name.split(".").pop().toLowerCase();
    
		if (!allowedFiles.includes("." + fileExtension)) {
			this.pictureError = "Please upload files having extensions: " + allowedFiles.join(', ');
			return;
		}

      	this.pictureError = ""

		if (file.size > maxFileSize) {
		this.pictureError = "File size exceeds the maximum allowed size of 5MB";
		return;
		}
      const reader = new FileReader();

      // Define onload event handler
      reader.onload = () => {
        // Update imagePreviews array with Base64 data of the selected file
		
		this.imagePreviews[index] = reader.result
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    },
	drop(event, index) {
	     const file= event.dataTransfer.files[0]
		 if (!file) return; 

			const allowedFiles = [".svg", ".png", ".jpeg", ".jpg"]
			const maxFileSize = 5 * 1024 * 1024;
			const fileExtension = file.name.split(".").pop().toLowerCase();
    
		if (!allowedFiles.includes("." + fileExtension)) {
			this.pictureError = "Please upload files having extensions: " + allowedFiles.join(', ');
			return;
		}

      	this.pictureError = ""

		if (file.size > maxFileSize) {
		this.pictureError = "File size exceeds the maximum allowed size of 5MB";
		return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			this.imagePreviews[index] = reader.result
		};
		reader.readAsDataURL(file);
     },
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
		checkSchedule(){
			if (this.isValid()){
				this.pictureError = ""
				this.postError = ""
				this.dialog1 = true
			}
		},
		async handleDraft(){
			if (this.isValid()){
				this.pictureError = ""
				this.postError = ""
				const data = {
				category_id: getCategoryId(this.selectedCat, this.categories),
				product_ids: this.relatedProducts.map(product => product.id),
				location: this.location,
				description: this.postContent
			}
			const res = await this.postStore.draftPost(this.imagePreviews, data)
			if (res){
				this.$router.push('/vendor/dashboard/Posts')
				this.postStore.errorPost = ""
				this.imagePreviews = []
				this.postContent = []
				this.location = ""
				this.selectedCat = ""
			
			}

			}
		},
		async schedulePostHandler() {
			if (this.selectedDate && this.selectedTime){
				const data = {
				category_id: getCategoryId(this.selectedCat, this.categories),
				product_ids: this.relatedProducts.map(product => product.id),
				location: this.location,
				description: this.postContent,
				is_draft: false,
				scheduled_at: this.formatScheduledAt(this.selectedDate, this.selectedTime)
			}
			const response = await this.postStore.schedulePost(this.imagePreviews, data)
			if (response){
				this.$router.push('/vendor/dashboard/Posts')
				this.postStore.scheduleError = ""
				this.dialog1 = false;
				this.showAlert = true;
				this.imagePreviews = []
				this.postContent = []
				this.location = ""
				this.selectedCat = ""
				this.searchQuery = ""
			}
		
			}
			
		},
	},
};
</script>
