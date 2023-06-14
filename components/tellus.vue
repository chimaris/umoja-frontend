<template>
       <div>
      <h1 style="font-weight: 600;
font-size: 32px;
color: #1A1D1F;">Tell us more about your business</h1>
      <p style="font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #9EA5AD;">Complete your company information</p>
<div class="pt-8 pb-12" style="max-width:502px">

    <p class="inputLabel">
        What African country are you representing? 
    </p>             
    
    <v-select :items="countries"  append-inner-icon="mdi mdi-chevron-down" placeholder="Select African Country" density="comfortable"  >
    </v-select>
    <p class="inputLabel">What type of company is (Business name)</p>             
    
    <v-select  append-inner-icon="mdi mdi-chevron-down" :items="companyCategories" placeholder="Select" density="comfortable"  >
    </v-select>
    <p class="inputLabel">Business name</p>             
    
    <v-text-field  placeholder="Type your official business name" density="comfortable"  >
    </v-text-field>

    <p class="mt-4" style="font-weight: 600;
font-size: 20px;
line-height: 30px;
color: #1A1D1F;">Verify your business location</p>
<p style="font-weight: 500;
font-size: 16px;
line-height: 24px;color: #9EA5AD;

" class="mb-8">You will need to upload a copy of utility bill associated to this address in the documentation part of the onboarding.</p>



    <p class=" inputLabel">Address</p>             
    
    <v-text-field  placeholder="Enter address" density="comfortable"  >
    </v-text-field> 
    <p class="inputLabel">Country</p>             
    
    <v-select :items="countries" append-inner-icon="mdi mdi-chevron-down" placeholder="Select Country" density="comfortable"  >
    </v-select>
    <p class="inputLabel">City</p>             
    
    <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select" density="comfortable"  >
    </v-select>
    <p class="inputLabel">State</p>             
    
    <v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select State" density="comfortable"  >
    </v-select>
    <v-btn @click="submit()" style=" border: 1px solid #e5e5e5;" size="large" variant="outlined">Save and continue</v-btn>
</div>

</div>
</template>


<script>
export default {
  data() {
    return {
      countries: [
        'Algeria',
        'Angola',
        'Benin',
        'Botswana',
        'Burkina Faso',
        'Burundi',
        'Cabo Verde',
        'Cameroon',
        'Central African Republic',
        'Chad',
        'Comoros',
        'Congo, Republic of the',
        'Congo, Democratic Republic of the',
        'Cote d\'Ivoire',
        'Djibouti',
        'Egypt',
        'Equatorial Guinea',
        'Eritrea',
        'Eswatini (formerly Swaziland)',
        'Ethiopia',
        'Gabon',
        'Gambia',
        'Ghana',
        'Guinea',
        'Guinea-Bissau',
        'Kenya',
        'Lesotho',
        'Liberia',
        'Libya',
        'Madagascar',
        'Malawi',
        'Mali',
        'Mauritania',
        'Mauritius',
        'Morocco',
        'Mozambique',
        'Namibia',
        'Niger',
        'Nigeria',
        'Rwanda',
        'Sao Tome and Principe',
        'Senegal',
        'Seychelles',
        'Sierra Leone',
        'Somalia',
        'South Africa',
        'South Sudan',
        'Sudan',
        'Tanzania',
        'Togo',
        'Tunisia',
        'Uganda',
        'Zambia',
        'Zimbabwe',
    ],
            companyCategories: [
                'Technology',
                'Finance',
                'Healthcare',
                'Retail',
                'Manufacturing',
                'Education',
                'Transportation',
                'Hospitality',
                'Real Estate',
                'Energy',
                'Media',
                'Construction',
                'Other'
            ]
   
        }
    },
    methods: {
        submit() {
            this.$emit('submit')
        }
    }
}
</script>
