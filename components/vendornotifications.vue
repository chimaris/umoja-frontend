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
            {{ item }} <v-badge v-if="item == 'All'" class="ml-4 mb-1 px-1" rounded="lg" color="grey-lighten-2" content="2" size="12"  ></v-badge>
            
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
    <div class="mb-8" v-for="(g, i) in notifications" :key="i">

      
      <p style="color: var(--carbon-4, #333);

font-size: 20px;
font-weight: 600;" class="my-5">{{ g.date }}</p>
<div v-for="(n, k) in g.notifications" :key="k" >


<v-sheet class=" d-flex justify-space-between align-center py-6">
  <div>
  <div style="max-width: 759px;" class="d-flex">
<v-avatar :rounded="n.type == 'review' || n.type == 'customer'? 'xl': 'lg'" color="grey" class="mr-4"><v-img :src="n.image"></v-img></v-avatar>
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

</v-sheet>
<v-divider v-show="(k + 1) < g.notifications.length"></v-divider>
</div>
</div>
</v-container>
</template>
<style>
.rt .v-icon--size-default {
    font-size: 18px;
}</style>
<script>
export default {
 
  data() {
    return {
        tab: '',
        rating: 4.5,
        item: 'All',
        tabs:[{name:'All Orders', prop:null,value: null}, {name:'Unfulfilled',prop:'status',value: 0}, {name:'Unpaid',prop:'payment_status',value: 0}, {name:'Open',prop:'status',value: 1}, {name:'closed',prop:'status',value: 2}],
      notifications:[
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
    
     
      ],
   items: []  
}
},
mounted(){
    this.items = this.items1;
  },
  methods:{
    choose(x){
      this.$emit('changePage', 'Order details');
    },
    choose2(x){
      this.$emit('changePage', 'createorder');
    },
    sort(x, y){
      var itm = this.items1;
      this.items = itm.filter((item) => {
      return item[x] == y;
    });
  }
}
}
</script>
