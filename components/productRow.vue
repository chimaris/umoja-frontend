<template>
        <v-container class="parent-container" :style="'max-width:'+maxw">
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
        <v-row id="homepage" style="    background: transparent!important;" class=" mt-8">
      <v-col  v-for="(n, i) in items" :key="i" cols="6" sm="4" :lg="maxwidth? '3': '24'"  :md="maxwidth? '4': '3'">
     <vendor-component :category="category" v-if="vendorBol" :index="i" :item="n" />
     <product-component :cover="coverbol" :category="category" v-else :index="i" :showVendor="showVendor" :showdisco="showdisco" :item="n" />
        </v-col>
       </v-row> 
        </v-container>
        
</template>
<style>
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
    props:['showVendor', 'vendorlist', 'cover', 'category', 'showdisco','vendor', 'items', 'title', 'maxwidth'],
  computed: {
    maxw() {
    return this.maxwidth? this.maxwidth : '1400px'
  },
    vendorBol() {
    return this.vendor? this.vendor : false
  },
    coverbol() {
    // Returns true if this.cover is set, otherwise returns true
    return this.cover !== undefined ? this.cover : true;
    },
    productStore() {
            return useProductStore();
        },
   items() {
if (this.vendor) {
if (this.vendor == true) {
  return this.vendorlist
}else{
  return this.getitems
}
}else{
  return this.getitems
}
        },
   getitems() {
if (this.items) {
if (this.items.length > 0) {
  return this.items
}else{
  return this.productStore.getProductsArray('row')
}
}else{
  return this.productStore.getProductsArray('row')
}
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