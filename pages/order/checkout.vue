<template>
    <Header2 />
    <div >
     
    <v-container style="max-width:1400px ;width: 100%;">
          <v-breadcrumbs class="pl-0" v-model="item" active-class="text--green" :items="items">
      <template v-slot:divider>
        <v-icon color="#969696" icon="mdi mdi-chevron-right"></v-icon>
      </template>
      <template v-slot:title="{ item }">
     <span v-if="item.highlight" style="color:  #2C6E63;
font-size: 14px;
font-weight: 600;
line-height: 20px; /* 142.857% */
letter-spacing: -0.14px;
">
         {{ item.title }}
     </span>
     <span v-else style="color:  #969696;
font-size: 14px;
font-weight: 500;
opacity: 1!important;
line-height: 20px; /* 142.857% */
letter-spacing: -0.14px;
">
         {{ item.title }}
     </span>
    </template>
    </v-breadcrumbs>
    <v-divider class="mb-4"></v-divider>
    <v-row class="pt-2">
                <v-col cols="12" lg="8" >  
        <v-card flat class="cardStyle">
<h1 class="chkt">Select Shipping Country</h1>
        <v-select style="border-radius: 6px;
border: 1px solid var(--carbon-2, #CECECE);" hide-details="" append-inner-icon="mdi mdi-chevron-down" placeholder="Select country" density="compact" class="mt-4" variant="outlined"  >
         </v-select>
        
<v-divider class="my-8"></v-divider>
<h1 class="chkt">Shipping Address</h1>
<v-card flat class="pa-4 cardStyle rounded-lg justify-space-between align-center my-4 d-flex" v-for="n in 2" :key="n">
   <div  class=" align-center d-flex">

       <v-icon size="20"   icon="mdi mdi-circle-outline"></v-icon>
       <div class="text-capitalize px-4">
           <p style="" class=" addressName mb-2">david brooklyn</p>
           <p class="adddressPhone mb-1">Wald
            steingartenstrasse 13,  Vienna, Austria 1020</p>
           <p class="adddressPhone ">+43 664 3174106</p>
        </div>
    </div>
    <v-spacer></v-spacer>
        <v-btn size="small" class="smallText" variant="text" color="blue">Edit Address <v-icon class="ml-2" icon="mdi mdi-pencil-outline"></v-icon></v-btn>
</v-card>
<v-card flat   class="cardStyle bg-white rounded-lg mb-4 pa-4 py-6">
    
    <div  class=" align-center d-flex">
        
        <v-icon color="green"  icon="mdi mdi-circle-slice-8" size="20"></v-icon>
<div class="text-capitalize px-4">
    <p style="font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #333333;" class="">Add new address</p>
  
 </div>
</div>

<v-divider class="my-4"></v-divider>

<v-row class="mt-6">
                 <v-col class="pb-0" cols="12">
                    <p class="inputLabel">Full Name<span class="mb-2">*</span></p>             
     <v-text-field placeholder="Enter your full name" density="comfortable"  >
         </v-text-field>    
                </v-col> 
                 <v-col cols="12" class="pt-0" md="6"> 
        <p class="inputLabel">Email Address<span class="mb-2">*</span></p>             
     <v-text-field placeholder="Enter your email address" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col cols="12" md="6">
                     <p class="inputLabel">Confirmation email<span class="mb-2">*</span></p>             
            
     <v-text-field placeholder="Enter your confirmation email" density="comfortable"  >
         </v-text-field></v-col>
         </v-row>                 
         <p class="inputLabel">Phone Number<span class="mb-2">*</span></p>             
         
         <v-text-field placeholder="Enter your phone number (only digits)" density="comfortable"  >
         </v-text-field>
         <p class="inputLabel">Street Name and House Number*<span class="mb-2">*</span></p>             
         
         <v-text-field placeholder="Enter your Street Name and House Number" density="comfortable"  >
         </v-text-field>
         <v-row class="">
                 <v-col cols="12" md="6"> 
        <p class="inputLabel">City<span class="mb-2">*</span></p>             
        
        <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select City" density="comfortable"  >
         </v-select>
        
        </v-col>
                 <v-col cols="12" md="6">
                     <p class="inputLabel mb-8"> </p>             
            
      <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select region" density="comfortable"  >
         </v-select>
        </v-col>
         </v-row>   
        <p class="inputLabel">Postal code<span class="mb-2">*</span></p>             
     <v-text-field placeholder="Enter your zipcode" density="comfortable"  >
         </v-text-field>           
           
         <v-btn class="textClass px-8" color="green" flat>Use this address</v-btn>          
         <v-btn variant="tonal" class="textClass ml-2 px-8" color="green" flat>Cancel</v-btn>          
         
</v-card>
</v-card>
<v-card flat   class="cardStyle bg-white rounded-lg my-4 py-6 pa-4">
    <v-card flat :color="n.cost == '0.00'? '#EDF3F0': ''"   class="pa-4 cardStyle rounded-lg justify-space-between align-center my-4 d-flex" v-for="n in shippingTypes" :key="n">
   <div  class=" align-center d-flex">

       <v-icon size="20"   :color="n.cost == '0.00'? '#2C6E63': ''" :icon="n.cost == '0.00'? 'mdi mdi-radiobox-marked':'mdi mdi-circle-outline'"></v-icon>
       <div class="text-capitalize px-4">
           <p style="" class=" addressName mb-2">{{n.title}}</p>
           <p class="adddressPhone mb-1">{{n.duration}}</p>
        </div>
    </div>
    <v-spacer></v-spacer>
    <p style="" class=" addressName mb-2">€{{n.cost}}</p>

</v-card>
    </v-card>

</v-col>
<Cartsummary :route="'/order/payment'" :text="'Continue to Payment'"/>
</v-row> 

    </v-container>  
  </div>
<Mainfooter />
</template>
<script>
export default {
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
                    highlight: true,
                    href: '/order/checkout',
                },
                {
                    title: 'Payment',
                    disabled: false,
                },
            ],
     paymenthods:[
        {
            name: 'Google Pay',
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1684927396/gpay-new-logo-png-removebg-preview_1_wn3n7e.png'
        },
        {
            name: 'Apple Pay',
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1684926118/icon_q5y7el.png'
        },
        {
            name: 'Stripe',
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1684926107/Stripe_berhja.png'
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
filt(text){

var newText = text.length > 50 ? text.slice(0, 50) +'...' : text
   return newText

}
  },
};
</script>