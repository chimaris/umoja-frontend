<template>
    <div>
     <authHeader/>
     <div class="d-flex justify-center py-8 px-2">
 
         <v-card class="rounded-lg" width="100%" max-width="562px">
             <h1>Create an account</h1>
             <p class="mt-1">Already have an account? <span  class="pointhere" style="color:#0076FF">Sign In</span></p>
 
             <v-row>
                 <v-col> 
                     
     <v-text-field placeholder="First name" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col> 
                     
     <v-text-field placeholder="Last name" density="comfortable"  >
         </v-text-field></v-col>
         </v-row>                 
                     
     <v-text-field placeholder="Enter company name" density="comfortable"  >
         </v-text-field>
                  
                     
     <v-select placeholder="Select Industry" density="comfortable"  >
         </v-select>
                  
                     
     <v-select placeholder="Select Country" density="comfortable"  >
         </v-select>
                  
                     
     <v-text-field placeholder="Enter email address" density="comfortable"  >
         </v-text-field>
     <v-text-field placeholder="Enter phone number" density="comfortable"  >
         </v-text-field>
     <v-text-field placeholder="Enter Password" density="comfortable"  >
         </v-text-field>
           <v-btn block color="green" flat size="x-large" class="rounded-xl"> Create an account</v-btn>
         </v-card>
     </div>
    </div> 
 </template>