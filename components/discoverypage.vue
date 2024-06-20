<template>
	<div style="min-height: 120vh; width: 100%">
		<v-img
			eager
			v-once
			height="calc(507px)"
			:style="{ position: 'relative', minHeight: $vuetify.display.mobile ? '604px' : '500px' }"
			width="100%"
			cover
			class="d-flex bg-grey align-center"
			:src="getImageSource"
		>
			<v-container style="max-width: 1400px; width: 100%">
				<div class="w-100 d-flex justify-md-end">
					<v-card flat style="border-radius: 15px; padding: 40px !important" :max-width="$vuetify.display.mobile ? '100%' : 420">
						<h1 style="color: var(--carbon-4, #333); font-size: 48px; font-weight: 600; line-height: 120%" class="mb-1">Get 5% Cash Back on €20</h1>
						<p style="color: var(--carbon-4, #333); font-size: 16px; font-weight: 400; line-height: 140%">
							Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
						</p>
						<v-btn to="/product_page" class="mt-6 green-hover" color="#333" size="large" style="" variant="outlined" rounded="xl">
							Learn More <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
						</v-btn>
					</v-card>
				</div>
				<div :style="{ marginTop: $vuetify.display.mobile ? '100px' : '0' }">
					<p style="color: #fff; font-size: 16px; font-weight: 600; letter-spacing: -0.16px" class="mb-2">Select African Country</p>
					<v-menu location="bottom" offset="10px" width="150px" max-height="400">
						<template v-slot:activator="{ props }">
							<div
								v-ripple
								v-bind="props"
								style="cursor: pointer; width: fit-content; height: 44px; border: 1px solid #cecece"
								size="large"
								color="white"
								variant="elevated"
								flat
								class="bg-white rounded-xl elevation-0 chipper px-2"
							>
								<div class="d-flex justify-space-between w-100 h-100 align-center">
									<div class="d-flex align-center">
										<v-avatar v-if="!getFlag(country)" size="30.88" class="mr-1"
											><v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893074/umoja-backup2/rw-rwanda-medium_oui3ln_gemrrc.png"></v-img
										></v-avatar>
										<p class="d-flex align-center" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: -0.14px; font-weight: 500">
											<span class="mx-2" style="font-size: 24px;">{{ getFlag(country) }}</span><span class="d-none mr-2 d-md-flex">{{ country }}</span>
										</p>
									</div>
									<v-icon class="" icon="mdi mdi-chevron-down"></v-icon>
								</div>
							</div>
						</template>
						<v-list>
							<v-list-item v-for="(item, index) in countries" :key="index" :value="index" @click="selectCountry(item)">
								<p class="d-flex align-center"><span class="mr-3" style="font-size: 25px;">{{getFlag(item)}}</span> {{ item }}</p>
							</v-list-item>
						</v-list>
					</v-menu>
				</div>
			</v-container>
			<div
				style="
					background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
					width: 100%;
					height: 139px;
					position: absolute;
					bottom: 0;
					z-index: -1;
				"
			></div>
		</v-img>
		<v-card class="overflow-visible" flat tile color="" min-height="100vh" width="100%">
			<v-container style="padding-bottom: 50px; max-width: 1400px">
				<v-row>
					<v-col class="pt-0" cols="12" xs="12">
						<v-sheet class="pt-0">
							<div class="d-flex justify-space-between align-center py-8">
								<p
									:style="{ fontSize: $vuetify.display.mobile ? '20px' : '32px' }"
									style="font-style: normal; font-weight: 600; line-height: 1; text-transform: ; color: #333333"
								>
									Products
								</p>

								<v-btn
									@click="$router.push('/market_place')"
									size="small"
									class="font-weight-medium textClass px-md-4 mx-0 px-0"
									style="font-size: 14px"
									rounded
									flat
									variant="text"
									color="#1273EB"
									>Explore the product market place <v-icon class="ml-2" icon="mdi mdi-arrow-right"></v-icon
								></v-btn>
							</div>
							<v-divider></v-divider>
							<div class="py-6">
								<div class="d-none d-md-flex align-center justify-space-between">
									<v-chip-group
										variant="outlined"
										mandatory
										style="font-size: 14px; line-height: 17px; letter-spacing: 0.03em; text-transform: uppercase; color: #333333"
										class="text-uppercase"
										v-model="tag"
										selected-class=" chipselected"
									>
										<v-chip
											:class="chip == tag.name ? 'chipselected' : ''"
											style="font-size: 14px"
											size="large"
											class="pa-4"
											:value="tag.name"
											v-for="tag in tags"
											:key="tag.name"
										>
											{{ tag.name }} <v-icon size="21" v-if="tag.image" class="ml-2" :icon="'mdi mdi-' + tag.image"></v-icon>
										</v-chip>
									</v-chip-group>
									<!-- <div>
										<v-btn style="border: 1px solid #e5e5e5; border-radius: 100px !important" variant="outlined" class="textClass text-grey-darken-3">
											<v-img
												class="mr-2"
												width="14"
												height="14"
												src="https://res.cloudinary.com/payhospi/image/upload/v1716236855/umoja/filtericon.svg"
											/>
											Filter
										</v-btn>
									</div> -->
								</div>
							</div>

							<!-- FOR MOBILE -->
							<div :class="$vuetify.display.mobile ? 'd-block pb-8' : 'd-md-none'">
								<v-menu location="bottom" offset="10px" max-height="400">
									<template v-slot:activator="{ props }">
										<div
											v-ripple
											v-bind="props"
											style="cursor: pointer; width: 100%; height: 44px; border: 1px solid #cecece"
											size="large"
											color="white"
											variant="elevated"
											flat
											class="bg-white rounded-xl elevation-0 chipper px-2"
										>
											<div class="d-flex justify-space-between w-100 h-100 align-center">
												<div class="d-flex align-center">
													<span
														class="mr-2 pl-2"
														style="color: var(--carbon-4, #333); text-transform: uppercase; font-size: 14px; letter-spacing: 3%; font-weight: 700"
													>
														{{ tag }}
													</span>
												</div>
												<v-icon class="" icon="mdi mdi-chevron-down"></v-icon>
											</div>
										</div>
									</template>
									<v-list>
										<v-list-item v-for="(item, index) in tags" :key="index" :value="index" @click="selectTag(item)">
											<v-list-item-title
												style="color: var(--carbon-4, #333); text-transform: uppercase; font-size: 14px; letter-spacing: 3%; font-weight: 500"
												>{{ item.name }}
												<v-icon size="21" style="color: #333333" v-if="item.image" class="ml-2" :icon="'mdi mdi-' + item.image"></v-icon>
											</v-list-item-title>
										</v-list-item>
									</v-list>
								</v-menu>
							</div>

							<div v-if="productStore.searchError" style="width: 100%; text-align: center; color: red; margin-bottom: 20px">
								<p>{{ productStore.searchError }}</p>
							</div>
							<v-row dense v-if="tag == 'POPULAR products'">
								<v-col v-for="(n, i) in productStore.products.popular" :key="i" cols="6" :md="3" :lg="24">
									<product-component :loading='loadProduct' :item="n" :index="i" />
								</v-col>
							</v-row>
							<v-row dense v-else-if ="tag == 'top selling products'">
								<v-col v-for="(n, i) in productStore.products.mostSelling" :key="i" cols="6" :md="3" :lg="24">
									<product-component :loading='loadProduct' :item="n" :index="i" />
								</v-col>
							</v-row>
							<v-row dense v-else-if ="tag == 'products on promo'">
								<v-col v-for="(n, i) in productStore.products.sale" :key="i" cols="6" :md="3" :lg="24">
									<product-component :loading='loadProduct' :item="n" :index="i" />
								</v-col>
							</v-row>
							<v-container style="max-width: 1400px">
								<v-btn
									class="mt-10 mx-auto"
									block
									:style="{ cursor: hasReached ? 'not-allowed' :'', opacity: hasReached ? 0.5 : ''}"
									color="#333"
									size="large"
									@click="load()"
									flat
									rounded="xl"
									style="border: 1px solid #cecece; font-size: 14px; font-weight: 600"
								>
									<span class="mr-4"> Load More</span>
										<v-progress-circular v-if="loadProduct" indeterminate :width="2" :size="20"></v-progress-circular>
								</v-btn>
			</v-container>
							<!-- <v-btn
								block
								class="d-flex d-md-none mt-8"
								color="#333"
								size="large"
								style="border: 1px solid #333; font-weight: 500; color: #333"
								variant="outlined"
								rounded="xl"
							>
								<span style="font-size: 14px">See All</span> <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
							</v-btn> -->
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
		<div style="padding: 50px 0; width: 100%">
			<v-row class="pl-0 pr-0 mr-0 ml-0">
				<v-col class="pl-0 pr-0 mr-0 ml-0" cols="6" md="6" lg="6">
					<v-img
						eager
						cover
						width="100%"
						:min-height="$vuetify.display.mobile ? 195 : 429"
						height="auto"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893102/umoja-backup2/rectangle-69_u12j2b_a1knis.png"
					></v-img>
				</v-col>

				<v-col class="pl-0 pr-0 mr-0 ml-0" cols="6" md="6" lg="6">
					<v-card
						rounded="0"
						width="100%"
						height="100%"
						:min-height="$vuetify.display.mobile ? 195 : 429"
						color="#F8B735"
						flat
						class="d-flex align-center"
					>
						<v-container style="max-width: 1400px" class="px-4 px-md-12">
							<p
								:style="{ fontSize: $vuetify.display.mobile ? '8px' : '12px' }"
								style="color: var(--magnetic-green-2, #333); font-weight: 500; letter-spacing: 3.66px; text-transform: uppercase"
							>
								limited offer
							</p>
							<p :style="{ fontSize: $vuetify.display.mobile ? '20px' : '48px' }" style="color: #333; font-weight: 500; letter-spacing: -1.44px">
								Art in its essense
							</p>
							<p
								:style="{ fontSize: $vuetify.display.mobile ? '12px' : '20px' }"
								style="color: #333; font-weight: 500; letter-spacing: -0.2px"
								class="mb-8"
							>
								GET 20% OFF for your first order
							</p>
							<v-btn color="#333" size="large" variant="outlined" rounded="xl" style="font-size: 14px">
								Discover now <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
							</v-btn>
						</v-container>
					</v-card>
				</v-col>
			</v-row>
		</div>

		<v-container class="px-3 mb-16" style="padding-top: 0px; max-width: 1400px">
			<PostsRow :maxwidth="'1400px'" :load="loadPost" :showVendor="true" title="Top Posts" :items="availablePosts" />
		</v-container>

		<div style="padding: 50px 0, width: 100%">
			<v-row class="pl-0 pr-0 mr-0 ml-0">
				<v-col class="pl-0 pr-0 mr-0 ml-0" cols="6" md="6" lg="6">
					<v-card
						rounded="0"
						width="100%"
						style="border: none !important"
						height="100%"
						:min-height="$vuetify.display.mobile ? 195 : 429"
						color="green"
						flat
						class="cardStyle py-0 d-flex align-center"
					>
						<v-container style="max-width: 1400px" class="px-2 px-md-12">
							<p
								:style="{ fontSize: $vuetify.display.mobile ? '8px' : '12px' }"
								style="color: var(--magnetic-green-2, #fff); font-weight: 500; letter-spacing: 3%; text-transform: uppercase"
							>
								limited offer
							</p>
							<p :style="{ fontSize: $vuetify.display.mobile ? '16px' : '48px' }" style="color: #fff; font-weight: 500; letter-spacing: -1.44px">
								Uncensored Beauty
							</p>
							<p
								:style="{ fontSize: $vuetify.display.mobile ? '12px' : '20px' }"
								style="color: #fff; font-weight: 500; letter-spacing: -0.2px"
								class="mb-8"
							>
								GET 20% OFF for your first order
							</p>
							<v-btn color="#fff" size="large" variant="outlined" rounded="xl" style="font-size: 14px">
								Discover now <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
							</v-btn>
						</v-container>
					</v-card>
				</v-col>
				<v-col class="pl-0 pr-0 mr-0 ml-0" cols="6" md="6" lg="6">
					<v-img
						:min-height="$vuetify.display.mobile ? 195 : 429"
						eager
						cover
						width="100%"
						height="auto"
						src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893025/umoja-backup2/rectangle-69_vgfhlc_lgguoq.png"
					></v-img>
				</v-col>
			</v-row>
		</div>

		<v-container class="mt-16" style="max-width: 1400px">
			<v-row>
				<v-col class="pt-0" cols="12" xs="12">
					<v-sheet class="pt-0">
						<div class="d-flex justify-space-between pt-8">
							<p
								style="
									font-style: normal;
									font-weight: 600;
									font-size: 32px;
									line-height: 1;

									color: #333333;
								"
							>
								Top Articles
							</p>

							<v-btn
								@click="$router.push('/article_page')"
								size="small"
								class="font-weight-medium textClass px-md-4 px-0"
								rounded
								flat
								variant="text"
								color="#1273EB"
								>See all articles <v-icon class="ml-2" icon="mdi mdi-arrow-right"></v-icon
							></v-btn>
						</div>
						<v-divider class="mb-12 mt-6"></v-divider>
					</v-sheet>
				</v-col>
			</v-row>
			<v-row >
				<v-col cols="12" v-for="(n, i) in availableArticle.slice(0, 6)" :key="i" lg="4" md="4" class="d-flex flex-column">
					<div class="cardStyle flex-grow-1 d-flex flex-column">
						<div class="mb-4 d-flex">
							<v-avatar size="50">
								<v-img cover :src="n.vendor_profile_photo"></v-img>
							</v-avatar>
							<div class="ml-3 flex-grow-1">
								<div class="d-flex align-center">
									<p style="color: #1e1e1e; font-size: 16px; text-transform: capitalize; font-weight: 600; line-height: 140%">{{n.vendor_firstname}} {{ n.vendor_lastname }}</p>
									<v-icon class="mx-1" size="5" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
									<p style="color: #969696; font-size: 14px; font-weight: 400; line-height: 140%">{{getdateRegistered(n.created_at)}}</p>
								</div>
								<div class="d-flex align-center mt-1">
									<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 500">{{n.category_name}}</p>
								</div>
							</div>
						</div>
						<v-card flat color="grey-lighten-4" :image="n.cover_image" width="100%" height="188px" class="d-flex align-center justify-center rounded-lg">
						</v-card>
						<p class="mt-4 mb-2" style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 700; line-height: 140%; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis">
							{{n.title}}
						</p>
						<div v-html="n.content" style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis" class="article-content "></div>
						<v-btn  @click="$router.push(`/article_detail/${n.id}`)" size="small" color="#1273EB" class="px-0 mt-auto align-self-start" variant="text">
							<span style="color: var(--deep-sky-blue-4, #1273eb); font-size: 14px; font-weight: 600"> Read more </span>
							<v-icon size="small" class="ml-4" icon="mdi mdi-arrow-right"></v-icon
						></v-btn>
					</div>
				</v-col>
			</v-row>
			<div>
				<v-btn
					@click="$router.push('/article_page')"
					block
					class="d-flex d-md-none mt-8"
					color="#333"
					size="large"
					style="border: 1px solid #333; font-weight: 500; color: #333"
					variant="outlined"
					rounded="xl"
				>
					<span style="font-size: 14px">See All</span> <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
				</v-btn>
			</div>
		</v-container>
	</div>
