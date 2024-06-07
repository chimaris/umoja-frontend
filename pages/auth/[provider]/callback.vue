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
   import { useUserStore } from '~/stores/userStore';
   import {onMounted} from 'vue'
   import { useRoute, useRouter } from '#vue-router';

	const userStore = useUserStore();
	const route = useRoute();
    const router = useRouter();

    async function loginUser() {
        const provider  = route.params.provider;
         const code = route.query.code;
        try {
            const response = await userStore.socialLoginCallBack(provider, code);
            if (response) {
                router.push('/')
            } 
        }catch(error) {
            console.error("Error during Login", error)
        }
       
    }

    onMounted(async () => {
       await loginUser()
    })
    

 </script>