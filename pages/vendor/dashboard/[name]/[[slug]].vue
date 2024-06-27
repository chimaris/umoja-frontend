<template>
	<complete-settings />
	<beta-test />
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
								v-if="currentPage != 'Order details' && currentPage != 'Add Products' && currentPage != 'createorder' && currentPage !== 'Import Product' && currentPage !== 'Edit Product' && currentPage != 'Create Post' && currentPage !== 'Edit Post' && currentPage != 'Create Article' && currentPage != 'Edit Article'"
								class="h-100 d-flex align-center"
							>
								<v-btn class="mx-4" icon flat rounded="xl" @click="vendorStore.sideBtn = !vendorStore.sideBtn"><v-icon icon="mdi mdi-menu"></v-icon></v-btn>

								<p style="font-weight: 600; font-size: 24px; line-height: 32px; color: #1a1d1f" class="text-capitalize">{{ currentPage }}</p>
							</div>
							<div v-else class="h-100 px-8 d-flex align-center">
								<v-btn class="mr-4" icon flat rounded="xl" @click="vendorStore.sideBtn = !vendorStore.sideBtn"><v-icon icon="mdi mdi-menu"></v-icon></v-btn>

								<v-btn v-if="!(currentPage == 'Create Post' && vendorStore.vendor.vendor_details?.post_count == 0 || currentPage == 'Create Article' && vendorStore.vendor.vendor_details?.article_count == 0)"
									@click="handleClick"
									size="large"
									v-bind="props"
									style="border: 1px solid #e5e5e5"
									variant="outlined"
									class="text-grey-darken-3"
								>
									<v-icon size="16" class="mr-2" icon="mdi mdi-arrow-left-top"></v-icon>
									Back to {{ curPageValue }}
								</v-btn>
							</div>
						</div>
					</div>
					<!-- :value=" -->
					<v-window :touch="false" style="padding-top: 67px" v-model="currentPage">
						<v-window-item :value="'Order details'">
							<LazyVendororderdetails />
						</v-window-item>

						<v-window-item :value="'Homepage'">
							<LazyVendorpreview @changePage="changePage" />
						</v-window-item>
						<v-window-item :value="'Dashboard'">
							<LazyVendordashboard />
						</v-window-item>
						<v-window-item :value="'Orders'">
							<LazyVendororders @changePage="changePage" />
						</v-window-item>
						<v-window-item :value="'Add Products'">
							<LazyVendoraddproducts />
						</v-window-item>
						<v-window-item :value="'Edit Product'">
							<LazyVendorEditProduct />
						</v-window-item>
						<v-window-item :value="'Import Product'">
							<LazyVendorimportproduct />
						</v-window-item>
						<v-window-item :value="'Products'">
							<LazyVendorproducts @changePage="changePage" />
						</v-window-item>
						<v-window-item :value="'cpage'">
							<LazyVendorordcustomerpage />
						</v-window-item>
						<v-window-item :value="'createorder'">
							<LazyVendorcreateorder />
						</v-window-item>
						<v-window-item :value="'Create Post'">
							<LazyVendorcreatepost />
						</v-window-item>
						<v-window-item :value="'Posts'">
							<LazyVendorshowposts @changePage="changePage" />
						</v-window-item>
						<v-window-item :value="'Edit Post'">
							<LazyVendorEditPost />
						</v-window-item>
						<v-window-item :value="'Create Article'">
							<LazyVendorcreatearticle />
						</v-window-item>
						<v-window-item :value="'Edit Article'">
							<LazyVendorEditArticle />
						</v-window-item>
						<v-window-item :value="'Articles'">
							<LazyVendorshowarticle @changePage="changePage" />
						</v-window-item>
						<v-window-item @changeTab="changePage" :value="'Customers'">
							<LazyVendorcustomers />
						</v-window-item>
						<v-window-item :value="'Sales'">
							<LazyVendorsales />
						</v-window-item>
						<v-window-item :value="'Reviews'">
							<LazyVendorreviews />
						</v-window-item>
						<v-window-item :value="'Notifications'">
							<LazyVendornotifications  @changePage="changePage" />
						</v-window-item>
						<v-window-item :value="'Settings'">
							<LazyVendorsettings @changeTab="changeTab" @changePageTab="changePageTab" />
						</v-window-item>
						<v-window-item :value="'All Apps'">
							<LazyVendorapps />
						</v-window-item>
						<v-window-item :value="'Profile Setup'">
							<LazyVendorProfileSetup />
						</v-window-item>
					</v-window>
				</v-card>
			</v-col>
		</v-row>
	</div>
	<tutorial />
	<v-dialog v-model="showModal" persistent max-width="600">
		<v-card>
			<v-card-text>Please use a desktop computer to access the vendor dashboard for the best experience.</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn @click="showModal = false">OK</v-btn>
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


