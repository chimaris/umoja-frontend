<template>
	<div>
		<v-row class="d-flex">
			<v-col
				cols="12"
				lg="24"
				:class="!(currentPage == 'dash') ? 'px-0' : ''"
				style="background-color: #f6f7f9; position: absolute; top: 0; left: 0; z-index: 99"
				:md="!sidebar ? '3' : '24'"
				class="pb-0 pt-0 dash"
			>
				<v-slide-x-transition>
					<VendorsidePanel :currentPage="currentPage" :sidebar="sidebar" @sideFn="sideFn" @changePage="changePage" />
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
					:class="!(currentPage == 'dash') ? '' : 'pr-8 py-8'"
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
								v-if="currentPage != 'Order details' && currentPage != 'Add Products' && currentPage != 'createorder' && currentPage !== 'Import Product' && currentPage !== 'Edit Product'"
								class="h-100 d-flex align-center"
							>
								<v-btn class="mx-4" icon flat rounded="xl" @click="sidebar = !sidebar"><v-icon icon="mdi mdi-menu"></v-icon></v-btn>

								<p style="font-weight: 600; font-size: 24px; line-height: 32px; color: #1a1d1f" class="text-capitalize">{{ currentPage }}</p>
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
									Back to {{ currentPage !== "Add Products" && currentPage !== "Edit Product" && currentPage !== "Import Product" ? "Orders" : "Products" }}
								</v-btn>
							</div>
						</div>
					</div>
					<!-- :value=" -->
					<v-window :touch="false" style="padding-top: 67px" v-model="currentPage">
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
						<v-window-item :value="'Edit Product'">
							<VendorEditProduct />
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
	<v-dialog v-model="isSessionExpired" max-width="400" persistent>
	<v-card>
		<v-card-title class="text-h5">Session Expired</v-card-title>
		<v-card-text>Your login session has expired. Please login again.</v-card-text>
		<v-card-actions>
		<v-spacer></v-spacer>
		<v-btn @click="reLogin" class="bg-green" color="white rounded-lg" text >Login</v-btn>
		</v-card-actions>
	</v-card>
	</v-dialog>
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


import { ref, computed, onMounted,  onBeforeMount } from 'vue';
import {useVendorProductStore} from '~/stores/vendorProducts'
import { useVendorStore } from '~/stores/vendorStore';
import { useRouter, useRoute } from '#vue-router';


const sidebar = ref(true);
const edit = ref(true);
const router = useRouter();
const route = useRoute()
const vendorStore  = useVendorStore();
const vendor = vendorStore.getVendor;
const vendorProducts = useVendorProductStore()
const isSessionExpired = ref(false)

const currentPage = ref(route.params.name ? route.params.name : "Homepage");

// const handleSessionExpired = () => {
//   isSessionExpired.value = true;
 
  
// };
// function reLogin () {
// 	localStorage.removeItem('vendorToken');
//  	 vendorStore.vendorIsLoggedIn = false;
// 	router.push('/vendor/login');
// 	isSessionExpired.value = false
// }
// window.addEventListener('sessionExpired', handleSessionExpired);
// onUnmounted(() => {
//       window.removeEventListener('sessionExpired', handleSessionExpired);
//     });

const handleClick = () => {
      if (currentPage.value === 'Add Products' || currentPage.value === 'Import Product'|| currentPage.value === 'Edit Product') {
        // Update the currentPage value to 'Products' if it meets the condition, otherwise set it to 'Orders'
        currentPage.value = 'Products';
		router.push('/vendor/dashboard/Products')
      } else {
		router.push('/vendor/dashboard/Orders')
        currentPage.value = 'Orders';
      }
    };

function changePage(n) {
  router.push(`/vendor/dashboard/${n}`);
}

function sideFn() {
  sidebar.value = false;
}

// onMounted(() => {
//   route.params.name = vendor.first_name
//   })
</script>
