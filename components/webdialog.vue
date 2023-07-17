<template>
      <v-sheet class="mx-auto " width="100%" style="max-width: 1200px;overflow: hidden; border-radius: 15px;" >
        <v-row class="dialogrow">
            <v-col cols="12" md="7" class="pa-0 d-flex align-center justify-center ">
                <div class="py-12">

                <p class="mb-4 subtitles" style="color: #000;
font-size: 48px;
font-weight: 600;
line-height: 160%; /* 76.8px */
letter-spacing: -1.44px;">Join the Umoja Waitlist</p>
<div class="px-8 text-left" style="max-width: 400px;">
    <p class="inputLabel">Full Name</p>             
     <v-text-field placeholder="Enter your full name" density="comfortable"  >
         </v-text-field>
         <p class="inputLabel">Email Address</p>             
     <v-text-field placeholder="Enter your email address" density="comfortable"  >
         </v-text-field>
     <p class="inputLabel">User Category Name</p>             
     <v-select :items="['User', 'Vendor']" v-model="category" placeholder="Select Buyer or Vendor" append-inner-icon="mdi mdi-chevron-down" density="comfortable"  >
    </v-select></div>

         <v-btn @click="dialog2 = true" width="235" flat size="large" color="green rounded-xl" >
            <span style="font-size: 14px;">
                Join the Waitlist
            </span>
            </v-btn>
         </div>
            </v-col>
            <v-col v-if="!$vuetify.display.smAndDown" cols="12" class="pa-0" md="5">
                <v-carousel continuous :interval="3000" height="568"  cycle hide-delimiter-background hide-delimiters hide-controls :show-arrows="false">
                <v-carousel-item  v-for="n in ['https://res.cloudinary.com/payhospi/image/upload/c_fit,w_700/v1689518404/rectangle-1922_a41ixf.png', 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_700/v1689486649/rectangle-1922_rfqjbp.png']" :key="n" height="568">
                    <v-card height="568"  rounded="0" width="100%" :image="n">
                    <div class="pa-8" style="width: 100%; left: 0;bottom:0;position: absolute;">
                    <p  style="color: #FFF;
font-size: 14px;max-width: 413px;
font-weight: 400;
line-height: 140%;">Join our waitlist today and be the first to experience our social commerce platform.</p>
<p class="my-4" style="color: var(--magnetic-green-2, #CDD6D4);
font-size: 10px;
font-weight: 400;
line-height: 180%; /* 18px */
letter-spacing: -0.3px;">© Copyright 2023. All Rights Reserved.</p>
</div>
                </v-card>
                    </v-carousel-item>
                </v-carousel>
            
            </v-col>
        </v-row>
        <v-dialog max-width="504" v-model="dialog2">
            <div class="pa-4">

                <v-sheet class="pa-4 mx-auto" width="100%" style="max-width: 504px; border-radius: 20px;" >
                <div class="d-flex justify-end">
                    <v-btn @click="dialog2 = false" icon="mdi mdi-close" size="x-small" flat color="#E6F0ED" rounded="xl"></v-btn>
                </div>
                <div class="text-center">
                    <v-avatar size="82"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689486634/https-lottiefiles-com-91001-success_hwwtuz.png"></v-img></v-avatar>
                    <p class="mx-auto mt-6 mb-3" style="color: var(--carbon-4, #333);
    text-align: center;
    max-width: 311px;
    font-size: 32px;
    font-weight: 600;
    line-height: 102.7%; /* 32.864px */
    letter-spacing: -1px;">We’ve added you to our waitlist</p>
    <p style="color: var(--carbon-3, #969696);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.351px;">We’ll let you know when Umoja is ready</p>
    
    <v-btn width="215" color="#EDF0EF" flat rounded="xl" class="mt-4 mb-6"><v-icon size="15" color="green" icon="mdi mdi-email-outline" class="mr-2"></v-icon> <span style="color: var(--magnetic-green-4, #2C6E63);
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 102.7%; ">thatdesignpro@gmail.com</span></v-btn>
                </div>
                </v-sheet>
            </div>
        </v-dialog>
    </v-sheet>
</template>
<script>

export default {
  data() {
    return {
        dialog2: false,
        category:null,
    };
  },
  methods: {
    opendialog(){
        this.dialog = true
    }
  }

};
</script>