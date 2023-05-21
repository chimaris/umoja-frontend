<template>
    <userHeader />
    <div style="min-height: 120vh;width: 100%;">
        <v-img
    height="251" style="position: relative;"
    width="100%" cover class="d-flex  justify-end align-end"
    src="https://res.cloudinary.com/payhospi/image/upload/v1684584271/Rectangle_448_x784z8.png"
  >
  <v-container style="width: 100%;" class="d-flex pb-6 justify-end align-end">
    <v-btn size="large" flat class="d-flex align-center text-white " style="text-transform:none!important"  color="rgba(0, 0, 0, 0.5)" ><v-icon icon="mdi mdi-heart-outline" class="mx-2" size="21"></v-icon> view all favorite <v-badge class="mx-6 mb-1" rounded="lg" color="white" content="113"></v-badge></v-btn>
</v-container>
</v-img>
<v-card class="overflow-visible" flat tile color="#F7F7F7" min-height="100vh" width="100%">
    <v-container>
        <v-row>
            <v-col md="4" cols="12" xs="12">
                <v-card style="margin-top: -125px;z-index: 99;" flat  class="pb-12 rounded-lg" width="100%" >
                    <v-sheet width="100%" style="padding-top: 80px" >
<div class="text-center pa-4 pb-6">
    <v-avatar class="mx-auto" style="border: 2.93049px solid #FCE7CE;" size="100">
        <v-img src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684497818/Frame_481586_zfgoph.png"></v-img>
    </v-avatar>
    <h3 class="py-4" style="font-size: 24px;font-weight: 800;
line-height: 30px;">Thatdesignpro <v-icon color="#1273EB" size="22" icon="mdi mdi-check-decagram"></v-icon></h3>
<v-btn  color="orange"  width="80%" flat> Follow</v-btn>
</div>
<v-divider></v-divider>
<div class="pa-4 px-6 align-center d-flex">
    <v-avatar rounded="0" size="19"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684591613/umoja/location_q0ouqw.png"></v-img></v-avatar>
      <p class="textClass px-4">Waldsteingartenstrasse 13,  Vienna, Austria 1020</p>
</div>
<v-divider></v-divider>
<div class="pa-4 justify-center align-center d-flex">
    <v-btn size="small"  class="rounded-xl mx-3"  :key="n.icon" v-for="n in buttons" flat rounded="">
    <v-avatar rounded="0" size="23"><v-img :src="n.icon"></v-img></v-avatar>
    </v-btn>
</div>
<v-divider></v-divider>
<div class="pa-2">

    <div class="pa-4 align-center justify-space-between d-flex">
        <div class=" align-center d-flex">
            <v-avatar rounded="0" size="23"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684592715/umoja/money_1_ydidft.png"></v-img></v-avatar>
            <p class="textClass text-grey-darken-1 px-2">Total Sales</p>
        </div> 
        <p  class="priceClass ">$400</p>
    </div>
    <div class="pa-4 align-center justify-space-between d-flex">
        <div class=" align-center d-flex">
            <v-avatar rounded="0" size="23"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684592715/umoja/profile-2user_2_jcekww.png"></v-img></v-avatar>
            <p class="textClass text-grey-darken-1 px-2">Followers</p>
        </div> 
        <p  class="priceClass ">2,800</p>
    </div>
    <div class="pa-4 align-center justify-space-between d-flex">
        <div class=" align-center d-flex">
            <v-avatar rounded="0" size="23"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684592715/umoja/profile-2user_3_qaqnvv.png"></v-img></v-avatar>
            <p class="textClass text-grey-darken-1 px-2">Following</p>
        </div> 
        <p  class="priceClass ">1,200</p>
    </div>
</div>
<v-divider></v-divider>
<v-sheet class="px-6 pb-12 pt-8">
<h3 style="font-weight: 700;
font-size: 24px;
line-height: 30px;
color: #333333;">BIO <span class="text-grey">(Fabric)</span></h3>

