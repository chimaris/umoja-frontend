<template>
 <v-container height="100%" class=" mx-auto px-5 " width="100%"
    style="overflow:hidden;padding-bottom: 200px;max-width: 1330px;" flat>        <div class="mb-8 my-4" >
          <div class="d-flex justify-space-between">

            <v-tabs
            v-model="tab" class="orders"
            color="green"
            
            >
            <v-tab 
            v-for="item in ['All','Orders', 'Products', 'Customers', 'Reviews']"
            :key="item"
            :value="item" 
            class="d-flex text-capitalize  align-center"
            >
            {{ item }} 
            <v-badge v-if="item == 'All' && Notification.length > 0" class="ml-4 mb-1 px-1" rounded="lg" color="grey-lighten-2" :content="Notification.length" size="12"  ></v-badge>
            <v-badge v-if="item == 'Orders' && orderNotification.length > 0" class="ml-4 mb-1 px-1" rounded="lg" color="grey-lighten-2" :content="orderNotification.length" size="12"  ></v-badge>
            <v-badge v-if="item == 'Reviews' && reviewNotification.length > 0" class="ml-4 mb-1 px-1" rounded="lg" color="grey-lighten-2" :content="reviewNotification.length" size="12"  ></v-badge>
            <v-badge v-if="item == 'Products' && productNotification.length > 0" class="ml-4 mb-1 px-1" rounded="lg" color="grey-lighten-2" :content="productNotification.length" size="12"  ></v-badge>
            <v-badge v-if="item == 'Customers' && customerNotification.length > 0" class="ml-4 mb-1 px-1" rounded="lg" color="grey-lighten-2" :content="customerNotification.length" size="12"  ></v-badge>
          </v-tab>
        </v-tabs>
        <v-btn variant="text">
          <span style="color: var(--deep-sky-blue-4, #1273EB)!important;
font-size: 14px;
font-weight: 600;">  Mark all as read</span>
    </v-btn>
  </div>
    <v-divider></v-divider>
    </div>
  <!-- <div v-if="loading" class="d-flex justify-center align-center" style="height: 100%; min-height: 60vh">
  <v-progress-circular 
						color="green"
						:size="30"
						:width="3"
						indeterminate
	></v-progress-circular>
</div> -->
<div>
  <template v-if="tab == 'All'">
    <v-sheet v-for="(n, i) in Notification" :key="i"  class=" d-flex justify-space-between align-center py-6">
    <div>
      <div style="max-width: 759px;" class="d-flex">
        <v-avatar rounded="lg" color="grey-lighten-3" class="mr-4"><v-img cover :src="n?.data?.user_photo || n?.data?.product_photo?.split(',')[0]"></v-img></v-avatar>
      <div>
    <p>
      <span style="color: #333;
  font-size: 14px;
  font-weight: 600;">{{n.data?.message }}</span>
  <!-- <span style="color:  #969696; font-size: 14px; font-weight: 500;"> by </span> 
  <span style="color: #333; font-size: 14px; font-weight: 600; text-transform: capitalize">{{ n.data?.shipping_full_name }}</span>
  <span style="color:  #969696; font-size: 14px; font-weight: 500;"> with order number #{{ n.data?.order_number }} <a style="color: #1273EB;" href=""> Tap to see order details</a></span>  -->
  
  </p>
      <p style="color: #969696;
  font-size: 14px;
  font-weight: 500;" class="mt-1">{{ formatRelativeTime(n.created_at) }}</p>
  </div>
  </div>
  </div>
  <v-icon icon="mdi mdi-circle" v-if="!n.read_at" size="10" color="green"></v-icon>
  
    </v-sheet>
  </template>
    
    <template v-if="tab == 'Orders'">
      <v-sheet v-for="(n, i) in orderNotification" :key="i"  class=" d-flex justify-space-between align-center py-6">
    <div>
      <div style="max-width: 759px;" class="d-flex">
        <v-avatar rounded="lg" color="grey-lighten-3" class="mr-4"><v-img cover :src="n?.product_photo?.split(',')[0]"></v-img></v-avatar>
      <div>
    <p>
      <span style="color: #333;
  font-size: 14px;
  font-weight: 600;">{{n?.message }}</span>
  <span style="color:  #969696; font-size: 14px; font-weight: 500;"> by </span> 
  <span style="color: #333; font-size: 14px; font-weight: 600; text-transform: capitalize">{{ n?.shipping_full_name }}</span>
  <span style="color:  #969696; font-size: 14px; font-weight: 500;"> with order number #{{ n?.order_number }} <span @click="choose('Orders')" style="color: #1273EB; text-decoration: underline;"> Tap to see order details</span></span> 
  
  </p>
      <p style="color: #969696;
  font-size: 14px;
  font-weight: 500;" class="mt-1">{{ formatRelativeTime(n.created_at) }}</p>
  </div>
  </div>
  </div>
  <v-icon v-if="!n?.read_at" icon="mdi mdi-circle" size="10" color="green"></v-icon>
  
    </v-sheet>
    </template>
    <template v-if="tab == 'Reviews'">
      <v-sheet v-for="(n, i) in reviewNotification" :key="i" class=" d-flex justify-space-between align-center py-6">
      <div>
      <div style="max-width: 759px;" class="d-flex">
        <v-avatar rounded="xl" color="grey-lighten-3" class="mr-4">
          <v-img :src="n.data?.user_photo"></v-img>
        </v-avatar>
    <div>
      <p>
        <span style="color: #333; font-size: 14px; font-weight: 600;">{{ n.data?.message }}</span>
      </p>
      <p style="color:#333; font-size: 14px; font-weight: 500;">"{{ n.data?.review_comment }}""</p>
    <p
    style="font-weight: 600;
        font-size: 12px;
        line-height: 13px;
        color: #000000;
        " class="d-flex mb-1 align-center">
            <v-rating 
            :model-value="n.data?.rating"
            read-only
            color="grey-lighten-2 "
            active-color="#E7CE5D"
            class="ml-2 rt" hide-details
            size="x-small"
            ></v-rating><span style="margin-left:9px ;" >{{n.data?.rating}}/5.0</span> 
        </p>
        <p style="color: #969696;
    font-size: 14px;
    font-weight: 500;" class="mt-1">{{ formatRelativeTime(n.created_at) }}</p>
    </div>
    </div>
    </div>
    <v-icon v-if="!n.read_at" icon="mdi mdi-circle" size="10" color="green"></v-icon>
