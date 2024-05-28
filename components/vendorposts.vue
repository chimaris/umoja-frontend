<template>
	<div v-if="allPosts.length == 0" style="height: 100%; min-height: 500px" class="d-flex justify-center flex-column align-center ga-5 mt-10">
			<p>You have no posts yet. Click the button below to create your post.</p>
			<v-btn @click="$router.push('/vendor/dashboard/Create Post')" flat color="green" size="default" class="ml-4 justify-end menubar text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-plus"></v-icon>
					Create Post
				</v-btn>
		</div>
	<div>
	<div v-if="allPosts.length > 0">
		<div  style="background-color: " class="d-flex py-6 align-center justify-space-between">
			<p style="font-weight: 600; font-size: 12px; line-height: 15px; text-transform: uppercase; color: #969696">{{allPosts.length}} posts found</p>
			<div>
				<v-btn style="border: 1px solid #e5e5e5; border-radius: 100px !important" variant="outlined" class="textClass text-grey-darken-3">
					<v-img class="mr-2" width="14" height="14" src="https://res.cloudinary.com/payhospi/image/upload/v1716236855/umoja/filtericon.svg" />
					Filter
				</v-btn>
			</div>
		</div>

		<v-carousel
			style="overflow: visible"
			height="170"
			class="promo promoshort d-block d-md-none"
			:show-arrows="false"
			hide-delimiter-background=""
			cycle
		>
			<v-carousel-item v-for="n in 6" :key="n">
				<v-img
					cover
					height="auto"
					min-height="160px"
					class="bg-black d-flex py-3 align-center rounded-lg"
					src="https://res.cloudinary.com/payhospi/image/upload/v1715767704/umoja/vendo-slide-banner.png"
				>
					<div>
						<v-row class="d-flex pa-4 px-4 justify-space-between align-center">
							<v-col cols="9" sm="9">
								<h1 style="line-height: 30px; font-size: 24px" class="mb-0 text-white font-weight-black">The Waden Cloth</h1>
								<p style="line-height: 15px; font-size: 12px" class="textClass mb-4 text-white">known to be used by the Nawi people</p>
								<div>
									<v-btn flat to="/product_page" color="orange"><span class="smallBtn"> See product </span> </v-btn>
									<v-btn flat variant="text" class="ml-2 text-white howit"
										><span style="text-decoration: underline">
											<span class="smallBtn"> Not now </span>
										</span>
									</v-btn>
								</div>
							</v-col>
							<v-col class="d-flex justify-end" cols="3" sm="3"> </v-col>
						</v-row>
					</div>
				</v-img>
			</v-carousel-item>
		</v-carousel>
		
		<v-row style="background-color: #fff" class="mt-8">
			<v-col cols="4" v-for="(n, i) in allPosts" :key="i" lg="4" md="6">
				<v-card flat style="border-radius: 15px" class="bg-white rounded-lg">
					<v-img v-if="n.featured_img.includes(',')"
						@click="openPost(n)"
						class="rounded-lg bg-grey-lighten-2"
						cover
						width="100%"
						:height="$vuetify.display.mobile ? 119 : 216"
						:src="n.featured_img.split(',')[0]"
					>
						<p
							class="text-white py-1 px-3"
							rounded="lg"
							style="
								font-size: 14px;
								line-height: 17px;
								position: absolute;
								right: 12px;
								top: 12px;
								border-radius: 3.34447px;
								background: rgba(0, 0, 0, 0.5);
							"
							flat
							size="x-small"
						>
							1/{{n.featured_img.split(',').length}}
						</p>
					</v-img>
					<v-img v-if="!n.featured_img.includes(',')"
						@click="openPost(n)"
						class="rounded-lg bg-grey-lighten-2"
						cover
						width="100%"
						:height="$vuetify.display.mobile ? 119 : 216"
						:src="n.featured_img"
					>
					</v-img>
				</v-card>
			</v-col>
		</v-row>
		<v-dialog v-model="dialog" transition="dialog-bottom-transition" width="auto">
			<v-card
				style="height: 100vh; overflow: hidden; position: relative"
				max-width="700px"
				:min-width="$vuetify.display.mobile ? '90vw' : '60vw'"
				class="rounded-lg"
			>
				<v-btn class="ms-auto my-2" @click="dialog = false">
					<v-icon class="" size="24" icon="mdi mdi-close"></v-icon>
				</v-btn>
				<v-row style="height: 100vh">
					<v-col cols="12" class="px-0 py-0 pb-0" md="6">
						<v-img v-if="selectedPost.featured_img.includes(',')"
							class="pb-0"
							cover
							width="100%"
							height="100%"
							:src="selectedPost.featured_img.split(',')[1]"
						></v-img>
						<v-img v-if="!selectedPost.featured_img.includes(',')"
							class="pb-0"
							cover
							width="100%"
							height="100%"
							:src="selectedPost.featured_img"
						></v-img>
					</v-col>
					<v-col cols="12" style="position: relative" class="px-0 py-0" md="6">
						<v-sheet style="height: 100%; overflow: scroll; position: absolute; width: 100%" class="py-2">
							<div class="d-flex px-6 pt-6 pb-4">
								<v-avatar size="48" class="mr-5">
									<v-img :src="selectedPost.vendor_profile_photo"></v-img>
								</v-avatar>
								<div class="w-100 d-flex justify-space-between">
									<div>
										<div class="d-flex">
											<p style="font-weight: 700; font-size: 16px; line-height: 140%; color: #1e1e1e">{{selectedPost.vendor_lastname}} {{selectedPost.vendor_firstname}}</p>
											<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
												<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>{{getdateRegistered(selectedPost.created_at)}}
											</p>
										</div>
										<div class="d-flex">
											<v-chip size="x-small" class="px-3" color="#936900" rounded="0">{{selectedPost.category_name}}</v-chip>
											<p class="" style="font-weight: 400; font-size: 14px; color: #1e1e1e">
												<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>{{selectedPost.location}}
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
									{{selectedPost.description}}
								</p>
								<div class="d-flex align-center py-2">
									<v-btn flat v-if="userLiked"> <v-icon @click="handUnLike(selectedPost.id)" class="mr-1" icon="mdi mdi-heart"></v-icon> {{ selectedPost.likes }} {{ selectedPost.likes <= 1 ? 'Like' : "Likes" }} </v-btn>
								<v-btn flat v-if="!userLiked"> <v-icon @click="handleLike(selectedPost.id)" class="mr-1" icon="mdi mdi-heart-outline"></v-icon> {{ selectedPost.likes }} {{ selectedPost.likes <= 1 ? 'Like' : "Likes" }} </v-btn>
									<v-btn flat> <v-icon class="mr-1" icon="mdi mdi-tray-arrow-up"></v-icon> Share Post </v-btn>
								</div>
							</div>

							<v-divider></v-divider>
							<div style="display: flex; flex-direction: column; justify-content: center; width: 100%; align-items: center">
							<p class="my-5" style="color: #333; font-size: 20px; text-align:center; font-weight: 600; line-height: 20px">Related products</p>

							<div v-if="selectedPost.products.length > 0" v-for="item in selectedPost.products" :key="item" class="cardStyle mb-4 w-75">
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
						</v-sheet>
					</v-col>
				</v-row>
			</v-card>
		</v-dialog>
	</div>
	</div>
