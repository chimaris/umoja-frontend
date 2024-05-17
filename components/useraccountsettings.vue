<template>
	<div class="px-6 py-10">
		<p style="color: #000; font-size: 24px; font-weight: 600">Account Settings</p>
		<p style="color: var(--carbon-3, #969696); font-family: Faktum; font-size: 14px; font-style: normal; font-weight: 500">
			Here you can manage your profile settongs.
		</p>
	</div>
	<div class="cardStyle mx-6 mb-6">
		<div class="pa-5 py-8">
			<div class="mb-4 d-flex align-center justify-space-between">
				<p style="font-size: 20px; font-weight: 600">Personal Information</p>

				<v-btn
					rounded="xl"
					@click="userDetails = true"
					style="border: 1px solid #e5e5e5"
					variant="outlined"
					size="default"
					class="ml-4 menubar text-grey-darken-3"
				>
					<v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
					Edit
				</v-btn>
			</div>
			<div class="mt-4" style="max-width: 559px">
				<v-row class="mb-2">
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Name</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">{{ userStore.user.first_name || "" }}</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Last Name</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">{{ userStore.user.last_name || "" }}</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Email Address</p>
						<p style="color: #333; font-size: 14px; font-weight: 500">{{userStore.user.email || ""}}</p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Phone</p>
						<p style="color: #333; font-size: 14px; font-weight: 500"></p>
					</v-col>
				</v-row>
			</div>
			<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Short Bio</p>
			<p style="max-width: 856px; color: #333; font-size: 14px; font-weight: 500">
				
			</p>
		</div>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<div class="mb-4 d-flex align-center justify-space-between">
				<p style="font-size: 20px; font-weight: 600">Address</p>

				<v-btn
					rounded="xl"
					@click="userAddress = true"
					style="border: 1px solid #e5e5e5"
					variant="outlined"
					size="default"
					class="ml-4 menubar text-grey-darken-3"
				>
					<v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
					Edit
				</v-btn>
			</div>
			<div class="mt-4" style="max-width: 559px">
				<v-row class="mb-4">
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Country</p>
						<p style="color: #333; font-size: 14px; font-weight: 500"></p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">City/State</p>
						<p style="color: #333; font-size: 14px; font-weight: 500"></p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Postal Code</p>
						<p style="color: #333; font-size: 14px; font-weight: 500"></p>
					</v-col>
					<v-col cols="12" lg="6">
						<p style="color: #969696; font-size: 14px; font-weight: 500" class="mb-2">Tax ID</p>
						<p style="color: #333; font-size: 14px; font-weight: 500"></p>
					</v-col>
				</v-row>
			</div>
		</div>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<div class="mb-4 d-flex align-center justify-space-between">
				<p style="font-size: 20px; font-weight: 600">Delete Account</p>
				<div>
					<v-btn @click="deleteAccount = true" rounded="xl" color="red" flat size="default" class="ml-2 menubar text-grey-darken-3">
						<v-icon class="mr-2" icon="mdi mdi-trash-can-outline"></v-icon>
						Delete Account
					</v-btn>
					<v-btn rounded="xl" style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3">
						Learn More
					</v-btn>
				</div>
			</div>
			<div class="mt-4 mb-8" style="max-width: 470px">
				<p style="color: #333; font-size: 14px; font-weight: 500">
					When you delete your account, you lose access to Umojas account services, and we permanently delete your personal data. You can cancel the
					deletion for 14 days.
				</p>
			</div>
		</div>
	</div>
	<v-dialog v-model="deleteAccount" persistent max-width="600">
  <v-card class="pa-5 text-center rounded-lg" style="align-items: center" flat tile>
    <v-card-title >
      <div class="d-flex align-center justify-center" style="width: 60px; height: 60px; border-radius: 50%; background-color: #F7EDEE; border: 1px solid 
#C20052">
        <v-icon large color="red">mdi mdi-trash-can-outline</v-icon>
      </div>
    </v-card-title>
    <v-card-title style="font-weight: 700" class="text-h5 justify-center">Delete Account</v-card-title>
    <v-card-text class="text-center mb-5">When you delete your account, you lose access to Umojas account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.</v-card-text>
    <v-card-actions class="justify-center w-100">
      <v-btn rounded="xl" size="x-large" style="border: 1px solid #CECECE;flex: 1; " @click="deleteAccount = false">Cancel</v-btn>
      <v-btn rounded="xl" size="x-large" style="background-color: #C20052; color: #fff;  flex: 1">Delete</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
