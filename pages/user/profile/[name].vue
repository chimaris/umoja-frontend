<template>
	<Header2 />
	<!-- <div style="min-height: 120vh; width: 100%"> -->
	<div id="homepage" style="min-height: 100vh; width: 100%">
		<v-img
			height="185"
			style="position: relative"
			width="100%"
			cover
			class="d-flex bg-grey justify-end align-start"
			src="https://res.cloudinary.com/payhospi/image/upload/v1684584271/Rectangle_448_x784z8.png"
		>
			<v-container style="max-width: 1400px; height: 100%; width: 100%" class="d-flex pt-6 justify-end align-start">
				<v-btn
					size="large"
					rounded="xl"
					flat
					class="d-flex align-center text-white"
					style="text-transform: none !important"
					color="rgba(0, 0, 0, 0.5)"
				>
					<v-img class="mx-2" height="24" width="24" :src="getCloudinaryImageUrl('https://res.cloudinary.com/payhospi/image/upload/v1716540767/umoja/edit-icon.svg', 60)" />
					<span style="font-size: 12px; font-weight: 400"> Edit Cover Photo </span>
				</v-btn>
				<v-menu open-on-hover="" class="d-block d-md-none">
					<template v-slot:activator="{ props }">
						<v-btn
							class="ml-4 d-block d-md-none"
							v-bind="props"
							color="rgba(0, 0, 0, 0.5)"
							style="border-radius: 50% !important"
							icon="mdi mdi-dots-horizontal"
							flat
						></v-btn>
					</template>
					<v-btn
						@click="logoutUser()"
						:style="{ backgroundColor: $vuetify.display.mobile ? '#cecece' : '' }"
						:width="$vuetify.display.mobile ? 200 : 250"
						size="x-large"
						color="red"
						variant="outlined"
						class="mt-2"
						style="border-radius: 6px; border: 1px solid var(--carbon-2, #cecece)"
						flat
					>
						<v-icon icon="mdi mdi-logout"></v-icon> <span style="color: #c20052; font-size: 14px; font-weight: 600"> Log Out Account </span>
					</v-btn>
				</v-menu>
			</v-container>
		</v-img>
		<div>
			<v-container style="margin-top: -66px; max-width: 1400px">
				<div class="d-flex align-center justify-space-between">
					<div class="d-flex flex-column flex-md-row align-md-center">
						<v-avatar color="grey-lighten-3" style="overflow: visible" class="mr-2" :size="$vuetify.display.mobile ? '111' : '166'">
							<v-img :src="getCloudinaryImageUrl('https://res.cloudinary.com/payhospi/image/upload/v1689338074/frame-481584_vquap5.png', 300)"></v-img>
							<v-btn
								color="white"
								rounded="xl"
								size="x-small"
								variant="elevated"
								flat
								style="position: absolute; height: 32px; width: 32px; border-radius: 50%"
								:style="{ right: $vuetify.display.mobile ? '2px' : '11px', top: $vuetify.display.mobile ? '2px' : '8px' }"
							>
								<v-img height="24" width="24" :src="getCloudinaryImageUrl('https://res.cloudinary.com/payhospi/image/upload/v1716541214/umoja/Pen_2_oztt3w.svg', 60)" />
							</v-btn>
						</v-avatar>
						<div class="pt-4 d-none d-md-block">
							<p v-if="userStore.user" style="font-size: 24px; font-weight: 600">{{ userStore.user.last_name }} {{ userStore.user.first_name }}</p>
							<div class="d-flex mt-1">
								<div class="d-flex align-center" v-for="n in userDetails" :key="n.data">
									<v-icon class="" size="15" :icon="n.icon"></v-icon>
									<p v-if="n.data" class="ml-2 mr-4" style="color: #333; font-size: 14px; font-weight: 500">{{ n.data }}</p>
								</div>
							</div>
						</div>
						<div class="pt-4 d-block d-md-none">
							<p v-if="userStore.user" style="font-size: 24px; font-weight: 600">{{ userStore.user.last_name }} {{ userStore.user.first_name }}</p>

							<v-row>
								<v-col v-for="n in userDetails" :key="n.data" cols="6" class="d-flex align-center">
									<v-icon class="" size="18" :icon="n.icon"></v-icon>
									<p v-if="n.data" class="ml-2" style="color: #333; font-size: 14px; font-weight: 500">{{ n.data }}</p>
								</v-col>
							</v-row>
						</div>
					</div>
					<v-menu open-on-hover="" class="d-none d-md-block">
						<template v-slot:activator="{ props }">
							<v-btn
								v-bind="props"
								class="mt-6 d-none d-md-block"
								style="border-radius: 6px; border: 1px solid var(--carbon-2, #cecece)"
								icon="mdi mdi-dots-vertical"
								flat
							></v-btn>
						</template>
						<v-btn
							@click="logoutUser()"
							width="250"
							size="x-large"
							color="red"
							variant="outlined"
							class="mt-2"
							style="border-radius: 6px; border: 1px solid var(--carbon-2, #cecece)"
							flat
						>
							<v-icon icon="mdi mdi-logout"></v-icon> <span style="color: #c20052; font-size: 14px; font-weight: 600"> Log Out Account </span>
						</v-btn>
					</v-menu>
				</div>
				<v-divider class="mt-4 d-none d-md-block"></v-divider>
			</v-container>
			<v-container class="pt-2 px-0 px-md-4" style="max-width: 1400px" :style="{ backgroundColor: $vuetify.display.mobile ? '#f8f8f8' : '' }">
				<v-card
					flat
					:class="$vuetify.display.mobile ? '' : 'cardStyle'"
					class="px-0 mt-4 mb-12 py-0"
					:style="{ backgroundColor: $vuetify.display.mobile ? '#f8f8f8' : '' }"
				>
					<div
						class="d-flex flex-column flex-md-row px-0 pt-0 pb-0 pt-md-6 justify-space-around bg-white"
						:class="$vuetify.display.mobile ? 'mx-4 rounded-xl' : ''"
					>	
					<v-expansion-panels  class="d-md-none d-block" v-model="selected">
						<v-expansion-panel  class="w-100"  :value="n" :key="index" v-for="(n, index) in ['Account Settings', 'Following', 'Manage Password', 'Order History', 'Payment method', 'Address', 'Notification']">
						<v-expansion-panel-title >
							<v-btn @click="changeTab(n)" size="large" variant="tonal" rounded="xl" flat :color="selected == n ? 'green' : 'white'">
								<v-scale-transition leave-absolute="">
									<v-icon v-if="selected == n" icon="mdi mdi-star-four-points" class="mr-2"></v-icon>
								</v-scale-transition>
								<span style="font-size: 14px; color: #333; font-weight: 600" :style="selected == n ? 'color:#2C6E63' : ''">
									{{ n }}
								</span>
							</v-btn>
						</v-expansion-panel-title>
						<v-expansion-panel-text>
							<v-window v-model="selected">
							<v-window-item value="Account Settings">
								<Useraccountsettings />
							</v-window-item>
							<v-window-item value="Following">
								<Userfollowing />
							</v-window-item>
							<v-window-item value="Manage Password">
								<Usermanagepassword />
							</v-window-item>
							<v-window-item value="Order History">
								<Userorderhistory />
							</v-window-item>
							<v-window-item value="Payment method">
								<Userpaymentmenthod />
							</v-window-item>
							<v-window-item value="Address">
								<Useraddressbook />
							</v-window-item>
							<v-window-item value="Notification">
								<Usernotification />
							</v-window-item>
							</v-window>
						</v-expansion-panel-text>
						</v-expansion-panel>
					</v-expansion-panels>
						<div
							class="d-md-flex justify-space-between align-center py-4 py-md-0 d-none"
							:style="{ borderTop: index !== 0 ? ($vuetify.display.mobile ? '1px solid #EDEDED' : '') : '' }"
							:key="n"
							v-for="(n, index) in ['Account Settings', 'Following', 'Manage Password', 'Order History', 'Payment method', 'Address', 'Notification']"
						>
							<v-btn size="large" variant="tonal" @click="changeTab(n)" rounded="xl" flat :color="selected == n ? 'green' : 'white'">
								<v-scale-transition leave-absolute="">
									<v-icon v-if="selected == n" icon="mdi mdi-star-four-points" class="mr-2"></v-icon>
								</v-scale-transition>
								<span style="font-size: 14px; color: #333; font-weight: 600" :style="selected == n ? 'color:#2C6E63' : ''">
									{{ n }}
								</span>
							</v-btn>
							<div class="d-block d-md-none">
								<v-img height="11" width="16" src="https://res.cloudinary.com/payhospi/image/upload/v1716302680/umoja/arrow.svg" />
							</div>
						 </div>
					</div>
					<v-divider class="mt-6 d-none d-md-block"></v-divider>

					<div class="d-none d-md-block">
						<v-window v-model="selected">
							<v-window-item value="Account Settings">
								<Useraccountsettings />
							</v-window-item>
							<v-window-item value="Following">
								<Userfollowing />
							</v-window-item>
							<v-window-item value="Manage Password">
								<Usermanagepassword />
							</v-window-item>
							<v-window-item value="Order History">
								<Userorderhistory />
							</v-window-item>
							<v-window-item value="Payment method">
								<Userpaymentmenthod />
							</v-window-item>
							<v-window-item value="Address">
								<Useraddressbook />
							</v-window-item>
							<v-window-item value="Notification">
								<Usernotification />
							</v-window-item>
						</v-window>
					</div>
				</v-card>
			</v-container>
		</div>

		<Mainfooter />
	</div>
