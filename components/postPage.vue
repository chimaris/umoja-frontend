<template>
	<div>
		<v-row class="p-0">
			<v-col cols="12" md="6" class="py-0 px-0 mx-0" order="12" order-md="1">
				<div class="image-container" :style="{ backgroundImage: 'url(' + imageUrl1 + ')', height: $vuetify.display.mobile ? '203px' : '' }">
					<div class="mx-auto text-center" :style="{ width: $vuetify.display.mobile ? '300px' : '418px' }">
						<p :style="{ fontSize: $vuetify.display.mobile ? '20px' : '24px' }" style="color: #fff; font-weight: 500" class="mb-4">
							Whats stopping you from posting about your business?
						</p>
						<!-- <div class="btn" style="height: 65px"> -->
						<v-btn rounded="xl" color="#FFFFFF" height="44" style="width: 225px; padding: 10px 20px">
							Make a post now
							<v-img width="24" height="24" src="https://res.cloudinary.com/payhospi/image/upload/v1714745945/umoja/star_outlined.svg"></v-img>
						</v-btn>
						<!-- </div> -->
					</div>
				</div>
			</v-col>
			<v-col cols="12" md="6" class="py-0 px-0 mx-0" order="1" order-md="12">
				<div class="image-container" :style="{ backgroundImage: 'url(' + imageUrl2 + ')' }"></div>
			</v-col>
		</v-row>
	</div>
	<v-container style="max-width: 1400px; width: 100%">
		<div class="align-center justify-space-between d-flex py-5 py-md-10">
			<div>
				<p :style="{ fontSize: $vuetify.display.mobile ? '20px' : '32px' }" style="font-weight: 600; line-height: 40.16px">Posts</p>
			</div>
			<v-menu location="bottom" offset="10px" max-height="500">
				<template v-slot:activator="{ props }">
					<div
						v-ripple
						v-bind="props"
						style="cursor: pointer; width: auto; height: 44px; border: 1px solid #cecece"
						:style="{ minWidth: $vuetify.display.mobile ? '' : '209px' }"
						size="large"
						color="white"
						variant="elevated"
						flat
						class="rounded-xl elevation-0 chipper px-2"
					>
						<div class="d-flex justify-space-between w-25 w-100 h-100 align-center">
							<div class="d-flex align-center">
								<v-avatar size="30.88" class="mr-md-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/rw-rwanda-medium_oui3ln.png"></v-img
								></v-avatar>
								<span class="mr-2 d-none d-md-block" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: -0.14px; font-weight: 500">
									{{ country }}
								</span>
							</div>
							<v-icon class="" icon="mdi mdi-chevron-down"></v-icon>
						</div>
					</div>
				</template>
				<v-list>
					<v-list-item v-for="(item, index) in africanCountries" :key="index" :value="index" @click="selectCountry(item)">
						<v-list-item-title>{{ item }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</div>
	</v-container>
	<v-container class="px-3" style="padding-top: 0px; max-width: 1400px">
		<v-row dense>
			<v-col cols="12" md="3" class="d-none d-md-block"> </v-col>
			<v-col cols="12" md="4">
				<v-row dense>
					<v-col v-for="(n, i) in items" :key="i" cols="12">
						<postComponent :index="i" :item="n" />
					</v-col>
				</v-row>
				<v-btn
					class="mt-10"
					block
					color="#333"
					size="large"
					variant="outlined"
					rounded="xl"
					style="border: 1px solid #cecece; font-size: 14px; font-weight: 600"
				>
					Load More
				</v-btn>
			</v-col>
			<v-col cols="12" md="1" class="d-none d-md-block"> </v-col>

			<v-col cols="12" md="4" class="d-none d-md-block">
				<v-sheet style="border: 1px solid #ededed; border-radius: 10px; padding: 20px">
					<h3 class="mb-5">Suggested for you</h3>
					<div class="align-center justify-space-between d-flex">
						<div class="mb-4 d-flex">
							<v-avatar size="45">
								<v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png"></v-img>
							</v-avatar>

							<div class="pl-2" style="min-width: 0">
								<div class="d-flex justify-space-between align-center">
									<div>
										<p style="font-size: 16px; font-weight: 600; line-height: 20.08px">Da Creative Zik</p>
										<p style="color: #969696; font-size: 14px; font-weight: 400; line-height: 17.57px">Fashion</p>
										<span style="color: #1273eb; font-size: 12px; font-weight: 500; line-height: 15.06px; text-decoration: underline"
											>View Business Profile</span
										>
									</div>
								</div>
							</div>
						</div>
						<v-btn class="mb-2" size="large" flat color="green" width="107" rounded="xl" style="max-width: 107px; max-height: 33px"
							><span style="color: #edf0ef; font-size: 14px; font-weight: 600">Follow </span></v-btn
						>
					</div>
					<v-btn
						class="mt-10"
						block
						color="#333"
						size="large"
						variant="outlined"
						rounded="xl"
						style="border: 1px solid #cecece; font-size: 14px; font-weight: 600"
					>
						Load More
					</v-btn>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			imageUrl1: "https://res.cloudinary.com/payhospi/image/upload/v1714742905/umoja/post-hero1.svg",
			imageUrl2: "https://res.cloudinary.com/payhospi/image/upload/v1714742949/umoja/post-hero2.png",
			country: "All of African",
			africanCountries: [
				"Algeria",
				"Angola",
				"Benin",
				"Botswana",
				"Burkina Faso",
				"Burundi",
				"Cabo Verde",
				"Cameroon",
				"Central African Republic",
				"Chad",
				"Comoros",
				"Democratic Republic of the Congo",
				"Republic of the Congo",
				"Cote d'Ivoire",
				"Djibouti",
				"Egypt",
				"Equatorial Guinea",
				"Eritrea",
				"Eswatini",
				"Ethiopia",
				"Gabon",
				"Gambia",
				"Ghana",
				"Guinea",
				"Guinea-Bissau",
				"Kenya",
				"Lesotho",
				"Liberia",
				"Libya",
				"Madagascar",
				"Malawi",
				"Mali",
				"Mauritania",
				"Mauritius",
				"Morocco",
				"Mozambique",
				"Namibia",
				"Niger",
				"Nigeria",
				"Rwanda",
				"Sao Tome and Principe",
				"Senegal",
				"Seychelles",
				"Sierra Leone",
				"Somalia",
				"South Africa",
				"South Sudan",
				"Sudan",
				"Tanzania",
				"Togo",
				"Tunisia",
				"Uganda",
				"Zambia",
				"Zimbabwe",
			],

			items: [
				{
					vendorName: "Nana Akufo-Addo",
					vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",
					vendorCategory: "Sculptor",
					name: "Koko Rachel Deco Set",

					image: "https://res.cloudinary.com/payhospi/image/upload/v1694074683/rectangle-53artpost_i1dui9.png",
					price: "115.32",

					location: "Accra, Ghana",
					likes: "1.2k",
					imgs: "2",
				},
				{
					vendorName: "Bonsu Thompson",
					vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
					vendorCategory: "Artist",

					name: "The Nawi Scarfs",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1694074680/rectangle-53artpt_qhdriv.png",
					price: "79.00",
					location: "Accra, Ghana",
					likes: "66",
					video: true,
					imgs: "4",
					oos: true,
				},
				{
					vendorName: "Dede Ayew",
					vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",
					vendorCategory: "Painter",

					name: "Koko Rachel Deco Set",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1694074679/rectangle-53artre4_acefqy.png",
					price: "115.32",
					location: "Accra, Ghana",
					imgs: "5",
					likes: "1.2k",
				},
				{
					vendorName: "Bonsu Thompson",
					vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
					vendorCategory: "Artist",
					name: "The Nawi Scarfs",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1694179608/rectangle-53mkiut_ae1wpt.png",
					price: "79.00",
					video: true,
					imgs: "4",
					location: "Accra, Ghana",
					likes: "66",
					oos: true,
				},
			],
		};
	},
};
</script>

<style>
.image-container {
	height: 325px;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
