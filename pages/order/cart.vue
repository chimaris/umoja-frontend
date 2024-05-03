<template>
  <Header2 />
  <v-divider></v-divider>
  <div style="background-color;">

  <v-container class="mt-4" style="max-width: 1400px;width: 100%;">
      <v-row>
              <v-col cols="12" lg="8" >  
<v-card class="overflow-visible" flat  color="#F7F7F7" min-height="" width="100%">
      <v-card flat style="border-radius: 10px;" class="pt-2 pb-4 px-4">
         <div class="d-flex align-center justify-space-between">

             <h1 style="font-weight: 600;
font-size: 32px;
line-height: 40px;">Cart ({{ cartStore.totalCartItems }})</h1>
  <v-btn @click="showClearCart()"  color="#333" class="red-hover" variant="text"><span class="smallBtn"></span>  <v-icon size="15" class="mr-1 " icon="mdi mdi-trash-can-outline"></v-icon>Remove all</v-btn>


</div>
<v-dialog v-model="isConfirmClear" persistent max-width="400">
  <v-card>
    <v-card-title class="text-h5">Confirm Removal</v-card-title>
    <v-card-text>Are you sure you want to clear the cart?</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn  class=" bg-green" color="white rounded-lg" text @click="confirmClearCart">Yes</v-btn>
      <v-btn  class=" bg-red" color="white rounded-lg" text @click="isConfirmClear = false">No</v-btn>
      
    </v-card-actions>
  </v-card>
</v-dialog>
<v-sheet>
  <v-table class="mt-4" style="height: 80%; overflow: scroll;">
 <thead>
   <tr style="border-radius: 6px;" class="  rounded-lg">
     <th style="
 width: 50px;
" class="  font-weight-medium px-1  text-left">
        <v-checkbox color="green" v-model="selectAll" @click="selectAllItems" hide-details ></v-checkbox>
     </th>
     <th  style="font-size: 14px;width: 100px;" class="  font-weight-medium  text-left">
       Product Details
     </th>
     <th style="font-size: 14px;" class=" text-center px-1  font-weight-medium">
       Quantity
     </th>

     <th style="font-size: 14px;" class=" text-right px-1  font-weight-medium">
      Price
     </th>
  
   </tr>
 </thead>
 
 <tbody >
     <!-- @click="chosen = item.sn" -->
     <template v-if="cartStore.items.length >= 1">
       <tr   v-for="item in cartStore.items"
       :key="item.id"
       >
       <td  class="text-grey-lighten-1 pl-1 ">   
              <v-checkbox color="green" v-model="item.selected" @click="selectItem(item.id)" hide-details></v-checkbox>
       </td>
       <td style="position:relative;font-size: 14px;height: 100px;" 
        >
        <div style="position: ;top: 24px; width: ;">
  
      <div  v-bind="props"
        class=" d-flex align-start pr-4 pl-1"
        >
          <v-avatar color="grey-lighten-4" style="border-radius: 15px;" class="  mr-3 ml-0" size="100" >
       
            <v-img v-if="item.product.photo == null" cover src="https://res.cloudinary.com/payhospi/image/upload/v1714649462/umoja/download_1_dwnmbf.png"></v-img>
            <v-img v-else-if="item.product.photo.includes(',')" cover :src="item.product.photo.split(',')[0]"></v-img>
            <v-img v-else cover :src="item.product.photo"></v-img>
            
          </v-avatar>
          <div>
            <p class="mb-1" style="font-weight: 600;
  font-size: 16px!important;
  line-height: 20px;
  color: #333333;">{{item.product.name}}</p>
            <p style="font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #969696;" class="text-truncate">Category:{{item.product.category_name}}</p>
            <p style="font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #969696;" class="text-truncate">Location: {{item.product.vendor_state}}, {{item.product.vendor_country}}</p>
  <v-chip size="x-small" color="green" style="font-weight: 500;" class="mt-1" rounded="lg">IN STOCK</v-chip>
          </div>
        </div>
        </div>
  
       
  
    </td>
    
   <td style="height: 189px;" class=" align-center d-flex px-1">  
    <div class="text-center w-100  py-8 ">
            <div class="d-flex w-100 justify-center align-center ">
                <v-btn-group
        border width="122"
         rounded="lg"
        divided density="compact"
      >
        <v-btn class="dark-hover" rounded="0" :disabled="cartStore.getItemQuantity(item.id) <= 1"  @click="cartStore.reduceItem(item)">
          <v-icon icon="mdi mdi-minus "></v-icon>
        </v-btn>
  
        <v-btn  :ripple="false" rounded="0">
         {{ cartStore.getItemQuantity(item.id) }}
        </v-btn>
        <v-btn class="green-hover" rounded="0" @click="cartStore.addItem(item.product.id)">
          <v-icon icon="mdi mdi-plus"></v-icon>
        </v-btn>
  </v-btn-group>     
  </div>
  <v-btn @click="showConfirmModal(item.product.id, item.id)"  color="#333" variant="text" class="red-hover mt-2"><span class="smallBtn"></span>  <v-icon size="15" class="mr-1" icon="mdi mdi-trash-can-outline"></v-icon>Remove</v-btn>
  </div>
  
          </td>
  
    
       <td  class="tableLight text-right px-1"><p style="color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;">{{formattedPrice((item.product.price * item.quantity))}} </p></td>
   
       </tr>
     </template>
