<template>
    <div class="px-6 py-10"> 
    <p style="color: #000;
font-size: 24px;
font-weight: 600;
">Order History</p>
    <p style="color: var(--carbon-3, #969696);
font-family: Faktum;
font-size: 14px;
font-style: normal;
font-weight: 500;">Here you can manage your order</p>
</div>
    <div class="d-flex px-6 pb-6 w-100 align-center">
        <v-text-field hide-details="" prepend-inner-icon="mdi mdi-magnify" placeholder="Search for Order ID or Product"
            density="compact">
        </v-text-field>
        <v-btn width="154" flat style="border: 1px solid var(--carbon-2, #CECECE);" class=" ml-3" rounded="xl">

            <span style="color: #333;
font-size: 14px;
font-weight: 600;">
                <v-icon class="mr-1" icon="mdi mdi-tune-vertical"></v-icon>
                Filters
            </span>
        </v-btn>
    </div>
    <div class="mx-6 pa-0 mb-6 cardStyle" >
    <v-table>
    <thead>
      <tr class=" bg-grey-lighten-3 ">
        <th  class="  font-weight-bold  ">
           
        </th>
        <th style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 600;
line-height: 20px;" class="  font-weight-bold px-1 ">
           Order ID
        </th>
        <th style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 600;
line-height: 20px;" class="   font-weight-bold px-1">
         Date
        </th>
        <th style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 600;
line-height: 20px;" class="  font-weight-bold px-1">
          Items
        </th>
        <th style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 600;
line-height: 20px;" class="  font-weight-bold px-1">
          Total Amount
        </th>
        <th style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 600;
line-height: 20px;" class="     font-weight-bold px-1">
          Status 
        </th>
        <th style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 600;
line-height: 20px;" class="    font-weight-bold px-1">
          Action 
        </th>
   
      </tr>
    </thead>
     <tbody v-for="(item, i) in items1"  :key="i"  >
      <tr style=" width: 100%;height: 104px;">
<td>
 <v-btn size="40" rounded="xl" flat style="border: 1px solid #CECECE;" @click="select(item.sn+''+ i)" 
 class="ml-" :icon="selected !== (item.sn+''+ i) ?'mdi mdi-chevron-down':'mdi mdi-chevron-up'">
 </v-btn>
</td>

 <td style="color: #000;
    font-size: 14px;
    font-weight: 500;" class="text- px-1 ">
    <span>

        001798
    </span>
 </td>

 <td style="color: #000;
font-size: 14px;
font-weight: 500;" class=" px-1 ">
<span>

  September 9, 2022
</span>
</td>
 <td style="color: #000;
font-size: 14px;
font-weight: 500;" class=" px-1 ">
<span>

 7
</span>
</td>
 <td style="color: #000;
font-size: 14px;
font-weight: 500;" class=" px-1 ">
<span>

    € 5,829.00 
</span>
</td>
        <td style="font-size: 14px;" class="text-grey-darken-1 px-1">
        <v-chip v-if="item.status == 4" size="small" rounded="lg" color="blue">
        <span style="
font-size: 12px!important;
font-weight: 600;
line-height: 20px;">
          Shipped
        </span>
      </v-chip>
        <v-chip v-if="item.status == 3" size="small" rounded="lg" color="green">
        <span style="
font-size: 12px!important;
font-weight: 600;
line-height: 20px;">
          Delivered
        </span>
      </v-chip>
        <v-chip v-if="item.status == 1" size="small" rounded="lg" color="#906A20">
        <span style="
font-size: 12px!important;
font-weight: 600;
line-height: 20px;">
          Awaiting Shipment
        </span>
      </v-chip>
        <v-chip v-if="item.status == 2" size="small" rounded="lg" color="#C20052">
        <span style="
font-size: 12px!important;
font-weight: 600;
line-height: 20px;">
          Cancelled
        </span>
      </v-chip>
        </td>
        <td class="px-1">

<v-btn size="40" flat style="border: 1px solid #CECECE;" @click="select(item.sn+''+ i)" class="ml-" icon="mdi mdi-dots-vertical"></v-btn></td>
</tr>
<v-divider v-if="(i+1) < items1.length" style="position: absolute;" inset=""></v-divider>
</tbody>
</v-table>

<div  v-if="false" style="width: 100%;border-bottom: 0.5px solid rgb(215, 215, 215);" class=" ">
  <v-expand-transition>

    <v-card  class="pb-4" flat v-show="selected == item.sn+''+ i" style="width:100%;border-top: 1px dashed  #CECECE;">
      <v-row class="pa-4" >
        <v-col >
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Address</p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Mrs Smith 71 Cherry Court Southampton SO53 5PD</p>
        </v-col>
        <v-col >
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Product purchase </p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;">In-store purchase</p>
        </v-col>
        <v-col >
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Tracking #UMOJA</p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal; " class="d-flex align-center">4589058409584045845 <v-icon size="x-small" color="green" class="ml-2" icon="mdi mdi-content-copy"></v-icon></p>
        </v-col>
        <v-col >
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Delivery type</p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Umoja Shipping</p>
        </v-col>
      </v-row>
      <v-row class="pa-4" style="border-top-width: 300px;border-top :1px dashed #90BEAA " >
        <v-col style="position: relative;">
          <v-icon style="    top: -28px;
    left: 0px;position: absolute;" color="#90BEAA" icon="mdi mdi-circle"></v-icon>

    
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Processed</p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">May 14</p>
        </v-col>
        <v-col style="position: relative;">
          <v-icon style="    top: -28px;
    left: 10%;position: absolute;" color="#90BEAA" icon="mdi mdi-circle"></v-icon>
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Shipped </p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;">May 16</p>
        </v-col>
        <v-col style="position: relative;">
          <v-icon style="    top: -28px;
    left: 10%;position: absolute;" color="#90BEAA" icon="mdi mdi-circle"></v-icon>
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">In-transit</p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal; " class="d-flex align-center">May 24</p>
        </v-col>
        <v-col style="position: relative;">
          <v-icon style="    top: -28px;
    right: 0px;position: absolute;" color="green" icon="mdi mdi-check-circle"></v-icon>
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Delivery type</p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Umoja Shipping</p>
        </v-col>
      </v-row>
    </v-card>
  </v-expand-transition>
    </div>

</div>
</template>

<script>
export default {
    name: "ownerinfo",
    methods:{
  select(x){
    if(this.selected == x){
      this.selected = null;
      return;
    }else{

      this.selected = x;
    }
  },
},
    data() {
        return {
            selected: '',
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
       status: 4,
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
       status: 3,
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

 
  ],
            
            
        }
    }
}</script>