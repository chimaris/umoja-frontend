<template>
	<Header2 />

	<v-container style="max-width: 1400px; width: 100%">
		<v-breadcrumbs class="breadcrumbstick pl-0" v-model="item" active-class="text--green" :items="items">
			<template v-slot:divider>
				<v-icon color="#969696" icon="mdi mdi-chevron-right"></v-icon>
			</template>
			<template v-slot:title="{ item }">
				<span v-if="item.highlight" style="color: #2c6e63; font-size: 14px; font-weight: 600; line-height: 20px; letter-spacing: -0.14px">
					{{ item.title }}
				</span>
				<span v-else style="color: #969696; font-size: 14px; font-weight: 500; opacity: 1 !important; line-height: 20px; letter-spacing: -0.14px">
					{{ item.title }}
				</span>
			</template>
		</v-breadcrumbs>
		<v-divider class="mb-8"></v-divider>
		<div class="d-flex justify-center">
			<v-card max-width="669" flat class="cardStyle pa-6">
				<div class="text-center">
					<v-icon color="#00966D" class="my-4" size="55" icon="mdi mdi-check-circle-outline"></v-icon>
					<p class="mb-4" style="font-size: 20px; font-weight: 600; line-height: 20px">Thanks for your order</p>
					<p style="color: #969696; font-size: 14px; font-weight: 500; line-height: 20px">
						The order confirmation has been sent to thatdesignpro@gmail.com
					</p>
				</div>
				<hr class="dashed-2 my-4" />
				<div>
					<p style="color: var(--carbon-6, #1e1e1e); font-size: 14px; font-weight: 600; line-height: 20px" class="mb-2">Transaction Date</p>
					<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 500; line-height: 20px">
						{{ getCurrentTransactionDate() }}
					</p>
				</div>
				<hr class="dashed-2 my-4" />
				<div>
					<p style="color: var(--carbon-6, #1e1e1e); font-size: 14px; font-weight: 600; line-height: 20px" class="mb-2">Payment Method</p>
					<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 500; line-height: 20px">Mastercard ending with 2546</p>
				</div>
				<hr class="dashed-2 my-4" />
				<div>
					<p style="color: var(--carbon-6, #1e1e1e); font-size: 14px; font-weight: 600; line-height: 20px" class="mb-2">Shipping Method</p>
					<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 500; line-height: 20px" class="mb-2">
						Express delivery (1-3 business days)
					</p>
					<a style="color: var(--deep-sky-blue-4, #1273eb); font-size: 12px; font-weight: 600" href="">TRACK ORDER</a>
				</div>
				<hr class="dashed-2 my-4" />
				<v-row dense>
					<v-col cols="9" class="d-flex">
						<v-avatar color="grey-lighten-2" style="border-radius: 15px" class="ml-0" size="100">
							<v-img cover src="https://res.cloudinary.com/payhospi/image/upload/v1691574327/s-2-gs-x-1-po-l_ckeqxo.png"></v-img>
						</v-avatar>
					</v-col>
					<v-col cols="3">
						<v-icon color="#00966D" class="my-4" size="55" icon="mdi mdi-check-circle-outline"></v-icon>
						<p class="mb-4" style="font-size: 20px; font-weight: 600; line-height: 20px">Thanks for your order</p>
						<p style="color: #969696; font-size: 14px; font-weight: 500; line-height: 20px">
							The order confirmation has been sent to {{ cartStore.shippingDetails.email }}
						</p>
					</v-col>
				</v-row>
				<hr class="dashed-2 my-4" />
				<div>
					<p style="color: var(--carbon-6, #1e1e1e); font-size: 14px; font-weight: 600; line-height: 20px" class="mb-2">Transaction Date</p>
					<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 500; line-height: 20px">
						{{ getCurrentTransactionDate() }}
					</p>
				</div>
				<hr class="dashed-2 my-4" />
				<div>
					<p style="color: var(--carbon-6, #1e1e1e); font-size: 14px; font-weight: 600; line-height: 20px" class="mb-2">Payment Method</p>
					<p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 500; line-height: 20px">Mastercard ending with 2546</p>
				</div>
				<hr class="dashed-2 my-4" />
				<div>
					<p style="color: var(--carbon-6, #1e1e1e); font-size: 14px; font-weight: 600; line-height: 20px" class="mb-2">Shipping Method</p>
					<p
						v-if="cartStore.shippingDetails.shippingOption"
						style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 500; line-height: 20px"
						class="mb-2"
					>
						{{ cartStore.shippingDetails.shippingOption.title }} ({{ cartStore.shippingDetails.shippingOption.duration }})
					</p>
					<a style="color: var(--deep-sky-blue-4, #1273eb); font-size: 12px; font-weight: 600" href="">TRACK ORDER</a>
				</div>
				<hr class="dashed-2 my-4" />
				<v-row dense v-if="!viewAll">
					<v-col cols="3">
						<v-avatar color="grey-lighten-2" style="border-radius: 15px" class="mr-3 ml-0" size="100">
							<v-img cover :src="cartStore.checkoutItems[0].image"></v-img>
						</v-avatar>
					</v-col>
					<v-col cols="6">
						<div class="px-2" style="max-width: 200px; overflow: hidden; text-overflow: ellipsis">
							<p class="mb-1 text-truncate" style="font-weight: 600; font-size: 16px !important; line-height: 20px; color: #333333">
								{{ cartStore.checkoutItems[0].name }}
							</p>
							<p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696" class="text-truncate">
								Category: Stone, Art, Sculpting, Carving.
							</p>
							<p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696" class="mt-4 text-truncate">
								X{{ cartStore.checkoutItems[0].quantity }}
							</p>
						</div>
					</v-col>
					<v-col cols="3">
						<p class="mb-1 text-right" style="font-weight: 600; font-size: 16px !important; line-height: 20px; color: #333333">
							{{ formattedPrice(cartStore.checkoutItems[0].quantity * cartStore.checkoutItems[0].price) }}
						</p>
					</v-col>
				</v-row>
				<template v-if="viewAll">
					<v-row dense v-for="item in cartStore.checkoutItems" :key="item.id">
						<v-col cols="3">
							<v-avatar color="grey-lighten-2" style="border-radius: 15px" class="mr-3 ml-0" size="100">
								<v-img cover :src="item.image"></v-img>
							</v-avatar>
						</v-col>
						<v-col cols="6">
							<div class="px-2" style="max-width: 200px; overflow: hidden; text-overflow: ellipsis">
								<p class="mb-1 text-truncate" style="font-weight: 600; font-size: 16px !important; line-height: 20px; color: #333333">
									{{ item.name }}
								</p>
								<p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696" class="text-truncate">
									Category: Stone, Art, Sculpting, Carving.
								</p>
								<p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696" class="mt-4 text-truncate">X{{ item.quantity }}</p>
							</div>
						</v-col>
						<v-col cols="3">
							<p class="mb-1 text-right" style="font-weight: 600; font-size: 16px !important; line-height: 20px; color: #333333">
								{{ formattedPrice(item.price * item.quantity) }}
							</p>
						</v-col>
					</v-row>
				</template>

				<div v-if="!viewAll" class="pt-4 d-flex align-center justify-space-between">
					<div class="d-flex align-center" style="color: var(--carbon-4, #333); font-size: 14px; font-weight: 600">
						<v-icon size="18" class="mr-2" icon="mdi mdi-shopping"></v-icon> +{{ cartStore.totalCheckoutItems - 1 }} items
					</div>
					<a @click="viewAll = !viewAll" style="color: #1273eb; font-size: 14px; cursor: pointer; font-weight: 600">View all items</a>
				</div>
				<div v-if="viewAll" class="pt-4 d-flex align-center justify-space-between">
					<div class="d-flex align-center" style="color: var(--carbon-4, #333); font-size: 14px; font-weight: 600">
						<v-icon size="18" class="mr-2" icon="mdi mdi-shopping"></v-icon> {{ cartStore.totalCheckoutItems }} items
					</div>
					<a @click="viewAll = !viewAll" style="color: #1273eb; font-size: 14px; cursor: pointer; font-weight: 600">View Less</a>
				</div>

				<div style="font-size: 14px; font-weight: 600" class="d-flex justify-space-between align-center">
					<span>Subtotal</span>
					<span>€ {{ cartStore.checkoutTotalCost }}</span>
				</div>

				<hr class="dashed-2 my-6" />

				<div class="mb-3">
					<div class="d-flex pb-3 align-center justify-space-between">
						<p style="font-weight: 500; font-size: 14px; color: #969696">Applied discount code</p>
						<v-chip rounded="lg">
							<span style="color: var(--carbon-4, #333); font-size: 14px; font-weight: 600"> 0% OFF </span>
						</v-chip>
					</div>
					<div class="d-flex pb-3 align-center justify-space-between">
						<p style="font-weight: 500; font-size: 14px; color: #969696">Discount</p>
						<p style="color: var(--carbon-4, #333); font-size: 16px; font-weight: 600" class="">€ 0.00</p>
					</div>
					<div class="d-flex pb-3 align-center justify-space-between">
						<p style="font-weight: 500; font-size: 14px; color: #969696">Shipment cost</p>
						<p style="color: var(--carbon-4, #333); font-size: 16px; font-weight: 600" class="">€ 0.00</p>
					</div>
					<hr class="dashed-2 my-6" />
					<div class="d-flex pb-3 align-center justify-space-between">
						<p style="font-weight: 500; font-size: 14px; color: #969696">Grand Total</p>
						<p style="color: var(--carbon-4, #333); font-size: 24px; font-weight: 600" class="">€ {{ cartStore.checkoutTotalCost }}</p>
					</div>
				</div>
				<v-btn to="/market_place" flat block size="x-large" class="mt-8" rounded="xl" color="green">
					<span style="font-size: 14px; font-style: normal; font-weight: 600">Continue Shopping </span>
				</v-btn>
			</v-card>
		</div>
	</v-container>
	<Mainfooter />
