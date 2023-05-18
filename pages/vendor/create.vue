<template>
    <div class="authBg">
     <authHeader/>
     <div class="d-flex justify-center py-12 px-2">
 
         <v-card flat class="pa-12 rounded-lg" width="100%" max-width="562px">
             <h1 style="
 font-style: normal;
 font-weight: 900;
 font-size: 48px;
 line-height: 60px;
 letter-spacing: -0.03em;
 
 /* Carbon/4 */
 
 color: #333333;">Create an account</h1>
             <p class="font-weight-medium">Already have an account?
                 <span  class="pointhere" style="color:#0076FF">Sign In</span></p>
 
             <v-row class="mt-6">
                 <v-col> 
        <p class="inputLabel">First Name</p>             
     <v-text-field placeholder="First name" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col> 
                     <p class="inputLabel">Last Name</p>             
            
     <v-text-field placeholder="Last name" density="comfortable"  >
         </v-text-field></v-col>
         </v-row>                 
         <p class="inputLabel">Business Name</p>             
         
         <v-text-field placeholder="Enter company name" density="comfortable"  >
         </v-text-field>
         
         <p class="inputLabel">Industry</p>             
         
         <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select Industry" density="comfortable"  >
         </v-select>
         
         <p class="inputLabel">Country</p>             
         
         <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select Country" density="comfortable"  >
         </v-select>
         
         <p class="inputLabel">Email Address</p>             
         
         <v-text-field placeholder="Enter email address" density="comfortable"  >
         </v-text-field>
         <p class="inputLabel">Phone Number</p>             
         <v-text-field placeholder="Enter phone number" density="comfortable"  >
         </v-text-field>
         <p class="inputLabel">Password</p>             
     <v-text-field append-inner-icon="mdi mdi-eye-outline" placeholder="Enter Password" density="comfortable"  >
         </v-text-field>
         <v-checkbox>
       <template v-slot:label>
         <div class="font-weight-medium">
             I agree to Umoja 
 
          <a
                 target="_blank" style="color:#0076FF;text-decoration:none"
                 href="#"
                 v-bind="props"
                 @click.stop
               >
               Privacy Policy
               </a> and 
               
          <a
                 target="_blank"
                 href="#" style="color:#0076FF;text-decoration:none"
                 v-bind="props"
                 @click.stop
               >
               Terms of Use
               </a>
             
         </div>
       </template>
     </v-checkbox>
           <v-btn to="/vendor/confirm" block color="green" flat size="x-large" class="rounded-lg"> 
             <span style="text-transform: none;">
 
               Create an account
           </span>
         </v-btn>
         </v-card>
     </div>
    </div> 
 </template>