</template>
<script>
import { useUserStore } from "~/stores/userStore";
import { getdateRegistered } from "~/utils/date";
import { getCloudinaryImageUrl } from "~/utils/cloudinary";
export default {
	setup() {
		definePageMeta({
			middleware: defineNuxtRouteMiddleware((to, from) => {
				const userStore = useUserStore();
				if (!userStore.isLoggedIn) {
					return navigateTo("/user/login");
				}
				if (!userStore.user) {
					const response = userStore.logout();
					if (response) {
						return navigateTo("/user/login");
					}
				}
			}),
		});
	},
	data() {
		return {
			selected: "Account Settings",
			placescards: false,

			mods: 1,
			tab: null,
			userDetails: [
				{
					icon: "mdi mdi-email",
					data: useUserStore().user?.email,
				},
				{
					icon: "fas fa-user",
					data: "24 Years",
				},
				{
					icon: "fas fa-location-dot",
					data: "Joined June 2023",
				},
				{
					icon: "mdi mdi-history",
					data: getdateRegistered(useUserStore().user?.created),
				},
			],
			items: [
				{
					name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_dfuzam.png",
					price: "115.32",
					likes: "1.2k",
				},
				{
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_1_wnr1ld.png",
					price: "57.00",
					likes: "456",
					oos: true,
				},

				{
					name: "Green and brown kente scarf material, Made in Lagos Nigeria..",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png",
					price: "57.00",
					likes: "456",
				},
				{
					name: "Orange colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png",
					price: "79.00",
					likes: "66",
					oos: true,
				},
				{
					name: "Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png",
					price: "179.00",
					likes: "966",
				},
				{
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png",
					price: "57.00",
					likes: "456",
				},
				{
					name: "Green and brown kente scarf material, Made in Lagos Nigeria..",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png",
					price: "57.00",
					likes: "456",
				},
				{
					name: "Orange colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png",
					price: "79.00",
					likes: "66",
					oos: true,
				},
				{
					name: "Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png",
					price: "179.00",
					likes: "966",
				},
				{
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png",
					price: "57.00",
					likes: "456",
				},
			],
		};
	},
	computed: {
		userStore() {
			return useUserStore();
		},
		buttons() {
			return [
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684591614/umoja/Vector_mgadhr.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/facebook_tup8rq.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/instagram_wogd5x.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/globe-americas_annyvh.png",
				},
			];
		},
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
	},
	mounted() {
		this.selected = this.$route.params.name ? this.$route.params.name : "Account Settings";
	},
	methods: {
		changeTab(n) {
			this.selected = n;
			this.$router.push(`/user/profile/${n}`);
		},
		logoutUser() {
			const response = this.userStore.logout();
			if (response) {
				this.$router.push("/user/login");
			}
		},
		filt(text) {
			var newText = text.length > 50 ? text.slice(0, 50) + "..." : text;
			return newText;
		},
	},
};
</script>

<style>
.v-expansion-panel-title__icon{
	font-size: 12px;
}
.v-expansion-panel:first-child{
	border-radius: 15px 15px 0 0;
}
.v-expansion-panel:last-child{
	border-radius: 0 0 15px 15px;
}
.v-expansion-panel__shadow {
  box-shadow: none;
}

</style>