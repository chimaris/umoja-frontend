<template>
	<v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
		<div class="d-flex align-center justify-space-between">
			<div>
				<p style="font-weight: 500; font-size: 24px" class="mb-2 d-flex align-center text-left">Reviews from your customers</p>
			</div>
			<div class="d-flex align-center h-100 ">
				<v-menu open-on-hover :close-on-content-click="false">
					<template v-slot:activator="{ props }">
					<v-text-field v-bind="props" v-model="formattedDate" style="width: 250px; " placeholder="Select Date"></v-text-field>
					</template>
					<v-date-picker style="width: 100%;" v-model="selectedDate" :max="new Date().toISOString().substr(0, 10)"></v-date-picker>
				</v-menu>
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="mx-2 text-grey-darken-3"> Filter </v-btn>
				<div class="" style="width: 100vw; max-width: 391px">
					<v-text-field
						style="border: 1px solid #e5e5e5; border-radius: 6px"
						variant="outlined"
						density="compact"
						hide-details
						prepend-inner-icon="mdi mdi-magnify"
						placeholder="Search"
						v-model="searchTerm"
					></v-text-field>
				</div>
			</div>
		</div>

		<div class="d-flex pt-8 pb-6">
			<v-row>
				<v-col cols="12" md="4">
					<v-card min-width="300px" class="mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex align-center">
							<v-avatar class="mr-2" size="34"
								><v-img cover src="https://res.cloudinary.com/payhospi/image/upload/v1687445473/Frame_427320547_10_zxkguh.png"></v-img
							></v-avatar>
							<p style="font-weight: 500; font-size: 20px; line-height: 25px; color: #333333">Total Reviews</p>
							<div class="ml-2">
								<v-icon size="16" icon="mdi mdi-information"> </v-icon>
								<v-tooltip activator="parent" location="end" class="text-red">Total reviews by your customers</v-tooltip>
							</div>
						</div>
						<div class="d-flex align-center mt-4">
							<h1 class="bigpriceClass2">{{hasReview ? `${(totalReview) / 1000}K` : 0}}</h1>
							<!-- <div class="text-left">
								<v-chip style="font-weight: 600; font-size: 14px; line-height: 18px; color: #00966d" class="ml-3 text-green-lighten-2"
									><v-icon icon="mdi mdi-trending-up"></v-icon> {{hasReview ? '10%' : '0%'}}</v-chip
								>
							</div> -->
						</div>
						<p style="font-weight: 500; font-size: 14px; line-height: 18px; letter-spacing: -0.01em; color: #969696">
							Growth in reviews on this year
						</p>
					</v-card>
				</v-col>
				<v-col cols="12" md="4">
					<v-card min-width="300px" class="mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex align-center">
							<v-avatar class="mr-2" size="34"
								><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1687450127/Frame_427320547_9_zeqdtt.png"></v-img
							></v-avatar>
							<p style="font-weight: 500; font-size: 20px; line-height: 25px; color: #333333">Average Rating</p>
							<div class="ml-2">
								<v-icon size="16" icon="mdi mdi-information"> </v-icon>
								<v-tooltip activator="parent" location="end" class="text-red">Your average rating</v-tooltip>
							</div>
						</div>
						<div class="d-flex align-center mt-4">
							<h1 class="bigpriceClass2">{{hasReview ? averageRating : 0.0}}</h1>
							<div class="text-left reviews">
								<v-rating :model-value="hasReview ? (averageRating) : 0" readonly color="grey-lighten-2" active-color="#F0B136" class="ml-4" size="x-small"></v-rating>
							</div>
						</div>
						<p style="font-weight: 500; font-size: 14px; line-height: 18px; letter-spacing: -0.01em; color: #969696">
							Growth in reviews on this year
						</p>
					</v-card>
				</v-col>
				<v-col cols="12" md="4">
					<v-card height="100%" min-width="300px" class="mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex align-center">
							<div class="d-flex align-center">
								<v-icon size="15" icon="mdi mdi-star" class="mr-1" color="#CECECE"></v-icon>
								<span style="color: #333; font-size: 16px !important ; font-weight: 600"> 5</span>
							</div>
							<v-progress-linear :model-value="hasReview ? ratingsCount[5]: 0" style=" left: 70px" color="#C20052" class="linearl" height="6" rounded>
							</v-progress-linear>
							<span style="color: #333; font-size: 16px; font-weight: 600" class="ml-4">{{hasReview ? ratingsCount[5] : 0}}</span>
						</div>
						<div class="d-flex align-center">
							<div class="d-flex align-center">
								<v-icon size="15" icon="mdi mdi-star" class="mr-1" color="#CECECE"></v-icon>
								<span style="color: #333; font-size: 16px; font-weight: 600"> 4</span>
							</div>
							<v-progress-linear :model-value="hasReview ? ratingsCount[4] : 0" style=" left: 8px; transform: none" color="#00966D" class="linearl" height="6" rounded>
							</v-progress-linear>
							<span style="color: #333; font-size: 16px; font-weight: 600" class="ml-4">{{hasReview ? ratingsCount[4] : 0}}</span>
						</div>
						<div class="d-flex align-center">
							<div class="d-flex align-center">
								<v-icon size="15" icon="mdi mdi-star" class="mr-1" color="#CECECE"></v-icon>
								<span style="color: #333; font-size: 16px; font-weight: 600"> 3</span>
							</div>
							<v-progress-linear :model-value="hasReview ? ratingsCount[3] : 0" style="left: 70px" color="#F38218" class="linearl" height="6" rounded>
							</v-progress-linear>
							<span style="color: #333; font-size: 16px; font-weight: 600" class="ml-4">{{hasReview ? ratingsCount[3] : 0}}</span>
						</div>
						<div class="d-flex align-center">
							<div class="d-flex align-center">
								<v-icon size="15" icon="mdi mdi-star" class="mr-1" color="#CECECE"></v-icon>
								<span style="color: #333; font-size: 16px; font-weight: 600"> 2</span>
							</div>
							<v-progress-linear :model-value="hasReview ? ratingsCount[2] : 0" style=" left: 70px" color="#1273EB" class="linearl" height="6" rounded>
							</v-progress-linear>
							<span style="color: #333; font-size: 16px; font-weight: 600" class="ml-4">{{hasReview ? ratingsCount[2] : 0}}</span>
						</div>
						<div class="d-flex align-center">
							<div class="d-flex align-center">
								<v-icon size="15" icon="mdi mdi-star" class="mr-1" color="#CECECE"></v-icon>
								<span style="color: #333; font-size: 16px; font-weight: 600"> 1</span>
							</div>
							<v-progress-linear :model-value="hasReview ? ratingsCount[1] : 0" style=" left: 70px" color="#F8B735" class="linearl" height="6" rounded>
							</v-progress-linear>
							<span style="color: #333; font-size: 16px; font-weight: 600" class="ml-4">{{hasReview ? ratingsCount[1] : 0}}</span>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</div>

		<div v-if="hasReview" class="mt-5">
			<div v-if="loading" class="d-flex align-center justify-center" style="position: relative; height: 100%; min-height: 300px;">
						<v-progress-circular
							color="green"
						indeterminate
						></v-progress-circular>
					</div>
			<v-card v-if="!loading" height="100%" class="mx-auto coolTable mb-12" width="100%" style="overflow: hidden" flat>
				<div class="">
					<v-table>
						<thead>
							<tr class="  ">
								<th style="font-size: 14px" class="font-weight-bold text-left">Product</th>
								<th style="font-size: 14px" class="text-left px-3 font-weight-bold">Reviewer</th>
								<th style="font-size: 14px" class="text-left px-3 font-weight-bold">Review</th>
								<th style="font-size: 14px" class="text-left px-3 font-weight-bold">Status</th>
								<th style="font-size: 14px" class="text-left px-3 font-weight-bold"></th>
							</tr>
						</thead>
						<tbody>
							<tr
								@click="chosen = item.sn"
								style="height: 100px; width: 100%"
								:style="chosen == item.sn ? 'background:#ececec' : ''"
								v-for="(item, i) in allReviews"
								:key="item.sn"
							>
								<td style="position: relative; font-size: 14px; height: 100px; width: 270px">
									<div style="position: absolute; top: 24px; width: 270px">
										<v-menu offset="9px" open-on-hover location="top">
											<template v-slot:activator="{ props }">
												<div v-bind="props" class="px-1 d-flex pl-2">
													<v-avatar color="grey-lighten-4" class="rounded-lg mr-3 ml-1" size="50"
														><v-img
															cover
															:src="item.product.photo.split(',')[0]"
														></v-img
													></v-avatar>
													<div>
														<p class="" style="font-weight: 600; font-size: 16px !important; line-height: 20px; color: #333333">{{ item.product.name }}</p>
														<p style="font-weight: 400; font-size: 14px; line-height: 18px; color: #969696">{{item.product.category_name}}</p>
													</div>
												</div></template
											>
											<v-card max-width="310" class="pa-6 rounded-lg" color="#2C6E63">
												<v-row class="d-flex align-start">
													<v-avatar color="grey-lighten-4"  size="70" rounded="lg">
														<v-img
															cover
															:src="item.product.photo.split(',')[1]"
														></v-img>
													</v-avatar>
													<v-col class="py-0">
														<p style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px">
															{{item.product.name}}
														</p>
														<p style="color: #cdd6d4; font-size: 12px; font-weight: 500; line-height: 20px">{{item.product.category_name}}</p>

														<p style="color: #edf0ef; font-size: 16px; font-weight: 600; line-height: 20px" class="mt-1">{{formattedPrice(item.product.price)}} per {{item.product.unit_per_item == 1? '': item.product.unit_per_item}} {{item.product.unit}}</p>
													</v-col>
												</v-row>
											</v-card>
										</v-menu>
									</div>
								</td>
								<td style="position: relative; font-size: 14px; height: 100px; width: 200px">
									<div style="position: absolute; top: 24px; width: 200px">
										<div class="px-1 d-flex align-center pl-0">
											<v-avatar color="grey-lighten-4" class=" mr-2" size="50"
												><v-img cover src="https://res.cloudinary.com/payhospi/image/upload/v1713956914/umoja/profile_image_pd4dcv.png"></v-img
											></v-avatar>
											<div>
												<p class="" style="font-weight: 500; font-size: 16px !important; line-height: 20px; color: #333333">{{item.user.first_name}} {{item.user.last_name}}</p>
												<p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696"></p>
											</div>
										</div>
									</div>
								</td>

								<td style="max-width: 250px" class="text-grey-darken-1 pb-4">
									<div class="d-flex reviews2 pr-1 align-center mt-4 justify-space-between">
										<!-- <v-rating style="    height: 37px;
    display: flex;
    align-items: center;" class="ml-5" color="#F0B136" v-model="rating"></v-rating> -->
										<p style="font-weight: 600; font-size: 16px; line-height: 10px; color: #000000" class="d-flex mb-1 pb-0 pt-1 align-center">
											<v-rating
												readonly
												:model-value="item.rating"
												color="grey-lighten-1"
												active-color="#F0B136"
												class="rts"
												density="compact"
												size=""
											></v-rating
											><span style="margin-left: 3px; margin-top: 3px"></span>
										</p>
										<p style="color: #969696; font-size: 12px; font-weight: 500; letter-spacing: 0.6px">{{getDateTime(item.created_at)}}</p>
									</div>
									<p style="color: #333; font-size: 16px; line-height: 140%" class="px-">
										{{item.review_comment}} 
									</p>
									<!-- <span style="color: #1273eb; font-weight: 600"> Read More </span> -->

									<v-btn
										v-if="!item.review_reply"
										variant="text"
										style="
											color: #333;
											font-size: 12px !important;
											font-weight: 700 !important;
											line-height: 140% !important;
											letter-spacing: 0.6px !important;
										"
										@click="leaveComment(item)"
										class="text-overline mt-2 text-uppercase"
										>LEAVE A COMMENT</v-btn
									>
									<div class="py-4" v-else>
										<p style="color: #969696; font-size: 12px; font-weight: 600; letter-spacing: 0.6px; text-transform: uppercase" class="mb-2">
											Your Response
										</p>
										<p style="color: #333; font-size: 16px; line-height: 140%" class="px-">
											{{item.review_reply}}
										</p>
										<div class="mt-2">
											<v-btn @click="editComment(item)" variant="text" class=""><span style="color: #333; font-size: 16px; font-weight: 600">Edit</span> </v-btn>
											<v-btn @click="confirmDelete(item.id)" variant="text" color="red" class="ml-2"><span style="font-size: 16px; font-weight: 600">Delete</span> </v-btn>
										</div>
									</div>
								</td>
								<td style="position: relative; font-size: 14px; height: 100px; width: ">
									<div style="position: absolute; top: 24px; width: ">
										<v-chip
											style="width: 82px; font-size: 10px; font-weight: 500"
											class="rounded-lg d-flex justify-center align-center"
											size="small"
											color="#C5912C"
											variant="tonal"
										>
											{{item.review_status}}
										</v-chip>
									</div>
								</td>
								<td style="position: relative; font-size: 14px; height: ; width: ">
									<div v-if="item.review_status == 'pending'" style="position: absolute; top: 20px; right: 10px; width: ">
										<v-btn color="green" @click="commentReview(item.id)" flat>approve </v-btn>
									</div>
									<div v-else style="position: absolute; top: 20px; right: 10px; width: ">
										<v-btn @click="undoApprove(item.id)" color="green" variant="outlined" flat>disapprove </v-btn>
									</div>
								</td>
							</tr>
						</tbody>
					</v-table>
				</div>
				<div
				class="w-100 d-flex justify-space-between align-center"
				style="background-color: #f8f8f8; border: 1px solid #ededed;  padding: 10px 20px; height: 60px; overflow: hidden;"
			>
				<div style="display: flex; align-items: center">
					<span style="font-size: 14px; font-weight: 400">{{currentPage}} of {{pagesNo}} Pages</span>
				</div>
				<div class="d-flex align-center" style="margin-left: auto">
					<span style="font-size: 12px; font-weight: 400; margin-right: 10px">The Page you’re on</span>
					<v-select class="mt-5" 
						variant="outlined"
						placeholder="1"
						style="background-color: #f8f8f8; min-width: 40px"
						:items = pageOptions
						v-model = "selectedPage"
					>
					</v-select>
					
					<v-img
						:width="10"
						:height="40"
						src="https://res.cloudinary.com/payhospi/image/upload/v1713471908/umoja/vertical-line.svg"
						class="mx-2"
					></v-img>

					<v-btn :disabled = "currentPage == 1" @click="selectedPage --;"  class="mr-1" flat><v-icon icon="mdi mdi-undo"></v-icon></v-btn>
					<v-btn :disabled = "currentPage == pagesNo" @click="selectedPage ++;" flat><v-icon icon="mdi mdi-redo"></v-icon></v-btn>
				</div>
			</div>
			</v-card>
		</div>
		<v-dialog absolute v-model="dialog" width="395">
			<v-card class="cardStyle py-2">
				<div class="d-flex mb-2 align-center justify-space-between">
					<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500">
						Replying to <span style="color: #1273eb">{{reviewToReply.user.email}}</span>
					</p>
					<v-btn @click="dialog = false" icon="mdi mdi-close" flat></v-btn>
				</div>
				<v-textarea persistent-counter v-model="reviewReply" :counter="200" class="reviewtextarea" variant="outlined" placeholder="Add a comment"> </v-textarea>
				<div class="d-flex my-2 align-center justify-space-between">
					<p style="font-size: 32px">🙂</p>
					<v-btn @click="commentReview(reviewToReply.id)" :disabled = "!reviewReply || reviewReply.length > 200 || sending" color="green" flat width="97" size="large">{{sending? 'Sending': 'Send'}}</v-btn>
				</div>
			</v-card>
		</v-dialog>
		<v-dialog persistent v-model="deleteWarning" max-width="400">
								<v-card>
									<v-card-title>Delete Reply</v-card-title>
									<v-card-text>
										Are you sure you want to delete this reply?
									</v-card-text>
									<v-card-actions style="display: flex; justify-content: flex-end;">
										<v-btn @click="deleteReply()" color="green" text>Delete</v-btn>
										<v-btn @click="deleteWarning = false" text>Cancel</v-btn>
									</v-card-actions>
								</v-card>
				</v-dialog>
		<v-dialog absolute v-model="dialog2" width="395">
			<v-card class="cardStyle py-2">
				<div class="d-flex mb-2 align-center justify-space-between">
					<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500">
						Replying to <span style="color: #1273eb">{{reviewToEdit?.user.email}}</span>
					</p>
					<v-btn @click="dialog2 = false" icon="mdi mdi-close" flat></v-btn>
				</div>
				<v-textarea persistent-counter v-model="reviewToEdit.review_reply" :counter="200" class="reviewtextarea" variant="outlined" placeholder="Add a comment"> </v-textarea>
				<div class="d-flex my-2 align-center justify-space-between">
					<p style="font-size: 32px">🙂</p>
					<v-btn @click="editVendorReview()" :disabled = "!reviewToEdit.review_reply || reviewToEdit.review_reply.length > 200" color="green" flat width="97" size="large">Send</v-btn>
				</div>
			</v-card>
		</v-dialog>
		<!-- If there is no reviews show this -->
		<div v-if="!hasReview" class="d-flex flex-column justify-center align-center" style="max-height: 100%; height: 80vh">
			<v-sheet class="d-flex flex-column justify-center align-center text-center" style="width: 450px">
				<v-img
					:width="300"
					cover
					src="https://res.cloudinary.com/payhospi/image/upload/v1713433043/umoja/review-empty-box.png"
					style="filter: grayscale(100%) brightness(100%)"
				></v-img>
				<h2 style="color: #333; font-size: 24px; font-weight: 700; line-height: 30px">All your reviews will show here</h2>
				<p style="color: #969696; font-size: 16px; font-weight: 500">Capture high-quality product reviews foryour store</p>
			</v-sheet>
		</div>
	</v-container>
