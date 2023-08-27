<template>
    <div>
   <h1 style="font-weight: 600;
font-size: 32px;
color: #1A1D1F;">Review your application</h1>
   <p style="font-weight: 500;
font-size: 16px;max-width:502px;
line-height: 24px;
color: #9EA5AD;">Here’s a final look at your application, make sure you have met all our registration requirements</p>
<div class="pt-8 pb-12" style="max-width:502px">
 <v-card flat height="64" class="d-flex px-4 align-center mb-4" style="
border: 1px solid #E5E7EA;
border-radius: 8px;">
<div>

  <v-checkbox :model-value="true" color="#0076FF" hide-details>
    <template v-slot:label>
      <div class="font-weight-medium">
        Company Information
        
      </div>
    </template>
  </v-checkbox>
</div>
 </v-card>
 <v-card flat height="64" class="d-flex px-4 align-center mb-4" style="
border: 1px solid #E5E7EA;
border-radius: 8px;">
<div>

  <v-checkbox :model-value="true" color="#0076FF" hide-details>
    <template v-slot:label>
      <div class="font-weight-medium">
        Owner’s Information
        
      </div>
    </template>
  </v-checkbox>
</div>
 </v-card>
 <v-card flat height="64" class="d-flex px-4 align-center mb-4" style="
border: 1px solid #E5E7EA;
border-radius: 8px;">
<div>

  <v-checkbox :model-value="true" color="#0076FF" hide-details>
    <template v-slot:label>
      <div class="font-weight-medium">
        Business documentation
        
      </div>
    </template>
  </v-checkbox>
</div>
</v-card>

<v-checkbox :model-value="true" color="#0076FF" hide-details>
  <template v-slot:label>
    <div class="font-weight-medium">
      I/We confirm that the information provided are accurate and truthful.
      
    </div>
  </template>
</v-checkbox>
 




 <v-btn to="/vendor/setpass" flat class="mt-8" color="green" size="large" >Submit application</v-btn>
</div>

</div>
</template>