<template>
	<div class="mx-6 pa-0 my-6 cardStyle">
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
	<div class="mx-6 pa-6 pb-2 mb-6 cardStyle">
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
	<div class="mx-6 pa-0 mb-6 cardStyle">
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
	<div class="mx-6 pa-0 mb-6 cardStyle">
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
</template>
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
