<template>
  <v-card flat class="pa-0 cardStyle">
    <div style=" height: 40px;" class="d-flex bg-grey-lighten-4 align-center justify-center w-100">
      <p class="text-grey-lighten-1" style="font-size: 14px; font-weight: 600; line-height: 140%;">Available</p>
    </div>
    <div class="px-6 py-4">
      <p class="text-grey-lighten-1" style="font-size: 20px; font-weight: 500;">Set Quantity</p>
      <div class="d-flex justify-space-between align-center my-2">
        <p class="text-grey-lighten-1" style="
font-size: 14px;
font-weight: 500;
line-height: 140%;">Quantity: <span class="text-grey-lighten-1">0</span></p>

        <v-btn-group
        border
         rounded="xl"
        divided density="compact"
      >
        <v-btn  :ripple="false" color="grey-lighten-4" rounded="0">
          <v-icon color="grey-lighten-1"  icon="mdi mdi-minus "></v-icon>
        </v-btn>

        <v-btn :ripple="false" color="grey-lighten-4" rounded="0">
        <span class="text-grey-lighten-1">

          0
        </span>
        </v-btn>
        <v-btn  :ripple="false" color="grey-lighten-4" class="" rounded="0">
          <v-icon color="grey-lighten-1"  icon="mdi mdi-plus"></v-icon>
        </v-btn>
</v-btn-group>
    </div>
      <v-divider color="grey-lighten-1" class="my-4"></v-divider>
      <div class="d-flex justify-space-between align-center mb-4 my-2">
        <p style="color: #969696; font-size: 14px; font-weight: 500; line-height: 140%;">Total</p>
        <p style="width: 150px;height: 32px;
    " class=" my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-xl ">
   </p>
      </div>
      <v-btn  block class="mb-2" size="large" flat color="grey-lighten-4" rounded="xl"></v-btn>
      <v-btn block style="border-color:#969696;color: #333; font-size: 14px; font-weight: 600;" border size="large" variant="outline" flat color="#969696" disabled rounded="xl">Buy now</v-btn>
      <div class="d-flex mt-4 justify-space-between">
    <v-btn  disabled  width="48%" variant="text"  class="" >
            <v-icon icon="mdi mdi-heart-outline" class="mr-2" size="17"></v-icon>
            <span 
        style="
    font-size: 14px;
    font-weight: 600;">Favorite</span> </v-btn>
    <v-divider inset="" vertical="" ></v-divider>
    <v-btn  disabled width="48%" variant="text"  class="" >
            <v-icon icon="mdi mdi-share-variant-outline" class="mr-2" size="17"></v-icon>
            <span 
        style="
    font-size: 14px;
    font-weight: 600;">Share</span> </v-btn>
</div>
    </div>
  </v-card>
  <v-card  flat class=" mt-4 py-9 cardStyle">
    <div class="d-flex justify-space-between align-center">
        <p style="
font-size: 14px;
font-weight: 600;" class="text-grey-lighten-1">Ship to</p>
  <p style="width: 100px;height: 14px;
    " class="d-flex my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>
    </div>
    <v-divider color="#EDEDED" class="my-4"></v-divider>

    <div>
<p style="
font-size: 20px;
font-weight: 600;
line-height: 140%;" class="text-grey-lighten-1">Delivery Options</p>
<div style="color: var(--carbon-6, #1E1E1E);
font-size: 14px;

line-height: 140%;">
  <p style="width: 50%;height: 14px;
    " class="d-flex my-1 mt-8  pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>

   <p style="width: 100px;height: 14px;
       " class="d-flex my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
      </p>
   <p style="width: 100%;height: 14px;
       " class="d-flex my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
      </p>
  <p style="width: 50%;height: 14px;
    " class="d-flex my-1 mt-10  pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>

   <p style="width: 100px;height: 14px;
       " class="d-flex my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
      </p>
   <p style="width: 100%;height: 14px;
       " class="d-flex my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
      </p>


</div> 

<v-divider color="#EDEDED" class="my-4"></v-divider>

<div style="
font-size: 14px;
font-weight: 500;
line-height: 140%; /* 19.6px */
letter-spacing: -0.14px;">
   <v-row dense v-for="(item, index) in 4" :key="index" class="">
      <v-col cols="3" :style="{ color: item.labelColor }">  <p style="width: 100px;height: 14px;
       " class="d-flex my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
      </p></v-col>
      <v-col cols="8" :style="{ color: item.valueColor }">  <p style="width: 100px;height: 14px;
       " class="d-flex my-1 ml-8  mb-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
      </p></v-col>
    </v-row>
</div>
 </div>
</v-card> 
</template>

<script>
export default {
  data() {
    return {
      loaded: false, // You can set this to true once your data is loaded
    };
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
