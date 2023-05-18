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
             <p class="font-weight-medium mb-12 mt-1">Enter the email address associated with your account and we’ll send you a link to reset your password
</p>
 
 
         <p class="inputLabel">New Password</p>             
         
         <v-text-field append-inner-icon="mdi mdi-eye-outline" placeholder="Enter new password" density="comfortable"  >
         </v-text-field>
         <p class="inputLabel">Confirm Password</p>             
         
         <v-text-field placeholder="Repeat password" append-inner-icon="mdi mdi-eye-outline" density="comfortable"  >
         </v-text-field>
 <v-btn to="/vendor/confirm" block color="green" flat size="x-large" class="rounded-lg mr-1 mt-6"> 
             <span style="text-transform: none;">
 
 Reset password
           </span>
         </v-btn>
 
          
         </v-card>
     </div>
    </div> 
 </template>