<template>
	<div class="mx-6 pa-0 my-6 cardStyle d-none d-md-block">
		<v-table>
			<thead>
				<tr class="bg-grey-lighten-3">
					<th class="font-weight-bold"></th>
					<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">
						Order ID
					</th>
					<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">Date</th>
					<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">Items</th>
					<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">
						Total Amount
					</th>
					<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">Status</th>
					<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr style="width: 100%; height: 104px">
					<td>
						<v-btn size="40" rounded="xl" flat style="border: 1px solid #cecece" @click="$emit('takeback')" class="ml-" icon="mdi mdi-chevron-up">
						</v-btn>
					</td>

					<td style="color: #000; font-size: 14px; font-weight: 500" class="text- px-1">
						<span> 001798 </span>
					</td>

					<td style="color: #000; font-size: 14px; font-weight: 500" class="px-1">
						<span> September 9, 2022 </span>
					</td>
					<td style="color: #000; font-size: 14px; font-weight: 500" class="px-1">
						<span> 7 </span>
					</td>
					<td style="color: #000; font-size: 14px; font-weight: 500" class="px-1">
						<span> € 5,829.00 </span>
					</td>
					<td style="font-size: 14px" class="text-grey-darken-1 px-1">
						<v-chip v-if="dataselect.status == 4" size="small" rounded="lg" color="blue">
							<span style="font-size: 12px !important; font-weight: 600; line-height: 20px"> Shipped </span>
						</v-chip>
						<v-chip v-if="dataselect.status == 3" size="small" rounded="lg" color="green">
							<span style="font-size: 12px !important; font-weight: 600; line-height: 20px"> Delivered </span>
						</v-chip>

						<v-chip v-if="dataselect.status == 1" size="small" rounded="lg" color="#906A20">
							<span style="font-size: 12px !important; font-weight: 600; line-height: 20px"> Awaiting Shipment </span>
						</v-chip>
						<v-chip v-if="dataselect.status == 2" size="small" rounded="lg" color="#C20052">
							<span style="font-size: 12px !important; font-weight: 600; line-height: 20px"> Cancelled </span>
						</v-chip>
					</td>
					<td class="px-1">
						<v-btn size="40" flat style="border: 1px solid #cecece" @click="$emit('takeback')" class="ml-" icon="mdi mdi-dots-vertical"></v-btn>
					</td>
				</tr>
			</tbody>
		</v-table>
	</div>
	<div class="mx-6 pa-6 pb-2 mb-6 cardStyle d-none d-md-block">
		<div style="width: 100%" class=" ">
			<v-expand-transition>
				<v-card rounded="0" color="" class="pb-4" flat v-if="true" style="width: 100%">
					<v-row class="py-4">
						<v-col>
							<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">Shipping Address</p>
							<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
								Mrs Smith 71 Cherry Court Southampton SO53 5PD
							</p>
						</v-col>
						<v-col>
							<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">Billing Address</p>
							<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal">Same as shipping address</p>
						</v-col>
						<v-col>
							<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">Shipping Method</p>
							<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal">Express delivery (DHL Express)</p>
						</v-col>
						<v-col>
							<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">Payment Method</p>
							<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal">VISA xxxx 5642</p>
						</v-col>
						<v-col>
							<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">Tracking Number</p>
							<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal" class="d-flex align-center">
								ID25725728RS <v-icon size="x-small" color="green" class="ml-2" icon="mdi mdi-content-copy"></v-icon>
							</p>
						</v-col>
						<v-col>
							<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">Order type</p>
							<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">In-store purchase</p>
						</v-col>
					</v-row>
					<v-row class="pa-4" style="border-top-width: 300px; border-top: 1px dashed #90beaa">
						<v-col style="position: relative">
							<v-icon style="top: -28px; left: 2%; position: absolute" color="#90BEAA" icon="mdi mdi-circle"></v-icon>

							<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">Processed</p>
							<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">May 14</p>
						</v-col>
						<v-col style="position: relative">
							<v-icon style="top: -28px; left: 2%; position: absolute" color="#90BEAA" icon="mdi mdi-circle"></v-icon>
							<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">Shipped</p>
							<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal">May 16</p>
						</v-col>
						<v-col style="position: relative">
							<v-icon style="top: -28px; left: 2%; position: absolute" color="#90BEAA" icon="mdi mdi-circle"></v-icon>
							<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">In-transit</p>
							<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal" class="d-flex align-center">
								May 24
							</p>
						</v-col>
						<v-col style="position: relative">
							<v-icon style="top: -28px; left: 2%; position: absolute" color="green" icon="mdi mdi-check-circle"></v-icon>
							<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">Delivery type</p>
							<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">Umoja Shipping</p>
						</v-col>
					</v-row>
				</v-card>
			</v-expand-transition>
		</div>
	</div>
	<div class="mx-6 pa-0 mb-6 cardStyle d-none d-md-block">
		<v-table>
			<thead>
				<tr class="bg-grey-lighten-3">
					<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-4">Product</th>
					<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">
						Quantity
					</th>
					<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">Price</th>
					<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">Total</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="n in 3" style="width: 100%; height: 128px">
					<td style="font-size: 14px; height: " class="px-1 pl-6">
						<div class="d-flex align-center">
							<v-avatar rounded="lg" color="grey-lighten-2" class="pa-1 mr-4 ml-1" size="68"
								><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"></v-img
							></v-avatar>
							<div>
								<p
									class=""
									style="color: #1273eb; font-size: 14px; font-weight: 600; line-height: 20px; /* 142.857% */ text-decoration-line: underline"
								>
									Multicolored Ankara Material from Ghana
								</p>
								<p style="font-weight: 400; font-size: 14px; line-height: 18px; color: #969696">Small</p>
								<p style="font-weight: 400; font-size: 14px; line-height: 18px; color: #969696">SKU: 5000</p>
							</div>
						</div>
					</td>
					<td style="font-size: 14px" class="text-grey-darken-1 px-1">
						<v-chip rounded="lg" color="blue">
							<span style="color: var(--carbon-4, #969696); font-size: 14px !important; font-weight: 600; line-height: 20px" class="text-black">
								1
							</span>
						</v-chip>
					</td>
					<td style="color: #969696; font-size: 14px; font-weight: 500" class="px-1">
						<span> € 5,829.00 </span>
					</td>
					<td style="color: #000; font-size: 14px; font-weight: 500" class="px-1">
						<span> € 5,829.00 </span>
					</td>
				</tr>
			</tbody>
		</v-table>
	</div>
	<div class="mx-6 pa-0 mb-6 cardStyle d-none d-md-block">
		<v-row>
			<v-col cols="6">
				<div class="pa-4 w-100" style="max-width: 334px">
					<div v-for="n in summary" :key="n.title" class="d-flex py-1 justify-space-between">
						<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 500">{{ n.title }}</p>
						<p style="color: var(--carbon-4, #333); font-size: 16px; font-weight: 600">{{ n.value }}</p>
					</div>
				</div>
			</v-col>
			<v-col cols="6" class="d-flex align-end justify-end">
				<div class="pa-4 w-100" style="max-width: 334px">
					<div class="d-flex py-1 justify-space-between">
						<p style="color: var(--carbon-3, #969696); font-size: 20px; font-weight: 500">Grand Total</p>
						<p style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 500">€ 5,829.00</p>
					</div>
				</div>
			</v-col>
		</v-row>
	</div>

	<!-- For mobile View -->
	<div class="mb-6 d-block d-md-none">
		<v-sheet style="border: 1px solid #ededed; border-radius: 10px">
			<div class="d-flex justify-space-between align-center" style="padding: 30px 20px; border-bottom: 1px solid #ededed">
				<div class="d-flex">
					<v-avatar color="#EDF0FC" size="50" class="mr-2">
						<!-- <v-icon color="#1273EB" size="20" icon="fas fa-box"></v-icon> -->
						<v-img width="20" height="20" src="https://res.cloudinary.com/payhospi/image/upload/v1716455424/umoja/Vector_ds0yoy.svg" />
					</v-avatar>
					<div>
						<span class="d-flex align-center">
							<span style="font-size: 20px; font-weight: 600">001799/10</span>
							<v-img width="24" height="24" class="ml-2" src="https://res.cloudinary.com/payhospi/image/upload/v1716456639/umoja/copy-icon.svg" />
						</span>

						<span style="font-size: 12px; letter-spacing: 3%; color: #969696">ORDER DETAILS</span>
					</div>
				</div>
				<v-btn size="40" rounded="xl" flat style="border: 1px solid #cecece" @click="$emit('takeback')" class="ml-" icon="mdi mdi-chevron-down">
				</v-btn>
			</div>
			<div style="padding: 30px 20px; border-bottom: 1px solid #ededed">
				<v-row>
					<v-col>
						<h4 class="mb-2" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">CREATED AT</h4>
						<span style="font-size: 14px; letter-spacing: -3%; font-weight: 600; color: #333">14th May, 2023</span>
					</v-col>
					<v-col>
						<h4 class="mb-2" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">STATUS</h4>
						<v-chip color="primary" size="small" rounded="sm"> Shipped </v-chip>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<h4 class="mb-2" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">ITEMS PURCHASED</h4>
						<span style="font-size: 14px; letter-spacing: -3%; font-weight: 600; color: #333">Three (3)</span>
					</v-col>
					<v-col>
						<h4 class="mb-2" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">TOTAL AMOUNT</h4>
						<span style="font-size: 14px; letter-spacing: -3%; font-weight: 600; color: #333"> € 5,829.00 </span>
					</v-col>
				</v-row>
			</div>
			<div style="padding: 30px 20px; border-bottom: 1px solid #ededed">
				<h4 class="mb-2" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">SHIPPING ADDRESS</h4>
				<p class="mb-2" style="font-size: 14px; letter-spacing: -4%; font-weight: 500; color: #333">
					Mrs Smith 71 Cherry Court Southampton SO53 5PD, USA
				</p>
				<span style="font-size: 14px; letter-spacing: -4%; font-weight: 500; color: #333"> (212) 445-7622</span>
			</div>
			<div style="padding: 30px 20px; border-bottom: 1px solid #ededed">
				<h4 class="mb-2" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">BILLING ADDRESS</h4>
				<span style="font-size: 14px; letter-spacing: -3%; font-weight: 500; color: #333"> Same as shipping address</span>
			</div>
			<div style="padding: 30px 20px; border-bottom: 1px solid #ededed">
				<h4 class="mb-2" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">SHIPPING METHOD</h4>
				<span class="d-flex justify-space-between align-center">
					<span style="font-size: 14px; letter-spacing: -4%; font-weight: 500; color: #333">Express delivery (DHL Express)</span>
					<div>
						<v-img width="40" height="40" src="https://res.cloudinary.com/payhospi/image/upload/v1716473804/umoja/DHL_Logo_apivwt.svg" />
					</div>
				</span>
			</div>
			<div style="padding: 30px 20px; border-bottom: 1px solid #ededed">
				<h4 class="mb-2" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">PAYMENT METHOD</h4>
				<span class="d-flex justify-space-between align-center">
					<span style="font-size: 14px; letter-spacing: -4%; font-weight: 500; color: #333">VISA xxxx 5642</span>
					<div>
						<v-img width="53" height="29" src="https://res.cloudinary.com/payhospi/image/upload/v1716474298/umoja/visa-logo.svg" />
					</div>
				</span>
			</div>
			<div style="padding: 30px 20px; border-bottom: 1px solid #ededed">
				<h4 class="mb-2" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">TRACKING NUMBER</h4>
				<span style="font-size: 14px; letter-spacing: -3%; font-weight: 500; color: #333; text-decoration: underline">ID25725728RS</span>
			</div>
			<div style="padding: 30px 20px; border-bottom: 1px solid #ededed">
				<h4 class="mb-2" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">PRODUCT PURCHASE</h4>
				<span style="font-size: 14px; letter-spacing: -3%; font-weight: 500; color: #333">Online-store purchase</span>
			</div>
			<div style="padding: 30px 20px; border-bottom: 1px solid #ededed">
				<h4 class="mb-4" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">TIMELINE</h4>

				<v-timeline density="compact" side="end" truncate-line="start">
					<v-timeline-item class="mb-4" dot-color="#00966D" icon="mdi mdi-check" icon-color="#fff" size="small" fill-dot>
						<div class="d-flex justify-space-between flex-grow-1">
							<div>
								<p class="timeline-title">Processed</p>
								<p class="timeline-date">May 14th, 2023</p>
							</div>
							<div class="flex-shrink-0 timeline-time">1:00 AM</div>
						</div>
					</v-timeline-item>

					<v-timeline-item class="mb-4" dot-color="#00966D" icon="mdi mdi-check" icon-color="#fff" size="small" fill-dot>
						<div class="d-flex justify-space-between flex-grow-1">
							<div>
								<p class="timeline-title">Shipped</p>
								<p class="timeline-date">May 16th, 2023</p>
							</div>
							<div class="flex-shrink-0 timeline-time">14:35 PM</div>
						</div>
					</v-timeline-item>

					<v-timeline-item class="mb-4" dot-color="grey" size="small">
						<div class="d-flex justify-space-between flex-grow-1">
							<div>
								<p class="timeline-title">In transit</p>
								<p class="timeline-date">Pending...</p>
							</div>
							<div class="flex-shrink-0 timeline-time">...</div>
						</div>
					</v-timeline-item>

					<v-timeline-item class="mb-4" dot-color="grey" size="small">
						<div class="d-flex justify-space-between flex-grow-1">
							<div>
								<p class="timeline-title">Delivered</p>
								<p class="timeline-date">Pending...</p>
							</div>
							<div class="flex-shrink-0 timeline-time">...</div>
						</div>
					</v-timeline-item>
				</v-timeline>
			</div>
			<div style="padding: 30px 20px; border-bottom: 1px solid #ededed">
				<h4 class="mb-4" style="font-size: 10px; letter-spacing: 3%; font-weight: 400; color: #969696">ITEMS</h4>
				<div class="d-flex align-center justify-space-between">
					<div class="d-flex align-center" style="width: 271px">
						<v-avatar rounded="lg" color="grey-lighten-2" class="pa-1 mr-2" size="68"
							><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"></v-img
						></v-avatar>
						<div>
							<p
								class=""
								style="color: #1273eb; font-size: 13px; font-weight: 600; line-height: 20px; /* 142.857% */ text-decoration-line: underline"
							>
								Multicolored Ankara Material from Ghana
							</p>
							<p style="font-size: 12px; font-weight: 500; color: #969696">
								<span class="mr-2">x2</span>
								<span class="mr-2">Size: Small</span>
								<span>SKU: 5000</span>
							</p>
						</div>
					</div>
					<div style="color: #1e1e1e; font-size: 14px; font-weight: 600; line-height: 20px">
						<span> € 5,829.00 </span>
					</div>
				</div>
			</div>

			<v-row dense style="padding: 30px 20px">
				<v-col cols="6">
					<v-btn rounded="xl" block style="border: 1px solid #969696" variant="outlined" size="large" class="menubar text-grey-darken-3">
						Cancel Order
					</v-btn>
				</v-col>
				<v-col cols="6">
					<v-btn rounded="xl" block color="green" flat size="large" class="menubar text-grey-darken-3"> Track Order </v-btn>
				</v-col>
			</v-row>
		</v-sheet>
	</div>
