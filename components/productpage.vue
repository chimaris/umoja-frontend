<template>
	<v-container class="pt-0" style="max-width: 1400px">
		<v-breadcrumbs class="breadcrumbstick pl-0" v-model="item" active-class="text--green" :items="items">
			<template v-slot:divider>
				<v-icon color="#969696" icon="mdi mdi-chevron-right"></v-icon>
			</template>
			<template v-slot:title="{ item }">
				<span
					v-if="item.disabled"
					style="color: #2c6e63; font-size: 14px; font-weight: 600; line-height: 20px; /* 142.857% */ letter-spacing: -0.14px"
				>
					{{ product.name }}
				</span>
				<span
					v-else
					style="color: #969696; font-size: 14px; font-weight: 500; opacity: 1 !important; line-height: 20px; /* 142.857% */ letter-spacing: -0.14px"
				>
					{{ item.title }}
				</span>
			</template>
		</v-breadcrumbs>
		<v-divider color="#EDEDED"></v-divider>
		<v-row>
			<v-col cols="12" lg="8">
				<div class="py-6">
					<div>
						<v-row>
							<v-col cols="12" lg="6">
								<v-carousel v-model="carousel" class="caro mb-2" style="border-radius: 6px" hide-delimiters height="349px">
									<v-carousel-item v-if="product.photo.includes(',')"
										:value="n"
										v-for="n in product.photo.split(',')"
										cover
										height="349px"
										:src="n"
									>
									</v-carousel-item>
									<v-carousel-item v-else
										:value="n"
										v-for="n in 4"
										cover
										height="349px"
										:src="product.photo"
									>
									</v-carousel-item>
								</v-carousel>
								<v-row dense v-if="product.photo.includes(',')">
									<v-col v-for="n in product.photo.split(',')" cols="3">
										<v-img
											v-ripple="{ class: 'text-grey' }"
											class="bg-grey-lighten-4 caroimg"
											@click="carousel = n"
											style="border-radius: 6px !important"
											cover
											height="103px"
											:src="n"
										>
											<v-overlay persistent="" scrim="green" opacity="0" :model-value="carousel == n" contained></v-overlay>
										</v-img>
									</v-col>
								</v-row>
								<v-row dense v-else>
									<v-col v-for="n in 4" cols="3">
										<v-img
											v-ripple="{ class: 'text-grey' }"
											class="bg-grey-lighten-4 caroimg"
											@click="carousel = n"
											style="border-radius: 6px !important"
											cover
											height="103px"
											:src="product.photo"
										>
											<v-overlay persistent="" scrim="green" opacity="0" :model-value="carousel == n" contained></v-overlay>
										</v-img>
									</v-col>
								</v-row>
							</v-col>
							<v-col cols="12" lg="6">
								<p style="color: #333; font-size: 28px; font-weight: 600; line-height: 140%; /* 39.2px */ letter-spacing: -0.84px">
									{{product.name}}
								</p>
								<div class="d-flex align-center">
									<v-rating
										:model-value="4"
										active-color="#F0B136"
										half-increments
										density="comfortable"
										color="grey-lighten-1"
										size="x-small"
									></v-rating>
									<p style="color: #1e1e1e; font-size: 14px; font-weight: 500; letter-spacing: 0.7px" class="mt-2 ml-3">4.0</p>
								</div>
								<p style="color: var(--carbon-6, #1e1e1e); font-size: 36px; font-weight: 600; line-height: 140%" class="my-4">{{formattedPrice(product.price)}}</p>
								<div v-if= "product.sizes.length >  0" class="d-flex mb-2 align-center">
									<p style="color: #1e1e1e; font-size: 14px; font-weight: 600; line-height: 140%">Available Sizes</p>
									<v-btn class="ml-1" variant="text" color="#969696"
										><span>Size Guide</span> <v-icon class="ml-1" icon="mdi mdi-arrow-right"></v-icon
									></v-btn>
								</div>
								<div style="max-width: 295px">
									<v-row dense v-if= "product.sizes.length >  0">
										<v-col cols="4" v-for="(n, i) in product.sizes">
											<p
												:class="size == n ? 'greenbox' : ''"
												@click="size = n"
												v-ripple
												class="caroimg green-hover w-100 d-flex align-center justify-center"
												style="height: 40px; border-radius: 6px; border: 1px solid var(--carbon-1, #ededed)"
											>
												{{ n }}
											</p>
										</v-col>
									</v-row>
								</div>
								<div v-if="product.colors.length >  0" class="d-flex mt-4 align-center">
									<p style="color: #1e1e1e; font-size: 14px; font-weight: 600; line-height: 140%">
										Available colors
									</p>
								</div>
								<div v-if="product.colors.length >  0" class="d-flex my-2">
									<div
										:class="color == i ? 'addborder' : ''"
										@click="color = i"
										class="caroimg d-flex mr-2"
										v-for="(n, i) in product.colors"
										:key="i"
										:style="'background:' + n"
										style="border-radius: 50%; overflow: hidden; height: 26px; width: 26px"
									>
										<div style="width: 50%"></div>
										<div style="background: #fff; opacity: 0.5; width: 50%"></div>
									</div>
								</div>
							</v-col>
						</v-row>
						<v-divider color="#EDEDED" class="my-6"></v-divider>
						<p style="color: #000; font-size: 28px; font-weight: 600; line-height: 140%; /* 39.2px */ letter-spacing: -0.84px" class="mb-4">
							Product Description
						</p>

						<p style="color: #333; font-size: 16px; font-weight: 600; line-height: 180%; /* 28.8px */ letter-spacing: -0.48px">Description:</p>
						<p style="color: #333; font-size: 14px; font-weight: 400; line-height: 180%">
							{{product.description}}
						</p>

						<v-divider color="#EDEDED" class="my-6"></v-divider>

						<p style="color: #333; font-size: 16px; font-weight: 600; line-height: 180%; /* 28.8px */ letter-spacing: -0.48px">Specification:</p>
						<ul v-if="product.product_spec.includes(',')" style="color: #333; font-size: 14px; font-weight: 400; list-style-type: none; line-height: 180%">
							<li v-for="(item, index) in product.product_spec.split(',')" :key="index">
								<span>{{item}}</span>
							</li>
						</ul>
						<ul v-else style="color: #333; font-size: 14px; font-weight: 400; list-style-type: none; line-height: 180%">
							<li>
								<span>{{product.product_spec}}</span>
							</li>
						</ul>

						<v-divider color="#EDEDED" class="my-6"></v-divider>
						<div>
							<p style="color: #000; font-size: 28px; font-weight: 600; line-height: 140%; /* 39.2px */ letter-spacing: -0.84px">
								Item Rating/Reviews
							</p>
							<div class="d-flex mt-6">
								<div class="">
									<p style="color: #000; font-size: 48px; font-weight: 600">4.5</p>
									<v-rating
										class="rti"
										:model-value="4"
										active-color="#F0B136"
										half-increments
										density="comfortable"
										color="grey-lighten-1"
										size="x-small"
									></v-rating>
									<p style="font-size: 14px; font-weight: 500; line-height: 140%; /* 19.6px */ letter-spacing: -0.14px">49 Ratings</p>
								</div>
								<v-card height="100%" max-width="287px" class="ml-6 px-2" width="100%" style="" flat>
									<div v-for="n in [5, 4, 3, 2, 1]" class="d-flex mb-2 align-center">
										<div class="d-flex align-center">
											<v-icon size="18" icon="mdi mdi-star" class="mr-1" color="#F0B136"></v-icon>
											<span style="color: #333; font-size: 16px !important ; font-weight: 600"> {{ n }}</span>
										</div>
										<v-progress-linear :model-value="20 * n - 5" style="width: 100%; left: 70px" color="green" class="linearl" height="6" rounded>
										</v-progress-linear>
									</div>
								</v-card>
							</div>
						</div>
						<div class="d-flex justify-space-between align-center mt-8">
							<p style="font-size: 14px; font-weight: 500; line-height: 140%; letter-spacing: -0.14px">
								All Reviews <span style="color: #969696">(120)</span>
							</p>
							<v-chip-group
								variant="outlined"
								mandatory
								style="font-size: 14px; line-height: 17px; font-weight: 500; letter-spacing: 0.03em; color: #333333"
								class="text-grey"
								v-model="chip"
								selected-class=" chipselected3"
							>
								<v-chip
									:class="chip == tag.name ? 'chipselected3' : ' '"
									style="font-size: 14px; font-weight: 500"
									size=""
									class="pa-2 px-4"
									v-for="tag in tags"
									:key="tag.name"
								>
									{{ tag.name }} <v-icon size="21" v-if="tag.image" class="ml-2" :icon="'mdi mdi-' + tag.image"></v-icon>
								</v-chip>
							</v-chip-group>
						</div>
						<div>
							<div v-for="(n, i) in 3" class="d-flex mt-8">
								<v-avatar color="grey-lighten-4" class="pa-1 mr-3" size="50"
									><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1687517181/Rectangle_1923_oguuzi.png"></v-img
								></v-avatar>
								<div>
									<div class="d-flex justify-space-between">
										<div class="px-1 d-flex align-center pl-0">
											<div>
												<p class="" style="font-weight: 500; font-size: 16px !important; line-height: 20px; color: #333333">Sarah Johnson</p>
												<p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696">🇺🇸 USA, New York City</p>
											</div>
										</div>
										<div class="d-flex reviews2 pr-1 align-center">
											<v-rating
												:model-value="4"
												color="grey-lighten-2"
												active-color="#E7CE5D"
												class="rts mr-4"
												density="comfortable"
												size=""
											></v-rating>
											<p style="color: #969696; font-size: 12px; font-weight: 500; letter-spacing: 0.6px">13/6/2017, 8:23 PM</p>
										</div>
									</div>
									<div>
										<p style="color: #333; font-size: 16px; font-weight: 600" class="mt-4 mb-2">The product really giving if you ask me</p>
										<p style="color: #333; font-size: 14px; line-height: 140%" class="px-">
											Lorem ipsum dolor sit amet consectetur. Lobortis sagittis porta tincidunt nibh eget lacus. Tristique tellus tempus dolor semper
											aliquam amet ipsum at. Ultricies porttitor sceler... <span style="color: #1273eb; font-weight: 600"> Read More </span>
										</p>

										<div class="mt-2">
											<v-btn variant="text" class="pl-0">
												<v-icon icon="mdi mdi-heart-outline" class="mr-2" size="17"></v-icon
												><span style="font-size: 14px; font-weight: 600">Like</span>
											</v-btn>
											<v-btn variant="text" class="ml-2">
												<v-icon icon="mdi mdi-share-outline" class="mr-2" size="17"></v-icon>
												<span style="font-size: 14px; font-weight: 600">Reply</span>
											</v-btn>
										</div>
									</div>
									<v-divider color="#EDEDED" class="mt-4"></v-divider>
								</div>
							</div>
							<div class="my-8">
								<p style="font-size: 20px; font-weight: 600" class="inputLabel d-flex align-center">
									Review this product <v-icon size="18" class="ml-2" icon="mdi mdi-information"></v-icon>
								</p>
								<v-card height="auto" class="mx-auto pt-2 coolTable pb-0 mb-1" width="100%" style="overflow: hidden" flat>
									<div class="bg-white d-flex justify-space-between px-2 pb-2" v-if="editor">
										<!-- :disabled="!editor.can().chain().focus().toggleBold().run()" -->
										<div>
											<v-btn
												flat
												icon="mdi mdi-format-italic"
												class="mr-1"
												@click="editor.chain().focus().toggleItalic().run()"
												:class="{ 'is-active': editor.isActive('italic') }"
											>
											</v-btn>
											<v-btn
												flat
												icon="mdi mdi-format-bold"
												class="mr-1"
												@click="editor.chain().focus().toggleBold().run()"
												:class="{ 'is-active': editor.isActive('bold') }"
											>
											</v-btn>
											<v-btn
												flat
												class="mr-1"
												@click="editor.chain().focus().toggleUnderline().run()"
												icon="mdi mdi-format-underline"
												:class="{ 'is-active': editor.isActive('underline') }"
											>
											</v-btn>
											<v-btn
												flat
												icon="mdi mdi-format-strikethrough"
												class="mr-1"
												@click="editor.chain().focus().toggleStrike().run()"
												:class="{ 'is-active': editor.isActive('strike') }"
											>
											</v-btn>
											<v-btn flat icon="mdi mdi-link-variant" class="mr-1" @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
											</v-btn>
											<v-btn
												flat
												icon="mdi mdi-link-variant-off"
												class="mr-1"
												@click="editor.chain().focus().unsetLink().run()"
												:disabled="!editor.isActive('link')"
											>
											</v-btn>
											<v-btn flat icon="mdi mdi-format-align-left" class="mr-1" @click="editor.chain().focus().setTextAlign('left').run()"> </v-btn>
											<v-btn flat icon="mdi mdi-format-align-center" class="mr-1" @click="editor.chain().focus().setTextAlign('center').run()">
											</v-btn>
											<v-btn flat icon="mdi mdi-format-align-right" class="mr-1" @click="editor.chain().focus().setTextAlign('right').run()"> </v-btn>
											<v-btn
												flat
												icon="mdi mdi-format-list-bulleted"
												class="mr-1"
												@click="editor.chain().focus().toggleBulletList().run()"
												:class="{ 'is-active': editor.isActive('bullet') }"
											>
											</v-btn>
										</div>
										<div>
											<v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-left"></v-btn>
											<v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-right"></v-btn>
										</div>
									</div>
									<div style="min-height: 162px" class="bg-grey-lighten-4 pa-4">
										<editor-content :editor="editor" />
									</div>
								</v-card>
							</div>
						</div>
					</div>
				</div>
			</v-col>
			<v-col cols="12" lg="4">
				<div class="py-6">
					<div>
						<v-card flat class="pa-0 cardStyle">
							<div style="background-color: #edf3f0; height: 40px" class="d-flex align-center justify-center w-100">
								<p style="color: #00966d; font-size: 14px; font-weight: 600; line-height: 140%">Available</p>
							</div>
							<div class="px-6 py-4">
								<p style="font-size: 20px; font-weight: 500">Set Quantity</p>
								<div class="d-flex justify-space-between align-center my-2">
									<p style="color: #969696; font-size: 14px; font-weight: 500; line-height: 140%">Quantity: <span style="color: #000">{{ quantity }}</span></p>

									<v-btn-group border rounded="xl" divided density="compact">
										<v-btn
											class="dark-hover"
											rounded="0"
											@click="quantity --"
											:disabled = "quantity <= 1"
										>
											<v-icon icon="mdi mdi-minus "></v-icon>
										</v-btn>

										<v-btn :ripple="false" rounded="0">
											{{quantity}}
										</v-btn>
										<v-btn
											class="green-hover"
											rounded="0"
											@click="quantity ++"
										>
											<v-icon icon="mdi mdi-plus"></v-icon>
										</v-btn>
									</v-btn-group>
								</div>
								<v-divider class="my-4"></v-divider>
								<div class="d-flex justify-space-between align-center mb-4 my-2">
									<p style="color: #969696; font-size: 14px; font-weight: 500; line-height: 140%">Total</p>
									<p style="color: #1e1e1e; font-size: 24px; font-weight: 600; line-height: 140%">{{formattedPrice(quantity * product.price)}}</p>
								</div>
								<v-btn @click="addToCart()" block class="mb-2" size="large" flat color="green" rounded="xl"
									><span style="color: #edf0ef; font-size: 14px; font-weight: 600">
										{{isInCart() ? "Added to Cart" : "Add to cart"}}
									</span></v-btn
								>
								<v-btn
									class="dark-hover"
									block
									style="border-color: #333; color: #333; font-size: 14px; font-weight: 600"
									border
									size="large"
									variant="outline"
									flat
									color="#333333"
									rounded="xl"
								>
									<span style="font-size: 14px; font-weight: 600">Buy Now</span></v-btn
								>
								<div class="d-flex mt-4 justify-space-between">
									<v-btn width="48%" variant="text" class="">
										<v-icon icon="mdi mdi-heart-outline" class="mr-2" size="17"></v-icon>
										<span style="font-size: 14px; font-weight: 600">Favorite</span>
									</v-btn>
									<v-divider inset="" vertical=""></v-divider>
									<v-btn width="48%" variant="text" class="">
										<v-icon icon="mdi mdi-share-variant-outline" class="mr-2" size="17"></v-icon>
										<span style="font-size: 14px; font-weight: 600">Share</span>
									</v-btn>
								</div>
							</div>
						</v-card>

						<v-card flat class="mt-4 py-9 cardStyle">
							<div class="d-flex justify-space-between align-center">
								<p style="color: #1e1e1e; font-size: 14px; font-weight: 600">Ship to</p>
								<p style="color: #1273eb; font-size: 14px; font-weight: 500">
									<v-icon class="mb-1 mr-1" size="14" color="black" icon="mdi mdi-map-marker"></v-icon>United States 🇺🇸
								</p>
							</div>
							<v-divider color="#EDEDED" class="my-4"></v-divider>

							<div>
								<p style="color: var(--carbon-6, #1e1e1e); font-size: 20px; font-weight: 600; line-height: 140%">Delivery Options</p>
								<div
									style="
										color: var(--carbon-6, #1e1e1e);
										font-size: 14px;

										line-height: 140%;
									"
								>
									<p style="font-weight: 600" class="mt-4">Normal Shipping: EUR 75.23</p>
									<p>From Ghana to United States of America via <strong> Umoja standard shipping </strong></p>
									<p>Etimated delivery <strong> August 23 -28 </strong></p>
								</div>
								<v-divider color="#EDEDED" class="my-4"></v-divider>
								<div
									style="
										color: var(--carbon-6, #1e1e1e);
										font-size: 14px;

										line-height: 140%;
									"
								>
									<p style="font-weight: 600" class="mt-4">Instant Shipping: EUR 250.23</p>
									<p>From Ghana to United States of America via <strong> DHL shipping </strong></p>
									<p>Etimated delivery <strong> August 20 -22 </strong></p>
								</div>
								<v-divider color="#EDEDED" class="my-4"></v-divider>

								<div style="font-size: 14px; font-weight: 500; line-height: 140%; /* 19.6px */ letter-spacing: -0.14px">
									<v-row dense v-for="(item, index) in productDetails" :key="index" class="">
										<v-col cols="3" :style="{ color: item.labelColor }">{{ item.label }}</v-col>
										<v-col cols="8" :style="{ color: item.valueColor }">{{ item.value }}</v-col>
									</v-row>
								</div>
							</div>
						</v-card>
					</div>
				</div>
			</v-col>
		</v-row>
		<product-row :maxwidth="'1400px'" :showVendor="true" title="🌓 Related Products" />
		<product-row :maxwidth="'1400px'" class="mt-12" :showVendor="false" title="🛍 More items from this seller" />
		<product-row :maxwidth="'1400px'" :showVendor="true" title="😎 Recently viewed" />
	</v-container>
</template>
<style>
.caroimg {
	transition: all 0.1s ease-in-out;
}
.addborder {
	border: 3px solid white;
	box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
.caroimg:hover {
	scale: 0.98;
}
.v-carousel.caro .v-window__controls .v-btn {
	border-radius: 50% !important;
	width: 30px;
	height: 30px;
}
.v-carousel.caro .v-btn--icon .v-icon {
	font-size: 15px;
}
.rti .v-btn--icon.v-btn--density-comfortable {
	width: 26px;
}
.v-breadcrumbs-item--disabled {
	opacity: 1 !important;
}
</style>
<script>
import {formattedPrice} from '~/utils/price'
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { useCartStore } from "~/stores/cartStore";
import { useUserStore } from "~/stores/userStore";
import {ref} from "vue";

export default {
	setup(){
		const quantity = ref(1);

		return {
			quantity
		}
	},
	props: ["product"],
	components: {
		EditorContent,
	},
	mounted() {
		this.editor = new Editor({
			extensions: [
				StarterKit,
				Link,
				Underline,
				TextAlign.configure({
					types: ["heading", "paragraph"],
				}),
			],
			content: "<p>This sneakers is made from one of the best  ankara material in Ghana</p>",
		});
	},
	beforeUnmount() {
		this.editor.destroy();
	},
	data() {
		return {
			productDetails: [
				{ label: "Payment", labelColor: "#969696", value: "Secure transaction", valueColor: "#1273EB" },
				{ label: "Ships from", labelColor: "#969696", value: "Umoja", valueColor: "#000" },
				{ label: "Sold by", labelColor: "#969696", value: "M&F Global Traders", valueColor: "#1273EB" },
				{
					label: "Returns",
					labelColor: "#969696",
					value: "Eligible for Return, Refund or Replacement within 90 day of receipt",
					valueColor: "#1273EB",
				},
			],
			editor: null,
			carousel: 0,
			color: 0,
			size: "",
			chip: "All Review",
			tags: [
				{
					name: "All Review",
					image: "",
				},
				{
					name: "5 Star",
				},
				{
					name: "4 Star",
				},
				{
					name: "3 Star",
				},
				{
					name: "2 Star",
				},
				{
					name: "1 Star",
				},
			],
			item: "Green and brown kente scarf...",
			items: [
				{
					title: "Market Place",
					disabled: false,
					href: "/market_place",
				},
				{
					title: "Fashion",
					disabled: false,
					href: "/fashion",
				},
				{
					title: "Green and brown kente scarf...",
					disabled: true,
				},
			],
		};
	},
	computed: {
		cartStore() {
			return useCartStore();
		},
	},
	methods: {
		isInCart() {
			const cartStore = useCartStore();
			const index = cartStore.items.findIndex(item => item.product.id == this.product.id)
			if (index !== -1) {
				return true
			}else {
				return false
			}
		},
		async addToCart() {
			const userStore = useUserStore();
			
			const cartStore = useCartStore();
			if (userStore.getIsLoggedIn) {
				const index = cartStore.items.findIndex(cart => cart.product.id == this.product.id)
				if (index !== -1) {
					const cartId = cartStore.items[index].id;
					await cartStore.removeItem(this.product.id, cartId)
					return
				}
				await cartStore.addItem(this.product.id, this.quantity);
			} else {
				this.$router.push("/user/login");
			}
		},
	},
};
</script>
