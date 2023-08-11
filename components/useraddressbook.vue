<template>
    <div class="px-6 py-10"> 
    <p style="color: #000;
font-size: 24px;
font-weight: 600;
">Address Book</p>
    <p style="color: var(--carbon-3, #969696);
font-family: Faktum;
font-size: 14px;
font-style: normal;
font-weight: 500;">Here you can manage all your delivery address.</p>
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
    <div class="mx-6 mb-6  cardStyle">
    <div v-for="n in 3">
    <div  class="pa-4 cardStyle mb-4 d-flex align-start justify-space-between">
<div class="d-flex">
        <div>
            <p style="font-size: 16px;
font-weight: 600;" class=" mb-2 my-0">Da Creative Zik</p>
            <p style="color: #1E1E1E;
font-size: 14px;
font-weight: 500;" class=" mb-0">Mrs Smith 71 Cherry Court</p>
            <p style="color: #1E1E1E;
font-size: 14px;
font-weight: 500;" class=" mb-0">Southampton SO53 5PD</p>
            <p style="color: #1E1E1E;
font-size: 14px;
font-weight: 500;" class=" mb-0">USA</p>
            <p style="color: #1E1E1E;
font-size: 14px;
font-weight: 500;" class=" mb-3">(212) 445-7622</p>
            <p v-if="n == 1" style="color: #00966D;
font-size: 14px;
font-weight: 500;" class=" my-0"><v-icon size="18" icon="mdi mdi-information"></v-icon> Default Address</p>
            <p></p>
        </div>
    </div>
    <div>

        <v-btn flat style="border: 1px solid var(--carbon-2, #CECECE);" class=" ml-2" rounded="xl">
            
            <span style="color: #333;
font-size: 14px;
font-weight: 600;" class="d-flex align-center">
   <v-icon icon="mdi mdi-pencil-outline"></v-icon> Edit
</span>
</v-btn>
<v-btn variant="outlined" color="red" flat style="border: 1px solid var(--carbon-2, #CECECE);" class=" ml-2" rounded="xl">
    
    <span style="
font-size: 14px;
font-weight: 600;" class="d-flex align-center">
   <v-icon icon="mdi mdi-trash-can-outline"></v-icon> Delete
</span>
</v-btn>
</div>
</div>
</div>

<v-btn @click="dialog = true" class="textClass px-8" rounded="xl" color="green" flat>Create New Address</v-btn>          
</div>
<v-dialog max-width="750" v-model="dialog">
<v-sheet max-width="949" class="cardStyle pa-6">
    <p style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 600;">Add New Address</p>
    <v-card flat   class="cardStyle mt-4 bg-white rounded-lg pa-4 py-4">
    
  

<v-row>
                 <v-col class="pb-0" cols="12">
                    <p class="inputLabel">Full Name<span class="mb-2">*</span></p>             
     <v-text-field placeholder="Enter your full name" density="comfortable"  >
         </v-text-field>    
                </v-col> 
                 <v-col cols="12" class="pt-0" md="6"> 
        <p class="inputLabel">Email Address<span class="mb-2">*</span></p>             
     <v-text-field placeholder="Enter your email address" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col cols="12" md="6">
                    <p class="inputLabel">Phone Number<span class="mb-2">*</span></p>             
         
         <v-text-field placeholder="Enter your phone number (only digits)" density="comfortable"  >
         </v-text-field></v-col>
         </v-row>                 
       
         <p class="inputLabel">Street Name and House Number*<span class="mb-2">*</span></p>             
         
         <v-text-field placeholder="Enter your Street Name and House Number" density="comfortable"  >
         </v-text-field>
         <v-row class="">
                 <v-col cols="12" md="6"> 
        <p class="inputLabel">City<span class="mb-2">*</span></p>             
        
        <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select City" density="comfortable"  >
         </v-select>
        
        </v-col>
                 <v-col cols="12" md="6">
                     <p class="inputLabel mb-8"> </p>             
            
      <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select region" density="comfortable"  >
         </v-select>
        </v-col>
         </v-row>   
        <p class="inputLabel">Postal code<span class="mb-2">*</span></p>             
     <v-text-field placeholder="Enter your zipcode" density="comfortable"  >
         </v-text-field>           
           
         <v-btn class="textClass px-8" rounded="xl" color="green"  flat>Use this address</v-btn>          
         <v-btn variant="tonal" class="textClass ml-2 px-8" rounded="xl" color="green" flat>Cancel</v-btn>          
         
</v-card>
    </v-sheet>
    </v-dialog>
</template>
<script>
export default {
  data() {
    return {
        dialog: false,
    }
}
}
</script>