<template>
    <div class="authBg">
     <authHeader/>
     <div class="d-flex justify-center py-12 px-2">
 
         <v-card  flat class="pa-12 rounded-lg" width="100%" max-width="562px">
             <h1 style="
 font-style: normal;
 font-weight: 900;
 font-size: 48px;
 line-height: 60px;
 letter-spacing: -0.03em;
 
 /* Carbon/4 */
 
 color: #333333;">Welcome Back</h1>
             <p class="font-weight-medium mb-6 mt-1">Don't have an account? <span @click="$router.push('/vendor/registeration/form/Companys Information')" style="cursor: pointer;color:#0076FF">Sign Up</span></p>
 
 <v-form ref="form" @submit.prevent="handleLogin">
     
     <p class="inputLabel">Email Address</p>             
         
         <v-text-field v-model="email" :rules="emailRules" placeholder="Enter email address" density="comfortable"  >
         </v-text-field>
 
         <p class="inputLabel">Password</p>             
         <v-text-field
             :append-inner-icon="visible ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
             :type="visible ? 'text' : 'password'"
             placeholder="Enter Password" 
             density="comfortable" 
             @click:append-inner="visible = !visible"
             :rules="passwordRules"
             v-model="password"
         ></v-text-field>
          <v-btn to="/vendor/forgot"
               style="color:#0076FF;text-decoration:none"
                 variant="text" class="px-0 mb-4"
               >
               Forgot Password?
               </v-btn>  
               <p style="color: red; font-size: 16px">{{ vendorStore.loginError }}</p>
           <v-btn type="submit" block color="green" flat size="x-large" class="rounded-lg mt-6"> 
             <span style="text-transform: none;">
 
 Login
           </span>
         </v-btn>
 </v-form>
         </v-card>
     </div>
    </div> 
    <tutorial />
 </template>
 <script setup>
 import { useVendorStore } from '~/stores/vendorStore';
 import { useRouter } from '#vue-router';
 import {passwordRules, emailRules} from '~/utils/formrules'
 
     const email = ref("")
     const password = ref("")
     const visible = ref(false)
 
     const vendorStore = useVendorStore()
     const router = useRouter()
 
 
 
    async function handleLogin() {
     if (email.value && password.value) {
         try {
         const isLoggedIn = await vendorStore.login({ email: email.value, password: password.value });
         if (isLoggedIn) {
             const vendorName = vendorStore.vendor.ownerInfo.firstName
             router.push(`/vendor/dashboard/${vendorName}`);
             vendorStore.loginError = "";
         } else {
             // Show error message
             console.error('Login failed');
         }
         } catch (error) {
         console.error('An error occurred during login:', error);
         }
     }
 }
 </script>