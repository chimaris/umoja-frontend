<template>
	<Header2 :sticky="true" :maxwidth="'1200px'" />
	<div style="position: sticky; top: 0px; backdrop-filter: blur(7px); background: rgba(255, 255, 255, 0.906); z-index: 999">
		<v-container style="max-width: 1200px; width: 100%" class="py-1">
			<div class="d-flex">
				<p
					style="cursor: pointer; font-size: 14px"
					:class="select == n ? 'text-green font-weight-bold' : ''"
					@click="selectCategory(n)"
					class="font-weight-medium text-capitalize py-3 px-4 mr-4 text-grey"
					v-for="n in ['fashion', 'art', 'cosmetics', 'home decoration']"
					:key="n"
				>
					{{ n }}
				</p>
			</div>
		</v-container>
	</div>

	<fashionhero v-if="select == 'fashion'" style="margin-bottom: 100px" />
	<art v-else-if="select == 'art'" style="margin-bottom: 100px" />
	<Decoration v-else-if="select == 'home decoration'" style="margin-bottom: 100px" />
	<Cosmetics v-else-if="select == 'cosmetics'" style="margin-bottom: 100px" />

	<shopmenu :showImg="showImg" :databank="databank" />

	<product-row
		:vendorlist="databank.vendor.items"
		:category="select"
		style="margin: 100px auto"
		:vendor="true"
		:maxwidth="'1200px'"
		:showVendor="true"
		:title="databank.vendor.title"
	/>

	<newlylaunched :item="databank.newlylaunched" style="margin-bottom: " />

	<product-row
		:cover="databank.postadrow.cover"
		style="margin-bottom: 100px"
		:maxwidth="'1200px'"
		:showVendor="true"
		:title="databank.postadrow.title"
		:items="databank.postadrow.items"
	/>

	<PopularTwoRow
		:showBid="databank.twocardrow.showBid"
		style="margin-bottom: 100px"
		:maxwidth="'1200px'"
		:items="databank.twocardrow.items"
		:title="databank.twocardrow.title"
	/>
	<div style="padding-bottom: 100px; margin-bottom: 100px" :style="'background-color: #' + categoryColor">
		<Adcarousel
			:image="databank.adrow.image"
			:title="databank.adrow.title"
			:color="databank.adrow.color"
			style="margin-bottom: 50px; margin-top: 100px"
		/>
		<product-row
			:showdisco="true"
			:category="select"
			:cover="databank.postcarorow.cover"
			:maxwidth="'1200px'"
			:showVendor="true"
			:title="databank.postcarorow.title"
			:items="databank.postcarorow.items"
		/>
	</div>
	<PostsRow style="margin-bottom: 100px" :maxwidth="'1200px'" :showVendor="true" :title="databank.postRow.title" :items="databank.postRow.items" />
	<Toplist style="margin-bottom: 100px" :maxwidth="'1200px'" :title="databank.toplist" />
	<Mainfooter :maxwidth="'1200px'" />
