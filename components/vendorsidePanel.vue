<template>
	<v-card width="calc(100% - 5px)" height="100vh" class="rounded-0 p style-0" flat="" color="#F6F7F9" min="">
		<div style="position: absolute; width: 100%; z-index: 99; left: 0px; background: #f6f7f9; padding-top: 32px">
			<v-slide-x-transition>
				<v-menu v-if="sidebar">
					<template v-slot:activator="{ props }">
						<div class="px-8">
							<v-card color="#EDEDED" flat="" v-bind="props" class="rounded-xl" width="100%" height="">
								<div class="d-flex pa-4 align-center justify-space-between">
									<v-avatar size="48" color="white">
										<v-img cover v-if="vendor.vendor_details?.profile_photo" :src="vendor.vendor_details?.profile_photo"></v-img>
										<v-img cover v-else src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719305736/Frame_427320539_v9jme9_udrkdt.png"></v-img>
									</v-avatar>
									<div class="text-left px-4" style="max-width: 150px">
										<p
											style="
												color: #1a1d1f;
												text-transform: capitalize;
												font-weight: 600;
												text-overflow: ellipsis;
												font-size: 16px;
												white-space: nowrap;
												line-height: 24px;
											"
											class="text-truncate"
										>
											{{ vendor.vendor_details?.business_name }}
										</p>
										<p
											class="text-truncate"
											style="
												font-weight: 500;
												text-transform: capitalize;
												font-size: 12px;
												white-space: nowrap;
												text-overflow: ellipsis;
												line-height: 18px;
												color: #596066;
											"
										>
											{{ vendor.last_name }} {{ vendor.first_name }}
										</p>
									</div>
									<v-spacer></v-spacer>
									<v-icon color="green" icon="mdi mdi-chevron-down"></v-icon>
								</div>
							</v-card>
						</div>
					</template>

					<v-list class="mt-3">
						<v-list-item style="cursor: pointer"> Account </v-list-item>
						<v-list-item style="cursor: pointer"> Settings </v-list-item>
						<v-list-item style="cursor: pointer" @click="logOutUser = true"> Logout </v-list-item>
					</v-list>
				</v-menu>
				<v-menu v-else>
					<template v-slot:activator="{ props }">
						<div v-bind="props" class="px-5">
							<v-avatar size="48" color="white">
								<v-img cover v-if="vendor.vendor_details?.profile_photo" :src="vendor.vendor_details?.profile_photo"></v-img>
								<v-img cover v-else src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719305736/Frame_427320539_v9jme9_udrkdt.png"></v-img>
							</v-avatar>
						</div>
					</template>
					<v-list>
						<v-list-item style="cursor: pointer"> Account </v-list-item>
						<v-list-item style="cursor: pointer"> Settings </v-list-item>
						<v-list-item style="cursor: pointer" @click="logOut"> Logout </v-list-item>
					</v-list>
				</v-menu>
			</v-slide-x-transition>
			<div
				:style="!sidebar ? 'height: 78vh' : 'height: 70vh'"
				id="menuV"
				class="scroll-container"
				style="top: 32px; position: relative; overflow-y: scroll"
			>
				<div v-for="(item, i) in items" :key="i" class="pb-8">
					<p v-show="sidebar" class="mb-3 px-8 text-capitalize style-1">{{ item.name }}</p>
					<div @click="selectItem(n.text)" class="align-center px-8 text-capitalize py-2 style-2" v-for="(n, i) in item.list" :key="i">
						<div class="d-flex align-center justify-space-between">
							<div class="d-flex align-center">
								<v-icon size="18" :color="vendorStore.selectedItem == n.text ? 'green ' : '#969696'" class="mr-2" :icon="n.icon"></v-icon>
								<p v-show="sidebar" :class="vendorStore.selectedItem == n.text ? 'text-green ' : 'text-grey'" class="style-3">{{ n.text }}</p>
							</div>
							<div class="d-flex align-center">
								<v-badge
									rounded="lg"
									color="green"
									:content="vendor.vendor_details?.unread_notification_count"
									size="12"
									v-if="n.text == 'Notifications' && vendor.vendor_details?.unread_notification_count > 0"
								></v-badge>
								<v-icon
									color="green"
									size="6"
									v-if="vendorStore.selectedItem == n.text && n.text !== 'Notifications' && n.text !== 'All Apps'"
									icon="mdi mdi-circle"
								></v-icon>
								<v-icon size="20" v-if="n.text == 'All Apps'" :icon="openapps ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'"></v-icon>
							</div>
						</div>
						<v-expand-transition leave-absolute>
							<div class="pt-4" v-show="integratedApps.length && n.subapps && openapps">
								<div
									style="position: relative"
									@click.stop="selectSubItem(b.title)"
									class="align-center pl-8 pr-6 text-capitalize justify-space-between py-2 d-flex style-2"
									v-for="(b, i) in integratedApps"
									:key="i"
								>
									<div
										:style="
											selectedSubItem !== b.title
												? 'border-left: 1px solid #333; border-bottom: 1px solid;'
												: 'border-left: 1px solid #2C6E63; border-bottom: 1px solid #2C6E63;'
										"
										style="position: absolute; top: -27%; left: 11px; height: 77%; width: 16px; border-radius: 0 0 0 7px"
									></div>
									<div class="d-flex align-center">
										<v-icon
											size="18"
											:color="selectedSubItem == b.title ? 'green ' : '#969696'"
											class="mr-2"
											:icon="'mdi mdi-square-rounded'"
										></v-icon>
										<p v-show="sidebar" :class="selectedSubItem == b.title ? 'text-green ' : 'text-grey'" class="style-3">{{ b.title }}</p>
									</div>
									<!-- <v-badge rounded="lg" color="green" content="2" size="12" v-if="b.text == 'Notification'"></v-badge> -->
									<v-icon color="green" size="6" v-if="selectedSubItem == b.text" icon="mdi mdi-circle"></v-icon>
								</div>
							</div>
						</v-expand-transition>
						<v-expand-transition leave-absolute>
							<div @click.stop="" class="pt-4" v-show="!integratedApps.length && n.subapps && openapps">
								<div style="position: relative" class="align-center pl-8 pr-6 text-capitalize justify-space-between py-2 d-flex style-2">
									<div
										:style="'border-left: 1px solid #e0e0e0; border-bottom: 1px solid #e0e0e0;'"
										style="position: absolute; top: -18px; left: 11px; height: 37px; width: 16px; border-radius: 0 0 0 7px"
									></div>
									<div class="d-flex align-center">
										<v-icon size="18" :color="'grey-lighten-2'" class="mr-2" :icon="'mdi mdi-square-rounded'"></v-icon>
										<p v-show="sidebar" :class="'text-grey-lighten-2'" class="style-3">Connect an app</p>
									</div>
								</div>
							</div>
						</v-expand-transition>
					</div>
				</div>
			</div>
		</div>
		<div style="position: fixed; bottom: 10px; width: 100%; left: -5px; background-color: #f6f7f9">
			<div v-if="!sidebar" class="d-flex pt-12 px-4 justify-space-between align-center style-4">
				<v-avatar style="cursor: pointer; padding-top: 20px; margin-bottom: 32px" size="57" rounded="0">
					<v-img eager="" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893051/umoja-backup2/Frame_2_gfd65l_wxdmoh.png"></v-img>
				</v-avatar>
			</div>
			<div v-else class="d-flex pt-12 px-8 justify-space-between align-center style-6">
				<v-avatar size="135" rounded="0" style="cursor: pointer; padding-top: 20px">
					<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718615349/umoja/Frame_4_emeelq_ajydmg.png"></v-img>
				</v-avatar>
			</div>
		</div>
		<v-dialog v-model="logOutUser" persistent max-width="600">
			<v-card class="pa-5 text-center rounded-lg" style="align-items: center" flat tile>
				<v-card-title style="font-weight: 700" :style="{ fontSize: $vuetify.display.mobile ? '20px' : '24px' }" class="justify-center"
					>Logout</v-card-title
				>
				<v-card-text class="text-center mb-5">Are you sure you want to logout of your account?</v-card-text>
				<v-card-actions class="justify-center w-100">
					<v-btn
						rounded="xl"
						size="large"
						style="border: 1px solid #cecece; flex: 1"
						@click="logOutUser = false"
						:style="{ fontSize: $vuetify.display.mobile ? '14px' : '18px' }"
						>Cancel</v-btn
					>
					<v-btn
						rounded="xl"
						@click="logOut()"
						size="large"
						style="background-color: #2c6e63; color: #fff; flex: 1"
						:style="{ fontSize: $vuetify.display.mobile ? '14px' : '18px' }"
						>Logout</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-card>
