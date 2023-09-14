<template>
    <v-container class="parent-container" :style="'padding-top:100px;max-width:'+maxw">
    <div class="d-flex my-8 align-center">
<div class="" style="color: var(--magnetic-green-4, #000);
font-size: 24px;
font-weight: 600;width: auto;
min-width: 155px;
line-height: 120%; /* 16.8px */
letter-spacing: -0.24px;"> {{title}} </div>
<v-divider style="flex: auto;" class="mx-4"></v-divider>
<v-btn class="divbtn" color="#333" size="large" style="" variant="outlined" rounded="xl" >
See All <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
</v-btn>
    </div>
    <div id="homepage" style="background-color: #fff;" class="rower my-8">
        <div class="d-inline-block mr-4" style="width: 550px;"  v-for="(n, i) in items" :key="i" >
 <populartwoComponent :showBid="showBid" :index="i" :item="n" />
 
        </div>
   </div> 
    </v-container>
    
</template>
<style>
/* .divbtn{
transition: all 0.3s ease-in-out;
}
.parent-container:hover .divbtn .v-btn__content {
color: #fff!important;
}
.parent-container:hover .divbtn {
background-color: #333;
border: none!important;
} */

</style>
<script>
import { useProductStore } from '~/stores/productStore.js';

export default {
props:['showVendor','vendor', 'showBid', 'items' ,'title', 'maxwidth'],
computed: {
maxw() {
return this.maxwidth? this.maxwidth : '1400px'
},
vendorBol() {
return this.vendor? this.vendor : false
},
productStore() {
        return useProductStore();
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