<template>
	<v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
		<div class="d-flex pb-8 pt-4 justify-space-between">
			<div class="align-center">
				<h1 style="font-weight: 700; font-size: 24px; line-height: 30px; letter-spacing: -0.02em">Edit Post</h1>
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
											src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893088/umoja-backup2/gallery_azmmka_dyc0te.png"
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
					<v-textarea  counter="400" v-model="editPost.description" persistent-counter="" placeholder="Enter post text here" density="comfortable"> </v-textarea>
					<p style="color: #B00020; font-size: 14px; margin-top: 0px">{{postError}}</p>
					<v-divider class="my-4"></v-divider>
					<v-row class="mt-3">
						<v-col>
							<p class="inputLabel">Category</p>
							<v-select placeholder="Select post category" :rules="inputRules" :items="categories.map(category => category.name)" v-model="editPost.category_name" density="comfortable"> </v-select
						></v-col>
						<v-col>
							<p class="inputLabel">Location</p>

							<v-text-field placeholder="Enter location" v-model="editPost.location" :rules="inputRules" density="comfortable"> </v-text-field
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
							@input="getProduct(searchQuery.trim())"
						>
						<template v-slot:append-inner>
						<v-progress-circular v-if="loading"
						color="grey"
						:size="24"
						:width="3"
						indeterminate
						></v-progress-circular>
						</template>
						</v-text-field>

						<v-btn @click="getProduct(searchQuery.trim())" style="border: 1px solid #e5e5e5" size="large" variant="outlined">Browse products</v-btn>
					</div>
					<v-table style="height: 328 !important; overflow: scroll" v-if="editPost.products.length > 0">
							<thead>
								<tr class=" ">
									<th style="font-size: 14px" class="font-weight-medium">Product</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium"></th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Price</th>
								</tr>
							</thead>
							<tbody>
								<tr
									 v-for="item in editPost.products" :key="item"
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
									<td class="tiny2 px-1 font-weight-bold"><v-btn @click="deleteProduct(item.id)" size="x-small" class="rounded-xl" icon="mdi mdi-trash-can-outline"> </v-btn></td>	
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
								<v-img :src="editPost.vendor_profile_photo" cover></v-img>
							</v-avatar>

							<div class="pl-3" style="min-width: 0">
								<div class="d-flex align-center">
									<p style="color: #1e1e1e; font-size: 16px; font-weight: 600; line-height: 140%">{{editPost.vendor_firstname}} {{editPost.vendor_lastname}}</p>
									<v-icon class="mx-1" size="5" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
									<p style="color: #969696; font-size: 14px; font-weight: 400; line-height: 140%">{{getdateRegistered(editPost.created_at)}}</p>
								</div>
								<div class="d-block mt-1">
									<div class="d-flex align-center">
										<v-chip style="justify-content: center; align-items: center; display: flex" color="#936900" size="small" rounded="lg">
											{{editPost.category_name}}</v-chip
										>
										<v-icon class="mx-1" size="5" color="grey-lighten-1" icon="mdi mdi-circle"></v-icon>
										<div class="text-truncate" style="color: #1e1e1e; font-size: 14px !important; font-weight: 400">
											{{editPost.location}}
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
							{{editPost.description}}
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

						<div v-for="item in editPost.products" :key="item" class="cardStyle mb-4">
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
										>Add to Cart</span
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
			<v-btn @click="handlePost" size="large" style="border: 1px solid #e5e5e5" color="green" flat>
				<span style="font-size: 14px; font-weight: 600; line-height: 20px; margin-right: 10px"> Save changes </span>
				<v-progress-circular v-if="postStore.loadEdit" indeterminate :width="2" :size="18"></v-progress-circular>
			</v-btn>
		</div>

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
import {formatDate} from '~/utils/date'
import {formattedPrice} from '~/utils/price'
import {useCreateStore} from '~/stores/createPostStore'
import {ref, onMounted, computed} from 'vue'
import {inputRules} from '~/utils/formrules'

export default {
	setup(){
		const postStore = useCreateStore()
		const searchQuery = ref("")
		const categories = ref([])
        const editPost = ref(postStore.postToEdit)
		const imagePreviews = ref(editPost.value.featured_img.includes(',')? [...editPost.value.featured_img.split(',')] : [editPost.value.featured_img])

		onMounted(async() => {
			categories.value = await fetchCategories()
		})
		watch(() => postStore.postToEdit, (newpost, oldpost) => {
			editPost.value = newpost
			imagePreviews.value = newpost.featured_img.includes(',')? [...newpost.featured_img.split(',')] : [newpost.featured_img]
			
		});
		return{
			postStore,
			searchQuery,
			categories,
            editPost,
			imagePreviews
		}
	},
	data() {
		return {
			pictureError: "",
			postError: "",
			tags: ["Fashion", "Sneakers", "Unisex shoes", "Men shoes", "Black", "Fashion and style", "Ghana Ankara Material"],
			checkqty: true,
			window: "basic",
			radioship: true,
			chip: "All",
			chosen: "",
            loading: false,
		
		};
	},


	methods: {
    async getProduct(searchQuery) {
            const api = vendorUseApi()
            this.loading = true
            try {
              const response = await api({
                url: `vendor/products/?search_global=${searchQuery}`,
                method: 'get'
              });
              const loadedPostIds = new Set(this.editPost.products.map(post => post.id));
              // Filter out any products that are already in relatedPosts
              const newProducts = response.data.data.filter(product => !loadedPostIds.has(product.id));
              // Add only new products to the relatedPosts array
              this.editPost.products = [...this.editPost.products, ...newProducts];
              return 
            }catch(error) {
              console.error(error)
            }finally{
                this.loading = false
            }
          },
    deleteProduct(item){
        this.editPost.products = this.editPost.products.filter((post) => {
                return post.id !== item;
        });
    },
	isValid(){
		this.pictureError = ""
		this.postError = ""
		if (this.imagePreviews.length == 0){
			this.pictureError = "You have to upload atleast one image"
			return false
		}
		if (this.editPost.description.length > 400){
			this.postError = "No of characters has exceeded the maximum limit of 400 characters"
			return false
		}
		if (this.editPost.description.length <= 100){
			this.postError = "No of characters is below the minimum limit of 100 characters"
			return false
		}
		if (this.editPost.description.length > 100 && this.editPost.description.length <= 400 && this.editPost.location && this.editPost.category_name && this.imagePreviews.length > 0 && this.editPost.products.length > 0){
			return true
		}
	},
	async handlePost(){
		
		if (this.isValid()){
			this.pictureError = ""
			this.postError = ""
			const data = {
				category_id: getCategoryId(this.editPost.category_name, this.categories),
				product_ids: this.editPost.products.map(product => product.id),
				location: this.editPost.location,
				description: this.editPost.description
			}
			const res = await this.postStore.editPost(this.imagePreviews, data)
			if (res){
				this.postStore.errorPost = ""
				this.$router.push('/vendor/dashboard/Posts')
			}
	
		}
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
	},
};
</script>