</v-sheet>
    </template>
    <template v-if="tab == 'Customers'">
      <v-sheet v-for="(n, i) in customerNotification" :key="i" class=" d-flex justify-space-between align-center py-6">
        <div>
        <div style="max-width: 759px;" class="d-flex">
      <v-avatar rounded="xl" color="grey-lighten-3" class="mr-4"><v-img cover :src="n?.user_photo"></v-img></v-avatar>
      <div>
        <p>
          <span style="color: #333;
      font-size: 14px;
      font-weight: 600;">{{ n.message }}</span>
      <span style="color:  #969696;
      font-size: 14px;
      font-weight: 500;" >
  You have now have a total of {{n.followers_count}} followers. <span @click="choose('Customers')" style="color: #1273EB; text-decoration: underline;">
          See customer details
        </span>
      </span>
          </p>
          <p style="color: #969696;
      font-size: 14px;
      font-weight: 500;" class="mt-1">{{ formatRelativeTime(n.created_at) }}</p>
      </div>
      </div>
        </div>
        <v-icon icon="mdi mdi-circle" size="10" color="green"></v-icon>
      </v-sheet>
    </template>
    <template v-if="tab == 'Products'">
      <v-sheet v-for="(n, i) in productNotification" :key="i" class=" d-flex justify-space-between align-center py-6">
  <div>
  <div style="max-width: 759px;" class="d-flex">
<v-avatar rounded="lg" color="grey-lighten-3" class="mr-4"><v-img cover :src="n.product_photo?.split(',')[0]"></v-img></v-avatar>
<div>
  <p>
<span style="color:  #969696;
font-size: 14px;
font-weight: 600;" >
  {{ n?.message }} <span @click="choose('Products')" style="color: #1273EB;" href="">
    Tap to see product details
  </span>
</span>
  </p>

  <p style="color: #969696;
font-size: 14px;
font-weight: 500;" class="mt-1">{{ formatRelativeTime(n?.created_at) }}</p>
</div>
</div>
</div>
<v-icon icon="mdi mdi-circle" size="10" color="green" v-if="!n?.read_at"></v-icon>

</v-sheet>
    </template>
</div>
</v-container>
</template>
<style>
.rt .v-icon--size-default {
    font-size: 18px;
}</style>
<script setup>
import {ref} from 'vue';
import { useVendorStore } from '~/stores/vendorStore';
import {formatRelativeTime} from '~/utils/date'
import { getNotification, getProductNotification , getCustomerNotification, getReviewNotification, getOrderNotification } from '~/composables/notification';


const tab = ref('All')
const vendor = ref(useVendorStore().vendor)
const Notification = ref([])
const orderNotification = ref([])
const customerNotification = ref([])
const reviewNotification = ref([])
const productNotification = ref([])
const emit = defineEmits(['changePage'])

function choose(x){
  emit('changePage', x)
}
onMounted(async() => {
  if (vendor.value.vendor_details.unread_notification_count > 0){
    Notification.value = await getNotification()
    orderNotification.value = await getOrderNotification()
    productNotification.value = await getProductNotification()
    customerNotification.value = await getCustomerNotification()
    reviewNotification.value = await getReviewNotification()
  }

});


</script>