<p class="textClass text-justify mt-4">Lorem ipsum dolor sit amet consectetur. Sit et vulputate et euismod mi enim. Tellus sagittis augue proin ipsum posuere. Suspendisse consectetur id mollis curabitur amet. Amet lacinia ridiculus vitae platea.
<br>
<br>
Pellentesque enim orci aenean interdum morbi suspendisse. Dictumst aliquam donec in risus semper arcu faucibus.</p>
<p class="text-center textClass pt-12 text-grey-darken-1">
    MEMBER SINCE: MARCH 24, 2020
</p>
</v-sheet>
                    </v-sheet>
                </v-card>
            </v-col>
            <v-col md="8" xs="12">
                <v-sheet color="transparent" class="mt-2">
                    <v-tabs
      v-model="tab"
      bg-color="#F7F7F7"
      color="green"
      grow
    >
      <v-tab class="f"
        v-for="item in ['all products', 'media posts', 'articles']"
        :key="item"
        :value="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
<div style="background-color: #F7F7F7;" class="d-flex py-6 align-center justify-space-between">
    <p style="font-weight: 500;font-size: 16px;line-height: 20px;color: #969696;"> 72 products found</p>
    <div >
        <v-btn flat rounded="xl" size="x-small" color="transparent" style=" font-size: 20px; color:#333333" icon="mdi mdi-view-grid"></v-btn>
        <v-btn flat rounded="xl" size="x-small" color="transparent" style=" font-size: 20px; color:#333333" icon="mdi mdi-help" class="mx-2"></v-btn>
        <v-btn variant="tonal" color="#333333" class="textClass" flat> <v-icon size="20" icon="mdi mdi-filter-outline"></v-icon>Filter</v-btn>
    </div>
</div>

<v-img cover height="142.5px" class="bg-black rounded-lg" src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1000/v1684602013/Rectangle_458_zafbwy.png">
    <div>
        <v-row class="d-flex pa-4 px-6 justify-space-between align-center">
            <v-col  cols="12" lg="5">
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
            <v-col  cols="12" lg="4">
                <v-card style="background: rgba(0, 0, 0, 0.25);
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
   <v-row style="background-color: #F7F7F7;" class="mt-2">
    <v-col cols="12" v-for="(n, i) in items" :key="i" lg="4" md="6">
        <v-card flat class="bg-white rounded-lg pa-4">
            <v-img class="rounded-lg" cover width="100%" height="243px" :src="n.image"></v-img>
            <p class="textClass my-2">{{filt(n.name)}}</p>
            <div class="d-flex align-center">

                <h1 class="itemCost">${{n.price}}</h1>
                <v-chip v-if="n.oos == true" color="red" size="small" class="ml-2 rounded-lg"><v-icon size="12" class="mr-1 " icon="mdi mdi-cancel"></v-icon> out of stock</v-chip>
            </div>
            <v-divider class="my-4"></v-divider>
            <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center"> 
                <v-btn flat size="x-small" color="transparent" class="rounded-xl">
                    <v-avatar rounded="0" size="22"> <v-img width="22" src="https://res.cloudinary.com/payhospi/image/upload/v1684611504/Vector_Stroke_hc1tqr.png"></v-img></v-avatar>
                     <span style="font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.03em;" class="ml-1">

                        {{n.likes}}
                    </span>
                    </v-btn> 
            </div>
            <v-btn   :color="n.oos? 'grey-lighten-3':'green'" flat :class="n.oos? 'text-grey':''" class="ml-2">
                <v-icon icon="mdi mdi-plus" class="mr-2"></v-icon>
                 <span class="smallBtn">{{!n.oos?'Create':'Add to cart'}}</span> 
            </v-btn>

            </div>
        </v-card>
    </v-col>
   </v-row>        
        <p style="font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #CECECE;" class="font-weight-regular pt-12 mt-12 mb-4">©2022 Umoja. All Rights Reserved.</p>
</v-sheet>
            </v-col>
        </v-row>
    </v-container>
</v-card>
    </div>
</template>
<script>
export default {
  data() {
    return {
        placescards:false,
        mods:1,
        tab: null,
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

    };
  },
  computed: {
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