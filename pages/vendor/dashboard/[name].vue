<template>
	<div>
		<v-row class="d-flex">
			<v-col
				cols="12"
				lg="24"
				:class="!(window == 'dash') ? 'px-0' : ''"
				style="background-color: #f6f7f9; position: absolute; top: 0; left: 0; z-index: 99"
				:md="!sidebar ? '3' : '24'"
				class="pb-0 pt-0 dash"
			>
				<v-slide-x-transition>
					<VendorsidePanel :window="window" :sidebar="sidebar" @sideFn="sideFn" @changePage="changePage" />
				</v-slide-x-transition>
			</v-col>

			<v-col
				style="position: fixed; right: 0; z-index: 99; height: 102vh; transition: all 0.2s ease-out"
				class="dash maincont"
				:class="sidebar ? 'px-0 ' : 'px-0'"
				cols="12"
				:md="!sidebar ? '12' : '9'"
			>
				<v-card
					style="overflow: scroll"
					id="mainsect"
					min-height="100vh"
					height="100%"
					:class="!(window == 'dash') ? '' : 'pr-8 py-8'"
					class=" "
					flat
					color="#fff"
					min
				>
					<div style="position: fixed; z-index: 99; width: 100%">
						<div
							style="
								height: 67px;
								background: rgb(255 255 255 / 65%);
								backdrop-filter: blur(3px);
								position: sticky;
								z-index: 99;
								top: 0;
								border-bottom: 0.4px #efefef solid;
							"
						>
							<div
								v-if="window != 'Order details' && window != 'Add Products' && window != 'createorder' && window !== 'Import Product'"
								class="h-100 d-flex align-center"
							>
								<v-btn class="mx-4" icon flat rounded="xl" @click="sidebar = !sidebar"><v-icon icon="mdi mdi-menu"></v-icon></v-btn>

								<p style="font-weight: 600; font-size: 24px; line-height: 32px; color: #1a1d1f" class="text-capitalize">{{ window }}</p>
							</div>
							<div v-else class="h-100 px-8 d-flex align-center">
								<v-btn class="mr-4" icon flat rounded="xl" @click="sidebar = !sidebar"><v-icon icon="mdi mdi-menu"></v-icon></v-btn>

								<v-btn
									@click="handleClick"
									size="large"
									v-bind="props"
									style="border: 1px solid #e5e5e5"
									variant="outlined"
									class="text-grey-darken-3"
								>
									<v-icon size="16" class="mr-2" icon="mdi mdi-arrow-left-top"></v-icon>
									Back to {{ window !== "Add Products" && window !== "Import Product" ? "Orders" : "Products" }}
								</v-btn>
							</div>
						</div>
					</div>
					<!-- :value=" -->
					<v-window :touch="false" style="padding-top: 67px" v-model="window">
						<v-window-item :value="'Order details'">
							<Vendororderdetails />
						</v-window-item>

						<v-window-item :value="'Homepage'">
							<Vendorpreview @changePage="changePage" />
						</v-window-item>
						<v-window-item :value="'Dashboard'">
							<Vendordashboard />
						</v-window-item>
						<v-window-item :value="'Orders'">
							<Vendororders @changePage="changePage" />
						</v-window-item>
						<v-window-item :value="'Add Products'">
							<Vendoraddproducts />
						</v-window-item>
						<v-window-item :value="'Import Product'">
							<Vendorimportproduct />
						</v-window-item>
						<v-window-item :value="'Products'">
							<Vendorproducts @changePage="changePage" />
						</v-window-item>
						<v-window-item :value="'cpage'">
							<Vendorordcustomerpage />
						</v-window-item>
						<v-window-item :value="'createorder'">
							<Vendorcreateorder />
						</v-window-item>
						<v-window-item :value="'Posts'">
							<Vendorcreatepost />
						</v-window-item>
						<v-window-item :value="'Articles'">
							<Vendorcreatearticle />
						</v-window-item>
						<v-window-item @changeTab="changePage" :value="'Customers'">
							<Vendorcustomers />
						</v-window-item>
						<v-window-item :value="'Sales'">
							<Vendorsales />
						</v-window-item>
						<v-window-item :value="'Reviews'">
							<Vendorreviews />
						</v-window-item>
						<v-window-item :value="'Notifications'">
							<Vendornotifications />
						</v-window-item>
						<v-window-item :value="'Settings'">
							<Vendorsettings />
						</v-window-item>
						<v-window-item :value="'All Apps'">
							<Vendorapps />
						</v-window-item>
						<v-window-item :value="'Profile Setup'">
							<VendorProfileSetup />
						</v-window-item>
					</v-window>
				</v-card>
			</v-col>
		</v-row>
	</div>
	<tutorial />
</template>
<style>
.maincont.v-col-md-12 {
	max-width: calc(100% - 85px);
}
</style>

<script setup>
definePageMeta({
middleware: "vendor-auth"
})


import { ref, computed } from 'vue';
import { useVendorStore } from '~/stores/vendorStore';
import { useRouter, useRoute } from '#vue-router';


const sidebar = ref(true);
const edit = ref(true);
const router = useRouter();
const route = useRoute()
const vendorStore  = useVendorStore();
const vendor = vendorStore.getVendor;


const window = ref(route.params.name ? route.params.name : "Homepage");

const handleClick = () => {
      if (window.value === 'Add Products' || window.value === 'Import Product') {
        // Update the window value to 'Products' if it meets the condition, otherwise set it to 'Orders'
        window.value = 'Products';
      } else {
        window.value = 'Orders';
      }
    };

function changePage(n) {
  router.push(`/vendor/dashboard/${n}`);
}

function sideFn() {
  sidebar.value = false;
}

</script>
