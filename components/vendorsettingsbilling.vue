<template>
    <div>
        <p 
                    style="color: #000;
                    font-size: 20px;
                    font-weight: 600;" class="pa-5">Billing</p>
                    <v-divider></v-divider>

<v-row class="pa-6 align-items-stretch">
    <v-col cols="12" md="6">
        <v-sheet class="cardStyle">
<div  class="d-flex mb-2 justify-space-between">
    <v-chip flat variant="elevated" elevation="0" class="pa-5 px-6" size="large"  color="green"> <span style="font-size: 16.879px!important;
font-weight: 500;">Free Package</span></v-chip>
<v-icon size="30" color="#2C6E63" icon="mdi mdi-check-circle"></v-icon>
</div>
<p style="color:#333;
font-size: 40px;
font-weight: 600;">€ Free/Month</p>
<p style="color: #333;
font-size: 16px;
font-weight: 400;" class="mb-8">Our free plan has...</p>

<div v-for="n in freeFeatures" :key="n" class=" mb-4 d-flex align-center ">
<v-icon class="mr-2" icon="mdi mdi-check-circle-outline" color="green"></v-icon>
<p style="color: #333;
font-size: 14px;
font-weight: 400;
">{{n}}</p>
</div>
<!-- <v-btn class="mt-12" size="large" block style="    border: 1px solid #e5e5e5;"  variant="outlined"><span style="color: var(--grey-1000, #1A1D1F);

font-size: 14px;
font-weight: 600;">Join for Free</span></v-btn> -->

        </v-sheet>
    </v-col>
    <v-col cols="12" md="6">
        <v-sheet class="cardStyle" style="opacity: 0.5">
<div  class="d-flex mb-2 justify-space-between">
    <v-chip flat variant="elevated" elevation="0" class="pa-5 px-6" size="large"  color="green"> <span style="font-size: 16.879px!important;
font-weight: 500;">Business Package</span></v-chip>
<v-icon size="30" color="#A0A0A0" icon="mdi mdi-circle-outline"></v-icon>

</div>
<p style="color:#2C6E63;
font-size: 40px;
font-weight: 600;">€ 29.99/Month</p>
<p style="color: #333;
font-size: 16px;
font-weight: 400;" class="mb-8">Everything in our free plan plus...</p>

<div v-for="n in businessPackage" :key="n" class=" mb-4 d-flex align-center ">
<v-icon class="mr-2" icon="mdi mdi-check-circle-outline" color="green"></v-icon>
<p style="color: #333;
font-size: 14px;
font-weight: 400;
">{{n}}</p>
</div>
<v-btn class="mt-12" size="large" block flat color="green"><span style="

font-size: 14px;
font-weight: 600;">Subscribe</span></v-btn>

        </v-sheet>
    </v-col>
    <v-col cols="12" md="6">
        <v-sheet class="cardStyle" style="opacity: 0.5">
<div  class="d-flex mb-2 justify-space-between">
    <v-chip flat variant="elevated" elevation="0" class="pa-5 px-6" size="large"  color="green"> <span style="font-size: 16.879px!important;
font-weight: 500;">Premium Plan</span></v-chip>
<v-icon size="30" color="#A0A0A0" icon="mdi mdi-circle-outline"></v-icon>
</div>
<p style="color:#2C6E63;
font-size: 40px;
font-weight: 600;">Customised/Month</p>
<p style="color: #333;
font-size: 16px;
font-weight: 400;" class="mb-8">Everything in our free plan plus...</p>

<div v-for="n in premiumPackage" :key="n" class=" mb-4 d-flex align-center ">
<v-icon class="mr-2" icon="mdi mdi-check-circle-outline" color="green"></v-icon>
<p style="color: #333;
font-size: 14px;
font-weight: 400;
">{{n}}</p>
</div>
<v-btn class="mt-12" size="large" block flat color="green"><span style="

font-size: 14px;
font-weight: 600;">Subscribe</span></v-btn>

        </v-sheet>
    </v-col>
</v-row>
<v-divider></v-divider>

<div class="pa-5  py-8 d-none">

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
<script setup>
	const freeFeatures = [
		"Basic storefront on the Umoja platform to showcase products.",
		"Access to essential inventory management & Order processing tools.",
		"Advanced analytics and reporting for deeper insights into sales performance.",
		"Standard customer support via email.",
		"Sales Commission: 10% of each sale made through the platform.",
		"Ideal for: Businesses and start-ups looking to test the platform and get started with minimal upfront costs."
	]
	const businessPackage = [
		"Verified business profile",
		"Expanded storefront on the Umoja platform to showcase more products",
		"Enhanced inventory management tools with additional features",
		"Full order processing and fulfillment capabilities",
		"Access to basic analytics and reporting",
		"Standard customer support via email",
		"Sales Commission: 8% of each sale made through the platform",
		"Listing Fee: $0.15 per product listing",
		"Ideal for: Small businesses and startups ready to expand their online presence and manage their operations more efficiently."
	]
	const premiumPackage = [
		"All features included in the Basic Package",
		"Enhanced marketing and promotional tools, including featured listings and discounts",
		"Advanced analytics and reporting for deeper insights into sales performance",
		"Priority customer support with faster response times and dedicated account management",
		"Sales Commission: 6% of each sale made through the platform",
		"Listing Fee: $0.10 per product listing",
		"Ideal for: Growing businesses seeking to increase their sales, drive customer engagement, and optimize their operations with additional support and features"
	]
</script>