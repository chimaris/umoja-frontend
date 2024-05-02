<template>
	<Header2 />
	<div>
		<v-container style="max-width: 1400px; width: 100%">
			<v-breadcrumbs class="breadcrumbstick pl-0" v-model="item" active-class="text--green" :items="items">
				<template v-slot:divider>
					<v-icon color="#969696" icon="mdi mdi-chevron-right"></v-icon>
				</template>
				<template v-slot:title="{ item }">
					<span
						v-if="item.highlight"
						style="color: #2c6e63; font-size: 14px; font-weight: 600; line-height: 20px; /* 142.857% */ letter-spacing: -0.14px"
					>
						{{ item.title }}
					</span>
					<span
						v-else
						style="
							color: #969696;
							font-size: 14px;
							font-weight: 500;
							opacity: 1 !important;
							line-height: 20px; /* 142.857% */
							letter-spacing: -0.14px;
						"
					>
						{{ item.title }}
					</span>
				</template>
			</v-breadcrumbs>
			<v-divider class="mb-4"></v-divider>
			<v-row class="pt-2">
				<v-col cols="12" lg="8">
					<v-card flat class="cardStyle bg-white rounded-lg py-6 pa-4">
						<p class="chkt mb-8">Select Payment Method</p>

						<v-card flat class="mb-4 cardStyle">
							<div class="align-center justify-space-between d-flex">
								<div class="d-flex align-center">
									<v-icon color="green" icon="mdi mdi-circle-slice-8" size="30"></v-icon>
									<div class="text-capitalize px-4">
										<p style="font-weight: 500; font-size: 14px; line-height: 24px; color: #333333" class="">Credit Card</p>
									</div>
								</div>
								<div class="d-flex align-center justify-end">
									<v-img contain src="https://res.cloudinary.com/payhospi/image/upload/v1691581811/logo_shmb54.png" width="53" height="auto"></v-img>
									<v-img contain src="https://res.cloudinary.com/payhospi/image/upload/v1691581811/logo2_jpei5o.png" width="53" height="auto"></v-img>
								</div>
							</div>

							<v-divider class="my-4"></v-divider>

							<v-text-field placeholder="Card number" density="comfortable"> </v-text-field>
							<v-text-field placeholder="Name on card" density="comfortable"> </v-text-field>
							<v-row class="mb-1">
								<v-col class="pb-0" cols="12" md="6">
									<v-text-field placeholder="Expiration date (MM/YY)" density="comfortable"> </v-text-field
								></v-col>
								<v-col class="pb-0" cols="12" md="6"> <v-text-field placeholder="CVV" density="comfortable"> </v-text-field></v-col>
							</v-row>
							<v-btn class="textClass px-8" rounded="xl" color="green" flat>Use this card</v-btn>
							<v-btn variant="tonal" class="textClass ml-2 px-8" rounded="xl" color="green" flat>Cancel</v-btn>
						</v-card>
						<v-card
							flat
							:color="n.cost == '0.00' ? '#EDF3F0' : ''"
							class="pa-4 cardStyle rounded-lg justify-space-between align-center my-4 d-flex"
							v-for="n in paymenthods"
							:key="n"
						>
							<div class="align-center d-flex">
								<v-icon
									size="20"
									:color="n.cost == '0.00' ? '#2C6E63' : ''"
									:icon="n.cost == '0.00' ? 'mdi mdi-radiobox-marked' : 'mdi mdi-circle-outline'"
								></v-icon>
								<div class="text-capitalize px-4">
									<p style="font-weight: 500; font-size: 14px; line-height: 24px; color: #333333" class="">{{ n.name }}</p>
								</div>
							</div>
							<v-spacer></v-spacer>
							<v-avatar style="width: 100px; max-height: 20px" rounded="0" size="40">
								<v-img :src="n.image"></v-img>
							</v-avatar>
						</v-card>
					</v-card>

					<v-card flat class="cardStyle bg-white rounded-lg my-4 pa-4">
						<p class="chkt mb-">Billing Address</p>
						<v-checkbox hide-details="" class="my-4" color="green">
							<template v-slot:label>
								<div style="font-size: 14px" class="font-weight-medium">Same as my shipping address</div>
							</template>
						</v-checkbox>
						<p class="inputLabel">Phone Number*</p>

						<v-text-field placeholder="Enter your phone number" density="comfortable"> </v-text-field>
						<p class="inputLabel">Street Name and House Number*</p>

						<v-text-field placeholder="Enter your street address" density="comfortable"> </v-text-field>
						<v-row class="">
							<v-col cols="12" md="6">
								<p class="inputLabel">City</p>

								<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select City" density="comfortable"> </v-select>
							</v-col>
							<v-col cols="12" md="6">
								<p class="inputLabel mb-8"></p>

<<<<<<< HEAD
								<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select region" density="comfortable"> </v-select>
							</v-col>
						</v-row>
						<p class="inputLabel">Zipcode</p>
