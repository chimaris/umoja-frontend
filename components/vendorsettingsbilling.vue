<template>
    <div>
        <p 
                    style="color: #000;
                    font-size: 20px;
                    font-weight: 600;" class="pa-5">Billing</p>
                    <v-divider></v-divider>

<v-row class="pa-6">
    <v-col cols="12" md="6">
        <v-sheet class="cardStyle">
<div  class="d-flex mb-2 justify-space-between">
    <v-chip flat variant="elevated" elevation="0" class="pa-5 px-6" size="large"  color="green"> <span style="font-size: 16.879px!important;
font-weight: 500;">Basic Plan</span></v-chip>
<v-icon size="30" color="#A0A0A0" icon="mdi mdi-circle-outline"></v-icon>
</div>
<p style="color:#333;
font-size: 40px;
font-weight: 600;">€ 10/Month</p>
<p style="color: #333;
font-size: 16px;
font-weight: 400;" class="mb-8">Our free plan has...</p>

<div v-for="n in 4" class=" mb-4 d-flex align-center ">
<v-icon class="mr-2" icon="mdi mdi-check-circle-outline" color="green"></v-icon>
<p style="color: #333;
font-size: 14px;
font-weight: 400;
">Lorem ipsum dolor sit amet consectetur.</p>
</div>
<v-btn class="mt-12" size="large" block style="    border: 1px solid #e5e5e5;"  variant="outlined"><span style="color: var(--grey-1000, #1A1D1F);

font-size: 14px;
font-weight: 600;">Join for Free</span></v-btn>

        </v-sheet>
    </v-col>
    <v-col cols="12" md="6">
        <v-sheet class="cardStyle">
<div  class="d-flex mb-2 justify-space-between">
    <v-chip flat variant="elevated" elevation="0" class="pa-5 px-6" size="large"  color="green"> <span style="font-size: 16.879px!important;
font-weight: 500;">Premium Plan</span></v-chip>
<v-icon size="30" color="#2C6E63" icon="mdi mdi-check-circle"></v-icon>
</div>
<p style="color:#2C6E63;
font-size: 40px;
font-weight: 600;">€ 30/Month</p>
<p style="color: #333;
font-size: 16px;
font-weight: 400;" class="mb-8">Everything in our free plan plus...</p>

<div v-for="n in 7" class=" mb-4 d-flex align-center ">
<v-icon class="mr-2" icon="mdi mdi-check-circle-outline" color="green"></v-icon>
<p style="color: #333;
font-size: 14px;
font-weight: 400;
">Lorem ipsum dolor sit amet consectetur.</p>
</div>
<v-btn class="mt-12" size="large" block flat color="green"><span style="

font-size: 14px;
font-weight: 600;">Join for Free</span></v-btn>

        </v-sheet>
    </v-col>

</v-row>
<v-divider></v-divider>

<div class="pa-5  py-8">

<div class="mb-4 d-flex align-center justify-space-between">
    <div>
        <p style="font-size: 20px;
    
    font-weight: 600;">Billing History </p>
    <p style="color: var(--carbon-4, #333);
font-size: 14px;
font-weight: 400;">Access all your previous Invoices</p>
    </div>

<v-btn @click="choose('Import Product')"  style="    border: 1px solid #e5e5e5;
" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3" >
<v-icon class="mr-2" icon="mdi mdi-tray-arrow-down"></v-icon>
Download All
</v-btn>

</div>

<v-sheet style="
    overflow: hidden;
" class="cardStyle pa-0 mt-4 mb-8">
                         <div class="pt-2">
                              <v-table style="    height: 328!important;
    overflow: scroll;">
                                   <thead>
                                        <tr class=" ">
                                             <th style="font-size: 14px;" class="  font-weight-medium  ">
                                                    <v-checkbox hide-details=""></v-checkbox>
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  Invoice
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  Plan
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                Billing Date
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                Amount
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  Status
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                             </th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        <tr @click="chosen = item.sn" style="height: 84px;"
                                             :style="chosen == item.sn ? 'background:#DFDFDF' : ''" v-for="(item, i) in items"
                                             :key="item.sn">
                                             <td style="font-size: 14px;" class="text-grey-lighten-1 pl-4 px-1">         
                                                 <v-checkbox hide-details=""></v-checkbox>
                                             </td>
                                             <td style="font-size: 14px;" class="px-1 pr-3">
                                                  <div class="d-flex align-center">

                                                       <v-avatar color="grey-lighten-2" class="pa-1 ml-1 mr-2" size="44"
                                                       rounded="lg"><v-img
                                                       src="https://res.cloudinary.com/payhospi/image/upload/v1689344970/pdf-file-icon-1_efdfmv.png"></v-img></v-avatar>
                                                       <p style="color: #333;
