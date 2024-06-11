<template>
	<div v-if="fetchingAll" style="min-height: 90vh; width: 100%" class="d-flex justify-center flex-column align-center">
		<v-progress-circular color="green" indeterminate></v-progress-circular>
	</div>
	<div v-else id="homepage" style="min-height: 100vh; width: 100%">
		<v-img
			style="height: 185px; position: relative"
			width="100%"
			cover
			class="d-flex bg-grey justify-end align-end"
			:src="vendor?.cover_image ? vendor.cover_image : 'https://res.cloudinary.com/payhospi/image/upload/v1685854735/Rectangle_448_2_lh8kz3.png'"
		>
			<v-container
				class="w-100"
				:style="{ bottom: $vuetify.display.mobile ? '110px' : '18px', justifyContent: $vuetify.display.mobile ? 'start' : 'end' }"
				style="position: relative; display: flex; max-width: 1300px"
			>
				<v-btn to="/discovery_page" flat="" rounded="xl" color="rgba(0, 0, 0, 0.70)">
					<v-icon class="mr-2" color="white" icon="mdi mdi-information-outline"></v-icon>
					<span style="color: #fff; font-size: 12px; font-style: normal; font-weight: 400"> Tap to read more about {{vendor?.rep_country}} {{flag}} </span>
				</v-btn>
			</v-container>
		</v-img>
		<v-card class="overflow-visible" flat tile color="#Fff" min-height="100vh" width="100%">
			<v-container style="max-width: 1400px">
				<v-row>
					<v-col md="4" cols="12" xs="12">
						<v-card
							variant="outlined"
							style="border: 1px solid #cecece; margin-top: -45px; border-radius: 16px; z-index: 99"
							flat
							class="pb-12 bg-white d-none d-md-block"
							width="100%"
						>
							<v-sheet max-width="455" class="mx-auto" width="100%" style="padding-top: 20px">
								<div class="text-center pa-4">
									<v-avatar class="mx-auto" :style="`border: 3px solid ${profileBorderColor};`" size="100">
										<v-img class="bg-grey-lighten-3 rounded-xl" cover :src="vendor?.profile_photo"></v-img>
									</v-avatar>
									<h3 class="py-4" style="font-size: 24px; text-transform: capitalize; font-weight: 800; line-height: 30px">
										{{ vendor?.business_name }}
									</h3>
									<!-- <v-icon color="#1273EB" size="22" icon="mdi mdi-check-decagram"></v-icon> -->
									<v-btn :disabled="loading" @click="followVendor()" color="orange" size="large" rounded="xl" width="80%" flat>
										{{ hasFollowed ? "Following" : "Follow" }}</v-btn
									>
								</div>
								<div class="pa-2">
									<div class="pa-4 align-center justify-space-between d-flex">
										<div class="align-center d-flex">
											<v-avatar rounded="0" size="23"
												><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684592715/umoja/profile-2user_2_jcekww.png"></v-img
											></v-avatar>
											<p class="textClass text-grey-darken-1 px-2">Followers</p>
										</div>
										<p class="priceClass">{{ vendor?.followers_count }}</p>
									</div>
									<div class="px-4 align-center justify-space-between d-flex">
										<div class="align-center d-flex">
											<v-avatar rounded="0" size="23"
												><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686310494/game-icons_africa_b7x2hf.png"></v-img
											></v-avatar>
											<p class="textClass text-grey-darken-1 px-2">Country</p>
										</div>
										<span style="font-size: 1.5rem">{{ flag }}</span>
									</div>
								</div>
								<v-divider></v-divider>
								<div class="pa-4 px-6 align-center d-flex">
									<v-avatar rounded="0" size="19"
										><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684591613/umoja/location_q0ouqw.png"></v-img
									></v-avatar>
									<p style="text-transform: capitalize;" class="textClass px-4">{{ vendor?.address }}, {{ vendor?.city }}, {{ vendor?.state }} {{ vendor?.country_name }}</p>
								</div>
								<v-divider></v-divider>
								<v-sheet class="px-6 pt-8">
									<h3 style="font-weight: 700; font-size: 24px; line-height: 30px; color: #333333">
										BIO <span class="text-grey">({{ vendor?.business_type }})</span>
									</h3>

									<p class="textClass text-left mt-4 mb-8">
										{{ vendor?.business_bio }}
									</p>

									<p style="font-weight: 700; font-size: 12px; line-height: 20px; color: #969696">ON THE WEB</p>
									<div class="pt-4 justify-start align-center d-flex">
										<v-btn
											size="small"
											@click="openSocialMedia(n.icon, n.handle)"
											style="border: 0.357149px solid #2c6e63"
											class="green-hover rounded-xl mr-4"
											variant="outlined"
											:key="n.icon"
											v-for="n in buttons"
											flat
											icon
										>
											<v-avatar rounded="0" size="23"><v-icon color="green" :icon="'mdi mdi-' + n.icon"></v-icon></v-avatar>
										</v-btn>
									</div>
									<div class="pt-12 mt-12 justify-start align-center d-flex"></div>
									<p class="text-center textClass text-grey-darken-1">MEMBER SINCE: {{ getdateRegistered(vendor?.created_at) }}</p>
								</v-sheet>
							</v-sheet>
						</v-card>
						<!-- mobile View -->
						<v-card style="margin-top: -85px; z-index: 99" flat class="pb-4 d-block d-md-none bg-transparent" width="100%">
							<div max-width="455" class="mx-auto" width="100%" style="padding-top: 20px">
								<div class="pa-1">
									<v-avatar class="mx-auto" :style="`border: 3px solid ${profileBorderColor};`" size="100">
										<v-img class="bg-grey-lighten-3 rounded-xl" cover :src="vendor?.profile_photo"></v-img>
									</v-avatar>
									<div class="d-flex justify-space-between align-center py-5">
										<h3 style="font-size: 20px; text-transform: capitalize; font-weight: 600; line-height: 25px">
											{{ vendor?.business_name }}
										</h3>
										<!-- <v-icon color="#1273EB" size="22" icon="mdi mdi-check-decagram"></v-icon> -->
										<v-btn :disabled="loading" @click="followVendor()" color="orange" size="large" rounded="xl" flat width="157">{{
											hasFollowed ? "Following" : "Follow"
										}}</v-btn>
									</div>
								</div>
								<div class="d-flex">
									<div class="align-center justify-space-between d-flex mr-10">
										<div class="align-center d-flex">
											<v-avatar rounded="0" size="23"
												><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684592715/umoja/profile-2user_2_jcekww.png"></v-img
											></v-avatar>
											<p class="textClass text-grey-darken-1 px-2">Followers</p>
										</div>
										<p class="priceClass">{{ vendor?.followers_count }}</p>
									</div>
									<div class="px-4 align-center justify-space-between d-flex">
										<div class="align-center d-flex">
											<v-avatar rounded="0" size="23"
												><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686310494/game-icons_africa_b7x2hf.png"></v-img
											></v-avatar>
											<p class="textClass text-grey-darken-1 px-2">Country</p>
										</div>
										<h1>{{ flag }}</h1>
									</div>
								</div>
								<v-divider></v-divider>
								<div class="py-6 align-center d-flex">
									<v-avatar rounded="0" size="19"
										><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684591613/umoja/location_q0ouqw.png"></v-img
									></v-avatar>
									<p style="text-transform: capitalize;" class="textClass px-4">{{ vendor?.address }}, {{ vendor?.city }}, {{ vendor?.state }} {{ vendor?.country_name }}</p>
								</div>
								<v-divider></v-divider>
								<v-sheet class="pt-8">
									<h3 style="font-weight: 700; font-size: 24px; line-height: 30px; color: #333333">
										BIO <span class="text-grey">({{ vendor?.business_type }})</span>
									</h3>

									<p class="textClass text-left mt-4 mb-8">
										{{ vendor?.business_bio }}
									</p>

									<p style="font-weight: 700; font-size: 12px; line-height: 20px; color: #969696">ON THE WEB</p>
									<div class="pt-4 justify-start align-center d-flex">
										<v-btn
											size="small"
											@click="openSocialMedia(n.icon, n.handle)"
											style="border: 0.357149px solid #2c6e63"
											class="green-hover rounded-xl mr-4"
											variant="outlined"
											:key="n.icon"
											v-for="n in buttons"
											flat
											icon
										>
											<v-avatar rounded="0" size="23"><v-icon color="green" :icon="'mdi mdi-' + n.icon"></v-icon></v-avatar>
										</v-btn>
									</div>

									<p class="textClass text-grey-darken-1 mt-10">MEMBER SINCE: {{ getdateRegistered(vendor?.created_at) }}</p>
								</v-sheet>
							</div>
						</v-card>
					</v-col>
					<v-col md="8" xs="12">
						<v-sheet style="overflow: hidden" color="transparent" class="mt-0 mt-md-2">
							<v-tabs v-model="tab" color="green" grow>
								<v-tab v-for="item in ['products', 'posts', 'articles', 'promo%']" :key="item" :value="item" class="d-flex align-center">
									{{ item }}
									<v-badge
										v-if="item == 'promo%'"
										class="ml-4 mb-1 px-1"
										rounded="lg"
										color="grey-lighten-2"
										:content="vendor?.promo_count"
										size="12"
									></v-badge>
									<v-badge
										v-if="item == 'products'"
										class="ml-4 mb-1 px-1"
										rounded="lg"
										color="grey-lighten-2"
										:content="vendor?.product_count"
										size="12"
									></v-badge>
									<v-badge
										v-if="item == 'posts'"
										class="ml-4 mb-1 px-1"
										rounded="lg"
										color="grey-lighten-2"
										:content="vendor?.post_count"
										size="12"
									></v-badge>
									<v-badge
										v-if="item == 'articles'"
										class="ml-4 mb-1 px-1"
										rounded="lg"
										color="grey-lighten-2"
										:content="vendor?.article_count"
										size="12"
									></v-badge>
								</v-tab>
							</v-tabs>
							<v-divider></v-divider>
							<v-window v-model="tab">
								<v-window-item value="products">
									<VendorPageProducts :items="products" />
								</v-window-item>
								<v-window-item value="posts">
									<VendorPagePosts :allPosts="posts" />
								</v-window-item>
								<v-window-item value="articles">
									<VendorPageArticles :allArticles="articles" />
								</v-window-item>
								<v-window-item value="promo%">
									<VendorPagePromo :items="promos" />
								</v-window-item>
							</v-window>
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
		<v-dialog v-model="loginDialog" persistent max-width="350">
			<v-card>
				<v-card-title class="headline">Login Required</v-card-title>
				<v-card-text>You need to be logged in to follow a vendor.</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="green darken-1" text @click="loginDialog = false">Close</v-btn>
					<v-btn color="green darken-1" text @click="toLogin()">Login</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>
