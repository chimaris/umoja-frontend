<template>
        <v-container  style="max-width:1400px">
        <div class="d-flex mb-8 mt-12 align-center">
<div class="" style="color: var(--magnetic-green-4, #000);
font-size: 24px;
font-weight: 600;width: auto;
    min-width: 155px;
line-height: 120%; /* 16.8px */
letter-spacing: -0.24px;"> {{title}} </div>
    <v-divider style="flex: auto;" class="mx-4"></v-divider>
    <v-btn color="#333" size="large" style="" variant="outlined" rounded="xl" >
See All <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
    </v-btn>
        </div>
        <v-row id="homepage" style="background-color: #fff;" class=" mt-8">
        <v-col  v-for="(n, i) in items" :key="i" lg="2" cols="6" sm="4" md="3">
            <v-card flat class="bg-white rounded-lg ">
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
    <div v-if="showVendor" >
    <div class="d-flex">
        <v-avatar size="40"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png"></v-img></v-avatar>
        <div class="ml-2 ">
            <p style="color: #1E1E1E;
font-size: 14px;
font-weight: 600;
letter-spacing: -0.14px;">Genevieve Obukeme</p>
<p style="color: #969696;
font-size: 12px;
font-weight: 500;
letter-spacing: -0.12px;">Accra, Ghana🇬🇭</p>
        </div>
        </div>
        <v-divider color="#a4a4a4" class="my-4"></v-divider>
    </div>
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
</template>
<script>
export default {
    props:['showVendor', 'title'],
  data() {
    return {
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
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_dfuzam.png',
                price: '115.32',
                location: 'Accra, Ghana',
                likes: '1.2k'
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
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria..',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png',
                price: '57.00',
                location: 'Mumbasa, Kenya',
                likes: '456',
            },
    
     
        ]

    };
  },
  methods: {
filt(text){

var newText = text.length > 50 ? text.slice(0, 50) +'...' : text
   return newText

}
  },
};
</script>