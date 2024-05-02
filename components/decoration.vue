<template>
	<div class="bg-black" style="position: relative; overflow: hidden">
		<!-- <h1>{{'scale:'+ (1+ (prog * 0.2))}}</h1> -->
		<div
			v-if="loader"
			style="z-index: 9; position: absolute; left: 0; height: 772px; width: 100%"
			class="bg-black d-flex justify-center align-center rounded-0"
		>
			<div>
				<v-progress-linear color="#F38218" class="rounded-xl" style="width: 500px" indeterminate height="5"></v-progress-linear>
			</div>
		</div>
		<v-card flat style="overflow: hidden; position: relative" color="black" class="cardo rounded-0" height="772" width="100%">
			<v-img
				cover
				eager
				style="z-index: -1; position: absolute; height: 772px; width: 100%"
				:style="'scale:' + (1 + prog * 0.2) + ';opacity:' + 0.3 + prog * 0.7"
				:class="'img' + selected"
				:src="item.image"
				class="bg-black rounded-0"
			/>

			<v-container style="max-width: 1200px; width: 100%; height: 772px; z-index: 99" class="d-flex align-center py-1">
				<div class="mx-auto mx-md-0 text-center text-md-left" :style="{ width: $vuetify.display.mobile ? '335px' : '536px' }">
					<p
						class="title"
						:style="{ fontSize: $vuetify.display.mobile ? '48px' : '96px' }"
						style="color: #fff; font-weight: 600; line-height: 100%; /* 96px */ letter-spacing: -2.88px"
					>
						{{ item.title }}
					</p>
					<p
						class="my-6 sub"
						:style="{ fontSize: $vuetify.display.mobile ? '18px' : '24px', fontWeight: $vuetify.display.mobile ? 400 : 500 }"
						style="color: #fff"
					>
						{{ item.sub }}
					</p>
					<div v-show="selected == 0" class="btn">
						<v-btn rounded="xl" color="#F38218" height="44" style="width: 225px; padding: 12px 20px" flat
							><span style="color: var(--carbon-6, #ffffff); text-align: center; font-weight: 600; font-size: 14px">
								Shop Now <v-icon class="arrow ml-3" icon="mdi mdi-arrow-right"></v-icon>
							</span>
						</v-btn>
					</div>
				</div>
			</v-container>
			<div
				class="align-center d-flex justify-space-between"
				:style="{ padding: $vuetify.display.mobile ? '0px 10px' : '0px 40px' }"
				style="
					height: 144px;
					position: absolute;
					bottom: 0px;
					left: 0px;
					right: 0px;
					color: #fff;
					background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
				"
			>
				<div>
					<p style="font-size: 16px; font-weight: 600" class="btitle mb-2">{{ item.btitle }}</p>
					<p
						:style="{ width: $vuetify.display.mobile ? '100%' : '537px' }"
						style="font-size: 14px; font-weight: 400; line-height: 140%; /* 19.6px */"
						class="bcont"
					>
						{{ item.bcont }}
					</p>
				</div>
				<!-- <v-btn
					class="btn2"
					v-show="selected !== 0"
					rounded="xl"
					color="#F38218"
					height="54"
					style="width: 225px; padding: 12px 20px; border-radius: 50%"
					flat
					><span style="color: var(--carbon-6, #ffffff); text-align: center; font-weight: 600; font-size: 14px">
						Shop Now <v-icon class="arrow ml-3" icon="mdi mdi-arrow-right"></v-icon>
					</span>
				</v-btn> -->
			</div>
		</v-card>
	</div>
	<div style="width: 100%; height: 5px; position: sticky; bottom: 0">
		<div style="height: 5px; background-color: #f8b735" :style="'width:' + prog * 100 + '%'"></div>
	</div>