<script setup>
import { ref, defineProps, onMounted, watch, computed } from "vue";
import emojiFlags from "emoji-flags";
import ColorThief from "colorthief";
import { getdateRegistered } from "~/utils/date";
import { countryCodes } from "~/utils/countryapi";
import { useUserStore } from "~/stores/userStore";
import { useRouter } from "#vue-router";
import { follow, unFollowVendor, isFollowing } from "~/composables/usefollowVendor";

const profileBorderColor = ref(null);
const router = useRouter;
const loginDialog = ref(false);
const flag = ref(null);
const placescards = ref(false);
const mods = ref(1);
const rating = ref(4);
const tab = ref(null);
const userStore = useUserStore();
const hasFollowed = ref(false);
const loading = ref(false);

const emits = defineEmits(["refreshVendor"]);

const props = defineProps({
	vendor: {
		type: Array,
		required: true,
	},
	posts: {
		type: Array,
		required: true,
	},
	articles: {
		type: Array,
		required: true,
	},
	products: {
		type: Array,
		required: true,
	},
	promos: {
		type: Array,
		required: true,
	},
	fetchingAll: {
		type: Boolean,
		required: true,
	},
});
if (props.vendor) {
	flag.value = getFlag();
	if (userStore.isLoggedIn) {
		hasFollowed.value = await isFollowing(props.vendor?.id);
	}
	try {
		profileBorderColor.value = await getBorderColor();
	} catch (error) {
		console.error(error);
	}
}

