<template>
	<userHeader />
	<div style="min-height: 120vh; width: 100%">
		<v-img
			eager
			v-once
			height="calc(640px)"
			style="position: relative; min-height: 500px"
			width="100%"
			cover
			class="d-flex bg-grey align-center"
			src="https://res.cloudinary.com/payhospi/image/upload/v1684653737/Rectangle_448_1_bur9sb.png"
		>
			<v-container style="width: 100%" class="">
				<div>
					<v-row class="d-flex pa-4 px-6 justify-space-between align-center">
						<v-col cols="12" lg="7">
							<h1
								style="font-style: normal; font-weight: 500; font-size: 96px; line-height: 101px; letter-spacing: 0.03em"
								class="mb-0 text-white font-weight-black"
							>
								The Agojie Carved Mask
							</h1>
							<div class="d-flex mt-4">
								<v-btn
									width="250px"
									size="large"
									flat
									class="px-6 mr-3 d-flex align-center text-white"
									style="text-transform: none !important"
									color="rgba(0, 0, 0, 0.5)"
								>
									View product details
									<v-icon icon="mdi mdi-arrow-right" class="ml-4" size="21"></v-icon>
								</v-btn>

								<v-btn width="250px" class="" flat size="large" to="/vendor/profile" color="orange"><span> Place a Bid </span> </v-btn>
							</div>
						</v-col>
						<v-col cols="12" lg="4">
							<v-card
								style="
									background: rgba(0, 0, 0, 0.7);
									backdrop-filter: blur(25px);
									/* Note: backdrop-filter has minimal browser support */

									border-radius: 20px;
								"
								class="d-flex align-center mb-2 pa-4"
							>
								<v-avatar size="50" class="mr-4"
									><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684658586/Frame_481586_piaotu.png"></v-img
								></v-avatar>
								<p class="text-white">@nawi_the_skulptur_queen</p>
							</v-card>
							<v-card
								style="
									background: rgba(0, 0, 0, 0.7);
									backdrop-filter: blur(25px);
									/* Note: backdrop-filter has minimal browser support */

									border-radius: 20px;
								"
								class="pa-6"
							>
								<p class="text-white text-overline mb-2">auction ends in</p>

								<div class="d-flex align-center justify-space-between">
									<div style="" class="timerbox d-flex align-center justify-center bg-grey-lighten-3">
										<div>
											<p class="timernum">23</p>
											<p class="timerwords">hours</p>
										</div>
									</div>
									<p class="text-grey-lighten-3 mb-1 text-h3 mx-1" style="line-height: 1">:</p>
									<div style="" class="timerbox d-flex align-center justify-center bg-grey-lighten-3">
										<div>
											<p class="timernum">58</p>
											<p class="timerwords">mins</p>
										</div>
									</div>
									<p class="text-grey-lighten-3 mb-1 text-h3 mx-1" style="line-height: 1">:</p>

									<div style="" class="timerbox d-flex align-center justify-center bg-grey-lighten-3">
										<div>
											<p class="timernum">44</p>
											<p class="timerwords">seconds</p>
										</div>
									</div>
								</div>
							</v-card>
						</v-col>
					</v-row>
				</div></v-container
			>
		</v-img>
		<v-card class="overflow-visible" flat tile color="#F7F7F7" min-height="100vh" width="100%">
			<v-container>
				<v-row>
					<v-col class="pt-0" cols="12" xs="12">
						<v-sheet color="transparent" class="pt-0">
							<div class="d-flex justify-space-between py-8">
								<p
									style="
										font-style: normal;
										font-weight: 800;
										font-size: 32px;
										line-height: 1;
										/* identical to box height */

										text-transform: uppercase;

										/* Carbon/4 */

										color: #333333;
									"
								>
									products
								</p>

								<v-btn size="small" class="font-weight-medium textClass px-4" rounded flat variant="text" color="#1273EB"
									>Explore the product market place <v-icon class="ml-2" icon="mdi mdi-arrow-right"></v-icon
								></v-btn>
							</div>
							<v-divider></v-divider>
							<div style="background-color: #f7f7f7" class="d-flex py-6 align-center justify-space-between">
								<v-chip-group
									variant="outlined"
									mandatory
									style="font-size: 14px; line-height: 17px; letter-spacing: 0.03em; text-transform: uppercase; color: #333333"
									class="text-uppercase"
									v-model="chip"
									selected-class=" chipselected"
								>
									<v-chip
										:class="chip == tag.name ? 'chipselected' : ''"
										style="font-size: 14px"
										size="large"
										class="pa-4"
										v-for="tag in tags"
										:key="tag.name"
									>
										{{ tag.name }} <v-icon size="21" v-if="tag.image" class="ml-2" :icon="'mdi mdi-' + tag.image"></v-icon>
									</v-chip>
								</v-chip-group>
								<div>
									<v-btn variant="tonal" color="#333333" class="textClass" flat>
										<v-icon size="20" icon="mdi mdi-filter-outline"></v-icon>Filter</v-btn
									>
								</div>
							</div>

							<v-row style="background-color: #f7f7f7" class="">
								<v-col cols="6" v-for="(n, i) in items" :key="i" lg="3" md="4">
									<v-card flat class="bg-white rounded-lg pa-4">
										<v-img class="rounded-lg bg-grey-lighten-2" cover width="100%" height="243px" :src="n.image"></v-img>
										<div style="position: relative; top: -12px; left: -7px"></div>
										<div style="height: 40px; position: relative; left: -12px" class="d-flex align-center">
											<v-avatar color="white" size="60" class="pa-3"
												><v-img
													class="bg-grey-lighten-2 rounded-xl"
													src="https://res.cloudinary.com/payhospi/image/upload/v1684658586/Frame_481586_piaotu.png"
												></v-img
											></v-avatar>
											<p style="font-weight: 800; font-size: 16px">The Golden Matrix</p>
										</div>
										<p class="textClass my-2">{{ filt(n.name) }}</p>
										<div class="d-flex align-center">
											<h1 class="itemCost">${{ n.price }}</h1>
											<v-chip v-if="n.oos == true" variant="default" size="small" class="ml-2 bg-green text-white rounded-lg"
												><v-icon size="12" class="mr-1" icon="mdi mdi-clock-outline"></v-icon> Place a Bid</v-chip
											>
										</div>
										<v-divider class="my-4"></v-divider>
										<div class="d-flex align-center justify-space-between">
											<div class="d-flex align-center">
												<v-btn flat size="x-small" color="transparent" class="rounded-xl">
													<v-avatar rounded="0" size="22">
														<v-img width="22" src="https://res.cloudinary.com/payhospi/image/upload/v1684611504/Vector_Stroke_hc1tqr.png"></v-img
													></v-avatar>
													<span style="font-weight: 400; font-size: 14px; line-height: 24px; letter-spacing: 0.03em" class="ml-1">
														{{ n.likes }}
													</span>
												</v-btn>
											</div>
											<v-btn flat size="x-small" color="transparent" class="rounded-xl">
												<v-avatar rounded="0" size="22">
													<v-img width="22" src="https://res.cloudinary.com/payhospi/image/upload/v1684665314/location_1_p9ic81.png"></v-img
												></v-avatar>
												<span style="font-weight: 400; font-size: 14px; line-height: 24px; letter-spacing: 0.03em" class="ml-1">
													{{ n.location }}
												</span>
											</v-btn>
										</div>
									</v-card>
								</v-col>
							</v-row>
							<p style="font-weight: 400; font-size: 14px; line-height: 17px; color: #cecece" class="font-weight-regular pt-12 mt-12 mb-4">
								©2022 Umoja. All Rights Reserved.
							</p>
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</div>
</template>
<script>
export default {
	data() {
		return {
			placescards: false,
			mods: 1,
			tab: null,
			chip: "POPULAR products",
			tags: [
				{
					name: "POPULAR products",
					image: "",
				},
				{
					name: "top selling products",
					image: "seal-variant",
				},
				{
					name: "products on promo",
					image: "sale-outline",
				},
				{
					name: "top auction",
					image: "trending-up",
				},
			],
			items: [
				{
					name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_dfuzam.png",
					price: "115.32",
					location: "Accra, Ghana",
					likes: "1.2k",
				},
				{
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_1_wnr1ld.png",
					price: "57.00",
					location: "Madagascar",
					likes: "456",
					oos: true,
				},

				{
					name: "Green and brown kente scarf material, Made in Lagos Nigeria..",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png",
					price: "57.00",
					location: "Mumbasa, Kenya",
					likes: "456",
				},
				{
					name: "Orange colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png",
					price: "79.00",
					location: "Lagos, Nigeria",
					likes: "66",
					oos: true,
				},
				{
					name: "Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png",
					price: "179.00",
					location: "Accra, Ghana",
					likes: "966",
				},
				{
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png",
					price: "57.00",
					location: "Mumbasa, Kenya",
					likes: "456",
				},
				{
					name: "Green and brown kente scarf material, Made in Lagos Nigeria..",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png",
					price: "57.00",
					location: "Accra, Ghana",
					likes: "456",
				},
				{
					name: "Orange colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png",
					price: "79.00",
					location: "Accra, Ghana",
					likes: "66",
					oos: true,
				},
				{
					name: "Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png",
					price: "179.00",
					location: "Madagascra",
					likes: "966",
				},
				{
					name: "Multi colored ankara scarf for women designed by Lumi Opeyemi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png",
					price: "57.00",
					location: "Accra, Ghana",
					likes: "456",
				},
			],
		};
	},
	computed: {
		buttons() {
			return [
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684591614/umoja/Vector_mgadhr.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/facebook_tup8rq.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/instagram_wogd5x.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/globe-americas_annyvh.png",
				},
			];
		},
		cols() {
			const { lg, sm, md } = this.$vuetify.display;
			return lg
				? [4, 6, 6, 6, 4, 8, 4, 3, 10, 2]
				: md
				? [4, 6, 6, 12, 6, 8, 4, 3, 10, 2]
				: sm
				? [6, 12, 12, 12, 12, 12, 12, 12, 12]
				: [6, 12, 12, 12, 12, 12, 12, 12, 12];
		},
	},
	methods: {
		filt(text) {
			var newText = text.length > 50 ? text.slice(0, 50) + "..." : text;
			return newText;
		},
	},
};
</script>