</tbody>
</v-table>
<v-dialog v-model="isModalVisible" persistent max-width="400">
    <v-card>
      <v-card-title style="font-size: 14px; font-weight: 600">Are you sure you want to remove item ?</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="bg-green "  color="white rounded-lg" text @click="confirmRemoval">Yes</v-btn>
        <v-btn class=" bg-red" color="white rounded-lg" text @click="isModalVisible = false">No</v-btn>
      </v-card-actions>
    </v-card>
</v-dialog>

</v-sheet>

</v-card>
     
</v-card>
</v-col>
<v-col cols="12" lg="4">

<v-card style="border-radius: 15px;
border: 1px solid var(--carbon-2, #CECECE);" flat class="pa-6">
<div class="mb-3">
 
<div class="d-flex  pb-3 align-center justify-space-between">
<p style="font-weight: 500;
font-size: 14px;
color: #969696;">Subtotal</p>
  <p style="color: var(--carbon-4, #333);
font-size: 16px;
font-weight: 600;" class="">€ {{ cartStore.totalCost }}</p>
</div>
<div class="d-flex  pb-3 align-center justify-space-between">
<p style="font-weight: 500;
font-size: 14px;
color: #969696;">Discount</p>
  <p style="color: var(--carbon-4, #333);
font-size: 16px;
font-weight: 600;" class="">€ 0.00</p>
</div>
<hr  class="dashed-2 my-8" />
<div class="d-flex  pb-3 align-center justify-space-between">
<p style="font-weight: 500;
font-size: 14px;
color: #969696;">Grand Total</p>
  <p style="color: var(--carbon-4, #333);
font-size: 24px;
font-weight: 600;" class="">€ {{ cartStore.totalCost}} </p>
</div>


<div class="d-flex mt-4 align-center">
  <v-icon class="mr-2" icon="mdi mdi-information" color="green" size="18"></v-icon>
  <p class="textClass text-grey">Delivery fees not Included</p>
</div>

</div>
<v-btn @click="handleCheckout" flat block size="x-large" class="mt-8" rounded="xl" color="green"><span style="font-size: 14px;
font-style: normal;
font-weight: 600;"> Checkout Now</span></v-btn>
</v-card>
<v-card style="border-radius: 15px;
border: 1px solid var(--carbon-2, #CECECE);" flat class="mt-6 pa-6">
<p style="color: #333;
font-size: 20px;
font-weight: 600;
line-height: 20px; /* 100% */
letter-spacing: -0.2px;" class="mb-4">Returns are easy</p>

<p style="color:#969696;
font-size: 14px;
font-weight: 500;
">Free return within 15 days for Official Store items and 7 days for other eligible items See more</p>
</v-card>
<v-img style="position: relative;border-radius: 10px;" class="mt-6  shine pt-10 bg-grey-lighten-1 pa-6 rounded-lg" width="100%" max-height="674px" cover eager src="https://res.cloudinary.com/payhospi/image/upload/v1684673782/Rectangle_465_sohqlg.png" height="100%">
  <div  class=" ">
              <h1 style="font-size: 50.4px;
line-height: 53px;" class=" mb-0 text-white font-weight-bold">Nawi’s long
scarf</h1>
              <p class="textClass mb-4 text-white">known to be used by the Nawi people</p>
              <div>
                <v-btn  rounded="xl" flat to="/vendor/profile" color="orange" 
            ><span class="smallBtn">
              See product
          </span>
      </v-btn>
          <v-btn to="/user/login"  flat variant="text"  class="ml-2 text-white howit"><span style="text-decoration:underline">
              <span class="smallBtn">
              Not now
          </span>
          </span>
          </v-btn>
              </div>
          </div>
          <div v-if="false" class="pa-6" style="position: absolute;bottom:0;left: 0;width: 100%;">
              <v-card style="
background: rgba(0, 0, 0, 0.7);
backdrop-filter: blur(25px); bottom: 0;
/* Note: backdrop-filter has minimal browser support */

border-radius: 20px;" class=" d-flex align-center  pa-4">
<v-avatar size="50" class="mr-4"><v-img class="bg-grey-lighten-2" src="https://res.cloudinary.com/payhospi/image/upload/v1684658586/Frame_481586_piaotu.png"></v-img></v-avatar> 
<p class="text-white">@nawi_the_skulptur_queen</p>
</v-card>     
          </div>
     
</v-img>
</v-col>
</v-row> 

</v-container> 
<product-row :maxwidth="'1400px'" :showVendor="false" title="😎 Recently viewed" />
<product-row :maxwidth="'1400px'" :showVendor="false" title="🎩 Top Selling Items" />
<Mainfooter />

 </div>

</template>

<script setup>
definePageMeta({
middleware: ["auth"]
})
import { ref, computed, watch, nextTick } from 'vue';
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';
import { useCartStore } from '~/stores/cartStore';
import { useRouter } from '#vue-router';
import {formattedPrice} from '~/utils/price'

const cartStore = useCartStore();
const router = useRouter();

// Reactive data
const selectAll = ref(getLocalStorageItem('selectAll', false));
const placescards = ref(false);
const mods = ref(1);
const tab = ref(null);

const isModalVisible = ref(false);
const itemIdToRemove = ref(null);
const cartItemToRemove = ref(null);
const isConfirmClear = ref(false)

function showConfirmModal(productId, cartId){
  itemIdToRemove.value = productId;
  cartItemToRemove.value = cartId
  isModalVisible.value = true
}
async function confirmRemoval() {
  if (itemIdToRemove.value !== null && cartItemToRemove.value !== null) {
    await cartStore.removeItem(itemIdToRemove.value, cartItemToRemove.value);
    itemIdToRemove.value = null;
    cartItemToRemove.value = null // Reset the item ID after removal

    isModalVisible.value = false;

    if (cartStore.totalCartItems === 0) {
      nextTick(() => {
        router.push('/market_place');
      });
    }
  }
}

function selectItem(id) {
  cartStore.handleSelect(id)
  if (selectAll.value) {
    selectAll.value = false
    setLocalStorageItem("selectAll", selectAll.value)
  }
}

function handleCheckout() {
  cartStore.checkoutProducts()
  router.push('/order/checkout')
}

function selectAllItems() {
  selectAll.value = !selectAll.value
  setLocalStorageItem("selectAll", selectAll.value)
    if (selectAll.value) {
      cartStore.selectAllItems()
    } else {
      cartStore.deSelectAllItems()
    }
}

function showClearCart() {
  isConfirmClear.value = true
}

async function confirmClearCart() {
  await cartStore.clearCart()

  isConfirmClear.value = false 

  nextTick(() => {
        router.push('/market_place');
      });
}
// Computed properties
const buttons = computed(() => [
  { icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684591614/umoja/Vector_mgadhr.png' },
  { icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/facebook_tup8rq.png' },
  { icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/instagram_wogd5x.png' },
  { icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/globe-americas_annyvh.png' }
]);



const cols = computed(() => {
  const { lg, sm, md } = $vuetify.display;
  return lg
      ? [4, 6, 6, 6, 4, 8, 4, 3, 10, 2]
      : md
      ? [4, 6, 6, 12, 6, 8, 4, 3, 10, 2]
      : sm
      ? [6, 12, 12, 12, 12, 12, 12, 12, 12]
      : [6, 12, 12, 12, 12, 12, 12, 12, 12];
});

// Methods
function filt(text) {
  return text.length > 50 ? text.slice(0, 50) + '...' : text;
}

// watch(() => cartStore.totalCartItems, (newVal) => {
//   if (newVal === 0) {
//     router.push('/market_place');
//   }
// }, { immediate: true });
</script>
