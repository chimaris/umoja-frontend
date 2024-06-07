<template>
	<div>
		<v-row class="pl-0 pr-0 ml-0 mr-0">
			<v-col cols="12" class="pl-0 pr-0 mx-0">
				<div class="image-container" :style="{ backgroundImage: 'url(' + imageUrl1 + ')' }"></div>
			</v-col>
		</v-row>
	</div>
	<v-container style="max-width: 1400px; width: 100%">
		<div class="align-center justify-space-between d-flex py-5 py-md-10">
			<div>
				<p :style="{ fontSize: $vuetify.display.mobile ? '20px' : '32px' }" style="font-weight: 600; line-height: 40.16px">Articles</p>
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
		<v-row>
			<v-col cols="12" v-for="(n, i) in availableArticle" :key="i" lg="4" md="4">
				<div class="cardStyle">
					<div class="mb-4 d-flex">
						<v-avatar size="50">
							<v-img :src="n.vendor_profile_photo"></v-img>
						</v-avatar>
						<div class="ml-3">
							<div class="d-flex align-center">
								<p style="color: #1e1e1e; font-size: 16px; text-transform: capitalize; font-weight: 600; line-height: 140%">{{n.vendor_firstname}} {{ n.vendor_lastname }}</p>
								<v-icon class="mx-1" size="5" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
								<p style="color: #969696; font-size: 14px; font-weight: 400; line-height: 140%">{{getdateRegistered(n.created_at)}}</p>
							</div>
							<div class="d-flex align-center mt-1">
								<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 500">{{n.category_name}}</p>
							</div>
						</div>
					</div>
					<v-card flat color="grey-lighten-4" :image="n.cover_image" width="100%" height="188px" class="d-flex align-center justify-center rounded-lg">
					</v-card>
					<p class="mt-4 mb-2" style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 700; line-height: 140%">
						{{n.title}}
					</p>
					<div v-html="n.content" style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis" class="article-content"></div>
					<!-- <p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 400; line-height: 140%">
						Lorem ipsum dolor sit amet consectetur. Id et ornare tristique tempus egestas neque tincidunt lobortis. Integer arcu sit massa orci
						phasellus ipsum tincidunt et amet.
					</p> -->
					<v-btn size="small" color="#1273EB" class="px-0" variant="text" @click="$router.push(`/article_detail/${n.id}`)">
						<span style="color: var(--deep-sky-blue-4, #1273eb); font-size: 14px; font-weight: 600"> Read more </span>
						<v-icon size="small" class="ml-4" icon="mdi mdi-arrow-right"></v-icon
					></v-btn>
				</div>
			</v-col>
			<v-container style="max-width: 1400px">
				<v-btn
					class="mt-10 mx-auto"
					block
					@click="loadArticle()"
					color="#333"
					size="large"
					variant="outlined"
					rounded="xl"
					style="border: 1px solid #cecece; font-size: 14px; font-weight: 600"
				>
					<span class="mr-4"> Load More</span>
						<v-progress-circular v-if="userStore.loadArticle" indeterminate :width="2" :size="20"></v-progress-circular>
				</v-btn>
			</v-container>
		</v-row>
	</v-container>
</template>

<script setup>
import { useUserStore } from "~/stores/userStore";
import {ref, computed, onBeforeMount} from 'vue'
import {getdateRegistered} from '~/utils/date'
import { fetchAllArticle } from "~/composables/usePost";


const userStore = useUserStore()
const page = ref(1)
const availableArticle = computed(() => userStore.allArticles)
const imageUrl1 = ref("https://res.cloudinary.com/payhospi/image/upload/v1714742905/umoja/post-hero1.svg")
const country = ref("All of African")
const africanCountries = [
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
			]
onBeforeMount(async () => {
	userStore.allArticles = []
	await fetchAllArticle(page.value)
})
async function loadArticle(){
	if (userStore.artCurrentPage == userStore.artLastPage ){
		return 
	}
	if (userStore.artCurrentPage < userStore.artLastPage){
		page.value ++;
		await fetchAllArticle(page.value)
		return
	}
}

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
