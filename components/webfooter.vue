<template>
      <v-container style=" position: relative;   max-width: 1417px;" class="pt-0 pb-12" fluid>

<v-card color="#1E1E1E" flat class="rounded-xl" height="auto" min-height="100vh">
   
 
    <v-container class="pt-12">
<v-row class="mt-12">
    <v-col cols="12" class="pt-0 alignc" lg="6">
        <v-avatar class="mb-6" style="width:130px; height:54px" rounded="0" flat>
                    <v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689512117/frame-4_cawhs0.png">
                    </v-img>
                </v-avatar >
                <p style="max-width: 487px;
font-size: 48px;
font-weight: 600;
background: linear-gradient(90deg, #CECECE 0%, rgba(206, 206, 206, 0.58) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
line-height: 120%; /* 57.6px */
letter-spacing: -1.44px;" class="bigTitle">
                    Connect, Learn, Experience a unique African marketplace.  
                </p>
                <p style="color: var(--carbon-3, #969696);
font-size: 20px;
font-weight: 400;max-width: 487px;
line-height: 160%; /* 32px */
letter-spacing: -0.6px;" class="mt-4">Vendors and users connect in the Umoja digital African market</p>

<v-btn @click="$emit('opendialog')" flat size="large" variant="outlined" width="188" color="#EDEDED" class="my-12 rounded-xl" >
            <span style="font-size: 14px;">
                Join the Waitlist
            </span>
            </v-btn>
    </v-col>
    <v-col cols="12" lg="6">
        <v-row>
            <v-col cols="12" lg="4">
                <p style="color: #FFF;
font-size: 18px;
font-weight: 600;" class="alignc">Product</p>
<div class="mt-8">

    <p style="color: var(--carbon-2, #CECECE);

font-size: 14px;
font-weight: 400;
letter-spacing: -0.42px;" class="alignc mb-8" v-for="n in ['How it works', 'Contact Us', 'Join waitlist']">{{ n }}</p>
</div>
            </v-col>
            <v-col cols="12" lg="4">
                <p style="color: #FFF;
font-size: 18px;
font-weight: 600;" class="alignc">Company</p>
<div class="mt-8">

    <p style="color: var(--carbon-2, #CECECE);

font-size: 14px;
font-weight: 400;
letter-spacing: -0.42px;" class=" alignc mb-8" v-for="n in ['About Us', 'FAQ', 'Privacy policy']">{{ n }}</p>
</div>
            </v-col>
            <v-col cols="12" lg="6"></v-col>
            
        </v-row>
</v-col>
</v-row>
<v-divider class="my-12 " style="height:2px" color="#969696"></v-divider>
     <p  style="margin-top:;color: var(--carbon-2, #CECECE);
font-size: 14px;
font-weight: 400;
line-height: 180%; /* 25.2px */">Umoja - Connecting you to Quality African Products Worldwide! Discover, buy, and sell authentic African products through our platform. Umoja directly connects users to vendors, providing a unique opportunity to explore diverse African cultures. With a customized Vendor Dashboard and an efficient order management system, you gain full transparency and control over your e-commerce business. Our integrated apps make managing your business seamless. Join Umoja today and experience the world of African goods at your fingertips!</p>

<v-sheet style="border-radius: 15px;
background: var(--carbon-5, #2A2A2A);" class="px-6 py-4 my-12 align-center d-flex justify-space-between">
<v-row >
<v-col cols="12" md="6">
    <p class="alignc" style="color: var(--carbon-2, #CECECE);
font-size: 14px;
font-weight: 400;
line-height: 180%; /* 25.2px */
letter-spacing: -0.42px;">© Copyright 2023. All Rights Reserved.</p>
</v-col>
<v-col cols="12" md="6">
<div class="alignc">
    <v-btn color="#333333" flat icon="mdi mdi-instagram" class="mx-2"  rounded="xl" style="color: #CECECE;"></v-btn>
    <v-btn color="#333333" flat icon="mdi mdi-twitter" class="mx-2" rounded="xl" style="color: #CECECE;"></v-btn>
    <v-btn color="#333333" flat icon="mdi mdi-facebook" class="mx-2"  rounded="xl" style="color: #CECECE;"></v-btn>
    <v-btn color="#333333" flat icon="mdi mdi-linkedin" rounded="xl" style="color: #CECECE;"></v-btn>
</div></v-col>
</v-row>
</v-sheet>

    </v-container>

</v-card>
</v-container>
</template>