<v-dialog max-width="750" v-model="userDetails">
<v-sheet max-width="949" class="cardStyle pa-6">
    <p style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 600;">Edit Personal Information</p>
    <v-card flat   class="cardStyle mt-6 bg-white rounded-lg pa-4 py-8">
    <v-form v-model="valid" @submit.prevent="addDetails">
        <v-row>
            <v-col cols="12" class="pt-0" md="6">
                <p class="inputLabel">First Name<span class="mb-2">*</span></p>             
                <v-text-field placeholder="Enter your first name" v-model="userStore.user.first_name" :rules="inputRules" density="comfortable"  >
                </v-text-field>    
            </v-col> 
			<v-col cols="12" class="pt-0" md="6">
                <p class="inputLabel">Last Name<span class="mb-2">*</span></p>             
                <v-text-field placeholder="Enter your last name" v-model="userStore.user.last_name" :rules="inputRules" density="comfortable"  >
                </v-text-field>    
            </v-col> 
        </v-row>                  
         <v-row >
			<v-col cols="12" class="pt-0" md="6"> 
                <p class="inputLabel">Email Address<span class="mb-2">*</span></p>             
                <v-text-field :rules="emailRules" v-model="userStore.user.email" placeholder="Enter your email address" density="comfortable"  >
                </v-text-field></v-col>
            <v-col cols="12" md="6" class="pt-0">
                <p class="inputLabel">Date of Birth<span class="mb-2">*</span></p>             
                <v-menu open-on-hover :close-on-content-click="false">
      			<template v-slot:activator="{ props }">
					<v-text-field v-bind="props" v-model="formattedDate"></v-text-field>
      			</template>
	  			<v-date-picker v-model="dateOfBirth" :max="formattedMaxDate"></v-date-picker>
    		</v-menu>
			</v-col>
         </v-row>   
         <v-row class="">
            <v-col cols="12" class="pt-0"> 
                <p class="inputLabel">Phone Number<span class="mb-2">*</span></p>             
                <v-text-field :rules="phoneRules" v-model="phoneNumber" placeholder="Enter your phone number (only digits)" density="comfortable"  >
                </v-text-field>
            </v-col>
         </v-row>   
		 <v-row class="">
            <v-col cols="12" class="pt-0"> 
                <p class="inputLabel">Bio<span class="mb-2">*</span></p>             
                <v-textarea></v-textarea>
            </v-col>
         </v-row> 
         <p style="color: red; font-size: 16px">{{ addressError }}</p>            
         <v-btn class="textClass px-8" rounded="xl" type="submit" color="green"  flat>Save new details</v-btn>          
         <v-btn @click="userDetails=false" variant="tonal" class="textClass ml-2 px-8" rounded="xl" color="green" flat>Cancel</v-btn>   
    </v-form>       
         
</v-card>
    </v-sheet>
</v-dialog>
<v-dialog max-width="750" v-model="userAddress">
<v-sheet max-width="949" class="cardStyle pa-6">
    <p style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 600;">Edit Personal Information</p>
    <v-card flat   class="cardStyle mt-6 bg-white rounded-lg pa-4 py-8">
    <v-form v-model="valid" @submit.prevent="addAddress">
		<v-row class="">
            <v-col cols="12" class="pt-0"> 
                <p class="inputLabel">Country<span class="mb-2">*</span></p>             
				<v-select 
                    v-model="country" 
                    placeholder="Select Country" 
                    :items="allCountries" 
                    :rules="inputRules"
                    @input="fetchStates(country)"
                    density="comfortable"  >
                </v-select>
            </v-col>
         </v-row> 
        <v-row>
            <v-col cols="12" class="pt-0" md="6">
                <p class="inputLabel">State<span class="mb-2">*</span></p>             
				<v-select 
                    v-model="state"
                    color="green"
                    :items="states" 
                    @input="fetchCities(country, state)"
                    :rules="inputRules"
                    :loading="loadingStates"
                    placeholder="Select state" 
                    density="comfortable"  >
                </v-select> 
            </v-col> 
			<v-col cols="12" class="pt-0" md="6">
                <p class="inputLabel">	City<span class="mb-2">*</span></p>             
                <v-select 
                    v-model="city" 
                    :items="cities"
                    color="green"
                    :loading="loadingCities"
                    :rules="inputRules"
                    placeholder="Select City" density="comfortable"  >
                </v-select>  
            </v-col> 
        </v-row>                  
         <v-row >
			<v-col cols="12" class="pt-0" md="6"> 
				<p class="inputLabel">Postal code<span class="mb-2">*</span></p>                    
                <v-text-field  v-model="postalCode" placeholder="Enter your postal code" density="comfortable"  >
                </v-text-field> 
			</v-col>
            <v-col cols="12" md="6" class="pt-0">
                <p class="inputLabel">Tax ID<span class="mb-2">*</span></p>             
                <v-text-field  v-model="iaxId" placeholder="Enter you tax id" density="comfortable"  >
                </v-text-field>
			</v-col>
         </v-row>     
         <p style="color: red; font-size: 16px">{{ addressError }}</p>            
         <v-btn class="textClass px-8" rounded="xl" type="submit" color="green"  flat>Save new details</v-btn>          
         <v-btn @click="userAddress=false" variant="tonal" class="textClass ml-2 px-8" rounded="xl" color="green" flat>Cancel</v-btn>   
    </v-form>       
         
</v-card>
    </v-sheet>
</v-dialog>
</template>
<script setup>
import {ref, computed} from 'vue';
import { useUserStore } from "~/stores/userStore";
import {emailRules, inputRules, phoneRules} from '~/utils/formrules'
import {calculateAge} from '~/utils/date'
import { allCountries, fetchStates, fetchCities, states, cities, loadingStates, loadingCities } from '~/utils/countryapi';

	const deleteAccount = ref(false)
	const valid = ref(false)
	const userStore = useUserStore();
	const userDetails = ref(false)
	const userAddress = ref(false)
	const emits = defineEmits(['changePage'])
	const dateOfBirth = ref();
	const country = ref("")
	const state = ref("")
	const city = ref("")

	const maxDate = new Date('2007-12-31')
    const formattedMaxDate = maxDate.toISOString().substring(0, 10)
	const formattedDate = computed(() => {
		if (!dateOfBirth.value){
			return ""
		}
    const date = new Date(dateOfBirth.value)
	const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate.toISOString().substring(0, 10);
  })
	watch(() => country.value, () => {
        fetchStates(country.value)
	});

    watch(() => state.value, () => {
			fetchCities(country.value, state.value);
	});


	function choose(x){
		emits("changePage", x)
	}
	
</script>
