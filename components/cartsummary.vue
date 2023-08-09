<template>
    <v-col cols="12" lg="4">

<v-card style="border-radius: 15px;
border: 1px solid var(--carbon-2, #CECECE);" flat class="pa-4">
<v-row dense>
    <v-col cols="3">
        <v-avatar color="grey-lighten-2" style="border-radius: 15px;" class="  mr-3 ml-0" size="100" ><v-img cover src="https://res.cloudinary.com/payhospi/image/upload/v1691574327/s-2-gs-x-1-po-l_ckeqxo.png"></v-img></v-avatar>
    </v-col>
    <v-col cols="6">
             <div class="px-2" >
            <p class="mb-1" style="font-weight: 600;
font-size: 16px!important;
line-height: 20px;
color: #333333;">The Benin stone ... </p>
            <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #969696;" class="text-truncate">Category: Stone, Art, Sculpting, Carving.</p>
            <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #969696;" class="mt-4 text-truncate">X2</p>
          </div> </v-col>
    <v-col cols="3">

            <p class="mb-1 text-right" style="font-weight: 600;
font-size: 16px!important;
line-height: 20px;
color: #333333;">€ 5,829.00 </p>
        </v-col>
</v-row>

    <div class=" pt-4 d-flex align-center justify-space-between">
        <div class="d-flex align-center" style="color: var(--carbon-4, #333);

font-size: 14px;
font-weight: 600;">
<v-icon size="18" class="mr-2" icon="mdi mdi-shopping"></v-icon> +4 items
        </div>
        <a style="color: #1273EB;
font-size: 14px;
font-weight: 600;">View all items</a>
    </div>

<hr  class="dashed-2 my-6" />

<p class="inputLabel">Discount Code</p>             
<div class="d-flex w-100 align-center">

        
        <v-text-field  hide-details="" placeholder="Add discount code" density="comfortable"  >
        </v-text-field>
<v-btn flat   size="large" style="border: 1px solid var(--carbon-2, #CECECE);" class=" ml-3" rounded="xl">
    <span style="color: #333;
font-size: 14px;
font-weight: 600;">
Apply
</span> </v-btn>
</div>
<p style="font-weight: 400;
font-size: 14px;
line-height: 24px;" class="mt-4">     
<strong>
New Customer?
</strong> 
 
 <a
        target="_blank" style="color:#0076FF;text-decoration:underline"
        href="#"
        v-bind="props"
        @click.stop
      >
      Sign up
      </a> <span>to get better offer</span>
      
</p>
<hr  class="dashed-2 my-6" />

<div class="mb-3">
   
<div class="d-flex  pb-3 align-center justify-space-between">
<p style="font-weight: 500;
font-size: 14px;
color: #969696;">Subtotal</p>
    <p style="color: var(--carbon-4, #333);
font-size: 16px;
font-weight: 600;" class="">€ 5,829.00</p>
</div>
<div class="d-flex  pb-3 align-center justify-space-between">
<p style="font-weight: 500;
font-size: 14px;
color: #969696;">Discount</p>
    <p style="color: var(--carbon-4, #333);
font-size: 16px;
font-weight: 600;" class="">€ 0.00</p>
</div>
<div class="d-flex  pb-3 align-center justify-space-between">
<p style="font-weight: 500;
font-size: 14px;
color: #969696;">Shipment cost</p>
    <p style="color: var(--carbon-4, #333);
font-size: 16px;
font-weight: 600;" class="">€ 22.50</p>
</div>
<hr  class="dashed-2 my-6" />
<div class="d-flex  pb-3 align-center justify-space-between">
<p style="font-weight: 500;
font-size: 14px;
color: #969696;">Grand Total</p>
    <p style="color: var(--carbon-4, #333);
font-size: 24px;
font-weight: 600;" class="">€ 5,829.00 </p>
</div>

</div>
<v-btn :to="route" flat block size="x-large" class="mt-8" rounded="xl" color="green"> <span style="font-size: 14px;
font-style: normal;
font-weight: 600;">{{ text }}</span> </v-btn>
</v-card>

</v-col>
</template>
<script>
export default {
    props:['route', 'text'],
  data() {
    return {

    }
}
}
</script>