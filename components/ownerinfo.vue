<template>
    <div>
   <h1 style="font-weight: 600;
font-size: 32px;
color: #1A1D1F;">Owner's Information</h1>
   <p style="font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #9EA5AD;">Complete your company information</p>
<div class="pt-8 pb-12" style="max-width:502px">
    <v-row class="">
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
 
 <v-text-field  placeholder="Enter email address" density="comfortable"  >
 </v-text-field>
 <p class="inputLabel">Phone Number</p>             
 
 <v-text-field  append-inner-icon="mdi mdi-phone-outline" placeholder="NG" density="comfortable"  >
 </v-text-field>
 <v-row>
                 <v-col> 
        <p class="inputLabel">Gender</p>             
     <v-select :items="gender" append-inner-icon="mdi mdi-chevron-down"  placeholder="Select gender" density="comfortable"  >
         </v-select></v-col>
                 <v-col> 
                     <p class="inputLabel">Date of Birth</p>             
            
     <v-select  append-inner-icon="mdi mdi-chevron-down"  placeholder="Select date" density="comfortable"  >
         </v-select></v-col>
         </v-row>

 <p class="mt-4" style="font-weight: 600;
font-size: 20px;
line-height: 30px;
color: #1A1D1F;">Identification</p>
<p style="font-weight: 500;
font-size: 16px;
line-height: 24px;color: #9EA5AD;

" class="mb-8">Verify business owner identity</p>


<v-row>
                 <v-col> 
        <p class="inputLabel">Form of ID</p>             
     <v-select :items="formOfId" append-inner-icon="mdi mdi-chevron-down"  placeholder="Select" density="comfortable"  >
         </v-select></v-col>
                 <v-col> 
                     <p class="inputLabel">ID Number</p>             
            
     <v-text-field  placeholder="Enter" density="comfortable"  >
         </v-text-field></v-col>
         </v-row>
         <p class="inputLabel">Copy of ID</p>  
         <v-card flat class="mb-8" style="justify-content: center;
align-items: center;
padding: 27px;
display: flex;

width: 100%;
height: 100px;

background: #F8F8F8;
border-radius: 6px;">
<div class="d-flex align-center">
  <v-icon color="#9EA5AD" class="mr-2" icon="mdi mdi-file-upload-outline"></v-icon>  <p style="font-weight: 400;
font-size: 16px;
color: #9EA5AD;">Drag and drop document here or Browse Supported file types: JPEG, PNG, PDF. Max file size: 2mb</p>
</div>
         </v-card>           

 <v-btn @click="submit()" flat style=" border: 1px solid #e5e5e5;" size="large" variant="outlined">Save and continue</v-btn>
</div>

</div>
</template>
<script>
export default {
    name: "ownerinfo",
    data() {
        return {
          gender:['Male', 'Female'],
          formOfId:['National ID', 'International Passport', 'Driver’s License'],
          listOfAfricanCountriesAndStates: []
        };
    },
    methods: {
      submit(){
        this.$emit("submit");
      } 
    },
};
</script>