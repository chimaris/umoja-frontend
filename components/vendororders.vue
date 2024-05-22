<template>
	<v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
		<div class="d-flex align-center justify-space-between">
			<div>
				<p style="font-weight: 600; font-size: 24px" class="mb-2 d-flex align-center text-left">Manage all your orders here</p>
			</div>
			<div>
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="ml-4 text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-printer"></v-icon>
					Print
				</v-btn>
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="ml-4 text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-tray-arrow-up"></v-icon>
					Export
				</v-btn>
			</div>
		</div>
		<div class="d-flex w-100 align-center mt-6 justify-space-between">
			<div class="d-flex w-100 align-center">
				<v-text-field
					style="border: 1px solid #cecece; border-radius: 6px"
					variant="outlined"
					density="compact"
					hide-details
					prepend-inner-icon="mdi mdi-magnify"
					placeholder="Search for order id, customer, order status or something..."
				></v-text-field>
			</div>
			<div class="d-flex align-center">
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="ml-4 text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-tune"></v-icon>
					Filter
				</v-btn>
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="ml-4 text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-paperclip"></v-icon>
					Attachment
				</v-btn>
			</div>
		</div>
		<div class="mt-5">
			<v-tabs v-model="tab" class="orders" color="green">
				<v-tab @click.stop="sort(item.prop, item.value)" v-for="item in tabs" :key="item" :value="item" class="d-flex text-capitalize align-center">
					{{ item.name }}
				</v-tab>
			</v-tabs>
			<v-divider></v-divider>
			<v-table v-if="filteredOrderData.length > 0"
				style="    height: 80%; !important;
 overflow: scroll;"
			>
				<thead>
					<tr style="background: #f8f8f8; border-radius: 6px" class="rounded-lg">
						<th style="width: 50px" class="font-weight-medium text-left">
							<v-checkbox hide-details></v-checkbox>
						</th>
						<th style="font-size: 14px; width: 100px" class="font-weight-medium text-left">Order id</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Date</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Customer</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Delivery Price</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Total</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Payment status</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">item</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">fulfilment status</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Delivery method</th>
					</tr>
				</thead>
				<tbody>
					<!-- @click="chosen = item.sn" -->
					<tr @click="orderDets(item)" :style="chosen == item.order_id ? 'background:#DFDFDF' : ''" v-for="item in filteredOrderData" :key="item.order_id">
						<td class="text-grey-lighten-1 pl-4 px-1">
							<v-checkbox hide-details></v-checkbox>
						</td>
						<td style="font-size: 14px" class="tableThick px-1 pl-2">
							<v-menu location="end">
								<template v-slot:activator="{ props }">
									<span v-bind="props">
										#{{ item.order_id }}
									</span>
								</template>
								<v-card class="pa-4 rounded-lg bg-green">
									<p><v-icon class="mr-2" size="6" icon="mdi mdi-circle"></v-icon>Customer ID: #{{ item.order_id }}</p>
									<div class="pt-2 align-center d-flex">
										<v-avatar size="44" class="mr-2"
											><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1713956914/umoja/profile_image_pd4dcv.png"></v-img
										></v-avatar>
										<div>
											<p style="font-weight: 500; font-size: 14px" class="text-capitalize">{{ item.customer_fullname }}</p>
											<p
												style="
													font-weight: 500;
													font-size: 10px;
													line-height: 100%;
													/* identical to box height, or 10px */

													color: rgba(255, 255, 255, 0.75);
												"
												class="text-capitalize"
											>
												<v-icon size="12" class="mr-1" icon="mdi mdi-map-marker"></v-icon>{{item.customer_country}}
											</p>
										</div>
									</div>
								</v-card>
							</v-menu>
						</td>
						<td class="tabledate px-1">{{ getdateRegistered(item.created_at) }}</td>
						<td class="tableThick px-1">{{ item.customer_fullname }}</td>
						<td class="tableLight px-1">
							<span v-if="item.delivery_price !== 0">
								{{ item.delivery_price }}
							</span>
							<span v-else class="d-flex align-center text-green">Free <v-icon class="ml-1" size="small" icon="mdi mdi-star"></v-icon></span>
						</td>
						<td class="tableThick px-1">{{ formattedPrice(item.total) }}</td>
						<td class="text-grey-lighten-1 text-center px-1">
							<v-chip rounded="lg" class="tablechip" :color="item.payment_status == 'paid' ? 'blue' : 'orange'" variant="tonal">
								<v-icon class="mr-2" size="small" icon="mdi mdi-check-circle"></v-icon>
								{{ item.payment_status }}
							</v-chip>
						</td>
						<td class="tableLight px-1">{{ item.items.length + " Item" + (item.items.length > 1 ? "s" : "") }}</td>
						<td class="text-grey-lighten-1 text-center px-1">
							<v-chip rounded="lg" class="tablechip" :color="item.fulfillment_status == 'fulfilled' ? 'green' : item.fulfillment_status == 'unfulfilled' ? 'red' : 'orange'" variant="tonal">
								{{ item.fulfillment_status }}
							</v-chip>
						</td>
						<td class="um px-1">{{ item.delivery_method }}</td>

						<!-- <td style="font-size: 14px;" class="text-grey-lighten-1 px-1">
            <span v-if="chosen !== item.sn ">
                {{ item.total }}
            </span>
            <v-btn v-else color="green" size="small" class=" rounded-lg"> See details</v-btn>
        </td> -->
					</tr>
				</tbody>
			</v-table>
			<div  v-if="filteredOrderData.length > 0"
				class="w-100 mt-4 d-flex justify-space-between align-center"
				style="background-color: #f8f8f8; border: 1px solid #ededed; border-radius: 6px; padding: 10px 20px; height: 60px"
			>
				<div style="display: flex; align-items: center">
					<span style="font-size: 14px; font-weight: 400">{{ from }} - {{ toPage }} of {{pagesNo}} Pages</span>
				</div>
				<div class="d-flex align-center" style="margin-left: auto">
					<span style="font-size: 12px; font-weight: 400; margin-right: 10px">The Page you’re on</span>
					<v-select
						append-inner-icon="mdi mdi-chevron-down"
						variant="outlined"
						placeholder="1"
						style="background-color: white; min-width: 40px"
						:items = "pageOptions"
						v-model="selectedPage"
					></v-select>
					<v-img
						:width="10"
						:height="40"
						src="https://res.cloudinary.com/payhospi/image/upload/v1713471908/umoja/vertical-line.svg"
						class="mx-2"
					></v-img>

					<v-btn :disabled="currentPage == 1" @click="selectedPage --;"  class="mr-1" flat><v-icon icon="mdi mdi-undo"></v-icon></v-btn>
					<v-btn  @click="selectedPage ++;" :disabled="currentPage == pagesNo" flat><v-icon icon="mdi mdi-redo"></v-icon></v-btn>
				</div>
			</div>
		</div>

		<!-- If there is no orders show this -->
		<div v-if="orderStore.allOrder.length === 0" class="d-flex flex-column justify-center align-center" style="max-height: 100%; height: 80vh">
			<v-sheet class="d-flex flex-column justify-center align-center text-center" style="width: 450px">
				<v-img
					:width="300"
					cover
					src="https://res.cloudinary.com/payhospi/image/upload/v1713433043/umoja/order-empy-box.png"
					style="filter: grayscale(100%) brightness(100%)"
				></v-img>
				<h2 style="color: #333; font-size: 24px; font-weight: 700; line-height: 30px">Your orders will show here</h2>
				<p style="color: #969696; font-size: 16px; font-weight: 500">
					This is where you'll fulfill orders, collect payments, and track order progress.
				</p>
			</v-sheet>
		</div>
	</v-container>