</template>
<style>
.pts .v-rating__item .v-btn .v-icon {
	transition: inherit;
	font-size: 16px;
}
.pts .v-rating__item .v-btn {
	scale: 0.8;
	margin-left: -16px;
}
.v-responsive__sizer {
	padding-bottom: 0 !important;
}
</style>
<script>
import {useCreateStore} from '~/stores/createPostStore'
import {ref, onMounted, computed} from 'vue'
import {getdateRegistered} from '~/utils/date'
import {formattedPrice} from '~/utils/price'
import { likePost, hasLiked, unlikePost } from '~/composables/useLike';

export default {
	setup(){
		const postStore = useCreateStore()
		const allPosts = ref(postStore.posts.slice(0,12))
		const selectedPost = ref(null)
		const dialog = ref(false)
		const userLiked = ref(false)
		
		watch(() => selectedPost.value, async () => {
			userLiked.value = await hasLiked(selectedPost.value.id, "vendor")
		});
		watch(() => postStore.posts, async (newval, oldval) => {
			allPosts.value = newval
		});
		const handUnLike = async (id) => {
			userLiked.value = false
			selectedPost.value.likes --;
			await unlikePost(id, "vendor")
		}
		const handleLike = async (id) => {
			userLiked.value = true
			selectedPost.value.likes ++;
			await likePost(id, "vendor")
		}
		const openPost = (post) => {
				selectedPost.value = post
			
			dialog.value = true
		}
		onMounted(async() => {
			await postStore.getPost()
		})

		return{
			postStore,
			allPosts,
			selectedPost,
			openPost,
			dialog,
			userLiked,
			handUnLike,
			handleLike
		}
	},
	methods: {
		filt(text) {
			var newText = text.length > 40 ? text.slice(0, 40) + "..." : text;
			return newText;
		},
	},
	data() {
		return {
	
			placescards: false,
			mods: 1,
			window: "products",
			rating: 4,
		};
	},
};
</script>