async function followVendor() {
	if (!userStore.isLoggedIn) {
		loginDialog.value = true;
		return;
	}
	try {
		loading.value = true;
		if (!hasFollowed.value) {
			const res = await follow(props.vendor?.id);
			if (res) {
				emits("refreshVendor");
			}
		}
		if (hasFollowed.value) {
			const res = await unFollowVendor(props.vendor?.id);
			if (res) {
				emits("refreshVendor");
			}
		}
	} catch (error) {
		console.error(error);
	} finally {
		loading.value = false;
	}
}
function toLogin() {
	loginDialog.value = false;
	router.push("/user/login");
}
async function getBorderColor() {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "Anonymous";
		img.src = props.vendor.profile_photo;
		img.onload = () => {
			const colorThief = new ColorThief();
			const dominantColor = colorThief.getColor(img);
			resolve(`rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`);
		};
		img.onerror = () => {
			console.error("Cannot load image");
			reject("Cannot load image");
		};
	});
}

watch(
	() => props.vendor,
	async () => {
		flag.value = getFlag();
		if (userStore.isLoggedIn) {
			hasFollowed.value = await isFollowing(props.vendor?.id);
		}
		try {
			profileBorderColor.value = await getBorderColor();
		} catch (error) {
			console.error(error);
		}
	}
);

const buttons = computed(() => {
	return [
		{
			icon: "youtube",
			handle: props.vendor?.youtube_handle,
		},
		{
			icon: "twitter",
			handle: props.vendor?.twitter_handle,
		},
		{
			icon: "facebook",
			handle: props.vendor?.facebook_handle,
		},
		{
			icon: "instagram",
			handle: props.vendor?.instagram_handle,
		},
	];
});

function filt(text) {
	return text.length > 40 ? text.slice(0, 40) + "..." : text;
}

const openSocialMedia = (icon, handle) => {
	window.open(`https://${icon}.com/${handle}`, "_blank");
};

function getFlag() {
	const country = props.vendor?.rep_country;
	const countryCode = countryCodes[country];
	return emojiFlags.countryCode(countryCode).emoji;
}

const cols = computed(() => {
	const { lg, sm, md } = this.$vuetify.display;
	return lg
		? [4, 6, 6, 6, 4, 8, 4, 3, 10, 2]
		: md
		? [4, 6, 6, 12, 6, 8, 4, 3, 10, 2]
		: sm
		? [6, 12, 12, 12, 12, 12, 12, 12, 12]
		: [6, 12, 12, 12, 12, 12, 12, 12, 12];
});
</script>

<style>
/* Your styles here */
.v-carousel.promo .v-btn.v-btn--icon {
	border-radius: 50% !important;
}
.v-carousel.promo .v-btn--icon .v-icon {
	font-size: 9px;
	color: #cecece;
}
.v-carousel.promo .v-btn--icon.v-btn--active .v-icon {
	color: orange;
}

.v-carousel--hide-delimiter-background .v-carousel__controls {
	bottom: -46px;
}
</style>
