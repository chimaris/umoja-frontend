<template>
    
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
        <v-progress-circular
      :width="10"
      :size="200"
      color="green"
      indeterminate
    ></v-progress-circular>
    </div>
 </template>
 <script setup>
   import {useVendorStore} from '~/stores/vendorStore';
   import {onMounted} from 'vue'
   import { useRoute, useRouter } from '#vue-router';

	const vendorStore = useVendorStore();
	const route = useRoute();
    const router = useRouter();

    async function loginUser() {
        const provider  = route.params.provider;
        try {
            const response = await vendorStore.socialLoginCallBack(provider);
            if (response) {
                router.push('/vendor/dashboard/homepage')
            } 
        }catch(error) {
            console.error("Error during Login", error)
        }
        const code = route.query.code;
    }

    onMounted(async () => {
       await loginUser()
    })
    

 </script>