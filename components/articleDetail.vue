<template>
	<v-container>
		<v-sheet>
			<v-card flat>
				<div class="d-flex align-center">
					<p style="font-weight: 500; font-size: 14px; line-height: 50.2px; color: #333333">{{article?.category_name}}</p>
					<p class="" style="font-weight: 400; font-size: 14px; line-height: 140%; color: #969696">
						<v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>{{getdateRegistered(article?.created_at)}}
					</p>
				</div>
				<h1 class="my-5" :style="{ fontSize: $vuetify.display.mobile ? '28px' : '40px' }" style="font-weight: 700; color: #444">
					{{article?.title}}
				</h1>
				<div class="d-flex align-center">
					<p class="mr-2" style="font-weight: 400; font-size: 14px; color: #969696">by</p>
					<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">{{article?.vendor_firstname}} {{article?.vendor_lastname}}</p>
					<v-icon class="ml-1" icon="mdi mdi-twitter" size="16" color="#55ACEE"></v-icon>
				</div>
				<v-img
					:height="$vuetify.display.mobile ? 211 : 354"
					cover
					class="my-4"
					style="border-radius: 15px"
					:src="article?.cover_image"
				></v-img>
				<div  v-html="article?.content"></div>
			</v-card>
			<p class="mb-10 text-overline text-center" style="font-weight: 600; margin-top: 120px; font-size: 16px; color: #333333">READ NEXT</p>

			<div
				v-for="n in nextArticles"
				:key="n"
				class="d-none d-md-block"
			>
				<!-- <v-divider class="my-5"></v-divider> -->
				<v-sheet class="d-flex align-center justify-space-between pa-10 my-5" style="background-color: #f8f8f8" flat>
					<div style="max-width: 458px">
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
										<p style="font-weight: 500; font-size: 14px; line-height: 140%; color: #333333">{{ n.vendor_firstname }} {{ n.vendor_lastname }}</p>
										<v-icon class="ml-1" icon="mdi mdi-twitter" size="16" color="#55ACEE"></v-icon>
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
					<div style="width: 349px; height: 227px">
						<v-img cover style="border-radius: 15px" @click="$router.push(`/article_detail/${n.id}`)" :src="n.cover_image"></v-img>
					</div>
				</v-sheet>
			</div>
			<div class="cardStyle d-block d-md-none mb-4" 	v-for="n in nextArticles" :key="n">
				<div class="mb-4 d-flex">
					<v-avatar size="50">
						<v-img :src="n.vendor_profile_photo"></v-img>
					</v-avatar>
					<div class="ml-3">
						<div class="d-flex align-center">
							<p style="color: #1e1e1e; font-size: 16px; font-weight: 600; line-height: 140%">{{n.vendor_firstname}} {{ n.vendor_lastname }}</p>
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
				<div v-html="n.content" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis" class="article-content"></div>
				<!-- <p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 400; line-height: 140%">
					Lorem ipsum dolor sit amet consectetur. Id et ornare tristique tempus egestas neque tincidunt lobortis. Integer arcu sit massa orci
					phasellus ipsum tincidunt et amet.
				</p> -->
				<v-btn size="small" color="#1273EB" class="px-0" variant="text" @click="$router.push(`/article_detail/${n.id}`)">
					<span style="color: var(--deep-sky-blue-4, #1273eb); font-size: 14px; font-weight: 600"> Read more </span>
					<v-icon size="small" class="ml-4" icon="mdi mdi-arrow-right"></v-icon
				></v-btn>
			</div>
			<div class="px-12 text-center mt-16 mb-0">
				<v-btn class="mx-auto" size="x-large" flat variant="outlined"
					>Back up <v-icon size="16" class="ml-2" icon="mdi mdi-arrow-up-right"></v-icon
				></v-btn>
			</div>
		</v-sheet>
	</v-container>
</template>

<script>
import {getdateRegistered} from '~/utils/date'
import { useUserStore } from "~/stores/userStore";

export default {

	props: ["article"],
	data() {
		return {
			dialog: false,
			smallImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046634/rectangle-22429mhgdy878_iyunoo.png",
			bigImage: "https://res.cloudinary.com/payhospi/image/upload/v1695046484/rectangle-29jhv646_o8o1ps.png",
		};
	},
	computed: {
		availableArticle(){
			return useUserStore().allArticles
		},
		nextArticles() {
		// Filter out the current article
	
		const filteredArticles = this.availableArticle.filter(a => a.id !== this.article?.id);

		// Return the next two articles
		return filteredArticles.slice(0, 2);
		}
	},

};
</script>