</template>
<script>
import { gsap, Bounce, Back, CSSPlugin } from "gsap";
export default {
	data() {
		return {
			prog: 0,
			loader: true,
			carouseldata: [
				{
					title: "Rooted in Africa",
					bcont:
						"African lanterns and lampshades can create a warm and inviting atmosphere in any home. You could offer a selection of pendant lights, floor lamps, and table lamps that incorporate African design elements.",
					btitle: "Lighting and Lamps",
					sub: "Transforming Spaces with Cultural Flair",
					image: "https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1400/v1694077483/rectangle-22455decor_npteeu.png",
				},
				{
					title: "Some title here",
					color: "radial-gradient(50% 50% at 50% 50%, #348C5B 0%, #29593E 100%)",
					sub: "Lorem ipsum, dolor sit amet consectetur",
					image: "https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1400/v1694074749/rectangle-22456dec_dmg2jw.png",
					bcont: `Woven baskets are both functional and decorative. They can be used for storage, as planters, or simply as artistic pieces. Offering a variety of sizes and styles would cater to different customer preferences.`,
					btitle: "Woven Baskets and Storage",
				},
				{
					title: "",
					sub: "",
					image: "https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1400/v1694074739/rectangle-22457decor2_hizpjk.png",
					bcont: `African furniture often features intricate carvings and unique designs. This category could include items like chairs, tables, cabinets, and beds that are handmade by skilled artisans.`,
					btitle: "Handcrafted Furniture",
				},
				{
					title: "",
					sub: "",
					image: "https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1400/v1694074756/rectangle-22458decor43_oumcf7.png",
					bcont: `African textiles like kente, mudcloth, Ankara, and Kitenge are known for their rich patterns and colors. Offering a variety of fabrics that customers can use for upholstery, clothing, or decorative purposes.`,
					btitle: "Traditional Textiles and Fabrics",
				},
				{
					title: "",
					sub: "",
					image: "https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1400/v1694074741/rectangle-22459decore54_iwgiru.png",
					bcont: `African pottery is often handcrafted and beautifully decorated. You can showcase a range of vases, bowls, plates, and other ceramic pieces that showcase the region's traditional pottery techniques.`,
					btitle: "Ceramics and Pottery",
				},
			],
			selected: 0,
		};
	},
	computed: {
		item() {
			return this.carouseldata[this.selected];
		},
	},
	mounted() {
		gsap.registerPlugin(CSSPlugin);
		this.$nextTick(() => {
			this.startall();
		});
	},
	methods: {
		async startall() {
			const imageArray = this.carouseldata.map((item) => item.image);
			let loadedImages = 0;
			const sn = this;
			function preloadImages() {
				for (let i = 0; i < imageArray.length; i++) {
					const tempImage = new Image();
					tempImage.addEventListener("load", trackProgress, true);
					tempImage.src = imageArray[i];
				}
			}

			function trackProgress() {
				loadedImages++;
				if (loadedImages === imageArray.length) {
					imagesLoaded();
				}
			}

			function imagesLoaded() {
				sn.loader = false;
				console.log("All images loaded!");
				const img = document.querySelector(".img" + sn.selected);
				const title = document.querySelector(".title");
				const sub = document.querySelector(".sub");
				const btn = document.querySelector(".btn");
				const btitle = document.querySelector(".btitle");
				const bcont = document.querySelector(".bcont");
				const btn2 = document.querySelector(".btn2");
				var tl = gsap.timeline({
					repeat: -1,
					onUpdate: () => {
						const progress = tl.progress();
						sn.prog = progress;
					},
				});

				tl.fromTo(
					[img],
					{
						opacity: 0,
						xPercent: -50,
						scale: 1,
					},
					{
						opacity: 1,
						scale: 1,
						xPercent: 0,
						onComplete: () => {
							// this.animateImg()
						},
					}
				);

				tl.fromTo(
					[title, btn, sub],
					{
						opacity: 0,
						xPercent: -100,
					},
					{
						opacity: 1,
						xPercent: 0,
						ease: Back.easeOut,
						stagger: 0.1,
						delay: -0.4,
					}
				);
				tl.fromTo(
					[btitle, bcont, btn2],
					{
						opacity: 0,
						yPercent: 100,
					},
					{
						opacity: 1,
						yPercent: 0,
						stagger: 0.1,
						delay: -0.2,
					}
				);
				tl.to([btitle, bcont, btn2], {
					opacity: 0,
					yPercent: 100,
					stagger: 0.1,
					delay: 7,
				});
				tl.to([title, sub, btn], {
					opacity: 0,
					xPercent: 100,
					stagger: 0.1,
				});
				tl.to([img], {
					visibility: 0,
					xPercent: 120,
					delay: -0.3,
					scale: 1,
				});
				tl.to([img], {
					delay: -0.5,
					scale: 1,
					onComplete: () => {
						// this.showImg = false;

						sn.selected = sn.selected === 4 ? 0 : sn.selected + 1;
					},
				});
			}
			preloadImages();
		},
	},
};
</script>
<style>
.cardo .v-card__image .v-img img.v-img__img.v-img__img--cover {
	scale: 1 !important;
}
.imgcl {
	position: absolute;
	bottom: 0% !important;
	right: 0px;
	width: 100vw;
	max-width: 737px;
	z-index: 99;
}
.igj {
	position: absolute;
	width: 100%;
	height: 772px;
}
</style>
