<template>
	<v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
		<div class="d-flex align-center justify-space-between">
			<div>
				<p style="font-weight: 500; font-size: 24px" class="mb-2 d-flex align-center text-left">Reviews from your customers</p>
			</div>
			<div class="d-flex align-center">
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="text-grey-darken-3"> July 2022 - June 2023 </v-btn>
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="mx-2 text-grey-darken-3"> Filter </v-btn>
				<div class="" style="width: 100vw; max-width: 391px">
					<v-text-field
						style="border: 1px solid #e5e5e5; border-radius: 6px"
						variant="outlined"
						density="compact"
						hide-details
						prepend-inner-icon="mdi mdi-magnify"
						placeholder="Search"
					></v-text-field>
				</div>
			</div>
		</div>

		<div class="d-flex pt-8 pb-6">
			<v-row>
				<v-col cols="12" md="4">
					<v-card min-width="300px" class="mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex align-center">
							<v-avatar class="mr-2" size="34"
								><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1687445473/Frame_427320547_10_zxkguh.png"></v-img
							></v-avatar>
							<p style="font-weight: 500; font-size: 20px; line-height: 25px; color: #333333">Total Reviews</p>
							<div class="ml-2">
								<v-icon size="16" icon="mdi mdi-information"> </v-icon>
								<v-tooltip activator="parent" location="end" class="text-red">Total reviews by your customers</v-tooltip>
							</div>
						</div>
						<div class="d-flex align-center mt-4">
							<h1 class="bigpriceClass2">10.0k</h1>
							<div class="text-left">
								<v-chip style="font-weight: 600; font-size: 14px; line-height: 18px; color: #00966d" class="ml-3 text-green-lighten-2"
									><v-icon icon="mdi mdi-trending-up"></v-icon> 8%</v-chip
								>
							</div>
						</div>
						<p style="font-weight: 500; font-size: 14px; line-height: 18px; letter-spacing: -0.01em; color: #969696">
							Growth in reviews on this year
						</p>
					</v-card>
				</v-col>
				<v-col cols="12" md="4">
					<v-card min-width="300px" class="mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex align-center">
							<v-avatar class="mr-2" size="34"
								><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1687450127/Frame_427320547_9_zeqdtt.png"></v-img
							></v-avatar>
							<p style="font-weight: 500; font-size: 20px; line-height: 25px; color: #333333">Average Rating</p>
							<div class="ml-2">
								<v-icon size="16" icon="mdi mdi-information"> </v-icon>
								<v-tooltip activator="parent" location="end" class="text-red">Your average rating</v-tooltip>
							</div>
						</div>
						<div class="d-flex align-center mt-4">
							<h1 class="bigpriceClass2">4.0</h1>
							<div class="text-left reviews">
								<v-rating v-model="rating" color="grey-lighten-2" active-color="#F0B136" class="ml-4" size="x-small"></v-rating>
							</div>
						</div>
						<p style="font-weight: 500; font-size: 14px; line-height: 18px; letter-spacing: -0.01em; color: #969696">
							Growth in reviews on this year
						</p>
					</v-card>
				</v-col>
				<v-col cols="12" md="4">
					<v-card height="100%" min-width="300px" class="mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex align-center">
							<div class="d-flex align-center">
								<v-icon size="15" icon="mdi mdi-star" class="mr-1" color="#CECECE"></v-icon>
								<span style="color: #333; font-size: 16px !important ; font-weight: 600"> 5</span>
							</div>
							<v-progress-linear v-model="skill" style="width: 40%; left: 70px" color="#C20052" class="linearl" height="6" rounded>
							</v-progress-linear>
							<span style="color: #333; font-size: 16px; font-weight: 600" class="ml-4">1.0k</span>
						</div>
						<div class="d-flex align-center">
							<div class="d-flex align-center">
								<v-icon size="15" icon="mdi mdi-star" class="mr-1" color="#CECECE"></v-icon>
								<span style="color: #333; font-size: 16px; font-weight: 600"> 4</span>
							</div>
							<v-progress-linear v-model="skill" style="width: 90%; left: 8px; transform: none" color="#00966D" class="linearl" height="6" rounded>
							</v-progress-linear>
							<span style="color: #333; font-size: 16px; font-weight: 600" class="ml-4">2.0k</span>
						</div>
						<div class="d-flex align-center">
							<div class="d-flex align-center">
								<v-icon size="15" icon="mdi mdi-star" class="mr-1" color="#CECECE"></v-icon>
								<span style="color: #333; font-size: 16px; font-weight: 600"> 3</span>
							</div>
							<v-progress-linear v-model="skill" style="width: 20%; left: 70px" color="#F38218" class="linearl" height="6" rounded>
							</v-progress-linear>
							<span style="color: #333; font-size: 16px; font-weight: 600" class="ml-4">500</span>
						</div>
						<div class="d-flex align-center">
							<div class="d-flex align-center">
								<v-icon size="15" icon="mdi mdi-star" class="mr-1" color="#CECECE"></v-icon>
								<span style="color: #333; font-size: 16px; font-weight: 600"> 2</span>
							</div>
							<v-progress-linear v-model="skill" style="width: 11%; left: 70px" color="#1273EB" class="linearl" height="6" rounded>
							</v-progress-linear>
							<span style="color: #333; font-size: 16px; font-weight: 600" class="ml-4">200</span>
						</div>
						<div class="d-flex align-center">
							<div class="d-flex align-center">
								<v-icon size="15" icon="mdi mdi-star" class="mr-1" color="#CECECE"></v-icon>
								<span style="color: #333; font-size: 16px; font-weight: 600"> 1</span>
							</div>
							<v-progress-linear v-model="skill" style="width: 5%; left: 70px" color="#F8B735" class="linearl" height="6" rounded>
							</v-progress-linear>
							<span style="color: #333; font-size: 16px; font-weight: 600" class="ml-4">50</span>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</div>

		<div class="mt-5">
			<v-card height="100%" class="mx-auto coolTable pb-4 mb-12" width="100%" style="overflow: hidden" flat>
				<div class="">
					<v-table>
						<thead>
							<tr class="  ">
								<th style="font-size: 14px" class="font-weight-bold text-left">Product</th>
								<th style="font-size: 14px" class="text-left px-3 font-weight-bold">Reviewer</th>
								<th style="font-size: 14px" class="text-left px-3 font-weight-bold">Review</th>
								<th style="font-size: 14px" class="text-left px-3 font-weight-bold">Status</th>
								<th style="font-size: 14px" class="text-left px-3 font-weight-bold"></th>
							</tr>
						</thead>
						<tbody>
							<tr
								@click="chosen = item.sn"
								style="height: 100px; width: 100%"
								:style="chosen == item.sn ? 'background:#ececec' : ''"
								v-for="(item, i) in items"
								:key="item.sn"
							>
								<td style="position: relative; font-size: 14px; height: 100px; width: 270px">
									<div style="position: absolute; top: 24px; width: 270px">
										<v-menu offset="9px" open-on-hover location="top">
											<template v-slot:activator="{ props }">
												<div v-bind="props" class="px-1 d-flex pl-2">
													<v-avatar color="grey-lighten-4" class="rounded-lg pa-1 mr-3 ml-1" size="50"
														><v-img
															src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"
														></v-img
													></v-avatar>
													<div>
														<p class="" style="font-weight: 600; font-size: 16px !important; line-height: 20px; color: #333333">{{ item.name }}</p>
														<p style="font-weight: 400; font-size: 14px; line-height: 18px; color: #969696">Fashion and Style</p>
													</div>
												</div></template
											>
											<v-card max-width="310" class="pa-6 rounded-lg" color="#2C6E63">
												<v-row class="d-flex align-start">
													<v-avatar color="grey-lighten-4" class="pa-1" size="70" rounded="lg">
														<v-img
															src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"
														></v-img>
													</v-avatar>
													<v-col class="py-0">
														<p style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px">
															Multicolored Ankara Material made in the Suberbs of Africa
														</p>
														<p style="color: #cdd6d4; font-size: 12px; font-weight: 500; line-height: 20px">Fashion and Style</p>

														<p style="color: #edf0ef; font-size: 16px; font-weight: 600; line-height: 20px" class="mt-1">€ 235.00 per yard</p>
													</v-col>
												</v-row>
											</v-card>
										</v-menu>
									</div>
								</td>
								<td style="position: relative; font-size: 14px; height: 100px; width: 200px">
									<div style="position: absolute; top: 24px; width: 200px">
										<div class="px-1 d-flex align-center pl-0">
											<v-avatar color="grey-lighten-4" class="pa-1 mr-2" size="50"
												><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1687517181/Rectangle_1923_oguuzi.png"></v-img
											></v-avatar>
											<div>
												<p class="" style="font-weight: 500; font-size: 16px !important; line-height: 20px; color: #333333">Sarah Johnson</p>
												<p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696">🇺🇸 USA, New York City</p>
											</div>
										</div>
									</div>
								</td>

								<td style="max-width: 250px" class="text-grey-darken-1 pb-4">
									<div class="d-flex reviews2 pr-1 align-center mt-4 justify-space-between">
										<!-- <v-rating style="    height: 37px;
    display: flex;
    align-items: center;" class="ml-5" color="#F0B136" v-model="rating"></v-rating> -->
										<p style="font-weight: 600; font-size: 16px; line-height: 10px; color: #000000" class="d-flex mb-1 pb-0 pt-1 align-center">
											<v-rating
												readonly
												model-value="4"
												color="grey-lighten-1"
												active-color="#F0B136"
												class="rts"
												density="compact"
												size=""
											></v-rating
											><span style="margin-left: 3px; margin-top: 3px"></span>
										</p>
										<p style="color: #969696; font-size: 12px; font-weight: 500; letter-spacing: 0.6px">13/6/2017, 8:23 PM</p>
									</div>
									<p style="color: #333; font-size: 16px; font-weight: 600" class="mb-3">The product really giving if you ask me</p>
									<p style="color: #333; font-size: 16px; line-height: 140%" class="px-">
										Lorem ipsum dolor sit amet consectetur. Lobortis sagittis porta tincidunt nibh eget lacus. Tristique tellus tempus dolor semper
										aliquam amet ipsum at. Ultricies porttitor sceler... <span style="color: #1273eb; font-weight: 600"> Read More </span>
									</p>

									<v-btn
										v-if="i !== 1"
										variant="text"
										style="
											color: #333;
											font-size: 12px !important;
											font-weight: 700 !important;
											line-height: 140% !important;
											letter-spacing: 0.6px !important;
										"
										@click="dialog = true"
										class="text-overline mt-2 text-uppercase"
										>LEAVE A COMMENT</v-btn
									>
									<div class="py-4" v-else>
										<p style="color: #969696; font-size: 12px; font-weight: 600; letter-spacing: 0.6px; text-transform: uppercase" class="mb-2">
											Your Response
										</p>
										<p style="color: #333; font-size: 16px; line-height: 140%" class="px-">
											Lorem ipsum dolor sit amet consectetur. Lobortis sagittis porta tincidunt nibh eget lacus.
										</p>
										<div class="mt-2">
											<v-btn variant="text" class=""><span style="color: #333; font-size: 16px; font-weight: 600">Edit</span> </v-btn>
											<v-btn variant="text" color="red" class="ml-2"><span style="font-size: 16px; font-weight: 600">Delete</span> </v-btn>
										</div>
									</div>
								</td>
								<td style="position: relative; font-size: 14px; height: 100px; width: ">
									<div style="position: absolute; top: 24px; width: ">
										<v-chip
											style="width: 82px; font-size: 10px; font-weight: 500"
											class="rounded-lg d-flex justify-center align-center"
											size="small"
											color="#C5912C"
											variant="tonal"
										>
											Pending
										</v-chip>
									</div>
								</td>
								<td style="position: relative; font-size: 14px; height: ; width: ">
									<div style="position: absolute; top: 10px; right: 10px; width: ">
										<v-btn flat variant="text" icon="mdi mdi-dots-horizontal"> </v-btn>
									</div>
								</td>
							</tr>
						</tbody>
					</v-table>
				</div>
			</v-card>
		</div>
		<v-dialog absolute v-model="dialog" width="395">
			<v-card class="cardStyle py-2">
				<div class="d-flex mb-2 align-center justify-space-between">
					<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500">
						Replying to <span style="color: #1273eb">@sarahjohnson</span>
					</p>
					<v-btn @click="dialog = false" icon="mdi mdi-close" flat></v-btn>
				</div>
				<v-textarea persistent-counter :counter="200" class="reviewtextarea" variant="outlined" placeholder="Add a comment"> </v-textarea>
				<div class="d-flex my-2 align-center justify-space-between">
					<p style="font-size: 32px">🙂</p>
					<v-btn color="green" flat width="97" size="large">Send</v-btn>
				</div>
			</v-card>
		</v-dialog>

		<!-- If there is no reviews show this -->
		<div v-if="items1.length === 0" class="d-flex flex-column justify-center align-center" style="max-height: 100%; height: 80vh">
			<v-sheet class="d-flex flex-column justify-center align-center text-center" style="width: 450px">
				<v-img
					:width="300"
					cover
					src="https://res.cloudinary.com/payhospi/image/upload/v1713433043/umoja/review-empty-box.png"
					style="filter: grayscale(100%) brightness(100%)"
				></v-img>
				<h2 style="color: #333; font-size: 24px; font-weight: 700; line-height: 30px">All your reviews will show here</h2>
				<p style="color: #969696; font-size: 16px; font-weight: 500">Capture high-quality product reviews foryour store</p>
			</v-sheet>
		</div>
	</v-container>
