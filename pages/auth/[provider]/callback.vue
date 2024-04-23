<template>
    <h1>Logging in ....................</h1>
	
			 <p style="font-weight: 400;
 font-size: 14px;
 line-height: 17px;
 color: #CECECE;" class="font-weight-regular pt-12 mb-4">©2022 Umoja. All Rights Reserved.</p>
 
 </template>
 <script setup>
   import { useUserStore } from '~/stores/userStore';
   import {onMounted} from 'vue'
   import { useRoute, useRouter } from '#vue-router';
   import axios from 'axios';

	const userStore = useUserStore();
	const route = useRoute();
    const router = useRouter();

    async function loginUser() {
        const provider  = route.params.provider;
        try {
            const response = await userStore.socialLoginCallBack(provider);
            if (response) {
                router.push('/home2')
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