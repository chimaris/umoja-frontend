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
 
 color: #333333;">Set new password</h1>
             <p class="font-weight-medium mb-12 mt-1">You can now set the password you want to use below;
</p>
 
 
     <v-form ref="form" @submit.prevent="handleSetPassword">
        <p class="inputLabel">New Password</p>             
        <v-text-field
            :append-inner-icon="visible ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
            :type="visible ? 'text' : 'password'"
            placeholder="Enter new password"
            density="comfortable" 
            @click:append-inner="visible = !visible"
            :rules="passwordRules"
            v-model="password"
        ></v-text-field>
         <p class="inputLabel">Confirm Password</p>    
         <v-text-field
            :append-inner-icon="visible1 ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
            :type="visible1 ? 'text' : 'password'"
            placeholder="Repeat password" 
            density="comfortable" 
            @click:append-inner="visible1 = !visible1"
            :rules="confirmpasswordRules"
            v-model="c_password"
        ></v-text-field>         

 <v-btn type="submit" block color="green" flat size="x-large" class="rounded-lg mr-1 mt-6"> 
             <span style="text-transform: none;">
 
 Set new password
           </span>
         </v-btn>
     </v-form>
 
          
         </v-card>
     </div>
    </div> 
 </template>


<script setup>
import { useVendorStore } from '~/stores/vendorStore';
import { ref, computed, watch } from '@vue/composition-api';
import { useRouter, useRoute } from 'vue-router';
import {passwordRules} from '~/utils/formrules'

    const router = useRouter();
    const route = useRoute();
    const vendorStore = useVendorStore()

    const password = ref('');
    const c_password = ref('');
    const cols = ref([12, 12, 12]);
    const visible = ref(false)
    const visible1 = ref(false)

    const confirmpasswordRules = [
    v => !!v || 'Confirm Password is required',
    v => v === password.value || 'Passwords do not match'
  ]
    


    function handleSetPassword() {
        const vendorId = route.query.vendorId
        if (
            password.value && c_password.value
        ) {
            vendorStore.setVendorPassword(vendorId, password.value)
            router.push('/vendor/login')
            console.log(vendorStore.vendors)
        }
    }

</script>