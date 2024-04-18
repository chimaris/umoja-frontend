<template>
    <v-container class="parent-container" :style="'max-width:'+maxw">
    <div class="d-flex my-4 justify-space-between align-center">
<div class="" style="color: var(--magnetic-green-4, #000);
font-size: 40px;
font-weight: 600;width: auto;
min-width: 155px;
line-height: 140%; /* 16.8px */
letter-spacing: -0.24px;"> Some of our Top {{title}} </div>
    <v-divider style="flex: auto;" class="ml-4"></v-divider>
<!-- <v-btn class="" color="blue" size="small" style="" variant="text" rounded="xl" >
    See all posts <v-icon class="ml-1" icon="mdi mdi-arrow-right"></v-icon>
</v-btn> -->
</div>
    <v-row dense id="homepage" style="background-color: #fff;" class=" my-8">
  <v-col  v-for="(n, i) in items" :key="i" cols="6" md="4" lg="3">
 <p  class="item mb-6" 
 style="color: #000;
font-size: 16px;
font-weight: 400;
line-height: 140%; /* 22.4px */" >{{ n }}</p>
 
    </v-col>
   </v-row> 
    </v-container>
    
</template>
<style>
p.item{
cursor: pointer;
transition:all 0.3s ease-out;
}
p.item:hover{
    color: #2b6e63!important;
    font-weight: 600!important;
    padding-left: 5px!important;
}
.divbtn{
transition: all 0.3s ease-in-out;
}
.parent-container:hover .divbtn .v-btn__content {
color: #fff!important;
}
.parent-container:hover .divbtn {
background-color: #333;
border: none!important;
}

</style>
<script>
import { useProductStore } from '~/stores/productStore.js';

export default {
    props: ['showVendor', 'vendor', 'title', 'maxwidth'],
    computed: {
        maxw() {
            return this.maxwidth ? this.maxwidth : '1400px';
        },
        vendorBol() {
            return this.vendor ? this.vendor : false;
        },
        productStore() {
            return useProductStore();
        },
        items() {
            return [
'AfriFashion Hub',
'AfriChic Couture',
'SaharaStyle Creations',
'KenteKouture',
'UrbanElegance Africa',
'ZambeziZest Apparel',
'AfroModa Emporium',
'BaobabThreads',
'NubianGlam Garb',
'SwahiliStreet Styles',
'EthnoEssence',
'Sankofa Stitches',
'MarulaMaven Boutique',
'DesertDapper Designs',
'MaliMode',
'AshantiAesthetics',
'EbonyEcho Apparel',
'ZuluZen Wardrobe',
'SaharaSizzle Couture',
'UbuntuUrban Wear',
'MaasaiMajesty Attire',
'KenteKaleidoscope Couture',
'AfriFashion Hub',
'AfriChic Couture',
'SaharaStyle Creations',
'KenteKouture',
'UrbanElegance Africa',
'ZambeziZest Apparel',
'AfroModa Emporium',
'BaobabThreads',
'NubianGlam Garb',
'SwahiliStreet Styles',
'EthnoEssence',
'Sankofa Stitches',
'MarulaMaven Boutique',
'DesertDapper Designs',
'MaliMode',
'AshantiAesthetics',
'EbonyEcho Apparel',
'ZuluZen Wardrobe',
'SaharaSizzle Couture',
'UbuntuUrban Wear',
'MaasaiMajesty Attire',
'KenteKaleidoscope Couture'
            ]
        },
    },
    methods: {
        filt(text) {
            var newText = text.length > 50 ? text.slice(0, 50) + '...' : text;
            return newText;
        }
    },
};
</script>