<template>  <div>

    <div style="background-color: ;" class="d-flex py-6 align-center justify-space-between">
        <p style="font-weight: 600;
font-size: 12px;
line-height: 15px;
text-transform: uppercase;
color: #969696;"> 72 products found</p>
        <div >
            <v-btn flat rounded="xl" size="x-small" color="transparent" style=" font-size: 20px; color:#333333" icon="mdi mdi-view-grid"></v-btn>
            <v-btn flat rounded="xl" size="x-small" color="transparent" style=" font-size: 20px; color:#333333" icon="mdi mdi-order-bool-descending-variant" class="mx-2"></v-btn>
            <v-btn variant="tonal" color="#333333" class="textClass" flat> <v-icon class="mr-2" size="20" icon="mdi mdi-tune-vertical"></v-icon>Filter</v-btn>
        </div>
    </div>
    <v-carousel style="overflow: visible;"
    height="170" class="promo"
     :show-arrows="false" hide-delimiter-background="" cycle>
      <v-carousel-item 
        v-for="n in 6"
      >
      <v-img cover height="auto" min-height="160px" class="bg-black d-flex py-3 align-center rounded-lg" src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1000/v1684602013/Rectangle_458_zafbwy.png">
        <div>
            <v-row class="d-flex pa-4 px-6 justify-space-between align-center">
                <v-col  cols="6" sm="6">
                    <h1 style="line-height: 1.2;" class=" mb-0 text-white font-weight-black">The Waden Cloth</h1>
                    <p class="textClass mb-4 text-white">known to be used by the Nawi people</p>
                    <div>
                      <v-btn  flat to="/vendor/profile" color="orange" 
                  ><span class="smallBtn">
                    See product
                </span>
            </v-btn>
                <v-btn to="/user/login"  flat variant="text"  class="ml-2 text-white howit"><span style="text-decoration:underline">
                    <span class="smallBtn">
                    Not now
                </span>
                </span>
                </v-btn>
                    </div>
                </v-col>
                <v-col class="d-flex justify-end" cols="6" sm="6">
                    <v-card max-width="200px" style="background: rgba(0, 0, 0, 0.25);
    border: 0.5px solid #333333;
    backdrop-filter: blur(15.1475px);
    border-radius: 12.118px;" class="bg-black px-5 py-3">
                        <p class="text-white text-overline text-center ">auction ends in</p>
    
                        <div class="d-flex align-center justify-space-between">
                            <div  class="text-center bg-grey-lighten-3 rounded-lg px-3 py-2">
    <p style="font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #333333;">23</p>
        <p style="font-weight: 500;
    font-size: 7px;
    line-height: 9px;
    letter-spacing: 0.03em;
    
    color: #333333;">hours</p>
                            </div>
                            <p class="text-grey-lighten-3 mb-1 text-h3 mx-1" style="line-height: 1;">:</p>
                            <div  class="text-center bg-grey-lighten-3 rounded-lg px-3 py-2">
                                <p style="font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #333333;">23</p>
                                <p style="font-weight: 500;
    font-size: 7px;
    line-height: 9px;
    letter-spacing: 0.03em;
    
    color: #333333;">hours</p>
                            </div>
                            <p class="text-grey-lighten-3 mb-1 text-h3 mx-1" style="line-height: 1;">:</p>
    
                            <div  class="text-center bg-grey-lighten-3 rounded-lg px-3 py-2">
         <p style="font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #333333;">23</p>
         <p style="font-weight: 500;
    font-size: 7px;
    line-height: 9px;
    letter-spacing: 0.03em;
    
    color: #333333;">hours</p>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-img>
    </v-carousel-item>
    </v-carousel>
       <v-row style="background-color: #fff;" class="mt-8">
        <v-col  v-for="(n, i) in items" :key="i" lg="4" xs="6" sm="4" md="6">
            <v-card flat style="border-radius: 15px;border: 1px solid #CECECE;" class="bg-white rounded-lg pa-4">
                <v-img class="rounded-lg bg-grey-lighten-2" cover width="100%" height="236px" :src="n.image">
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
    line-height: 13px;
    color: #000000;
    " class="d-flex mb-1 align-center">
        <v-rating
        v-model="rating"
        color="grey-lighten-2"
        active-color="#E7CE5D"
        class="ml-2"
        size="x-small"
        ></v-rating><span style="margin-left:-9px ;" >(65)</span> 
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
      </div></template>
<script>
export default {
    methods: {
filt(text){
var newText = text.length > 40 ? text.slice(0, 40) +'...' : text
   return newText
}
  },
  data() {
    return {
        placescards:false,
        mods:1,
        window: 'products',
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
            {
                name: 'Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png',
                price: '179.00',
                likes: '966',
            },
            {
                name: 'Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png',
                price: '57.00',
                likes: '456',
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
            {
                name: 'Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png',
                price: '179.00',
                likes: '966',
            },
            {
                name: 'Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png',
                price: '57.00',
                likes: '456',
            },
        ]
    }
}
}
</script>