</template>

<style>
.reviewtextarea .v-input__control {
	border-radius: 6px;
	border: 1px solid var(--carbon-2, #cecece) !important;
}
</style>
<script setup>
import {getAllReview, replyReview, deleteReview, editReview, dissapproveReview, searchReview} from '~/composables/useVendorReview';
import { formattedPrice } from '~/utils/price';
import { useVendorStore } from '~/stores/vendorStore';
import {getDateTime} from '~/utils/date'
import {ref, onBeforeMount} from 'vue';

		const vendorStore = useVendorStore()
		const vendor = ref(vendorStore.vendor)
		const hasReview = computed(() => vendor.value.vendor_details?.review_count > 0)
		const averageRating = ref(null)
		const totalReview = ref(null)
		const ratingsCount = ref({})
		const allReviews = ref([])
		const reviewToReply = ref(null)
		const reviewToEdit = ref(null)
		const dialog2 = ref(false)
		const dialog = ref(false)
		const reviewReply = ref("")
		const sending = ref(false)
		const deleteWarning = ref(false)
		const deleteId = ref(null)
		const selectedDate = ref()
		const loading = ref(false)
		const searchTerm = ref("")

		const pagesNo = ref(null)
		const selectedPage = ref(1)
		const currentPage = ref(null)

		watch(() => selectedPage.value, async () =>  {
			await getVendorReview()
		})
		watch(() => searchTerm.value, async () => {
			await getVendorReview()
		})
		const pageOptions = computed(() => {
			return Array.from({ length: pagesNo.value }, (_, index) => index + 1);
		})

		const formattedDate = computed(() => {
			if (!selectedDate.value) {
				return "";
			}
			const date = new Date(selectedDate.value);
			const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
			return localDate.toISOString().substring(0, 10);
		});
		onBeforeMount(async () => {
			if (vendor.value.vendor_details.review_count > 0){
			await getVendorReview()
		}
		})
		const leaveComment = (review) => {
			reviewToReply.value = review
			dialog.value = true
		}
		const editComment = (review) => {
			reviewToEdit.value = review
			dialog2.value = true
		}
		const confirmDelete = (id) => {
			deleteId.value = id
			deleteWarning.value = true
		}
		const deleteReply = async () => {
			const res = await deleteReview(deleteId.value)
			if (res){
				await getVendorReview()
				deleteWarning.value = false
			}
		}
		async function undoApprove(id){
			try{
				const res = await dissapproveReview(id)
				if (res) {
					await getVendorReview()
				}
			}catch(error){
				console.error(error)
			}
		}
		async function commentReview(id){
			sending.value = true
			const data = {
				review_reply: reviewReply.value,
				review_status: 'approved'
			}
			try{
				await replyReview(id, data)
				await getVendorReview()
				dialog.value = false
				reviewReply.value = ""
			}catch(error){
				console.error(error)
			}finally{
				sending.value = false
			}
		}
		async function getVendorReview(){
			loading.value = true
			try{
				let res = await getAllReview(selectedPage.value)
				if (searchTerm.value.trim()){
					res = await searchReview(searchTerm.value)
				}
				allReviews.value = res.data.data
				averageRating.value = res.data.average_rating
				totalReview.value = res.data.total_reviews
				ratingsCount.value = res.data.ratings_count
				currentPage.value = res.data.pagination.current_page
				pagesNo.value = res.data.pagination.last_page
			}catch(error){
				console.error(error)
			}finally{
				loading.value = false
			}
		}
		async function editVendorReview(){
			try{
				await editReview(reviewToEdit.value.id, reviewToEdit.value.review_reply)
				await getVendorReview()
				dialog2.value = false
			}catch(error){
				console.error(error)
			}
		}
		watch(() => vendorStore.vendor, async (newval, oldval) => {
			vendor.value = newval
			if (newval && vendor.value.vendor_details?.review_count > 0){
				await getVendorReview()
			}
		});


</script>
