<template>
	<beta-test />
	<div @click="$router.push('/user/signup')" class="tophead heroimg" id="topbar">
		<p class="text-white text-center pa-4" :style="{ fontSize: $vuetify.display.mobile ? '12px' : '16px' }">
			Sign up and GET 20% OFF for your first order🎉. <span class="pointhere">Sign up now </span>
		</p>
	</div>
	<div :style="sticky ? ' position: relative;' : ' position: sticky;'" class="topbar">
		<v-container class="py-0" :style="'max-width:' + maxw">
			<div class="d-flex justify-space-between align-center">
				<div class="d-flex align-center">
					<v-avatar class="mr-8" @click="$router.push('/')" size="102" height="" style="cursor: pointer; height: 65px !important" rounded="0">
						<v-img cover eager :src="getCloudinaryImageUrl('https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png', 200)"></v-img>
					</v-avatar>
					<div class="d-none d-sm-flex">
						<v-btn :to="n.route" variant="text" v-show="!n.disabled" class="mx-2" flat v-for="n in urls" :key="n.title">
							{{ n.title }}
						</v-btn>
					</div>
				</div>
				<div class="d-flex">
					<v-menu persistent="" v-model="searchmenu" :close-on-content-click="false" location="bottom" offset="28px">
						<template v-slot:activator="{ props, isActive }">
							<div class="d-flex align-center">
								<div v-bind="props">
									<v-slide-x-reverse-transition leave-absolute origin="center center">
										<v-btn v-if="!isActive" icon size="40" v-bind="props" rounded="xl" flat color="transparent" class="">
											<v-avatar rounded="0" size="20">
												<v-img
													contain
													:src="
														getCloudinaryImageUrl(
															'https://res.cloudinary.com/payhospi/image/upload/v1691742708/outline-search-minimalistic-magnifer_eez0ab.png',
															50
														)
													"
												></v-img> </v-avatar
										></v-btn>
									</v-slide-x-reverse-transition>
								</div>
								<v-slide-x-reverse-transition leave-absolute origin="center center" class="d-none d-md-block">
									<v-text-field
										v-if="isActive"
										variant="outline"
										:style="'min-width: ' + inpwidth"
										class="search"
										hide-details=""
										prepend-inner-icon="mdi mdi-magnify"
										placeholder="Ankara"
										density="compact"
										v-model="productStore.searchTerm"
										@input="productStore.search()"
									>
										<template v-slot:append-inner>
											<v-progress-circular v-if="productStore.searching" color="grey" :size="24" :width="3" indeterminate></v-progress-circular>
											<v-icon v-else color="grey" @click="searchmenu = false" icon="mdi mdi-close-circle" />
										</template>
									</v-text-field>
								</v-slide-x-reverse-transition>
							</div>
						</template>
						<dialogsearch :close="handleSearchClose" />
					</v-menu>

					<v-btn rounded="xl" v-if="!isLoggedIn" to="/signin-category" size="40" icon flat color="transparent">
						<v-avatar size="20">
							<v-img
								:src="getCloudinaryImageUrl('https://res.cloudinary.com/payhospi/image/upload/v1693034207/User_Rounded_xfgovv.png', 50)"
							></v-img> </v-avatar
					></v-btn>
					<v-btn v-else rounded="xl" to="/user/profile/Account Settings" size="40" icon flat color="transparent">
						<v-avatar size="20">
							<v-img
								:src="getCloudinaryImageUrl('https://res.cloudinary.com/payhospi/image/upload/v1689338074/frame-481584_vquap5.png', 50)"
							></v-img> </v-avatar
					></v-btn>
					<v-btn @click="toCart()" class="text-none" icon size="40" rounded="xl" flat color="transparent">
						<v-badge offset-y="20" :dot="cartStore.totalCartItems == 0" :content="cartStore.totalCartItems" color="error">
							<v-avatar rounded="0" size="20">
								<v-img
									contain
									:src="
										getCloudinaryImageUrl(
											'https://res.cloudinary.com/payhospi/image/upload/v1691742709/outline-shopping-ecommerce-bag-4_aibbld.png',
											50
										)
									"
								></v-img>
							</v-avatar>
						</v-badge>
					</v-btn>

					<v-menu v-if="isLoggedIn" v-model="notification" :close-on-content-click="false" location="bottom" offset="28px">
						<template v-slot:activator="{ props }">
							<v-btn icon size="40" v-bind="props" rounded="xl" flat color="transparent">
								<v-avatar rounded="0" size="16">
									<v-img
										contain
										:src="
											getCloudinaryImageUrl(
												'https://res.cloudinary.com/payhospi/image/upload/v1691742990/outline-notifications-vector_vkwg9h.svg',
												50
											)
										"
									></v-img> </v-avatar
							></v-btn>
						</template>
						<dialognotification />
					</v-menu>
					<v-menu location="bottom" offset="10px" width="120px" max-height="400">
						<template v-slot:activator="{ props }">
							<div
								v-ripple
								v-bind="props"
								style="cursor: pointer; width: fit-content; height: 40px; border: 1px solid #cecece"
								size="large"
								color="white"
								variant="elevated"
								flat
								class="bg-white d-none d-md-flex rounded-lg elevation-0 chipper px-1 ml-4"
							>
								<div class="d-flex justify-space-between w-100 h-100 align-center">
									<div class="d-flex align-center">
										<!-- <p class="d-flex align-center h-100" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: -0.14px; font-weight: 500">
											<span class="mx-2" style="font-size: 18px;">{{ getFlag(country) }}</span>
											<span style="font-size: 18px;" class="mr-2 d-md-flex">{{ countryCodes[country] }}</span>
										</p> -->
										<p class="d-flex align-center"><span class="mr-3" style="font-size: 22px;">{{getFlag(country)}}</span> {{ countryCodes[country] }}</p>
									</div>
									<v-icon class="" icon="mdi mdi-chevron-down"></v-icon>
								</div>
							</div>
						</template>
						<v-list>
							<v-list-item v-for="(item, index) in allCountries" :key="index" :value="index" @click="selectCountry(item)">
								<p class="d-flex align-center"><span class="mr-3" style="font-size: 25px;">{{getFlag(item)}}</span> {{ countryCodes[item] }}</p>
							</v-list-item>
						</v-list>
					</v-menu>
					<v-btn v-if="$vuetify.display.mobile" rounded="xl" size="40" icon flat color="transparent" @click.stop="openNav">
						<v-avatar size="20">
							<v-img
								contain
								:src="getCloudinaryImageUrl('https://res.cloudinary.com/payhospi/image/upload/v1713788195/umoja/menu.svg', 50)"
							></v-img> </v-avatar
					></v-btn>
				</div>
			</div>
		</v-container>
	</div>

	<!-- Responsive navbar -->
	<v-layout v-if="$vuetify.display.mobile && drawer">
		<v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'left' : undefined" temporary style="width: 100%; height: 100vh">
			<div class="d-flex align-center justify-space-between px-4">
				<v-avatar class="mr-8" @click="$router.push('/')" size="102" height="" style="cursor: pointer; height: 65px !important" rounded="0">
					<v-img eager :src="getCloudinaryImageUrl('https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png', 200)"></v-img>
				</v-avatar>
				<v-icon icon="mdi mdi-close" @click.stop="drawer = false"></v-icon>
			</div>
			<v-divider></v-divider>

			<v-list :items="urls" class="d-flex flex-column align-start">
				<v-btn
					:to="n.route"
					v-for="n in urls"
					variant="text"
					v-show="!n.disabled"
					class=""
					flat
					:key="n.title"
					style="font-weight: 700; font-size: 16px; line-height: 22.4px; color: #2a2a2a"
				>
					{{ n.title }}
				</v-btn>
			</v-list>
			<v-menu location="bottom" offset="10px" width="120px" max-height="400">
						<template v-slot:activator="{ props }">
							<div
								v-ripple
								v-bind="props"
								style="cursor: pointer; width: fit-content; height: 40px; border: 1px solid #cecece"
								size="large"
								color="white"
								variant="elevated"
								flat
								class="bg-white  rounded-lg elevation-0 chipper px-1 ml-4"
							>
								<div class="d-flex justify-space-between w-100 h-100 align-center">
									<div class="d-flex align-center">
										<!-- <p class="d-flex align-center h-100" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: -0.14px; font-weight: 500">
											<span class="mx-2" style="font-size: 18px;">{{ getFlag(country) }}</span>
											<span style="font-size: 18px;" class="mr-2 d-md-flex">{{ countryCodes[country] }}</span>
										</p> -->
										<p class="d-flex align-center"><span class="mr-3" style="font-size: 22px;">{{getFlag(country)}}</span> {{ countryCodes[country] }}</p>
									</div>
									<v-icon class="" icon="mdi mdi-chevron-down"></v-icon>
								</div>
							</div>
						</template>
						<v-list>
							<v-list-item v-for="(item, index) in allCountries" :key="index" :value="index" @click="selectCountry(item)">
								<p class="d-flex align-center"><span class="mr-3" style="font-size: 25px;">{{getFlag(item)}}</span> {{ countryCodes[item] }}</p>
							</v-list-item>
						</v-list>
			</v-menu>
			<template v-if="!isLoggedIn" v-slot:append>
				<div class="pa-4 pb-16">
					<v-btn block color="#333" size="large" variant="outlined" flat rounded="xl">
						<span class="d-flex align-center" style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Login </span>
					</v-btn>
				</div>
			</template>
		</v-navigation-drawer>
	</v-layout>

	<!-- <v-card height="500px" class=" d-flex align-end">{{ hasScrolledPastPoint }}</v-card> -->
	<tutorial />
