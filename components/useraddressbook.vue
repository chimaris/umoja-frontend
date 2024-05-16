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
    <div class="mx-6 mb-6  cardStyle" >
   <template v-if="shippingAddress.length >= 1">
    <div v-for="address in shippingAddress" :key="address.id">
    <div  class="pa-4 cardStyle mb-4 d-flex align-start justify-space-between">
<div class="d-flex">
        <div>
            <p style="font-size: 16px; font-weight: 600;" class=" mb-2 my-0">{{address.full_name}}</p>
            <p style="color: #1E1E1E; font-size: 14px; font-weight: 500;" class=" mb-0">{{address.shipping_address}}</p>
            <p style="color: #1E1E1E; font-size: 14px; font-weight: 500;" class=" mb-0">{{ address.shipping_city }}, {{ address.shipping_region }}</p>
            <p style="color: #1E1E1E; font-size: 14px; font-weight: 500;" class=" mb-0">{{address.shipping_country}}</p>
            <p style="color: #1E1E1E; font-size: 14px; font-weight: 500;" class=" mb-3">{{address.phone_number}}</p>
            <p v-if="n == 1" style="color: #00966D; font-size: 14px; font-weight: 500;" class=" my-0"><v-icon size="18" icon="mdi mdi-information"></v-icon> Default Address</p>
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
   </template>

<v-btn @click="dialog = true" class="textClass px-8" rounded="xl" color="green" flat>Create New Address</v-btn>          
</div>
<v-dialog max-width="750" v-model="dialog">
<v-sheet max-width="949" class="cardStyle pa-6">
    <p style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 600;">Add New Address</p>
    <v-card flat   class="cardStyle mt-4 bg-white rounded-lg pa-4 py-4">
    <v-form v-model="valid" @submit.prevent="addAddress">
        <v-row>
            <v-col class="pb-0" cols="12">
                <p class="inputLabel">Full Name<span class="mb-2">*</span></p>             
                <v-text-field placeholder="Enter your full name" v-model="fullName" :rules="inputRules" density="comfortable"  >
                </v-text-field>    
            </v-col> 
            <v-col cols="12" class="pt-0" md="6"> 
                <p class="inputLabel">Email Address<span class="mb-2">*</span></p>             
                <v-text-field :rules="emailRules" v-model="email" placeholder="Enter your email address" density="comfortable"  >
                </v-text-field></v-col>
            <v-col cols="12" md="6">
                <p class="inputLabel">Phone Number<span class="mb-2">*</span></p>             
                <v-text-field :rules="phoneRules" v-model="phoneNumber" placeholder="Enter your phone number (only digits)" density="comfortable"  >
                </v-text-field></v-col>
        </v-row>                  
        <p class="inputLabel">Street Name and House Number*<span class="mb-2">*</span></p>             
        <v-text-field :rules="inputRules" v-model="streetName" placeholder="Enter your Street Name and House Number" density="comfortable"  >
        </v-text-field>
         <v-row class="">
            <v-col cols="12" md="6"> 
                <p class="inputLabel">Country<span class="mb-2">*</span></p>             
                <v-select 
                    append-inner-icon="mdi mdi-chevron-down" 
                    v-model="shippingCountry" 
                    placeholder="Select Country" 
                    :items="allCountries" 
                    :rules="inputRules"
                    @input="fetchStates(shippingCountry)"
                    density="comfortable"  >
                </v-select>
            </v-col>
            <v-col cols="12" md="6">
                <p class="inputLabel">Region<span class="mb-2">*</span></p>                    
                <v-select 
                    append-inner-icon="mdi mdi-chevron-down" 
                    v-model="shippingState"
                    color="green"
                    :items="states" 
                    @change="fetchCities(shippingCountry, shippingState)"
                    :rules="inputRules"
                    hint="**Make sure you select your country first**"
                    :loading="loadingStates"
                    placeholder="Select region" 
                    density="comfortable"  >
                </v-select>
            </v-col>
         </v-row>   
         <v-row class="">
            <v-col cols="12" md="6"> 
                <p class="inputLabel">City<span class="mb-2">*</span></p>             
                <v-select 
                    append-inner-icon="mdi mdi-chevron-down" 
                    v-model="shippingCity" 
                    :items="cities"
                    color="green"
                    :loading="loadingCities"
                    :rules="inputRules"
                    placeholder="Select City" density="comfortable"  >
                </v-select>
            </v-col>
            <v-col cols="12" md="6">
                <p class="inputLabel">Postal code<span class="mb-2">*</span></p>                    
                <v-text-field v-model="zipcode" placeholder="Enter your zipcode" density="comfortable"  >
                </v-text-field> 
            </v-col>
         </v-row>               
         <v-btn class="textClass px-8" rounded="xl" type="submit" :disabled="!valid" color="green"  flat>Use this address</v-btn>          
         <v-btn @click="dialog=false" variant="tonal" class="textClass ml-2 px-8" rounded="xl" color="green" flat>Cancel</v-btn>   
    </v-form>       
         
</v-card>
    </v-sheet>
    </v-dialog>
</template>
<script setup>
import {ref, onMounted} from 'vue';
import {emailRules, inputRules, phoneRules} from '~/utils/formrules'
import { allCountries, fetchStates, fetchCities, states, cities, loadingStates, loadingCities } from '~/utils/countryapi';
import {fetchShippingAdress, updateShippingAddress, createShippingAddress,addressError, shippingMethods } from '~/composables/useShippingAddress'

const dialog = ref(false)
const shippingAddress = ref([])
const shippingCity = ref("");
const shippingCountry = ref("")
const shippingState = ref("")
const fullName = ref("");
const phoneNumber = ref("")
const email = ref("")
const streetName = ref("")
const zipcode = ref("")
const valid = ref(false)

onMounted(async () => {
    shippingAddress.value = await fetchShippingAdress()
});
watch(() => shippingCountry.value, () => {
        fetchStates(shippingCountry.value)
	});

    watch(() => shippingState.value, () => {
			fetchCities(shippingCountry.value, shippingState.value);
	});
  async function addAddress() {
    if (valid.value){
        const data = {
                    shipping_full_name: fullName.value, 
                    shipping_email: email.value,
                    shipping_phone_number: phoneNumber.value,
                    shipping_address: streetName.value,
                    shipping_region: shippingState.value,
                    shipping_city: shippingCity.value,
                    shipping_country: shippingCountry.value,
                    shipping_postal_code: zipcode.value
        }
        const response = await createShippingAddress(data)
        if (response) {
            shippingAddress.value = await fetchShippingAdress()
            dialog.value = false
        }
        fullName.value = ""
        email.value = ""
        phoneNumber.value = ""
        streetName.value = ""
        shippingState.value = ""
        shippingCity.value = ""
        shippingCountry.value = ""
        zipcode.value = ""
    }
  }
</script>