font-size: 14px;
font-weight: 500;">Invoice #007 - Dec 2023</p>
                                                  </div>
                                             </td>
                                            
                                             <td style="font-size: 14px;font-weight: 500;" class="text-grey-darken-2 px-1">Basic Plan</td>
                                             <td style="font-size: 14px;font-weight: 500;" class="text-grey-darken-2 px-1">Dec 1, 2023</td>
                                             <td style="font-size: 14px;font-weight: 500;" class="text-grey-darken-2 px-1">EUR € 10.00</td>
                                             <td class="tiny2  px-1"> <td  class="text-grey-lighten-1 text-center px-1">
            <v-chip rounded="lg" class="tablechip" color="blue" variant='tonal'>
              <v-icon class="mr-2" size="small" icon="mdi mdi-check-circle"></v-icon> Paid
                
            </v-chip>
        </td></td>
                                          
                                             <td style="font-size: 14px;" class="text-grey-lighten-2 px-1">
                                             <v-btn @click="choose('Import Product')"  style="    border: 1px solid #e5e5e5;
                                                " variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3" >
                                                <v-icon class="mr-2" icon="mdi mdi-tray-arrow-down"></v-icon>
                                                Download All
                                                </v-btn>
                                                </td>
                                             <td class="tiny2 pr-4 px-1"><v-icon icon="mdi mdi-dots-horizontal"></v-icon></td>

                                        </tr>
                                   </tbody>
                              </v-table>
                         </div>
                    </v-sheet>
</div>
           
    </div>
</template>
<script>
export default {
     data() {
          return {
               tab: 'Customer Details',
               chip: 'All',
               edit: false,
               chosen: '',
               notes: [{
                    name: 'Benjamin Franklin O.',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1687265847/Rectangle_1929_qzdwmq.png'
               },
               {
                    name: 'Nweke Franklin',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1687265844/Rectangle_1929_1_x8i5ic.png'
               },
               {
                    name: 'Nweke Franklin',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1687265844/Rectangle_1929_1_x8i5ic.png'
               },

               ],
               summary: [
                    {
                         title: 'Total Quantity',
                         value: '4 Items'
                    },
                    {
                         title: 'Grand Total',
                         value: '€ 1,829.00'
                    }, {
                         title: 'Sub-Total',
                         value: '€ 1,817.00'
                    },
                    {
                         title: 'Shipping International',
                         value: '€ 12.00'
                    },
                    {
                         title: 'Taxes',
                         value: '€ 0.00'
                    }
               ],
               items: [
                    {
                         sn: '#23942',
                         name: 'Leather crop top & pants......',
                         date: '17 May',
                         total: '€2,349‎',
                    },
                    {
                         sn: '#23442',
                         name: 'Leather crop top & pants......',
                         date: '17 May',
                         total: '€2,349‎',
                    },
                    {
                         sn: '#26042',
                         name: 'Leather crop top & pants......',
                         date: '17 May',
                         total: '€2,349‎',
                    },


               ],
          }
     },
     computed: {
          orderDetails() {
               return [
                    {
                         title: 'Name',
                         value: 'Benjamin Franklin O.'
                    },
                    {
                         title: 'Email',
                         value: 'sylvesterfranklin007@gmail.com'
                    },
                    {
                         title: 'Phone',
                         value: '+145789900'
                    },
                    {
                         title: 'Billing',
                         value: 'Michael Johnson, Michael’s Corp LLC Rose Str. 120 New York, PH 10000 United States (US)'
                    },
                    {
                         title: 'Shipping',
                         value: 'Michael Johnson, Michael’s Corp LLC Rose Str. 120 New York, PH 10000 United States (US)'
                    },
                    {
                         title: 'Shipping Company',
                         value: 'Umoja Free Shipping',
                         img: 'https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png'
                    },
               ]
          }
     }
}
</script>