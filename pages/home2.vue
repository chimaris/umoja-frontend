<template>
<Header2 :maxwidth="'1200px'"/>
<div class="pt-12" style="background: #FDF5E7;" >
    <v-container  style="max-width:1200px" class="mt-4">
     
<v-row class="pb-6">
    <v-col cols="12" lg="7">
        <p style="color:#1E1E1E;
font-size: 64px;
font-weight: 600;
line-height: 120%;
letter-spacing: -1.92px;" class="bigTitle ">
<span style="color: #2C6E63;">
Explore
</span> a new digital African marketplace from any part of the world!</p>
    </v-col>
    <v-col cols="12" class="mt-3" lg="5">
        <p style="color:  #333;
font-size: 20px;
font-weight: 400;
line-height: 180%;
letter-spacing: -0.6px;">The world first and largest e-commerce platform with a wide variety of authentic and sustainable African products.</p>
<div class="pt-5">
    <v-btn to="/discovery_page" color="green" size="large" flat rounded="xl" width="163px">
      <span style="color:  #EDF0EF;
font-size: 14px;
font-weight: 600;
line-height: 20px; ">
Start Exploring
</span>  
    </v-btn>
    <v-btn color="#333" class="ml-3" size="large" variant="outlined" flat rounded="xl" width="163px">
      <span style="color:  #333;
font-size: 14px;
font-weight: 600;
line-height: 20px; ">
How it works
</span>  
    </v-btn>
</div>
    </v-col>
</v-row>
    </v-container>
    <div class="d-flex align-center  justify-center" style="position: relative;overflow: hidden;">
      <div style="position: absolute;top:0;z-index: 99;width: 100%; height: 100px; background: linear-gradient(to bottom, #FDF5E7, transparent);"></div>
<div style="position: absolute;bottom: 0px; z-index: 99;width: 100%; height: 100px; background: linear-gradient(to bottom, transparent, #fff);"></div>      
    <div id="img" style="width: 1442px;" class=" mx-auto">

<v-img eager
        style=" position: relative;"
        class="  mt-6"  min-height="50vh"
        contain min-width="700px"  
        height="auto" @load="startall()"
        width="1442px"
        src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_3000/v1690528044/map-base-1_qyacm7.png"
        >


<div v-show="placescards" v-once @click="$router.push('/discovery_page')" v-for="(n, i) in boxes" :key="i"
          class="d-flex justify-center"
          style="z-index:99; width: 250.88px; scale: 0.9; 
         
 position: absolute"
 :style="  'top:'+ n.top+';left:'+ n.left+';right:'+ n.right+';bottom:'+ n.bottom"
        >
        <div class="blinking-circle"></div>
        <keep-alive>
        <div @click="showCountry(n.country)"  flat :class="n.class" class="pa-6 d-flex align-center justify-center africacard">


                <v-img
                width="30px" 
                style="border-radius: 5px!important;"
                height="auto"
                :src="n.image"
                />
                
                
                <div  class="pointer"></div>
              </div> 
            </keep-alive>
        </div>



      

      </v-img>    </div>

    </div>
</div>
<div>
    <v-container   style="max-width:1200px" class="py-12 my-12">
        <v-row>
            <v-col v-for="n in points" :key="n.icon" cols="12" lg="3" md="6">
               <div class="d-flex">

                   <v-avatar class="mr-3" size="60" style="
