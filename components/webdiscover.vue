<template>
	<v-card min-height="100vh" flat style="padding-top: 200px; padding-bottom: 200px" class="d-flex justify-center align-center">
		<div class="w-100">
			<div class="w-100 text-center">
				<p
					class="tinytext1"
					style="
						color: var(--magnetic-green-4, #2c6e63);
						font-size: 14px;
						font-weight: 500;
						text-transform: uppercase;
						line-height: 120%; /* 16.8px */
						letter-spacing: 0.7px;
					"
				>
					What is the Umoja solution?
				</p>
				<p
					style="color: var(--carbon-5, #2a2a2a); font-size: 48px; font-weight: 600; line-height: 120%; /* 57.6px */ letter-spacing: -1.44px"
					class="mt-4 subtitles mb-4"
				>
					Discover a dynamic Marketplace
				</p>
				<p
					style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 400; max-width: 577px; line-height: 180%; letter-spacing: -0.6px"
					class="mx-auto titlesub"
				>
					Umoja provides a unique experience, connecting a variety of buyers and sellers to a digital african market.
				</p>
				<v-btn-toggle mandatory :model-value="1" v-model="mods" style="background: #f8f8f8" class="bto mt-8" rounded="xl">
					<v-btn
						:style="mods == 2 ? '    background: #F8F8F8!important;' : ''"
						color="green"
						:width="$vuetify.display.smAndDown ? '150' : $vuetify.display.xsAndDown ? '120' : '188'"
						:value="1"
						rounded="xl"
					>
						<span :style="mods == 2 ? 'color: var(--magnetic-green-3, #94AAA5);' : ''" style="font-size: 14px; font-weight: 600"> Buyers </span>
					</v-btn>
					<v-btn
						:style="mods == 1 ? '    background: #F8F8F8!important;' : ''"
						color="green"
						:width="$vuetify.display.smAndDown ? '150' : $vuetify.display.xsAndDown ? '120' : '188'"
						:value="2"
						rounded="xl"
					>
						<span :style="mods == 1 ? 'color: var(--magnetic-green-3, #94AAA5);' : ''" style="font-size: 14px; font-weight: 600"> Vendors </span>
					</v-btn>
				</v-btn-toggle>
			</div>
			<v-container class="mt-12">
				<v-row>
					<v-col v-for="n in mods == 1 ? items1 : items2" :key="n" cols="12" sm="6" lg="3">
						<v-card flat class="height0 cardStyle">
							<v-avatar eager :color="n.color" class="mb-4 mt-6 rounded-lg" size="60"><img width="30" :src="n.src" /></v-avatar>
							<p
								class="my-4"
								style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 600; line-height: 140%; /* 28px */ letter-spacing: -0.6px"
							>
								{{ n.title }}
							</p>
							<p style="color: var(--carbon-3, #969696); font-size: 16px; font-weight: 400; line-height: 160%; /* 25.6px */ letter-spacing: -0.16px">
								{{ n.content }}
							</p>
						</v-card>
					</v-col>
				</v-row></v-container
			>
		</div>
	</v-card>
</template>
<script>
export default {
  data() {
    return {
        mods:1,
        items1: [
            {
                color: '#EDF0EF',
                src: 'https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893025/umoja-backup2/bold-messages-coversation-pen-2_bm9ici_zl1uy1.png',
                title: 'Authentic Products',
                content: 'Umoja offers consumers a curated selection of authentic African products, ranging from fashion and art to home decor and accessories. '
            },
            {
                color: '#FDF1ED',
                src: 'https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893039/umoja-backup2/bold-search-minimalistic-magnifer_k1wit4_sxbbd2.png',
                title: 'Cultural Exploration',
                content: `Umoja provides consumers with an opportunity to explore and experience the richness and diversity of African culture, heritage, and traditions.`
            },
            {
                src: 'https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893028/umoja-backup2/bold-shopping-ecommerce-cart-2_fpmwr0_x14gix.png',
                color: '#FEF6ED',
                title: 'Ethical Shopping',
                content: `Umoja promotes ethical shopping practices by prioritizing fair trade, sustainability, and social impact. `
            },
            {
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1689496936/bold-essentional-ui-delivery_nifd95.png',
                color: '#F7EDEE',
                title: 'Global Connectivity',
                content: "Umoja serves as a digital bridge connecting consumers worldwide to African creativity and culture. This fosters cross-cultural exchange, dialogue, and understanding, breaking down barriers and promoting a sense of global unity and solidarity."
            },
        ],
        items2: [
        {
                color: '#F7EDEE',
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1689497083/bold-messages-coversation-pen-2_bm9ici.png',
                title: 'Access to Global Market',
                content: 'Umoja provides vendors, especially African-related B2C MSMEs, with access to a global marketplace, enabling them to reach a wider audience beyond their local markets and expand their customer base.'
            },
            {
                color: '#FEF6ED',
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1689497594/bold-text-formatting-link_hica4l.png',
                title: 'Empowerment and Support',
                content: 'Umoja is committed to empowering vendors by offering resources, support, and guidance to help them grow and scale their businesses. This includes tools, and networking opportunities to enhance their skills and capabilities.'
            },
            {
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1689497594/bold-settings-fine-tuning-widget_c23nms.png',
                color: '#FEF6ED',
                title: 'Cultural Celebration',
                content: "Umoja celebrates African creativity, culture, and heritage, allowing vendors to showcase their authentic products and cultural experiences to a global audience. "
            },
            {
                src: 'https://res.cloudinary.com/payhospi/image/upload/v1689497594/bold-business-statistic-graph-new_qqphec.png',
                color: '#EDF0EF',
                title: 'Community Engagement',
                content: "Umoja fosters a sense of community among vendors, encouraging collaboration, knowledge sharing, and mutual support. This creates a supportive ecosystem where vendors can learn from each other, share best practices, and collectively grow and succeed."
            },
        ],
     
    };
  },

};
</script>
