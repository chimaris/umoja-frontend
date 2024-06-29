<template>
	<v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
		<div class="d-flex pb-4 pt-2 justify-space-between">
			<div class="d-flex align-center">
				<h1 style="font-weight: 700; font-size: 24px; line-height: 30px; letter-spacing: -0.02em">
					Order Details / <span style="color: #2c6e63"> #{{ orderDetails?.order_id }} </span>
				</h1>
				<v-chip rounded="lg" style="width: 108px" class="d-flex align-center justify-center ml-3 mr-2" color="#1273EB">
					<v-icon class="mr-2" size="16" icon="mdi mdi-check-circle"></v-icon>
					<span
						style="font-weight: 600; font-size: 12px; line-height: 15px; letter-spacing: -0.01em"
						:color="orderDetails?.payment_status == 'paid' ? 'blue' : 'orange'"
						>{{ orderDetails?.payment_status }}</span
					>
				</v-chip>
				<v-chip
					rounded="lg"
					style="width: 108px"
					class="d-flex align-center justify-center mx-2"
					:color="orderDetails?.fulfillment_status == 'fulfilled' ? 'green' : orderDetails?.fulfillment_status == 'unfulfilled' ? 'red' : 'orange'"
				>
					<span style="font-weight: 600; font-size: 12px; line-height: 15px; letter-spacing: -0.01em; color: #c5912c">{{
						orderDetails?.fulfillment_status
					}}</span>
				</v-chip>
			</div>
			<div class="d-flex align-center">
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="ml-4 text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-cash"></v-icon>
					Refund
				</v-btn>
				<!-- <v-btn @click="edit = !edit" flat color="green" size="large" class="ml-4 text-grey-darken-3">
					<v-icon class="mr-2" :icon="!edit ? 'mdi mdi-pencil' : 'mdi mdi-check-outline'"></v-icon>
					{{ !edit ? "Edit" : "Update Order" }}
				</v-btn> -->
			</div>
		</div>
		<div class="d-flex">
			<p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696">
				Order Date:
				<span style="color: #333333"> {{ getdateRegistered(orderDetails?.created_at) }} </span>
			</p>
			<p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696" class="ml-3">
				Maximum Delivery Period:
				<span style="color: #333333"> {{ getMaxDeliveryDate() }} Days </span>
			</p>
		</div>

		<v-row>
			<v-col cols="12" sm="8">
				<v-sheet class="cardStyle mt-8">
					<v-tabs v-model="tab" color="green">
						<v-tab v-for="item in ['Customer Details', 'Payments']" :key="item" :value="item" class="d-flex align-center">
							{{ item }}
						</v-tab>
					</v-tabs>
					<v-divider></v-divider>
					<v-window v-model="tab">
						<v-window-item value="Customer Details">
							<v-sheet class="d-flex mt-5">
								<v-avatar rounded="sm" class="mr-6" size="107"
									><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1713956914/umoja/profile_image_pd4dcv.png"></v-img
								></v-avatar>
								<div>
									<v-row>
										<v-col
											v-show="!edit || (edit && n.title !== 'Email' && n.title !== 'Phone')"
											v-for="n in customerDetails"
											:key="n.title"
											cols="12"
											style="font-weight: 500; font-size: 14px; line-height: 18px"
											sm="6"
											md="4"
										>
											<p style="color: #969696" class="text-capitalize">{{ n.title }}</p>
											<p style="color: #333333" class="mt-2">
												{{ n.value }}
											</p>
											<v-btn v-if="n.img" color="grey-lighten-2" flat class="py-4 px-3 mt-2 d-flex align-center justify-center rounded-lg">
												<v-img width="100" height="50" contain :src="n.img"></v-img
											></v-btn>
										</v-col>
										<v-col v-if="edit" cols="12" style="font-weight: 500; font-size: 14px; line-height: 18px" sm="6" md="8">
											<p style="color: #969696" class="text-capitalize">Order Status</p>

											<v-select
												density="compact"
												append-inner-icon="mdi mdi-chevron-down"
												color="grey-lighten-2"
												flat
												class="mt-2"
												size="x-small"
												block
												value="Processing"
												:items="['Processing', 'Shipped', 'In Transit', 'Delivered']"
											></v-select>
										</v-col>
									</v-row>
									<v-row>
										<v-col>
											<p style="color: #969696" class="text-capitalize">Shipping</p>
											<p style="color: #333333" class="mt-2">
												Michael Johnson Michael’s Corp LLC Rose Str. 120 New York, PH 10000 United States (US)
											</p>
										</v-col>
										<v-col>
											<p style="color: #969696" class="text-capitalize">Order Status</p>
											<v-select
												density="compact"
												color="grey-lighten-2"
												flat
												class="mt-2"
												size="x-small"
												block
												value="Processing"
												:items="['Processing', 'Shipped', 'In Transit', 'Delivered']"
												@change="handleSelectionChange"
											></v-select>
										</v-col>
										<v-col></v-col>
									</v-row>
								</div>
							</v-sheet>
						</v-window-item>
						<v-window-item value="Payments">
							<div>
								<div>
									<div class="d-flex justify-space-between align-center py-4">
										<p style="color: #969696; font-size: 14px; font-weight: 500">Amount paid by customer</p>
										<p style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px" class="d-flex align-center">
											<v-icon icon="mdi mdi-check-circle" size="small" color="teal" class="mr-2"></v-icon>{{ formattedPrice(orderDetails?.total) }}
										</p>
									</div>
									<v-divider></v-divider>
								</div>
								<div>
									<div class="d-flex justify-space-between align-center py-4">
										<p style="color: #969696; font-size: 14px; font-weight: 500">Receiving amount</p>
										<p style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px" class="d-flex align-center">
											{{ formattedPrice(orderDetails?.total) }}
										</p>
									</div>
									<v-divider></v-divider>
								</div>
								<div>
									<div class="d-flex justify-space-between align-center py-4">
										<p style="color: #969696; font-size: 14px; font-weight: 500">Companys %</p>
										<p style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px" class="d-flex align-center">
											{{ formattedPrice(orderDetails?.total * (20 / 100)) }}
										</p>
									</div>
									<v-divider></v-divider>
								</div>
								<div>
									<div class="d-flex justify-space-between align-center py-4">
										<p style="color: #969696; font-size: 14px; font-weight: 500">Payment status</p>
										<v-chip style="width: 81px" color="#C5912C" size="small" class="d-flex justify-center align-center" rounded="lg"
											><span style="color: var(--baklava-5, #c5912c); font-size: 12px; font-weight: 600; letter-spacing: -0.12px">{{
												orderDetails?.payment_status
											}}</span></v-chip
										>
									</div>
								</div>
							</div>
						</v-window-item>
					</v-window>
				</v-sheet>

				<div class="d-flex align-center mt-6 justify-space-between">
					<div>
						<h4 style="font-weight: 700; font-size: 20px; line-height: 25px" class="mb-2 d-flex align-center text-left">Ordered Items</h4>
					</div>

					<v-chip-group
						variant="outlined"
						mandatory
						style="font-size: 14px; line-height: 17px; font-weight: 600 !important; letter-spacing: 0.03em; text-transform: uppercase; color: #333333"
						class="text-capitalize"
						v-model="chip"
						selected-class=" chipselected2"
					>
						<v-chip
							:class="chip == tag ? 'chipselected2' : ''"
							style="border: 1px solid #ced2d6; font-size: 14px; font-weight: 600 !important"
							size="x-large"
							class="pa-4"
							v-for="tag in ['All', 'Fulfilled', 'Unfulfilled']"
							:key="tag"
						>
							{{ tag }}
						</v-chip>
					</v-chip-group>
				</div>
				<v-sheet style="overflow: hidden" class="cardStyle pa-0 mt-4 mb-8">
					<div class="rounded- mt-5">
						<v-table style="height: 328 !important; overflow: scroll">
							<thead>
								<tr class=" ">
									<th style="font-size: 14px" class="font-weight-medium">#</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Image</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Name</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Color</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Size</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Price/Unit</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Qty</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Discount</th>
									<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Total</th>
								</tr>
							</thead>
							<tbody>
								<tr
									@click="chosen = item.sn"
									style="height: 84px"
									:style="chosen == item.id ? 'background:#DFDFDF' : ''"
									v-for="(item, i) in orderDetails?.items"
									:key="item.sn"
								>
									<td style="font-size: 14px" class="text-grey-lighten-1 pl-4 px-1">{{ i + 1 }}.</td>
									<td style="font-size: 14px" class="px-1">
										<v-avatar color="grey-lighten-2" class="pa-1 ml-1" size="44" rounded="lg"
											><v-img :src="item.photo.split(',')[0]"></v-img
										></v-avatar>
									</td>
									<td style="" class="tiny2 px-1">{{ item.name }}</td>
									<td style="" class="font-weight-bold text-grey-darken-2 px-1">
										<div class="h-100 d-flex align-center">
											<v-icon v-for="color in item.colors" :key="color" icon="mdi mdi-circle" class="mx-1" :color="color" size="12"></v-icon>
										</div>
									</td>
									<td style="font-size: 14px; font-weight: 500" class="text-grey-darken-2 px-1">5</td>
									<td class="tiny2 px-1">{{ formattedPrice(item.price) }}</td>
									<td class="tiny2 px-1">{{ item.qty }}</td>
									<td style="font-size: 14px" class="text-grey-lighten-2 px-1">{{ item.discount ? item.discount : 0.0 }}</td>
									<td class="tiny2 pr-4 px-1">{{ formattedPrice(item.price * item.qty) }}</td>
								</tr>
							</tbody>
						</v-table>
					</div>
				</v-sheet>
				<div class=" ">
					<h4 style="font-weight: 700; font-size: 20px; line-height: 25px" class="mb-2 d-flex align-center text-left">Order Summary</h4>
				</div>
				<v-sheet style="overflow: hidden" class="cardStyle pa-0 mt-4">
					<div class="">
						<div v-for="n in summary" :key="n.title" class="px-4">
							<div style="height: 70px" class="d-flex align-center justify-space-between">
								<p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696">{{ n.title }}</p>
								<p style="font-weight: 600; font-size: 14px; line-height: 20px; color: #333333">{{ n.value }}</p>
							</div>
							<v-divider></v-divider>
						</div>
						<div class="bg-black pt-6">
							<div class="d-flex px-4 pb-6 text-white justify-space-between">
								<p style="font-weight: 500; font-size: 16px; line-height: 18px">Grand Total:</p>
								<p style="font-weight: 600; font-size: 20px; line-height: 20px">{{ formattedPrice(orderDetails?.total) }}</p>
							</div>
						</div>
					</div>
				</v-sheet>
			</v-col>
			<v-col cols="12" sm="4">
				<v-sheet class="cardStyle pt-0 mt-8">
					<div class="d-flex align-center py-4 justify-space-between">
						<p style="font-weight: 600; font-size: 20px; line-height: 20px; color: #333333">Inside Notes</p>
						<v-btn rounded="xl" v-bind="props" icon="mdi mdi-plus" style="border: 1px solid #e5e5e5" variant="outlined" class="text-grey-darken-3">
						</v-btn>
					</div>
					<v-divider class="mb-3"></v-divider>
					<v-card v-for="(n, i) in notes" :key="i" class="mb-8" flat>
						<div class="d-flex py-3 align-center">
							<v-avatar size="50" class="mr-2"><v-img :src="n.image"></v-img></v-avatar>

							<div>
								<p style="font-weight: 600; font-size: 14px; line-height: 20px; color: #333333">{{ n.name }}</p>
								<p class="mt-1" style="font-weight: 400; font-size: 14px; line-height: 20px; color: #969696">June 14th, 2023 01:35</p>
							</div>
						</div>
						<p style="font-weight: 400; font-size: 14px; line-height: 20px; color: #333333" class="pb-4">
							Lorem ipsum dolor sit amet consectetur. Lobortis sagittis porta tincidunt nibh eget lacus. Tristique tellus tempus dolor semper aliquam
							amet ipsum at.
						</p>
						<v-row>
							<v-col cols="6">
								<v-btn
									block
									style="font-weight: 400 !important; font-size: 14px !important; line-height: 20px !important; border: 1px solid #e5e5e5 !important"
									variant="outlined"
									class="text-grey-darken-3"
								>
									<span style="font-weight: 400 !important; font-size: 14px !important; line-height: 20px !important">Edit</span>
								</v-btn>
							</v-col>
							<v-col cols="6">
								<v-btn style="" color="red" variant="tonal" block>
									<span style="font-weight: 400 !important; font-size: 14px !important; line-height: 20px !important">Delete</span>
								</v-btn></v-col
							>
						</v-row>
					</v-card>
				</v-sheet>
			</v-col>
		</v-row>
		<!-- <v-dialog max-width="600px" v-model="shippingModal">
			<v-sheet width="100vw" max-width="744px" class="cardStyle px-0">
				<div class="px-6 d-flex justify-end">
					<v-icon @click="shippingModal = false" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
				</div>
				<v-divider class="my-3"></v-divider>

				<div class="px-6">
					<div class="image-container w-100">
						<h2 class="text-white theText">Provide delivery tracking number.</h2>
					</div>

					<p class="my-6">Kindly add the delivery tracking number for this order so the customer can keep track of their products</p>

					<div>
						<p class="inputLabel">Delivery Company Name</p>
						<v-select
							density="compact"
							color="grey-lighten-2"
							flat
							class="mt-2"
							size="x-small"
							block
							placeholder="Select Delivery Company"
							value=""
							:items="shippingOptions"
						></v-select>
					</div>
					<div>
						<p class="inputLabel">Tracking Number</p>
						<v-text-field
							placeholder="Enter tracking number"
							density="comfortable"
							persistent-hint
							hint="Please enter the correct delivery tracking number"
						></v-text-field>
					</div>

					<div class="mt-8">
						<v-btn size="large" color="green" flat block>
							<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Add Number </span>
						</v-btn>
					</div>
				</div>
			</v-sheet>
		</v-dialog> -->
	</v-container>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useOrderStore } from "~/stores/order";
