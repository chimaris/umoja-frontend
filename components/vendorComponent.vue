<template>
    <v-card width="100%" v-if="loaded" style="overflow: visible;" flat class="bg-white parent-card rounded-lg mb-2">
        <v-img  class=" bg-grey-lighten-5" cover style="border-radius: 16px;" width="100%" height="237" :src="item.image">
        </v-img>
<div class="px-4">

        <v-avatar style="    margin-top: -37px;" size="67">
        <v-img class=" bg-grey-lighten-2" cover style="border-radius: 16px;" width="100%" height="237" :src="item.vendorImage">
        </v-img>
        </v-avatar>
         <p @click="$router.push('/vendor_page')" style="font-weight: 600;
    font-size: 20px;
    line-height: normal;cursor: pointer;
    color: #000000;
    " class=" mt-4">{{item.vendorName}}</p>
      <div class="d-block   mt-1">
   <div class="d-flex align-center">
    <p style="color: #969696;
            font-size: 14px;
            font-weight: 500;
            line-height: 140%;" class="text-capitalize">{{category}}</p> 
       <v-icon class="mx-1" size="5" color="grey-lighten-1" icon="mdi mdi-circle"></v-icon>
       <p 
            style="color: #969696;
            font-size: 14px;
            font-weight: 500;
            line-height: 140%;">  {{item.subCategory}}</p>
   </div>
    </div> 
   <p style="font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    color: #000000;
    " class="d-flex mb-1 pb-0 pt-1 align-center">
        <v-rating readonly
        model-value="4"
        color="grey-lighten-2"
        active-color="#E7CE5D"
        class="rts" density="compact"
        size="x-small"
        ></v-rating><span style="margin-left:3px;margin-top: 3px ;" >(101)</span> 
    </p>
    <div variant="text" size="x-small" style="font-size: 12px;
font-weight: 500;border-radius: 6px;color: #F38218;
letter-spacing: -0.12px;"><v-icon size="14" class="mr-2" style="transform: rotate(90deg);" icon="mdi mdi-tag"></v-icon>Delivery within 5 Working Days</div>
  </div>

            
            </v-card>
            <vendorloader  v-else />
</template>
<script>
import { useLikedStore } from '~/stores/likedStore';

export default {
    props: ['item','category', 'index'],
    computed: {
        likedStore() {
            return useLikedStore();
        },
    },
    data() {
        return {
            loaded: false,
        };
    },
    mounted() {
        this.mockLoading();
    },
    methods: {
        mockLoading() {
            setTimeout(() => {
                this.loaded = true;
            }, 2000);
        },
   
        filt(text) {
            var newText = text.length > 50 ? text.slice(0, 50) + '...' : text;
            return newText;
        },
    },
};
</script>
<style>

</style>