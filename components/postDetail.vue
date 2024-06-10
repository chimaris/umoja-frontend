<template>
	<v-container>
		<post-detail-loader v-if="loading" />
		<v-card
			v-else
			style="height: auto; overflow: hidden; position: relative"
			max-width="700px"
			:min-width="$vuetify.display.mobile ? '90vw' : '60vw'"
			class="rounded-lg mx-auto"
		>
			<v-row dense style="height: 100vh">
				<v-col cols="12" md="6">
					<v-img
						v-if="post.featured_img.includes(',')"
						class="pb-0"
						:cover="$vuetify.display.mobile"
						width="100%"
						height="100%"
						:src="post.featured_img.split(',')[1]"
					></v-img>

					<v-img
						v-if="!post.featured_img.includes(',')"
						class="pb-0"
						:cover="$vuetify.display.mobile"
						width="100%"
						height="100%"
						:src="post.featured_img"
					></v-img>
				</v-col>
				<v-col cols="12" style="position: relative" md="6">
					<v-sheet style="height: 100%; overflow-y: auto; position: absolute; width: 100%; bottom: 0; border-left: 1px solid #e4e4e4" class="py-2">
						<div class="d-flex px-6 pb-4">
							<v-avatar size="48" class="mr-5">
								<v-img :src="post.vendor_profile_photo"></v-img>
							</v-avatar>
							<div class="w-100 d-flex justify-space-between">
								<div>
									<div class="d-flex">
										<p style="font-weight: 700; text-transform: capitalize; font-size: 16px; line-height: 140%; color: #1e1e1e">
											{{ post.vendor_lastname }} {{ post.vendor_firstname }}
										</p>
										<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
											<v-icon class="mx-1" icon="mdi mdi-circle" size="6" color="grey-lighten-2"></v-icon>
											{{ getdateRegistered(post.created_at) }}
										</p>
									</div>
									<div class="d-flex">
										<v-chip size="x-small" class="px-3" color="#936900" rounded="0">{{ post.category_name }}</v-chip>
										<p class="" style="font-weight: 400; font-size: 14px; color: #1e1e1e">
											<v-icon class="mx-1" icon="mdi mdi-circle" size="6" color="grey-lighten-2"></v-icon>
											{{ post.location }}
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
								{{ post.description }}
							</p>
							<div class="d-flex align-center py-2">
								<v-btn flat v-if="userLiked">
									<v-icon @click="handUnLike(post.id)" class="mr-1" icon="mdi mdi-heart"></v-icon>
									{{ post.likes }}
									{{ post.likes <= 1 ? "Like" : "Likes" }}
								</v-btn>
								<v-btn flat v-if="!userLiked">
									<v-icon @click="handleLike(post.id)" class="mr-1" icon="mdi mdi-heart-outline"></v-icon>
									{{ post.likes }}
									{{ post.likes <= 1 ? "Like" : "Likes" }}
								</v-btn>
								<v-btn flat>
									<v-icon class="mr-1" icon="mdi mdi-tray-arrow-up"></v-icon>
									Share Post
								</v-btn>
							</div>
						</div>

						<v-divider></v-divider>
						<div style="display: flex; flex-direction: column; justify-content: center; width: 100%; align-items: center">
							<p class="my-5" style="color: #333; font-size: 20px; text-align: center; font-weight: 600; line-height: 20px">Related products</p>

							<div v-if="post.products.length > 0" v-for="item in post.products" :key="item" class="cardStyle mb-4 w-75">
								<v-card flat color="grey-lighten-4" width="100%" height="313px" class="d-flex align-center justify-center rounded-lg">
									<v-btn rounded="xl" flat size="x-small" style="position: absolute; top: 15px; right: 15px" icon="mdi mdi-heart-outline"></v-btn>
									<v-img cover height="100%" width="100%" :src="item.photo.split(',')[0]"></v-img>
								</v-card>
								<p style="font-weight: 600; font-size: 14px; line-height: 18px; color: #000000" class="mt-2">
									{{ item.name }}
								</p>
								<p style="font-weight: 500; font-size: 12px; line-height: 15px; color: #000000" class="mt-1">
									{{ item.category_name }}
								</p>
								<p style="font-weight: 600; font-size: 12px; line-height: 13px; color: #000000" class="d-flex my-1 align-center">
									<v-rating v-model="rating" color="grey-lighten-2" active-color="#E7CE5D" class="" density="compact" size="small"></v-rating>
									<span style="margin-left: 9px">(0)</span>
								</p>
								<div class="d-flex align-center justify-space-between">
									<div class="d-flex align-center">
										<h1 style="font-size: 16px; line-height: 20px; color: #1a1d1f" class="priceClass">
											{{ formattedPrice(item.price) }}
										</h1>
									</div>
									<v-btn style="border: 1px solid #e5e5e5" size="small" variant="outlined">
										<span style="color: var(--grey-1000, #1a1d1f); font-size: 12px; font-weight: 600"> Add to Cart </span>
									</v-btn>
								</div>
							</div>
						</div>
					</v-sheet>
				</v-col>
			</v-row>
			<div class="py-5 bg-white w-100" style="z-index: 20"></div>
		</v-card>

		<!-- <v-divider></v-divider>
		<v-row>
			<v-col v-if="post?.products?.length > 0" v-for="item in post?.products" :key="item.id" cols="12" sm="6" md="4" lg="3" class="mb-4">
				<v-card flat color="grey-lighten-4" class="d-flex align-center justify-center rounded-lg" height="313px">
					<v-btn rounded="xl" flat size="x-small" style="position: absolute; top: 15px; right: 15px" icon="mdi mdi-heart-outline"></v-btn>
					<v-img cover height="100%" width="100%" :src="item.photo.split(',')[0]"></v-img>
				</v-card>
				<p style="font-weight: 600; font-size: 14px; line-height: 18px; color: #000000" class="mt-2">
					{{ item.name }}
				</p>
				<p style="font-weight: 500; font-size: 12px; line-height: 15px; color: #000000" class="mt-1">
					{{ item.category_name }}
				</p>
				<p style="font-weight: 600; font-size: 12px; line-height: 13px; color: #000000" class="d-flex my-1 align-center">
					<v-rating v-model="rating" color="grey-lighten-2" active-color="#E7CE5D" class="" density="compact" size="small"></v-rating>
					<span style="margin-left: 9px">(0)</span>
				</p>
				<div class="d-flex align-center justify-space-between">
					<div class="d-flex align-center">
						<h1 style="font-size: 16px; line-height: 20px; color: #1a1d1f" class="priceClass">
							{{ formattedPrice(item.price) }}
						</h1>
					</div>
					<v-btn style="border: 1px solid #e5e5e5" size="small" variant="outlined">
						<span style="color: var(--grey-1000, #1a1d1f); font-size: 12px; font-weight: 600">Add to Cart</span>
					</v-btn>
				</div>
			</v-col>
		</v-row> -->
	</v-container>
</template>
<style>
.v-responsive__sizer {
	padding-bottom: 0 !important;
}
</style>
<script>
import { likePost, hasLiked, unlikePost } from "~/composables/useLike";
import { getdateRegistered } from "~/utils/date";
import { useUserStore } from "~/stores/userStore";
import { formattedPrice } from "~/utils/price";
export default {
	props: ["post", "id", "loading"],
	data() {
		return {
			dialog: false,
			placescards: false,
			loginDialog: false,
			mods: 1,
			window: "products",
			userLiked: false,
			rating: 4,
		};
	},
	async mounted() {
		if (useUserStore().isLoggedIn) {
			this.userLiked = await hasLiked(this.id);
		}
	},
	methods: {
		async handUnLike(id) {
			this.userLiked = false;
			this.post.likes--;
			await unlikePost(id);
		},
		async handleLike(id) {
			if (!useUserStore().isLoggedIn) {
				this.loginDialog = true;
				return;
			}
			this.userLiked = true;
			this.post.likes++;
			await likePost(id);
		},
		toLogin() {
			this.loginDialog = false;
			this.$router.push("/user/login");
		},
		filt(text) {
			var newText = text.length > 40 ? text.slice(0, 40) + "..." : text;
			return newText;
		},
	},
};
</script>
