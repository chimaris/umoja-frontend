<template>
    <div class="">
     <backheader/>
     <v-container>

     <div class="d-flex justify-center pb-12">
 
         <v-card  flat class="pa-12 rounded-lg" width="100%" max-width="">
             <h1 style="
 font-style: normal;
 font-weight: 900;
 font-size: 48px;
 line-height: 60px;
 letter-spacing: -0.03em;
 
 /* Carbon/4 */
 
 color: #333333;">Tell us more about your business
</h1>
             <p class="font-weight-medium mb-10 mt-1">
                Tell us about your business Fill in the form below correctly, each input field is mandatory

             </p>
             <v-divider></v-divider>
 <v-row class="mt-6 mb-6">


 <v-col class="pb-0" :cols="cols[1]">
    
    
    <p class="inputLabel">Brand Name</p>             
    
    <v-text-field placeholder="Enter Your Brand Name" density="comfortable"  >
    </v-text-field>
</v-col>
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">Company Registration Number</p>             
<v-text-field placeholder="XXXXXXX" density="comfortable"  >
         </v-text-field>
</v-col> 
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">Type of products</p>             
<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select Product Type" density="comfortable"  >
         </v-select>
</v-col> 
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">African country origin</p>             
<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select Country Of Origin" density="comfortable"  >
         </v-select>
</v-col> 
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">Based in (country city)</p>             
<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select City" density="comfortable"  >
         </v-select>
</v-col> 
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">Business Address</p>             
<v-text-field append-inner-icon="mdi mdi-map-marker-outline" placeholder="Enter Business Address" density="comfortable"  >
         </v-text-field>
</v-col> 
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">Upload product images</p>             
<v-text-field append-inner-icon="mdi mdi-folder-multiple-image" placeholder="Kindly upload 3 images of your product" density="comfortable"  >
         </v-text-field>
</v-col> 
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">Product Link</p>             
<v-text-field append-inner-icon="mdi mdi-link-variant" placeholder="Paste any product link (optional)" density="comfortable"  >
         </v-text-field>
</v-col> 
        </v-row>
        <v-divider></v-divider>
<p style="font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 30px;
/* identical to box height */

text-transform: uppercase;

color: #333333;" class="mt-10">CONTACT INFORMATION</p>
<v-row class="mt-6">


<v-col class="pb-0" :cols="cols[1]">
   
   
   <p class="inputLabel">Mobile Number</p>             
   
   <v-text-field append-inner-icon="mdi mdi-phone-outline" placeholder="Enter your phone number" density="comfortable"  >
   </v-text-field>
</v-col>
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">Email</p>             
<v-text-field append-inner-icon="mdi mdi-email-outline" placeholder="Enter your email" density="comfortable"  >
        </v-text-field>
</v-col> 
 
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">Business Website Link</p>             
<v-text-field append-inner-icon="mdi mdi-web" placeholder="Paste website link" density="comfortable"  >
        </v-text-field>
</v-col> 
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">Facebook Link</p>             
<v-text-field append-inner-icon="mdi mdi-facebook" placeholder="Paste facebook link" density="comfortable"  >
        </v-text-field>
</v-col> 
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">Instagram Link</p>             
<v-text-field append-inner-icon="mdi mdi-instagram" placeholder="Paste instagram link" density="comfortable"  >
        </v-text-field>
</v-col> 
<v-col class="pb-0" :cols="cols[1]">
<p class="inputLabel">Twitter Link</p>             
<v-text-field append-inner-icon="mdi mdi-twitter" placeholder="Paste twitter link" density="comfortable"  >
        </v-text-field>
</v-col> 

       </v-row>
   <div class="d-flex mt-8 justify-end">
       <v-btn to="/vendor/confirm"  width="420px" color="green" flat size="x-large" class="rounded-lg mt-6"> 
           <span style="text-transform: none;">
            Save and Continue
        </span> <v-icon class="ml-4" icon="mdi mdi-arrow-right"></v-icon>
    </v-btn>
</div>
   </v-card>
     </div>     </v-container>

    </div> 
 </template>

<script>
import { useTheme } from "vuetify";

export default {
  data() {
    return {
        placescards:false,
    
    };
  },
  computed: {
 cols() {
      const { lg, sm, md } = this.$vuetify.display;
      return lg
        ? [4, 6]
        : md
        ? [4, 6]
        : sm
        ? [6, 12]
        : [6, 12];
    },
  },
  methods: {

  },
};
</script>