border: 1px solid var(--magnetic-green-4, #2C6E63);">
                       <v-icon color="#2C6E63" :icon="'mdi mdi-'+n.icon"></v-icon>
                    </v-avatar>
                    <div>
                    <p style="color: #333;
font-size: 16px;
font-weight: 600;
line-height: 120%; /* 19.2px */
letter-spacing: -0.16px;" class="mb-2">  {{ n.title }}</p>
                    <p style="color: #333;
font-size: 14px;
font-weight: 400;
line-height: 120%; /* 16.8px */
letter-spacing: -0.14px;" class="pr-8">  {{ n.body }}</p>
                     </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</div>

<div>
    <v-container  style="max-width:1200px">
        <div class="d-flex mb-12 align-center">
<p class="d-block" style="color: var(--magnetic-green-4, #2C6E63);
font-size: 14px;
font-weight: 500;width: auto;
    min-width: 215px;
line-height: 120%; /* 16.8px */
letter-spacing: 0.7px;
text-transform: uppercase;"> Our shopping category  </p>
    <v-divider></v-divider>

        </div>
        <v-row>
            <v-col cols="12" lg="5">
                <p style="color: var(--carbon-5, #2A2A2A);

font-size: 48px;
font-weight: 600;
line-height: 120%; /* 57.6px */
letter-spacing: -1.44px;">Discover a dynamic
Marketplace</p>
            </v-col>
            <v-col cols="12" lg="7">
                <p class="mt-2" style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 400;max-width: 398px;
line-height: 180%; /* 36px */
letter-spacing: -0.6px;">Umoja provides a unique experience, connecting a variety of buyers and sellers to a digital african market.</p>
            </v-col>
        </v-row>
    </v-container>

</div>
<div>
    <v-container   style="max-width:1200px" class="py-12">

        <v-row>
            <v-col cols="12" lg="5">
                <v-img cover class="heroimg" @click="$router.push('/fashion')"  style="cursor: pointer; height: calc(100% - 3px);position: relative;border-radius: 15px;" width="100%"
                 lazy-src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_90/v1690529528/rectangle-64_zmh8cd.png"
                 src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1000/v1690529528/rectangle-64_zmh8cd.png">
    <v-btn color="white" size="large" style="position: absolute; top: 24px;right: 27.5px;" variant="outlined" rounded="xl" >
Shop now <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
    </v-btn>
    <div style="position: absolute;
width: 100%;bottom: 0;
height: 122px;align-items: center;
padding: 10px 30px;display: flex;
gap: 10px;border-radius: 0px 0px 15px 15px;
background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);
flex-shrink: 0;">
        <p style="color: #FFF;
font-size: 32px;
font-weight: 500;
letter-spacing: -0.96px;">Fashion</p>
    </div>
                </v-img>
            </v-col>
            <v-col cols="12" lg="7">
                <v-row>
            <v-col cols="12"  md="6">
                <v-img @click="$router.push('/home decoration')" class="heroimg" style="cursor: pointer; position: relative;border-radius: 15px;" width="100%" 
                lazy-src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_90/v1690529526/rectangle-66_kbe8bk.png"
                src="https://res.cloudinary.com/payhospi/image/upload/v1690529526/rectangle-66_kbe8bk.png">
    <v-btn color="white" size="44" style="position: absolute; top: 24px;right: 27.5px;" variant="outlined" rounded="xl" >
 <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
    </v-btn>

    <div style="position: absolute;
width: 100%;bottom: 0;
height: 83px;align-items: center;
padding: 10px 30px;display: flex;
gap: 10px;border-radius: 0px 0px 15px 15px;
background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);
flex-shrink: 0;">
        <p style="color: #FFF;
font-size: 24px;
font-weight: 500;
letter-spacing: -0.96px;">Home decoration</p>
    </div>
                </v-img>
            </v-col>
            <v-col cols="12" md="6">
                <v-img @click="$router.push('/cosmetics')" class="heroimg" style="cursor: pointer; position: relative;border-radius: 15px;" width="100%"
                 lazy-src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_90/v1690529526/rectangle-67_oa0r6o.png"
                 src="https://res.cloudinary.com/payhospi/image/upload/v1690529526/rectangle-67_oa0r6o.png">
    <v-btn icon="mdi mdi-arrow-top-right" color="#333" size="44"  style="position: absolute; top: 24px;right: 27.5px;" variant="outlined" rounded="xl" >
    </v-btn>
    
    <div style="position: absolute;
width: 100%;bottom: 0;
height: 83px;align-items: center;
padding: 10px 30px;display: flex;
gap: 10px;border-radius: 0px 0px 15px 15px;
background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);
flex-shrink: 0;">
        <p style="color: #FFF;
