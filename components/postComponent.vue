<template>
	<post-loader v-if="load" />
	<v-card v-else width="100%" flat class="cardStyle pa-4 pb-3">
		<div class="mb-4 d-flex">
			<v-avatar size="45">
				<v-img cover eager :src="getCloudinaryImageUrl(item?.vendor_profile_photo, 150)"></v-img>
			</v-avatar>

			<div class="pl-1 w-100" style="min-width: 0">
				<div class="d-flex justify-space-between align-center w-100">
					<div class="d-flex align-center">
						<p style="color: #1e1e1e; text-transform: capitalize; font-size: 13px; width: 87px; font-weight: 600; line-height: 140%" class="text-truncate mr-0">
							{{ item?.vendor_firstname }} {{ item?.vendor_lastname }}
						</p>
						<v-icon class="mr-1" size="3" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
						<p style="color: #969696; font-size: 11px; font-weight: 400">{{ getdateRegistered(item?.created_at) }}</p>
					</div>
					<v-icon icon="mdi mdi-dots-horizontal"></v-icon>
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
		<v-card  @click="$router.push(`/post_detail/${item?.id}`)" v-if="item?.featured_img.includes(',')" :image="getCloudinaryImageUrl(item?.featured_img.split(',')[0], 800)" flat color="grey-lighten-4" width="100%" height="308px" class="d-flex align-center justify-center rounded-lg">
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
		<v-card  @click="$router.push(`/post_detail/${item?.id}`)" v-if="!item?.featured_img.includes(',')" :image="getCloudinaryImageUrl(item?.featured_img, 800)" flat color="grey-lighten-4" width="100%" height="308px" class="d-flex align-center justify-center rounded-lg">
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
		<p @click="$router.push(`/post_detail/${item?.id}`)" style="color: #1e1e1e; cursor: pointer; font-size: 14px; font-weight: 400" class="text-wrap mt-0">
			<strong>See More</strong>
		</p>

		<div class="d-flex mt-4 align-center justify-space-between">
			<div class="d-flex align-center">
				<v-icon v-if="likedPost" @click="handleunLike(item)" size="19" icon="mdi mdi-heart"></v-icon>
				<v-icon v-if="!likedPost" @click="handleLike(item)" size="19" icon="mdi mdi-heart-outline"></v-icon>
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
				<v-img width="19" height="19" :src="getCloudinaryImageUrl('https://res.cloudinary.com/dd26v0ffw/image/upload/v1717990442/umoja/export_n0gjxv_u56e1i.svg', 19)" />
			</div>
		</div>
	</v-card>
</template>
<script>
import {getdateRegistered} from '~/utils/date'
import { getCloudinaryImageUrl } from '~/utils/cloudinary';
import { useUserStore } from "~/stores/userStore";
import { likePost, hasLiked, unlikePost } from '~/composables/useLike';

export default {
	props: ["item", "short", "load", "index", "showVendor", "showdisco", "likedPost"],
	data(){
		return{
			loginDialog: false,
		}
	},


	methods: {
		async handleunLike(item){
			this.$emit("unLikePost")
			item.likes --;
			await unlikePost(item.id)
		},
		async handleLike(item){
			if (!useUserStore().isLoggedIn){
				this.loginDialog = true
				return
			}
			this.$emit("likePost")
			item.likes ++;
			await likePost(item.id)
		},
		toLogin(){
			this.loginDialog = false
			this.$router.push('/user/login')
		},
		async userLiked(id){
			return await hasLiked(id)
		}
	}
};
</script>
