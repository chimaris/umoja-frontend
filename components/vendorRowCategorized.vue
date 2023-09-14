<template>
        <v-container style="height: 895px;" class="parent-container" :style="'max-width:'+maxw">
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
        <div class="">
                        <v-chip-group
        v-model="category" color="green"
        column
         
      >
        <v-chip  :value="n"
        style="border-radius: 6px;
border: 1px solid var(--carbon-2, #CECECE);"
        v-for="n in filters" :key="n"
           rounded="xl"   close-icon="mdi mdi-close-circle-outline" class="px-5 py-4"
          variant="outlined" grow active-class="bordergreen text--green"
        >
        <span style="font-size: 14px;
font-weight: 500;
letter-spacing: -0.42px;"> {{n}}</span> 
        </v-chip>
       
        </v-chip-group>
                    </div>
        <div id="homepage" style="    background: transparent!important;" class="rower mt-8">
      <div class="d-inline-block mr-4" style="width: 254px;" v-for="(n, i) in items" :key="i">
     <vendor-component :category="category" v-if="vendorBol" :index="i" :item="n" />
     <product-component :cover="coverbol" :category="category" v-else :index="i" :showVendor="showVendor" :showdisco="showdisco" :item="n" />
        </div>
      <div class="d-inline-block mr-4" style="width: 254px;" v-for="(n, i) in items" :key="i">
     <vendor-component :category="category" v-if="vendorBol" :index="i" :item="n" />
     <product-component :cover="coverbol" :category="category" v-else :index="i" :showVendor="showVendor" :showdisco="showdisco" :item="n" />
        </div>
        <div class="d-inline-block mr-4" style="width: 134px;">
        </div>
       </div> 
        </v-container>
        
</template>
<style>
.divbtn{
    transition: all 0.3s ease-in-out;
}
/* .parent-container:hover .divbtn .v-btn__content {
color: #fff!important;
} */
/* .parent-container:hover .divbtn {
  background-color: #333;
  border: none!important;
} */

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
  data() {
    return {
      loaded: false,
      category: 'All',
      filters: ['All', 'Fashion', 'Art', 'Home Decoration', 'Cosmetics']
    }
  },
  methods: {
filt(text){

var newText = text.length > 50 ? text.slice(0, 50) +'...' : text
   return newText

}
  },
};
</script>