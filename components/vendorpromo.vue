<template>  <div>

    <div style="background-color: ;" class="d-flex py-6 align-center justify-space-between">
        <p style="font-weight: 600;
font-size: 12px;
line-height: 15px;
text-transform: uppercase;
color: #969696;"> 3 live promos</p>
        <div >
            <v-btn flat rounded="xl" size="x-small" color="transparent" style=" font-size: 20px; color:#333333" icon="mdi mdi-view-grid"></v-btn>
            <v-btn flat rounded="xl" size="x-small" color="transparent" style=" font-size: 20px; color:#333333" icon="mdi mdi-order-bool-descending-variant" class="mx-2"></v-btn>
            <v-btn variant="tonal" color="#333333" class="textClass" flat> <v-icon class="mr-2" size="20" icon="mdi mdi-tune-vertical"></v-icon>Filter</v-btn>
        </div>
    </div>
    <div class="mb-6" v-for="n in 2">

<v-sheet flat color="#FDF1ED" class="px-8 rounded-lg d-flex justify-space-between align-center mb-6 py-3">
<div class="d-flex align-center">

    <v-icon icon="mdi mdi-sale" color="orange"></v-icon> <p class="ml-2" style="font-weight: 600;
font-size: 14px;
line-height: 18px;
color: #F38218;">PROMO WITH 30% OFF</p>
</div>
<div class="d-flex align-center">
<p style="font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #333333;
">Time Left</p>
<p style="font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #333333;" class="ml-2">00:00:00</p>
</div>
</v-sheet>
       <v-row style="background-color: #fff;" class="">
        <v-col cols="12" v-for="(n, i) in items" :key="i" lg="4" md="6">
            <product-component :index="i" :item="n" />

        </v-col>
       </v-row>   
        </div>
 
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
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria..',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png',
                price: '57.00',
                likes: '456',
            },
            
        ]
    }
}
}
</script>