import { ref, onBeforeUnmount, computed, onMounted  } from 'vue';
import {useVendorProductStore} from '~/stores/vendorProducts'
import { useVendorStore } from '~/stores/vendorStore';
import { useRouter, useRoute } from '#vue-router';
import {useCreateStore} from '~/stores/createPostStore'
import { useOrderStore } from '~/stores/order';
import {fetchProducts, fetchDetails, fetchPromos, fetchPosts, fetchArticles  } from '~/composables/useVendorPage'


const sidebar = computed(() => useVendorStore().sideBtn)
const edit = ref(true);
const router = useRouter();
const route = useRoute()
const vendorStore  = useVendorStore();
const vendorProducts = useVendorProductStore()
const postStore = useCreateStore()
const showModal = ref(false)
const curPageValue = computed(() => {
	if (currentPage.value === 'Add Products' || currentPage.value === 'Import Product'|| currentPage.value === 'Edit Product'){
		return 'Products'
	}else if (currentPage.value === 'Create Post' || currentPage.value === 'Edit Post'){
		return 'Posts'
	}else if (currentPage.value ==='Create Article' || currentPage.value === 'Edit Article'){
		return 'Articles'
	}else{
		return 'Orders'
	}
})
const currentPage = ref(route.params.name ? route.params.name : "Homepage");

watch(() => route.params.name, (name) => {
  currentPage.value = name;
});
watch(() => window.innerWidth, () => {
 checkScreenSize()
});

async function loadVendorData(){
	const vendorDetails = vendorStore.vendor.vendor_details;
	const vendorId  = vendorStore.vendor.vendor_details.id;
		if (vendorDetails?.product_count > 0){
			vendorProducts.allProducts = await fetchProducts(vendorId)
		}
		if (vendorDetails?.article_count > 0){
			postStore.getArticle()
		}
		if (vendorDetails?.post_count > 0){
			postStore.getPost()
		}
		if (vendorDetails?.promo_count > 0){
			vendorProducts.promoProducts = await fetchPromos(vendorId)
		}
}

onMounted(async () => {
	const vendorId  = vendorStore.vendor?.id;
	await vendorStore.getUser(vendorId)
	if (vendorStore.vendor.complete_setup == 1){
		await loadVendorData();
	}
	checkScreenSize()
	window.addEventListener('resize', checkScreenSize);
})
onBeforeUnmount(() => {
	window.removeEventListener('resize', checkScreenSize)
})


function checkScreenSize(){
	showModal.value = window.innerWidth < 1024;
}
const handleClick = () => {
      if (currentPage.value === 'Add Products' || currentPage.value === 'Import Product'|| currentPage.value === 'Edit Product') {
		router.push('/vendor/dashboard/Products')
      }else if (currentPage.value === 'Create Post' || currentPage.value === 'Edit Post'){
		router.push('/vendor/dashboard/Posts')
	  }else if (currentPage.value === 'Create Article' || currentPage.value === 'Edit Article'){
		router.push('/vendor/dashboard/Articles')
	  }else {
		router.push('/vendor/dashboard/Orders')
      }
    };

function changePage(n) {
  	router.push(`/vendor/dashboard/${n}`);
}
function changePageTab(n) {
  	router.push(`/vendor/dashboard/Settings/${n}`);
}
// function changeTab(n){
// 	// router.push(`/vendor/dashboard/Settings/${n}`)
// 	route.params.tab = n
// }
function sideFn() {
  useVendorStore().sideBtn = false
}

</script>
