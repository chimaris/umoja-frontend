<template>
    <v-container height="100%"  class=" mx-auto pt-6 pa-4" width="100%" style="overflow:hidden"  flat >
       <div class="d-flex align-center  justify-space-between">
           <div>
               <p style="font-weight: 600;
font-size: 24px;" class="mb-2  d-flex align-center text-left">
                List of all the your customers
               </p> 
           </div>
           <div>
           <v-btn style="    border: 1px solid #e5e5e5;
" variant="outlined" size="large" class="ml-4 text-grey-darken-3" >
               <v-icon class="mr-2" icon="mdi mdi-tray-arrow-down"></v-icon>
               Import
           </v-btn>
           <v-btn flat color="green" size="large" class="ml-4 text-grey-darken-3" >
                <v-icon class="mr-2"  icon="mdi mdi-plus"></v-icon>
               Add Customer 
           </v-btn>
       </div>
       </div>

       <div class="d-flex pt-8 pb-6 ">
<v-row style=" overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  display: grid;
  grid-auto-flow: column;">
<v-col v-for="n in dashes">

    <v-card min-width="300px" class="mx-auto cardStyle" width="100%" style=""  flat >
        <div class="d-flex  align-center">
            <v-avatar class="mr-2" size="34"><v-img :src="n.img"></v-img></v-avatar>
            <p style="font-weight: 500;
font-size: 20px;
line-height: 25px;

color: #333333;">{{n.name}}</p>
<div class="ml-2">
    <v-icon size="16" icon="mdi mdi-information"> </v-icon>
    <v-tooltip
        activator="parent"
        location="end" class="text-red"
      >{{ n.tooltip }}</v-tooltip>
</div>
     

        </div>
<div class="d-flex align-center mt-4 justify-space-between">
    <h1 class="bigpriceClass2 ">{{ n.amount }}</h1>
    <div class="text-left">
        <p style="font-weight: 600;
font-size: 14px;
line-height: 18px;
color: #00966D;" class="text-green-lighten-2" :class="n.trending? 'text-green-lighten-2' : 'text-red'"><v-icon :icon="n.trending? 'mdi mdi-trending-up':'mdi mdi-trending-down'"></v-icon> {{n.trend}}%</p>
        <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.01em;
color: #969696;">vs last 7 days</p>
    </div>
</div>
    </v-card>
</v-col>
</v-row>
      </div>
      <div class="d-flex align-center justify-space-between">

      <div class="d-flex align-center">

          <v-chip-group
          selected-class="text-primary"
          column
          >
          <v-chip style="font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #2C6E63;" rounded="lg" size="x-large" color="green" variant="tonal"
          v-for="tag in ['All time', 'USA, CANADA, UK...']"
          :key="tag" closable close-icon="mdi  mdi-close"
          >
          {{ tag }}
        </v-chip>
    </v-chip-group>
    <v-btn style="    border: 1px solid #e5e5e5;
" variant="outlined" size="large" class="ml-0  text-grey-darken-3" >
                <v-icon class="mr-2" icon="mdi mdi-tune-vertical-variant"></v-icon>
                More Filters
            </v-btn>
        </div>
        <div class="pl-3" style="width: 50%; max-width: 580px;">

          <v-text-field style="border: 1px solid #e5e5e5;
border-radius: 6px;" variant="outlined" density="compact" hide-details prepend-inner-icon="mdi mdi-magnify" placeholder="Search for order id, customer, order status or something..."></v-text-field>
</div>
      </div>

<div class=" mt-5" >
  
   <v-table style="    height: 80%; !important;
   overflow: scroll;">
   <thead>
     <tr style="background: #e6edec;
border-radius: 6px;height: 55px;" class="  rounded-lg">
       <th style="
   width: 50px;