font-size: 24px;
font-weight: 500;
letter-spacing: -0.96px;">Cosmetics</p>
    </div>
                </v-img>
            </v-col>
            <v-col cols="12">
                <v-img @click="$router.push('/art')" class="heroimg" style="cursor: pointer; position: relative;border-radius: 15px;" width="100%"
                 lazy-src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_90/v1690529527/rectangle-65_czgty7.png"
                 src="https://res.cloudinary.com/payhospi/image/upload/v1690529527/rectangle-65_czgty7.png">
                <v-btn color="white" size="large" style="position: absolute; top: 24px;right: 27.5px;" variant="outlined" rounded="xl" >
                Shop now <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
                </v-btn>
                
                <div style="position: absolute;
                width: 100%;bottom: 0;
                height: 122px;align-items: center;
                padding: 10px 30px;display: flex;
                gap: 10px;border-radius: 0px 0px 15px 15px;
                background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%);
                flex-shrink: 0;">
                <p style="color: #FFF;
                font-size: 32px;
                font-weight: 500;
                letter-spacing: -0.96px;">Art</p>
                </div>
                    </v-img>
</v-col>
            </v-row>
            </v-col>
        </v-row>
    </v-container>
</div>

<div>
  <vendorRowCategorized :vendorlist="vendor.items" :category="select" style="margin-top: 50px;" :vendor="true" :maxwidth="'1200px'" :showVendor="true"
        :title="vendor.title" />

</div>
  <div>
  <product-row :cover="false" :maxwidth="'1200px'" :items="items23" :showVendor="true" title=" 🔥 Hot Deals " />

 

        <div style="padding:150px 0px">

            <v-carousel style="overflow: visible;"
            height="429" class="promo"
            :show-arrows="false" hide-delimiter-background="" cycle>
            <v-carousel-item 
            v-for="n in 6"
            >
            <v-row>
                <v-col class="px-0" cols="12" md="6" lg="6">
                    <v-img class="heroimg" eager width="100%" height="auto" src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1000/v1690541372/rectangle-69_jzdwc3.png" ></v-img>
                </v-col>
                <v-col class="px-0" cols="12" md="6" lg="6">
                    <v-card rounded="0" width="100%" height="100%" min-height="429" color="green" flat class=" d-flex align-center">
                        <v-container   style="max-width:1200px" class="px-12">
                            <p style="color: var(--magnetic-green-2, #CDD6D4);
font-size: 12px;
font-weight: 500;
letter-spacing: 3.66px;
text-transform: uppercase;">limited offer</p>
<p style="color: #FFF;
font-size: 48px;
font-weight: 500;
letter-spacing: -1.44px;">Style Meets Substance</p>
<p style="color: #FFF;
font-size: 20px;
font-weight: 500;
letter-spacing: -0.2px;" class="mb-8"> GET 20% OFF for your first order</p>
  <v-btn color="white" class="green-hover" size="large"  variant="outlined" rounded="xl" >
Shop now <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
    </v-btn>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</div>

<product-row :items="items2" :cover="false" :maxwidth="'1200px'" :showVendor="true" title="💰 Most Selling Products" />
<PopularTwoRow :showBid="twocardrow.showBid" :maxwidth="'1200px'" :items="twocardrow.items" :title="twocardrow.title" />


        </div>
        <div class="bg-black " >
<v-container style="height:774px" class="d-flex align-center justify-center">
    <div class="text-center">
        <v-img class="mx-auto mb-8" width="100%" max-width="420px" src="https://res.cloudinary.com/payhospi/image/upload/v1690543426/frame_aivj5d.png"></v-img>
        <p style="max-width: 659px;
font-size: 48px;
font-weight: 600;
line-height: 120%; /* 57.6px */
letter-spacing: -1.44px;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.42) 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;">Subscribe to our newsletter to get updates on our Umoja</p>

<p class="mt-4" style="color: #969696;
font-size: 20px;
font-weight: 400;
line-height: 180%; /* 36px */
letter-spacing: -0.6px;">GET 20% OFF for your first order buy subscribing to our news letter</p>
<div style="max-width: 545px;" class="mx-auto d-flex mt-8 py-3">
    <v-text-field style="    background: rgba(248, 248, 248, 0.10);
    border-radius: 50px;overflow: hidden;"  prepend-inner-icon="mdi mdi-email-outline" class=" mr-3" :rules="[required]" v-model="name" hide-details="" placeholder="Enter your email address" density="comfortable"  >
  </v-text-field>
  <v-btn color="green" rounded="xl" size="x-large" flat width="134">Subscribe</v-btn>
