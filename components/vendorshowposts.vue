<template>
    <v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
        <div class="d-flex align-center justify-end mb-5">
				<v-btn @click="choose('Create Post')" flat color="green" size="default" class="ml-4 justify-end menubar text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-plus"></v-icon>
					Create Post
				</v-btn>
			</div>
        <v-row>
				<v-col cols="12" v-for="(item, i) in allPosts" :key="i" lg="4" md="4">
					<v-card width="100%" flat class="cardStyle pa-4 pb-3">
		<div class="mb-4 d-flex">
			<v-avatar size="45">
				<v-img eager :src="item?.vendor_profile_photo"></v-img>
			</v-avatar>

			<div class="pl-1 w-100" style="min-width: 0">
				<div class="d-flex justify-space-between align-center w-100">
					<div class="d-flex align-center">
						<p style="color: #1e1e1e; font-size: 13px; width: 87px; font-weight: 600; line-height: 140%; text-transform: capitalize;" class="text-truncate mr-0">
							{{ item?.vendor_firstname }} {{ item?.vendor_lastname }}
						</p>
						<v-icon class="mr-1" size="3" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
						<p style="color: #969696; font-size: 11px; font-weight: 400">{{ getdateRegistered(item?.created_at) }}</p>
					</div>
						<v-menu >
								<template v-slot:activator="{ props }">
									<v-icon class="ml-10"  v-bind="props" icon="mdi mdi-dots-horizontal"></v-icon>
								</template> 
								<v-list>
								<v-list-item style="cursor: pointer"  @click="editPost(item)">
									Edit Post
								</v-list-item>
								<v-list-item style="cursor: pointer" @click="deletePost(item.id)">
									Delete Post
								</v-list-item>
								</v-list>
							</v-menu> 
				</div>

				<div class="d-block mt-1">
					<div class="d-flex align-center">
						<v-chip style="justify-content: center; align-items: center; display: flex" color="#936900" size="x-small" rounded="lg">
							{{ item?.category_name }}</v-chip
						>
						<v-icon class="mx-1" size="3" color="grey-lighten-1" icon="mdi mdi-circle"></v-icon>
						<div class="text-truncate" style="color: #1e1e1e; font-size: 11px !important; font-weight: 400">{{ item?.location }}</div>
					</div>
				</div>
			</div>
		</div>
		<v-card  v-if="item?.featured_img.includes(',')" :image="item?.featured_img.split(',')[0]" flat color="grey-lighten-4" width="100%" height="308px" class="d-flex align-center justify-center rounded-lg">
			<p
				class="text-white py-1 px-3"
				rounded="lg"
				style="
					font-size: 14px;
					line-height: 17px;
					position: absolute;
					right: 12px;
					top: 12px;
					border-radius: 3.34447px;
					background: rgba(0, 0, 0, 0.5);
				"
				flat
				size="x-small"
			>
				1/{{ item?.featured_img.split(",").length }}
			</p>
			<v-avatar v-if="item?.video" size="39"
				><v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890551/umoja-backup/vuesax-twotone-play-circle_oyfiqz_s0ys5h.png"></v-img
			></v-avatar>
		</v-card>
		<v-card  @click="$router.push(`/post_detail/${item?.id}`)" v-if="!item?.featured_img.includes(',')" :image="item?.featured_img" flat color="grey-lighten-4" width="100%" height="308px" class="d-flex align-center justify-center rounded-lg">
			<v-avatar v-if="item?.video" size="39"
				><v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890551/umoja-backup/vuesax-twotone-play-circle_oyfiqz_s0ys5h.png"></v-img
			></v-avatar>
		</v-card>
		<p
			style="
				color: #1e1e1e;
				font-size: 14px;
				font-weight: 400;
				display: -webkit-box;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
			"
			class="text-wrap mt-4"
		>
			{{ item?.description }}
		</p>

		<div class="d-flex mt-4 align-center justify-space-between">
			<div class="d-flex align-center">
				<v-icon v-if="likedPosts[item.id]" @click="handleunLike(item)" size="19" icon="mdi mdi-heart"></v-icon>
				<v-icon v-if="!likedPosts[item.id]" @click="handleLike(item)" size="19" icon="mdi mdi-heart-outline"></v-icon>
				<p
					style="color: #1e1e1e; font-size: 11.822px; font-weight: 400; line-height: 26.486px; /* 224.044% */ letter-spacing: 0.355px"
					class="pa-1 ml-1"
				>
					{{ item?.likes }}
				</p>
				<v-dialog v-model="loginDialog" persistent max-width="350">
					<v-card>
						<v-card-title class="headline">Login Required</v-card-title>
						<v-card-text>You need to be logged in to like a post.</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="green darken-1" text @click="loginDialog = false">Close</v-btn>
							<v-btn color="green darken-1" text @click="toLogin()">Login</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</div>
			<div>
				<v-img width="19" height="19" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1717990442/umoja/export_n0gjxv_u56e1i.svg" />
			</div>
		</div>
	</v-card>
				</v-col>
		</v-row>
    </v-container>
</template>
<script setup>
import {useCreateStore} from '~/stores/createPostStore'
import {ref, onMounted, computed} from 'vue'
import {getdateRegistered} from '~/utils/date'
import { likePost, hasLiked, unlikePost } from '~/composables/useLike';

const postStore = useCreateStore()
const allPosts = computed(() => postStore.posts)
const emits = defineEmits(['changePage'])
const likedPosts = ref([])

const choose = (x) => {
			emits("changePage", x);
}
async function editPost(item){
	postStore.setPostToEdit(item)
	choose('Edit Post')

}

onMounted(async() => {
    for (const post of allPosts.value) {
		likedPosts.value[post.id] = await hasLiked(post.id, "vendor")

		}
});
async function deletePost(id){
    postStore.deletePost(id)
}
async function handleunLike(item){
	likedPosts.value[item.id] = false
	item.likes --;
	await unlikePost(item.id, "vendor")
}
async function handleLike(item){
	likedPosts.value[item.id] = true
	item.likes ++;
	await likePost(item.id, "vendor")
}
</script>