<template>
    <v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
        <div class="d-flex align-center justify-end mb-5">
				<v-btn @click="choose('Create Article')" flat color="green" size="default" class="ml-4 justify-end menubar text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-plus"></v-icon>
					Create Article
				</v-btn>
			</div>
        <v-row>
            <v-col cols="12" v-for="(n, i) in allArticle" :key="i" lg="4" md="4">
					<div class="cardStyle">
						<div class="mb-4 d-flex justify-between w-100">
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
							<v-menu >
								<template v-slot:activator="{ props }">
									<v-icon class="ml-10"  v-bind="props" icon="mdi mdi-dots-horizontal"></v-icon>
								</template> 
								<v-list>
								<v-list-item style="cursor: pointer"  @click="editArticle(n)">
									Edit Article
								</v-list-item>
								<v-list-item style="cursor: pointer" @click="deleteArticle(n.id)">
									Delete Article
								</v-list-item>
								</v-list>
							</v-menu> 
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
						<v-btn  @click="$router.push(`/article_detail/${n.id}`)" size="small" color="#1273EB" class="px-0" variant="text">
							<span style="color: var(--deep-sky-blue-4, #1273eb); font-size: 14px; font-weight: 600"> Read more </span>
							<v-icon size="small" class="ml-4" icon="mdi mdi-arrow-right"></v-icon
						></v-btn>
					</div>
				</v-col>
		</v-row>
    </v-container>
</template>
<script setup>
import {useCreateStore} from '~/stores/createPostStore'
import {ref, onMounted, computed} from 'vue'
import {getdateRegistered} from '~/utils/date'

const postStore = useCreateStore()
const allArticle = computed(() => postStore.articles)
const emits = defineEmits(['changePage'])
const menuVisible = ref({})
const choose = (x) => {
			emits("changePage", x);
}

async function deleteArticle(id){
    postStore.deleteArticle(id)
}
function editArticle(item){
    postStore.setArticleToEdit(item)
    choose('Edit Article')
}
</script>