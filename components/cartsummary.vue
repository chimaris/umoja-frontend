<template>
    <v-col cols="12" lg="4">

<v-card v-if="cartStore.checkoutItems.length > 0"  style="border-radius: 15px; border: 1px solid var(--carbon-2, #CECECE);" flat class="pa-4">
    <v-row dense v-if="!viewAll">
        <v-col cols="3">
            <v-avatar color="grey-lighten-2" style="border-radius: 15px;" class="  mr-3 ml-0" size="100" >
                <v-img v-if="cartStore.checkoutItems[0].photo == null" cover src="https://res.cloudinary.com/payhospi/image/upload/v1714649462/umoja/download_1_dwnmbf.png"></v-img>
                <v-img v-else-if="cartStore.checkoutItems[0].photo.includes(',')" cover :src="cartStore.checkoutItems[0].photo.split(',')[0]"></v-img>
                <v-img v-else cover :src="cartStore.checkoutItems[0].photo"></v-img>
            </v-avatar>
        </v-col>
        <v-col cols="5">
            <div class="px-2" style="max-width: 250px; overflow: hidden; text-overflow: ellipsis;" >
                <p class="mb-1 text-truncate" style="font-weight: 600; font-size: 16px!important; line-height: 20px; color: #333333;">{{cartStore.checkoutItems[0].name}} </p>
                <p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696;" class="text-truncate">Category: {{cartStore.checkoutItems[0].category_name}}</p>
                <p style="font-weight: 500; font-size: 14px; line-height: 18px; color: #969696;" class="mt-4 text-truncate">X{{ cartStore.checkoutItems[0].quantity }}</p>
            </div> 
        </v-col>
        <v-col cols="4">
            <p class="mb-1 text-right" style="font-weight: 600; font-size: 16px!important; line-height: 20px; color: #333333;">{{formattedPrice((cartStore.checkoutItems[0].quantity * cartStore.checkoutItems[0].price))}} </p>
        </v-col>
    </v-row>
<template v-if="viewAll">
    <v-row dense v-for="item in cartStore.checkoutItems" :key="item.id">
    <v-col cols="3">
        <v-avatar color="grey-lighten-2" style="border-radius: 15px;" class="  mr-3 ml-0" size="100" >
            <v-img v-if="item.photo == null" cover src="https://res.cloudinary.com/payhospi/image/upload/v1714649462/umoja/download_1_dwnmbf.png"></v-img>
            <v-img v-else-if="item.photo.includes(',')" cover :src="item.photo.split(',')[0]"></v-img>
            <v-img v-else cover :src="item.photo"></v-img>
        </v-avatar>
    </v-col>
    <v-col cols="6">
             <div class="px-2" style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;" >
            <p class="mb-1 text-truncate" style="font-weight: 600;
font-size: 16px!important;
line-height: 20px;
color: #333333;">{{item.name}} </p>
            <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #969696;" class="text-truncate">Category: Stone, Art, Sculpting, Carving.</p>
            <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #969696;" class="mt-4 text-truncate">X{{ item.quantity }}</p>
          </div> </v-col>
    <v-col cols="3">

            <p class="mb-1 text-right" style="font-weight: 600;
font-size: 16px!important;
line-height: 20px;
color: #333333;">{{formattedPrice((item.price * item.quantity))}} </p>
        </v-col>
</v-row>
</template>

<div v-if="!viewAll" class=" pt-4 d-flex align-center justify-space-between">
        <div  class="d-flex align-center" style="color: var(--carbon-4, #333); font-size: 14px; font-weight: 600;">
            <v-icon size="18" class="mr-2" icon="mdi mdi-shopping"></v-icon> +{{ cartStore.totalCheckoutItems - 1 }} items
        </div>
        <a  @click="viewAll = !viewAll" style="color: #1273EB; font-size: 14px; cursor: pointer; font-weight: 600;">View all items</a>
    </div>
<div v-if="viewAll" class=" pt-4 d-flex align-center justify-space-between">
    <div  class="d-flex align-center" style="color: var(--carbon-4, #333); font-size: 14px; font-weight: 600;">
        <v-icon size="18" class="mr-2" icon="mdi mdi-shopping"></v-icon> {{ cartStore.totalCheckoutItems  }} items
    </div>
    <a @click="viewAll = !viewAll" style="color: #1273EB; font-size: 14px; cursor: pointer; font-weight: 600;">View Less</a>
</div>

<hr  class="dashed-2 my-6" />

<p class="inputLabel">Discount Code</p>             
<div class="d-flex w-100 align-center">

        
        <v-text-field v-model="discountCode"  hide-details="" placeholder="Add discount code" density="comfortable"  >
        </v-text-field>
<v-btn @click="cartStore.applyDiscountCode(discountCode)" flat   size="large" style="border: 1px solid var(--carbon-2, #CECECE);" class=" ml-3" rounded="xl">
    <span style="color: #333; font-size: 14px; font-weight: 600; margin-right: 5px;">
        Apply
    </span> 
    <v-progress-circular v-if="cartStore.load" indeterminate :width="2" :size="18"></v-progress-circular>
</v-btn>
</div>
<p style="color: red; font-size: 14px; margin-top: 4px;">{{cartStore.discountError}}</p>
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
font-weight: 600;" class="">€ {{ cartStore.checkoutTotalCost }}</p>
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
font-weight: 600;" class="">€ 0.00</p>
</div>
<hr  class="dashed-2 my-6" />
<div class="d-flex  pb-3 align-center justify-space-between">
<p style="font-weight: 500;
font-size: 14px;
color: #969696;">Grand Total</p>
    <p style="color: var(--carbon-4, #333);
font-size: 24px;
font-weight: 600;" class="">€ {{ cartStore.checkoutTotalCost }} </p>
</div>

</div>
<v-btn @click="emit('handleSubmit')" flat block size="x-large" class="mt-8" rounded="xl" color="green"> <span style="font-size: 14px;
font-style: normal;
font-weight: 600;">{{text}}</span> </v-btn>
</v-card>

</v-col>
</template>

<script setup>
import { useCartStore } from '~/stores/cartStore';
import { onMounted, ref, defineProps, defineEmits } from 'vue';
import {formattedPrice} from '~/utils/price'


const cartStore = useCartStore()
const viewAll = ref(false)
const discountCode = ref("")

const emit = defineEmits(['handleSubmit']);

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    }
})


</script>