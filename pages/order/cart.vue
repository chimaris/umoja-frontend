<template>
    <userHeader />
    <div style="background-color: #F7F7F7;">

    <v-container style="min-height: ;width: 100%;">
        <v-row class="pt-2">
                <v-col cols="12" lg="8" >  
<v-card class="overflow-visible" flat  color="#F7F7F7" min-height="" width="100%">
        <v-card flat style="border-radius: 10px;" class="pt-8 pb-4 px-4">
           
            <h1 style="font-weight: 800;
font-size: 32px;
line-height: 40px;
/* identical to box height */

text-transform: uppercase;

/* Carbon/4 */

color: #333333;">CART (3)</h1>
<v-divider class="my-4"></v-divider>
<div class=" d-flex justify-space-between align-center">
    <v-btn  color="red" variant="tonal"><span class="smallBtn">Clear cart</span>  <v-icon size="15" class="ml-1" icon="mdi mdi-trash-can-outline"></v-icon></v-btn>
    
    <p class="text-overline text-grey-lighten-1">price</p>
</div>
<v-divider class="my-4"></v-divider>
       
<v-sheet>
    <v-card v-for="(n, i) in 3" :key="n" class="py-2 px-2 my-2" flat color="transparent">
        <v-row >
<v-col cols="3">

    <v-img cover class="rounded-lg bg-grey-lighten-2" width="100%" height="180" src="https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_1_wnr1ld.png"></v-img>
</v-col>
<v-col cols="6">
    <v-chip size="x-small" class=" rounded-lg text-overline font-weight-regular" variant="tonal" color="green">in stock</v-chip>
    <p style="font-weight: 700;
font-size: 16px;
line-height: 140%;
color: #333333;" class="my-2">The Benin stone sculpture, made of clay in the 1900’s.</p>
<p class="lightText">Category: Stone, Art, Sculpting, Carving.</p>
<p class="lightText">Location: Lagos Nigeria.</p>
<div   class="d-flex py-2 align-center ">
<v-avatar color="white" size="40" class=" "><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1684658586/Frame_481586_piaotu.png"></v-img></v-avatar> 
<p style="font-weight: 800;
font-size: 16px;" class="ml-2">The Golden Matrix</p>
</div>
</v-col>
<v-col cols="3">
    <h1 class="text-right bigpriceClass">$150.00</h1>
</v-col>
        </v-row>
        <div class="d-flex  pt-2 pb-4 justify-space-between">
            <v-btn  color="red" variant="tonal"><span class="smallBtn">Remove</span>  <v-icon size="15" class="ml-1" icon="mdi mdi-close"></v-icon></v-btn>
            <div class="d-flex align-center ">
                <v-btn flat  color="orange" variant="tonal"><v-icon size="15" icon="mdi mdi-minus"></v-icon></v-btn>
                <p style="font-weight: 500;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.03em;
color: #333333;" class="mx-6">2</p>
                <v-btn flat  color="orange"><v-icon size="15" icon="mdi mdi-plus"></v-icon></v-btn>
                
</div>
        </div>
        <v-divider v-if="(i+1) !== 3" class="my-2"></v-divider>
    </v-card>
</v-sheet>

</v-card>
       
</v-card>
</v-col>
<v-col cols="12" lg="4">
<v-card style="border-radius: 10px;" flat class="pa-4">
<div class="mb-3">
    <p style="font-weight: 800;
font-size: 16px;
line-height: 20px;
text-transform: uppercase;
color: #333333;" class="mt-8 mb-6">cart summary</p>
<v-divider></v-divider>
<div class="d-flex  py-3 align-center justify-space-between">
<p style="font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #C20052;">Subtotal</p>
    <p style="color:#C20052" class="bigpriceClass">$1,380.32</p>
</div>
<div class="d-flex">
    <v-icon icon="mdi mdi-circle-small" color="grey"></v-icon>
    <p class="textClass text-grey">Delivery fees not Included</p>
</div>
<div class="d-flex">
    <v-icon icon="mdi mdi-circle-small" color="grey"></v-icon>
    <p class="textClass text-grey">
Every delivery is carried out by <span class="text-blue">

    umoja logistics
</span>
</p>
</div>
</div>
<v-btn flat block size="x-large" color="green"> Proceed to checkout</v-btn>
</v-card>

<v-img style="position: relative;border-radius: 10px;" class="mt-6 pt-10 bg-grey-lighten-1 pa-6 rounded-lg" width="100%" min-height="600px" cover eager src="https://res.cloudinary.com/payhospi/image/upload/v1684673782/Rectangle_465_sohqlg.png" height="auto">
    <div  class=" ">
                <h1 style="font-size: 50.4px;
