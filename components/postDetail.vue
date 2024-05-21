<template>
	<v-container>
		<v-card
			style="height: 100vh; overflow: hidden; position: relative"
			max-width="700px"
			:min-width="$vuetify.display.mobile ? '90vw' : '60vw'"
			class="rounded-lg mx-auto"
		>
			<v-row style="height: 100vh">
				<v-col cols="12" class="px-0 py-0 pb-0" md="6">
					<v-img v-if="post.featured_img?.includes(',')"
						class="pb-0"
						cover
						width="100%"
						height="100%"
						:src="post.featured_img.split(',')[1]"
					></v-img>
					<v-img v-if="!post.featured_img?.includes(',')"
						class="pb-0"
						cover
						width="100%"
						height="100%"
						:src="post.featured_img"
					></v-img>
				</v-col>
				<v-col cols="12" style="position: relative" class="px-0 py-0" md="6">
					<v-sheet style="height: 100%; overflow: scroll; position: absolute; width: 100%" class="py-2">
						<div class="d-flex px-6 pt-6 pb-4">
							<v-avatar size="48" class="mr-5">
								<v-img :src="post.vendor_profile_photo"></v-img>
							</v-avatar>
							<div class="w-100 d-flex justify-space-between">
								<div>
									<div class="d-flex">
										<p style="font-weight: 700; font-size: 16px; line-height: 140%; color: #1e1e1e">{{ post.vendor_firstname }} {{post.vendor_lastname}}</p>
										<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
											<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>{{getdateRegistered(post.created_at)}}
										</p>
									</div>
									<div class="d-flex">
										<v-chip size="x-small" class="px-3" color="#936900" rounded="0">{{post.category_name}}</v-chip>
										<p class="" style="font-weight: 400; font-size: 14px; color: #1e1e1e">
											<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>{{post.location}}
										</p>
									</div>
								</div>
								<div class="pr-2">
									<v-icon icon="mdi mdi-dots-horizontal"></v-icon>
								</div>
							</div>
						</div>
						<div class="px-6">
							<p style="font-weight: 400; font-size: 16px; line-height: 140%; letter-spacing: 0.03em">
								{{post.description}}
							</p>
							<div class="d-flex align-center py-2">
								<v-btn flat> <v-icon @click="handleLike(post.id)" class="mr-1" icon="mdi mdi-heart-outline"></v-icon> {{ post.likes }} {{ post.likes <= 0 ? 'Like' : "Likes" }} </v-btn>
								<v-btn flat> <v-icon class="mr-1" icon="mdi mdi-tray-arrow-up"></v-icon> Share Post </v-btn>
							</div>
							<v-dialog v-model="loginDialog" persistent max-width="350">
							<v-card>
								<v-card-title class="headline">Login Required</v-card-title>
								<v-card-text>You need to be logged in to like a post.</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="green darken-1" text @click="loginDialog = false">Close</v-btn>
									<v-btn color="green darken-1" text @click="toLogin()">Login</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
						</div>

						<v-divider></v-divider>
						<div style="display: flex; flex-direction: column; justify-content: center; width: 100%; align-items: center">
							<h1 style="font-weight: 700; font-size: 24px; line-height: 27px; color: #000000" class="pa-6">Related Products</h1>
							<div v-if="post.products?.length > 0" v-for="item in post.products" :key="item" class="cardStyle mb-4 w-75">
								<v-card flat color="grey-lighten-4" width="100%" height="313px" class="d-flex align-center justify-center rounded-lg"> 
									<v-btn rounded="xl" flat size="x-small" style="position: absolute; top: 15px; right: 15px" icon="mdi mdi-heart-outline"></v-btn>
									<v-img
										cover
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
						</div>
						
						<!-- <v-row style="background-color: #fff" class="mt-2 px-5 ml-0 mr-0">
							<v-col v-for="(n, i) in items" :key="i" cols="12">
								<v-card flat class="bg-white">
									<div class="d-flex pb-4">
										<v-avatar size="48" class="mr-5">
											<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1685880308/Frame_221_gj6tpk.png"></v-img>
										</v-avatar>
										<div class="w-100 d-flex justify-space-between">
											<div>
												<div class="d-flex">
													<p style="font-weight: 700; font-size: 16px; line-height: 22px; color: #1e1e1e">Bonsu Thompson</p>
													<p class="" style="font-weight: 400; font-size: 14px; line-height: 22px; color: #969696">
														<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>23 Nov, 2022
													</p>
												</div>
												<div class="d-flex">
													<v-chip size="x-small" class="px-3" color="#936900" rounded="0">Stylist</v-chip>
													<p class="" style="font-weight: 400; font-size: 14px; color: #1e1e1e">
														<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>042, Coal city state, Ghana
													</p>
												</div>
											</div>
											<div class="pr-2">
												<v-icon icon="mdi mdi-dots-horizontal"></v-icon>
											</div>
										</div>
									</div>
									<div class="">
										<p style="font-weight: 400; font-size: 14px; line-height: 19px; letter-spacing: 0.03em">
											Lorem ipsum dolor sit amet consectetur. Nulla vitae mauris odio urna integer molestie laoreet. Enim viverra cursus imperdiet
											aliquam. Sed ut commodo diam est aenean at.
										</p>
										<div class="d-flex justify-space-between align-center" style="color: #1e1e1e; font-size: 12px">
											<div class="d-flex align-center py-2">
												<span class="mr-6"> <v-icon class="mr-1" icon="mdi mdi-heart-outline"></v-icon>4 </span>
												<span> <v-icon class="mr-1" icon="mdi mdi-message-text-outline"></v-icon>11 </span>
											</div>
											<span> <v-icon class="mr-1" icon="mdi mdi-tray-arrow-up"></v-icon> </span>
										</div>
									</div>
								</v-card>
							</v-col>
						</v-row> -->
					</v-sheet>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>
<style>
.v-responsive__sizer {
	padding-bottom: 0 !important;
}
</style>
<script>
import { likePost } from '~/composables/useLike';
import {getdateRegistered} from '~/utils/date'
import { useUserStore } from "~/stores/userStore";
import {formattedPrice} from '~/utils/price'
export default {
	props: ["post"],
	methods: {
		handleLike(id){
			if (!useUserStore().isLoggedIn){
				this.loginDialog = true
				return
			}
			likePost(id)
		},
		toLogin(){
			this.loginDialog = false
			this.$router.push('/user/login')
		},
		filt(text) {
			var newText = text.length > 40 ? text.slice(0, 40) + "..." : text;
			return newText;
		},
	},
	data() {
		return {
			dialog: false,
			placescards: false,
			loginDialog: false,
			mods: 1,
			window: "products",
			rating: 4,
		};
	},
};
</script>