</template>
<script setup>
import {ref, onBeforeMount, defineEmits, computed} from 'vue';
import {vendorUseApi} from '~/composables/vendorApi';
import { getdateRegistered } from '~/utils/date';
import { formattedPrice } from '~/utils/price';
import {useOrderStore} from '~/stores/order'

const emits = defineEmits(["changePage"])
const items1 = ref([])
const item1 = ref([])
const selectedPage = ref(1)
const filteredOrderData = ref([])
const pagesNo = ref(null)
const currentPage = ref(null)
const from = ref(null)
const toPage = ref(null)
const orderStore = useOrderStore()

const pageOptions = computed(() => {
	return Array.from({ length: pagesNo.value }, (_, index) => index + 1);
})
const tabs = [
				{ name: "All Orders", prop: null, value: null },
				{ name: "Unfulfilled", prop: "unfulfilled", value: 0 },
				{ name: "Unpaid", prop: "unpaid", value: 0 },
				{ name: "Open", prop: "open", value: 1 },
				{ name: "closed", prop: "closed", value: 2 },
			]
const tab = ref("")
function choose(x) {emits("changePage", x);}
function choose2(x) {emits("changePage", "createorder");}

function orderDets(order){
	orderStore.orderDetail = order
	choose("Order details")
}
function sort(x, y) {
			var itm = items1.value;
			items1.value = itm.filter((item) => {
				return item[x] == y;
			});
		}

async function filterOrderBy(){
	try{
		const api = vendorUseApi();
		let url = `vendor/orders/?${tab.value.prop}=true&page=${selectedPage.value}`
		if (tab.value.name === "All Orders"){
			url = `vendor/orders/?page=${selectedPage.value}`
		}

		const response = await api({
			url : url,
			method: 'GET'
		});
		pagesNo.value = response.data.meta.last_page
		from.value = response.data.meta.from
		toPage.value = response.data.meta.to
		currentPage.value = response.data.meta.current_page
		return response.data.data
	}catch(error){
		console.error(error);
	}
}
async function fetchFilteredOrders(){
	try{
		filteredOrderData.value = await filterOrderBy();
	}catch(error){
		console.error(error);
	}
}
onBeforeMount(async () => {
	await fetchFilteredOrders();
});
watch(() => tab.value, () => {
	fetchFilteredOrders();
});
watch(() => selectedPage.value, () => {
	fetchFilteredOrders();
});
</script>