</div>
<p style="color: var(--carbon-1, #EDEDED);
font-size: 14px;
font-weight: 400;
line-height: 180%; /* 25.2px */
letter-spacing: -0.42px;">You will be able to unsubscribe at anytime. Read our privacy policy <span style="color: var(--deep-sky-blue-4, #1273EB);text-decoration-line: underline;">here</span> </p>
    </div>
</v-container>
</div>
<blogRow :items="blogpost.items" style="margin-top: 100px ;"  :maxwidth="'1200px'" :showVendor="true"
        :title="blogpost.title" />
<div>
    <v-container  style="max-width:1200px">
        <p style="
font-size: 48px;
font-weight: 600;
line-height: 180%;" class="mb-8">FAQ's</p>
        <v-divider class="mb-12"></v-divider>

<v-row>
    <v-col class="py-0" @click="openfaq(i)" v-for="(n, i) in faqs" :key="i" cols="12" lg="6">
      
<div class="d-flex justify-space-between align-center">
    <p style="
font-size: 16px;
font-weight: 600;">{{ n.title }}</p>

    <v-icon  color="green" :icon="openid == i ? 'mdi mdi-minus': 'mdi mdi-plus'"></v-icon>
</div>
<v-expand-transition leave-absolute>

    <p style="color: var(--carbon-4, #333);
font-size: 14px;
font-weight: 400;
line-height: 180%;" class="mt-4" v-if="openid == i">{{ n.body || 'Umoja has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools. Enhanced, customer-friendly experiences help build deeper data and better customer relationships. And our open platform means you can connect to prebuilt integrations or build out your own with our APIs. Learn how Umoja works with larger, more complex businesses.' }}</p>
</v-expand-transition>
        <v-divider class="my-8"></v-divider>
    </v-col>
</v-row>
    </v-container>
</div>

<mainfooter style="margin-top: 100px ;" :maxwidth="'1200px'" />
</template>
<style>
.divbtn{
    transition: all 0.3s ease-in-out;
}


.blinking-circle {
  /* animation: blink 2s infinite; */
  position: absolute;
  transform: translate3d(0, 0, 0);
  /* opacity: 0; */
  left: 50%;
  top: 120%;
  transform: translateX(-50%) ;
  opacity: 0;
  width: 30px;
  height: 10px;
  z-index: -1;
}
.blinking-circle::after {
    content: ''!important;
    border-radius: 50%!important;
    padding: 4px!important;
      
    top: -5px!important;
        width: 100%!important;
        height: 100%!important;
        transform: translate3d(0, 0, 0)!important;
        box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.3)!important;
        position: absolute!important;
        background-color: #fff6e7!important;

    }

    .blinking-circle::before {
    content: ''!important;
    position: absolute!important;
    display: block!important;
    width: 80px!important;z-index: -6!important;
    height: 30px!important;
    box-sizing: border-box!important;
    margin-left: -26px!important;
    margin-top: -14px!important;
    border-radius: 50%!important;
    background-color: #2C6E63!important;
    animation: pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite!important;
  }


@keyframes blink {
  0% {
    scale: 1;
  }
  50% {
    scale: 0.7;
  }
  100% {
    scale: 1;
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(.43);
  }
  50% {
    transform: scale(.83);
  }
  95%, 100% {
    opacity: 0;
  }
}

  .background {
    animation: zoom-and-slide 20s infinite;
    will-change: transform;
  }

  @keyframes zoom-and-slide {
    0% {
      transform: scale(1);
    }
    25% {
      transform: translate3d(0, 0, 0) scale(1.3);
      transform-origin: left;
    }

    50% {
      transform: translate3d(0, 0, 0) scale(1.2);
      transform-origin: top right;
    }

    75% {
      transform: translate3d(0, 0, 0) scale(1.3);
      transform-origin: bottom center;
    }

   
    100% {
      transform: scale(1);
    }
  }


</style>
<script>
import { gsap, Bounce, Back, CSSPlugin } from 'gsap';

