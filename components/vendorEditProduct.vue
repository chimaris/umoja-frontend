<template>
	<v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
		<div class="d-flex pb-4 pt-2 justify-space-between">
			<div class="d-flex align-center">
				<h1 style="font-weight: 700; font-size: 24px; line-height: 30px; letter-spacing: -0.02em">Edit Product</h1>
			</div>
		</div>

		<v-sheet style="" color="transparent" class="mt-2">
			<v-tabs v-model="tab1" color="green">
				<v-tab
					v-for="item in tabs"
					:key="item"
					:value="item"
					class="d-flex text-capitalize align-center"
				>
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
							<v-text-field v-model="product.sku" disabled = "true" placeholder="Enter product number (optional) " density="comfortable" append-inner-icon="mdi mdi-alert-circle">
							</v-text-field>
						</div>
						<div>
							<p class="inputLabel">Unit</p>
							<v-select v-model="product.unit" :rules="inputRules" :items="units" placeholder="Select unit" density="comfortable"> </v-select>
						</div>
						<div>
							<p class="inputLabel">Unit Per Item</p>
							<v-text-field v-model="product.unit_per_item" :rules="nonNegValue" placeholder="Eg. 1, 2, 3, 4" type="number"  density="comfortable"> </v-text-field>
						</div>
						<div>
							<p class="inputLabel">Material</p>
							<v-text-field v-model="product.material" placeholder="Eg. cotton, leather, wood" density="comfortable"> </v-text-field>
						</div>
						<div>
							<p class="inputLabel">Condition</p>
							<v-select v-model="product.condition" :items="conditions"  placeholder="Select product condition" density="comfortable"> </v-select>
						</div>
					</v-sheet>
					<!-- <v-sheet class="cardStyle my-4" width="800">
						<div class="d-flex align-center">
							<p style="color: #333; font-size: 20px; font-weight: 600">Selling Type</p>
						</div>
						<v-divider class="my-4"></v-divider>
						<v-checkbox @click="toggleSellOnline" :v-model="isSellingOnline" hide-details density="compact" color="#00966D">
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
                    <v-btn type="submit" class="my-5" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						<span class="mr-4">Save changes</span>
						<v-progress-circular v-if="editStore.loading" indeterminate :width="2" :size="20"></v-progress-circular>
					</v-btn>
					<v-btn @click="discardChanges()" class="my-5 ml-5" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						Discard changes
					</v-btn>
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
										v-model="product.name"
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
												<v-btn flat icon="mdi mdi-format-align-left" class="mr-1" @click="editor.chain().focus().setTextAlign('left').run()"> </v-btn>
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
											<editor-content :editor="editor"  v-model="editorContent" />
										</div>
									</v-card>
									<p style="color: #B00020; font-size: 14px; margin: 5px 0;" >{{descError}}</p>
									<p style="color: #969696; font-size: 12px; font-weight: 400">Do not exceed 500 characters when giving the product description</p>
								</div>
								<div>
									<p class="inputLabel mt-4">Product Specifications (Main features)</p>
									<v-textarea :rules="inputRules" v-model="product.product_spec" variant="filled" hint="Each product feature should be separated with a comma (,)" persistent-hint></v-textarea>
									
								</div>
							</v-sheet>
						</v-col>
						<v-col cols="12" sm="4">
							<v-sheet class="cardStyle">
								<div class="d-flex align-center">
									<p style="color: #333; font-size: 20px; font-weight: 600">Product status</p>
								</div>
								<v-select class="mt-4" :items="['Active', 'Draft']" v-model = "product.status"  placeholder="Active" density="comfortable"> </v-select>
							</v-sheet>
							<v-sheet class="cardStyle mt-4">
								<div class="d-flex align-center mb-6">
									<p style="color: #333; font-size: 20px; font-weight: 600">Product Organization</p>
								</div>
								<div>
									<p class="inputLabel">Gender</p>
									<v-select v-model="product.gender" :items="['Male', 'Female', 'Unisex']"  placeholder="Unisex" density="comfortable"> </v-select>
								</div>
								<div>
									<p class="inputLabel">Category</p>
									<v-select  :items="Categories.map(category => category.name)" v-model="product.category_name" :rules="inputRules" placeholder="Fashion and style" density="comfortable"> </v-select>
								</div>
								<div>
									<p class="inputLabel">Sub Category</p>
									<v-select :loading="loadingSub" color="green" :items="subCategories.map(subCategory => subCategory.name)" v-model="product.sub_category_name" :rules="inputRules"  placeholder="Sneakers" density="comfortable"> </v-select>
								</div>
							
								<div>
									<p class="inputLabel">Tags</p>
									<v-text-field @keyup.enter="handleTagInput()" v-model="newTag" placeholder="Find or create tags" density="comfortable"> </v-text-field>
								</div>
								<div>
									<v-chip
										size="small"
										class="ma-1"
										style="border: 0.5px solid var(--magnetic-green-3, #94aaa5); font-size: 12px"
										close-icon="mdi mdi-close-circle-outline"
										rounded="lg"
										v-for="tag in product.tags"
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
					<v-btn type="submit" class="my-2" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						<span class="mr-4">Save changes</span>
						<v-progress-circular v-if="editStore.loading" indeterminate :width="2" :size="20"></v-progress-circular>
					</v-btn>
					<v-btn @click="discardChanges()" class="my-5 ml-5" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						Discard changes
					</v-btn>
					</v-form>
						
				</v-window-item>
				<v-window-item value="Price">
						<v-sheet class="cardStyle px-0 my-4" width="800">
						<div class="px-5">
							<div class="d-flex align-center">
								<p style="color: #333; font-size: 20px; font-weight: 600">Item Price</p>
							</div>
							<div class="mt-6">
								<p class="inputLabel">Ust Index (Optional)</p>
								<v-select v-model="product.ust_index" :items="['0%', '5%', '19%', '20%']" placeholder="Eg. 19%" density="comfortable"> </v-select>
							</div>
							<v-row>
								<v-col>
									<p class="inputLabel">Price</p>
									<v-text-field :rules="numRules" v-model="product.price" placeholder="€ 0.00" density="comfortable"> </v-text-field
								></v-col>
								<v-col>
									<p class="inputLabel">Commission</p>
									<v-text-field v-model="commission"  placeholder="€ 0.00" density="comfortable"> </v-text-field
								></v-col>
								<v-col>
									<p >Compare-at price (Optional)</p>
									<v-tooltip text="" location="end" depressed class="elevation-24" >
										<template v-slot:activator="{ props }">
										<v-text-field v-bind="props" v-model="product.compare_at_price" placeholder="€ 0.00" density="comfortable"></v-text-field>
										</template>
										<template v-slot:default="{ attrs }">
										<div class="tooltip-content" v-bind="attrs">
											To display a markdown, enter a value higher than your price. Often shown with a strike through (e.g. <span class="strike-through">€25.00</span>).
										</div>
										</template>
									</v-tooltip>
								</v-col>
							</v-row>
							<v-checkbox v-model="isTaxCharged" @click="toggleTax()" hide-details density="compact" color="#00966D">
								<template v-slot:label>
									<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
										Charge tax on this product
									</div>
								</template>
							</v-checkbox>
						</div>
						<v-divider class="my-4"></v-divider>
						<v-row class="px-5">
							<v-col>
								<p class="inputLabel">Cost per item</p>
								<v-text-field v-model="product.cost_per_item" placeholder="€ 0.00" :rules="numRules"  density="comfortable"> </v-text-field>
							</v-col>
							<v-col>
								<p class="inputLabel">Profit</p>
								<v-text-field  v-model="profit" placeholder="€ 0.00" density="comfortable"> </v-text-field>
							</v-col>
							<v-col>
								<p class="inputLabel">Margin</p>
								<v-text-field  v-model="margin" placeholder="€ 0.00" density="comfortable"> </v-text-field>
							</v-col>
						</v-row>
					</v-sheet>
					<p class="my-2" style="color: #B00020; font-size: 14px;">{{checkError}}</p>
					<v-btn @click="savePrice"  class="my-3" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						<span class="mr-4">Save changes</span>
						<v-progress-circular v-if="editStore.loading" indeterminate :width="2" :size="20"></v-progress-circular>
					</v-btn>
					<v-btn @click="discardChanges()" class="my-5 ml-5" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						Discard changes
					</v-btn>
				</v-window-item>
				<v-window-item value="Picture" >
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
							<v-col class="text-center" v-if="imagePreviews[0]" cols="12" md="4" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event, 1)">
								<div style="width: 100%;">
									<v-img
									contain
									width="100%"
									class="bg-grey-lighten-4 rounded-lg"
									height="298"
									:src="imagePreviews[0]"
								></v-img>
								</div>
								<div>
									<p class="mt-4" style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
									<p style="color: #333; font-size: 14px; font-weight: 400">select <v-label for="product1" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer;"> click to browse </v-label></p>
									<input style="display: none" id="product1" type="file" @change="handleFileInputChange($event, 1)"/>
								</div>
							</v-col>
							<v-col v-else  cols="12" md="4" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event, 1)">
								<div class="d-flex justify-center align-center pa-2 rounded-lg" style="height: 298px; width: 100%; border: 3.4px dashed #e1e1e1">
									<div class="text-center">
										<v-avatar size="41" class="mb-2" rounded="lg">
											<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1688131104/gallery_j91r7n.png"></v-img>
										</v-avatar>
										<p style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
										<p style="color: #333; font-size: 14px; font-weight: 400">select <v-label for="product1" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer;"> click to browse </v-label></p>
										<input style="display: none" id="product1" type="file" @change="handleFileInputChange($event, 1)"/>
									</div>
								</div>
							</v-col>
							<!-- second product -->
							<v-col class="text-center" v-if="imagePreviews[1]" cols="12" md="4" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event, 2)">
								<div style="width: 100%;">
									<v-img
									contain
									width="100%"
									class="bg-grey-lighten-4 rounded-lg"
									height="298"
									:src="imagePreviews[1]"
								></v-img>
								</div>
								<div>
									<p class="mt-4" style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
									<p style="color: #333; font-size: 14px; font-weight: 400">select <v-label for="product2" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer;"> click to browse </v-label></p>
									<input style="display: none" id="product2" type="file" @change="handleFileInputChange($event, 2)"/>
								</div>
							</v-col>
							<v-col v-else  cols="12" md="4" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event, 2)">
								<div class="d-flex justify-center align-center pa-2 rounded-lg" style="height: 298px; width: 100%; border: 3.4px dashed #e1e1e1">
									<div class="text-center">
										<v-avatar size="41" class="mb-2" rounded="lg">
											<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1688131104/gallery_j91r7n.png"></v-img>
										</v-avatar>
										<p style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
										<p style="color: #333; font-size: 14px; font-weight: 400">select <v-label for="product2" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer;"> click to browse </v-label></p>
										<input style="display: none" id="product2" type="file" @change="handleFileInputChange($event, 2)"/>
									</div>
								</div>
							</v-col>
							<v-col cols="12" md="4">
								<!-- 3rd product -->
								<div v-if="imagePreviews[2]" class="d-flex  flex-column justify-center mb-10 align-center pa-2 rounded-lg" style="height: 141px; width: 100%;" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event, 3)">
									<v-img
									contain
									width="100%"
									class="bg-grey-lighten-4 rounded-lg"
									height="298"
									:src="imagePreviews[2]"
								></v-img>
								<p class="mt-3" style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
								<p style="color: #333; font-size: 14px; font-weight: 400">select <v-label for="product3" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer;"> click to browse </v-label></p>
								<input  style="display: none" id="product3" type="file" @change="handleFileInputChange($event, 3)" />
								</div>
								<div v-else class="d-flex justify-center mb-4 align-center pa-2 rounded-lg" style="height: 141px; width: 100%; border: 3.4px dashed #e1e1e1" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event, 3)">
									<div class="text-center">
										<v-avatar size="41" class="mb-2" rounded="lg">
											
											<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1688131104/gallery_j91r7n.png"></v-img>
										</v-avatar>
										<p style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
										<p style="color: #333; font-size: 14px; font-weight: 400">select <v-label for="product3" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer;"> click to browse </v-label></p>
										<input style="display: none" id="product3" type="file" @change="handleFileInputChange($event, 3)"/>
									</div>
								</div>
								<!-- 4th product -->
								<div v-if="imagePreviews[3]" class="d-flex justify-center flex-column mt-5 mb-4 align-center pa-2 rounded-lg" style="height: 141px; width: 100%;" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event, 4)">
									<v-img
									contain
									width="100%"
									class="bg-grey-lighten-4 rounded-lg"
									height="298"
									:src="imagePreviews[3]"
								></v-img>
								<p class="mt-3" style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
								<p style="color: #333; font-size: 14px; font-weight: 400">select <v-label for="product4" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer;"> click to browse </v-label></p>
								<input style="display: none" id="product4" type="file" @change="handleFileInputChange($event, 4)" />
								</div>
								<div v-else class="d-flex justify-center align-center mt-2 pa-2 rounded-lg" style="height: 141px; width: 100%; border: 3.4px dashed #e1e1e1" @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event, 4)">
									<div class="text-center">
										<v-avatar size="41" class="mb-2" rounded="lg">
											<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1688131104/gallery_j91r7n.png"></v-img>
										</v-avatar>
										<p style="color: #333; font-size: 14px; font-weight: 400">Drop your images here, or</p>
										<p style="color: #333; font-size: 14px; font-weight: 400">select <v-label for="product4" style="color: #1273eb; font-size: 14px; font-weight: 400; cursor: pointer;"> click to browse </v-label></p>
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
					<p style="color: #B00020; font-size: 14px; margin-top: 20px">{{pictureError}}</p>
					<p style="color: #B00020; font-size: 14px; margin-top: 20px">{{vendorProducts.pictureError}}</p>
					<v-btn type="submit" class="my-3" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						<span class="mr-4">Save changes</span>
						<v-progress-circular v-if="editStore.loading" indeterminate :width="2" :size="25"></v-progress-circular>
					</v-btn>
					<v-btn @click="discardChanges()" class="my-5 ml-5" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						Discard changes
					</v-btn>
					</v-form>
				</v-window-item>
				<v-window-item value="Inventory" >
					<v-form @submit.prevent="saveInventory" @keydown.enter.prevent="">
						<v-sheet class="cardStyle mt-4" width="800">
							<div class="d-flex mb-4 align-center">
								<p style="color: #333; font-size: 20px; font-weight: 600">Inventory</p>
								<div class="ml-1">
									<v-icon size="16" icon="mdi mdi-information"> </v-icon>
									<v-tooltip activator="parent" location="end" class="text-red"> inventory</v-tooltip>
								</div>
							</div>
							<v-checkbox v-model="trackQty" @click="toggleTrack()" density="compact" color="#00966D">
								<template v-slot:label>
									<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">Track Quantity</div>
								</template>
							</v-checkbox>
							<p style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px">Quantity</p>
							<div class="d-flex align-center justify-space-between">
								<p  style="color: var(--carbon-4, #333); font-size: 14px; font-weight: 400; line-height: 24px">
									{{product.name}}
								</p>
								<div class="d-flex pa-1" style="border-radius: 6px; border: 1px solid #cecece; width: 141px">
									<v-text-field density="compact" hide-details variant="outline" v-model="product.made_with_ghana_leather"></v-text-field>
									<div>
										<v-btn
											@click="product.made_with_ghana_leather ++;"
											size="x-small"
											height="18px"
											color="grey-lighten-3"
											flat
											class="pa-0 mb-1 d-flex align-center text-grey-darken-2 rounded-lg"
											icon="mdi mdi-menu-up"
										></v-btn>
										<v-btn
											:disabled= "product.made_with_ghana_leather <= 0"
											@click="product.made_with_ghana_leather --;"
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
									<v-text-field density="compact" hide-details variant="outline" v-model="product.mini_stock"></v-text-field>
									<div>
										<v-btn
										   @click="product.mini_stock ++;"
											size="x-small"
											height="18px"
											color="grey-lighten-3"
											flat
											class="pa-0 mb-1 d-flex align-center text-grey-darken-2 rounded-lg"
											icon="mdi mdi-menu-up"
										></v-btn>
										<v-btn
											:disabled= "product.mini_stock <= 0"
											@click="product.mini_stock --;"
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
	
							<v-checkbox v-model="continueSellingNoStock" @click="toggleContinueSleeping()" hide-details density="compact" color="#00966D">
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
							<v-checkbox v-model="hasSkuBarCode" @click="toggleHasSku()" hide-details density="compact" color="#00966D">
								<template v-slot:label>
									<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
										This product has a SKU or barcode
									</div>
								</template>
							</v-checkbox>
							<div>
								<p class="inputLabel mt-4">Storage location</p>
								<v-text-field v-model="product.storage_location" placeholder="Add your storage Address " density="comfortable" append-inner-icon="mdi mdi-alert-circle">
								</v-text-field>
							</div>
						</v-sheet>
                        <p style="color: #B00020; font-size: 14px; margin-top: 20px">{{inventoryError}}</p>
						<v-btn type="submit" class="my-3" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						<span class="mr-4">Save changes</span>
						<v-progress-circular v-if="editStore.loading" indeterminate :width="2" :size="20"></v-progress-circular>
					    </v-btn>
						<v-btn @click="discardChanges()" class="my-5 ml-5" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						Discard changes
					</v-btn>
					</v-form>
				</v-window-item>
				<v-window-item value="Shipping">
					<v-form @submit.prevent="saveShipping" @keydown.enter.prevent="">
						<v-sheet class="cardStyle mt-4" width="800">
							<div class="d-flex mb-4 align-center">
								<p style="color: #333; font-size: 20px; font-weight: 600">Shipping</p>
							</div>
	
							<div style="overflow: hidden" class="cardStyle rounded-lg px-0 py-0">
								<div class="pa-4" style="background: #edf3f0">
									<v-radio v-model="physicalProduct" @click="physicalProduct = !physicalProduct" hide-details density="compact" color="#00966D">
										<template v-slot:label>
											<div style="color: #00966d; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
												Physical Product
											</div>
										</template>
									</v-radio>
								</div>
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
											v-model="product.gross_weight"
										></v-text-field>
										<div class="d-flex bg-grey-lighten-3" style="border-radius: 6px; width: 80px">
											<v-text-field density="compact" hide-details variant="outline" value="lb"></v-text-field>
											<div>
												<v-btn
													 @click="product.gross_weight ++;"
													size="x-small"
													height="18px"
													color="grey-lighten-3"
													flat
													class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg"
													icon="mdi mdi-menu-up"
												></v-btn>
												<v-btn
													@click="product.gross_weight = product.gross_weight <= 0 ? product.gross_weight : product.gross_weight - 1"
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
											v-model="product.net_weight"
										></v-text-field>
										<div class="d-flex bg-grey-lighten-3" style="border-radius: 6px; width: 80px">
											<v-text-field density="compact" hide-details variant="outline" value="lb"></v-text-field>
											<div>
												<v-btn
													 @click="product.net_weight ++;"
													size="x-small"
													height="18px"
													color="grey-lighten-3"
													flat
													class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg"
													icon="mdi mdi-menu-up"
												></v-btn>
												<v-btn
													@click="product.net_weight = product.net_weight <= 0 ? product.net_weight : product.net_weight - 1;"
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
								<v-checkbox v-model="shipsInternational" @click="toggleShipsInternational()" class="pa-4" hide-details density="compact" color="#00966D">
										<template v-slot:label>
											<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
												This product ships internationally
											</div>
										</template>
									</v-checkbox>
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
											v-model="product.length"
										></v-text-field>
										<div class="d-flex bg-grey-lighten-3" style="border-radius: 6px; width: 80px">
											<v-text-field density="compact" hide-details variant="outline" value="lb"></v-text-field>
											<div>
												<v-btn
													 @click="product.length ++;"
													size="x-small"
													height="18px"
													color="grey-lighten-3"
													flat
													class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg"
													icon="mdi mdi-menu-up"
												></v-btn>
												<v-btn
													@click="product.length = product.length <= 0 ? product.length : product.length - 1;"
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
											v-model="product.weight"
										></v-text-field>
										<div class="d-flex bg-grey-lighten-3" style="border-radius: 6px; width: 80px">
											<v-text-field density="compact" hide-details variant="outline" value="lb"></v-text-field>
											<div>
												<v-btn
													 @click="product.weight ++;"
													size="x-small"
													height="18px"
													color="grey-lighten-3"
													flat
													class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg"
													icon="mdi mdi-menu-up"
												></v-btn>
												<v-btn
													@click="product.weight = product.weight  <= 0 ? product.weight  : product.weight  - 1;"
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
											v-model="product.height"
										></v-text-field>
										<div class="d-flex bg-grey-lighten-3" style="border-radius: 6px; width: 80px">
											<v-text-field density="compact" hide-details variant="outline" value="lb"></v-text-field>
											<div>
												<v-btn
													 @click="product.height++;"
													size="x-small"
													height="18px"
													color="grey-lighten-3"
													flat
													class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg"
													icon="mdi mdi-menu-up"
												></v-btn>
												<v-btn
													@click="product.height= product.height <= 0 ? product.height : product.height - 1;"
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
							<div class="my-4">
								<p class="inputLabel">Shipping Method</p>
								<v-select
									v-model="product.shipping_method"
									:items="shippingOptions"
									label="Select shipping option">	
								</v-select>
							</div>
							<div style="overflow: hidden" class="rounded-lg cardStyle px-0 py-0">
								<div class="pa-4" style="background: #fff">
									<v-radio v-model="digitalProduct" @click="toggleDigitalproduct()" hide-details density="compact" color="#00966D">
										<template v-slot:label>
											<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
												Digital product or services
											</div>
										</template>
									</v-radio>
								</div>
							</div>
						</v-sheet>
						<p style="color: #B00020; font-size: 14px; margin-top: 20px">{{shippingError}}</p>
						<v-btn type="submit" class="my-3" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						<span class="mr-4">Save changes</span>
						<v-progress-circular v-if="editStore.loading" indeterminate :width="2" :size="20"></v-progress-circular>
					    </v-btn>
						<v-btn @click="discardChanges()" class="my-5 ml-5" flat style="background-color: #2c6e63; color: #fff; font-size: 16px; font-weight: 600; padding: 16px 34px" size="x-large">
						Discard changes
					</v-btn>
					</v-form>
				</v-window-item>
				<v-window-item value="Variants">
					<editVariant @discardChange="discardChanges()" :product= "product"/>
				</v-window-item>
			</v-window>
		</v-sheet>
	</v-container>
