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
							@click="logout"
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
							<Vendorsettingsprofile />
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
							<Vendorsettingsaccount />
						</v-window-item>
					</v-window>
				</v-col>
			</v-row>
		</v-sheet>
	</v-container>
</template>

<script>
import { useUserStore } from "~/stores/userStore";

export default {
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
