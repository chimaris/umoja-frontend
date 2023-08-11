<template>
     <div class="mx-6 pa-6 mb-6 cardStyle " >
  <div style="width: 100%;border-bottom: 0.5px solid rgb(215, 215, 215);" class=" ">
  <v-expand-transition>

    <v-card rounded="0" color="" class="pb-4" flat v-if="true" style="width:100%;">
      <v-row class="py-4" >
        <v-col >
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Shipping Address</p>
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
line-height: normal;">Billing Address </p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;">Same as shipping address</p>
        </v-col>
        <v-col >
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Shipping Method</p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;">Express delivery
(DHL Express)</p>
        </v-col>
        <v-col >
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Payment Method</p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;">VISA xxxx 5642</p>
        </v-col>
        <v-col >
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Tracking Number</p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal; " class="d-flex align-center">ID25725728RS <v-icon size="x-small" color="green" class="ml-2" icon="mdi mdi-content-copy"></v-icon></p>
        </v-col>
        <v-col >
          <p 
          class="mb-2"
          style="color:  #969696;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">Order type</p>
<p style="color: #333;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;">In-store purchase</p>
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
    left: 5%;position: absolute;" color="#90BEAA" icon="mdi mdi-circle"></v-icon>
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
    left: 5%;position: absolute;" color="#90BEAA" icon="mdi mdi-circle"></v-icon>
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
    left: 5%;position: absolute;" color="green" icon="mdi mdi-check-circle"></v-icon>
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
<div class="mx-6 pa-0 mb-6 cardStyle" >
    <v-table>
    <thead>
      <tr class=" bg-grey-lighten-3 ">
     
        <th style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 600;
line-height: 20px;" class="  font-weight-bold px-4 ">
          Product 
        </th>
        <th style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 600;
line-height: 20px;" class="   font-weight-bold px-1">
         Quantity
        </th>
        <th style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 600;
line-height: 20px;" class="  font-weight-bold px-1">
          Price
        </th>
        <th style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 600;
line-height: 20px;" class="  font-weight-bold px-1">
          Total
        </th>
      </tr>
    </thead>
  
    <tbody    
        >
      <tr    v-for="n in 3"   style=" width: 100%;height: 128px;"
     
      >
        <td style="font-size: 14px;height: ;" class="px-1   pl-6">
          <div class="d-flex align-center">
             <v-avatar rounded="lg" color="grey-lighten-2" class="pa-1 mr-4 ml-1" size="68" ><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"></v-img></v-avatar>
          <div>

            <p class="" style="color: #1273EB;
font-size: 14px;
font-weight: 600;
line-height: 20px; /* 142.857% */
text-decoration-line: underline;">Multicolored Ankara Material from Ghana</p>
            <p style="font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #969696;">Small</p>
            <p style="font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #969696;">SKU: 5000</p>
          </div>
          </div>
         
    </td>
        <td style="font-size: 14px;" class="text-grey-darken-1 px-1">
        <v-chip rounded="lg" color="blue">
        <span style="color: var(--carbon-4, #969696);
font-size: 14px!important;
font-weight: 600;
line-height: 20px;" class="text-black">
          1
        </span>
      </v-chip>
        </td>
        <td style="color: #969696;
font-size: 14px;
font-weight: 500;" class=" px-1 ">
<span>

€ 5,829.00 
</span>
</td>
        <td style="color: #000;
font-size: 14px;
font-weight: 500;" class=" px-1 ">
<span>

€ 5,829.00 
</span>
</td>
      

</tr>
</tbody>
</v-table>
</div>
<div class="mx-6 pa-0 mb-6 cardStyle" >
<v-row>
  <v-col cols="6">
    <div class="pa-4 w-100" style="max-width: 334px;">
      <div v-for="n in summary" :key="n.title" class="d-flex py-1 justify-space-between">
        <p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;">{{n.title}}</p>
        <p style="color: var(--carbon-4, #333);
font-size: 16px;
font-weight: 600;">{{n.value}} </p>
      </div>
    </div>
  </v-col>
  <v-col cols="6" class="d-flex align-end justify-end">
    <div class="pa-4  w-100" style="max-width: 334px;">
      <div  class="d-flex py-1 justify-space-between">
        <p style="color: var(--carbon-3, #969696);
font-size: 20px;
font-weight: 500;">Grand Total</p>
        <p style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 500;">€ 5,829.00 </p>
      </div>
    </div>
  </v-col>
</v-row>
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
          summary: [
            {
              title: 'Subtotal:',
              value: '€ 5,829.00 '
            },
            {
              title: 'Discount:',
              value: '-€ 500 (20% OFF)'
            },
            {
              title: 'Shipment cost:',
              value: '€ 22.50'
            },
          ],
            selected: '',

            
            
        }
    }
}</script>