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
color: #333333;">check out</h1>

<v-divider class="my-4"></v-divider>
<p class="text-overline mb-2">1. shipping address</p>
<v-card flat class="pa-4 rounded-lg justify-space-between align-center mb-4 d-flex" v-for="n in 2" :key="n">
   <div  class=" align-center d-flex">

       <v-icon size="30"  icon="mdi mdi-circle-outline"></v-icon>
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
<v-card flat variant="outlined"  class="bg-white rounded-lg pa-4 py-6">
    
    <div  class=" align-center d-flex">
        
        <v-icon color="orange"  icon="mdi mdi-circle-slice-8" size="30"></v-icon>
<div class="text-capitalize px-4">
    <p style="font-weight: 700;
font-size: 16px;
line-height: 20px;
text-transform: uppercase;
color: #333333;" class="">add new address</p>
  
 </div>
</div>

<v-divider class="my-4"></v-divider>
<v-row class="mt-6">
                 <v-col cols="12" md="6"> 
        <p class="inputLabel">First Name</p>             
     <v-text-field placeholder="Enter your first name" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col cols="12" md="6">
                     <p class="inputLabel">Last Name</p>             
            
     <v-text-field placeholder="Enter your last name" density="comfortable"  >
         </v-text-field></v-col>
         </v-row>                 
         <p class="inputLabel">Street Address</p>             
         
         <v-text-field placeholder="Enter your street address" density="comfortable"  >
         </v-text-field>
         <v-row class="">
                 <v-col cols="12" md="6"> 
        <p class="inputLabel">City</p>             
        
        <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select City" density="comfortable"  >
         </v-select>
        
        </v-col>
                 <v-col cols="12" md="6">
                     <p class="inputLabel">State</p>             
            
      <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select State" density="comfortable"  >
         </v-select>
        </v-col>
         </v-row>             
             <v-row class="">
                 <v-col cols="12" md="6" class="pt-0"> 
        <p class="inputLabel">Zipcode</p>             
     <v-text-field placeholder="Enter your zipcode" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col cols="12" md="6" class="pt-0"> 
                     <p class="inputLabel">Mobile Number</p>             
            
     <v-text-field placeholder="+234" density="comfortable"  >
         </v-text-field></v-col>
         </v-row>       
         <v-btn class="textClass px-8" color="orange" flat>Use this address</v-btn>          
         <v-btn variant="tonal" class="textClass ml-2 px-8" color="orange" flat>Cancel</v-btn>          
         
</v-card>
   
 

<p class="text-overline mb-4 mt-6">2. payment method</p>

<v-card flat variant="outlined"  class="bg-white rounded-lg py-6 pa-4">
    
    <div  class=" align-center d-flex">
        
        <v-icon color="orange" icon="mdi mdi-circle-slice-8" size="30"></v-icon>
<div class="text-capitalize px-4">
    <p style="font-weight: 700;
font-size: 16px;
line-height: 20px;
text-transform: uppercase;
color: #333333;" class="">credit or debit card</p>
  
 </div>
</div>

<v-divider class="my-4"></v-divider>
<p class="inputLabel mt-8">Card Number Address</p>             
         
         <v-text-field placeholder="1234 5678 9123 4567" density="comfortable"  >
         </v-text-field>
<v-row class="mt-">
    
                 <v-col class="pb-0" cols="12" md="6"> 
        <p class="inputLabel">Expiry date</p>             
     <v-text-field placeholder="15/25" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col class="pb-0" cols="12" md="6">
                     <p class="inputLabel">CVV</p>             
            
     <v-text-field placeholder="254" density="comfortable"  >
         </v-text-field></v-col>
         </v-row> 
         <v-checkbox color="orange">
       <template v-slot:label>
         <div class="font-weight-medium">
            Save this credit card for later use
             
         </div>
       </template>
     </v-checkbox>                
         <p class="inputLabel">Street Address</p>             
         
         <v-text-field placeholder="Enter your street address" density="comfortable"  >
         </v-text-field>
         <v-row class="">
                 <v-col cols="12" md="4"> 
        <p class="inputLabel">City</p>             
        
        <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select City" density="comfortable"  >
         </v-select>
        
        </v-col>
                 <v-col cols="12" md="4">
                     <p class="inputLabel">State</p>             
            
      <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select State" density="comfortable"  >
         </v-select>
        </v-col>
                 <v-col cols="12" md="4">
                     <p class="inputLabel">Zipcode</p>             
            
                     <v-text-field placeholder="Enter your zipcode" density="comfortable"  >
         </v-text-field>
        </v-col>
         </v-row>  
         <v-btn class="textClass px-8" color="orange" flat>Use this card</v-btn>          
         <v-btn variant="tonal" class="textClass ml-2 px-8" color="orange" flat>Cancel</v-btn>          
         
</v-card>
   <v-card flat class="pa-4 rounded-lg justify-space-between align-center my-4 d-flex" v-for="n in paymenthods" :key="n.name">
   <div>

       <div  class=" align-center d-flex">
           
           <v-icon size="30"  icon="mdi mdi-circle-outline"></v-icon>
           <div class="text-capitalize px-4">
               <p class=" ">{{n.name}}</p>
            </div>
        </div>
    </div>
    <v-spacer></v-spacer>
    <v-avatar style="width: 100px;max-height: 20px;" rounded="0" size="40">

        <v-img  :src="n.image"></v-img>
    </v-avatar>
</v-card>


<p class="text-overline mb-4 mt-6">3. shipping and handling</p>
<p style="font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #333333;">Available International Shipping        <v-icon class="ml-1" color="grey" icon="mdi mdi-alert-circle-outline"></v-icon>
</p>
<v-card flat class="pa-4 py-6 rounded-lg justify-space-between align-center my-4 d-flex">

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
    <v-spacer></v-spacer>
  <div>
    <v-chip size="x-small" style="letter-spacing: 1px;"  class=" mr-4 smallText text-uppercase rounded-sm">default delivery</v-chip> 
    <v-icon color="orange" icon="mdi mdi-circle-slice-8" size="30"></v-icon>

  </div>
</v-card>
</v-col>
<v-col cols="12" lg="4">
<v-card style="border-radius: 10px;" flat class="pa-4 pt-6 mb-4">
    <v-btn to="/order/summary" flat block size="x-large" color="green"> Proceed to checkout</v-btn>
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