<template>
    <userHeader />
    <div style="background-color: #F7F7F7;">

    <v-container style="min-height: ;width: 100%;">
        <v-row class="pt-2">
                <v-col cols="12" lg="8" >  
<h1 style="font-weight: 800;
font-size: 32px;
line-height: 40px;
text-transform: uppercase;
color: #333333;">summary</h1>

<v-divider class="my-4"></v-divider>

<v-card flat  class="bg-white rounded-lg mb-4 pa-4 py-6">
    
    <div  class=" align-center d-flex">
        
        <v-icon color="orange" size="30" icon="mdi mdi-check-circle"></v-icon>
<div class="d-flex align-center w-100 justify-space-between px-4">
    <p style="font-weight: 800;
font-size: 24px;
line-height: 30px;
text-transform: uppercase;
color: #333333;" class="">1. Address Details</p>
          <v-btn size="small" class="smallText" variant="text" color="blue">Change Address <v-icon class="ml-2" icon="mdi mdi-pencil-outline"></v-icon></v-btn>

 </div>
</div>

<v-divider class="my-4"></v-divider>
    <p class="cardtitleuppercase mb-2">thatdesignpro</p>
   <p class="carddetails">waldsteingartenstrasse 13,  Vienna, Austria 1020</p>
   <p class="carddetails">+43 664 3174106</p>
</v-card>
<v-card flat  class="bg-white rounded-lg mb-4 pa-4 py-6">
    
    <div  class=" align-center d-flex">
        
        <v-icon color="orange" size="30" icon="mdi mdi-check-circle"></v-icon>
<div class="d-flex align-center w-100 justify-space-between px-4">
    <p style="font-weight: 800;
font-size: 24px;
line-height: 30px;
text-transform: uppercase;
color: #333333;" class="">2. Payment method</p>
          <v-btn size="small" class="smallText" variant="text" color="blue">Change payment method <v-icon class="ml-2" icon="mdi mdi-pencil-outline"></v-icon></v-btn>

 </div>
</div>

<v-divider class="my-4"></v-divider>
    <p class="cardtitleuppercase mb-2 d-flex align-center"><v-icon class="mr-2" size="16" color="grey-darken-1" icon="fa-brands fa-cc-mastercard"></v-icon>MASTERCARD</p>
   <p class="carddetails"><span class="text-blue-darken-2">Billing Address: </span>Same as shipping address</p>
</v-card>
<v-card flat  class="bg-white rounded-lg mb-4 pa-4 py-6">
    
    <div  class=" align-center d-flex">
        
        <v-icon color="orange" size="30" icon="mdi mdi-check-circle"></v-icon>
<div class="d-flex align-center w-100 justify-space-between px-4">
    <p style="font-weight: 800;
font-size: 24px;
line-height: 30px;
text-transform: uppercase;
color: #333333;" class="">3. shipping and handling</p>
     <v-chip size="x-small" style="letter-spacing: 1px;"  class=" mr-4 smallText text-uppercase rounded-sm">default delivery</v-chip> 

 </div>
</div>

<v-divider class="my-4"></v-divider>
<div  class=" align-center d-flex">
           <v-btn color="grey-lighten-2" height="auto" flat class="pa-1 px-4 rounded-lg " > <v-img width="100" src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png"></v-img></v-btn>
           <div class="text-capitalize px-4">
               <p style="font-weight: 800;
font-size: 16px;
line-height: 20px;
color: #000000;" class="">Umoja Delivery</p>
               <p class="adddressPhone">Delivery: 2-3 weeks (only on working days)</p>
            </div>
        </div>
</v-card>

</v-col>
<v-col cols="12" lg="4">
<v-card style="border-radius: 10px;" flat class="pa-4 pt-6  mb-4">
    <v-btn to="/" flat block size="x-large" color="green"> Place Order</v-btn>
<p style="font-weight: 400;
font-size: 14px;
line-height: 24px;" class="mt-4">       By placing your order, you agree to umojas’s 
 
 <a
        target="_blank" style="color:#0076FF;text-decoration:none"
        href="#"
        v-bind="props"
        @click.stop
      >
      Privacy Policy
      </a> and 
      
 <a
        target="_blank"
        href="#" style="color:#0076FF;text-decoration:none"
        v-bind="props"
        @click.stop
      >
      Condition of Use.
      </a></p>
      <v-divider class="my-4"></v-divider>
<div class="mb-3">
    <p style="font-weight: 800;
font-size: 16px;
line-height: 20px;
text-transform: uppercase;
color: #333333;" class=" mb-4">order summary</p>
<div v-for="n in orderSummary" :key="n.name" class="d-flex  py-1 align-center justify-space-between">
<p style="font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #969696;">{{n.name}}</p>
    <p style="font-weight: 800;
font-size: 16px;
line-height: 20px;
color: #333333;" class="">{{n.value}}</p>
</div>
<v-divider class="my-4"></v-divider>
<div class="d-flex   align-center justify-space-between">
<p style="font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #C20052;">Order total</p>
    <p style="color:#C20052" class="bigpriceClass">$1,580.32</p>
</div>


</div>
</v-card>
<v-card style="border-radius: 10px;" flat class="pa-4 py-6">

<p class="inputLabel">Discount Voucher</p>             
<div class="d-flex w-100 align-center">

        
        <v-text-field  hide-details="" placeholder="4QA13ZW" density="comfortable"  >
        </v-text-field>
<v-btn flat  size="large" class="ml-3" color="green"> Apply</v-btn>
</div>
</v-card>
</v-col>
</v-row> 
<v-row>
          
            <v-col class="pt-0" cols="12" xs="12">
                <v-sheet color="transparent" class="pt-0">
    

        <p style="font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #CECECE;" class="font-weight-regular pt-12 mt-12 mb-4">©2022 Umoja. All Rights Reserved.</p>
</v-sheet>
            </v-col>
        </v-row>
    </v-container>    </div>

</template>
<script>
export default {
  data() {
    return {
        placescards:false,
        mods:1,
        tab: null,
        chip: 'POPULAR products',

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