</template>
<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import {inputRules, numRules} from '~/utils/formrules'
import { ref, computed, onMounted, watchEffect, onBeforeMount } from 'vue';
import {useVendorProductStore} from '~/stores/vendorProducts'
import {vendorUseApi} from '~/composables/vendorApi'
import Compressor from 'compressorjs';
import {useEditVendorStore} from '~/stores/editProduct';
import { emitEvent } from '~/utils/eventBus';
import { useRouter } from 'vue-router'
import {fetchCategories, getCategoryId, getCategoryName, loadingSub, fetchSubCategories} from '~/composables/useCategories';

export default {

	setup() {
		const subCategories = ref([])
		const Categories = ref([])
        const editStore = useEditVendorStore()
        const product = computed(() => editStore.currentEditProduct);
		const originalProduct = ref(null)
        const router = useRouter()

		watch(() => [product.value.category_name, product.value.gender ],  async () => {
			if (product.value.category_name && product.value.gender){
				subCategories.value = await fetchSubCategories({selectedCat: product.value.category_name, Categories: Categories.value , gender: product.value.gender, role: 'vendor'});
			}
		});

		onMounted(async () => {
			originalProduct.value = {...product.value}
            if (!product) {
                router.push('/vendor/dashboard/Products')
            }
			Categories.value = await fetchCategories()
			if (product.value.category_name && product.value.gender){
				subCategories.value = await fetchSubCategories({selectedCat: product.value.category_name, Categories: Categories.value , gender: product.value.gender, role: 'vendor'});
			}
			if (!product.value.colors || !product.value.sizes || !product.value.materials || !product.value.styles) {
			product.value.colors = [];
			product.value.sizes = [];
			product.value.materials = [];
			product.value.styles = [];
		}
            
		});
		const discardChanges = () => {
			// Reset the product data to its original state
			editStore.currentEditProduct = { ...originalProduct.value };
			};
		function getSubCategoryId(subCategory) {
			const subCat = subCategories.value.findIndex(subCat => subCat.name === subCategory);
			if (subCat === -1) {
				return
			}

			const subCategory_id = subCategories.value[subCat].id
			return subCategory_id
		}
		const tab1 = ref('General');
		const vendorProducts = useVendorProductStore()
		const nonNegValue = [
		v => v > 0 || "Value must be a non-negative number",
		v => !!v || "Field is required",
		v => v !== 0 || "Unit per item cannot be 0"
		]
		const productRules = [
			v => !!v || 'Product name must be provided!!',
			v => v.length <= 50 || 'Product name cannot exceed 50 characters'
		]
		const descRule = [
			v => !!v || 'Description of product must be provided!!',
			v => v.length <= 200 || 'Product description cannot exceed 200 characters'
		]
		const newTag = ref("");
		const window = ref("General");


		const addTag = (newTag) => {
			const trimmedNewTag = newTag.trim().toLowerCase();

				if (trimmedNewTag !== '' && product.value.tags.some(tag => tag.toLowerCase() === trimmedNewTag)) {
					return; 
				}
				product.value.tags.push(newTag.trim());
		};
		const removeTag = (tag) => {
			const index = product.value.tags.indexOf(tag);
			if (index !== -1) {
				product.value.tags.splice(index, 1);
			}
		};
		const handleTagInput = () => {
				addTag(newTag.value);
				newTag.value = ''; // Clear the input field after adding the tag
		};

		

		const tabs = ['General', 'Text', 'Price', 'Picture', 'Inventory', 'Shipping', 'Variants']

		const nextTab = () => {
			const currentIndex = tabs.indexOf(tab1.value);
			if (currentIndex !== tabs.length - 1) {
				tab1.value = tabs[currentIndex + 1]
			}
	
		}


		return {
			nonNegValue,
			productRules,
			descRule,
			addTag,
			handleTagInput,
			newTag,
			window,
			originalProduct,
			vendorProducts,
			discardChanges,
			tabs,
			tab1,
			nextTab,
			removeTag,
			subCategories,
			Categories,
			getCategoryName,
			getCategoryId,
			getSubCategoryId,
			fetchSubCategories,
			fetchCategories,
            product, 
            editStore
			
		}
	},
    components: {
        EditorContent,
    },
    data() {
        return {
			descError: "",
            inventoryError: "",
			shippingError: "",
			physicalProduct: false,
			imagePreviews: [...this.product.photo.split(',')],
			checkError: "",
			pictureError: "",
            editorContent: this.product.description,
			newProduct: [],
			conditions: ["New", "Used - Like New", "Used - Like Good", "Used - Good", "Used - Acceptable", "Refurbished"],
			units : ['Piece', 'Pair', 'Dozen', 'Pound', 'Gallon', 'Pack', 'Bundle', 'Kilograms(kg)', 'Grams(g)', 'Liter(L)', 'Mililiter(mL)', 'Meters(m)', 'Centimeters(cm)'],
			items1: [],
			variantOptions: ["Size", "Color", "Material", "Style"],
            editor: null,
            tab: 'Customer Details',
            chip: 'All',
            chosen: '',
			shippingOptions: ["Umoja Shipping", "DHL", "Fedex",],
            summary: [
                {
                    title: 'Total Quantity',
                    value: '4 Items'
                },
                {
                    title: 'Grand Total',
                    value: '€ 1,829.00'
                }, {
                    title: 'Sub-Total',
                    value: '€ 1,817.00'
                },
                {
                    title: 'Shipping International',
                    value: '€ 12.00'
                },
                {
                    title: 'Taxes',
                    value: '€ 0.00'
                }
            ],
        }
    },
	
    computed: {
        editStore(){
            return useEditVendorStore()
        },
        isTaxCharged() {
            return this.product.tax_charge_on_product === 1
        },
        isSellingOnline() {
            return this.product.sell_online === 1
        },
        trackQty() {
            return this.product.track_quantity === 1
        },
        continueSellingNoStock(){
            return this.product.sell_out_of_stock === 1
        },
        hasSkuBarCode(){
            return this.product.has_sku === 1
        },
        shipsInternational(){
            return this.product.product_ship_internationally === 1
        },
        digitalProduct(){
            return this.product.digital_product_or_service === 1
        },
		categoryNames() {
      		return this.Categories.map(category => category.name);
       },
	   commission(){
			return ((10/100) * this.product.price).toFixed(2)
	   },
	   profit(){
			return (this.product.price - this.product.cost_per_item - this.commission).toFixed(2)
	   },
	   margin(){
		if ((!this.product.price) || (!this.product.cost_per_item)) {
    		return "0.00%"; // or any default value you prefer
		} else {
			const marginPercent = (((this.product.price - this.product.cost_per_item) / this.product.price) * 100).toFixed(2);
			return  `${marginPercent}%`
		}
	   },
    },
	methods: {
        toggleTax() {
            this.product.tax_charge_on_product = this.product.tax_charge_on_product === 1 ? 0 : 1;
        },
        toggleSellOnline() {
            this.product.sell_online = this.product.sell_online === 1 ? 0 : 1;
        },
        toggleTrack(){
            this.product.track_quantity = this.product.track_quantity === 1 ? 0 : 1;
        },
        toggleContinueSleeping(){
            this.product.sell_out_of_stock = this.product.sell_out_of_stock === 1 ? 0 : 1;
        },
        toggleHasSku(){
            this.product.has_sku = this.product.has_sku === 1 ? 0 : 1;
        },
        toggleShipsInternational(){
            this.product.product_ship_internationally = this.product.product_ship_internationally === 1 ? 0 : 1;
        },
        toggleDigitalproduct() {
            this.product.digital_product_or_service = this.product.digital_product_or_service === 1 ? 0 : 1;
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
			this.imagePreviews[index - 1] = reader.result
		};
		reader.readAsDataURL(file);
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
		
		this.imagePreviews[index - 1] = reader.result
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    },
		updateSubcategories() {
      		this.selectedSubCategory = null;
    	},
		async saveGeneral() {
            
			const data = {
				unit: this.product.unit,
				unit_per_item: this.product.unit_per_item,
				material: this.product.material,
				condition: this.product.condition,
			}
			if (this.product.sku && this.product.unit_per_item && this.product.unit_per_item> 0) {
				try {
                    this.editStore.loading = true;
                    const res = await this.editStore.editProduct(data)
					if (res){
						emitEvent('product-updated', this.product);
						this.nextTab()
                    	setLocalStorageItem("current-edit", this.product)
					}
					
                }catch(error){
                    console.error("error", error)
                }finally {
                    this.editStore.loading = false;
                }
			}
		},
		async saveText() {
			this.descError = ""
			const data = {
				name: this.product.name,
				status: this.product.status,
				product_spec: this.product.product_spec,
				category_id: getCategoryId(this.product.category_name, this.Categories).toString(),
                sub_category_id: this.getSubCategoryId(this.product.sub_category_name)?.toString(),
				gender: this.product.gender,
				description: this.editorContent,
				tags: this.product.tags
			}
			if (this.editorContent.length <= 20) {
				this.descError = "Product description must exceed 20 characters!!"
				return
			}
			if (this.editorContent.length > 500) {
				this.descError = "Product description cannot exceed 500 characters!!"
				return
			}
		
                try {
                    this.descError = ""
                    this.editStore.loading = true;
                    const res = await this.editStore.editProduct(data)
					if (res){
						emitEvent('product-updated', this.product);
						this.nextTab()
                    	setLocalStorageItem("current-edit", this.product)
					}
                }catch(error){
                    if (error.response) {
                        this.descError = error.response.data.message || 'An error occurred while saving changes.';
                    } else if (error.request) {
                        this.descError = 'No response received from server. Please try again later.';
                    } else {
                        this.descError = 'An error occurred. Please try again later.';
                    }
                }finally {
                    this.editStore.loading = false;
                }
			
		},
		async savePrice() {
			this.checkError = ""
			const data = {
				ust_index: this.product.ust_index,
				price: this.product.price,
				commission: this.commission,
				compare_at_price: this.product.compare_at_price,
				tax_charge_on_product: this.product.tax_charge_on_product,
				cost_per_item: this.product.cost_per_item,
				profit: this.profit,
				margin: this.margin.split('%')[0]
			}
			
			if (this.product.price && this.product.cost_per_item) {
				if (this.product.compare_at_price > 0 && Number(this.product.price) > Number(this.product.compare_at_price)) {
				this.checkError = "Compare at price cannot be less than the price"
				return
				}
				if (Number(this.product.price) < Number(this.product.cost_per_item)) {
				this.checkError = "Cost per item cannot be more than the price"
				return
			    }
                try {
                    this.checkError= ""
                    this.editStore.loading = true;
                    const res = await this.editStore.editProduct(data)
					if (res){
						emitEvent('product-updated', this.product);
						this.nextTab()
                    	setLocalStorageItem("current-edit", this.product)
					}
                }catch(error){
                    if (error.response) {
                        this.checkError = error.response.data.message || 'An error occurred while saving changes.';
                    } else if (error.request) {
                        this.checkError = 'No response received from server. Please try again later.';
                    } else {
                        this.checkError = 'An error occurred. Please try again later.';
                    }
                }finally {
                    this.editStore.loading = false;
                }
			}
		},
		async savePictures() {
            if (this.imagePreviews.length >= 4) {
                this.pictureError = "";
                try {
                    this.pictureError = "";
                    this.editStore.loading = true;
                    const res = await this.editStore.handleEditphotoUpload(this.imagePreviews);
					if (res){
						emitEvent('product-updated', this.product);
						this.nextTab()
                    	setLocalStorageItem("current-edit", this.product)
					}
                } catch (error) {
                    if (error.response) {
                        this.pictureError = error.response.data.message || 'An error occurred during photo upload.';
                    } else if (error.request) {
                        this.pictureError = 'No response received from the server. Please try again later.';
                    } else {
                        this.pictureError = 'An error occurred. Please try again later.';
                    }
                    return false;
                } finally {
                    this.editStore.loading = false;
                }
            } else {
                this.pictureError = "A minimum of 4 product images must be provided";
            }
        },
		async saveInventory(){
			const data = {
				track_quantity: this.product.track_quantity,
				made_with_ghana_leather: this.product.made_with_ghana_leather,
				minimumQty: this.product.mini_stock,
				sell_out_of_stock: this.product.sell_out_of_stock,
				has_sku: this.product.has_sku,
				storage_location: this.product.storage_location
			}
			try {
                    this.inventoryError = ""
                    this.editStore.loading = true;
                    const res = await this.editStore.editProduct(data)
					if (res){
						emitEvent('product-updated', this.product);
						this.nextTab()
                    	setLocalStorageItem("current-edit", this.product)
					}
                }catch(error){
                    if (error.response) {
                        this.inventoryError = error.response.data.message || 'An error occurred while saving changes.';
                    } else if (error.request) {
                        this.inventoryError = 'No response received from server. Please try again later.';
                    } else {
                        this.inventoryError = 'An error occurred. Please try again later.';
                    }
                }finally {
                    this.editStore.loading = false;
                }
		},
		async saveShipping() {
			this.shippingError = ""
			if (this.digitalProduct && this.physicalProduct) {
				this.shippingError = "Product cannot be digital and physical, select one!!!"
				return
			}
			if (this.digitalProduct) {
				if (this.grossWeight || this.netWeight || this.length || this.width || this.height || this.shippingOption || this.shipsInternational) {
					this.shippingError = "These fields are not required for digital products"
					return
				}
			}
			const data = {
						net_weight: this.product.net_weight,
						gross_weight: this.product.gross_weight,
						product_ship_internationally: this.product.product_ship_internationally,
						length: this.product.length,
						height: this.product.height,
						weight: this.product.weight,
						digital_product_or_service: this.product.digital_product_or_service,
						shipping_method: this.product.shipping_method
					}
			
                try {
                    this.shippingError = ""
                    this.editStore.loading = true;
                    const res = await this.editStore.editProduct(data)
					if (res){
						emitEvent('product-updated', this.product);
						this.nextTab()
                    	setLocalStorageItem("current-edit", this.product)
					}
                }catch(error){
                        if (error.response) {
                            this.shippingError = error.response.data.message || 'An error occurred while saving changes.';
                        } else if (error.request) {
                            this.shippingError = 'No response received from server. Please try again later.';
                        } else {
                            this.shippingError = 'An error occurred. Please try again later.';
                        }
                }finally {
                        this.editStore.loading = false;
                    }
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
                    types: ['heading', 'paragraph'],
                }),
            ],
            content: this.product.description,
        })

		this.editor.on('update', ({ editor }) => {
      	this.editorContent = editor.getText() // or use getText() for plain text
    	});

        this.editor.commands.setContent(this.product.description);
    },
}
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