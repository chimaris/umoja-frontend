<template>
	<div class="bg-black" style="position: relative; overflow: hidden">
		<v-card flat style="overflow: hidden; position: relative" color="black" class="cardo rounded-0" height="772" width="100%">
			<v-img
				cover
				eager
				style="z-index: -1; position: absolute; height: 772px; width: 100%"
				src="https://res.cloudinary.com/payhospi/image/upload/v1712605472/umoja/about-hero.png"
				class="bg-black rounded-0 img"
			/>

			<v-container style="max-width: 1200px; width: 100%; height: 772px; z-index: 99" class="d-flex align-center py-1">
				<div style="width: 536px">
					<div style="width: 695px" class="btn">
						<v-btn rounded="xl" color="#FAD096" height="44" style="width: 225px; padding: 12px 20px" flat
							><span style="color: var(--carbon-6, #946d1f); text-align: center; font-weight: 600; font-size: 14px"> About Us </span>
						</v-btn>
					</div>
					<p
						class="title my-6"
						style="color: #f8b735; font-size: 62px; width: 695px; font-weight: 600; line-height: 100%; /* 96px */ letter-spacing: -2.88px"
					>
						Experience the Essence of Africa with Umoja
					</p>
					<p class="my-6 sub" style="color: #fff; font-size: 24px; font-weight: 500">
						Welcome to Umoja Africa, your premier destination for authentic African products. Explore our curated selection and celebrate the rich
						cultural heritage of Africa.
					</p>
				</div>
			</v-container>
		</v-card>
	</div>
	<div width="100%" style="width: 100%">
		<v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" height="250" max-width="800" width="100%" rounded>
			<div>
				<v-btn color="#2C6E63" variant="outlined" bg-color="#EDF0EF" class="rounded-pill">Our Story</v-btn>

				<h2 style="font-size: 34px; font-weight: 600; line-height: 44px">We’re just getting started</h2>

				<p style="font-size: 20px; line-height: 30px; color: #475467">We are ready to start achieving remarkable results</p>
			</div>
		</v-sheet>
		<div class="" style="width: 95%; margin: auto; height: 450px">
			<v-row class="mb-6 h-100">
				<v-col cols="12" md="3" lg="3" class="h-100">
					<v-card class="h-100">
						<v-img
							lazy-src="https://res.cloudinary.com/payhospi/image/upload/v1712605539/umoja/ceo.png"
							src="https://res.cloudinary.com/payhospi/image/upload/v1712605539/umoja/ceo.png"
							class="align-end"
							gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
							cover
						>
							<v-card-title class="text-white">
								<h3 style="font-weight: 600; font-size: 20px; color: #ebebeb">David Obukome Oteri</h3>
								<span style="font-weight: 400; font-size: 14px; color: #ebebeb">CEO/founder Umoja GMBH</span>
							</v-card-title>
						</v-img>
					</v-card>
				</v-col>

				<v-col cols="12" md="9" lg="9">
					<v-sheet class="px-5" style="line-height: 32px; color: #333333; font-size: 18px">
						<p>
							Africa has one of the largest numbers of entrepreneurs globally with over 50 million MSME’s but despite these developments,
							entrepreneurship in Africa remains challenging and complex. There are several barriers that entrepreneurs must overcome, including lack
							of access to the global markets, lack of supportive business infrastructure and resources.
						</p>

						<p class="my-5">
							This motivated me to establish Umoja GmbH to empower micro, small & mid-sized enterprises (MSMEs) with ties to Africa and create the
							exposure, knowledge, resources, and support to enable them to showcase their creativity, potential, Culture and scale their business
							globally
						</p>
						<p class="my-5">
							Each encounter with a local artisan, each conversation with a vendor, and each transaction completed on our platform is a testament to
							our commitment to celebrating Africa's diversity. But our story is not just about commerce; it's about connection. It's about bridging
							the gap between continents and cultures, and fostering a deeper understanding and appreciation for the tapestry of traditions that make
							Africa unique.
						</p>

						<p>
							As we continue on our journey, we invite you to join us in celebrating Africa's rich heritage – one product, one story, and one
							connection at a time.
						</p>
					</v-sheet>
				</v-col>
			</v-row>
		</div>
	</div>
	<div width="100%" style="width: 100%; margin: 100px 0">
		<v-sheet class="d-flex align-center justify-center text-center mx-auto px-4" height="250" max-width="800" width="100%" rounded>
			<div>
				<h2 style="font-size: 34px; font-weight: 600; line-height: 44px">We’re a mission driven company</h2>

				<p style="font-size: 20px; line-height: 30px; color: #475467">
					Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
				</p>
			</div>
		</v-sheet>
		<div class="" style="width: 100%; margin: auto">
			<v-row class="">
				<v-col cols="12" md="6" lg="6">
					<v-card rounded="0" width="100%" height="100%" min-height="429" flat class="d-flex align-center px-14">
						<v-container style="max-width: 1400px" class="px-12">
							<v-avatar color="#F4EBFF">
								<v-icon icon="mdi mdi-clipboard-outline" color="#7F56D9"></v-icon>
							</v-avatar>
							<p class="my-4" style="color: #333; font-size: 30px; font-weight: 600">Empower Artisans and Vendors:</p>
							<p style="color: #333; font-size: 18px; font-weight: 400; letter-spacing: -0.2px" class="mb-8">
								At Umoja Africa, our foremost mission is to empower artisans and vendors across Africa. We provide them with a global platform to
								showcase their talents and products, enabling them to reach a broader audience and expand their businesses. Through our platform, we
								aim to uplift local economies and preserve traditional craftsmanship while fostering entrepreneurship and economic growth.
							</p>
						</v-container>
					</v-card>
				</v-col>
				<v-col class="px-0" cols="12" md="6" lg="6">
					<v-img
						eager
						cover
						width="100%"
						min-height="429"
						height="auto"
						src="https://res.cloudinary.com/payhospi/image/upload/v1712605917/umoja/mission-pic1.png"
					></v-img>
				</v-col>
			</v-row>
			<v-row class="reverse-columns">
				<v-col cols="12" md="6" lg="6">
					<v-card rounded="0" width="100%" height="100%" min-height="429" flat class="d-flex align-center px-14">
						<v-container style="max-width: 1400px" class="px-12">
							<v-avatar color="#F4EBFF">
								<v-icon icon="mdi mdi-clipboard-outline" color="#7F56D9"></v-icon>
							</v-avatar>
							<p class="my-4" style="color: #333; font-size: 30px; font-weight: 600">Promote Cultural Exchange:</p>
							<p style="color: #333; font-size: 18px; font-weight: 400; letter-spacing: -0.2px" class="mb-8">
								We are committed to promoting cross-cultural understanding and appreciation through our platform. By featuring products from diverse
								regions and communities across Africa, we encourage users to discover and learn about different cultures, traditions, and artistic
								expressions. We believe that fostering cultural exchange leads to greater empathy, connection, and appreciation for Africa's rich
								heritage.
							</p>
						</v-container>
					</v-card>
				</v-col>
				<v-col class="px-0" cols="12" md="6" lg="6">
					<v-img
						eager
						cover
						width="100%"
						min-height="429"
						height="auto"
						src="https://res.cloudinary.com/payhospi/image/upload/v1712605947/umoja/mission-pic2.png"
					></v-img>
				</v-col>
			</v-row>
			<v-row class="">
				<v-col cols="12" md="6" lg="6">
					<v-card rounded="0" width="100%" height="100%" min-height="429" flat class="d-flex align-center px-14">
						<v-container style="max-width: 1400px" class="px-12">
							<v-avatar color="#F4EBFF">
								<v-icon icon="mdi mdi-clipboard-outline" color="#7F56D9"></v-icon>
							</v-avatar>
							<p class="my-4" style="color: #333; font-size: 30px; font-weight: 600">Ensure Transparency and Trust:</p>
							<p style="color: #333; font-size: 18px; font-weight: 400; letter-spacing: -0.2px" class="mb-8">
								Transparency and trust are fundamental principles guiding our operations. We prioritize transparency in all our transactions,
								providing users with complete visibility into their e-commerce activities. Additionally, we empower users by offering them tools such
								as customized vendor dashboards and order management systems, enabling them to manage their businesses efficiently and effectively.
								Through transparency and trust, we aim to build trust and confidence in our platform while supporting the growth and success of our
								users.
							</p>
						</v-container>
					</v-card>
				</v-col>
				<v-col class="px-0" cols="12" md="6" lg="6">
					<v-img
						eager
						cover
						width="100%"
						min-height="429"
						height="auto"
						src="https://res.cloudinary.com/payhospi/image/upload/v1712605977/umoja/mission-pic3.png"
					></v-img>
				</v-col>
			</v-row>
		</div>
	</div>
	<div width="100%" style="width: 100%; background-color: #f8f8f8">
		<v-sheet
			class="d-flex align-center justify-center text-center mx-auto px-4"
			style="background-color: transparent"
			height="250"
			max-width="800"
			width="100%"
			rounded
		>
			<div>
				<v-btn color="#1273EB" variant="outlined" bg-color="#EDF0FC" class="rounded-pill mb-4">Our Values</v-btn>

				<h2 style="font-size: 34px; font-weight: 600; line-height: 44px">
					What do we value? All sorts of things! But we particularly pride ourselves on:
				</h2>
			</div>
		</v-sheet>
		<div class="" style="width: 90%; margin: auto">
			<v-row class="mb-6">
				<v-col cols="12" md="4" lg="4">
					<v-card rounded="0" width="100%" flat class="d-flex align-center justify-center text-center p-2" style="background-color: transparent">
						<v-container style="max-width: 1400px" class="px-2">
							<v-avatar color="#F4EBFF">
								<v-icon icon="mdi mdi-clipboard-outline" color="#7F56D9"></v-icon>
							</v-avatar>
							<p class="my-4" style="color: #101828; font-size: 20px; font-weight: 600">Knowledge sharing</p>
							<p style="color: #475467; font-size: 16px; font-weight: 400" class="mb-8">
								Share contents like articles, videos and posts of your business and products to foster a informative & cultural learning environment.
							</p>
						</v-container>
					</v-card>
				</v-col>
				<v-col cols="12" md="4" lg="4">
					<v-card rounded="0" width="100%" flat class="d-flex align-center justify-center text-center p-2" style="background-color: transparent">
						<v-container style="max-width: 1400px" class="px-2">
							<v-avatar color="#F4EBFF">
								<v-icon icon="mdi mdi-clipboard-outline" color="#7F56D9"></v-icon>
							</v-avatar>
							<p class="my-4" style="color: #101828; font-size: 20px; font-weight: 600">Global outreach</p>
							<p style="color: #475467; font-size: 16px; font-weight: 400" class="mb-8">
								Through the Umoja platform, we are able to offer new perspectives, creativity and opportunities to the global audience.
							</p>
						</v-container>
					</v-card>
				</v-col>
				<v-col cols="12" md="4" lg="4">
					<v-card rounded="0" width="100%" flat class="d-flex align-center justify-center text-center p-2" style="background-color: transparent">
						<v-container style="max-width: 1400px" class="px-2">
							<v-avatar color="#F4EBFF">
								<v-icon icon="mdi mdi-clipboard-outline" color="#7F56D9"></v-icon>
							</v-avatar>
							<p class="my-4" style="color: #101828; font-size: 20px; font-weight: 600">Manage your team with reports</p>
							<p style="color: #475467; font-size: 16px; font-weight: 400" class="mb-8">
								Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
							</p>
						</v-container>
					</v-card>
				</v-col>
			</v-row>
			<v-row class="mb-6">
				<v-col cols="12" md="4" lg="4">
					<v-card rounded="0" width="100%" flat class="d-flex align-center justify-center text-center p-2" style="background-color: transparent">
						<v-container style="max-width: 1400px" class="px-2">
							<v-avatar color="#F4EBFF">
								<v-icon icon="mdi mdi-clipboard-outline" color="#7F56D9"></v-icon>
							</v-avatar>
							<p class="my-4" style="color: #101828; font-size: 20px; font-weight: 600">Connect with customers</p>
							<p style="color: #475467; font-size: 16px; font-weight: 400" class="mb-8">
								Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without
								confusion.
							</p>
						</v-container>
					</v-card>
				</v-col>
				<v-col cols="12" md="4" lg="4">
					<v-card rounded="0" width="100%" flat class="d-flex align-center justify-center text-center p-2" style="background-color: transparent">
						<v-container style="max-width: 1400px" class="px-2">
							<v-avatar color="#F4EBFF">
								<v-icon icon="mdi mdi-clipboard-outline" color="#7F56D9"></v-icon>
							</v-avatar>
							<p class="my-4" style="color: #101828; font-size: 20px; font-weight: 600">Connect the tools you already use</p>
							<p style="color: #475467; font-size: 16px; font-weight: 400" class="mb-8">
								Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
							</p>
						</v-container>
					</v-card>
				</v-col>
				<v-col cols="12" md="4" lg="4">
					<v-card rounded="0" width="100%" flat class="d-flex align-center justify-center text-center p-2" style="background-color: transparent">
						<v-container style="max-width: 1400px" class="px-2">
							<v-avatar color="#F4EBFF">
								<v-icon icon="mdi mdi-clipboard-outline" color="#7F56D9"></v-icon>
							</v-avatar>
							<p class="my-4" style="color: #101828; font-size: 20px; font-weight: 600">Our people make the difference</p>
							<p style="color: #475467; font-size: 16px; font-weight: 400" class="mb-8">
								We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need
								help.
							</p>
						</v-container>
					</v-card>
				</v-col>
			</v-row>
		</div>
	</div>
	<div width="100%" style="width: 100%; margin: 100px 0">
		<v-sheet class="d-flex align-center justify-center text-center mx-auto px-4" height="250" max-width="800" width="100%" rounded>
			<div>
				<h2 style="font-size: 34px; font-weight: 600; line-height: 44px">We’re a mission driven company</h2>

				<p style="font-size: 20px; line-height: 30px; color: #475467">
					Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
				</p>
			</div>
		</v-sheet>
		<div class="" style="width: 85%; margin: auto">
			<v-row class="">
				<v-col cols="12" md="6" lg="6">
					<v-card rounded="0" width="100%" height="100%" min-height="429" flat class="d-flex align-center">
						<v-container style="max-width: 1400px" class="px-4">
							<p style="color: #6941c6; font-weight: 600">Join our team</p>
							<p class="my-4" style="color: #101828; font-size: 36px; font-weight: 600">We’re just getting started</p>
							<p style="color: #475467; font-size: 20px; font-weight: 400" class="mb-8">
								Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
							</p>
							<div class="pt-5">
								<v-btn color="#344054" class="mr-3" size="large" variant="outlined" flat rounded="xl" width="193px">
									<span style="color: #344054; font-size: 16px; font-weight: 600; line-height: 20px">Read our principles</span>
								</v-btn>
								<v-btn color="green" size="large" flat rounded="xl" width="193px">
									<span style="color: #edf0ef; font-size: 16px; font-weight: 600; line-height: 20px"> Start Exploring </span>
								</v-btn>
							</div>
						</v-container>
					</v-card>
				</v-col>
				<v-col class="px-0" cols="12" md="6" lg="6">
					<v-img
						eager
						cover
						width="100%"
						min-height="429"
						height="auto"
						src="https://res.cloudinary.com/payhospi/image/upload/v1712601877/umoja/teams.png"
					></v-img>
				</v-col>
			</v-row>
		</div>
	</div>
	<div class="bg-black">
		<v-container style="height: 774px" class="d-flex align-center justify-center">
			<div class="text-center">
				<v-img
					class="mx-auto mb-8"
					width="100%"
					max-width="420px"
					src="https://res.cloudinary.com/payhospi/image/upload/v1690543426/frame_aivj5d.png"
				></v-img>
				<p
					style="
						max-width: 659px;
						font-size: 48px;
						font-weight: 600;
						line-height: 120%; /* 57.6px */
						letter-spacing: -1.44px;
						background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.42) 100%);
						background-clip: text;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					"
				>
					Subscribe to our newsletter to get updates on our Umoja
				</p>

				<p class="mt-4" style="color: #969696; font-size: 20px; font-weight: 400; line-height: 180%; /* 36px */ letter-spacing: -0.6px">
					GET 20% OFF for your first order buy subscribing to our news letter
				</p>
				<div style="max-width: 545px" class="mx-auto d-flex mt-8 py-3">
					<v-text-field
						style="background: rgba(248, 248, 248, 0.1); border-radius: 50px; overflow: hidden"
						prepend-inner-icon="mdi mdi-email-outline"
						class="mr-3"
						:rules="[required]"
						v-model="name"
						hide-details=""
						placeholder="Enter your email address"
						density="comfortable"
					>
					</v-text-field>
					<v-btn color="green" rounded="xl" size="x-large" flat width="134">Subscribe</v-btn>
				</div>
				<p style="color: var(--carbon-1, #ededed); font-size: 14px; font-weight: 400; line-height: 180%; /* 25.2px */ letter-spacing: -0.42px">
					You will be able to unsubscribe at anytime. Read our privacy policy
					<span style="color: var(--deep-sky-blue-4, #1273eb); text-decoration-line: underline">here</span>
				</p>
			</div>
		</v-container>
	</div>
	<div width="100%" style="width: 100%; background-color: #f8f8f8">
		<v-sheet
			class="d-flex align-center justify-center text-center mx-auto px-4"
			style="background-color: transparent"
			height="250"
			max-width="800"
			width="100%"
			rounded
		>
			<div>
				<span style="font-weight: 600; color: #2c6e63; font-size: 16px">Contact us</span>
				<h2 class="my-3" style="font-size: 36px; font-weight: 600; line-height: 44px">Get in touch</h2>
				<p style="font-size: 20px; font-weight: 400; color: #475467">Our friendly team is always here to chat.</p>
			</div>
		</v-sheet>
		<div class="" style="width: 90%; margin: auto">
			<v-row class="mb-6">
				<v-col cols="12" md="4" lg="4">
					<v-card rounded="0" width="100%" flat class="d-flex align-center justify-center text-center p-2" style="background-color: transparent">
						<v-container style="max-width: 1400px" class="px-2">
							<v-avatar color="#CDD6D4">
								<v-icon icon="mdi mdi-email-outline" color="#2C6E63"></v-icon>
							</v-avatar>
							<p class="my-3" style="color: #101828; font-size: 20px; font-weight: 600">Email</p>
							<p style="color: #475467; font-size: 16px; font-weight: 400" class="mb-3">Our friendly team is here to help.</p>
							<p style="color: #2c6e63; font-size: 16px; font-weight: 600">Office@umoja-africa.com</p>
						</v-container>
					</v-card>
				</v-col>
				<v-col cols="12" md="4" lg="4">
					<v-card rounded="0" width="100%" flat class="d-flex align-center justify-center text-center p-2" style="background-color: transparent">
						<v-container style="max-width: 1400px" class="px-2">
							<v-avatar color="#CDD6D4">
								<v-icon icon="mdi mdi-map-marker" color="#2C6E63"></v-icon>
							</v-avatar>
							<p class="my-3" style="color: #101828; font-size: 20px; font-weight: 600">Office</p>
							<p style="color: #475467; font-size: 16px; font-weight: 400" class="mb-3">Come say hello at our office HQ.</p>
							<p class="d-flex flex-column gap-2" style="color: #2c6e63; font-size: 16px; font-weight: 600">
								<span>Humboldtgasse 12, 29-30</span>
								<span>1100 Vienna,Austria.</span>
								<span>VAT - ATU7411156</span>
								<span>Company Registration number - FN 599772</span>
							</p>
						</v-container>
					</v-card>
				</v-col>
				<v-col cols="12" md="4" lg="4">
					<v-card rounded="0" width="100%" flat class="d-flex align-center justify-center text-center p-2" style="background-color: transparent">
						<v-container style="max-width: 1400px" class="px-2">
							<v-avatar color="#CDD6D4">
								<v-icon icon="mdi mdi-phone" color="#2C6E63"></v-icon>
							</v-avatar>
							<p class="my-3" style="color: #101828; font-size: 20px; font-weight: 600">Phone</p>
							<p style="color: #475467; font-size: 16px; font-weight: 400" class="mb-3">Mon-Fri from 8am to 5pm.</p>
							<p style="color: #2c6e63; font-size: 16px; font-weight: 600">+43 664 3174106</p>
						</v-container>
					</v-card>
				</v-col>
			</v-row>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
};
</script>
<style>
.cardo .v-card__image .v-img img.v-img__img.v-img__img--cover {
	scale: 1 !important;
}
.imgcl {
	position: absolute;
	bottom: 0% !important;
	right: 0px;
	width: 100vw;
	max-width: 737px;
	z-index: 99;
}
.igj {
	position: absolute;
	width: 100%;
	height: 772px;
}

.reverse-columns {
	display: flex;
	flex-direction: row-reverse;
	margin: 60px 0 !important;
}
</style>