" class="  font-weight-medium  text-left">
          <v-checkbox hide-details></v-checkbox>
       </th>
       <th  style="font-size: 14px;color:#333333;width: 100px;" class="  font-weight-medium  text-left">
         ID
       </th>
       <th style="font-size: 14px;color:#333333;" class=" text-left px-1  font-weight-medium text-capitalize">
         Username
       </th>
       <th style="font-size: 14px;color:#333333;" class=" text-left px-1  font-weight-medium text-capitalize">
         Gender
       </th>
       <th style="font-size: 14px;color:#333333;" class=" text-left px-1  font-weight-medium text-capitalize">
         Following Category
       </th>
       <th style="font-size: 14px;color:#333333;" class=" text-left px-1  font-weight-medium text-capitalize">
         Country/State
       </th>
       <th style="font-size: 14px;color:#333333;" class=" text-left px-1  font-weight-medium text-capitalize">
          status
       </th>
       <th style="font-size: 14px;color:#333333;" class=" text-left px-1  font-weight-medium">
         
       </th>
   
     </tr>
   </thead>
   <tbody>
       <!-- @click="chosen = item.sn" -->
       <tr 
       :style="chosen == item.sn ? 'background:#DFDFDF':''"
       v-for="item in items"
       :key="item.sn"
       >
       <td  class="text-grey-lighten-1 pl-4 px-1">   
              <v-checkbox hide-details></v-checkbox>
       </td>
       <td style="font-size: 14px;" class="tableLight px-1 pl-2">
        {{ item.sn }}
        
   </td>
   <td  class="tableThick px-1">
   <div class=" d-flex align-center">

     <v-avatar size="30" class="mr-2"><v-img :src="item.img"></v-img></v-avatar>{{ item.customer }}
    </div>
  </td>
       <td  class="tableLight text-center px-1">
       <span v-if="item.delivery != 0">
         <v-chip style="width: 70px; font-weight: 500;
font-size: 10px;" class="rounded-lg elevation-0 d-flex justify-center " size="small" variant="elevated" color="#1273EB" >Male</v-chip>
       </span> 
       <span v-else class="d-flex align-center"> <v-chip style="width: 70px;font-weight: 500;
font-size: 10px;" class="rounded-lg elevation-0 d-flex justify-center " size="small" variant="elevated" color="#F38218">Female</v-chip></span>
       </td>
       <td  class="tableLight px-1">{{item.added_cat}}</td>
   
       <td style="font-weight: 600;
font-size: 14px;
line-height: 18px;" class="tableLight px-1">
        <span style="
color: #333333;">{{ item.country }}, </span>
        <span style="
color: #969696;" >{{ item.city }}</span>
       </td>
       <td  class="text-grey-lighten-1 text-center px-1">
           <v-chip style="width:70px;font-weight: 500!important;
font-size: 10px!important" size="small" rounded="lg" class="tablechip  text-center d-flex justify-center" :color="item.status == 2? 'green':'red'" variant='tonal'>
               {{ item.status == 2 ? 'Active': 'Inactive' }}
           </v-chip>
       </td>
       <td  class="text-grey-lighten-1 text-center px-1">
        <v-menu width="auto">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon variant="text" class="ml-8 text-grey-darken-3" >
                <v-icon icon="mdi mdi-dots-horizontal"></v-icon>
              </v-btn>
  
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in ['visit profile', 'edit', 'delete']"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu></td>
       
       <!-- <td style="font-size: 14px;" class="text-grey-lighten-1 px-1">
           <span v-if="chosen !== item.sn ">
               {{ item.total }}
           </span>
           <v-btn v-else color="green" size="small" class=" rounded-lg"> See details</v-btn>
       </td> -->
   </tr>
</tbody>
</v-table>
</div>

 </v-container> 