=======
<v-card flat class="cardStyle bg-white rounded-lg my-4 pa-4">
    <p class="chkt mb-">Billing Address</p>
    <v-checkbox hide-details="" class="my-4" color="green">
       <template v-slot:label>
         <div style="font-size: 14px;" class="font-weight-medium">
            Same as my shipping address
             
         </div>
       </template>
     </v-checkbox>
     <p class="inputLabel">Phone Number*</p>             
         
         <v-text-field placeholder="Enter your phone number" density="comfortable"  >
         </v-text-field>
     <p class="inputLabel">Street Name and House Number*</p>             
         
         <v-text-field placeholder="Enter your street address" density="comfortable"  >
         </v-text-field>
         <v-row class="">
                 <v-col cols="12" md="6"> 
        <p class="inputLabel">City</p>             
        
        <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select City" density="comfortable"  >
         </v-select>
        
        </v-col>
                 <v-col cols="12" md="6">
                     <p class="inputLabel mb-8"></p>             
            
      <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select region" density="comfortable"  >
         </v-select>
        </v-col>
                
            </v-row> 
            <p class="inputLabel">Zipcode</p>             
   
            <v-text-field placeholder="Enter your zipcode" density="comfortable"  >
</v-text-field>
<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select country" density="comfortable"  >
         </v-select>
<v-btn class="textClass px-8" color="green" flat>Use this card</v-btn>          
         <v-btn variant="tonal" class="textClass ml-2 px-8" color="green" flat>Cancel</v-btn>          
         
</v-card>
<v-card flat class="cardStyle bg-white rounded-lg  pa-4">
    <p class="chkt mb-">Remember my information</p>
    <v-checkbox hide-details="" color="green">
       <template v-slot:label>
         <div style="font-size: 14px;" class="font-weight-medium">
            Save my information for future checkout
             
         </div>
       </template>
     </v-checkbox>
</v-card>
</v-col>
<Cartsummary :route="'/order/summary'" :text="'Proceed'"  @handleSubmit="handlePayment()"/>
</v-row> 
>>>>>>> c2c9a7469c3172189d31a3bdc6f0b674b6035791

						<v-text-field placeholder="Enter your zipcode" density="comfortable"> </v-text-field>
						<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select country" density="comfortable"> </v-select>
						<v-btn class="textClass px-8" color="green" flat>Use this card</v-btn>
						<v-btn variant="tonal" class="textClass ml-2 px-8" color="green" flat>Cancel</v-btn>
					</v-card>
					<v-card flat class="cardStyle bg-white rounded-lg pa-4">
						<p class="chkt mb-">Remember my information</p>
						<v-checkbox hide-details="" color="green">
							<template v-slot:label>
								<div style="font-size: 14px" class="font-weight-medium">Save my information for future checkout</div>
							</template>
						</v-checkbox>
					</v-card>
				</v-col>
				<Cartsummary :route="'/order/summary'" :text="'Proceed'" />
			</v-row>
		</v-container>
	</div>
	<Mainfooter />
</template>
<script>
export default {
<<<<<<< HEAD
	data() {
		return {
			placescards: false,
			mods: 1,
			tab: null,
			chip: "POPULAR products",
			shippingTypes: [
				{
					title: "Free Shipping",
					duration: "7-30 Business Days",
					cost: "0.00",
				},
				{
					title: "Regular Shipping",
					duration: "3-14 Business Days",
					cost: "7.50",
				},
				{
					title: "Express Shipping",
					duration: "1-3 Business Days",
					cost: "22.50",
				},
			],
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
					name: "Paypal",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1691582666/pay-pal-1_dtxv1k.png",
				},
				{
					name: "Neteller",
					image: "https://res.cloudinary.com/payhospi/image/upload/v1691582681/neteller-1_mjjfeu.png",
				},
			],
		};
	},
	computed: {
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
=======
  data() {
    return {
        placescards:false,
        mods:1,
        tab: null,
        chip: 'POPULAR products',
        shippingTypes:[
        {
            title: 'Free Shipping',
            duration: '7-30 Business Days',
            cost: '0.00',
        },
        {
            title: 'Regular Shipping',
            duration: '3-14 Business Days',
            cost: '7.50',
        },
        {
            title: 'Express Shipping',
            duration: '1-3 Business Days',
            cost: '22.50',
        },
        ],
        items: [
                {
                    title: 'Cart',
                    disabled: false,
                    href: '/order/cart',
                },
                {
                    title: 'Checkout',
                    disabled: false,
                    href: '/order/checkout',
                },
                {
                    title: 'Payment',
                    disabled: false,
                    highlight: true
                },
            ],
     paymenthods:[
        {
            name: 'Paypal',
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1691582666/pay-pal-1_dtxv1k.png'
        },
        {
            name: 'Neteller',
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1691582681/neteller-1_mjjfeu.png'
        },
     ]
    };
  },
  computed: {
    orderSummary(){
        return [
            {
                name: 'Items (3):',
                value: '$1384.32',
            },
            {
                name: 'Shipping & handling:',
                value: '$0.00',
            },
            {
                name: 'Before tax:',
                value: '$100.00',
            },
            {
                name: 'Tax collected',
                value: '$45.32',
            },
        ]
    },
buttons(){
    return [{
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684591614/umoja/Vector_mgadhr.png',

    },
    {
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/facebook_tup8rq.png',
    },
    {
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/instagram_wogd5x.png',
    },
    {
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/globe-americas_annyvh.png',
    },
]
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
    handlePayment() {
        this.$router.push('/order/summary')
    },
filt(text){

var newText = text.length > 50 ? text.slice(0, 50) +'...' : text
   return newText

}
  },
>>>>>>> c2c9a7469c3172189d31a3bdc6f0b674b6035791
};
</script>
