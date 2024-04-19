<template>
  <div>
 <h1 style="font-weight: 600;
font-size: 32px;
color: #1A1D1F;">Review your application</h1>
 <p style="font-weight: 500;
font-size: 16px;max-width:502px;
line-height: 24px;
color: #9EA5AD;">Here’s a final look at your application, make sure you have met all our registration requirements</p>
<div class="pt-8 pb-12" style="max-width:502px">
<v-card flat height="64" class="d-flex px-4 align-center mb-4" style="
border: 1px solid #E5E7EA;
border-radius: 8px;">
<div>

<v-checkbox v-model="isCompanyInfo" @click="isCompanyInfo = !isCompanyInfo" color="#0076FF" hide-details>
  <template v-slot:label>
    <div class="font-weight-medium">
      Company Information
      
    </div>
  </template>
</v-checkbox>
</div>
</v-card>
<v-card flat height="64" class="d-flex px-4 align-center mb-4" style="
border: 1px solid #E5E7EA;
border-radius: 8px;">
<div>

<v-checkbox v-model="isOwnerInfo" @click="isOwnerInfo = !isOwnerInfo" color="#0076FF" hide-details>
  <template v-slot:label>
    <div class="font-weight-medium">
      Owner’s Information
      
    </div>
  </template>
</v-checkbox>
</div>
</v-card>
<v-card flat height="64" class="d-flex px-4 align-center mb-4" style="
border: 1px solid #E5E7EA;
border-radius: 8px;">
<div>

<v-checkbox v-model="isBusinessDocumentation" @click="isBusinessDocumentation = !isBusinessDocumentation" color="#0076FF" hide-details>
  <template v-slot:label>
    <div class="font-weight-medium">
      Business documentation
      
    </div>
  </template>
</v-checkbox>
</div>
</v-card>

<v-checkbox v-model="isConfirmation" @click="isConfirmation = !isConfirmation" color="#0076FF" hide-details>
<template v-slot:label>
  <div class="font-weight-medium">
    I/We confirm that the information provided are accurate and truthful.
    
  </div>
</template>
</v-checkbox>

<p style="color: red; font-size: 16px;" class="mt-4">{{ formError }}</p>
<v-btn @click="handleSubmission()" flat class="mt-8" color="green" size="large" >Submit application</v-btn>
</div>

</div>
</template>

<script setup>
import { ref } from 'vue'
import { useVendorStore } from '~/stores/vendorStore';
import { useRouter } from 'vue-router';
import {formatDate} from '~/utils/date';

const isCompanyInfo = ref(false);
const isOwnerInfo = ref(false);
const isBusinessDocumentation = ref(false);
const isConfirmation = ref(false);

const vendorStore = useVendorStore()
const router = useRouter()
const formError = ref("")

function generateId(){
  return Math.floor(Math.random() * 23456789)
}




async function handleSubmission() {
  if (
    isCompanyInfo.value &&
    isOwnerInfo.value &&
    isBusinessDocumentation.value &&
    isConfirmation.value &&
    vendorStore.areAllFormsSubmitted()
  ) {
    try {                                 
      const vendorId = generateId();
      const dateRegistered = formatDate();
      vendorStore.saveVendor(vendorId, dateRegistered); 
      router.push({ path: "/vendor/setpass", query: { vendorId: vendorId.toString() } });
    } catch (error) {
      formError.value = error.message; // Display the error message from the thrown error
    }
  } else {
    formError.value = "Please make sure you have filled all the form inputs!!";
  }
}
</script>
