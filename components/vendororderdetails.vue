<template>
     <v-container height="100%" class=" mx-auto px-5 " width="100%"
          style="overflow:hidden;padding-bottom: 200px;max-width: 1330px;" flat>

          <div class="d-flex pb-4 pt-2 justify-space-between">
               <div class="d-flex align-center">

                    <h1 style="font-weight: 700;
                         font-size: 24px;
                         line-height: 30px;
                         letter-spacing: -0.02em;
                         ">Order Details / <span style="
                         color: #2C6E63;
                         "> #23442 </span>
                    </h1>
                    <v-chip rounded="lg" style="width: 108px;" class="d-flex align-center justify-center ml-3 mr-2"
                         color="#1273EB">
                         <v-icon class="mr-2" size="16" icon="mdi mdi-check-circle"></v-icon>
                         <span style="font-weight: 600;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.01em;
color: #1273EB;">Paid</span>
                    </v-chip>
                    <v-chip rounded="lg" style="width: 108px;" class="d-flex align-center justify-center mx-2"
                         color="#C5912C">
                         <span style="font-weight: 600;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.01em;
color: #C5912C;">Unfulfilled</span>
                    </v-chip>
               </div>
               <div class="d-flex align-center">

                    <v-btn style="    border: 1px solid #e5e5e5;
" variant="outlined" size="large" class="ml-4 text-grey-darken-3">
                         <v-icon class="mr-2" icon="mdi mdi-cash"></v-icon>
                         Refund
                    </v-btn>
                    <v-btn flat color="green" size="large" class="ml-4 text-grey-darken-3">
                         <v-icon class="mr-2" icon="mdi mdi-pencil"></v-icon>
                         Edit
                    </v-btn>

               </div>
          </div>
          <div class="d-flex">

               <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #969696;">Order Date:
                    <span style="color: #333333;">
                         June 14th, 2023 01:32

                    </span>
               </p>
               <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #969696;" class="ml-3">Maximum Delivery Period:
                    <span style="color: #333333;">
                         10 Days

                    </span>
               </p>
          </div>

          <v-row>
               <v-col cols="12" sm="8">
                    <v-sheet class="cardStyle mt-8 ">
                         <v-tabs v-model="tab" color="green">
                              <v-tab v-for="item in ['Customer Details', 'Payments']" :key="item" :value="item"
                                   class="d-flex align-center">
                                   {{ item }}

                              </v-tab>
                         </v-tabs>
                         <v-divider></v-divider>
                         <v-window v-model="tab">
                              <v-window-item value="Customer Details">
                                   <v-sheet class="d-flex mt-5">
                                        <v-avatar rounded="sm" class="mr-6" size="107"><v-img
                                                  src="https://res.cloudinary.com/payhospi/image/upload/v1687259890/Rectangle_1925_rbn5se.png"></v-img></v-avatar>
                                        <v-row>
                                             <v-col v-for="n in orderDetails" :key="n.title" cols="12" style="font-weight: 500;
font-size: 14px;
line-height: 18px;" sm="6" md="4">
                                                  <p style="
color: #969696;" class="text-capitalize">{{ n.title }}</p>
                                                  <p style="
color: #333333;" class="mt-2">{{ n.value }}
                                                       <v-btn v-if="n.img" color="grey-lighten-2" height="auto" flat
                                                            class="pa-1 mt-2 px-2 rounded-lg "> <v-img width="50"
                                                                 :src="n.img"></v-img></v-btn>
                                                  </p>
                                             </v-col>
                                        </v-row>
                                   </v-sheet> </v-window-item>
                              <v-window-item value="Payments">
                                   <div></div>
                              </v-window-item>
                         </v-window>

                    </v-sheet>

                    <div class="d-flex align-center mt-6  justify-space-between">
                         <div>

                              <h4 style="font-weight: 700;
font-size: 20px;
line-height: 25px;" class="mb-2  d-flex align-center text-left">Ordered Items</h4>

                         </div>

                         <v-chip-group variant="outlined" mandatory style="font-size: 14px;
line-height: 17px;font-weight: 600!important;
letter-spacing: 0.03em;
text-transform: uppercase;
color: #333333;" class=" text-capitalize" v-model="chip" selected-class=" chipselected2">
                              <v-chip :class="chip == tag ? 'chipselected2' : ''" style="border: 1px solid #CED2D6
;font-size: 14px;font-weight: 600!important;" size="x-large" class=" pa-4"
                                   v-for="tag in ['All', 'Fulfilled', 'Unfulfilled']" :key="tag">
                                   {{ tag }}
                              </v-chip>
                         </v-chip-group>
                    </div>
                    <v-sheet style="
    overflow: hidden;