</template>
<style></style>
<script>
import { useProductStore } from "~/stores/productStore.js";
import { useApi } from "~/composables/useApi";
import { useUserStore } from "~/stores/userStore";
import {getdateRegistered} from '~/utils/date'
import { countries, countryCodes, getFlag } from "~/utils/countryapi";
import emojiFlags from 'emoji-flags';
import { popularProducts, topSelling, promo, loadProduct } from "~/composables/discovery";
import { getCloudinaryImageUrl } from "~/utils/cloudinary";

export default {
	setup(){
		const userStore = useUserStore();
		const availablePosts = ref([]);
		const availableArticle = ref([]);
		const productStore = useProductStore()
		const items = computed(() => productStore.products.popular)
		const pagePop = ref(1)
		const pagePromo = ref(1)
		const pageMost = ref(1)
		const tag = ref("POPULAR products")
		const loadPost = ref(true)
		const tags = [
				{
					name: "POPULAR products",
					image: "",
				},
				{
					name: "top selling products",
					image: "seal-variant",
				},
				{
					name: "products on promo",
					image: "sale-outline",
				},
				// {
				// 	name: "top auction",
				// 	image: "trending-up",
				// },
			]
		
		async function getPosts(){
			const api = useApi()
			try{
				loadPost.value = true
				const response = await api({
					url: `allposts`,
					method: 'GET'
				});
				return response.data.data
			}catch(error){
				console.error(error)
				return []
			}finally{
				loadPost.value = false
			}
		}
		async function getArticles(){
			const api = useApi()
			try{
				const response = await api({
					url: `allarticles`,
					method: 'GET'
				});
				return response.data.data
			}catch(error){
				console.error(error)
				return []
			}
		}
		watch(() => tag.value, async () => {
			await loadProducts(tag.value)
		})
		onMounted(async () => {
			// reset the products 
			productStore.products.popular = [];
      		productStore.products.mostSelling = [];
      		productStore.products.sale = [];

			// loads products, posts and articles
			await loadProducts(tag.value)
			availablePosts.value = await getPosts()
			availableArticle.value = await getArticles()
		})

		// to load products for the first time based on the current tab
		const loadProducts = async (tag) => {
		switch (tag) {
			case 'POPULAR products':
			if (productStore.products.popular.length === 0) {
				await popularProducts(pagePop.value); 
			}
			break;
			case 'top selling products':
			if (productStore.products.mostSelling.length === 0) {
				await topSelling(pageMost.value); 
			}
			break;
			case 'products on promo':
			if (productStore.products.sale.length === 0) {
				await promo(pagePromo.value); 
			}
			break;
			default:
			console.error('Unknown tag:', tag);
		}
		};

		// to load more products based on the current tab 
		async function load() {
			switch (tag.value) {
				case 'POPULAR products':
				if (productStore.popCurrentPage >= productStore.popLastPage) {
					return; 
				}
				pagePop.value++;
				await popularProducts(pagePop.value); 
				break;

				case 'top selling products':
				if (productStore.mostCurrentPage >= productStore.mostLastPage) {
					return; 
				}
				pageMost.value++;
				await topSelling(pageMost.value); 
				break;

				case 'products on promo':
				if (productStore.promoCurrentPage >= productStore.promoLastPage) {
					return; 
				}
				pagePromo.value++;
				await promo(pagePromo.value); 
				break;

				default:
				console.error('Unknown tag:', tag.value);
			}
			}

			// for disabling the load more button depending on the current tab and if the products have being exhausted 
			const hasReached = computed(() => {
			switch (tag.value) {
				case 'POPULAR products':
				return productStore.popCurrentPage == productStore.popLastPage;

				case 'top selling products':
				return productStore.mostCurrentPage == productStore.mostLastPage;

				case 'products on promo':
				return productStore.promoCurrentPage == productStore.promoLastPage;

				default:
				console.error('Unknown tag:', tag.value);
				return true;
			}
			});

		
		return{
			userStore,
			availablePosts,
			availableArticle,
			items,
			productStore,
			pageMost,
			pagePromo,
			pagePop,
			load,
			hasReached,
			getPosts,
			getArticles,
			tags,
			loadProducts,
			loadPost,
			tag
		}
	},
	data() {
		return {
			country: "All of Africa",
		};
	},
	computed: {
		cols() {
			const { lg, sm, md } = this.$vuetify.display;
			return lg
				? [4, 6, 6, 6, 4, 8, 4, 3, 10, 2]
				: md
				? [4, 6, 6, 12, 6, 8, 4, 3, 10, 2]
				: sm
				? [6, 12, 12, 12, 12, 12, 12, 12, 12]
				: [6, 12, 12, 12, 12, 12, 12, 12, 12];
		},
		getImageSource() {
			return this.$vuetify.display.mobile
				? "https://res.cloudinary.com/dd26v0ffw/image/upload/v1717990443/umoja/discovery-hero-mobile_ql5s8v.png"
				: getCloudinaryImageUrl('https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893096/umoja-backup2/rectangle-1943_ki3qvz_wlqnv5.png', 1400);
		},
	},
	methods: {
		selectCountry(item) {
			this.country = item;
		},
		filt(text) {
			var newText = text.length > 50 ? text.slice(0, 50) + "..." : text;
			return newText;
		},

		selectTag(item) {
			this.tag = item.name;
		},
	},
};
</script>