</template>
<script>
import { useCartStore } from "~/stores/cartStore";
import { getCurrentTransactionDate } from "~/utils/date";
import { formattedPrice } from "~/utils/price";

export default {
	data() {
		return {
			viewAll: false,
			placescards: false,
			mods: 1,
			tab: null,
			chip: "POPULAR products",
			items: [
				{
					title: "Cart",
					disabled: false,
					href: "/order/cart",
				},
				{
					title: "Checkout",
					disabled: false,
					href: "/order/checkout",
				},
				{
					title: "Payment",
					disabled: false,
					highlight: true,
				},
			],
			paymenthods: [
				{
					name: "Google Pay",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684927396/gpay-new-logo-png-removebg-preview_1_wn3n7e.png",
				},
				{
					name: "Apple Pay",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684926118/icon_q5y7el.png",
				},
				{
					name: "Stripe",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1684926107/Stripe_berhja.png",
				},
			],
		};
	},
	computed: {
		cartStore() {
			return useCartStore();
		},
		orderSummary() {
			return [
				{
					name: "Items (3):",
					value: "$1384.32",
				},
				{
					name: "Shipping & handling:",
					value: "$0.00",
				},
				{
					name: "Before tax:",
					value: "$100.00",
				},
				{
					name: "Tax collected",
					value: "$45.32",
				},
			];
		},
		buttons() {
			return [
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684591614/umoja/Vector_mgadhr.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/facebook_tup8rq.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/instagram_wogd5x.png",
				},
				{
					icon: "https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/globe-americas_annyvh.png",
				},
			];
		},
		cols() {
			const { lg, sm, md } = this.$vuetify.display;
			return lg
				? [4, 6, 6, 6, 4, 8, 4, 3, 10, 2]
				: md
				? [4, 6, 6, 12, 6, 8, 4, 3, 10, 2]
				: sm
				? [6, 12, 12, 12, 12, 12, 12, 12, 12]
				: [6, 12, 12, 12, 12, 12, 12, 12, 12];
		},
	},
	methods: {
		filt(text) {
			var newText = text.length > 50 ? text.slice(0, 50) + "..." : text;
			return newText;
		},
	},
};
</script>
