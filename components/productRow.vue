<template>
        <v-container class="parent-container"  style="max-width:1400px">
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
        <v-row id="homepage" style="background-color: #fff;" class=" mt-8">
      <v-col  v-for="(n, i) in items" :key="i" lg="24" cols="6" sm="4" md="3">
     <product-component :index="i" :item="n" />
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
    props:['showVendor', 'title'],
  data() {
    return {
     
    };
  },
  computed: {
    productStore() {
            return useProductStore();
        },
   items() {
           return this.productStore.getProductsArray('row');
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