</template>
<style>
.style-0 {
	z-index: 99;
	position: relative;
}
.style-1 {
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	color: #333333;
}
.style-2 {
	cursor: pointer;
}
.style-3 {
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
}
.style-4 {
	bottom: 22px;
	margin-top: 100px;
}
.style-5 {
	height: auto !important;
}
.style-6 {
	bottom: 22px;
	margin-top: 100px;
}
.style-7 {
	height: auto !important;
}
</style>
<script>
import { useAppStore } from "@/stores/appStore";
import { useVendorStore } from "~/stores/vendorStore";
import { ref, onMounted } from "vue";

export default {
	setup() {
		const appStore = useAppStore();
		const vendorStore = useVendorStore();
		const vendor = ref(vendorStore.vendor);
		const logOutUser = ref(false);

		watch(
			() => vendorStore.vendor,
			(newpost, oldpost) => {
				vendor.value = newpost;
			}
		);

		return {
			integratedApps: appStore.integratedApps,
			vendorStore,
			vendor,
			logOutUser,
		};
	},
	beforeMount() {
		this.vendorStore.selectedItem = this.currentPage;
	},
	props: ["currentPage", "sidebar"],
	data() {
		return {
			list: "",
			openapps: false,
			selectedItem: "Homepage",
			selectedSubItem: "",
			items: [
				{
					name: "website",
					list: [{ text: "Homepage", icon: "fas fa-globe" }],
				},
				{
					name: "Menu",
					list: [
						{ text: "Dashboard", icon: "mdi mdi-view-grid" },
						{ text: "Orders", icon: "mdi mdi-shopping" },
						{ text: "Products", icon: "mdi mdi-tag" },
						{ text: "Customers", icon: "mdi mdi-account-group" },
						{ text: "Sales", icon: "mdi mdi-trending-up" },
						{ text: "Reviews", icon: "mdi mdi-star" },
						// { text: 'Merchandise', icon: 'mdi mdi-warehouse' },
					],
				},
				{
					name: "Content Media",
					list: [
						{ text: "Posts", icon: "mdi mdi-image-outline" },
						{ text: "Articles", icon: "mdi mdi-note-text" },
					],
				},
				{
					name: "Others",
					list: [
						{ text: "Notifications", icon: "mdi mdi-message-badge" },
						// { text: 'Help', icon: 'mdi mdi-help-circle' },
						{ text: "Settings", icon: "mdi mdi-cog" },
					],
				},
				// {
				// name: 'Umoja Apps',
				// list: [
				// { text: 'All Apps', icon: 'mdi mdi-message-badge',
				// subapps: [
				// { text: 'Jira', icon: 'mdi mdi-square-rounded' },
				// { text: 'Quick Books', icon: 'mdi mdi-square-rounded' },
				// ]},
				// ]
				// },
			],
		};
	},

	methods: {
		async logOut() {
			const response = await this.vendorStore.logout();
			if (response) {
				// this.$router.push('/vendor/login')
				window.location.reload();
			}
		},
		selectItem(n) {
			// if (n == 'All Apps') {
			// this.openapps = !this.openapps
			// }
			this.selectedSubItem = "";
			this.vendorStore.selectedItem = n;

			this.$emit("changePage", n);
		},
		selectSubItem(n) {
			this.selectedSubItem = n;

			this.$emit("changePage", n);
		},
		sideFn() {
			if (this.sidebar) this.$emit("sideFn");
		},
	},
};
</script>
