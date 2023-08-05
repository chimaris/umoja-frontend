<template>
<Header2 />
<div class="py-12" style="background: #FDF5E7;" >
    <v-container  style="max-width:1300px" class="mt-9">
     
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
    <v-btn to="/vendor_page" color="green" size="large" flat rounded="xl" width="163px">
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
    <v-img eager
            style="position: relative;overflow:visible;"
            class="pa-3 mt-6"
            contain min-width="700px"
            height="auto" @load="placescards = true"
            width="100%"
            src="https://res.cloudinary.com/payhospi/image/upload/v1690528044/map-base-1_qyacm7.png"
          >
            <div v-if="placescards"
              class="d-flex justify-center"
              style="width: 250.88px; scale: 0.9;  top: 14%;
    left: 14%; position: absolute"
            >
              <v-card flat class="transparent africacard">
                <div class="pa-5 d-flex align-center justify-center w-100">
                  <div>
                    <v-img
                      width="30px"
                      style="border-radius: 5px !important"
                      height="auto"
                      src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/NG_-_Nigeria_c8g2on.png"
                    />
                  </div>
                  <p class="ml-3">Nigeria</p>
                </div>
                <v-divider></v-divider>

                <div class="d-flex px-5 pt-4 pb-3 justify-center">
                    <div class="list">
                    <v-avatar class="" size="38" :key="i" v-for="(n, i) in images"
                      ><v-img
                        :src="n"
                      ></v-img
                    ></v-avatar>
                    <v-avatar color="green">
                      <span style="font-size: 13px">+300</span></v-avatar
                    >
                  </div>
                </div>

                <div class="d-flex justify-center">
                  <v-btn size="small" color="blue" variant="text" flat>
                    <span
                      style="
                        font-size: 14px;
                        text-transform: none;
                        color: #0062bc;
                      "
                    >
                      See vendors in this area
                    </span>
                    <v-avatar class="ml-2" size="25" rounded="0"
                      ><v-img
                        src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684302533/Forward_ob8zzj.png"
                      ></v-img
                    ></v-avatar>
                  </v-btn>
                </div>
              </v-card>
              <div class="pointer"></div>
            </div>
            <div v-if="placescards"
              class="d-flex justify-center"
              style="width: 250.88px;    top: -10%;
    right: 23%;
    scale: 0.9; position: absolute"
            >
              <v-card flat class="transparent africacard">
                <div class="pa-5 d-flex align-center justify-center w-100">
                  <div>
                    <v-img
                      width="30px"
                      style="border-radius: 5px !important"
                      height="auto"
                      src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229323/EG_-_Egypt_mlkkl6.png"
                    />
                  </div>
                  <p class="ml-3">Egypt</p>
                </div>
                <v-divider></v-divider>

                <div class="d-flex px-5 pt-4 pb-3 justify-center">
                    <div class="list">
                    <v-avatar class="" size="38" :key="i" v-for="(n, i) in images"
                      ><v-img
                        :src="n"
                      ></v-img
                    ></v-avatar>
                    <v-avatar color="green">
                      <span style="font-size: 13px">+324</span></v-avatar
                    >
                  </div>
                </div>

                <div class="d-flex justify-center">
                  <v-btn size="small" color="blue" variant="text" flat>
                    <span
                      style="
                        font-size: 14px;
                        text-transform: none;
                        color: #0062bc;
                      "
                    >
                      See vendors in this area
                    </span>
                    <v-avatar class="ml-2" size="25" rounded="0"
                      ><v-img
                        src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684302533/Forward_ob8zzj.png"
                      ></v-img
                    ></v-avatar>
                  </v-btn>
                </div>
              </v-card>
              <div class="pointer"></div>
            </div>
            <div v-if="placescards"
              class="d-flex justify-center"
              style="width: 250.88px;    bottom: 7%;
    right: 30%;
    scale: 0.9; position: absolute"
            >
              <v-card flat class="transparent africacard">
                <div class="pa-5 d-flex align-center justify-center w-100">
                  <div>
                    <v-img
                      width="30px"
                      style="border-radius: 5px !important"
                      height="auto"
                      src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_9_cxzweo.png"
                    />
                  </div>
                  <p class="ml-3">South Africa</p>
                </div>
                <v-divider></v-divider>

                <div class="d-flex px-5 pt-4 pb-3 justify-center">
                    <div class="list">
                    <v-avatar class="" size="38" :key="i" v-for="(n, i) in images"
                      ><v-img
                        :src="n"
                      ></v-img
                    ></v-avatar>
                    <v-avatar color="green">
                      <span style="font-size: 13px">+243</span></v-avatar
                    >
                  </div>
                </div>

                <div class="d-flex justify-center">
                  <v-btn size="small" color="blue" variant="text" flat>
                    <span
                      style="
                        font-size: 14px;
                        text-transform: none;
                        color: #0062bc;
                      "
                    >
                      See vendors in this area
                    </span>
                    <v-avatar class="ml-2" size="25" rounded="0"
                      ><v-img
                        src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684302533/Forward_ob8zzj.png"
                      ></v-img
                    ></v-avatar>
                  </v-btn>
                </div>
              </v-card>
              <div class="pointer"></div>
            </div>
            <div v-if="false"
              class="d-flex justify-center"
              style="width: 250.88px;       bottom: 25%;
    right: 0%;
    scale: 0.9; position: absolute"
            >
              <v-card flat class="transparent africacard">
                <div class="pa-5 d-flex align-center justify-center w-100">
                  <div>
                    <v-img
                      width="30px"
                      style="border-radius: 5px !important"
                      height="auto"
                      src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_8_ftnhqn.png"
                    />
                  </div>
                  <p class="ml-3">Madagscar</p>
                </div>
                <v-divider></v-divider>

                <div class="d-flex px-5 pt-4 pb-3 justify-center">
                  <div class="list">
                    <v-avatar class="" size="38" :key="i" v-for="(n, i) in images"
                      ><v-img
                        :src="n"
                      ></v-img
                    ></v-avatar>
                    <v-avatar color="green">
                      <span style="font-size: 13px">+476</span></v-avatar
                    >
                  </div>
                </div>

                <div class="d-flex justify-center">
                  <v-btn size="small" color="blue" variant="text" flat>
                    <span
                      style="
                        font-size: 14px;
                        text-transform: none;
                        color: #0062bc;
                      "
                    >
                      See vendors in this area
                    </span>
                    <v-avatar class="ml-2" size="25" rounded="0"
                      ><v-img
                        src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684302533/Forward_ob8zzj.png"
                      ></v-img
                    ></v-avatar>
                  </v-btn>
                </div>
              </v-card>
              <div class="pointer"></div>
            </div>
          </v-img>
