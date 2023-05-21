<template>
   <div>
    <v-row style="min-height:100vh">
        <v-col :cols="cols[0]" class="pb-0">
            <v-card flat tile width="100%"  height="100%">
            <v-container style="min-height:100vh">
                <v-avatar class="" @click="$router.push('/')" size="150" style="height:auto!important" rounded="0">
  
  <v-img eager src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png"></v-img>
</v-avatar>
<div style="height:calc(100% -150px)">
    <div style="max-width:385px" class="pt-12 mx-auto">
        <h1 style="font-weight: 800;
font-size: 48px;
line-height: 60px;
color: #333333;">Welcome Back</h1>
<p class="font-weight-regular mb-6 mt-1" style="font-size:20px">Welcome back, please enter your details</p>
<p class="inputLabel">Email Address</p>             
        
        <v-text-field prepend-inner-icon="mdi mdi-email-outline" placeholder="Enter email address" density="comfortable"  >
        </v-text-field>

        <p class="inputLabel">Password</p>             
    <v-text-field prepend-inner-icon="mdi mdi-lock-outline" append-inner-icon="mdi mdi-eye-outline" placeholder="Enter Password" density="comfortable"  >
        </v-text-field>  
    <v-row>
    <v-col cols="6" class="py-0">
        <v-checkbox>
       <template v-slot:label>
         <div class="font-weight-medium">
           Remember me 
         </div>
       </template>
     </v-checkbox>
    </v-col>
        <v-col cols="6" class="d-flex justify-end py-0 align-center">
            <v-btn to="/vendor/forgot"
              style="color:#0076FF;text-decoration:none"
                variant="text" class="px-0 mb-4"
              >
              Forgot Password?
              </v-btn> 
        </v-col>
    </v-row>
      
        <v-btn to="/vendor/confirm" block color="green" flat size="x-large" class="rounded-lg mt-3"> 
            <span>

Sign in
          </span>
        </v-btn> 
        <div class="d-flex py-5 justify-space-between align-center"><v-divider></v-divider>
            <p class="px-2 w-100 text-grey-lighten-1">or continue with</p>
             <v-divider></v-divider>
        
            </div>
            <div class="d-flex justify-space-between py-0 mb-4">
                <v-btn flat color="grey-lighten-3" class="text-green" width="30%" icon="mdi mdi-apple"></v-btn>
                <v-btn flat color="grey-lighten-3" class="text-green" width="30%" icon="mdi mdi-google"></v-btn>
                <v-btn flat color="grey-lighten-3" class="text-green" width="30%" icon="mdi mdi-facebook"></v-btn>
            </div>
            <p class="font-weight-regular mb-12 mt-6">Don't have an account? <span style="color:#0076FF">Sign Up</span></p>
            <p style="font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #CECECE;" class="font-weight-regular pt-12 mb-4">©2022 Umoja. All Rights Reserved.</p>

</div>
</div>
            </v-container>    
            </v-card>
        </v-col>
        <v-col :cols="cols[1]" class=" px-0 py-0">
        <v-carousel :show-arrows="false" :hide-delimiters="true" cycle width="100%" height="auto">
            <v-carousel-item v-for="n in images" :key="n">
                <v-img cover class="bg-grey-lighten-2" eager width="100%" min-height="100vh" height="880px" :src="n"></v-img>
            </v-carousel-item>
        </v-carousel>
        </v-col>
    </v-row>
   </div> 
</template>
<script>

export default {
    data() {
    return {
        images:[ 'https://res.cloudinary.com/dkbt6at26/image/upload/v1684229355/portrait-scary-african-shaman-female-with-petrified-cracked-skin-dreadlocks-holds-traditional-mask-dark-background-make-up-concept_1_dr3e2c.png',
            'https://img.freepik.com/free-photo/side-view-woman-clay-sculpting_23-2149730894.jpg?size=926&ext=jpg','https://img.freepik.com/free-photo/close-up-hands-holding-money_23-2148761613.jpg?size=926&ext=jpg',
        'https://img.freepik.com/free-photo/high-angle-souvenirs-arrangement_23-2149726233.jpg?size=926&ext=jpg',
   ]
    }
},
    computed:{
    cols() {
      const { lg, sm, md } = this.$vuetify.display;
      return lg
        ? [7, 5, 6, 6, 4, 8, 4, 3, 10, 2]
        : md
        ? [7, 5, 6, 12, 6, 8, 4, 3, 10, 2]
        : sm
        ? [12, 12, 12, 12, 12, 12, 12, 12, 12]
        : [12, 12, 12, 12, 12, 12, 12, 12, 12];
    },
    }
}

</script>