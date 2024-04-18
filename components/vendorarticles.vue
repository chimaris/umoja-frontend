<template>
	<div>
		<div style="background-color: " class="d-flex py-6 align-center justify-space-between">
			<p style="font-weight: 600; font-size: 12px; line-height: 15px; text-transform: uppercase; color: #969696">3/10 articles found</p>
			<div>
				<v-btn flat rounded="xl" size="x-small" color="transparent" style="font-size: 15px; color: #333333" icon="mdi mdi-view-grid"></v-btn>
				<v-btn
					flat
					rounded="xl"
					size="x-small"
					color="transparent"
					style="font-size: 15px; color: #333333"
					icon="mdi mdi-filter-variant"
					class="mx-2"
				></v-btn>
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" class="textClass text-grey-darken-3">
					<v-icon class="mr-2" size="20" icon="mdi mdi-tune-vertical"></v-icon>Filter
				</v-btn>
			</div>
		</div>

		<v-sheet>
			<v-card flat>
				<v-img
					@click="dialog = true"
					height="180"
					cover
					class="my-4"
					style="border-radius: 15px"
					src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_700/v1685884310/Rectangle_1906_lz3bof.png"
				></v-img>
				<h1 style="font-weight: 700; font-size: 24px; color: #333333">Ankara Beauty Essentials: Elevate Your Style with Confidence</h1>
				<p class="mt-2" style="font-weight: 500; font-size: 16px; line-height: 140%; color: #333333">
					Lorem ipsum dolor sit amet consectetur. Id et ornare tristique tempus egestas neque tincidunt lobortis. Integer arcu sit massa orci
					phasellus ipsum tincidunt et amet. Risus viverra cras scelerisque nulla et proin imperdiet vulputate massa. Nunc vitae volutpat.
				</p>

				<div>
					<div>
						<div class="d-flex pt-4 justify-space-between align-center">
							<div class="d-flex align-center">
								<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">Fashion and Beauty</p>
								<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
									<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>April 17, 2023
								</p>
							</div>
							<div class="d-flex align-center">
								<p class="mr-2" style="font-weight: 400; font-size: 14px; color: #969696">by</p>
								<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">Julian Onwusu</p>
								<v-icon class="ml-1" icon="mdi mdi-twitter" size="16" color="#55ACEE"></v-icon>
							</div>
						</div>
					</div>
					<div></div>
				</div>
			</v-card>

			<div
				v-for="n in [
					'https://res.cloudinary.com/payhospi/image/upload/v1684602011/Rectangle_459_2_mydchi.png',
					'https://res.cloudinary.com/payhospi/image/upload/v1685886477/Post_Image_wotvfs.png',
				]"
				:key="n"
				class=""
			>
				<v-divider class="my-12"></v-divider>
				<v-sheet class="d-flex align-center justify-space-between" flat>
					<div style="max-width: 413px" class="pr-8">
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
					<v-img cover @click="dialog = true" class="mb-4" max-width="349" height="180" style="border-radius: 15px" :src="n"></v-img>
				</v-sheet>
			</div>
		</v-sheet>
		<v-dialog v-model="dialog" transition="dialog-bottom-transition" width="auto">
			<v-card max-width="1000px" min-width="60vw" width="100%" class="rounded-lg">
				<div style="padding: 50px 90px">
					<v-btn @click="dialog = false" flat variant="outlined">
						<v-icon size="16" class="mr-1" icon="mdi mdi-arrow-left-top"></v-icon>Go Back</v-btn
					>
				</div>
				<v-divider></v-divider>
				<div style="padding: 50px 90px 90px">
					<v-card class="" flat>
						<div style="" class="pb-8">
							<div class="d-flex mb-4 align-center">
								<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">Fashion and Beauty</p>
								<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
									<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>April 17, 2023
								</p>
							</div>
							<h1 style="font-weight: 700; font-size: 40px; color: #333333">Ankara Beauty Essentials: Elevate Your Style with Confidence</h1>

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
						<v-img
							class="mb-4"
							style="border-radius: 15px"
							src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_700/v1685884310/Rectangle_1906_lz3bof.png"
						></v-img>

						<div>
							<h1 class="my-8">What does this mean for fintechs?</h1>
							<p>
								NIP commoditises digital money movement and levels the playing field for all operators. MTN’s MoMo PSB will have to rely on more than
								just person-to-person transfers to differentiate itself in the market, especially for already banked users.
							</p>
							<p>
								Beyond person-to-person transfers, commercial banks also dominate other segments of offline and digital banking. According to EfInA
								2020 agent banking survey, First Bank’s First Monie was the leading agency banking provider with 37% of all active agents in the
								country. Other bank players like Access Bank, Zenith Bank, and GTB were not far behind.
							</p>
							<h2 class="my-8">Competition and collaboration in the financial industry</h2>
							<p>
								The banks have also invested considerably in expanding their digital reach through mobile banking apps and USSD (usually in a delicate
								partnership with telcos). Today, millions of Nigerian customers and businesses are able to make payments, obtain cards, and apply for
								credit from their banks through these digital channels.
							</p>
							<p>
								In addition, non-bank financial institutions are also competing to provide financial services to Nigerians, and the investments have
								followed: in 2021, the fintech industry received $1.3B in Venture Capital (VC) funding, about 72% of total VC funding for the entire
								year. Players like OPay, Chipper Cash and Kuda Bank have in turn aggressively invested in marketing and subsidies to rapidly drive
								growth. This aggressive growth expands to offline services as well: in 2021, OPay had the second most registered agents, and non-banks
								made up 50% of the top 10 agency banking providers, according to the EfInA agent banking survey.
							</p>
							<h2 class="my-8">Services and competition in the fintech landscape</h2>
							<p>
								The services provided by these disrupting fintechs vary widely, including some services that payment service banks are not allowed to
								offer: payments, savings, lending, insurance, remittance, investments, micro-pensions, and more. Beyond the breadth of services, users
								are also being targeted from different layers of distribution. Transsion Holdings is Nigeria’s largest provider of smart and feature
								phones, and is offering financial services to its base of customers through PalmPay, PalmCredit, and now InfinixWallet and
								TecnoWallet.
							</p>
							<p>
								MTN should also expect competition from other telcos as well. Airtel, which launched SmartCash PSB on the same day as MTN’s MoMo’s
								PSB, also has a sizable base of customers and experience with mobile money in its other African and Asian markets.
							</p>
							<h2 class="my-8">Opportunities and net positive impact</h2>
							<p>Despite very strong advantages, MTN should expect a very different financial landscape compared to its other African markets.</p>
							<p>
								In the weeks before MTN commenced operations of MoMo PSB, there were mixed reactions across the financial ecosystem. Some fintech
								industry experts speculated that MTN will “crush competition from banks and fintechs” while others had tempered or unclear
								expectations. In reality, this new MoMo PSB entity will likely offer an interesting balance of opportunity for both competition and
								collaboration in the Nigerian financial industry.
							</p>
							<p>
								Unavoidably, MTN will attempt to drive aggressive competition. By offering customers an alternative store of value, MTN is looking to
								capture a sizable portion of existing payment revenues from fintechs. It’ll capture future growth by competing for unbanked users.
								Combining this with a near peerless distributive muscle and a deep well of resources, MTN is definitely shaping up to be a formidable
								provider of financial services in Nigeria.
							</p>
							<p>
								Zooming out though, this might eventually be a net positive for both consumers and competing operators. The overall value of any
								network increases if more nodes of interaction are added to the network. MTN’s strategy will likely target both already banked users
								but also the 49.5% of Nigerians that are financially excluded or informally served.
							</p>
						</div>
						<p class="py-12 text-overline text-center">read next</p>
						<div v-for="n in ['https://res.cloudinary.com/payhospi/image/upload/v1684602011/Rectangle_459_2_mydchi.png']" :key="n" class="">
							<v-sheet width="100%" class="d-flex align-center justify-space-between" flat>
								<div style="max-width: 413px" class="pr-8">
									<div class="d-flex mb-4 align-center">
										<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">Fashion and Beauty</p>
										<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
											<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>April 17, 2023
										</p>
									</div>
									<h1 style="font-weight: 700; font-size: 24px; color: #333333">Unleash Your Style: Embrace Ankara Fashion and Beauty Accessories</h1>
									<p class="mt-2" style="font-weight: 500; font-size: 16px; line-height: 140%; color: #333333">
										Lorem ipsum dolor sit amet consectetur. Id et ornare tristique tempus egestas neque tincidunt viverra cras scelerisque nulla et
										proin imperdiet vulputate massa. Nunc vitae volutpat.
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
								<v-img cover @click="dialog = true" class="mb-4" max-width="349" height="200" style="border-radius: 15px" :src="n"></v-img>
							</v-sheet>
						</div>
					</v-card>
					<div class="px-12 text-center py-12">
						<v-btn class="mx-auto" size="x-large" @click="dialog = false" flat variant="outlined"
							>Back up <v-icon size="16" class="ml-2" icon="mdi mdi-arrow-up-right"></v-icon
						></v-btn>
					</div>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dialog: false,
		};
	},
};
</script>