</template>
<style>
.search .v-input__control {
	border-radius: 6px;
	border: 1px solid var(--carbon-2, #cecece);
}
</style>
<script>
import { useTheme } from "vuetify";
import { useCartStore } from "~/stores/cartStore";
import {ref, onMounted} from 'vue'
import { useRouter } from "vue-router";
import { useUserStore } from "~/stores/userStore";
import { useVendorStore } from "~/stores/vendorStore";
import { allCountries, countryCodes, getFlag } from "~/utils/countryapi";
import { useProductStore } from "~/stores/productStore";
import { getCloudinaryImageUrl } from "~/utils/cloudinary";
import emojiFlags from 'emoji-flags';
import useGeolocation from "~/composables/getCountry";

export default {
	setup(){
		const userStore = useUserStore()
		const country = computed(() => userStore.userCountry)

		onMounted(async () => {
			if (!userStore.userCountry){
			await useGeolocation()
			}
		})

		function selectCountry(item) {
			userStore.setCountry(item);
		}

		return{
			userStore,
			country,
			getFlag,
			selectCountry
		}
	},
	data() {
		return {
			searchQuery: "",
			theme: useTheme(),
			btn_radio: null,
			searchmenu: false,
			notification: false,
			drawer: false,
			group: null,
			items: [
				{
					title: "Foo",
					value: "foo",
				},
				{
					title: "Bar",
					value: "bar",
				},
				{
					title: "Fizz",
					value: "fizz",
				},
				{
					title: "Buzz",
					value: "buzz",
				},
			],
		};
	},
	props: ["maxwidth", "sticky"],
	computed: {
		sticky() {
			return this.sticky !== undefined ? this.sticky : false;
		},
		maxw() {
			return this.maxwidth ? this.maxwidth : "1400px";
		},
		inpwidth() {
			return this.maxwidth == undefined ? "300px" : "295px";
		},
		urls() {
			const loggedIn = this.isLoggedIn;
			return [
				{ title: "Buy", route: "/user/login", disabled: this.isLoggedIn },
				{ title: "Sell", route: "/vendor/login", disabled: false },
				{ title: "Discovery", route: "/discovery_page", disabled: false },
				{ title: "Market Place", route: "/market_place", disabled: false },
				{ title: "About Us", route: "/about/*", disabled: false },
				{ title: "Create Account", route: "/signup-category", disabled: this.isLoggedIn},
				// { title: "ERP Solution", route: "/vendor/dashboard/Homepage", disabled: false },
			];
		},
		cartStore() {
			return useCartStore();
		},
		vendorStore() {
			return useVendorStore();
		},
		productStore() {
			return useProductStore();
		},
		router() {
			return useRouter();
		},
		isLoggedIn() {
			return this.userStore.isLoggedIn;
		},
	},
	methods: {
		searchProduct() {
			if (this.searchQuery) {
				this.productStore.searchTerm = this.searchQuery;
			}
		},
		toCart() {
			if (this.cartStore.totalCartItems === 0) {
				return;
			}
			this.$router.push("/order/cart");
		},
		toggleTheme() {
			this.theme.global.name.value = this.theme.global.current.value.dark ? "light" : "dark";
		},
		openNav() {
			this.drawer = true;
		},

		handleSearchClose() {
			this.searchmenu = false;
		},
	},
};
</script>