</div>
<div>
    <v-container   style="max-width:1300px" class="py-12 my-12">
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
    <v-container  style="max-width:1300px">
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
    <v-container   style="max-width:1300px" class="py-12">

        <v-row>
            <v-col cols="12" lg="5">
                <v-img style="position: relative;border-radius: 15px;" width="100%" src="https://res.cloudinary.com/payhospi/image/upload/v1690529528/rectangle-64_zmh8cd.png">
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
                <v-img style="position: relative;border-radius: 15px;" width="100%" src="https://res.cloudinary.com/payhospi/image/upload/v1690529526/rectangle-66_kbe8bk.png">
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
                <v-img style="position: relative;border-radius: 15px;" width="100%" src="https://res.cloudinary.com/payhospi/image/upload/v1690529526/rectangle-67_oa0r6o.png">
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
                <v-img style="position: relative;border-radius: 15px;" width="100%" src="https://res.cloudinary.com/payhospi/image/upload/v1690529527/rectangle-65_czgty7.png">
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
    <v-container  style="max-width:1300px">
        <div class="d-flex mb-8 mt-12 align-center">
<p class="d-block" style="color: var(--magnetic-green-4, #000);
font-size: 24px;
font-weight: 600;width: auto;
    min-width: 155px;
line-height: 120%; /* 16.8px */
letter-spacing: -0.24px;"> 🔥 Hot Deals </p>
    <v-divider class="mr-4"></v-divider>
    <v-btn color="#333" size="large" style="" variant="outlined" rounded="xl" >
