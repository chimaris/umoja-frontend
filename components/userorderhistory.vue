<template>
	<div>
		<div class="px-6 py-10">
			<p style="color: #000; font-size: 24px; font-weight: 600">Order History</p>
			<p style="color: var(--carbon-3, #969696); font-family: Faktum; font-size: 14px; font-style: normal; font-weight: 500">
				Here you can manage your order
			</p>
		</div>
		<div id="orderdet" class="d-flex px-6 pb-6 w-100 align-center">
			<v-text-field hide-details="" prepend-inner-icon="mdi mdi-magnify" placeholder="Search for Order ID or Product" density="compact">
			</v-text-field>
			<v-btn width="154" flat style="border: 1px solid var(--carbon-2, #cecece)" class="ml-3" rounded="xl">
				<span style="color: #333; font-size: 14px; font-weight: 600">
					<v-icon class="mr-1" icon="mdi mdi-tune-vertical"></v-icon>
					Filters
				</span>
			</v-btn>
		</div>
	</div>
	<v-window direction="vertical" v-model="viewswitch">
		<v-window-item value="1">
			<div class="mx-6 pa-0 mb-6 cardStyle d-none d-md-block">
				<v-table>
					<thead>
						<tr class="bg-grey-lighten-3">
							<th class="font-weight-bold"></th>
							<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">
								Order ID
							</th>
							<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">
								Date
							</th>
							<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">
								Items
							</th>
							<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">
								Total Amount
							</th>
							<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">
								Status
							</th>
							<th style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 600; line-height: 20px" class="font-weight-bold px-1">
								Action
							</th>
						</tr>
					</thead>
					<tbody v-for="(item, i) in items1" :key="i">
						<tr style="width: 100%; height: 104px">
							<td>
								<v-btn
									size="40"
									rounded="xl"
									flat
									style="border: 1px solid #cecece"
									@click="select(item.sn + '' + i, item)"
									class="ml-"
									icon="mdi mdi-chevron-down"
								>
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
								<v-chip v-if="item.status == 4" size="small" rounded="lg" color="blue">
									<span style="font-size: 12px !important; font-weight: 600; line-height: 20px"> Shipped </span>
								</v-chip>
								<v-chip v-if="item.status == 3" size="small" rounded="lg" color="green">
									<span style="font-size: 12px !important; font-weight: 600; line-height: 20px"> Delivered </span>
								</v-chip>
								<v-chip v-if="item.status == 1" size="small" rounded="lg" color="#906A20">
									<span style="font-size: 12px !important; font-weight: 600; line-height: 20px"> Awaiting Shipment </span>
								</v-chip>
								<v-chip v-if="item.status == 2" size="small" rounded="lg" color="#C20052">
									<span style="font-size: 12px !important; font-weight: 600; line-height: 20px"> Cancelled </span>
								</v-chip>
							</td>
							<td class="px-1">
								<v-btn
									size="40"
									flat
									style="border: 1px solid #cecece"
									@click="select(item.sn + '' + i, item)"
									class="ml-"
									icon="mdi mdi-dots-vertical"
								></v-btn>
							</td>
						</tr>
						<v-divider v-if="i + 1 < items1.length" style="position: absolute" inset=""></v-divider>
					</tbody>
				</v-table>
			</div>
			<div class="mb-6 d-block d-md-none" v-for="(item, i) in items1" :key="i">
				<v-sheet rounded>
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
						<v-btn
							size="40"
							rounded="xl"
							flat
							style="border: 1px solid #cecece"
							@click="select(item.sn + '' + i, item)"
							class="ml-"
							icon="mdi mdi-chevron-down"
						>
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
				<v-divider v-if="i + 1 < items1.length" style="position: absolute" inset=""></v-divider>
			</div>
		</v-window-item>
		<v-window-item value="2">
			<!-- <div  class="px-6 pb-6 pt-4">

          <v-btn size="40" rounded="xl" flat style="border: 1px solid #CECECE;" 
          class="ml-" ><v-icon size="16" icon="mdi mdi-arrow-left-top"></v-icon>
        </v-btn>
      </div> -->
			<userorderdetails :dataselect="dataselect" @takeback="viewswitch = '1'" />
		</v-window-item>
	</v-window>
</template>

<script>
export default {
	name: "userorderhistory",
	methods: {
		select(x, y) {
			this.dataselect = y;
			this.viewswitch = "2";
			this.$nextTick(() => {
				const element = document.getElementById("orderdet");
				element.scrollIntoView({ behavior: "smooth" });
			});
			if (this.selected == x) {
				this.selected = null;
				return;
			} else {
				this.selected = x;
			}
		},
	},
	data() {
		return {
			dataselect: {},
			viewswitch: "1",
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
				{
					sn: "#876567",
					name: "Leather crop top & pants......",
					added_cat: "Added Manually",
					date: "17 May",
					total: "€2,349‎",
					country: "🇺🇸 United States",
					img: "https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png",
					city: "New York City",
					added_cat: "Added Manually",
					date: "May 29, 2023",
					customer: "David",
					delivery: 0,
					payment_status: 0,
					status: 3,
					items_no: 1,
					delivery_method: "Fedex Delivery",
				},
				{
					sn: "#3456456",
					name: "Leather crop top & pants......",
					added_cat: "Added Manually",
					date: "17 May",
					total: "€2,349‎",
					country: "🇺🇸 United States",
					img: "https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png",
					city: "New York City",
					added_cat: "Added Manually",
					date: "May 29, 2023",
					customer: "Frank",
					delivery: "€ 24.08",
					payment_status: 1,
					status: 2,
					items_no: 4,
					delivery_method: "DHL Delivery",
				},
				{
					sn: "#65459",
					name: "Leather crop top & pants......",
					added_cat: "Added Manually",
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
					status: 1,
					items_no: 7,
					delivery_method: "Umoja Delivery",
				},
				{
					sn: "#098765",
					name: "Leather crop top & pants......",
					added_cat: "Added Manually",
					date: "17 May",
					total: "€2,349‎",
					country: "🇺🇸 United States",
					img: "https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png",
					city: "New York City",
					added_cat: "Added Manually",
					date: "May 29, 2023",
					customer: "Okoli Bonaventure",
					delivery: 0,
					payment_status: 1,
					status: 1,
					items_no: 7,
					delivery_method: "Umoja Delivery",
				},
			],
		};
	},
};
</script>
