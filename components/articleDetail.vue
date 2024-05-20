<template>
	<v-container>
		<v-sheet>
			<v-card flat>
				<div class="d-flex align-center">
					<p style="font-weight: 500; font-size: 14px; line-height: 50.2px; color: #333333">Fashion and Beauty</p>
					<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
						<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>April 17, 2023
					</p>
				</div>
				<h1 class="my-5" :style="{ fontSize: $vuetify.display.mobile ? '28px' : '40px' }" style="font-weight: 700; color: #444">
					Ankara Beauty Essentials: Elevate Your Style with Confidence
				</h1>
				<div class="d-flex align-center">
					<p class="mr-2" style="font-weight: 400; font-size: 14px; color: #969696">by</p>
					<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">Julian Onwusu</p>
					<v-icon class="ml-1" icon="mdi mdi-twitter" size="16" color="#55ACEE"></v-icon>
				</div>
				<v-img
					@click="dialog = true"
					:height="$vuetify.display.mobile ? 211 : 354"
					cover
					class="my-4"
					style="border-radius: 15px"
					src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_700/v1685884310/Rectangle_1906_lz3bof.png"
				></v-img>
				<h1 class="my-8" :style="{ fontSize: $vuetify.display.mobile ? '20px' : '24px' }" style="font-weight: 600; color: #333333">
					What does this mean for fintechs?
				</h1>
				<p class="mt-2" style="font-weight: 400; font-size: 18px; line-height: 28.8px; color: #333333">
					NIP commoditises digital money movement and levels the playing field for all operators. MTN’s MoMo PSB will have to rely on more than just
					person-to-person transfers to differentiate itself in the market, especially for already banked users.
				</p>
				<p class="mt-4" style="font-weight: 400; font-size: 18px; line-height: 28.8px; color: #333333">
					Beyond person-to-person transfers, commercial banks also dominate other segments of offline and digital banking. According to EfInA 2020
					agent banking survey, First Bank’s First Monie was the leading agency banking provider with 37% of all active agents in the country. Other
					bank players like Access Bank, Zenith Bank, and GTB were not far behind.
				</p>

				<p class="mt-4" style="font-weight: 400; font-size: 18px; line-height: 28.8px; color: #333333">
					The banks have also invested considerably in expanding their digital reach through mobile banking apps and USSD (usually in a delicate
					partnership with telcos). Today, millions of Nigerian customers and businesses are able to make payments, obtain cards, and apply for credit
					from their banks through these digital channels. In addition, non-bank financial institutions are also competing to provide financial
					services to Nigerians, and the investments have followed: in 2021, the fintech industry received $1.3B in Venture Capital (VC) funding,
					about 72% of total VC funding for the entire year. Players like OPay, Chipper Cash and Kuda Bank have in turn aggressively invested in
					marketing and subsidies to rapidly drive growth. This aggressive growth expands to offline services as well: in 2021, OPay had the second
					most registered agents, and non-banks made up 50% of the top 10 agency banking providers, according to the EfInA agent banking survey.
				</p>

				<p class="mt-4" style="font-weight: 400; font-size: 18px; line-height: 28.8px; color: #333333">
					The services provided by these disrupting fintechs vary widely, including some services that payment service banks are not allowed to offer:
					payments, savings, lending, insurance, remittance, investments, micro-pensions, and more. Beyond the breadth of services, users are also
					being targeted from different layers of distribution. Transsion Holdings is Nigeria’s largest provider of smart and feature phones, and is
					offering financial services to its base of customers through PalmPay, PalmCredit, and now InfinixWallet and TecnoWallet. MTN should also
					expect competition from other telcos as well. Airtel, which launched SmartCash PSB on the same day as MTN’s MoMo’s PSB, also has a sizable
					base of customers and experience with mobile money in its other African and Asian markets.
				</p>

				<p class="mt-4" style="font-weight: 400; font-size: 18px; line-height: 28.8px; color: #333333">
					Despite very strong advantages, MTN should expect a very different financial landscape compared to its other African markets.
				</p>

				<p class="mt-4" style="font-weight: 400; font-size: 18px; line-height: 28.8px; color: #333333">
					In the weeks before MTN commenced operations of MoMo PSB, there were mixed reactions across the financial ecosystem. Some fintech industry
					experts speculated that MTN will “crush competition from banks and fintechs” while others had tempered or unclear expectations. In reality,
					this new MoMo PSB entity will likely offer an interesting balance of opportunity for both competition and collaboration in the Nigerian
					financial industry. Unavoidably, MTN will attempt to drive aggressive competition. By offering customers an alternative store of value, MTN
					is looking to capture a sizable portion of existing payment revenues from fintechs. It’ll capture future growth by competing for unbanked
					users. Combining this with a near peerless distributive muscle and a deep well of resources, MTN is definitely shaping up to be a formidable
					provider of financial services in Nigeria. Zooming out though, this might eventually be a net positive for both consumers and competing
					operators. The overall value of any network increases if more nodes of interaction are added to the network. MTN’s strategy will likely
					target both already banked users but also the 49.5% of Nigerians that are financially excluded or informally served.
				</p>
			</v-card>
			<p class="mb-10 text-overline text-left text-md-center" style="font-weight: 600; margin-top: 120px; font-size: 16px; color: #333333">
				READ NEXT
			</p>

			<div
				v-for="n in [
					'https://res.cloudinary.com/payhospi/image/upload/v1684602011/Rectangle_459_2_mydchi.png',
					'https://res.cloudinary.com/payhospi/image/upload/v1685886477/Post_Image_wotvfs.png',
				]"
				:key="n"
				class="d-none d-md-block"
			>
				<!-- <v-divider class="my-5"></v-divider> -->
				<v-sheet class="d-flex align-center justify-space-between pa-10 my-5" style="background-color: #f8f8f8" flat>
					<div style="max-width: 458px">
						<div class="d-flex mb-4 align-center">
							<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">Fashion and Beauty</p>
							<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
								<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>April 17, 2023
							</p>
						</div>
						<h1 style="font-weight: 700; font-size: 24px; color: #333333">Unleash Your Style: Embrace Ankara Fashion and Beauty Accessories</h1>
						<p class="mt-2" style="font-weight: 500; font-size: 16px; line-height: 140%; color: #333333">
							Lorem ipsum dolor sit amet consectetur. Id et ornare tristique tempus egestas neque tincidunt scelerisque nulla et proin imperdiet
							vulputate massa. Nunc vitae volutpat.
						</p>

						<div>
							<div>
								<div class="d-flex pt-4 justify-space-between align-center">
									<div class="d-flex align-center">
										<p class="mr-2" style="font-weight: 400; font-size: 14px; color: #969696">by</p>
										<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">Julian Onwusu</p>
										<v-icon class="ml-1" icon="mdi mdi-twitter" size="16" color="#55ACEE"></v-icon>
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
					<div style="width: 349px; height: 227px">
						<v-img cover @click="dialog = true" class="mb-4" style="border-radius: 15px" :src="n"></v-img>
					</div>
				</v-sheet>
			</div>
			<div class="cardStyle d-block d-md-none">
				<div class="mb-4 d-flex">
					<v-avatar size="50">
						<v-img :src="smallImage"></v-img>
					</v-avatar>
					<div class="ml-3">
						<div class="d-flex align-center">
							<p style="color: #1e1e1e; font-size: 16px; font-weight: 600; line-height: 140%">Thatdesignpro</p>
							<v-icon class="mx-1" size="5" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
							<p style="color: #969696; font-size: 14px; font-weight: 400; line-height: 140%">27th Nov, 2023</p>
						</div>
						<div class="d-flex align-center mt-1">
							<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 500">Fashion and Beauty</p>
						</div>
					</div>
				</div>
				<v-card flat color="grey-lighten-4" :image="bigImage" width="100%" height="188px" class="d-flex align-center justify-center rounded-lg">
				</v-card>
				<p class="mt-4 mb-2" style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 700; line-height: 140%">
					Ankara Beauty Essentials: Elevate Your Style with Confidence
				</p>
				<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 400; line-height: 140%">
					Lorem ipsum dolor sit amet consectetur. Id et ornare tristique tempus egestas neque tincidunt lobortis. Integer arcu sit massa orci
					phasellus ipsum tincidunt et amet.
				</p>
				<v-btn size="small" color="#1273EB" class="px-0" variant="text" @click="$router.push('/articleDetail')">
					<span style="color: var(--deep-sky-blue-4, #1273eb); font-size: 14px; font-weight: 600"> Read more </span>
					<v-icon size="small" class="ml-4" icon="mdi mdi-arrow-right"></v-icon
				></v-btn>
			</div>
			<!-- <div class="px-12 text-center mt-16 mb-0">
				<v-btn class="mx-auto" size="x-large" @click="dialog = false" flat variant="outlined"
					>Back up <v-icon size="16" class="ml-2" icon="mdi mdi-arrow-up-right"></v-icon
				></v-btn>
			</div> -->
		</v-sheet>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			dialog: false,
			smallImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046634/rectangle-22429mhgdy878_iyunoo.png",
			bigImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046484/rectangle-29jhv646_o8o1ps.png",
		};
	},
};
</script>