line-height: 53px;" class=" mb-0 text-white font-weight-black">Nawi’s long
scarf</h1>
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
            </div>
            <div class="pa-6" style="position: absolute;bottom:0;left: 0;width: 100%;">
                <v-card style="
background: rgba(0, 0, 0, 0.7);
backdrop-filter: blur(25px); bottom: 0;
/* Note: backdrop-filter has minimal browser support */

border-radius: 20px;" class=" d-flex align-center  pa-4">
<v-avatar size="50" class="mr-4"><v-img class="bg-grey-lighten-2" src="https://res.cloudinary.com/payhospi/image/upload/v1684658586/Frame_481586_piaotu.png"></v-img></v-avatar> 
<p class="text-white">@nawi_the_skulptur_queen</p>
</v-card>     
            </div>
       
</v-img>
</v-col>
</v-row> 
<v-row>
          
            <v-col class="pt-0" cols="12" xs="12">
                <v-sheet color="transparent" class="pt-0">
         <div class=" py-8">
           <p style="font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 30px;
/* identical to box height */

text-transform: uppercase;

/* Carbon/4 */

color: #333333;">recently viewed</p> 

         </div>

   <v-row style="background-color: #F7F7F7;" class="">
    <v-col cols="6" v-for="(n, i) in items" :key="i" lg="3" md="4">
        <v-card flat class="bg-white rounded-lg pa-4">
            <v-img class="bg-grey-lighten-2 rounded-lg" cover width="100%" height="243px" :src="n.image"></v-img>
         <div style="position:relative;top: -12px ;left: -7px;">

         </div>
            <div style="height: 40px;position: relative;left: -12px;"  class="d-flex align-center ">
<v-avatar color="white" size="60" class="pa-3 "><v-img class="bg-grey-lighten-2 rounded-xl" src="https://res.cloudinary.com/payhospi/image/upload/v1684658586/Frame_481586_piaotu.png"></v-img></v-avatar> 
<p style="font-weight: 800;
font-size: 16px;">The Golden Matrix</p>
</div>
            <p class="textClass my-2">{{filt(n.name)}}</p>
            <div class="d-flex align-center">

                <h1 class="itemCost">${{n.price}}</h1>
                <v-chip v-if="n.oos == true" variant="default" size="small" class="ml-2 bg-green text-white rounded-lg"><v-icon size="12" class="mr-1 " icon="mdi mdi-clock-outline"></v-icon> Place a Bid</v-chip>
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
            <v-btn flat size="x-small" color="transparent" class="rounded-xl">
                    <v-avatar rounded="0" size="22"> <v-img width="22" src="https://res.cloudinary.com/payhospi/image/upload/v1684665314/location_1_p9ic81.png"></v-img></v-avatar>
                     <span style="font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.03em;" class="ml-1">

                        {{n.location}}
                    </span>
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
        tags: [
            {
            name: 'POPULAR products',
            image: ''
            },
            {
            name:   'top selling products',
            image: 'seal-variant'
            },
            {
            name: 'products on promo',
            image: 'sale-outline'
            },
            {
            name: 'top auction',
            image: 'trending-up'
            },
      ],
        items:[
            {
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_dfuzam.png',
                price: '115.32',
                location: 'Accra, Ghana',
                likes: '1.2k'
            },
            {
                name: 'Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_1_wnr1ld.png',
                price: '57.00',
                location: 'Madagascar',
                likes: '456',
                oos: true
            },
          
            {
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria..',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png',
                price: '57.00',
                location: 'Mumbasa, Kenya',
                likes: '456',
            },
            {
                name: 'Orange colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png',
                price: '79.00',
                location: 'Lagos, Nigeria',
                likes: '66',
                oos: true
            },
            {
                name: 'Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png',
                price: '179.00',
                location: 'Accra, Ghana',
                likes: '966',
            },
            {
                name: 'Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png',
                price: '57.00',
                location: 'Mumbasa, Kenya',
                likes: '456',
            },
            {
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria..',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png',
                price: '57.00',
                location: 'Accra, Ghana',
                likes: '456',
            },
            {
                name: 'Orange colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png',
                price: '79.00',
                location: 'Accra, Ghana',
                likes: '66',
                oos: true
            },
            {
                name: 'Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png',
                price: '179.00',
                location: 'Madagascra',
                likes: '966',
            },
            {
                name: 'Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png',
                price: '57.00',
                location: 'Accra, Ghana',
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