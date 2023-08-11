<template>
    <div class="px-6 py-10"> 
    <p style="color: #000;
font-size: 24px;
font-weight: 600;
">Manage Password</p>
    <p style="color: var(--carbon-3, #969696);
font-family: Faktum;
font-size: 14px;
font-style: normal;
font-weight: 500;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo pellentesque massa tellus ac augue. Lectus arcu at in in rhoncus malesuada ipsum turpis.</p>
</div>
<div class=" mx-6 mb-6 cardStyle">
    <v-row>
                <v-col cols="12" lg="5">
                    
    
<p class="inputLabel2">Current Password</p>             
     <v-text-field append-inner-icon="mdi mdi-eye-outline" placeholder="Enter current password" density="comfortable"  >
         </v-text-field>
<p class="inputLabel2">New Password</p>             
     <v-text-field append-inner-icon="mdi mdi-eye-outline" placeholder="Enter new password" density="comfortable"  >
         </v-text-field>
<p class="inputLabel2">Confirm Password</p>             
     <v-text-field append-inner-icon="mdi mdi-eye-outline" placeholder="Confirm password" density="comfortable"  >
         </v-text-field>
<v-row dense>

    <v-col cols="6">
        <v-btn rounded="xl" block style="    border: 1px solid #e5e5e5;
" variant="outlined" size="large" class=" menubar text-grey-darken-3" >
Cancel
</v-btn>
    </v-col>
    <v-col cols="6">
        <v-btn rounded="xl" block color="green" flat size="large" class=" menubar text-grey-darken-3" >
            Update password
</v-btn>
    </v-col>
</v-row>
</v-col>
                <v-col cols="12" lg="3">
                    <v-sheet width="100%" class="pa-5" style="border-radius: 15px;
background: #EDF0EF;">
<p style="font-size: 16px;
font-weight: 600;">Rules for Password</p>
<p class="my-4" style="font-size: 14px;
font-weight: 400;">To create a new password, you have
to meet all of the following
requirements:
</p>
<div style="font-size: 14px;
font-weight: 400;
">

    <p> • Minimum 8 character</p>
    <p>
        
        • At least one special character
    </p>
    <p>
        • At least one number</p>
        <p>
            • Can't be the same as a previous</p>
        </div>
                    </v-sheet>
                </v-col>
            </v-row>
</div>
</template>