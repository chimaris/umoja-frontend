<template>
	<v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
		<div class="d-flex pb-4 pt-2 justify-space-between">
			<div class="d-flex align-center">
				<h1 style="font-weight: 700; font-size: 24px; line-height: 30px; letter-spacing: -0.02em">Add Products</h1>
			</div>
		</div>

		<v-sheet style="" color="transparent" class="mt-2">
			<v-tabs v-model="tab1" color="green">
				<v-tab v-for="item in tabs" :key="item" :value="item" class="d-flex text-capitalize align-center">
					{{ item }}
				</v-tab>
			</v-tabs>
			<v-divider></v-divider>
			<v-window v-model="tab1">
				<v-window-item value="General">
					<v-form @submit.prevent="saveGeneral">
						<v-sheet class="cardStyle mt-5" width="800">
							<div>
								<p class="inputLabel">Product Number (SKU)</p>
								<v-text-field
									v-model="productNumber"
									placeholder="Enter product number (optional) "
									density="comfortable"
									append-inner-icon="mdi mdi-alert-circle"
								>
								</v-text-field>
							</div>
							<div>
								<p class="inputLabel">Unit</p>
								<v-select v-model="unit" :rules="inputRules" :items="units" placeholder="Select unit" density="comfortable"> </v-select>
							</div>
							<div>
								<p class="inputLabel">Unit Per Item</p>
								<v-text-field v-model="unitperItem" :rules="nonNegValue" placeholder="Eg. 1, 2, 3, 4" type="number" density="comfortable">
								</v-text-field>
							</div>
							<div>
								<p class="inputLabel">Material</p>
								<v-text-field v-model="material" placeholder="Eg. cotton, leather, wood" density="comfortable"> </v-text-field>
							</div>
							<div>
								<p class="inputLabel">Condition</p>
								<v-select v-model="condition" :items="conditions" placeholder="Select product condition" density="comfortable"> </v-select>
							</div>
						</v-sheet>
						<!-- <v-sheet class="cardStyle my-4" width="800">
						<div class="d-flex align-center">
							<p style="color: #333; font-size: 20px; font-weight: 600">Selling Type</p>
						</div>
						<v-divider class="my-4"></v-divider>
						<v-checkbox @click="storeOption = !storeOption" v-model="storeOption" hide-details density="compact" color="#00966D">
							<template v-slot:label>
								<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
									In-store selling only
								</div>
							</template>
						</v-checkbox>
						 <v-checkbox hide-details density="compact" color="#00966D">
						<template v-slot:label>
							<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">Online selling only</div>
						</template>
					</v-checkbox>
					<v-checkbox hide-details density="compact" color="#00966D">
						<template v-slot:label>
							<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
								Available both in-store and online
							</div>
						</template>
					</v-checkbox> -->
						<!-- </v-sheet> -->
						<v-btn
							type="submit"
							flat
							style="background-color: #2c6e63; color: #fff; margin-top: 20px; font-size: 16px; font-weight: 600; padding: 16px 34px"
							size="x-large"
							>Save and continue</v-btn
						>
					</v-form>
				</v-window-item>
				<v-window-item value="Text">
					<v-form @submit.prevent="saveText" @keydown.enter.prevent="">
						<v-row class="mt-5">
							<v-col cols="12" sm="8" height="100">
								<v-sheet class="cardStyle">
									<div class="mb-5">
										<p class="inputLabel">Product Name</p>

										<v-text-field
											hint="Do not exceed 20 characters when entering the product name."
											persistent-hint
											placeholder="Enter product name"
											:rules="productRules"
											v-model="productName"
										>
										</v-text-field>
									</div>
									<div class="mb-5">
										<p class="inputLabel mt-4">Description</p>
										<v-card height="auto" class="mx-auto pt-2 coolTable pb-0 mb-1" width="100%" style="overflow: hidden" flat>
											<div class="bg-white d-flex justify-space-between px-2 pb-2" v-if="editor">
												<!-- :disabled="!editor.can().chain().focus().toggleBold().run()" -->
												<div>
													<v-btn
														flat
														icon="mdi mdi-format-italic"
														class="mr-1"
														@click="editor.chain().focus().toggleItalic().run()"
														:class="{ 'is-active': editor.isActive('italic') }"
													>
													</v-btn>
													<v-btn
														flat
														icon="mdi mdi-format-bold"
														class="mr-1"
														@click="editor.chain().focus().toggleBold().run()"
														:class="{ 'is-active': editor.isActive('bold') }"
													>
													</v-btn>
													<v-btn
														flat
														class="mr-1"
														@click="editor.chain().focus().toggleUnderline().run()"
														icon="mdi mdi-format-underline"
														:class="{ 'is-active': editor.isActive('underline') }"
													>
													</v-btn>
													<v-btn
														flat
														icon="mdi mdi-format-strikethrough"
														class="mr-1"
														@click="editor.chain().focus().toggleStrike().run()"
														:class="{ 'is-active': editor.isActive('strike') }"
													>
													</v-btn>
													<v-btn flat icon="mdi mdi-link-variant" class="mr-1" @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
													</v-btn>
													<v-btn
														flat
														icon="mdi mdi-link-variant-off"
														class="mr-1"
														@click="editor.chain().focus().unsetLink().run()"
														:disabled="!editor.isActive('link')"
													>
													</v-btn>
													<v-btn flat icon="mdi mdi-format-align-left" class="mr-1" @click="editor.chain().focus().setTextAlign('left').run()">
													</v-btn>
													<v-btn flat icon="mdi mdi-format-align-center" class="mr-1" @click="editor.chain().focus().setTextAlign('center').run()">
													</v-btn>
													<v-btn flat icon="mdi mdi-format-align-right" class="mr-1" @click="editor.chain().focus().setTextAlign('right').run()">
													</v-btn>
													<v-btn
														flat
														icon="mdi mdi-format-list-bulleted"
														class="mr-1"
														@click="editor.chain().focus().toggleBulletList().run()"
														:class="{ 'is-active': editor.isActive('bullet') }"
													>
													</v-btn>
												</div>
												<div>
													<v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-left"></v-btn>
													<v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-right"></v-btn>
												</div>
											</div>
											<div style="min-height: 162px" class="bg-grey-lighten-4 pa-4">
												<editor-content :editor="editor" v-model="editorContent" />
											</div>
										</v-card>
										<p style="color: #b00020; font-size: 14px; margin: 5px 0">{{ descError }}</p>
										<p style="color: #969696; font-size: 12px; font-weight: 400">Do not exceed 500 characters when giving the product description</p>
									</div>
									<div>
										<p class="inputLabel mt-4">Product Specifications (Main features)</p>
										<v-textarea
											:rules="inputRules"
											v-model="productSpec"
											variant="filled"
											hint="Each product feature should be separated with a comma (,)"
											persistent-hint
										></v-textarea>
									</div>
								</v-sheet>
							</v-col>
							<v-col cols="12" sm="4">
								<v-sheet class="cardStyle">
									<div class="d-flex align-center">
										<p style="color: #333; font-size: 20px; font-weight: 600">Product status</p>
									</div>
									<v-select class="mt-4" :items="['Active', 'Draft']" v-model="productStat" placeholder="Active" density="comfortable"> </v-select>
								</v-sheet>
								<v-sheet class="cardStyle mt-4">
									<div class="d-flex align-center mb-6">
										<p style="color: #333; font-size: 20px; font-weight: 600">Product Organization</p>
									</div>
									<div>
										<p class="inputLabel">Gender</p>
										<v-select v-model="selectedGender" :items="['Male', 'Female', 'Unisex']" placeholder="Unisex" density="comfortable"> </v-select>
									</div>
									<div>
										<p class="inputLabel">Category</p>
										<v-select
											:items="categoryNames"
											v-model="selectedCategory"
											:rules="inputRules"
											placeholder="Fashion and style"
											density="comfortable"
										>
										</v-select>
									</div>
									<div>
										<p class="inputLabel">Sub Category</p>
										<v-select
											:loading="loadingSub"
											:disabled="!selectedCategory || !selectedGender"
											color="green"
											:items="subCategories.map((subCategory) => subCategory.name)"
											v-model="selectedSubCategory"
											:rules="inputRules"
											placeholder="Sneakers"
											density="comfortable"
										>
										</v-select>
									</div>

									<div>
										<p class="inputLabel">Tags</p>
										<v-text-field @keyup.enter="handleTagInput()" v-model="newTag" placeholder="Find or create tags" density="comfortable">
										</v-text-field>
									</div>
									<div>
										<v-chip
											size="small"
											class="ma-1"
											style="border: 0.5px solid var(--magnetic-green-3, #94aaa5); font-size: 12px"
											close-icon="mdi mdi-close-circle-outline"
											rounded="lg"
											v-for="tag in tags"
											:key="tag"
											closable
											@click:close="removeTag(tag)"
										>
											{{ tag }}
										</v-chip>
									</div>
								</v-sheet>
							</v-col>
						</v-row>
						<v-btn
							type="submit"
							flat
							style="background-color: #2c6e63; margin-top: 20px; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px"
							size="x-large"
							>Save and continue</v-btn
						>
					</v-form>
				</v-window-item>
				<v-window-item value="Price">
					<v-sheet class="cardStyle px-0 my-4" width="800">
						<div class="px-5">
							<div class="d-flex align-center">
								<p style="color: #333; font-size: 20px; font-weight: 600">Item Price</p>
							</div>
							<!-- <div class="mt-6">
								<p class="inputLabel">Ust Index (Optional)</p>
								<v-select v-model="ustIndex" :items="['0%', '5%', '19%', '20%']" placeholder="Eg. 19%" density="comfortable"> </v-select>
							</div> -->
							<v-row class="mt-6">
								<v-col>
									<p class="inputLabel">Price</p>
									<v-text-field :rules="numRules" v-model="price" placeholder="€ 0.00" density="comfortable"> </v-text-field
								></v-col>
								<v-col>
									<p class="inputLabel">Commission</p>
									<v-text-field v-model="commission" placeholder="€ 0.00" density="comfortable"> </v-text-field
								></v-col>
								<v-col>
									<p>Compare-at price (Optional)</p>
									<v-tooltip text="" location="end" depressed class="elevation-24">
										<template v-slot:activator="{ props }">
											<v-text-field v-bind="props" :rules="numRules" v-model="prevPrice" placeholder="€ 0.00" density="comfortable"></v-text-field>
										</template>
										<template v-slot:default="{ attrs }">
											<div class="tooltip-content" v-bind="attrs">
												To display a markdown, enter a value higher than your price. Often shown with a strike through (e.g.
												<span class="strike-through">€25.00</span>).
											</div>
										</template>
									</v-tooltip>
								</v-col>
							</v-row>
							<!-- <v-checkbox v-model="chargeTax" @click="chargeTax = !chargeTax" hide-details density="compact" color="#00966D">
								<template v-slot:label>
									<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
										Charge tax on this product
									</div>
								</template>
							</v-checkbox> -->
						</div>
						<v-divider class="my-4"></v-divider>
						<v-row class="px-5">
							<v-col>
								<p class="inputLabel">Cost per item</p>
								<v-text-field v-model="itemCost" placeholder="€ 0.00" :rules="numRules" density="comfortable"> </v-text-field>
							</v-col>
							<v-col>
								<p class="inputLabel">Profit</p>
								<v-text-field v-model="profit" placeholder="€ 0.00" density="comfortable"> </v-text-field>
							</v-col>
							<v-col>
								<p class="inputLabel">Margin</p>
								<v-text-field v-model="margin" placeholder="€ 0.00" density="comfortable"> </v-text-field>
							</v-col>
						</v-row>
					</v-sheet>
					<p class="my-2" style="color: #b00020; font-size: 14px">{{ checkError }}</p>
					<v-btn
						flat
						@click="savePrice"
						style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px"
						size="x-large"
						>Save and continue</v-btn
					>
				</v-window-item>
				<v-window-item value="Picture">
					<v-form @submit.prevent="savePictures" @keydown.enter.prevent="">
						<v-sheet class="cardStyle mt-4" width="800">
							<div class="d-flex mb-4 align-center">
								<p style="color: #333; font-size: 20px; font-weight: 600">Product Image</p>
								<div class="ml-1">
									<v-icon size="16" icon="mdi mdi-information"> </v-icon>
									<v-tooltip activator="parent" location="end" class="text-red"> Image</v-tooltip>
								</div>
							</div>

							<v-row>
								<v-col
									class="text-center"
									v-if="imagePreviews[0]"
									cols="12"
									md="4"
									@dragenter.prevent
									@dragleave.prevent
									@dragover.prevent
									@drop.prevent="drop($event, 1)"
								>
									<div style="width: 100%">
										<v-img contain width="100%" class="bg-grey-lighten-4 rounded-lg" height="298" :src="imagePreviews[0]"></v-img>
									</div>
									<div>
										<p class="mt-4" style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
										<p style="color: #333; font-size: 14px; font-weight: 400">
											select
											<v-label for="product1" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer"> click to browse </v-label>
										</p>
										<input style="display: none" id="product1" type="file" @change="handleFileInputChange($event, 1)" />
									</div>
								</v-col>
								<v-col v-else cols="12" md="4" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event, 1)">
									<div class="d-flex justify-center align-center pa-2 rounded-lg" style="height: 298px; width: 100%; border: 3.4px dashed #e1e1e1">
										<div class="text-center">
											<v-avatar size="41" class="mb-2" rounded="lg">
												<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718900345/gallery_j91r7n_dw8yl8.png"></v-img>
											</v-avatar>
											<p style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
											<p style="color: #333; font-size: 14px; font-weight: 400">
												select
												<v-label for="product1" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer"> click to browse </v-label>
											</p>
											<input style="display: none" id="product1" type="file" @change="handleFileInputChange($event, 1)" />
										</div>
									</div>
								</v-col>
								<!-- second product -->
								<v-col
									class="text-center"
									v-if="imagePreviews[1]"
									cols="12"
									md="4"
									@dragenter.prevent
									@dragleave.prevent
									@dragover.prevent
									@drop.prevent="drop($event, 2)"
								>
									<div style="width: 100%">
										<v-img contain width="100%" class="bg-grey-lighten-4 rounded-lg" height="298" :src="imagePreviews[1]"></v-img>
									</div>
									<div>
										<p class="mt-4" style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
										<p style="color: #333; font-size: 14px; font-weight: 400">
											select
											<v-label for="product2" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer"> click to browse </v-label>
										</p>
										<input style="display: none" id="product2" type="file" @change="handleFileInputChange($event, 2)" />
									</div>
								</v-col>
								<v-col v-else cols="12" md="4" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event, 2)">
									<div class="d-flex justify-center align-center pa-2 rounded-lg" style="height: 298px; width: 100%; border: 3.4px dashed #e1e1e1">
										<div class="text-center">
											<v-avatar size="41" class="mb-2" rounded="lg">
												<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718900345/gallery_j91r7n_dw8yl8.png"></v-img>
											</v-avatar>
											<p style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
											<p style="color: #333; font-size: 14px; font-weight: 400">
												select
												<v-label for="product2" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer"> click to browse </v-label>
											</p>
											<input style="display: none" id="product2" type="file" @change="handleFileInputChange($event, 2)" />
										</div>
									</div>
								</v-col>
								<v-col cols="12" md="4">
									<!-- 3rd product -->
									<div
										v-if="imagePreviews[2]"
										class="d-flex flex-column justify-center mb-10 align-center pa-2 rounded-lg"
										style="height: 141px; width: 100%"
										@dragenter.prevent
										@dragleave.prevent
										@dragover.prevent
										@drop.prevent="drop($event, 3)"
									>
										<v-img contain width="100%" class="bg-grey-lighten-4 rounded-lg" height="298" :src="imagePreviews[2]"></v-img>
										<p class="mt-3" style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
										<p style="color: #333; font-size: 14px; font-weight: 400">
											select
											<v-label for="product3" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer"> click to browse </v-label>
										</p>
										<input style="display: none" id="product3" type="file" @change="handleFileInputChange($event, 3)" />
									</div>
									<div
										v-else
										class="d-flex justify-center mb-4 align-center pa-2 rounded-lg"
										style="height: 141px; width: 100%; border: 3.4px dashed #e1e1e1"
										@dragenter.prevent
										@dragleave.prevent
										@dragover.prevent
										@drop.prevent="drop($event, 3)"
									>
										<div class="text-center">
											<v-avatar size="41" class="mb-2" rounded="lg">
												<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718900345/gallery_j91r7n_dw8yl8.png"></v-img>
											</v-avatar>
											<p style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
											<p style="color: #333; font-size: 14px; font-weight: 400">
												select
												<v-label for="product3" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer"> click to browse </v-label>
											</p>
											<input style="display: none" id="product3" type="file" @change="handleFileInputChange($event, 3)" />
										</div>
									</div>
									<!-- 4th product -->
									<div
										v-if="imagePreviews[3]"
										class="d-flex justify-center flex-column mt-5 mb-4 align-center pa-2 rounded-lg"
										style="height: 141px; width: 100%"
										@dragenter.prevent
										@dragleave.prevent
										@dragover.prevent
										@drop.prevent="drop($event, 4)"
									>
										<v-img contain width="100%" class="bg-grey-lighten-4 rounded-lg" height="298" :src="imagePreviews[3]"></v-img>
										<p class="mt-3" style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
										<p style="color: #333; font-size: 14px; font-weight: 400">
											select
											<v-label for="product4" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer"> click to browse </v-label>
										</p>
										<input style="display: none" id="product4" type="file" @change="handleFileInputChange($event, 4)" />
									</div>
									<div
										v-else
										class="d-flex justify-center align-center mt-2 pa-2 rounded-lg"
										style="height: 141px; width: 100%; border: 3.4px dashed #e1e1e1"
										@dragenter.prevent
										@dragleave.prevent
										@dragover.prevent
										@drop.prevent="drop($event, 4)"
									>
										<div class="text-center">
											<v-avatar size="41" class="mb-2" rounded="lg">
												<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718900345/gallery_j91r7n_dw8yl8.png"></v-img>
											</v-avatar>
											<p style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
											<p style="color: #333; font-size: 14px; font-weight: 400">
												select
												<v-label for="product4" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer"> click to browse </v-label>
											</p>
											<input style="display: none" id="product4" type="file" @change="handleFileInputChange($event, 4)" />
										</div>
									</div>
								</v-col>
							</v-row>
							<p style="color: #969696; font-size: 12px; font-weight: 400" class="mt-4">
								You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with background color standards.
								Pictures must be in certain dimensions. Notice that the product shows all the details.
							</p>
						</v-sheet>
						<p style="color: #b00020; font-size: 14px; margin-top: 20px">{{ pictureError }}</p>
						<p style="color: #b00020; font-size: 14px; margin-top: 20px">{{ pictureErrors }}</p>
						<v-btn
							type="submit"
							class="my-3"
							flat
							style="background-color: #2c6e63; color: #fff; margin-top: 20px; font-size: 16px; font-weight: 600; padding: 16px 34px"
							size="x-large"
						>
							<span class="mr-4">Save and continue</span>
							<v-progress-circular v-if="loading" indeterminate :width="2" :size="25"></v-progress-circular>
						</v-btn>
					</v-form>
				</v-window-item>
				<v-window-item value="Inventory">
					<v-form @submit.prevent="saveInventory" @keydown.enter.prevent="">
						<v-sheet class="cardStyle mt-4" width="800">
							<div class="d-flex mb-4 align-center">
								<p style="color: #333; font-size: 20px; font-weight: 600">Inventory</p>
								<div class="ml-1">
									<v-icon size="16" icon="mdi mdi-information"> </v-icon>
									<v-tooltip activator="parent" location="end" class="text-red"> inventory</v-tooltip>
								</div>
							</div>
							<v-checkbox v-model="trackQty" @click="trackQty = !trackQty" density="compact" color="#00966D">
								<template v-slot:label>
									<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">Track Quantity</div>
								</template>
							</v-checkbox>
							<p style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px">Quantity</p>
							<div class="d-flex align-center justify-space-between">
								<p v-if="vendorProducts.textInfo" style="color: var(--carbon-4, #333); font-size: 14px; font-weight: 400; line-height: 24px">
									{{ vendorProducts.textInfo.productName }}
								</p>
								<p v-else style="color: var(--carbon-4, #333); font-size: 14px; font-weight: 400; line-height: 24px">Product Quantity</p>
								<div class="d-flex pa-1" style="border-radius: 6px; border: 1px solid #cecece; width: 141px">
									<v-text-field density="compact" hide-details variant="outline" v-model="productQty"></v-text-field>
									<div>
										<v-btn
											@click="productQty++"
											size="x-small"
											height="18px"
											color="grey-lighten-3"
											flat
											class="pa-0 mb-1 d-flex align-center text-grey-darken-2 rounded-lg"
											icon="mdi mdi-menu-up"
										></v-btn>
										<v-btn
											:disabled="productQty <= 0"
											@click="productQty--"
											size="x-small"
											height="18px"
											color="grey-lighten-3"
											flat
											class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg"
											icon="mdi mdi-menu-down"
										></v-btn>
									</div>
								</div>
							</div>
							<v-divider class="my-4"></v-divider>
							<div class="d-flex align-center justify-space-between">
								<p style="color: #333; font-size: 14px; font-weight: 400; line-height: 24px">Minimum Stock Notification</p>
								<div class="d-flex pa-1" style="border-radius: 6px; border: 1px solid #cecece; width: 141px">
									<v-text-field density="compact" hide-details variant="outline" v-model="minimumQty"></v-text-field>
									<div>
										<v-btn
											@click="minimumQty++"
											size="x-small"
											height="18px"
											color="grey-lighten-3"
											flat
											class="pa-0 mb-1 d-flex align-center text-grey-darken-2 rounded-lg"
											icon="mdi mdi-menu-up"
										></v-btn>
										<v-btn
											:disabled="minimumQty <= 0"
											@click="minimumQty--"
											size="x-small"
											height="18px"
											color="grey-lighten-3"
											flat
											class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg"
											icon="mdi mdi-menu-down"
										></v-btn>
									</div>
								</div>
							</div>
							<v-divider class="my-4"></v-divider>

							<v-checkbox
								v-model="continueSellingNoStock"
								@click="continueSellingNoStock = !continueSellingNoStock"
								hide-details
								density="compact"
								color="#00966D"
							>
								<template v-slot:label>
									<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium w-50">
										<h4>Continue selling when out of stock</h4>
										<span
											>This won't affect Umoja POS. Staff will see a warning, but can complete sales when available inventory reaches zero and
											below.</span
										>
									</div>
								</template>
							</v-checkbox>
							<v-checkbox v-model="hasSkuBarCode" @click="hasSkuBarCode = !hasSkuBarCode" hide-details density="compact" color="#00966D">
								<template v-slot:label>
									<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
										This product has a SKU or barcode
									</div>
								</template>
							</v-checkbox>
							<div>
								<p class="inputLabel mt-4">Storage location</p>
								<v-text-field
									v-model="storageAddress"
									placeholder="Add your storage Address "
									density="comfortable"
									append-inner-icon="mdi mdi-alert-circle"
								>
								</v-text-field>
							</div>
						</v-sheet>
						<v-btn
							type="submit"
							flat
							style="background-color: #2c6e63; margin-top: 20px; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px"
							size="x-large"
						>
							Save and continue
						</v-btn>
					</v-form>
				</v-window-item>
				<v-window-item value="Shipping">
					<v-form @submit.prevent="saveShipping" @keydown.enter.prevent="">
						<v-sheet class="cardStyle mt-4" width="800">
							<div class="d-flex mb-4 align-center">
								<p style="color: #333; font-size: 20px; font-weight: 600">Shipping</p>
							</div>

							<div style="overflow: hidden" class="cardStyle rounded-lg px-0 py-4">
								<!-- <div class="pa-4" style="background: #edf3f0">
									<v-radio v-model="physicalProduct" @click="physicalProduct = !physicalProduct" hide-details density="compact" color="#00966D">
										<template v-slot:label>
											<div style="color: #00966d; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
												Physical Product
											</div>
										</template>
									</v-radio>
								</div> -->
								<div class="d-flex align-center">
									<div class="pa-4">
										<p class="inputLabel">Gross Weight</p>
										<div class="d-flex my-2">
											<v-text-field
												style="min-width: 180px"
												class="mr-3 rounded-lg bg-grey-lighten-3"
												density="compact"
												hide-details
												variant="outline"
												v-model="grossWeight"
											></v-text-field>
											<div class="d-flex bg-grey-lighten-3" style="border-radius: 6px; width: 80px">
												<v-text-field density="compact" hide-details variant="outline" value="lb"></v-text-field>
												<div>
													<v-btn
														@click="grossWeight++"
														size="x-small"
														height="18px"
														color="grey-lighten-3"
														flat
														class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg"
														icon="mdi mdi-menu-up"
													></v-btn>
													<v-btn
														@click="grossWeight = grossWeight <= 0 ? grossWeight : grossWeight - 1"
														size="x-small"
														height="18px"
														color="grey-lighten-3"
														flat
														class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg"
														icon="mdi mdi-menu-down"
													></v-btn>
												</div>
											</div>
										</div>
									</div>
									<div class="pa-4">
										<p class="inputLabel">Net Weight</p>
										<div class="d-flex my-2">
											<v-text-field
												style="min-width: 180px"
												class="mr-3 rounded-lg bg-grey-lighten-3"
												density="compact"
												hide-details
												variant="outline"
												v-model="netWeight"
											></v-text-field>
											<div class="d-flex bg-grey-lighten-3" style="border-radius: 6px; width: 80px">
												<v-text-field density="compact" hide-details variant="outline" value="lb"></v-text-field>
												<div>
													<v-btn
														@click="netWeight++"
														size="x-small"
														height="18px"
														color="grey-lighten-3"
														flat
														class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg"
														icon="mdi mdi-menu-up"
													></v-btn>
													<v-btn
														@click="netWeight = netWeight <= 0 ? netWeight : netWeight - 1"
														size="x-small"
														height="18px"
														color="grey-lighten-3"
														flat
														class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg"
														icon="mdi mdi-menu-down"
													></v-btn>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- <v-checkbox
									v-model="shipsInternational"
									@click="shipsInternational = !shipsInternational"
									class="pa-4"
									hide-details
									density="compact"
									color="#00966D"
								>
									<template v-slot:label>
										<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
											This product ships internationally
										</div>
									</template>
								</v-checkbox> -->
								<div class="d-flex align-center">
									<div class="pa-4">
										<p class="inputLabel">Length</p>
										<div class="d-flex my-2">
											<v-text-field
												style="min-width: 120px"
												class="mr-3 rounded-lg bg-grey-lighten-3"
												density="compact"
												hide-details
												variant="outline"
												v-model="length"
											></v-text-field>
											<div class="d-flex bg-grey-lighten-3" style="border-radius: 6px; width: 80px">
												<v-text-field density="compact" hide-details variant="outline" value="lb"></v-text-field>
												<div>
													<v-btn
														@click="length++"
														size="x-small"
														height="18px"
														color="grey-lighten-3"
														flat
														class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg"
														icon="mdi mdi-menu-up"
													></v-btn>
													<v-btn
														@click="length = length <= 0 ? length : length - 1"
														size="x-small"
														height="18px"
														color="grey-lighten-3"
														flat
														class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg"
														icon="mdi mdi-menu-down"
													></v-btn>
												</div>
											</div>
										</div>
									</div>
									<div class="pa-4">
										<p class="inputLabel">Width</p>
										<div class="d-flex my-2">
											<v-text-field
												style="min-width: 120px"
												class="mr-3 rounded-lg bg-grey-lighten-3"
												density="compact"
												hide-details
												variant="outline"
												v-model="width"
											></v-text-field>
											<div class="d-flex bg-grey-lighten-3" style="border-radius: 6px; width: 80px">
												<v-text-field density="compact" hide-details variant="outline" value="lb"></v-text-field>
												<div>
													<v-btn
														@click="width++"
														size="x-small"
														height="18px"
														color="grey-lighten-3"
														flat
														class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg"
														icon="mdi mdi-menu-up"
													></v-btn>
													<v-btn
														@click="width = width <= 0 ? width : width - 1"
														size="x-small"
														height="18px"
														color="grey-lighten-3"
														flat
														class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg"
														icon="mdi mdi-menu-down"
													></v-btn>
												</div>
											</div>
										</div>
									</div>
									<div class="pa-4">
										<p class="inputLabel">Height</p>
										<div class="d-flex my-2">
											<v-text-field
												style="min-width: 120px"
												class="mr-3 rounded-lg bg-grey-lighten-3"
												density="compact"
												hide-details
												variant="outline"
												v-model="height"
											></v-text-field>
											<div class="d-flex bg-grey-lighten-3" style="border-radius: 6px; width: 80px">
												<v-text-field density="compact" hide-details variant="outline" value="lb"></v-text-field>
												<div>
													<v-btn
														@click="height++"
														size="x-small"
														height="18px"
														color="grey-lighten-3"
														flat
														class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg"
														icon="mdi mdi-menu-up"
													></v-btn>
													<v-btn
														@click="height = height <= 0 ? height : height - 1"
														size="x-small"
														height="18px"
														color="grey-lighten-3"
														flat
														class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg"
														icon="mdi mdi-menu-down"
													></v-btn>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- <div class="mt-6">
								<p class="inputLabel">Shipping Method</p>
								<v-select v-model="shippingOption" :items="shippingOptions" label="Select shipping option"> </v-select>
							</div> -->
							<!-- <div style="overflow: hidden" class="rounded-lg cardStyle px-0 py-0">
								<div class="pa-4" style="background: #fff">
									<v-radio v-model="digitalProduct" @click="digitalProduct = !digitalProduct" hide-details density="compact" color="#00966D">
										<template v-slot:label>
											<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
												Digital product or services
											</div>
										</template>
									</v-radio>
								</div>
							</div> -->
						</v-sheet>
						<p v-show="shippingError" style="color: #b00020; font-size: 14px; margin-top: 20px">{{ shippingError }}</p>
						<v-btn
							type="submit"
							flat
							style="background-color: #2c6e63; color: #fff; font-size: 16px; margin-top: 20px; font-weight: 600; padding: 16px 34px"
							size="x-large"
						>
							Save and continue
						</v-btn>
					</v-form>
				</v-window-item>
				<v-window-item value="Variants">
					<variants @clear="clearAll()" />
				</v-window-item>
			</v-window>
		</v-sheet>
	</v-container>
