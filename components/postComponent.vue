<template>
	<v-card width="100%" flat class="cardStyle pa-4 pb-3">
		<div class="mb-4 d-flex">
			<v-avatar size="45">
				<v-img eager :src="item.vendor_profile_photo"></v-img>
			</v-avatar>

			<div class="pl-1 w-100" style="min-width: 0">
				<div class="d-flex justify-space-between align-center w-100">
					<div class="d-flex align-center ">
						<p style="color: #1e1e1e; font-size: 13px; width: 87px; font-weight: 600; line-height: 140%" class="text-truncate mr-0">
							{{ item.vendor_firstname }} {{ item.vendor_lastname }}
						</p>
						<v-icon class="mr-1" size="3" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
						<p style="color: #969696; font-size: 11px; font-weight: 400">{{getdateRegistered(item.created_at)}}</p>
					</div>
					<v-icon icon="mdi mdi-dots-horizontal"></v-icon>
				</div>

				<div class="d-block mt-1">
					<div class="d-flex align-center">
						<v-chip style="justify-content: center; align-items: center; display: flex" color="#936900" size="x-small" rounded="lg">
							{{ item.category_name }}</v-chip
						>
						<v-icon class="mx-1" size="3" color="grey-lighten-1" icon="mdi mdi-circle"></v-icon>
						<div class="text-truncate" style="color: #1e1e1e; font-size: 11px !important; font-weight: 400">{{item.location}}</div>
					</div>
				</div>
			</div>
		</div>
		<v-card v-if="item.featured_img.includes(',')" :image="item.featured_img.split(',')[0]" flat color="grey-lighten-4" width="100%" height="308px" class="d-flex align-center justify-center rounded-lg">
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
				1/{{ item.featured_img.split(',').length }}
			</p>
			<v-avatar v-if="item.video" size="39"
				><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1693937411/vuesax-twotone-play-circle_oyfiqz.png"></v-img
			></v-avatar>
		</v-card>
		<v-card v-if="!item.featured_img.includes(',')" :image="item.featured_img" flat color="grey-lighten-4" width="100%" height="308px" class="d-flex align-center justify-center rounded-lg">
			<v-avatar v-if="item.video" size="39"
				><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1693937411/vuesax-twotone-play-circle_oyfiqz.png"></v-img
			></v-avatar>
		</v-card>
		<p style="color: #1e1e1e; font-size: 14px; font-weight: 400; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis" class="text-wrap mt-4">
			{{ item.description }}
		</p>
		<p style="color: #1e1e1e; font-size: 14px; font-weight: 400" class="text-wrap mt-0">
			<strong>See More</strong>
		</p>
		<div class="d-flex mt-4 align-center justify-space-between">
			<div class="d-flex align-center">
				<v-icon size="19" icon="mdi mdi-heart-outline"></v-icon>
				<p
					style="color: #1e1e1e; font-size: 11.822px; font-weight: 400; line-height: 26.486px; /* 224.044% */ letter-spacing: 0.355px"
					class="pa-1 ml-2"
				>
					{{item.likes}}
				</p>
				<v-icon size="19" class="ml-3" icon="mdi mdi-comment-text-outline"></v-icon>
				<p
					style="color: #1e1e1e; font-size: 11.822px; font-weight: 400; line-height: 26.486px; /* 224.044% */ letter-spacing: 0.355px"
					class="pa-1 ml-2"
				>
					1156
				</p>
			</div>
			<v-icon size="19" icon="mdi mdi-tray-arrow-up"></v-icon>
		</div>
	</v-card>
</template>
<script>
import {getdateRegistered} from '~/utils/date'
export default {
	props: ["item", "short", "index", "showVendor", "showdisco"],
};
</script>