" class="cardStyle pa-0 mt-4 mb-8">
                         <div class="rounded- mt-5">
                              <v-table style="    height: 328!important;
    overflow: scroll;">
                                   <thead>
                                        <tr class=" ">
                                             <th style="font-size: 14px;" class="  font-weight-medium  ">
                                                  #
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  Image
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  Name
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  Color
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  Size
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  Price/Unit
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  Qty
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  Discount
                                             </th>
                                             <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
                                                  Total
                                             </th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        <tr @click="chosen = item.sn" style="height: 84px;"
                                             :style="chosen == item.sn ? 'background:#DFDFDF' : ''" v-for="(item, i) in items"
                                             :key="item.sn">
                                             <td style="font-size: 14px;" class="text-grey-lighten-1 pl-4 px-1">{{ i + 1 }}.
                                             </td>
                                             <td style="font-size: 14px;" class="px-1">
                                                  <v-avatar color="grey-lighten-2" class="pa-1 ml-1" size="44"
                                                       rounded="lg"><v-img
                                                            src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"></v-img></v-avatar>
                                             </td>
                                             <td style="" class=" tiny2  px-1">{{ item.name }}</td>
                                             <td style="" class=" font-weight-bold text-grey-darken-2 px-1">
                                                  <div class="h-100 d-flex align-center">

                                                       <v-icon icon="mdi mdi-circle" class="mx-1" color="black"
                                                            size="12"></v-icon>
                                                       <v-icon icon="mdi mdi-circle" class="mx-1" color="yellow"
                                                            size="12"></v-icon>
                                                       <v-icon icon="mdi mdi-circle" class="mx-1" color="brown"
                                                            size="12"></v-icon>
                                                  </div>
                                             </td>
                                             <td style="font-size: 14px;font-weight: 500;" class="text-grey-darken-2 px-1">50
                                                  Yards</td>
                                             <td class="tiny2  px-1">{{ item.total }}</td>
                                             <td class="tiny2 px-1">5</td>
                                             <td style="font-size: 14px;" class="text-grey-lighten-2 px-1">0.00</td>
                                             <td class="tiny2 pr-4 px-1">{{ item.total }}</td>

                                        </tr>
                                   </tbody>
                              </v-table>
                         </div>
                    </v-sheet>
                    <div class=" ">

                         <h4 style="font-weight: 700;
font-size: 20px;
line-height: 25px;" class="mb-2  d-flex align-center text-left">Order Summary</h4>



                    </div>
                    <v-sheet style="
    overflow: hidden;
" class="cardStyle pa-0 mt-4 ">
                         <div class="">
                              <div v-for="n in summary" :key="n.title" class=" px-4">
                                   <div style="height: 70px;" class="d-flex align-center  justify-space-between">
                                        <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #969696;">{{ n.title }}</p>
                                        <p style="font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #333333;">{{ n.value }}</p>
                                   </div>
                                   <v-divider></v-divider>

                              </div>
                              <div class="bg-black pt-6">
                                   <div class="d-flex px-4 pb-6 text-white justify-space-between">
                                        <p style="font-weight: 500;
font-size: 16px;
line-height: 18px;">Grand Total:</p>
                                        <p style="font-weight: 600;
font-size: 20px;
line-height: 20px;">€ 1,829.00</p>
                                   </div>

                              </div>
                         </div>
                    </v-sheet>
               </v-col>
               <v-col cols="12" sm="4">
                    <v-sheet class="cardStyle  pt-0 mt-8">
                         <div class="d-flex align-center py-4 justify-space-between">
                              <p style="font-weight: 600;
font-size: 20px;
line-height: 20px;
color: #333333;"> Inside Notes</p>
                              <v-btn rounded="xl" v-bind="props" icon="mdi mdi-plus" style="    border: 1px solid #e5e5e5;
  " variant="outlined" class=" text-grey-darken-3">
                              </v-btn>
                         </div>
                         <v-divider class="mb-3"></v-divider>
                         <v-card v-for="(n, i) in notes" :key="i" class="mb-8" flat>
                              <div class="d-flex py-3 align-center ">
                                   <v-avatar size="50" class="mr-2"><v-img :src="n.image"></v-img></v-avatar>

                                   <div>
                                        <p style="font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #333333;">{{ n.name }}</p>
                                        <p class="mt-1" style="font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #969696;
">June 14th, 2023 01:35</p>
                                   </div>
                              </div>
                              <p style="font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #333333;" class="pb-4">Lorem ipsum dolor sit amet consectetur. Lobortis sagittis porta tincidunt nibh eget
                                   lacus. Tristique tellus tempus dolor semper aliquam amet ipsum at. </p>
                              <v-row>
                                   <v-col cols="6">
                                        <v-btn block style="  font-weight: 400!important;
font-size: 14px!important;
line-height: 20px!important;  border: 1px solid #e5e5e5!important;
  " variant="outlined" class=" text-grey-darken-3">
                                             <span style="font-weight: 400!important;
font-size: 14px!important;
line-height: 20px!important;">Edit</span>
                                        </v-btn>
                                   </v-col>
                                   <v-col cols="6"> <v-btn style="" color="red" variant="tonal" block>
                                             <span style="font-weight: 400!important;
font-size: 14px!important;
line-height: 20px!important;">Delete</span>
                                        </v-btn></v-col>
                              </v-row>

                         </v-card>
                    </v-sheet>
               </v-col>
          </v-row>

     </v-container>
</template>
<script>
export default {
     data() {
          return {
               tab: 'Customer Details',
               chip: 'All',
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