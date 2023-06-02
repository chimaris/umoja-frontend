<template>
    <div style="background-color: #F8F8F8; min-height: 100vh;">

        <authHeader /> 

        <div style="min-height: 80vh;" class=" d-flex align-center justify-center pa-3">
<div>
<p style="font-weight: 700;
font-size: 48px;
line-height: 60px;
letter-spacing: -0.03em;
color: #333333;

" class="mb-4">Select a sign up category</p>
    <v-card flat @click="$router.push('/user/signup')" max-width="857" class="mb-4 py-12 rounded-lg pa-4 d-flex align-center">
        <v-icon class="mr-4" icon="mdi mdi-account"></v-icon>
        
        <div>
            <p style="font-weight: 700;
font-size: 24px;
line-height: 30px;
color: #333333;">Sign Up as a Customer</p>
        <p style="font-weight: 400;
font-size: 16px;
line-height: 20px;max-width: 317px;
color: #333333;
">Lorem ipsum dolor sit amet consectetur. Sit urna neque pellentesque at cras.</p>
    </div>
</v-card>
<v-card flat @click="$router.push('/vendor/registeration/form')" max-width="857" class="py-12 mb-4 rounded-lg pa-4 d-flex align-center">
    <v-icon class="mr-4" icon="mdi mdi-store"></v-icon>
    
    <div>
        <p style="font-weight: 700;
font-size: 24px;
line-height: 30px;
color: #333333;">Sign Up as a Vendor</p>
        <p style="font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #333333;max-width: 317px;
">Lorem ipsum dolor sit amet consectetur. Sit urna neque pellentesque at cras.</p>
    </div>
</v-card>
</div>
</div>
</div>
</template>