<template>
	<v-container class="pa-8" fluid="">
		<p style="color: #333; font-size: 24px; font-weight: 500">Manage your account settings</p>
		<v-sheet class="cardStyle mt-4 mb-12 py-0">
			<v-row>
				<v-col class="py-4 dash" style="position: relative; min-height: 600px" cols="12" md="3">
					<div class="py-3" :key="n" v-for="n in ['My Profile', 'Security', 'Notifications', 'Account Details', 'Billing', 'Integrations']">
						<v-btn size="large" variant="tonal" @click="selected = n" rounded="xl" flat :color="selected == n ? 'green' : 'white'">
							<v-scale-transition>
								<v-icon v-if="selected == n" icon="mdi mdi-star-four-points" class="mr-2"></v-icon>
							</v-scale-transition>
							<span style="font-size: 14px; color: #333; font-weight: 600" :style="selected == n ? 'color:#2C6E63' : ''">
								{{ n }}
							</span>
						</v-btn>
					</div>
					<div class="px-4" style="min-height: 50px; position: absolute; bottom: 30px; left: -4px; width: 100%">
						<v-btn
							@click="logOutUser = true"
							block
							size="x-large"
							color="red"
							variant="outlined"
							style="border-radius: 6px; border: 1px solid var(--carbon-2, #cecece)"
							flat
						>
							<v-icon icon="mdi mdi-logout"></v-icon> <span style="color: #c20052; font-size: 14px; font-weight: 600"> Log Out Account </span>
						</v-btn>
					</div>
				</v-col>
				<v-divider style="margin-bottom: 12px; margin-top: 12px; max-height: calc(100% - 24px)" vertical="" inset=""></v-divider>
				<v-col cols="12" class="px-0 dash" md="9">
					<v-window v-model="selected">
						<v-window-item value="My Profile">
							<Vendorsettingsprofile :vendor="vendor" />
						</v-window-item>
						<v-window-item value="Billing">
							<Vendorsettingsbilling />
						</v-window-item>
						<v-window-item value="Notifications">
							<Vendorsettingsnotifications />
						</v-window-item>
						<v-window-item value="Security">
							<Vendorsettingssecurity />
						</v-window-item>
						<v-window-item value="Account Details">
							<Vendorsettingsaccount :vendor="vendor" />
						</v-window-item>
					</v-window>
				</v-col>
			</v-row>
		</v-sheet>
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
						style="background-color: #c20052; color: #fff; flex: 1"
						:style="{ fontSize: $vuetify.display.mobile ? '14px' : '18px' }"
						>Logout</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import { useUserStore } from "~/stores/userStore";
import { useVendorStore } from "~/stores/vendorStore";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
	setup() {
		const vendorStore = useVendorStore();
		const vendor = ref(vendorStore.vendor);
		const router = useRouter();
		const logOutUser = ref(false);

		watch(
			() => vendorStore.vendor,
			(newpost, oldpost) => {
				vendor.value = newpost;
			}
		);
		async function logOut() {
			const response = await vendorStore.logout();
			if (response) {
				window.location.reload();
			}
		}

		return {
			vendorStore,
			vendor,
			logOut,
			router,
			logOutUser,
		};
	},
	data() {
		return {
			tab: "",
			selected: "My Profile",
			items: [],
		};
	},
	mounted() {
		this.items = this.items1;
	},
	computed: {
		userStore() {
			return useUserStore();
		},
	},
	methods: {
		logout() {
			this.userStore.logout();
			this.$router.push("/home2");
		},
		choose(x) {
			this.$emit("changePage", "Order details");
		},
		choose2(x) {
			this.$emit("changePage", "createorder");
		},
		sort(x, y) {
			var itm = this.items1;
			this.items = itm.filter((item) => {
				return item[x] == y;
			});
		},
	},
};
</script>