</template>

<style>
.reviewtextarea .v-input__control {
	border-radius: 6px;
	border: 1px solid var(--carbon-2, #cecece) !important;
}
</style>
<script>
export default {
	data() {
		return {
			rating: 4,
			skill: 100,
			chosen: "",
			tab: "",
			dialog: false,
			tabs: [
				{ name: "All Orders", prop: null, value: null },
				{ name: "Unfulfilled", prop: "status", value: 0 },
				{ name: "Unpaid", prop: "payment_status", value: 0 },
				{ name: "Open", prop: "status", value: 1 },
				{ name: "closed", prop: "status", value: 2 },
			],
			items1: [
				{
					sn: "#23942",
					name: "Leather crop top & pants",
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
					status: 2,
					items_no: 7,
					delivery_method: "Umoja Delivery",
				},
				{
					sn: "#876567",
					name: "Leather crop top & pants",
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
					status: 2,
					items_no: 1,
					delivery_method: "Fedex Delivery",
				},
				{
					sn: "#3456456",
					name: "Leather crop top & pants",
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
					name: "Leather crop top & pants",
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
					name: "Leather crop top & pants",
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
			dashes: [
				{
					img: "https://res.cloudinary.com/payhospi/image/upload/v1686906413/Frame_427320547_6_u4cwdq.png",
					name: "Total Customers",
					tooltip: "Total customers in your shop",
					amount: "512,987",
					trend: "16",
					trending: true,
				},
				{
					img: "https://res.cloudinary.com/payhospi/image/upload/v1686906413/Frame_427320548_1_bvohqz.png",
					name: "Members",
					tooltip: "Total members in the last seven days",
					amount: "27,654",
					trend: "0.4",
					trending: false,
				},
				{
					img: "https://res.cloudinary.com/payhospi/image/upload/v1686906397/Frame_427320547_7_znnge2.png",
					name: "Active",
					tooltip: "Active customers in the last seven days",
					amount: "135,302",
					trend: "8",
					trending: true,
				},
			],
			items: [],
		};
	},
	mounted() {
		this.items = this.items1;
	},
	methods: {
		sort(x, y) {
			var itm = this.items1;
			this.items = itm.filter((item) => {
				return item[x] == y;
			});
		},
	},
};
</script>
