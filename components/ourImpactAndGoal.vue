<template>
	<!-- <div style="width: 95%; margin: auto"> -->
	<v-container style="max-width: 1400px; width: 100%">
		<v-row style="margin: 40px 0 0 0">
			<v-col cols="12" md="4" lg="4" class="px-0">
				<h3 style="font-size: 48px; font-weight: 700; line-height: 60.24px">Impact & Goals</h3>
			</v-col>
			<v-col>
				<p style="font-size: 24px; font-weight: 400; line-height: 43.2px">
					With Impact at the heart of what we do Umoja has aligned it's vision and mission with a few of the United Nations global goals.
				</p>
			</v-col>
		</v-row>
	</v-container>
	<v-container style="max-width: 1400px; width: 100%">
		<v-row>
			<v-col v-for="n in impacts" :key="n.title" cols="12" md="4" lg="4">
				<v-card class="mx-auto" height="690" style="border-radius: 15px">
					<v-img height="200px" :src="n.img" cover></v-img>
					<div
						class="d-flex flex-column justify-center items-center"
						style="padding-left: 20px; height: 119px; color: white"
						:style="{ 'background-color': n.color }"
					>
						<v-card-title style="font-size: 24px; font-weight: 500"> {{ n.title }}  </v-card-title>
					</div>

					<div style="background-color: #f8f8f8; padding: 20px; height: 100%">
						<v-card-text style="font-weight: 400; font-size: 16px; line-height: 25.6px">
							{{ n.des }}
						</v-card-text>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>

	<div style="max-width:1400px; 100%; margin: auto">
		<v-row style="margin: 150px 0 0 0">
			<v-col cols="12" md="6" lg="6" class="pl-0">
				<v-container style="max-width: 1400px; width: 100%">
					<v-card flat style="color: #333333">
						<h3 class="mb-4" style="font-size: 40px; font-weight: 600; line-height: 38px; letter-spacing: -3%">Our Goals</h3>
						<p style="font-size: 18px; font-weight: 400" class="mb-8">
							Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
						</p>
						<div class="d-flex flex-column items-center gap-10">
							<v-row v-for="goal of goals" :key="goal">
								<v-col cols="1">
									<v-avatar color="#EDF0EF" class="mr-4">
										<v-icon icon="mdi mdi-check" color="#2C6E63"></v-icon>
									</v-avatar>
								</v-col>
								<v-col cols="11" class="pt-5">
									<span style="font-size: 18px">{{ goal }}</span>
								</v-col>
							</v-row>
						</div>
					</v-card>
				</v-container>
			</v-col>
			<v-col class="px-0" cols="12" md="6" lg="6">
				<v-img
					eager
					cover
					width="100%"
					min-height="429"
					height="auto"
					src="https://res.cloudinary.com/payhospi/image/upload/v1712601877/umoja/goal.png"
				></v-img>
			</v-col>
		</v-row>
	</div>

	<!-- </div> -->
</template>

<script>
export default {
	data() {
		return {
			goals: [
				"Connecting the world together.",
				"Introduce the world to new ideas and new ways of thinking.",
				"Creating a Platform that accelerates the growth of African related micro, small & medium sized businesses.",
				" Exposure of the African market to the global audience.",
			],
			impacts: [
				{
					title: "1. Help End poverty ",
					des: "Umoja plays a substantial role in alleviating poverty in Africa by empowering over 50 million micro, small, and medium-sized enterprises with resources and support. This leads to effective operation management, global expansion, and direct contributions to poverty alleviation, fostering sustainable economic opportunities and community upliftment.",
					color: "#F38218",
					img: "https://res.cloudinary.com/payhospi/image/upload/v1712663914/umoja/impact1.png",
				},
				{
					title: "2. Economic growth",
					des: "Umoja significantly contribute to fostering economic growth. Through empowering micro, small and medium-sized enterprises, Umoja promotes economic development, sustainable job creation, and inclusive growth within the communities it serves.",
					color: "#245A51",
					img: "https://res.cloudinary.com/payhospi/image/upload/v1712663914/umoja/impact2.png",
				},
				{
					title: "3. Foster innovation",
					des: "Umoja is vital for advancing innovation in its regions by connecting and empowering MSMEs through its platform. This fosters business growth, contributing to a robust industry ecosystem and improved infrastructure. Umoja acts as a catalyst for entrepreneurship, innovation, and overall economic development in these areas.",
					color: "#CC962B",
					img: "https://res.cloudinary.com/payhospi/image/upload/v1712663914/umoja/impact3.png",
				},
				{
					title: "4. Equality education",
					des: "Umoja impacts education by offering a platform for vendors to share educational materials on their products and cultures. This enhances transparency, trust, and provides valuable insights, contributing to a more informed and educated user base. Umoja aligns with the goal of promoting quality education and fostering understanding of diverse cultures and products.",
					color: "#561217",
					img: "https://res.cloudinary.com/payhospi/image/upload/v1712663914/umoja/impact4.png",
				},
				{
					title: "5. Sustainability partnership",
					des: "Housing a large variety of vendors who are majorly producers gives Umoja an opportunity to push for sustainability in their practices as a core value for our users.",
					color: "#0E5EC1",
					img: "https://res.cloudinary.com/payhospi/image/upload/v1712663914/umoja/impact5.png",
				},
				{
					title: "6. Fight Discrimination ",
					des: "African culture has taken a new turn as a leading soft power in today's socioeconomic landscape. Umoja intends to amplify this by pushing the tangible negative of 'Excellent Africa' to break through the negative and primitive stereotypes that show the continent is bad light.",
					color: "#00966D",
					img: "https://res.cloudinary.com/payhospi/image/upload/v1712663914/umoja/impact6.png",
				},
				{
					title: "7. Reducing Inequality ",
					des: "Umoja reduces inequalities by empowering micro, small and medium-sized enterprises (MSMEs) in Africa through its platform. We provide equal opportunities, resources, and global scalability, bridging the gap between enterprises and fostering an environment where diverse businesses can thrive. This aligns with the goal of reducing inequalities in the business ecosystem.",
					color: "#906A20",
					img: "https://res.cloudinary.com/payhospi/image/upload/v1712663914/umoja/impact7.png",
				},
			],
		};
	},
};
</script>
