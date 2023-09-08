<template>
    <v-container style=" position: relative;" :style="'max-width:'+maxw" class="pt-0 px-0 footbot pb-12" fluid>

<v-card color="" flat class="rounded-xl px-3" height="auto" min-height="100vh">
 

  <v-container  style="max-width:1400px" class="pt-12">
    <v-divider class="my-12 " style="height:2px" color="#"></v-divider>

<v-row style="margin-bottom: 90px;" class="row0 mt-12">
  <v-col cols="12" class="pt-0 " lg="5">
      <v-avatar class="mb-4" style="width:130px; height:54px" rounded="0" flat>
                  <v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1690545241/frame-4_q89xhq.png">
                  </v-img>
              </v-avatar >
              <p 
              style="max-width: 377px;
                    font-size: 14px;
                    font-weight: 400;
                    background: linear-gradient(90deg, #CECECE 0%, rgba(206, 206, 206, 0.58) 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    line-height: 180%; /* 57.6px */
                    letter-spacing: -0.14px;" class="bigTitle">
                  Connect, Learn, Experience a unique African marketplace. Vendors and users connect in the Umoja digital African market.
              </p>
<p class="mt-6" style="color: #000;
font-size: 16px;
font-weight: 600;
line-height: 120%; /* 19.2px */
letter-spacing: -0.48px;">Accepted Payments</p>
<div class="mt-4" style="max-width:230px;">
<v-row  no-gutters>
    <v-col class="mb-1 pr-1 " v-for="(n, i) in payms" :key="i" cols="3">
        <v-img width="100%" height="auto" :src="n"></v-img>
    </v-col>
</v-row>
</div>
  </v-col>
  <v-col cols="12" lg="7">
      <v-row>
          <v-col v-for="(n, i) in categoriesData" :key="i" cols="12" lg="3">
              <p style="color: #000;
font-size: 18px;
font-weight: 600;" class="pl-4">{{n.title}}</p>
<div class="mt-6">

  <p style="color: var(--carbon-2, #000);

font-size: 14px;
font-weight: 400;
letter-spacing: -0.42px;" class=" text-left mb-2" v-for="b in n.items">  <v-btn :to="b.route.toLowerCase()"  variant="text" class="mx-2" flat >
            {{b.name}}
          </v-btn></p>

</div>
          </v-col>
       
          
      </v-row>
</v-col>
</v-row>
<v-divider class="my-12 " style="height:2px" color="#"></v-divider>
   <p  style="margin-top:;color: var(--carbon-2, #000);
font-size: 14px;
font-weight: 400;
line-height: 180%; /* 25.2px */">Umoja - Connecting you to Quality African Products Worldwide! Discover, buy, and sell authentic African products through our platform. Umoja directly connects users to vendors, providing a unique opportunity to explore diverse African cultures. With a customized Vendor Dashboard and an efficient order management system, you gain full transparency and control over your e-commerce business. Our integrated apps make managing your business seamless. Join Umoja today and experience the world of African goods at your fingertips!</p>
<v-divider class="my-12 " style="height:2px" color="#"></v-divider>

<v-sheet style="border-radius: 15px;" class=" pb-4 mb- align-center d-flex justify-space-between">
<v-row >
<v-col cols="12" class="d-flex align-center justyc" md="3">
    <v-btn size="small" variant="text"><v-icon icon="mdi mdi-store" color="green" size="18" class="mr-2"></v-icon> <span style="color: var(--carbon-4, #333);
font-size: 14px;
font-weight: 500;
line-height: 120%; /* 16.8px */
letter-spacing: -0.42px;"> Become a Vendor</span></v-btn>
    <v-btn size="small" variant="text"><v-icon color="green" size="18" class="mr-2" icon="mdi mdi-information"></v-icon> <span style="color: var(--carbon-4, #333);
font-size: 14px;
font-weight: 500;
line-height: 120%; /* 16.8px */
letter-spacing: -0.42px;"> Help Center</span></v-btn>
    </v-col>
<v-col cols="12" class="d-flex align-center justyc" md="3">
    <v-btn size="small" variant="text"> <span style="color: var(--carbon-4, #333);
font-size: 14px;
font-weight: 500;
line-height: 120%; /* 16.8px */
letter-spacing: -0.42px;"> Terms of Use</span></v-btn>
    <v-btn size="small" variant="text"> <span style="color: var(--carbon-4, #333);
font-size: 14px;
font-weight: 500;
line-height: 120%; /* 16.8px */
letter-spacing: -0.42px;"> Privacy Policy</span></v-btn>
    </v-col>

<v-col cols="12" class="d-flex align-center justyc" md="3">
  <p class=" alignc" style="
font-size: 14px;width: 100%;
font-weight: 400;
line-height: 180%; /* 25.2px */
letter-spacing: -0.42px;">© Copyright 2023. All Rights Reserved.</p>
</v-col>
<v-col cols="12"  class="d-flex justyc align-center" md="3">
<div class="alignc w-100 textr">
  <v-btn color="#F8F8F8" flat icon="mdi mdi-instagram" class="mx-2 dark-hover"  rounded="xl" style="color: #333;"></v-btn>
  <v-btn color="#F8F8F8" flat icon="mdi mdi-twitter" class="mx-2 dark-hover" rounded="xl" style="color: #333;"></v-btn>
  <v-btn color="#F8F8F8" flat icon="mdi mdi-facebook" class="mx-2 dark-hover"  rounded="xl" style="color: #333;"></v-btn>
  <v-btn color="#F8F8F8" flat icon="mdi mdi-linkedin" class=" dark-hover" rounded="xl" style="color: #333;"></v-btn>
</div></v-col>
</v-row>
</v-sheet>

  </v-container>

</v-card>
</v-container>
</template>
<script>
export default {
  props: ['maxwidth'],
  computed: {
  maxw() {
    return this.maxwidth? this.maxwidth : '1400px'
  }
},
  data() {
    return {
      
categoriesData: [
  {
    title: 'Categories',
    items: [
      { name: 'Fashion', route: 'Fashion' },
      { name: 'Home Decoration', route: 'Home-Decoration' },
      { name: 'Art', route: 'Art' },
      { name: 'Cosmetics', route: 'Cosmetics' }
    ]
  },
  {
    title: 'About Us',
    items: [
      { name: 'About Umoja', route: 'About-Umoja' },
      { name: 'Careers', route: 'Careers' },
      { name: 'News & Blog', route: 'News-Blog' },
      { name: 'Help', route: 'Help' },
      { name: 'Press Center', route: 'Press-Center' },
      { name: 'Shop by Location', route: 'Shop-by-Location' },
      { name: 'Affiliate & Partners', route: 'Affiliate-Partners' },
      { name: 'Ideas & Guides', route: 'Ideas-Guides' }
    ]
  },
  {
    title: 'Services',
    items: [
      { name: 'Mobile App', route: 'Mobile-App' },
      { name: 'Shipping & Delivery', route: 'Shipping-Delivery' },
      { name: 'Order Pickup', route: 'Order-Pickup' },
      { name: 'Account Signup', route: 'Account-Signup' }
    ]
  },
  {
    title: 'Help',
    items: [
      { name: 'Umoja Help', route: 'Umoja-Help' },
      { name: 'Returns', route: 'Returns' },
      { name: 'Track Orders', route: 'Track-Orders' },
      { name: 'Contact Us', route: 'Contact-Us' },
      { name: 'Feedback', route: 'Feedback' },
      { name: 'Security & Fraud', route: 'Security-Fraud' }
    ]
  }
],      
      
      payms: ['https://res.cloudinary.com/payhospi/image/upload/v1690546033/logo_kyqdsa.png','https://res.cloudinary.com/payhospi/image/upload/v1690546096/frame-736_gvcp91.png',
  'https://res.cloudinary.com/payhospi/image/upload/v1690546117/frame-740_hguwrg.png',
  'https://res.cloudinary.com/payhospi/image/upload/v1690546170/frame-741_rmvrys.png',
  'https://res.cloudinary.com/payhospi/image/upload/v1690546012/logo_k0mxoj.png',
  'https://res.cloudinary.com/payhospi/image/upload/v1690546013/frame-736_cg1hxd.png',
  'https://res.cloudinary.com/payhospi/image/upload/v1690546013/frame-740_qvnaty.png',
  'https://res.cloudinary.com/payhospi/image/upload/v1690546012/frame-741_xorgm9.png'

  ]
    }
},

}
</script>