import { getdateRegistered } from "~/utils/date";
import { formattedPrice } from "~/utils/price";
import { useRouter } from "vue-router";

const orderStore = useOrderStore();
const tab = ref("Customer Details");
const chip = ref("All");
const edit = ref(false);
const chosen = ref("");
const shippingModal = ref(true);

// const orderDetails = orderStore.orderDetail == [] ? [] : orderStore.orderDetail;
const orderDetails = computed(() => orderStore.orderDetail);

const maxDeliveryDate = getMaxDeliveryDate();
const router = useRouter();

const handleSelectionChange = (newValue) => {
	console.log(newValue);
	if (newValue === "Shipped") {
		dialog.value = true;
	}
};

onMounted(() => {
	if (!orderDetails.value || orderDetails.value == []) {
		router.push("/vendor/dashboard/Orders");
	}
});

function getMaxDeliveryDate() {
	const deliveryDuration = orderDetails.value?.delivery_duration;
	if (!deliveryDuration) {
		return "";
	}
	const parts = deliveryDuration?.split(" - ");
	const maxDeliveryDate = parts[1]?.split(" ")[0];
	return parseInt(maxDeliveryDate, 10);
}
const notes = [
	{
		name: "Benjamin Franklin O.",
		image: "https://res.cloudinary.com/payhospi/image/upload/v1687265847/Rectangle_1929_qzdwmq.png",
	},
	{
		name: "Nweke Franklin",
		image: "https://res.cloudinary.com/payhospi/image/upload/v1687265844/Rectangle_1929_1_x8i5ic.png",
	},
	{
		name: "Nweke Franklin",
		image: "https://res.cloudinary.com/payhospi/image/upload/v1687265844/Rectangle_1929_1_x8i5ic.png",
	},
];
const shippingOptions = ["Umoja Shipping", "DHL", "Fedex"];

