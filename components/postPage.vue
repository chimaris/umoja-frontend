<template>
	<div>
		<v-row class="p-0">
			<v-col cols="6" class="pl-0 pr-0 mx-0">
				<div class="image-container" :style="{ backgroundImage: 'url(' + imageUrl1 + ')' }">
					<div class="mx-auto text-center" :style="{ width: $vuetify.display.mobile ? '300px' : '418px' }">
						<p
							:style="{ fontSize: $vuetify.display.mobile ? '20px' : '24px' }"
							style="color: #fff; font-weight: 500; letter-spacing: 4px"
							class="mb-8"
						>
							Whats stopping you from posting about your business?
						</p>
						<div class="btn" style="height: 65px">
							<v-btn rounded="xl" color="#FFFFFF" height="44" style="width: 225px; padding: 12px 20px">
								Make a post now
								<v-img sizes="17" src="https://res.cloudinary.com/payhospi/image/upload/v1714745945/umoja/star_outlined.svg"></v-img>
							</v-btn>
						</div>
					</div>
				</div>
			</v-col>
			<v-col cols="6" class="pl-0 pr-0 mx-0">
				<div class="image-container" :style="{ backgroundImage: 'url(' + imageUrl2 + ')' }"></div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imageUrl1: "https://res.cloudinary.com/payhospi/image/upload/v1714742905/umoja/post-hero1.svg",
			imageUrl2: "https://res.cloudinary.com/payhospi/image/upload/v1714742949/umoja/post-hero2.png",
		};
	},
};
</script>

<style>
.image-container {
	height: 325px;
	background-size: cover;
	background-position: center;
	justify-content: center;
	align-items: center;
}
</style>
