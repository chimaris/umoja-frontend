<template>
	<div v-if="items.length == 0" style="height: 100%; min-height: 200px" class="d-flex justify-center flex-column align-center ga-5 mt-10">
			<p>This vendor do not have any product on promo at the moment.</p>
	</div>
	<div v-else>
		<div style="background-color: " class="d-flex py-6 align-center justify-space-between">
			<p style="font-weight: 600; font-size: 12px; line-height: 15px; text-transform: uppercase; color: #969696">{{items?.length}} live promos%</p>
			<div>
				<v-btn flat color="transparent" style="font-size: 15px; color: #333333">
					<v-img width="20" height="20" src="https://res.cloudinary.com/payhospi/image/upload/v1716236003/umoja/view-grid.svg" />
				</v-btn>
				<v-btn
					flat
					rounded="xl"
					size="x-small"
					color="transparent"
					style="font-size: 15px; color: #333333"
					icon="mdi mdi-filter-variant"
					class="mr-2"
				>
					<v-img width="20" height="20" src="https://res.cloudinary.com/payhospi/image/upload/v1716236855/umoja/filter-icon.svg" />
				</v-btn>
				<v-btn style="border: 1px solid #e5e5e5; border-radius: 100px !important" variant="outlined" class="textClass text-grey-darken-3">
					<v-img class="mr-2" width="14" height="14" src="https://res.cloudinary.com/payhospi/image/upload/v1716236855/umoja/filtericon.svg" />
					Filter
				</v-btn>
			</div>
		</div>

		<v-carousel
			style="overflow: visible"
			height="170"
			class="promo promoshort d-block d-md-none"
			:show-arrows="false"
			hide-delimiter-background=""
			cycle
		>
			<v-carousel-item v-for="n in 6" :key="n">
				<v-img
					cover
					height="auto"
					min-height="160px"
					class="bg-black d-flex py-3 align-center rounded-lg"
					src="https://res.cloudinary.com/payhospi/image/upload/v1715767704/umoja/vendo-slide-banner.png"
				>
					<div>
						<v-row class="d-flex pa-4 px-4 justify-space-between align-center">
							<v-col cols="9" sm="9">
								<h1 style="line-height: 30px; font-size: 24px" class="mb-0 text-white font-weight-black">The Waden Cloth</h1>
								<p style="line-height: 15px; font-size: 12px" class="textClass mb-4 text-white">known to be used by the Nawi people</p>
								<div>
									<v-btn flat to="/product_page" color="orange"><span class="smallBtn"> See product </span> </v-btn>
									<v-btn flat variant="text" class="ml-2 text-white howit"
										><span style="text-decoration: underline">
											<span class="smallBtn"> Not now </span>
										</span>
									</v-btn>
								</div>
							</v-col>
							<v-col class="d-flex justify-end" cols="3" sm="3"> </v-col>
						</v-row>
					</div>
				</v-img>
			</v-carousel-item>
		</v-carousel>

		<div class="mb-6 mt-14" >
			<!-- <v-sheet flat color="#FDF1ED" class="px-2 px-md-6 rounded-lg d-flex justify-space-between align-center mb-6 py-3">
				<div class="d-flex align-center">
					<v-icon icon="mdi mdi-sale" color="orange"></v-icon>
					<p
						class="ml-2"
						:style="{ fontSize: $vuetify.display.mobile ? '12px' : '14px' }"
						style="font-weight: 600; line-height: 18px; color: #f38218"
					>
						PROMO WITH 30% OFF
					</p>
				</div>
				<div class="d-flex align-center">
					<p :style="{ fontSize: $vuetify.display.mobile ? '14px' : '16px' }" style="font-weight: 400; line-height: 20px; color: #333333">
						Time Left
					</p>
					<div class="d-flex align-center justify-space-between">
						<vue-countdown
							style="font-weight: 700; font-size: 40px"
							class="text-yellow-darken-1"
							:time="timediff"
							v-slot="{ days, hours, minutes, seconds }"
						>
							<p
								:style="{ fontSize: $vuetify.display.mobile ? '14px' : '16px' }"
								style="font-weight: 600; line-height: 20px; color: #333333"
								class="ml-2"
							>
								{{ hours }}:{{ minutes }}:{{ seconds }}
							</p>
						</vue-countdown>
					</div>
				</div>
			</v-sheet> -->
			<v-row style="background-color: #fff" class="">
				<v-col cols="6" v-for="(n, i) in items" :key="i" lg="4" md="6">
					<product-component :index="i" :item="n"/>
				</v-col>
			</v-row>
		</div>
	</div>
</template>
<script setup>
import VueCountdown from "@chenfengyuan/vue-countdown";
import {ref, computed} from 'vue'


const props = defineProps({
    items: {
        type: Array,
        required: true
}
})

const timediff = computed(() => {
			var startDate = new Date();
			// Do your operations
			var endDate = new Date("2023-12-21");
			var seconds = endDate.getTime() - startDate.getTime();
			return seconds;
})

</script>