</template>
<script>
export default {
	data() {
		return {
			showImg: false,
		};
	},
	computed: {
		databank() {
			var fashion = {
				toplist: "Vendors",
				menu: [
					{
						name: "Men Clothes",
						leftimage:
							"https://img.freepik.com/free-photo/autumn-person-with-beautiful-hat_23-2149137832.jpg?w=900&t=st=1695372157~exp=1695372757~hmac=fdd7dd407529348c4a3b2461b3160ea1e54bb213492fa6304d389c3788d8420e",
						rightimage:
							"https://img.freepik.com/free-photo/portrait-young-handsome-male_23-2148884407.jpg?w=996&t=st=1695372208~exp=1695372808~hmac=d4ebb4f3c1aff10fb97701a6dcd9d3afc0268c39b560a1169b2641ac49776d2d",
					},
					{
						name: "Female Clothes",
						leftimage:
							"https://img.freepik.com/free-photo/fashionable-young-seductive-african-model-with-perfect-curly-hairs-elegant-orange-blouse-silk-pants-sitting-vintage-chair-beige-wall_273443-4086.jpg?w=2000&t=st=1695372432~exp=1695373032~hmac=840219d7884c18409efb09c563761f51f863b4259852ccd665cba251cb685177",
						rightimage:
							"https://img.freepik.com/free-photo/portrait-african-woman-floral-coat_23-2148747911.jpg?w=1380&t=st=1695372536~exp=1695373136~hmac=216d5903edbaa030bbf8c6515a61c0db3508f6bdc77065ad623a0b3ff01558d3",
					},
					{
						name: "Shoes",
						leftimage:
							"https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669605.jpg?w=2000&t=st=1695372814~exp=1695373414~hmac=c7fa397f2aa7c60e7b917602863fd36edb562c3830cb22c3a1c72181025382ac",
						rightimage:
							"https://img.freepik.com/free-photo/closeup-leather-high-heeled-female-brown-shoes-decorated-with-metal-parts_181624-32288.jpg?size=626&ext=jpg",
					},
					{
						name: "Bags",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1693886644/Rectangle_22446_vukaqj.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1693886640/Rectangle_22449_gc29v8.png",
					},
					{
						name: "Hats",
						leftimage:
							"https://img.freepik.com/free-photo/portrait-stylish-man-wearing-nice-hat_23-2148634028.jpg?w=2000&t=st=1695372893~exp=1695373493~hmac=552eda388948220123de986ab18cbd1aeeecdc6286e9cdbc466903c3befd443a",
						rightimage:
							"https://img.freepik.com/free-photo/portrait-fashionable-man-smiling-outdoors_23-2148448887.jpg?w=2000&t=st=1695372927~exp=1695373527~hmac=2f2f1ec9f3ad097ad8d83b8030f2e05dc3810d68ab7fad08b517671eeafe9087",
					},
					{
						name: "Materials",
						leftimage:
							"https://img.freepik.com/free-photo/fabric-texture-background_1385-1944.jpg?w=1380&t=st=1695372981~exp=1695373581~hmac=c96a08912f0b5c11dc1103634b55c6b5149d54546a08dcb39734fb1656c9765e",
						rightimage:
							"https://img.freepik.com/free-photo/stack-sweatshirts_23-2148175734.jpg?w=900&t=st=1695373131~exp=1695373731~hmac=a2f111e2be2ddaeeb18f7166c53259d5a4f5892a556dbade4f273ffd35dc0732",
					},
				],
				vendor: {
					title: "🔥 Best Selling Fashion Stores",
					items: [
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694165862/rectangle-22439pointgftg_tpujdo.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1693922523/ellipse-107_pajkls.png",
							vendorName: "Orderly Fashion",
							subCategory: "Unisex Wears",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694165862/rectangle-22439bangli8_wxwwk9.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107hgcj_boyj1l.png",
							vendorName: "Fashion De Africana",
							subCategory: "Jewelry",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694165862/rectangle-22439sunglasses_zpydih.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107jgchgx_suyemd.png",
							vendorName: "Woman Elegant",
							subCategory: "Materials",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694165861/rectangle-22439baggd_c4bkra.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107mhgs_j5208p.png",
							vendorName: "Me-Kweku Bags",
							subCategory: "Bags",
						},
					],
				},
				newlylaunched: [
					{
						mainImg: "https://res.cloudinary.com/payhospi/image/upload/v1693923891/rectangle-22448hj_er8azk.png",
						title: "Nawi’s Kente Materials",
						items: [
							{
								name: "Nawi’s Kente Material, Blue - Available 100 - 30,000 yards",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694169115/h-796-d-416305-eb-4758-b-6-bbba-310-e-078-fb-7-u-1gf_ps19db.png",
								price: "79.00",
								subCategory: "Organic cotton certified",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
							{
								name: "Nawi’s Kente Material, Blue - Available 100 - 30,000 yards",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694169115/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cohff_d1hbgf.png",
								price: "79.00",
								subCategory: "Organic cotton certified",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
						],
					},
					{
						mainImg: "https://res.cloudinary.com/payhospi/image/upload/v1694074723/rectangle-22449mlo_tqesqq.png",
						title: "AfroArtistry Hat Collection",
						items: [
							{
								name: "AfroArtistry Hat Collection - Sample 202 (The Bucket Hat)",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1695395427/htb-16-aa-nb-awe-3-k-vj-sz-sy-760-oc-x-xaemhgcjug_odhwhz.png",
								price: "79.00",
								subCategory: "Organic cotton certified",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
							{
								name: "AfroArtistry Hat Collection - Sample 332 (The Peruvian Geralt)",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074679/htb-16-x-ezakxz-61-vj-sz-fr-760-elf-xa-7hgh_ttgezp.png",
								price: "79.00",
								subCategory: "Organic cotton certified",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
						],
					},
					{
						mainImg: "https://res.cloudinary.com/payhospi/image/upload/v1694074726/rectangle-22448fashion_qxiocj.png",
						title: "The Safari Beads",
						items: [
							{
								name: "Muku Beads (011 - Safari beads) plus earrings, green, pink, white & brown.",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074680/htb-16-aa-nb-awe-3-k-vj-sz-sy-760-oc-x-xae_lx3rvd.png",
								price: "79.00",
								subCategory: "Organic cotton certified",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
							{
								name: "Mako Beads (047 - Safari beads) plus earrings, brown and white.",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074680/htb-16-x-ezakxz-61-vj-sz-fr-760-elf-xa-7nh_rwjm8b.png",
								price: "79.00",
								subCategory: "Organic cotton certified",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
						],
					},
					{
						mainImg: "https://res.cloudinary.com/payhospi/image/upload/v1694074726/rectangle-22449hf_pcnpp9.png",
						title: "Agojies Afrocentric Bag",
						items: [
							{
								name: "The Moana Bag Concept from the Agojies Afrocentric Bag.",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694165861/rectangle-22439baggd_c4bkra.png",
								price: "79.00",
								subCategory: "Organic cotton certified",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
							{
								name: "The Multiple colored Reflective Pattern Bag, chain handle.",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074679/fashionable-colorful-bag-white-backgroundhg_xdtzbm.png",
								price: "79.00",
								subCategory: "Organic cotton certified",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
						],
					},
				],
				postadrow: {
					title: "💰 Most Selling Products",
					items: [
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image:
								"https://res.cloudinary.com/payhospi/image/upload/v1694170675/h-796-d-416305-eb-4758-b-6-bbba-310-e-078-fb-7-u-2capjy_a5tncs.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694170676/s-2-gs-x-1-po-lshoeuhyf_acrhye.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694170674/ankara-sneakers-1500-xchapkufk_ykmili.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694170675/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cosahoes_oifr7p.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694170674/ankara-sneakers-1500-xchapkufk_ykmili.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694170675/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cosahoes_oifr7p.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
					],
					cover: false,
				},
				twocardrow: {
					showBid: false,
					title: "⚡️ Popular fashion products of the week",
					items: [
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1693932651/rectangle-22440j_qr3baf.png",
							name: "Koko Rachel Deco Set",
							vendorName: "Nweke Franklin O.",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1693932635/rectangle-22440_iixqtu.png",
							name: "The Nawi Scarfs",
							vendorName: "Okoli Cecilia Bona.",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1693932651/rectangle-22440j_qr3baf.png",
							name: "Koko Rachel Deco Set",
							vendorName: "Nweke Franklin O.",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1693932635/rectangle-22440_iixqtu.png",
							name: "The Nawi Scarfs",
							vendorName: "Okoli Cecilia Bona.",
						},
					],
				},
				adrow: {
					title: "Style Meets Substance",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1690541372/rectangle-69_jzdwc3.png",
					color: "#2C6E63",
				},
				postcarorow: {
					title: "💰 Discounted% Fashion",
					items: [
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694169115/h-796-d-416305-eb-4758-b-6-bbba-310-e-078-fb-7-u-1gf_ps19db.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1691574327/s-2-gs-x-1-po-l_ckeqxo.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694170675/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cosahoes_oifr7p.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694169115/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cohff_d1hbgf.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
					],
					cover: false,
				},
				postRow: {
					title: "Top Fashion Posts",
					items: [
						{
							vendorName: "Nana Akufo-Addo",
							vendorCategory: "Fashion",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",

							name: "Koko Rachel Deco Set",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1693937412/rectangle-53ml_m1ypgc.png",
							price: "115.32",

							location: "Accra, Ghana",
							likes: "1.2k",
							imgs: "2",
						},
						{
							vendorName: "Bonsu Thompson",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
							vendorCategory: "Stylist",
							name: "The Nawi Scarfs",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1693937299/rectangle-53kn_cwwmsk.png",
							price: "79.00",
							location: "Accra, Ghana",
							likes: "66",
							video: true,
							imgs: "4",
							oos: true,
						},
						{
							vendorName: "Dede Ayew",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",
							vendorCategory: "Leather",
							name: "Koko Rachel Deco Set",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1693937337/rectangle-53_j6orgd.png",
							price: "115.32",
							location: "Accra, Ghana",
							imgs: "5",
							likes: "1.2k",
						},
						{
							vendorName: "Bonsu Thompson",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
							vendorCategory: "Stylist",
							name: "The Nawi Scarfs",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694179222/rectangle-53tstdey6_lqnbcj.png",
							price: "79.00",
							video: true,
							imgs: "4",
							location: "Accra, Ghana",
							likes: "66",
							oos: true,
						},
					],
				},
			};
			var art = {
				toplist: "Artists",
				menu: [
					{
						name: "Drawing",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074695/rectangle-22453_bgo2al.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074696/rectangle-22450jh_q76cm0.png",
					},
					{
						name: "Painting",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074692/rectangle-1899bhtd_toet5d.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074688/rectangle-1899nhytr_lluczc.png",
					},
					{
						name: "Sculpting",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074702/rectangle-22446menuimg_cdaffb.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074702/rectangle-22449menuim_rgo5y3.png",
					},
					{
						name: "Photography",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074703/rectangle-22440childh_cih4ih.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074703/rectangle-22440_dzxva0.png",
					},
					{
						name: "Decorative Ads",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074704/rectangle-22446decor1_rqmkk9.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074700/vse_mbwrbb.png",
					},
				],
				vendor: {
					title: "🔥 Best Selling Art Stores",
					items: [
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074693/rectangle-22439top_tpijcc.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107jgchgx_suyemd.png",
							vendorName: "Dami the Illustrator",
							subCategory: "Illustrator",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074699/rectangle-22439top2_lqkqnb.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694166901/ellipse-107jmdjusytx_aouwg2.png",
							vendorName: "Quill Pen",
							subCategory: "Illustrations",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074688/rectangle-22439de434_xd9cda.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107hdj34_bl9fbu.png",
							vendorName: "Zendiya Photography",
							subCategory: "Photographer",
						},

						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074693/rectangle-22439decgtt5_rnk30c.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107nhgfer56_jtbt6v.png",
							vendorName: "Wakanda Painting",
							subCategory: "Carpentry",
						},
					],
				},
				newlylaunched: [
					{
						mainImg: "https://res.cloudinary.com/payhospi/image/upload/v1694074716/rectangle-22448-ape_pdjj7z.png",
						title: "The African Giant",
						items: [
							{
								name: "The African Giant - 02",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899-ape_t7onzg.png",
								price: "150000.00",
								subCategory: "Oil Canvas",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
							{
								name: "The African Giant - 03",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074685/rectangle-1899aep_yaihtb.png",
								price: "15000.00",
								subCategory: "Oil Canvas",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
						],
					},
				],
				postadrow: {
					title: "💰 Popular Collection",
					items: [
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074696/rectangle-1899popular_us0ywj.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074689/rectangle-1899-popular3_q0cyie.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074685/rectangle-1899-popular_q1v0dp.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074686/rectangle-1899-pop_vbpz4e.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
					],
				},
				twocardrow: {
					showBid: true,
					title: "⚡️ Ongoing Bids",
					items: [
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074723/rectangle-22440ele_ceelbp.png",
							name: "Elephant Hand Painting",
							vendorName: "Nweke Franklin O.",
							bid: 2430.0,
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074703/rectangle-22440childh_cih4ih.png",
							name: "The Child",
							vendorName: "Okoli Cecilia Bona.",
							bid: 2430.0,
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074723/rectangle-22440ele_ceelbp.png",
							name: "Elephant Hand Painting",
							vendorName: "Nweke Franklin O.",
							bid: 2430.0,
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074703/rectangle-22440childh_cih4ih.png",
							name: "The Child",
							vendorName: "Okoli Cecilia Bona.",
							bid: 2430.0,
						},
					],
				},
				adrow: {
					title: `From Hands to Heart: A Glimpse of Africa's Soul`,
					image: "https://res.cloudinary.com/payhospi/image/upload/v1694074687/rectangle-69nhf_cfnrsk.png",
					color: "#F38218",
				},
				postcarorow: {
					title: "💰 Discounted% Art",
					items: [
						{
							name: "The African Lady Digital Painting representing the African heritage.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074688/rectangle-1899nhytr_lluczc.png",
							price: "150000.00",
							subCategory: "Digitized Art",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Monumental Faces of Africa",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074694/rectangle-1899mjgf_ksuqy2.png",
							price: "150000.00",
							subCategory: "Hand Drawing",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Sangos Wooden Head Sculpture",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074691/rectangle-1899mkjhgf_rxc7tm.png",
							price: "150000.00",
							subCategory: "Sculpture",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Four Singing Slave of the Oduduwa Dynasty 18th Century Era",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074692/rectangle-1899bhtd_toet5d.png",
							price: "150000.00",
							subCategory: "Painting",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
					],
				},
				postRow: {
					title: "Top Art Posts",
					items: [
						{
							vendorName: "Nana Akufo-Addo",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",
							vendorCategory: "Sculptor",

							name: "Koko Rachel Deco Set",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074681/rectangle-53mkjg_wvuwp4.png",
							price: "115.32",

							location: "Accra, Ghana",
							likes: "1.2k",
							imgs: "2",
						},
						{
							vendorName: "Bonsu Thompson",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
							vendorCategory: "Artist",
							name: "The Nawi Scarfs",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074680/rectangle-53fres_hpe8fi.png",
							price: "79.00",
							location: "Accra, Ghana",
							likes: "66",
							video: true,
							imgs: "4",
							oos: true,
						},
						{
							vendorName: "Dede Ayew",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",
							vendorCategory: "Painter",

							name: "Koko Rachel Deco Set",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074683/rectangle-53mjgd_b1w4zw.png",
							price: "115.32",
							location: "Accra, Ghana",
							imgs: "5",
							likes: "1.2k",
						},
						{
							vendorName: "Bonsu Thompson",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
							vendorCategory: "Sculptor",
							name: "The Nawi Scarfs",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694179128/rectangle-53gchh_i4oodq.png",
							price: "79.00",
							video: true,
							imgs: "4",
							location: "Accra, Ghana",
							likes: "66",
							oos: true,
						},
					],
				},
			};
			var decoration = {
				toplist: " Home Decorators",
				menu: [
					{
						name: "Traditional Textiles",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1694074756/rectangle-22458decor43_oumcf7.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074696/rectangle-22451dyig_kcur1m.png",
					},
					{
						name: "Handcrafted Furniture",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074694/rectangle-1899mjgf_ksuqy2.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074705/rectangle-22440gdy_g3ghz5.png",
					},
					{
						name: "Lighting and Lamps",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074692/rectangle-1899drscrt6_phtmzb.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074706/rectangle-22449deco2_ahqyc3.png",
					},
					{
						name: "Ethnic Wall Art",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074704/rectangle-22446decor1_rqmkk9.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074693/rectangle-22439top_tpijcc.png",
					},
					{
						name: "Ceramics and Pottery",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074689/rectangle-1899-popular3_q0cyie.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074686/rectangle-1899decre43_gwsqgj.png",
					},
					{
						name: "Woven Baskets",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074690/rectangle-1899nhdec_pcfegg.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074687/rectangle-22439decpr3_q2sgqw.png",
					},
				],
				vendor: {
					title: "🔥 Best Selling Home Decoration Stores",
					items: [
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074687/rectangle-22439decpr3_q2sgqw.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107jgchgx_suyemd.png",
							vendorName: "Dami the Illustrator",
							subCategory: "Illustrator",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074686/rectangle-1899decre43_gwsqgj.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694166901/ellipse-107jmdjusytx_aouwg2.png",
							vendorName: "Quill Pen",
							subCategory: "Illustrations",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899jar_qnpb9n.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107hdj34_bl9fbu.png",
							vendorName: "Zendiya Photography",
							subCategory: "Crafts",
						},

						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074693/rectangle-22439decgtt5_rnk30c.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107nhgfer56_jtbt6v.png",
							vendorName: "Wakanda Painting",
							subCategory: "Vase",
						},
					],
				},
				newlylaunched: [
					{
						mainImg: "https://res.cloudinary.com/payhospi/image/upload/v1694074722/rectangle-22448chair_o4slfz.png",
						title: "The Wooden Chair",
						items: [
							{
								name: "The African Chair - 02",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074683/rectangle-1899chair32_s5rvxi.png",
								price: "150000.00",
								subCategory: "Chair Canvas",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
							{
								name: "The African Chair - 03",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899chair54_cjabfa.png",
								price: "15000.00",
								subCategory: "Decor Canvas",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
						],
					},
					{
						mainImg: "https://res.cloudinary.com/payhospi/image/upload/v1694074722/rectangle-22448chair_o4slfz.png",
						title: "The Wooden Chair",
						items: [
							{
								name: "The African Chair - 02",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074683/rectangle-1899chair32_s5rvxi.png",
								price: "150000.00",
								subCategory: "Chair Canvas",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
							{
								name: "The African Chair - 03",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899chair54_cjabfa.png",
								price: "15000.00",
								subCategory: "Decor Canvas",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
						],
					},
				],
				postadrow: {
					title: "💰 Popular Collection",
					items: [
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074688/rectangle-1899decre_j9o27l.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074686/rectangle-1899decre43_gwsqgj.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074692/rectangle-1899drscrt6_phtmzb.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074690/rectangle-1899nhdec_pcfegg.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
					],
				},
				twocardrow: {
					title: "⚡️ Ongoing Bids",
					showBid: false,
					items: [
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074705/rectangle-22440ongodec_tjw2sp.png",
							name: "Bespoke Chair",
							vendorName: "Nweke Franklin O.",
							bid: 2430.0,
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074705/rectangle-22440gdy_g3ghz5.png",
							name: "Koko Rachel Deco Set",
							vendorName: "Okoli Cecilia Bona.",
							bid: 2430.0,
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074705/rectangle-22440ongodec_tjw2sp.png",
							name: "Bespoke Chair",
							vendorName: "Nweke Franklin O.",
							bid: 2430.0,
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074705/rectangle-22440gdy_g3ghz5.png",
							name: "Koko Rachel Deco Set",
							vendorName: "Okoli Cecilia Bona.",
							bid: 2430.0,
						},
					],
				},
				adrow: {
					title: "The Woven Rafia Chair set by Wale Adeniyi.",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1694074701/rectangle-69artad_ctba3q.png",
					color: "#000",
				},
				postcarorow: {
					title: "💰 Discounted% Decor",
					items: [
						{
							name: "Wooden Keg.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899jar_qnpb9n.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Multi colored Lantern.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074692/rectangle-1899lmp_sradwn.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Vibrant Clay Pot",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074700/vse_mbwrbb.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Raft Fronds Basket",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074690/rectangle-1899bsk_s7kpta.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
					],
				},
				postRow: {
					title: "Top Decor Posts",
					items: [
						{
							vendorName: "Nana Akufo-Addo",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",
							vendorCategory: "Sculptor",
							name: "Koko Rachel Deco Set",

							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074683/rectangle-53artpost_i1dui9.png",
							price: "115.32",

							location: "Accra, Ghana",
							likes: "1.2k",
							imgs: "2",
						},
						{
							vendorName: "Bonsu Thompson",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
							vendorCategory: "Artist",

							name: "The Nawi Scarfs",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074680/rectangle-53artpt_qhdriv.png",
							price: "79.00",
							location: "Accra, Ghana",
							likes: "66",
							video: true,
							imgs: "4",
							oos: true,
						},
						{
							vendorName: "Dede Ayew",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",
							vendorCategory: "Painter",

							name: "Koko Rachel Deco Set",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074679/rectangle-53artre4_acefqy.png",
							price: "115.32",
							location: "Accra, Ghana",
							imgs: "5",
							likes: "1.2k",
						},
						{
							vendorName: "Bonsu Thompson",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
							vendorCategory: "Artist",
							name: "The Nawi Scarfs",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694179608/rectangle-53mkiut_ae1wpt.png",
							price: "79.00",
							video: true,
							imgs: "4",
							location: "Accra, Ghana",
							likes: "66",
							oos: true,
						},
					],
				},
			};
			var cosmetics = {
				toplist: " Cosmetics Vendors",
				menu: [
					{
						name: "Fragrances",
						leftimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074699/rectangle-22446cosme_px0esl.png",
						rightimage: "https://res.cloudinary.com/payhospi/image/upload/v1694074699/rectangle-22449cosme23_afjd41.png",
					},
					{
						name: "Facial Care",
						leftimage:
							"https://img.freepik.com/free-photo/black-girl-with-towel-head-has-eye-patches-isolated-white-background_1157-52269.jpg?w=2000&t=st=1695374399~exp=1695374999~hmac=6305f06029c00ea4e1086e77ae24c633c9813bd7962d96c337e242439f44e7c3",
						rightimage:
							"https://img.freepik.com/free-photo/black-girl-with-towel-head-has-eye-patches-isolated-white-background_1157-52274.jpg?w=2000&t=st=1695374439~exp=1695375039~hmac=b04041f230dcb7c69c559d4fcb702e4389814f245b9e2a6ea5f147795519fa8b",
					},
					{
						name: "Serums",
						leftimage:
							"https://img.freepik.com/free-photo/portrait-woman-with-face-serum-beauty_23-2150571358.jpg?w=900&t=st=1695374467~exp=1695375067~hmac=4c6eb38e452b22b959ed0cb440739a5cf0c8b4287614cf0ebccbf65bf1cc245e",
						rightimage:
							"https://img.freepik.com/free-photo/close-up-man-applying-serum_23-2149137922.jpg?w=900&t=st=1695374960~exp=1695375560~hmac=56565b59888bca3349325c2334792112a5a775bcdf7121d4c0a4e27e51f70b58",
					},
					{
						name: "Shaving & Beard Care",
						leftimage:
							"https://img.freepik.com/free-photo/young-afro-american-man-shaving-bathroom-personal-morning-routine-hygiene-morning-concept_1258-105006.jpg?w=2000&t=st=1695374600~exp=1695375200~hmac=d09b8ee41151105038be9567c3ee1b9c00b4480340cac4a0896e74d9235322bd",
						rightimage:
							"https://img.freepik.com/free-photo/young-male-doing-selfcare-routine_23-2149291811.jpg?w=900&t=st=1695374638~exp=1695375238~hmac=a20b533407e6a389c8e9c95c2758da9b491c4b0c1507497270a967873a87d7bf",
					},
					{
						name: "Body Care",
						leftimage:
							"https://img.freepik.com/free-photo/african-american-woman-wearing-towel-doing-her-daily-skincare-routine-home_155003-32987.jpg?w=900&t=st=1695374709~exp=1695375309~hmac=759cb8ca403d7846dfeb950d88cec13fb6319839c49ee6ba24382a82dd54fdac",
						rightimage:
							"https://img.freepik.com/free-photo/medium-shot-man-using-shaving-cream_23-2149137926.jpg?w=1800&t=st=1695374683~exp=1695375283~hmac=593841d34ee2be0335bacab585f61a8968fbdc496492d7212dd2bab5d9a19014",
					},
					{
						name: "Hair Care",
						leftimage:
							"https://img.freepik.com/free-photo/smiley-young-woman-styling-hair-medium-shot_23-2149634972.jpg?w=2000&t=st=1695374816~exp=1695375416~hmac=5b24286aaf1938774faa2b123ddd873a47df79876bf62fd274257cb782a5172d",
						rightimage:
							"https://img.freepik.com/free-photo/young-man-posing-studio-medium-shot_23-2149457592.jpg?w=900&t=st=1695374875~exp=1695375475~hmac=0809263d87dbf02271e37ce27258495d942277f4ca0bb9ce9938d06d85296e36",
					},
				],
				vendor: {
					title: "🔥 Best Selling Cosmetics Stores",
					items: [
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074690/rectangle-22439cosme1_hwu3gn.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107jgchgx_suyemd.png",
							vendorName: "Dami the Illustrator",
							subCategory: "Illustrator",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074692/rectangle-22439cosme32_qndf2y.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694166901/ellipse-107jmdjusytx_aouwg2.png",
							vendorName: "Quill Pen",
							subCategory: "Illustrations",
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074691/rectangle-22439khcosme_pfez12.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107hdj34_bl9fbu.png",
							vendorName: "Zendiya Photography",
							subCategory: "Crafts",
						},

						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074689/rectangle-22439cosre43_cfwwf9.png",
							vendorImage: "https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107nhgfer56_jtbt6v.png",
							vendorName: "Wakanda Painting",
							subCategory: "Vase",
						},
					],
				},
				newlylaunched: [
					{
						mainImg: "https://res.cloudinary.com/payhospi/image/upload/v1694074709/rectangle-22448cosmeade_czirqy.png",
						title: "The Aloe - Ve Lotion",
						items: [
							{
								name: "The African Lotion - 02",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074685/rectangle-1899jkgg_mb8rbj.png",
								price: "150000.00",
								subCategory: "Chair Canvas",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
							{
								name: "The African Lotion - 03",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899chair54_cjabfa.png",
								price: "15000.00",
								subCategory: "Oil Canvas",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
						],
					},
					{
						mainImg: "https://res.cloudinary.com/payhospi/image/upload/v1694074709/rectangle-22448cosmeade_czirqy.png",
						title: "The Aloe - Ve Lotion",
						items: [
							{
								name: "The African Lotion - 02",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074685/rectangle-1899jkgg_mb8rbj.png",
								price: "150000.00",
								subCategory: "Chair Canvas",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
							{
								name: "The African Lotion - 03",
								image: "https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899chair54_cjabfa.png",
								price: "15000.00",
								subCategory: "Oil Canvas",
								location: "Accra, Ghana",
								likes: "66",
								oos: true,
							},
						],
					},
				],
				postadrow: {
					title: "💰 Most Selling Products",
					items: [
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074687/rectangle-1899cseme_z9iltx.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074685/rectangle-1899mlkjh_wqnarx.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074688/rectangle-1899mkjhgse_v2blcw.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Green and brown kente scarf material, Made in Lagos Nigeria.",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074685/rectangle-1899csme432_mfrgkf.png",
							price: "150000.00",
							subCategory: "Organic cotton certified",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
					],
				},
				twocardrow: {
					showBid: false,
					title: "⚡️ Top products for the week",
					items: [
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074701/rectangle-22440khkhkg_ivjjja.png",
							name: "Kino Make Up Set",
							vendorName: "Nweke Franklin O.",
							bid: 2430.0,
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074701/rectangle-22440csmepyt_ubmuxa.png",
							name: "Safari Scent",
							vendorName: "Okoli Cecilia Bona.",
							bid: 2430.0,
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074701/rectangle-22440khkhkg_ivjjja.png",
							name: "Kino Make Up Set",
							vendorName: "Nweke Franklin O.",
							bid: 2430.0,
						},
						{
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074701/rectangle-22440csmepyt_ubmuxa.png",
							name: "Safari Scent",
							vendorName: "Okoli Cecilia Bona.",
							bid: 2430.0,
						},
					],
				},
				adrow: {
					title: "The Full Make-Over Kit by Ngozi Oluwafemi",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1694074733/rectangle-69adsert_zpuueh.png",
					color: "#8697a6",
				},
				postcarorow: {
					title: "💰 Discounted% Products",
					items: [
						{
							name: "Diffused Perfume Oil",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074686/rectangle-1899csme4325_n9cesb.png",
							price: "150000.00",
							subCategory: "Fragrances",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "African Black Lotion",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074689/rectangle-1899mlhfsme_ignt3c.png",
							price: "150000.00",
							subCategory: "Body care",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Sango Serum",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074689/rectangle-1899oilsme_ta5dig.png",
							price: "150000.00",
							subCategory: "Serums",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
						{
							name: "Brown Skin Ebony Cream",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899cre_s_e_dvgj4e.png",
							price: "150000.00",
							subCategory: "Facial care",
							location: "Lagos, Nigeria",
							likes: "66",
							oos: true,
						},
					],
					cover: true,
				},
				postRow: {
					title: "Top Cosmetics Posts",
					items: [
						{
							vendorName: "Nana Akufo-Addo",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",
							vendorCategory: "Sculptor",

							name: "Koko Rachel Deco Set",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074682/rectangle-53mlhfdf_oh47th.png",
							price: "115.32",

							location: "Accra, Ghana",
							likes: "1.2k",
							imgs: "2",
						},
						{
							vendorName: "Bonsu Thompson",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
							vendorCategory: "Artist",
							name: "The Nawi Scarfs",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074680/rectangle-53jgjgsme_z8nbyd.png",
							price: "79.00",
							location: "Accra, Ghana",
							likes: "66",
							video: true,
							imgs: "4",
							oos: true,
						},
						{
							vendorName: "Dede Ayew",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png",
							vendorCategory: "Painter",

							name: "Koko Rachel Deco Set",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694074682/rectangle-53smpost54_b9ugyu.png",
							price: "115.32",
							location: "Accra, Ghana",
							imgs: "5",
							likes: "1.2k",
						},
						{
							vendorName: "Bonsu Thompson",
							vendorImg: "https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png",
							vendorCategory: "Stylist",
							name: "The Nawi Scarfs",
							image: "https://res.cloudinary.com/payhospi/image/upload/v1694179784/rectangle-53chcgxgs_araqoq.png",
							price: "79.00",
							video: true,
							imgs: "4",
							location: "Accra, Ghana",
							likes: "66",
							oos: true,
						},
					],
				},
			};
			return this.select == "fashion"
				? fashion
				: this.select == "art"
				? art
				: this.select == "cosmetics"
				? cosmetics
				: this.select == "home decoration"
				? decoration
				: fashion;
		},
		select() {
			return this.$route.params.name;
		},
		categoryColor() {
			return this.select == "fashion"
				? "EDF0EF"
				: this.select == "art"
				? "FDF1ED"
				: this.select == "cosmetics"
				? "FDF5ED"
				: this.select == "home decoration"
				? "EDEDED"
				: "EDF0EF";
		},
	},
	mounted() {
		this.imgloader();
	},
	methods: {
		imgloader() {
			const imageArray = this.databank.menu.map((item) => item.leftimage).concat(this.databank.menu.map((item) => item.rightimage));
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
					sn.showImg = true;
				}
			}
			preloadImages();
		},
		selectCategory(n) {
			this.$router.push("/" + n);
		},
	},
};
</script>
