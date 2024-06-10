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
        <v-avatar rounded="lg" color="grey-lighten-3" class="mr-4"><v-img src=""></v-img></v-avatar>
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
        <v-avatar rounded="lg" color="grey-lighten-3" class="mr-4"><v-img :src="n?.product_photo"></v-img></v-avatar>
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
      <v-avatar rounded="xl" color="grey-lighten-3" class="mr-4"><v-img src=""></v-img></v-avatar>
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
<!-- <v-sheet class=" d-flex justify-space-between align-center py-6">
  <div>
  <div style="max-width: 759px;" class="d-flex">
<v-avatar :rounded="n.type == 'review' || n.type == 'customer'? 'xl': 'lg'" color="grey-lighten-3" class="mr-4"><v-img :src="n.image"></v-img></v-avatar>
<div>
  <p>
    <span v-if="n.type == 'products' || n.type == 'order'" style="color: #333;
font-size: 14px;
font-weight: 600;">{{ n.items }}</span>
    <span v-if="n.type == 'review'|| n.type == 'customer'" style="color: #333;
font-size: 14px;
font-weight: 600;">{{ n.user }}</span>
<span style="color:  #969696;
font-size: 14px;
font-weight: 500;" v-if="n.type == 'customer'">
  just followed your store. You have now have a total of 2,880. <a style="color: #1273EB;" href="">
    See customer details
  </a>
</span>
<span style="color:  #969696;
font-size: 14px;
font-weight: 500;" v-if="n.type == 'products'">
  is almost out of stock. <a style="color: #1273EB;" href="">
    Tap to see product details
  </a>
</span>
  <span v-if="n.type == 'review'">
<span style="color:  #969696;
font-size: 14px;
font-weight: 600;">
  reviewed your product - Multicolored Ankara Material...
</span>
"<span style="color: #333;
font-size: 14px;
font-weight: 600;">Lorem ipsum dolor sit amet consectetur -</span>
<span style="color:#333;
font-size: 14px;
font-weight: 500;">Lobortis sagittis porta tincidunt nibh eget lacus. Tristique tellus tempus dolor semper aliquam amet ipsum at. Ultricies porttitor sceler...
<a style="text-decoration: none;color: #1273EB;" href="">
    Read More
  </a></span>"  </span>

  <span v-if="n.type == 'order'">

<span 
style="color:  #969696;
font-size: 14px;
font-weight: 500;"> and other products was ordered from your store by </span> <span style="color: #333;
font-size: 14px;
font-weight: 600;">{{ n.user }}</span><span style="color:  #969696;
font-size: 14px;
font-weight: 500;"> with order number #1629186342. <a style="color: #1273EB;" href=""> Tap to see order details</a>  </span>
</span> 

</p>
<p
v-if="n.type == 'review'"
style="font-weight: 600;
    font-size: 10px;
    line-height: 13px;
    color: #000000;
    " class="d-flex mb-1 align-center">
        <v-rating 
        v-model="rating"
        color="grey-lighten-2 "
        active-color="#E7CE5D"
        class="ml-2 rt" hide-details
        size="x-small"
        ></v-rating><span style="margin-left:-9px ;" >4.0/5.0</span> 
    </p>
    <p style="color: #969696;
font-size: 14px;
font-weight: 500;" class="mt-1">{{ n.time }}</p>
</div>
</div>
</div>
<v-icon icon="mdi mdi-circle" size="10" color="green" v-if="n.unread"></v-icon>

</v-sheet> -->
</div>
</v-container>
</template>
<style>
.rt .v-icon--size-default {
    font-size: 18px;
}</style>
<script setup>
import {ref} from 'vue';
import {formatRelativeTime} from '~/utils/date'
import { getNotification, getProductNotification , loading, getCustomerNotification, getReviewNotification, getOrderNotification } from '~/composables/notification';


const tab = ref('All')
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
  Notification.value = await getNotification()
  orderNotification.value = await getOrderNotification()
  productNotification.value = await getProductNotification()
  customerNotification.value = await getCustomerNotification()
  reviewNotification.value = await getReviewNotification()
});
      const notifications = [
        {
        date: 'Today - 5TH July, 2023',
        notifications: [
          {
        type: 'order',
        items: '3 pieces of Multicolored Ankara Material from Ghana',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1689252826/matskirt_ecf6ym.png',
        unread: true,
        time: '1 min ago',
        user: 'Nweke Franklin Odira',
        
      },
      {
        type: 'products',
        items: 'Multicolored Ankara Material from Ghana',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1688130445/ankara-sneakers-1500-x_lnanzk.png',
        time: '45 mins ago',
        
      },
      {
        type: 'customer',
        user: 'Sarah Johnson',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1686323650/Rectangle_1907_aocxwr.png',
        time: '2 hrs ago',
        rating: 4,
        
      },
      {
        type: 'review',
        user: 'Emma Andersen L.',
        unread: true,
        items: 'Multicolored Ankara Material from Ghana',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1685880308/Frame_221_gj6tpk.png',
        time: '4 hrs ago',
        
      },
      {
        type: 'order',
        items: '3 pieces of Multicolored Ankara Material from Ghana',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1685693851/Rectangle_1897_ca06qx.png',
        time: '1 min ago',
        unread: true,
        user: 'Nweke Franklin Odira',

      },
      
    ]
  },
  {
    date: 'Yesterday - 4TH July, 2023',
    notifications: [
      {
        type: 'order',
        items: '3 pieces of Multicolored Ankara Material from Ghana',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1685693851/Rectangle_1897_ca06qx.png',
        time: '1 min ago',
        unread: true,
        user: 'Nweke Franklin Odira',

      },
          {
        type: 'products',
        items: 'Multicolored Ankara Material from Ghana',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1685693851/Rectangle_1896_x07ole.png',
        time: '45 mins ago',

      },
          {
        type: 'review',
        user: 'Sarah Johnson',
        items: 'Multicolored Ankara Material from Ghana',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1685693849/Rectangle_1898_gyahsj.png',
        time: '2 hrs ago',
        rating: 4,

      },
          {
        type: 'customer',
        user: 'Emma Andersen L.',
        items: 'Multicolored Ankara Material from Ghana',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1684658586/Frame_481586_piaotu.png',
        time: '4 hrs ago',

      },

    ]
    },
    
     
      ]


</script>
