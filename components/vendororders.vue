<template>
     <v-container height="100%"  class=" mx-auto pt-6 pa-4" width="100%" style="overflow:hidden"  flat >
        <div class="d-flex align-center  justify-space-between">
            <div>
                <p style="font-weight: 600;
font-size: 24px;" class="mb-2  d-flex align-center text-left">
                    Manage all your orders here
                </p> 
            </div>
            <div>

                <v-btn style="    border: 1px solid #e5e5e5;
" variant="outlined" size="large" class="ml-4 text-grey-darken-3" >
                 <v-icon class="mr-2" icon="mdi mdi-printer"></v-icon>
                Print
            </v-btn>
            <v-btn style="    border: 1px solid #e5e5e5;"
             variant="outlined" size="large" class="ml-4 text-grey-darken-3" >
                <v-icon class="mr-2" icon="mdi mdi-tray-arrow-up"></v-icon>
                Export 
            </v-btn>
            <v-btn @click="choose2()" flat color="green" size="large" class="ml-4 text-grey-darken-3" >
                 <v-icon class="mr-2"  icon="mdi mdi-plus"></v-icon>
                Create Order
            </v-btn>
        </div>
        </div>
        <div class="d-flex w-100 align-center mt-6 justify-space-between">
            <div class="d-flex w-100 align-center ">
         <v-text-field style="border: 1px solid #CECECE;
border-radius: 6px;" variant="outlined" density="compact" hide-details prepend-inner-icon="mdi mdi-magnify" placeholder="Search for order id, customer, order status or something..."></v-text-field></div>
            <div class="d-flex align-center">

                <v-btn style="    border: 1px solid #e5e5e5;
" variant="outlined" size="large" class="ml-4  text-grey-darken-3" >
                 <v-icon class="mr-2" icon="mdi mdi-tune"></v-icon>
                Filter
            </v-btn>
            <v-btn style="    border: 1px solid #e5e5e5;
" variant="outlined" size="large" class="ml-4  text-grey-darken-3" >
                <v-icon class="mr-2" icon="mdi mdi-paperclip"></v-icon>
                Attachment 
            </v-btn>
         
        </div>
        </div>
<div class=" mt-5" >
    <v-tabs
      v-model="tab" class="orders"
      color="green"
      
    >
      <v-tab 
      @click.stop="sort(item.prop, item.value)"
        v-for="item in tabs"
        :key="item"
        :value="item" 
        class="d-flex text-capitalize  align-center"
      >
        {{ item.name }} 

      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    <v-table style="    height: 80%; !important;
    overflow: scroll;">
    <thead>
      <tr style="background: #F8F8F8;
border-radius: 6px;" class="  rounded-lg">
        <th style="
    width: 50px;
" class="  font-weight-medium  text-left">
           <v-checkbox hide-details></v-checkbox>
        </th>
        <th  style="font-size: 14px;width: 100px;" class="  font-weight-medium  text-left">
          Order id
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          Date
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          Customer
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          Delivery Price
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          Total
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          Payment status
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          item
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          fulfilment status
        </th>
        <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
          Delivery method
        </th>
      </tr>
    </thead>
    <tbody>
        <!-- @click="chosen = item.sn" -->
        <tr  @click="choose(item.sn)"
        :style="chosen == item.sn ? 'background:#DFDFDF':''"
        v-for="item in items"
        :key="item.sn"
        >
        <td  class="text-grey-lighten-1 pl-4 px-1">   
               <v-checkbox hide-details></v-checkbox>
        </td>
        <td style="font-size: 14px;" class="tableThick px-1 pl-2">
            <v-menu
      
      location="end"
    >
      <template v-slot:activator="{ props }">
   
        <span  v-bind="props">

{{ item.sn }}
</span>
      </template> 
      <v-card class="pa-4 rounded-lg bg-green">
        <p><v-icon class="mr-2" size="6" icon="mdi mdi-circle"></v-icon>Customer ID: {{ item.sn }}</p>
        <div class="pt-2 align-center d-flex">
            <v-avatar size="44" class="mr-2"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1685693849/Rectangle_1898_gyahsj.png"></v-img></v-avatar>
            <div>
                <p style="font-weight: 500;font-size: 14px" class="text-capitalize">{{item.customer}}</p>
                <p style="font-weight: 500;
font-size: 10px;
line-height: 100%;
/* identical to box height, or 10px */


color: rgba(255, 255, 255, 0.75);" class="text-capitalize">
<v-icon size="12" class="mr-1" icon="mdi mdi-map-marker"></v-icon>United States</p>
            </div>
        </div>
      </v-card>
    </v-menu>
    </td>
    <td  class="tabledate px-1">{{ item.date }}</td>
    <td  class="tableThick  px-1">{{ item.customer }}</td>
        <td  class="tableLight px-1">
        <span v-if="item.delivery != 0">
          {{ item.delivery  }}
        </span> 
        <span v-else class="d-flex align-center text-green">Free <v-icon class="ml-1" size="small" icon="mdi mdi-star"></v-icon></span>
        </td>
        <td  class="tableThick px-1">{{ item.total  }}</td>
        <td  class="text-grey-lighten-1 text-center px-1">
            <v-chip rounded="lg" class="tablechip" :color="item.payment_status == 1? 'blue': 'orange'" variant='tonal'>
              <v-icon class="mr-2" size="small" v-if=" item.payment_status == 1" icon="mdi mdi-check-circle"></v-icon>  {{ item.payment_status == 1 ?'Paid': 'Pending' }}
                
            </v-chip>
        </td>
        <td  class="tableLight px-1">{{ (item.items_no+ ' Item')+ (item.items_no > 1? 's': '') }}</td>
        <td  class="text-grey-lighten-1 text-center px-1">
            <v-chip rounded="lg" class="tablechip" :color="item.status == 2? 'green':item.status == 0? 'red': 'orange'" variant='tonal'>
                {{ item.status == 2 ? 'Fulfilled':item.status == 0 ? 'Unfulfiled': 'Pending' }}
                
            </v-chip>
        </td>
        <td  class="um  px-1">{{ item.delivery_method }}</td>
        
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
        date:'17 May',
        total:'€2,349‎',
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
        date:'17 May',
        total:'€2,349‎',
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
        date:'17 May',
        total:'€2,349‎',
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
        date:'17 May',
        total:'€2,349‎',
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
        date:'17 May',
        total:'€2,349‎',
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
        date:'17 May',
        total:'€2,349‎',
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
        date:'17 May',
        total:'€2,349‎',
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
        date:'17 May',
        total:'€2,349‎',
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
        date:'17 May',
        total:'€2,349‎',
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
        date:'17 May',
        total:'€2,349‎',
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
        date:'17 May',
        total:'€2,349‎',
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
        date:'17 May',
        total:'€2,349‎',
        date: 'May 29, 2023',
        customer: 'Frank',
        delivery: '€ 24.08',
        payment_status: 1,
        status: 1,
        items_no: 4,
        delivery_method: 'Umoja Delivery'
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