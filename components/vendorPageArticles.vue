<template>
	<div v-if="allArticles.length == 0" style="height: 100%; min-height: 200px" class="d-flex justify-center flex-column align-center ga-5 mt-10">
			<p>This vendor has not created any article yet.</p>
		</div>
	<div v-else>
		<div style="background-color: " class="d-flex py-6 align-center justify-space-between">
			<p style="font-weight: 600; font-size: 12px; line-height: 15px; text-transform: uppercase; color: #969696">{{allArticles.length}} articles found</p>
			<div>
				<v-btn flat color="transparent" style="font-size: 15px; color: #333333">
					<v-img width="20" height="20" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1717990511/umoja/view-grid_udnxcc.svg" />
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
					<v-img width="20" height="20" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1717990443/umoja/filter-icon_hg5ksh.svg" />
				</v-btn>
				<v-btn style="border: 1px solid #e5e5e5; border-radius: 100px !important" variant="outlined" class="textClass text-grey-darken-3">
					<v-img class="mr-2" width="14" height="14" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1717990443/umoja/filtericon_ri5zov.svg" />
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
					src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1717990514/umoja/vendo-slide-banner_ojoipx.png"
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
		
		<v-sheet class="mt-8" >
			<v-card flat v-for="item in allArticles.slice(0,1)" :key="item">
				<v-img
					@click="openArticle(item)"
					height="180"
					cover
					class="my-4"
					style="border-radius: 15px"
					:src="item.cover_image"
				></v-img>
				<h1 style="font-weight: 700; font-size: 24px; color: #333333">{{item.title}}</h1>
				<!-- <p class="mt-2" style="font-weight: 500; font-size: 16px; line-height: 140%; color: #333333; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">
					{{item.content}}
				</p> -->
				<div v-html="item.content" style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis" class="article-content"></div>
				<div>
					<div>
						<div class="d-flex pt-4 justify-space-between align-center">
							<div class="d-flex align-center">
								<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">{{item.category_name}}</p>
								<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
									<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>{{getdateRegistered(item.created_at)}}
								</p>
							</div>
							<div class="d-flex align-center">
								<p class="mr-2" style="font-weight: 400; font-size: 14px; color: #969696">by</p>
								<p style="font-weight: 500; text-transform: capitalize; font-size: 14px; line-height: 140%; color: #333333">{{item.vendor_firstname}} {{item.vendor_lastname}}</p> -->
								<!-- <v-icon class="ml-1" icon="mdi mdi-twitter" size="16" color="#55ACEE"></v-icon> -->
							</div>
						</div>
					</div>
					<div></div>
				</div>
			</v-card>
			<v-divider class="my-5"></v-divider>
			<div v-for="n in allArticles.slice(1,5)" :key="n">
				<v-sheet class="d-flex align-center justify-space-between py-5 my-5 ga-5"  flat>
					<div style="max-width: 450px">
						<div class="d-flex mb-4 align-center">
							<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">{{n.category_name}}</p>
							<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
								<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>{{getdateRegistered(n.created_at)}}
							</p>
						</div>
						<h1 style="font-weight: 700; font-size: 24px; color: #333333">{{n.title}}</h1>
						<div v-html="n.content" style="display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis" class="article-content"></div>

						<div>
							<div>
								<div class="d-flex pt-4 justify-space-between align-center">
									<div class="d-flex align-center">
										<p class="mr-2" style="font-weight: 400; font-size: 14px; color: #969696">by</p>
										<p style="font-weight: 500; text-transform: capitalize; font-size: 14px; line-height: 140%; color: #333333">{{ n.vendor_firstname }} {{ n.vendor_lastname }}</p>
										<!-- <v-icon class="ml-1" icon="mdi mdi-twitter" size="16" color="#55ACEE"></v-icon> -->
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
					<div style="width: 349px; height: 227px;">
						<v-img
							@click="openArticle(n)"
							height="100%"
							cover
							class="my-4"
							style="border-radius: 15px"
							:src="n.cover_image"
					></v-img>
					</div>
				</v-sheet>
				<v-divider class="my-5"></v-divider>
			</div>
		
		</v-sheet>
		<v-dialog ref="modalContainer" v-model="dialog" transition="dialog-bottom-transition" width="auto">
			<v-card max-width="1000px" min-width="60vw" width="100%" class="rounded-lg">
				<div style="padding: 50px 90px">
					<v-btn @click="dialog = false" flat variant="outlined">
						<v-icon size="16" class="mr-1" icon="mdi mdi-arrow-left-top"></v-icon>Go Back</v-btn
					>
				</div>
				<v-divider></v-divider>
				<div :style="{ padding: $vuetify.display.mobile ? '20px 20px' : '50px 90px 90px' }">
					<v-card class="" flat>
						<div style="" class="pb-8">
							<div class="d-flex mb-4 align-center">
								<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">{{ selectedArticle.category_name }}</p>
								<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
									<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>{{getdateRegistered(selectedArticle.created_at)}}
								</p>
							</div>
							<h1 :style="{ fontSize: $vuetify.display.mobile ? '28px' : '40px' }" style="font-weight: 700; color: #333333">
								{{selectedArticle.title}}
							</h1>

							<div>
								<div>
									<div class="d-flex pt-4 justify-space-between align-center">
										<div class="d-flex align-center">
											<p class="mr-2" style="font-weight: 400; font-size: 14px; color: #969696">by</p>
											<p style="font-weight: 500; text-transform: capitalize; font-size: 14px; line-height: 140%; color: #333333">{{ selectedArticle.vendor_firstname }} {{selectedArticle.vendor_lastname}}</p>
											<!-- <v-icon class="ml-1" icon="mdi mdi-twitter" size="16" color="#55ACEE"></v-icon> -->
										</div>
									</div>
									<v-img
											@click="dialog = true"
											:height="$vuetify.display.mobile ? 211 : 354"
											cover
											class="my-4"
											style="border-radius: 15px"
											:src="selectedArticle.cover_image"
										></v-img>
								</div>
							</div>
						</div>

						<div  v-html="selectedArticle.content"></div>
						<p class="py-12 text-overline text-center">read next</p>
						<div>
							<v-sheet width="100%" class="d-flex align-center justify-space-between" flat>
								<div style="max-width: 413px" class="pr-8">
									<div class="d-flex mb-4 align-center">
										<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">{{nextArticle.category_name}}</p>
										<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
											<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>{{getdateRegistered(nextArticle.created_at)}}
										</p>
									</div>
									<h1 style="font-weight: 700; font-size: 24px; color: #333333">{{ nextArticle.title }}</h1>
									<div v-html="nextArticle.content" style="display: -webkit-box; -webkit-line-clamp: 6; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis" class="article-content"></div>

									<div>
										<div>
											<div class="d-flex pt-4 justify-space-between align-center">
												<div class="d-flex align-center">
													<p class="mr-2" style="font-weight: 400; font-size: 14px; color: #969696">by</p>
													<p style="font-weight: 500; text-transform: capitalize; font-size: 14px; line-height: 140%; color: #333333">{{ nextArticle.vendor_firstname }} {{ nextArticle.vendor_lastname }}</p>
													<!-- <v-icon class="ml-1" icon="mdi mdi-twitter" size="16" color="#55ACEE"></v-icon> -->
												</div>
											</div>
										</div>
										<div></div>
									</div>
								</div>
								<v-img cover @click="openArticle(nextArticle)" class="mb-4" max-width="349" height="200" style="border-radius: 15px" :src="nextArticle.cover_image"></v-img>
							</v-sheet>
						</div>
					</v-card>
					<div class="px-12 text-center py-12">
						<v-btn @click="scrollToTop()" class="mx-auto" size="x-large" flat variant="outlined"
							>Back up <v-icon size="16" class="ml-2" icon="mdi mdi-arrow-up-right"></v-icon
						></v-btn>
					</div>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'
import {useCreateStore} from '~/stores/createPostStore'
import {getdateRegistered} from '~/utils/date'

const props = defineProps({
    allArticles: {
        type: Array,
        required: true
    }
})

const modalContainer = ref(null)
const dialog = ref(false)
const selectedArticle = ref(null)
const nextArticle = computed(() => {
	if (selectedArticle.value){
		let newIndex;
		do {
			newIndex = generateIndex();
		} while (props.allArticles[newIndex].id === selectedArticle.value.id)
		
		return props.allArticles[newIndex];
	}

})
function scrollToTop() {
	modalContainer.value.scrollTop = 0;
}

function generateIndex(){
	return Math.floor(Math.random() * props.allArticles.length)
}
function openArticle(article){
	selectedArticle.value = article
	dialog.value = true
}
</script>
