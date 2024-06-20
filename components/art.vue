<template>
	<div
		class="d-flex align-center bg-black text-center justify-center"
		style="position: relative; overflow-x: hidden"
		:style="{ height: $vuetify.display.mobile ? '557px' : '825px' }"
	>
		<div style="position: absolute; width: 100%" :style="{ height: $vuetify.display.mobile ? '557px' : '825px' }">
			<div style="position: relative; width: 100%" :style="{ height: $vuetify.display.mobile ? '557px' : '825px' }">
				<div :style="{ height: $vuetify.display.mobile ? '185px' : '275px' }" style="position: relative" v-for="(n, i) in images" :key="i">
					<div style="height: 275px" :class="'photobanner' + i" class="d-flex justify-start">
						<v-img
							:height="$vuetify.display.mobile ? '185' : '275px'"
							contain
							:width="i == 0 && j == 0 ? '460' : 'auto'"
							:src="n"
							v-for="(n, j) in n.images"
							:key="j"
						></v-img>
						<v-img
							:height="$vuetify.display.mobile ? '185' : '275px'"
							:width="i == 0 && k == 0 ? '460' : 'auto'"
							contain
							:src="n"
							v-for="(n, k) in n.images"
							:key="k"
						></v-img>
					</div>
				</div>
			</div>
		</div>
		<div class="w-100 h-100" style="position: absolute; background-color: black; opacity: 0.7"></div>
		<div style="z-index: 99" class="mb-8" :style="{ width: $vuetify.display.mobile ? '267px' : '697px' }">
			<p
				class="title"
				:style="{ fontSize: $vuetify.display.mobile ? '48px' : '120px' }"
				style="color: #fff; opacity: 0; font-weight: 600; letter-spacing: -3.6px"
			>
				Art is Life
			</p>
			<p
				:style="{ fontSize: $vuetify.display.mobile ? '13px' : '20px' }"
				style="color: #fff; opacity: 0; font-weight: 500; letter-spacing: 4px; text-transform: uppercase"
				class="sub mb-8"
			>
				Unleashing Artistry Beyond Boundaries
			</p>
			<div class="btn" style="height: 65px">
				<v-btn rounded="xl" color="orange" height="44" style="width: 225px; padding: 12px 20px">Shop Now</v-btn>
			</div>
		</div>
	</div>
</template>
<script>
import { gsap, Back, CSSPlugin } from "gsap";

export default {
	data() {
		return {
			images: [
				{
					images: [
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718888953/umoja-backup/rectangle-22450jgfuc675_ehh9oq_is72oa.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890422/umoja-backup/rectangle-22451mj_cdxcsi_m99bbt.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718889604/umoja-backup/rectangle-22452_i5wnhh_iyowcl.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890438/umoja-backup/rectangle-22453mhtdjy5d6_lfgtxo_e7ffcm.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890476/umoja-backup/rectangle-22454mhgcjytc56_ezrqa0_sqp5nx.png",
					],
				},
				{
					images: [
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718889187/umoja-backup/rectangle-22450jh_q76cm0_cz5ii6.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718888942/umoja-backup/rectangle-22451kh_ltabbn_lknvub.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890460/umoja-backup/rectangle-22453mjgf_lsbdjm_w1td8h.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718889199/umoja-backup/rectangle-22452nghfxh_bqcqvp_mht4jc.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718889262/umoja-backup/rectangle-22454gfxhy_kbmbdh_qbjykh.png",
					],
				},
				{
					images: [
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890620/umoja-backup/rectangle-22450khjg875875_smeumb_on08oo.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890616/umoja-backup/rectangle-22451dyig_kcur1m_bpestw.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890550/umoja-backup/rectangle-22452hydyewy_vilxk4_sfzgw6.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890481/umoja-backup/rectangle-22453jydhgxjhx_ic7xot_yvc1er.png",
						"https://res.cloudinary.com/dd26v0ffw/image/upload/v1718888971/umoja-backup/rectangle-22454jhfu64_ov13pm_duwivs.png",
					],
				},
			],
		};
	},
	mounted() {
		gsap.registerPlugin(CSSPlugin);
		const title = document.querySelector(".title");
		const sub = document.querySelector(".sub");
		const btn = document.querySelector(".btn");
		this.$nextTick(() => {
			gsap.fromTo(
				[title, sub, btn],
				{
					opacity: 0,
					yPercent: 100,
				},
				{
					opacity: 1,
					yPercent: 0,
					ease: Back.easeOut,
					stagger: 0.1,
					delay: 0.4,
				}
			);
		});
	},
};
</script>
<style>
#container {
	height: 350px;
	position: relative;
	overflow: hidden;
}
@keyframes bannermove {
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(-50%, 0);
	}
}
@keyframes bannermove3 {
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(-50%, 0);
	}
}
@keyframes bannermove2 {
	0% {
		transform: translate(0%, 0);
	}
	100% {
		transform: translate(50%, 0);
	}
}
.photobanner0 {
	position: absolute;
	top: 0px;
	left: 0px;
	overflow: hidden;
	white-space: nowrap;
	animation: bannermove 30s linear infinite;
}
.photobanner1 {
	position: absolute;
	top: 0px;
	right: 0px;
	overflow: hidden;
	white-space: nowrap;
	animation: bannermove2 50s linear infinite;
}
.photobanner2 {
	position: absolute;
	top: 0px;
	left: 0px;
	overflow: hidden;
	white-space: nowrap;
	animation: bannermove3 30s linear infinite;
}
</style>
