<template>
    <v-divider></v-divider>
    <v-container class="pt-0" style="max-width: 1400px;" >
        <div style="height: 122px;" class=" align-center  justify-space-between d-flex">
<div>
    <p style="font-size: 24px;
font-weight: 600;
letter-spacing: -0.72px;">Happy  shopping Frank</p>
<p style="color: #969696;
font-size: 16px;
font-weight: 500;
letter-spacing: -0.48px;"  class="mt-1">Get lots of products with attractive offers up to 50% Discount</p>
</div>
<v-chip style="width:209px;height: 44px;border: 1px solid #CECECE;" size="large" color="white" variant="elevated"  flat rounded="xl" class=" elevation-0 chipper d-flex justify-start px-2 py-2"  >
    <div>
<v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/rw-rwanda-medium_oui3ln.png"></v-img></v-avatar>
<span class="mr-2" style="color: var(--carbon-4, #333);
                      font-size: 14px;letter-spacing: -0.14px;
                      font-weight: 500;">

All of Africa
</span>
</div>
<v-spacer></v-spacer>
<v-icon class="mr-3" icon="mdi mdi-chevron-down"></v-icon>
              </v-chip>

        </div>
        <v-divider class="mb-6" color="#a4a4a4"></v-divider>
        <v-row>
            <v-col cols="12" lg="3">
               <v-card flat class="cardStyle">
                <p 
                style="font-size: 24px;
                font-weight: 600;
                letter-spacing: -0.72px;">Filter</p>
                <div class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Category</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-chip-group
        v-model="category" color="green"
        column
         
      >
        <v-chip  :value="n"
        style="border-radius: 6px;
