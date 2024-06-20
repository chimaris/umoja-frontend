<template>
	<div style="position: relative; overflow: hidden">
		<!-- {{ databank  }} -->
		<div style="width: 100%; position: absolute; top: 40px" class="d-flex d-none d-md-block">
			<img
				class="rotimg d-none d-md-block"
				style="z-index: -1; opacity: 0.1; left: 0; top: 90px"
				height=""
				width="366"
				contain
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890587/umoja-backup/Frame_5_jyfv_two6l9_mbwsz9.png"
			/>
			<img
				class="rotimg d-none d-md-block"
				style="z-index: -1; opacity: 0.1; position: absolute; right: 9%; top: 90px"
				height=""
				width="286"
				contain
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718888923/umoja-backup/vector_xfq7us_wt29vq.png"
			/>
		</div>
		<div class="d-block d-md-none">
			<img
				class="rotimg"
				style="z-index: -1; opacity: 0.1; position: absolute; left: -55%; top: 90px"
				width="366"
				contain
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890587/umoja-backup/Frame_5_jyfv_two6l9_mbwsz9.png"
			/>
			<img
				class="rotimg"
				style="z-index: -1; opacity: 0.1; position: absolute; right: -40%; top: 390px"
				width="286"
				contain
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718888923/umoja-backup/vector_xfq7us_wt29vq.png"
			/>
		</div>
		<v-container style="max-width: 1200px; width: 100%" class="d-none d-md-block">
			<v-row style="min-height: 756px; position: relative" class="py-12">
				<v-col cols="12" md="4">
					<v-img
						v-show="showImg"
						class="selecte"
						eager
						style="width: 369px; height: 388px; border-radius: 15px"
						cover
						:src="databank.menu[selectIndex].leftimage"
					></v-img>
				</v-col>
				<v-col cols="12" md="4">
					<p
						style="
							color: #000;
							text-align: center;
							font-size: 16px;
							font-weight: 500;
							line-height: 20px; /* 125% */
							letter-spacing: 1.6px;
							text-transform: uppercase;
						"
					>
						Shop By categories
					</p>

					<ul class="text-center my-8" style="list-style: none">
						<li
							style="
								cursor: pointer;
								font-size: 14px;
								color: var(--carbon-6, #1e1e1e);
								text-align: center;
								position: relative;
								font-size: 36px;
								font-weight: 500;
								line-height: 140%; /* 56px */
								letter-spacing: -1.2px;
							"
							:class="select == n.name ? 'text-green' : ''"
							@click="$router.push('/market_place')"
							@mouseover="selectCategory(n.name, i)"
							class="py-4"
							v-for="(n, i) in databank.menu"
							:key="i"
						>
							{{ n.name }}
							<img
								v-show="select == n.name"
								src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890487/umoja-backup/underline-10_jqkobi_xagslv.svg"
								style="bottom: -10px; left: 50%; transform: translate(-50%, 0); position: absolute"
							/>
						</li>
					</ul>
				</v-col>
				<v-col style="display: flex; align-items: end" cols="12" md="4">
					<v-img
						v-show="showImg"
						class="selected23"
						eager
						style="width: 369px; height: 388px; border-radius: 15px"
						cover
						:src="databank.menu[selectIndex].rightimage"
					></v-img>
				</v-col>
			</v-row>
		</v-container>

		<!-- Mobile view -->
		<v-container style="max-width: 1200px; width: 100%" class="d-block d-md-none overflow-hidden">
			<v-row style="min-height: 756px; position: relative" class="py-12">
				<v-col cols="12" md="4">
					<p
						style="
							color: #000;
							text-align: center;
							font-size: 16px;
							font-weight: 500;
							line-height: 20px; /* 125% */
							letter-spacing: 1.6px;
							text-transform: uppercase;
						"
					>
						Shop By categories
					</p>

					<ul class="text-center my-8" style="list-style: none">
						<li
							style="
								cursor: pointer;
								font-size: 14px;
								color: var(--carbon-6, #1e1e1e);
								text-align: center;
								position: relative;
								font-size: 36px;
								font-weight: 500;
								line-height: 140%; /* 56px */
								letter-spacing: -1.2px;
							"
							:class="select == n.name ? 'text-green' : ''"
							@click="$router.push('/market_place')"
							@mouseover="selectCategory(n.name, i)"
							class="py-4"
							v-for="(n, i) in databank.menu"
							:key="i"
						>
							{{ n.name }}
							<img
								v-show="select == n.name"
								src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718890487/umoja-backup/underline-10_jqkobi_xagslv.svg"
								style="bottom: -10px; left: 50%; transform: translate(-50%, 0); position: absolute"
							/>
						</li>
					</ul>
				</v-col>
				<v-col cols="6" md="4" class="pr-1" width="48%">
					<v-img
						v-show="showImg"
						class="selected23"
						eager
						cover
						style="width: 200px; height: 200px; border-radius: 15px"
						:src="databank.menu[selectIndex].leftimage"
					></v-img>
				</v-col>
				<v-col style="display: flex; align-items: end" cols="6" md="4" class="pl-1" width="48%">
					<v-img
						v-show="showImg"
						class="selected23"
						eager
						cover
						style="width: 200px; height: 200px; border-radius: 15px"
						:src="databank.menu[selectIndex].rightimage"
					></v-img>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import { gsap, Back } from "gsap";
import debounce from "lodash/debounce";

export default {
	data() {
		return {
			select: "",
			selectIndex: 0,
		};
	},
	props: ["databank", "showImg"],
	mounted() {
		this.select = this.databank.menu[0].name;
	},
	methods: {
		selectCategory: debounce(function (n, i) {
			if (n == this.select) {
				return;
			}
			const sn = this;
			sn.select = n;

			sn.loader = false;
			const selected = document.querySelector(".selecte");
			const selected2 = document.querySelector(".selected23");

			var tl = gsap.timeline();
			tl.to([selected], {
				translateX: "-800px",
				translateY: "119px",
				rotate: "-45deg",
				duration: 0.5,
				ease: Back.easeOut.config(1.7),
			});
			tl.to([selected2], {
				translateX: "800px",
				translateY: "119px",
				rotate: "45deg",
				duration: 0.5,
				delay: -0.5,
				ease: Back.easeOut.config(1.7),
				onComplete: function () {
					sn.selectIndex = i;
				},
			});
			tl.to([selected, selected2], {
				translateX: "0px",
				translateY: "0px",
				rotate: "0deg",
				ease: Back.easeOut.config(1.7),
			});
		}, 100),
	},
};
</script>