See All <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
    </v-btn>
        </div>
        <v-row id="homepage" style="background-color: #fff;" class=" mt-8">
        <v-col  v-for="(n, i) in items" :key="i" lg="3" cols="12" sm="6" md="4">
            <v-card flat class="bg-white rounded-lg pa-4">
                <v-img class="rounded-lg bg-grey-lighten-2" cover width="100%" height="303px" :src="n.image">
                <v-btn  rounded="xl" icon style="position: absolute;right:12px;top:12px;"  flat size="x-small">
                <v-icon size="x-small" color="#1C274C" icon="mdi mdi-heart-outline"></v-icon></v-btn>
                </v-img>
                <p style="font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    
    color: #000000;
    " class=" mt-2">{{filt(n.name)}}</p>
    <p style="font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    " class="mt-1">Organic cotton certified</p>
   <p style="font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    color: #000000;
    " class="d-flex mb-1 pb-3 pt-1 align-center">
        <v-rating
        model-value="4"
        color="grey-lighten-2"
        active-color="#E7CE5D"
        class="rts" density="compact"
        size="x-small"
        ></v-rating><span style="margin-left:3px;margin-top: 3px ;" >(65)</span> 
    </p>
                          <div class="d-flex align-center justify-space-between">
                <div class="d-flex align-center"> 
                    <h1 
    style="font-size: 16px;
            line-height: 20px;
            color: #1A1D1F;
    " class="priceClass">N{{n.price}}</h1>
    
                </div>
                <v-btn size="small" style="border: 1px solid #CED2D6;
    border-radius: 6px;"  :color="n.oos? 'green':''" :variant="!n.oos? 'outlined':'elevated'" flat :class="n.oos? 'text-grey':''" class="ml-2">
                     <span class="smallBtn">{{'Add to Cart'}}</span> 
                </v-btn>
    
                </div>
            </v-card>
        </v-col>
       </v-row> 
        </v-container>

        <div style="padding:100px 0px">

            <v-carousel style="overflow: visible;"
            height="429" class="promo"
            :show-arrows="false" hide-delimiter-background="" cycle>
            <v-carousel-item 
            v-for="n in 6"
            >
            <v-row>
                <v-col class="px-0" cols="12" md="6" lg="6">
                    <v-img eager width="100%" height="auto" src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1000/v1690541372/rectangle-69_jzdwc3.png" ></v-img>
                </v-col>
                <v-col class="px-0" cols="12" md="6" lg="6">
                    <v-card rounded="0" width="100%" height="100%" min-height="429" color="green" flat class=" d-flex align-center">
                        <v-container   style="max-width:1300px" class="px-12">
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
  <v-btn color="white" size="large"  variant="outlined" rounded="xl" >
Shop now <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
    </v-btn>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</div>
<v-container  style="max-width:1300px">
        <div class="d-flex mb-8 mt-12 align-center">
<p class="" style="color: var(--magnetic-green-4, #000);
font-size: 24px;
font-weight: 600;width: auto;
    min-width: 385px;
line-height: 120%; /* 16.8px */
letter-spacing: -0.24px;"> ⚡️ Popular Products of the Week </p>
    <v-divider class="mr-4"></v-divider>
    <v-btn color="#333" size="large" style="" variant="outlined" rounded="xl" >
See All <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
    </v-btn>
        </div>
        <v-row id="homepage" style="background-color: #fff;" class=" mt-8">
        <v-col  v-for="(n, i) in items" :key="i" lg="3" cols="12" sm="6" md="4">
            <v-card flat class="bg-white rounded-lg pa-4">
                <v-img class="rounded-lg bg-grey-lighten-2" cover width="100%" height="303px" :src="n.image">
                <v-btn  rounded="xl" icon style="position: absolute;right:12px;top:12px;"  flat size="x-small">
                <v-icon size="x-small" color="#1C274C" icon="mdi mdi-heart-outline"></v-icon></v-btn>
                </v-img>
                <p style="font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    
    color: #000000;
    " class=" mt-2">{{filt(n.name)}}</p>
    <p style="font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    " class="mt-1">Organic cotton certified</p>
  <p style="font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    color: #000000;
    " class="d-flex mb-1 pb-3 pt-1 align-center">
        <v-rating
        model-value="4"
        color="grey-lighten-2"
        active-color="#E7CE5D"
        class="rts" density="compact"
        size="x-small"
        ></v-rating><span style="margin-left:3px;margin-top: 3px ;" >(65)</span> 
    </p>
                          <div class="d-flex align-center justify-space-between">
                <div class="d-flex align-center"> 
                    <h1 
    style="font-size: 16px;
            line-height: 20px;
            color: #1A1D1F;
    " class="priceClass">N{{n.price}}</h1>
    
                </div>
                <v-btn size="small" style="border: 1px solid #CED2D6;
    border-radius: 6px;"  :color="n.oos? 'green':''" :variant="!n.oos? 'outlined':'elevated'" flat :class="n.oos? 'text-grey':''" class="ml-2">
                     <span class="smallBtn">{{'Add to Cart'}}</span> 
                </v-btn>
    
                </div>
            </v-card>
        </v-col>
       </v-row> 
        </v-container>
        </div>
        <div class="bg-black " style="margin:100px 0px">
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
<div>
    <v-container  style="max-width:1300px">
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
<mainfooter />
</template>
<style>
.v-carousel.promo .v-btn.v-btn--icon{
    border-radius: 50%!important;
}
.v-carousel.promo .v-btn--icon .v-icon{
font-size: 9px;
color: #CECECE;
}
.v-carousel.promo .v-btn--icon.v-btn--active .v-icon{
    color: orange;
}

.v-carousel--hide-delimiter-background .v-carousel__controls{
    bottom: -46px;
}</style>
<script>
export default {
  data() {
    return {
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
       images:['https://res.cloudinary.com/dkbt6at26/image/upload/v1684302547/Rectangle_8_bjr2cm.png',
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
    
methods: {
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