border: 1px solid var(--carbon-2, #CECECE);"
        v-for="n in categories" :key="n"
           rounded="lg" class="px-6 py-3"
          variant="outlined" grow active-class="bordergreen text--green"
        >
        <span style="font-size: 14px;
font-weight: 500;
letter-spacing: -0.42px;"> {{n}}</span> 
        </v-chip>
        </v-chip-group>
         <v-divider class="my-4"></v-divider>
         <div class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Gender</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-chip-group
        v-model="gender" color="green"
        column
         
      >
        <v-chip  :value="n"
        style="border-radius: 6px;
border: 1px solid var(--carbon-2, #CECECE);"
        v-for="n in genders" :key="n"
           rounded="lg" class="px-8 py-3"
          variant="outlined" grow active-class="bordergreen text--green"
        >
        <span style="font-size: 14px;
font-weight: 500;
letter-spacing: -0.42px;"> {{n}}</span> 
        </v-chip>
        </v-chip-group>
       <div>

        <v-divider class="my-4"></v-divider>
         <div class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Selling Type</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-checkbox class="mb-1" hide-details="" density="compact" v-for="n in ['In-store selling only', 'Online selling only', 'Available in-store and online']" color="green" inset>  <template v-slot:label>
                <div>

                    <p class="pl-2" style="color: #000!important;
font-size: 14px;
font-weight: 500;
">{{n}}</p>
</div>
</template>
</v-checkbox>
                </div>

       <div>

        <v-divider class="my-4"></v-divider>
         <div class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Price</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-text-field class="mb-2" hide-details="" density="compact" style="text-align: center;
font-size: 14px;
font-weight: 400;
" prepend-inner-icon="mdi mdi-currency-eur" placeholder="Minimum"></v-text-field>
                <v-text-field class="mb-4" hide-details="" density="compact" style="text-align: center;
font-size: 14px;
font-weight: 400;
" prepend-inner-icon="mdi mdi-currency-eur" placeholder="Maximum"></v-text-field>
                <v-row dense>
        <v-col  cols="6" v-for="(n, i) in ['€5.00 - €10.00', '€50.00 - €100.00', '€5.00 - €1000.00', '€50.00 - €5000.00']">
            <v-chip  :value="n"
        style="border-radius: 6px;
border: 1px solid var(--carbon-2, #CECECE);"
           rounded="lg" class="w-100 d-flex justify-center py-5"
          variant="outlined"  active-class="bordergreen text--green"
        >
        <span style="font-size: 12px;
font-weight: 500;
letter-spacing: -0.42px;"> {{n}}</span> 
        </v-chip> </v-col>
    </v-row>
            </div>
       <div>

        <v-divider class="my-4"></v-divider>
         <div class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Payment</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-checkbox class="mb-1" hide-details="" density="compact" v-for="n in ['Cash on Delivery', 'Gengspayler', 'Card Payment']" color="green" inset>  <template v-slot:label>
                <div>

                    <p class="pl-2"  style="color: #000!important;
font-size: 14px;
font-weight: 500;
">{{n}}</p>
</div>
</template>
</v-checkbox>
            </div>
       <div>

        <v-divider class="my-4"></v-divider>
         <div class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Product Rating</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-checkbox class="mb-1 prat" hide-details="" density="compact" v-for="n in [4, 3, 2, 1]" color="green" inset>  <template style="opacity: 1!important;" v-slot:label>
                <div class="d-flex pb-1 align-center">
                    <v-rating
    :model-value="n"  
            active-color="#F0B136"
            half-increments density="comfortable"
            color="grey-lighten-1"
            size="x-small"
          ></v-rating>
                    <p class="pl-2"  style="color: #000!important;
font-size: 14px;
font-weight: 500;
">and above</p>
</div>
</template>
</v-checkbox>
            </div>
       <div>

        <v-divider class="my-4"></v-divider>
         <div class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Sizes</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-text-field class="mb-4" hide-details="" density="comfortable" style="text-align: center;
font-size: 14px;
font-weight: 400;
" prepend-inner-icon="mdi mdi-magnify" placeholder="Search to add sizes"></v-text-field>
                <v-row dense>
        <v-col  cols="4" v-for="(n, i) in ['XXS', 'XL', 'XS', 'S', 'M', 'L', 'XXL', '3XL', '4XL']">
        <p class="w-100 d-flex align-center justify-center" style="color: #1E1E1E;
font-size: 14px;
font-weight: 400;height: 40px;border-radius: 6px;
border: 1px solid var(--carbon-1, #EDEDED);">{{ n }}</p>
        </v-col>
    </v-row>
            </div>
       <div>

        <v-divider class="my-4"></v-divider>
         <div class="d-flex mt-4 mb-4 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Discount%</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-text-field class="mb-4" hide-details="" density="comfortable" style="text-align: center;
font-size: 14px;
font-weight: 400;
" prepend-inner-icon="mdi mdi-magnify" placeholder="Search to add sizes"></v-text-field>
    <v-checkbox class="mb-1" hide-details="" density="compact" color="green" inset>  <template v-slot:label>
                <div>

                    <p class="pl-2"  style="color: #000!important;
font-size: 14px;
font-weight: 500;
">Free Delivery</p>
</div>
</template>
</v-checkbox>
    <v-checkbox class="mb-1" hide-details="" density="compact" v-for="n in discounts" color="green" inset>  <template v-slot:label>
                <div>

                    <p class="pl-2"  style="color: #000!important;
font-size: 14px;
font-weight: 500;
">{{n+ ' Discount'}}</p>
</div>
</template>
</v-checkbox>
            </div>

               </v-card> 
            </v-col>
            <v-col cols="12" lg="9">
                <div>
                    <div class="d-flex align-center justify-space-between">
                        <p 
                        style="font-size: 15.281px;
                            font-weight: 500;
                            letter-spacing: -0.153px;">
                            Showing 1 - 60 items out of a total of 1.2k for “Home Decoration”</p>
                            <div class="d-flex align-center"><p class="mr-2" style="font-size: 14.995px;
font-weight: 500;">Sort by :</p> <v-btn style="border: 0.937px solid var(--carbon-2, #CECECE);" rounded="xl" variant="outlined"><span style="color: var(--carbon-4, #333);

font-size: 13.121px;
font-weight: 600;
line-height: 18.744px;">Popular</span> <v-icon icon="mdi mdi-chevron-down"></v-icon></v-btn> </div>
                    </div>
                    <div class="pt-4">
                        <v-chip-group
        v-model="category" color="green"
        column
         
      >
        <v-chip  :value="n"
        style="border-radius: 6px;
border: 1px solid var(--carbon-2, #CECECE);"
        v-for="n in filters" :key="n"
           rounded="xl" closable="" close-icon="mdi mdi-close-circle-outline" class="px-5 py-4"
          variant="outlined" grow active-class="bordergreen text--green"
        >
        <span style="font-size: 13px;
font-weight: 600;
letter-spacing: -0.42px;" class="pr-3"> {{n}}</span> 
        </v-chip>
        <v-chip 
        style="border-radius: 6px;
border: 1px solid var(--carbon-2, #CECECE);"
           rounded="xl" closable="" close-icon="mdi mdi-close-circle-outline" class="px-5 py-4"
          variant="outlined" grow active-class="bordergreen text--green"
        >
        <div class="d-flex align-center">

        <v-rating
    :model-value="4"  
            active-color="#F0B136"
            half-increments density="comfortable"
            color="grey-lighten-1"
            size="x-small"
          ></v-rating>
        <span style="font-size: 13px;
font-weight: 600;
letter-spacing: -0.42px;" class="px-2"> and above</span> 
                </div>
</v-chip>
        </v-chip-group>
                    </div>
                    <div>
                        <v-row id="homepage" style="background-color: #fff;" class=" mt-2">
        <v-col  v-for="(n, i) in items" :key="i" lg="3" cols="12" sm="6" md="4">
            <v-card flat class="bg-white rounded-lg ">
                <v-img class="rounded-lg bg-grey-lighten-2" cover width="100%" height="303px" :src="n.image">
                <v-btn  rounded="xl" icon style="position: absolute;right:12px;top:12px;" class="pa-0"  flat size="x-small">
                <v-icon size="small" color="#1C274C" icon="mdi mdi-heart-outline"></v-icon></v-btn>
                </v-img>

         <p @click="$router.push('/product_page')" style="font-weight: 600;
    font-size: 14px;
    line-height: 18px;cursor: pointer;
    
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
    " class="d-flex mb-1 pb-0 pt-1 align-center">
        <v-rating
        model-value="4"
        color="grey-lighten-2"
        active-color="#E7CE5D"
        class="rts" density="compact"
        size="x-small"
        ></v-rating><span style="margin-left:3px;margin-top: 3px ;" >(65)</span> 
    </p>
    <v-chip v-if="n.deliv" class="mb-2" variant="elevated" size="x-small"  color="#1273EB" style="font-size: 10px;
font-weight: 500;border-radius: 6px;
letter-spacing: 0.5px;">FREE DELIVERY</v-chip>
    <div >
    <div class="d-flex mt-4">
        <v-avatar size="40"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png"></v-img></v-avatar>
        <div style="cursor: pointer;" @click="$router.push('/vendor_page')" class="ml-2 ">
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
                          <div class="d-flex align-end justify-space-between">
                <div class=""> 
                    <h1 
    style="font-size: 20px;
            color: #1A1D1F;
    " class="priceClass mb-1">€{{n.price}}</h1>
                    <div v-if="n.disco" class="d-flex align-center"> 
<p style="color: var(--carbon-3, #969696);
font-size: 12px;
font-weight: 600;
line-height: 17.673px; /* 147.273% */
text-decoration-line: strikethrough;">€15,000.00</p>
<v-chip style="font-size: 9.429px;
font-weight: 600;
"  class="ml-1" size="x-small" color="green" rounded="0">
    20% OFF</v-chip>
                </div>
                </div>
                <v-btn size="small" style="border: 1px solid #CED2D6;
    border-radius: 6px;"  :color="n.oos? 'green':''" :variant="!n.oos? 'outlined':'elevated'" flat :class="n.oos? 'text-grey':''" class="ml-2">
                     <span class="smallBtn">{{'Add to Cart'}}</span> 
                </v-btn>
    
                </div>
            </v-card>
        </v-col>
       </v-row> 
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<style>
.bordergreen{
    border: 1px solid var(--carbon-4, #333);
}
.prat .v-label{
    opacity: 1!important;
}
</style>
<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'

export default {
    components: {
        EditorContent,
    },
    mounted() {

        this.editor = new Editor({
            extensions: [
                StarterKit,
                Link,
                Underline,
                TextAlign.configure({
                    types: ['heading', 'paragraph'],
                }),
            ],
            content: '<p>This sneakers is made from one of the best  ankara material in Ghana</p>',
        })
    },
    beforeUnmount() {
        this.editor.destroy()
    },
    data() {
        return {
            editor: null,
            gender: 'Male',
            filters: ['Fashion', 'In-store selling only', '€50.00 - €100.00', 'Cash on Delivery'],
            genders: ['Male', 'Female', 'Unisex'],
            category: 'Fashion',
            categories: ['Fashion', 'Cosmetics', 'Art', 'Home Decoration'],
            discounts: ['10%', '20%', '30%', '45%', '50%', '60%', '75%'],
            items:[
            {
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_dfuzam.png',
                price: '115.32',
                location: 'Accra, Ghana',
                likes: '1.2k',
                deliv: true,
                disco:true            },
            {
                name: 'Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_1_wnr1ld.png',
                price: '57.00',
                location: 'Madagascar',
                likes: '456',
                oos: true,
                deliv: true
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
                location: 'Accra, Ghana',
                likes: '66',
                oos: true
            },
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
                disco:true,

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
                deliv: true
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
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_dfuzam.png',
                price: '115.32',
                location: 'Accra, Ghana',
                likes: '1.2k',
                disco:true,

            },
            {
                name: 'Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_1_wnr1ld.png',
                price: '57.00',
                location: 'Madagascar',
                likes: '456',
                oos: true,
                disco:true,

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
                location: 'Accra, Ghana',
                likes: '66',
                oos: true
            },
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
                disco:true,
                location: 'Mumbasa, Kenya',
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
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_dfuzam.png',
                price: '115.32',
                location: 'Accra, Ghana',
                likes: '1.2k',
               
            },
            {
                name: 'Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_1_wnr1ld.png',
                price: '57.00',
                location: 'Madagascar',
                likes: '456',
                disco:true,
                oos: true,
              
            },
          
            {
                name: 'Green and brown kente scarf material, Made in Lagos Nigeria..',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png',
                price: '57.00',
                location: 'Mumbasa, Kenya',
                likes: '456',
                deliv: true,
                
            },
            
            {
                name: 'Orange colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png',
                price: '79.00',
                location: 'Accra, Ghana',
                likes: '66',
                disco:true,
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
        }
    },
    methods: {
filt(text){

var newText = text.length > 50 ? text.slice(0, 50) +'...' : text
   return newText

}
  },
}
</script>