<template>
    <v-app>
        <v-card
          class="py-8 px-6 text-center mx-auto ma-4 z"
          elevation="12"
          max-width="400"
          width="100%"
        >
          <h3 class="text-h6 mb-4">Verify Your Account</h3>
      
          <div class="text-body-2">
            We sent a verification code to {{vendorStore.vendorEmail}} <br>
      
            Please check your email and paste the code below.
          </div>
      
          <v-sheet color="surface">
            <v-otp-input
              v-model="otp"
              type="password"
              variant="solo"
            ></v-otp-input>
          </v-sheet>
          <p v-if="vendorStore.verifyError" class="mt-4" style="color: red; font-size: 14px;">{{ vendorStore.verifyError }}</p>
          <p v-if="vendorStore.resendError" class="mt-4" style="color: red; font-size: 14px;">{{ vendorStore.resendError }}</p>
          <v-btn
            class="mb-4"
            color="green"
            :disabled="otp.length < 6"
            height="40"
            variant="flat"
            width="70%"
            @click="verify()"
          >
          <span class="mr-4" style="text-transform: none">Verify</span>
          <v-progress-circular v-if="vendorStore.loading" indeterminate :width="2" :size="20"></v-progress-circular>
        </v-btn>
      
          <div class="text-caption">
            Didn't receive the code? <a href="#" @click="resendCode">Resend</a>
          </div>
        </v-card>
        <v-otp-input></v-otp-input>
    </v-app>
  </template>
<script setup>
import {ref} from 'vue';
import { VOtpInput } from "vuetify/lib/components";
import {useVendorStore} from '~/stores/vendorStore';
import { useRouter } from "vue-router";

definePageMeta({
	middleware: defineNuxtRouteMiddleware((to, from) => {
    const vendorStore = useVendorStore()
    if (vendorStore.verified) {
    return navigateTo('/vendor/dashboard/homepage')
  }
  })
});

const otp = ref('')
const vendorStore = useVendorStore();
const router = useRouter();

async function resendCode(){
    otp.value = ''
   const response = await vendorStore.resendOtp();
   if (response) {
    vendorStore.resendError = ""
   }
}

async function verify(){
    const verifyUser = await vendorStore.verifyVendor(otp.value)
    if (verifyUser){
        router.push('/vendor/dashboard/Homepage')
        vendorStore.verifyError = ""
        localStorage.removeItem('vendor-email')
        otp.value = ""
    }

}
</script>