</template>
<style>
.v-timeline--vertical.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__body {
	justify-self: auto;
}
.timeline-title {
	color: #333;
	font-size: 14;
	font-weight: 500;
}
.timeline-date {
	color: #969696;
	font-size: 14;
	font-weight: 500;
}
.timeline-time {
	font-size: 14px;
	color: #333;
	font-weight: 500;
	letter-spacing: -3%;
}
</style>

<script>
export default {
	name: "UserOrderDetails",
	props: ["dataselect"],
	data() {
		return {
			summary: [
				{
					title: "Subtotal:",
					value: "€ 5,829.00 ",
				},
				{
					title: "Discount:",
					value: "-€ 500 (20% OFF)",
				},
				{
					title: "Shipment cost:",
					value: "€ 22.50",
				},
			],
			selected: "",
			items1: [
				{
					sn: "#23942",
					name: "Leather crop top & pants......",
					date: "17 May",
					total: "€2,349‎",
					country: "🇺🇸 United States",
					img: "https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png",
					city: "New York City",
					added_cat: "Added Manually",
					date: "May 29, 2023",
					customer: "Okoli Bonaventure",
					delivery: "€ 24.08",
					payment_status: 1,
					status: 4,
					items_no: 7,
					delivery_method: "Umoja Delivery",
				},
			],
		};
	},
};
</script>
