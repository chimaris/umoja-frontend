<template>
    <div class="px-6 py-10"> 
    <p style="color: #000;
font-size: 24px;
font-weight: 600;
">Payment Method</p>
    <p style="color: var(--carbon-3, #969696);
font-family: Faktum;
font-size: 14px;
font-style: normal;
font-weight: 500;">Here you can manage your payment methods</p>
</div>

<div class="mx-6 mb-6 p cardStyle">
    <v-card flat class="pa-4  cardStyle rounded-lg justify-space-between align-center my-4 d-flex" v-for="(n, i) in paymentMethods" :key="i">
   <div  class=" align-center d-flex">

       <v-icon size="20"   icon="mdi mdi-circle-outline"></v-icon>
       <div class="ml-4" style="border-radius: 4.536px;
border: 0.588px solid var(--carbon-1, #EDEDED);">
        <v-img width="54" :src="n.image"></v-img>
       </div>
       <div class="text-capitalize px-4">
           <p style="color: #1E1E1E;
font-size: 16px;
font-weight: 600;" class="  ">{{n.title}}</p>
           <p  style="color: var(--carbon-4, #333);
font-size: 14px;
font-weight: 500;">{{n.expiry}}</p>
        </div>
    </div>
    <v-spacer></v-spacer>
        <v-btn size="small" class="smallText" variant="text"><v-icon class="ml-2" size="24" icon="mdi mdi-dots-horizontal"></v-icon></v-btn>
</v-card>
<v-btn @click="dialog = true" size="large" width="" flat style="border: 1px solid var(--carbon-2, #CECECE);" class="px-7 " rounded="xl">
    <span style="color: #333;
    font-size: 14px;
    font-weight: 600;" class="d-flex align-center">
        <v-icon class="mr-1" icon="mdi mdi-plus"></v-icon>
        New Payment Method
    </span>
</v-btn>
</div>
<v-dialog max-width="750" v-model="dialog">
<v-sheet max-width="949" class="cardStyle pa-6">
    <p style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 600;">Select Payment Method</p>
    <v-card flat class="my-4 cardStyle">
    <div  class=" align-center justify-space-between d-flex">
        <div class="d-flex align-center">

            <v-icon color="green" icon="mdi mdi-circle-slice-8" size="30"></v-icon>
            <div class="text-capitalize   px-4">
                <p style="font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #333333;" class="">Credit Card</p>
</div>
  
 </div>
 <div class="d-flex align-center justify-end">
    <v-img contain src="https://res.cloudinary.com/payhospi/image/upload/v1691581811/logo_shmb54.png" width="53" height="auto"></v-img>
    <v-img contain src="https://res.cloudinary.com/payhospi/image/upload/v1691581811/logo2_jpei5o.png" width="53" height="auto"></v-img>
 </div>
</div>

<v-divider class="my-4"></v-divider>
         
         <v-text-field placeholder="Card number" density="comfortable"  >
         </v-text-field>
         <v-text-field placeholder="Name on card" density="comfortable"  >
         </v-text-field>
        <v-row class="mt-">
    
                 <v-col class="pb-0" cols="12" md="6"> 
                  
     <v-text-field placeholder="Expiration date (MM/YY)" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col class="pb-0" cols="12" md="6">            
     <v-text-field placeholder="CVV" density="comfortable"  >
         </v-text-field></v-col>
         </v-row> 
         </v-card>  
         <v-card flat :color="n.cost == '0.00'? '#EDF3F0': ''"   class="pa-4 cardStyle rounded-lg justify-space-between align-center my-4 d-flex" v-for="n in paymenthods" :key="n">
   <div  class=" align-center d-flex">

       <v-icon size="20"   :color="n.cost == '0.00'? '#2C6E63': ''" :icon="n.cost == '0.00'? 'mdi mdi-radiobox-marked':'mdi mdi-circle-outline'"></v-icon>
       <div class="text-capitalize px-4">
        <p style="font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #333333;" class="">{{n.name}}</p>
        </div>
    </div>
    <v-spacer></v-spacer>
    <v-avatar style="width: 100px;max-height: 20px;" rounded="0" size="40">

<v-img  :src="n.image"></v-img>
</v-avatar>
</v-card>            
    <v-btn class="textClass px-8" rounded="xl" color="green" flat>Add Payment Method</v-btn>          
         <v-btn variant="tonal" class="textClass ml-2 px-8" rounded="xl" color="green" flat>Cancel</v-btn>          
           
</v-sheet>
</v-dialog>
</template>
<script>
export default {
  data() {
    return {
        dialog: false,
        paymenthods:[
        {
            name: 'Paypal',
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1691582666/pay-pal-1_dtxv1k.png'
        },
        {
            name: 'Neteller',
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1691582681/neteller-1_mjjfeu.png'
        },
     ],
        paymentMethods: [
            {
                title: '**** **** **** 9373',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1691581811/logo_shmb54.png',
                expiry: 'Expiry 10/2024',
            },
            {
                title: '**** **** **** 9373',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1691581811/logo2_jpei5o.png',
                expiry: 'Expiry 3/2025',
            }
        ]
    }
}
}
</script>