const summary = computed(() => {
	return [
		{
			title: "Total Quantity",
			value: orderDetails.value?.items.length + " Item" + (orderDetails.value?.items.length > 1 ? "s" : ""),
		},
		{
			title: "Sub-Total",
			value: formattedPrice(orderDetails.value?.sub_total),
		},
		{
			title: "Shipping International",
			value: formattedPrice(orderDetails.value?.delivery_price),
		},
		{
			title: "Taxes",
			value: "€ 0.00",
		},
	];
});
const customerDetails = computed(() => {
	return [
		{
			title: "Name",
			value: orderDetails.value?.customer_fullname,
		},

		{
			title: "Billing",
			value: "Same as shipping address", //orderDetails.value?.customer_address + "," + orderDetails.value?.customer_region + "," + orderDetails.value?.customer_country,
		},

		{
			title: "Shipping Company",
			value: orderDetails.value?.delivery_method,
			img: "https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png",
		},
		// {
		// 	title: "Shipping",
		// 	value: orderDetails.value?.customer_address + "," + orderDetails.value?.customer_region + "," + orderDetails.value?.customer_country,
		// },
	];
});
</script>

<style scoped>
.image-container {
	width: 100%;
	height: 200px;
	object-fit: cover;
	background-size: cover;
	background-image: url("https://res.cloudinary.com/dd26v0ffw/image/upload/v1719569883/umoja/Rectangle_22443_nsqtgk.png");
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 20px;
}

.theText {
	color: #ededed;
	font-size: 40px;
	font-weight: 600;
	letter-spacing: -3%;
	line-height: 42.8px;
	width: 340px;
}
</style>
