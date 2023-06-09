<template>  <div>

    <div style="background-color: ;" class="d-flex py-6 align-center justify-space-between">
        <p style="font-weight: 600;
font-size: 12px;
line-height: 15px;
text-transform: uppercase;
color: #969696;"> 72 products found</p>
        <div >
          <v-btn variant="tonal" color="#333333" class="textClass" flat> <v-icon class="mr-2" size="20" icon="mdi mdi-tune-vertical"></v-icon>Filter</v-btn>
        </div>
    </div>

       <v-row style="background-color: #fff;">
        <v-col cols="12" v-for="(n, i) in items" :key="i" lg="4" md="6">
            <v-card flat style="border-radius: 15px;border: 1px solid #CECECE;" class="bg-white rounded-lg ">
                <v-img @click="dialog = true" class="rounded-lg bg-grey-lighten-2" cover width="100%" height="216" :src="n.image">
                <p v-if="n.oos" class="text-white py-1 px-3" rounded="lg"  style="font-size: 14px;
line-height: 17px;
position: absolute;right:12px;top:12px;border-radius: 3.34447px;background:rgba(0, 0, 0, 0.5)"  flat size="x-small">
1/2
            </p>
                </v-img>
        
            </v-card>
        </v-col>
       </v-row>    
       <v-dialog  v-model="dialog"
        transition="dialog-bottom-transition"
        width="auto"
      >
               <v-card max-width="700px" min-width="60vw" class="rounded-lg">
       <v-row>
        <v-col cols="12" class="px-0" style="min-height: 400px;" md="6">
            <v-img cover height="" src="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_600/v1685878571/Rectangle_1903_2x_ssbqbl.png"></v-img>
        </v-col>
        <v-col cols="12" class="px-0" md="6">
            <v-sheet class="py-0">
                <div class="d-flex pa-5">
                    <v-avatar size="48" class="mr-5">
                        <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1685880308/Frame_221_gj6tpk.png"></v-img>
                    </v-avatar>
                    <div class="w-100  d-flex justify-space-between">
                        <div>

                    <div class="d-flex">
                        <p style="font-weight: 700;
font-size: 16px;
line-height: 140%;
color: #1E1E1E;">Bonsu Thompson</p>
                        <p class="" style="font-weight: 400;
font-size: 14px;
line-height: 140%;
color: #969696;"><v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>23 Nov, 2022</p>
                    </div>
                    <div class="d-flex">
                      <v-chip  size="x-small" class="px-3" color="#936900" rounded="0">Stylist</v-chip>
                        <p class="" style="font-weight: 400;
font-size: 14px;
color: #1E1E1E;"><v-icon class="mx-1" icon="mdi  mdi-circle" size="6" color="grey-lighten-2"></v-icon>042, Coal city state, Ghana</p>
                    </div>
                    </div>
                    <div class="pr-2">
                        <v-icon icon="mdi mdi-dots-horizontal"></v-icon>
                    </div>
                    
                </div>
            </div>
            <div class="px-5">
                
            <p style="font-weight: 400;
font-size: 16px;
line-height: 140%;
letter-spacing: 0.03em;" >Lorem ipsum dolor sit amet consectetur. Nulla vitae mauris odio urna integer molestie laoreet. Enim viverra cursus imperdiet aliquam. Sed ut commodo diam est aenean at.</p>
            <div class="d-flex justify-space-between align-center py-2">
                <div>
                    <v-icon icon="mdi mdi-heart-outline"></v-icon> 1.2k likes
                </div>
                <v-btn icon="mdi mdi-tray-arrow-up" flat ></v-btn>
            </div>            </div>

            <v-divider></v-divider>
            <div>
                <h1 style="font-weight: 700;
font-size: 24px;
line-height: 27px;
color: #000000;" class="pa-5">Products</h1>
        </div>
        <v-divider></v-divider>
    </v-sheet>

        </v-col>
       </v-row>
          </v-card>
      </v-dialog>  
    </div>
      
      </template>
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
        dialog:false,
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
