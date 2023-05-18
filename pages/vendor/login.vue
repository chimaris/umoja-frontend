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

color: #333333;">Welcome Back</h1>
            <p class="font-weight-medium mb-6 mt-1">Don't have an account? <span style="color:#0076FF">Sign Up</span></p>


        <p class="inputLabel">Email Address</p>             
        
        <v-text-field placeholder="Enter email address" density="comfortable"  >
        </v-text-field>

        <p class="inputLabel">Password</p>             
    <v-text-field placeholder="Enter Password" density="comfortable"  >
        </v-text-field>

         <v-btn to="/vendor/forgot"
              style="color:#0076FF;text-decoration:none"
                variant="text" class="px-0 mb-4"
              >
              Forgot Password?
              </v-btn>  
  
          <v-btn to="/vendor/confirm" block color="green" flat size="x-large" class="rounded-lg mt-6"> 
            <span style="text-transform: none;">

Login
          </span>
        </v-btn>
        </v-card>
    </div>
   </div> 
</template>