</template>
<script>
export default {

 data() {
   return {
       tab: '',
       tabs:[{name:'All Orders', prop:null,value: null}, {name:'Unfulfilled',prop:'status',value: 0}, {name:'Unpaid',prop:'payment_status',value: 0}, {name:'Open',prop:'status',value: 1}, {name:'closed',prop:'status',value: 2}],
   items1:[
   {
       sn:'#23942',
       name:'Leather crop top & pants......',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'Okoli Bonaventure',
       delivery: '€ 24.08',
       payment_status: 1,
       status: 2,
       items_no: 7,
       delivery_method: 'Umoja Delivery'
   },
   {
       sn:'#876567',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'David',
       delivery: 0,
       payment_status: 0,
       status: 2,
       items_no: 1,
       delivery_method: 'Fedex Delivery'
   },
   {
       sn:'#3456456',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'Frank',
       delivery: '€ 24.08',
       payment_status: 1,
       status: 2,
       items_no: 4,
       delivery_method: 'DHL Delivery'
   },
   {
       sn:'#65459',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'Okoli Bonaventure',
       delivery: '€ 24.08',
       payment_status: 1,
       status: 1,
       items_no: 7,
       delivery_method: 'Umoja Delivery'
   },
   {
       sn:'#098765',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'Okoli Bonaventure',
       delivery: 0,
       payment_status: 1,
       status: 1,
       items_no: 7,
       delivery_method: 'Umoja Delivery'
   },
   {
       sn:'#65456',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'David',
       delivery: '€ 24.08',
       payment_status: 0,
       status: 2,
       items_no: 1,
       delivery_method: 'DHL Delivery'
   },
   {
       sn:'#239042',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'Frank',
       delivery: '€ 24.08',
       payment_status: 1,
       status: 2,
       items_no: 4,
       delivery_method: 'Umoja Delivery'
   },
   {
       sn:'#9867763',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'Okoli Bonaventure',
       delivery: '€ 24.08',
       payment_status: 1,
       status: 1,
       items_no: 7,
       delivery_method: 'DHL Delivery'
   },
   {
       sn:'#98755765',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'David',
       delivery: '€ 24.08',
       payment_status: 0,
       status: 1,
       items_no: 1,
       delivery_method: 'Umoja Delivery'
   },
   {
       sn:'#7646439',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'Frank',
       delivery: '€ 24.08',
       payment_status: 1,
       status: 1,
       items_no: 4,
       delivery_method: 'Umoja Delivery'
   },
   {
       sn:'#9876765',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'Okoli Bonaventure',
       delivery: '€ 24.08',
       payment_status: 1,
       status: 1,
       items_no: 7,
       delivery_method: 'Fedex Delivery'
   },
   {
       sn:'#9876765',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
      added_cat: 'Added Manually', 
      date: 'May 29, 2023',
       customer: 'David',
       delivery: '€ 24.08',
       payment_status: 0,
       status: 0,
       items_no: 1,
       delivery_method: 'Fedex Delivery'
   },
   {
       sn:'#12t65345',
       name:'Leather crop top & pants......',
       added_cat: 'Added Manually',
       date:'17 May',
       total:'€2,349‎',
      country: '🇺🇸 United States',
      img: 'https://res.cloudinary.com/payhospi/image/upload/v1686908453/Rectangle_1917_gyabxr.png',
      city: 'New York City',
       date: 'May 29, 2023',
       customer: 'Frank',
       delivery: '€ 24.08',
       payment_status: 1,
       status: 1,
       items_no: 4,
       delivery_method: 'Umoja Delivery'
   },

  ],
  dashes:[
    {
        img: 'https://res.cloudinary.com/payhospi/image/upload/v1686906413/Frame_427320547_6_u4cwdq.png',
        name: 'Total Customers',
        tooltip: 'Total customers in your shop',
        amount: '512,987',
        trend: '16',
        trending:true
    },
    {
        img: 'https://res.cloudinary.com/payhospi/image/upload/v1686906413/Frame_427320548_1_bvohqz.png',
        name: 'Members',
        tooltip: 'Total members in the last seven days',
        amount: '27,654',
        trend: '0.4',
        trending:false
    },
    {
        img: 'https://res.cloudinary.com/payhospi/image/upload/v1686906397/Frame_427320547_7_znnge2.png',
        name: 'Active',
        tooltip: 'Active customers in the last seven days',
        amount: '135,302',
        trend: '8',
        trending:true
    },
  
   ],
  items: []  
}
},
mounted(){
   this.items = this.items1;
 },
 methods:{
   sort(x, y){
     var itm = this.items1;
     this.items = itm.filter((item) => {
     return item[x] == y;
   });
 }
}
}
</script>