</template>
<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import { formattedPrice } from "~/utils/price";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { inputRules, numRules } from "~/utils/formrules";
import { ref, computed, onMounted, watchEffect } from "vue";
import { useVendorProductStore } from "~/stores/vendorProducts";
import { vendorUseApi } from "~/composables/vendorApi";
import Compressor from "compressorjs";
import { handlephotoUpload, loading, pictureErrors } from "~/composables/uploadProducts";
import { fetchCategories, getCategoryId, getCategoryName, loadingSub, fetchSubCategories } from "~/composables/useCategories";

export default {
	setup() {
		const subCategories = ref([]);
		const selectedCategory = ref("");
		const Categories = ref([]);
		const selectedGender = ref("");

		watch(
			() => [selectedCategory.value, selectedGender.value],
			async () => {
				if (selectedCategory.value && selectedGender.value) {
					subCategories.value = await fetchSubCategories({
						selectedCat: selectedCategory.value,
						Categories: Categories.value,
						gender: selectedGender.value,
						role: "vendor",
					});
				}
			}
		);

		onMounted(async () => {
			Categories.value = await fetchCategories();
		});

		function getSubCategoryId(subCategory) {
			const subCat = subCategories.value.findIndex((subCat) => subCat.name === subCategory);
			if (subCat === -1) {
				return;
			}

			const subCategory_id = subCategories.value[subCat].id;
			return subCategory_id;
		}

		const tab1 = ref("General");
		const vendorProducts = useVendorProductStore();
		const nonNegValue = [
			(v) => v > 0 || "Value must be a non-negative number",
			(v) => !!v || "Field is required",
			(v) => v !== 0 || "Unit per item cannot be 0",
		];
		const productRules = [(v) => !!v || "Product name must be provided!!", (v) => v.length <= 50 || "Product name cannot exceed 50 characters"];
		const descRule = [
			(v) => !!v || "Description of product must be provided!!",
			(v) => v.length <= 200 || "Product description cannot exceed 200 characters",
		];
		const tags = ref([]);
		const newTag = ref("");
		const window = ref("General");

		const addTag = (newTag) => {
			const trimmedNewTag = newTag.trim().toLowerCase();

			if (trimmedNewTag !== "" && tags.value.some((tag) => tag.toLowerCase() === trimmedNewTag)) {
				return;
			}
			tags.value.push(newTag.trim());
		};
		const removeTag = (tag) => {
			const index = tags.value.indexOf(tag);
			if (index !== -1) {
				tags.value.splice(index, 1);
			}
		};
		const handleTagInput = () => {
			addTag(newTag.value);
			newTag.value = ""; // Clear the input field after adding the tag
		};

		const tabs = ["General", "Text", "Price", "Picture", "Inventory", "Shipping", "Variants"];

		const nextTab = () => {
			const currentIndex = tabs.indexOf(tab1.value);
			if (currentIndex !== tabs.length - 1) {
				tab1.value = tabs[currentIndex + 1];
			}
		};

		return {
			nonNegValue,
			productRules,
			descRule,
			addTag,
			handleTagInput,
			tags,
			newTag,
			window,
			vendorProducts,
			tabs,
			tab1,
			nextTab,
			removeTag,
			selectedCategory,
			subCategories,
			Categories,
			getSubCategoryId,
			fetchSubCategories,
			selectedGender,
		};
	},
	components: {
		EditorContent,
	},
	data() {
		return {
			descError: "",
			shippingError: "",
			physicalProduct: false,
			digitalProduct: false,
			shipsInternational: false,
			shippingOption: "",
			length: 0,
			width: 0,
			height: 0,
			grossWeight: 0,
			netWeight: 0,
			trackQty: false,
			continueSellingNoStock: false,
			hasSkuBarCode: false,
			storageAddress: "",
			minimumQty: 0,
			productQty: 0,
			imagePreviews: [],
			checkError: "",
			pictureError: "",
			chargeTax: false,
			ustIndex: "",
			price: "",
			prevPrice: null,
			itemCost: "",
			productSpec: "",
			editorContent: "",
			productStat: "",
			productName: "",
			selectedSubCategory: "",
			newProduct: [],
			productNumber: "",
			unit: "",
			unitperItem: "",
			material: "",
			condition: "",
			conditions: ["New", "Used - Like New", "Used - Like Good", "Used - Good", "Used - Acceptable", "Refurbished"],
			units: [
				"Piece",
				"Pair",
				"Dozen",
				"Pound",
				"Gallon",
				"Pack",
				"Bundle",
				"Kilograms(kg)",
				"Grams(g)",
				"Liter(L)",
				"Mililiter(mL)",
				"Meters(m)",
				"Centimeters(cm)",
			],
			storeOption: false,
			items1: [],
			variantOptions: ["Size", "Color", "Material", "Style"],
			editor: null,
			tab: "Customer Details",
			chip: "All",
			chosen: "",
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
			shippingOptions: ["Umoja Shipping", "DHL", "Fedex"],
		};
	},

	computed: {
		categoryNames() {
			return this.Categories.map((category) => category.name);
		},
		commission() {
			return ((10 / 100) * this.price).toFixed(2);
		},
		profit() {
			return (this.price - this.itemCost - this.commission).toFixed(2);
		},
		margin() {
			if (!this.price || !this.itemCost) {
				return `0.00%`; // or any default value you prefer
			} else {
				const marginPercent = (((this.price - this.itemCost) / this.price) * 100).toFixed(2);
				return `${marginPercent}%`;
			}
		},
	},
	methods: {
		drop(event, index) {
			const file = event.dataTransfer.files[0];
			if (!file) return;

			const allowedFiles = [".svg", ".png", ".jpeg", ".jpg"];
			const maxFileSize = 5 * 1024 * 1024;
			const fileExtension = file.name.split(".").pop().toLowerCase();

			if (!allowedFiles.includes("." + fileExtension)) {
				this.pictureError = "Please upload files having extensions: " + allowedFiles.join(", ");
				return;
			}

			this.pictureError = "";

			if (file.size > maxFileSize) {
				this.pictureError = "File size exceeds the maximum allowed size of 5MB";
				return;
			}
			const reader = new FileReader();
			reader.onload = () => {
				this.imagePreviews[index - 1] = reader.result;
			};
			reader.readAsDataURL(file);
		},

		handleFileInputChange(event, index) {
			const file = event.target.files[0]; // Get the first selected file
			if (!file) return; // Return if no file is selected
			const allowedFiles = [".svg", ".png", ".jpeg", ".jpg"];
			const maxFileSize = 5 * 1024 * 1024;
			const fileExtension = file.name.split(".").pop().toLowerCase();

			if (!allowedFiles.includes("." + fileExtension)) {
				this.pictureError = "Please upload files having extensions: " + allowedFiles.join(", ");
				return;
			}

			this.pictureError = "";

			if (file.size > maxFileSize) {
				this.pictureError = "File size exceeds the maximum allowed size of 5MB";
				return;
			}
			const reader = new FileReader();

			// Define onload event handler
			reader.onload = () => {
				// Update imagePreviews array with Base64 data of the selected file

				this.imagePreviews[index - 1] = reader.result;
			};

			// Read the selected file as a data URL
			reader.readAsDataURL(file);
		},
		updateSubcategories() {
			this.selectedSubCategory = null;
		},
		saveGeneral() {
			const data = {
				productNumber: this.productNumber,
				unit: this.unit,
				unitperItem: this.unitperItem,
				material: this.material,
				Condition: this.condition,
			};
			if (this.unit && this.unitperItem && this.unitperItem > 0) {
				this.vendorProducts.saveGeneralInfo(data);
				this.nextTab();
			}
		},
		saveText() {
			this.descError = "";
			const data = {
				productName: this.productName,
				productStatus: this.productStat,
				productSpec: this.productSpec,
				Category: getCategoryId(this.selectedCategory, this.Categories).toString(),
				SubCategory: this.getSubCategoryId(this.selectedSubCategory).toString(),
				Gender: this.selectedGender,
				Description: this.editorContent,
				Tags: this.tags,
			};
			if (this.editorContent.length <= 20) {
				this.descError = "Product description must exceed 20 characters!!";
				return;
			}
			if (this.editorContent.length > 500) {
				this.descError = "Product description cannot exceed 500 characters!!";
				return;
			}
			if (this.productName && this.editorContent && this.productSpec && this.selectedCategory && this.selectedSubCategory) {
				this.vendorProducts.saveTextInfo(data);
				this.descError = "";
				this.nextTab();
			}
		},
		savePrice() {
			this.checkError = "";
			const data = {
				price: this.price,
				commission: this.commission,
				comparePrice: this.prevPrice,
				costPerItem: this.itemCost,
				profit: this.profit,
				margin: this.margin.split("%")[0],
			};

			if (this.price && this.itemCost) {
				if (this.prevPrice > 0 && Number(this.price) > Number(this.prevPrice)) {
					this.checkError = "Compare at price cannot be less than the price";
					return;
				}
				if (Number(this.price) < Number(this.itemCost)) {
					this.checkError = "Cost per item cannot be more than the price";
					return;
				}
				this.checkError = "";
				this.vendorProducts.savePriceInfo(data);
				this.nextTab();
			}
		},
		async savePictures() {
			if (this.imagePreviews.length >= 4) {
				this.pictureError = "";
				const response = await handlephotoUpload(this.imagePreviews, this.pictureError);
				if (response) {
					this.nextTab();
				}
			} else {
				this.pictureError = "a minimum of 4 product images must be provided";
			}
		},
		saveInventory() {
			const data = {
				trackQty: this.trackQty ? 1 : 0,
				productQty: this.productQty,
				minimumQty: this.minimumQty,
				continueSellingNoStock: this.continueSellingNoStock ? 1 : 0,
				hasSkuBarCode: this.hasSkuBarCode ? 1 : 0,
				storageAddress: this.storageAddress,
			};
			this.vendorProducts.saveInventoryInfo(data);
			this.nextTab();
		},
		saveShipping() {
			this.shippingError = "";

				// if (!this.grossWeight || !this.netWeight || !this.length || !this.width || !this.height || !this.shippingOption) {
				// 	this.shippingError = "Please fill in all compulsory fields.";
				// 	return;
				// }

			const data = {
				netWeight: this.netWeight,
				grossWeight: this.grossWeight,
				length: this.length,
				height: this.height,
				width: this.width,
			};
			this.vendorProducts.saveShippingInfo(data);
			this.nextTab();
		},
		clearAll() {
			this.productNumber = "";
			this.unit = "";
			this.unitperItem = "";
			this.material = "";
			this.condition = "";
			this.productName = "";
			this.productStat = "";
			this.productSpec = "";
			this.selectedCategory = "";
			this.selectedSubCategory = "";
			this.selectedGender = "";
			this.editor.commands.setContent("");
			this.tags = "";
			this.ustIndex = "";
			this.price = "";
			this.prevPrice = null;
			this.chargeTax = false;
			this.itemCost = "";
			this.imagePreviews = [];
			this.trackQty = false;
			this.productQty = 0;
			this.minimumQty = 0;
			this.continueSellingNoStock = false;
			this.hasSkuBarCode = false;
			this.storageAddress = "";
			this.physicalProduct = false;
			this.netWeight = 0;
			this.grossWeight = 0;
			this.shipsInternational = false;
			this.length = 0;
			this.height = 0;
			this.width = 0;
			this.digitalProduct = false;
			this.shippingOption = "";
			this.window = "General";
		},
	},

	mounted() {
		this.items = this.items1;

		this.editor = new Editor({
			extensions: [
				StarterKit,
				Link,
				Underline,
				TextAlign.configure({
					types: ["heading", "paragraph"],
				}),
			],
		});

		this.editor.on("update", ({ editor }) => {
			this.editorContent = editor.getText(); // or use getText() for plain text
		});
	},
};
</script>

<style scoped>
.tooltip-content {
	max-width: 200px; /* Set the maximum width of the tooltip */
	color: black; /* Set text color */
	text-align: right; /* Align text to the right */
}

.strike-through {
	text-decoration: line-through; /* Add a strike-through effect */
}
</style>