export default {
  data() {
    return {
      boxes:[
        {
          top:'42%',
          left: '8%',
          class: 'boxes1',
          country: 'Cameroon',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Cameroon.png'
        },
        {
          top:'53%',
          left: '14%',
          class: 'boxes1',
          country: 'Egypt',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Egypt_%28variant%29.png/80px-Flag_of_Egypt_%28variant%29.png'
        },
        {
          top:'53%',
          left: '6%',
          class: 'boxes1',
          country: 'Ghana',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Flag_of_Ghana.png'
        },
        {
          top:'65%',
          left: '9%',
          class: 'boxes1',
          country: 'Nigeria',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/80px-Flag_of_Nigeria.svg.png'
        },
        {
          top:'1.5%',
          left: '3%',
          class: 'boxes1',
          country: `Cote D'Ivoire`,
          image: 'https://cdn.countryflags.com/thumbs/cote-d-ivoire/flag-400.png'
        },
        {
          top:'3.7%',
          left: '10%',
          class: 'boxes1',
          country: 'Rwanda',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/80px-Flag_of_Rwanda.svg.png'
        },
           {
        top:'13%',
        left: '7%',
        class: 'boxes1',
        country: 'Namiba',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Namibia.png'
      },
      {
        top:'18%',
        left: '0%',
        class: 'boxes1',
        country: 'Sierra Lone',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/80px-Flag_of_Sierra_Leone.svg.png'
      },
      {
        top:'0%',
        class: 'boxes2',
        right: '35%',
        country: 'Chad',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/80px-Flag_of_Chad.svg.png'
      },
      {
        top:'3%',
        class: 'boxes2',
        right: '24%',
        country: 'Senegal',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/80px-Flag_of_Senegal.svg.png'
      },
      {
        top:'5%',
        class: 'boxes2',
        right: '13%',
        country: 'Kenya',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Kenya_flag_300.png'
      },
      {
        top:'11%',
        class: 'boxes2',
        right: '30%',
        country: 'Ethiopia',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/80px-Flag_of_Ethiopia.svg.png?20191111184610'
      },
   
   
      {
        top:'22%',
        class: 'boxes2',
        right: '19%',
        country: 'Burundi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/80px-Flag_of_Burundi.svg.png?20230803000809'
      },
      {
        top:'20%',
        class: 'boxes2',
        right: '2%',
        country: 'Burkina Faso',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/80px-Flag_of_Burkina_Faso.svg.png'
      },
      {
        top:'35%',
        class: 'boxes2',
        right: '-3%',
        country: 'Djibouti',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/80px-Flag_of_Djibouti.svg.png?20230106121142'
      },
      {
        bottom:'42%',
        class: 'boxes2',
        right: '8%',
        country: 'Lesotho',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/80px-Flag_of_Lesotho.svg.png'
      },
      {
        bottom:'23%',
        class: 'boxes2',
        right: '0%',
        country: 'Mozambique',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/80px-Flag_of_Mozambique.svg.png'
      },
   
  
   
      {
        bottom: '60%',
        left: '34%', 
        class: 'boxes3',
        country: 'Benin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/80px-Flag_of_Benin.svg.png'
      },
      {
        bottom: '60%',
        right: '38%', 
        class: 'boxes3',
        country: 'Morocco',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/80px-Flag_of_Morocco.svg.png'
      },
      {
        bottom: '49%',
        left: '39%', 
        class: 'boxes3',
        country: 'Mauritius',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/80px-Flag_of_Mauritius.svg.png'
      },
      {
        bottom: '40%',
        right: '38%', 
        class: 'boxes3',
        country: 'Malawi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/80px-Flag_of_Malawi.svg.png'
      },
      {
        bottom: '30%',
        left: '40%', 
        class: 'boxes3',
        country: 'Cabo Verde',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/80px-Flag_of_Cape_Verde.svg.png'
      },
      {
        bottom: '22%',
        right: '40%',
        class: 'boxes3',
        country: 'South Sudan',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_South_Sudan.png'
      },
   

      ], selectedCountry: '',
      items23: [
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694169115/h-796-d-416305-eb-4758-b-6-bbba-310-e-078-fb-7-u-1gf_ps19db.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1691574327/s-2-gs-x-1-po-l_ckeqxo.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170675/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cosahoes_oifr7p.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694169115/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cohff_d1hbgf.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    ],
      items2: [
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170675/h-796-d-416305-eb-4758-b-6-bbba-310-e-078-fb-7-u-2capjy_a5tncs.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170676/s-2-gs-x-1-po-lshoeuhyf_acrhye.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170674/ankara-sneakers-1500-xchapkufk_ykmili.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170675/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cosahoes_oifr7p.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},               {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170674/ankara-sneakers-1500-xchapkufk_ykmili.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170675/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cosahoes_oifr7p.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    ],
      twocardrow:{
                    showBid: false,
                    title: '⚡️ Popular Products of the Week',
                    items: [
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1694659373/rectangle-22440jhfj456_ienfo3.png',
                            name: 'Koko Rachel Deco Set',
                            vendorName: 'Nweke Franklin O.'
                        },
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1694659373/rectangle-22440jghd454hfgd_qjlxsi.png',
                            name: 'The Nawi Scarfs',
                            vendorName: 'Okoli Cecilia Bona.'
                        },
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1694659373/rectangle-22440jhfj456_ienfo3.png',
                            name: 'Koko Rachel Deco Set',
                            vendorName: 'Nweke Franklin O.'
                        },
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1694659373/rectangle-22440jghd454hfgd_qjlxsi.png',
                            name: 'The Nawi Scarfs',
                            vendorName: 'Okoli Cecilia Bona.'
                        },
                    ]
                },
      blogpost:{
                    title :'🗞 Tips, updates and stories from our community',
                    items:[
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694661747/frame-1000007817jhcjcj867_lkwfam.png',
                            author: 'Nweke Franklin O.',
                            date:'Sept 04, 2023',
                            title: 'Simple steps on how to use the Umoja CRM system.',
                            category: 'How-to’s',
                            color: '#1273EB'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694661747/frame-1000007818jhf78r853563764_x03szl.png',
                            author: 'Okoli Bonaventure',
                            date:'Sept 01, 2023',
                            title: 'Umoja Africa raises $3 Million seed round.',
                            category: 'Business',
                            color: '#00966D'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694661747/frame-1000007817hgcnh756675_l1j5jm.png',
                            author: 'David Obukeme',
                            date:'Sept 04, 2023',
                            title: 'A new feature has been added to the Umoja.',
                            category: 'Product',
                            color: '#F38218'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694661747/frame-1000007817jhcjcj867_lkwfam.png',
                            author: 'Nweke Franklin O.',
                            date:'Sept 04, 2023',
                            title: 'Simple steps on how to use the Umoja CRM system.',
                            category: 'How-to’s',
                            color: '#1273EB'
                        },
                    
                    

                    ]
                },
    
      vendor:{
                    title :'🔥 Best Selling Stores',
                    items:[
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694165862/rectangle-22439pointgftg_tpujdo.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1693922523/ellipse-107_pajkls.png',
                            vendorName: 'Orderly Fashion',
                            subCategory: 'Unisex Wears'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694165862/rectangle-22439bangli8_wxwwk9.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107hgcj_boyj1l.png',
                            vendorName: 'Fashion De Africana',
                            subCategory: 'Jewelry'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694165862/rectangle-22439sunglasses_zpydih.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107jgchgx_suyemd.png',
                            vendorName: 'Woman Elegant',
                            subCategory: 'Materials'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694165861/rectangle-22439baggd_c4bkra.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107mhgs_j5208p.png',
                            vendorName: 'Me-Kweku Bags',
                            subCategory: 'Bags'
                        },
                    

                    ]
                },
    
        points:[
            {
            icon: 'cart',
            title: 'Umoja Delivery',
            body: 'Get free delivery for every order above $20'
        },
            {
            icon: 'history',
            title: '90 Days Return',
            body: 'Return within 90 days of receiving your order.'
        },
            {
            icon: 'credit-card',
            title: 'Secure Payment',
            body: '100% secure payment. Get easy support anytime'
        },
            {
            icon: 'face-agent',
            title: '24/7 Online Support',
            body: '100% secure payment. Get easy support anytime'
        },
    ],
    openid: null,
        placescards:false,
        mods:1,
       images:[
    'https://res.cloudinary.com/dkbt6at26/image/upload/v1684302547/Rectangle_7_h4lxnd.png',
'https://res.cloudinary.com/dkbt6at26/image/upload/v1684302543/Rectangle_6_1_qlrzss.png',
'https://res.cloudinary.com/dkbt6at26/image/upload/v1684302543/Rectangle_5_ucb5ag.png',
'https://res.cloudinary.com/dkbt6at26/image/upload/v1684302543/Rectangle_4_tzf2yf.png',
'https://res.cloudinary.com/dkbt6at26/image/upload/v1684298703/profile_ievpza.png'],
rating: 4,
        items:[
            {
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_dfuzam.png',
                price: '115.32',
                likes: '1.2k'
            },
            {
                name: 'Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_1_wnr1ld.png',
                price: '57.00',
                likes: '456',
                oos: true
            },
          
            {
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria..',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png',
                price: '57.00',
                likes: '456',
            },
            {
                name: 'Orange colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png',
                price: '79.00',
                likes: '66',
                oos: true
            },
        ],
        faqs: [
            {
                title: 'Does Umoja have tools for complex business?',
                body: ''
            },
            {
                title: 'How does buy now pay later work',
                body: ''
            },
            {
                title: 'What are merchant services?',
                body: ''
            },
            {
                title: 'What kind of resources does Umoja provide businesses?',
                body: ''
            },
            {
                title: 'Does Umoja have tools for professional services businesses?',
                body: ''
            },
            {
                title: 'How does Umoja compare to other e-commerce platforms',
                body: ''
            },
        ]
    }
    },
    beforeUnmount(){
      this.timeline.kill()
    },
    mounted(){
  
      gsap.registerPlugin(CSSPlugin);

    },
