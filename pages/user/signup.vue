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
 
 color: #333333;">Sign Up</h1>
             <p class="font-weight-medium mb-6 mt-1">Already have an account? <span style="color:#0076FF">Sign In</span></p>

             <v-row>
              <v-col cols="6"><v-btn size="x-large" flat variant="outlined" block><v-avatar rounded="0" size="24" class="mr-2"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686302222/flat-color-icons_google_vhnhqm.png"></v-img></v-avatar>Sign Up with Google</v-btn></v-col>
              <v-col cols="6"><v-btn size="x-large" flat color="black" block><v-avatar rounded="0" size="24" class="mr-2"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686302222/bi_apple_qka2so.png"></v-img></v-avatar>Sign Up with Apple</v-btn></v-col>
             </v-row>
             <div class="d-flex py-8  px-5 justify-space-between align-center"><v-divider></v-divider>
            <p class="px-2 w-100 text-center">or sign up with</p>
             <v-divider></v-divider>
        
            </div>
             <v-row>
                 <v-col> 
        <p class="inputLabel">First Name</p>             
     <v-text-field placeholder="First name" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col> 
                     <p class="inputLabel">Last Name</p>             
            
     <v-text-field placeholder="Last name" density="comfortable"  >
         </v-text-field></v-col>
         </v-row>                 
         <p class="inputLabel">Email Address</p>             
         
         <v-text-field placeholder="Enter email address" density="comfortable"  >
         </v-text-field>
 
         <p class="inputLabel">Password</p>             
     <v-text-field append-inner-icon="mdi mdi-eye-outline" placeholder="Enter Password" density="comfortable"  >
         </v-text-field>
 
         <v-checkbox color="#0076FF">
       <template v-slot:label>
         <div class="font-weight-medium">
             I agree to Umoja 
 
          <a
                  style="color:#0076FF;text-decoration:none"
                 href="#"
                 v-bind="props"
                 @click.stop
               >
               Privacy Policy
               </a> and 
               
          <a
                 
                 href="#" style="color:#0076FF;text-decoration:none"
                 v-bind="props"
                 @click.stop
               >
               Terms of Use
               </a>
             
         </div>
       </template>
     </v-checkbox>
           <v-btn to="/vendor/confirm" block color="green" flat size="x-large" class="rounded-lg mt-6"> 
             <span style="text-transform: none;">
 
 Create an account
           </span>
         </v-btn>
         </v-card>
     </div>
    </div> 
 </template>