methods: {
  showCountry(x){
    this.selectedCountry = x
  },
  async startall(){
    if (this.placescards) {
      // alert('already loaded')
      return
    }
    this.placescards = true
    const circles =  document.querySelectorAll('.blinking-circle')
    const sn = this
    gsap.to(circles,
    {
      
      opacity: 1,
      stagger: 0.2,
      delay:1,
      onComplete:()=>{
        sn.animImg()

      }
      
    })

  },
  animImg(){
  const box =  document.getElementById('img')
  const boxes1 =  document.querySelectorAll('.boxes1')
  const boxes2 =  document.querySelectorAll('.boxes2')
  const boxes3 =  document.querySelectorAll('.boxes3')
  this.timeline = gsap.timeline({repeat: -1, repeatDelay: 4 })

    this.timeline.fromTo([box],
    {
      scale: 1,
      translateX: '0%',
      // transformOrigin: ' center'
    },{
      scale: 1.2,
      translateX: '10%',
      // transformOrigin: 'left',
      duration:5,
    })
    
    
    this.timeline.to(boxes1,
    {
      
      scale: 1,
      opacity: 1,
      stagger: 0.3,
      bottom: '8px',
      ease: Back.easeOut,
      delay: -3
      
    })
    
    this.timeline.to([box],
    {
      translateX: '-10%',
      translateY: '20%',
      scale: 1.2,
      // transformOrigin: 'top right',
      duration:5,
      // delay: 5
      
    })
    this.timeline.to(boxes2,
    {
      
      scale: 1,
      opacity: 1,
      stagger: 0.3,
      bottom: '8px',
      ease: Back.easeOut,
      delay: -3
      
    })
    this.timeline.to([box],{
      translateX: '0%',
      translateY: '-15%',
      scale: 1.3,
      // transformOrigin: 'bottom center',
      duration:5,
      // delay: 10,
    })
    this.timeline.to(boxes3,
    {
      
      scale: 1,
      opacity: 1,
      stagger: 0.3,
      bottom: '8px',
      ease: Back.easeOut,
      delay: -3
      
    })
    this.timeline.to([box],
    {
      translateX: '0%',
      translateY: '0%',
      scale: 1,
      // delay: 15,
      // transformOrigin: 'center center',
      duration:5,
    })
    this.timeline.to(boxes1,
    {
      
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      yPercent: 80,
      
    })
    this.timeline.to(boxes2,
    {
      
      scale: 0,
      stagger: 0.2,
      opacity: 0,
      yPercent: 80,
      delay: -0.2,
      
    })
    this.timeline.to(boxes3,
    {
      
      scale: 0,
      stagger: 0.2,
      opacity: 0,
      yPercent: 80,
      delay: -0.2,
      
    })
  },

    openfaq(i){
        if(this.openid == i){
            this.openid = null
            return
        }
        this.openid = i
    },

filt(text){
var newText = text.length > 40 ? text.slice(0, 40) +'...' : text
return newText
}
},
}
</script>