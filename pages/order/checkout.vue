<template>
    <Header2 />
    <div>  
    <v-container style="max-width:1400px ;width: 100%;">
          <v-breadcrumbs  class="breadcrumbstick pl-0" v-model="item" active-class="text--green" :items="items">
      <template v-slot:divider>
        <v-icon color="#969696" icon="mdi mdi-chevron-right"></v-icon>
      </template>
      <template v-slot:title="{ item }">
     <span v-if="item.highlight" style="color:  #2C6E63;
font-size: 14px;
font-weight: 600;
line-height: 20px; /* 142.857% */
letter-spacing: -0.14px;
">
         {{ item.title }}
     </span>
     <span v-else style="color:  #969696;
font-size: 14px;
font-weight: 500;
opacity: 1!important;
line-height: 20px; /* 142.857% */
letter-spacing: -0.14px;
">
         {{ item.title }}
     </span>
    </template>
    </v-breadcrumbs>
    <v-divider class="mb-4"></v-divider>
    <v-row class="pt-2">
                <v-col cols="12" lg="8" >  
        <v-card flat class="cardStyle">
<h1 class="chkt">Select Shipping Country</h1>
<v-select 
    style="border-radius: 6px; border: 1px solid var(--carbon-2, #CECECE);" hide-details="" 
    v-model="shippingCountry" 
    append-inner-icon="mdi mdi-chevron-down" 
    placeholder="Select country" 
    :items="allCountries" 
    :rules="inputRules"
    @change="fetchStates(shippingCountry)"
    density="compact" class="mt-4" 
    variant="outlined"  >
</v-select>
        
<v-divider class="my-8"></v-divider>
<h1 class="chkt">Shipping Address</h1>
<template v-if="shippingAddress.length > 0">
    <template v-for="(item, index) in shippingAddress" :key="index">
        <v-card flat class="pa-4 cardStyle rounded-lg justify-space-between align-center my-4 d-flex" >
       <div  class=" align-center d-flex">
        <input type="radio" :id="'address_' + index" :value="index" v-model="selectedAddressIndex" class="mr-2" style="accent-color: #2C6E63; transform: scale(2);">
           <label :for="'address_' + index" class="text-capitalize px-4">
               <p style="" class=" addressName mb-2">{{item.fullName}}</p>
               <p class="adddressPhone mb-1">{{item.streetName}}, {{item.shippingCity}}, {{item.shippingState}} {{item.shippingCountry}}</p>
               <p class="adddressPhone ">{{item.phoneNumber}}</p>
            </label>
        </div>
        <v-spacer></v-spacer>
            <v-btn @click="toggleEditAddress(index)" size="small" class="smallText" variant="text" color="blue">Edit Address <v-icon class="ml-2" icon="mdi mdi-pencil-outline"></v-icon></v-btn>
        </v-card>
        <v-form @submit.prevent="updateShippingAddress(item)" v-if="editAddressIndex === index"  @keydown.enter.prevent="" class="pb-5">
        <v-divider class="my-4"></v-divider>
        <v-row class="mt-6">
            <v-col class="pb-0" cols="12">
                <p class="inputLabel">Full Name<span class="mb-2">*</span></p>             
                <v-text-field 
                    v-model="item.fullName" 
                    placeholder="Enter your full name"
                    :rules="inputRules" 
                    density="comfortable">
                </v-text-field>    
            </v-col> 
        </v-row> 
        <v-row>
            <v-col cols="12" md="6"> 
                <p class="inputLabel">Email Address<span class="mb-2">*</span></p>             
                <v-text-field :rules="emailRules" v-model="item.email" placeholder="Enter your email address" density="comfortable"  >
                </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <p class="inputLabel">Confirmation email<span class="mb-2">*</span></p>             
                <v-text-field  
                    v-model="item.confirmationEmail" 
                    :rules="[v => item.email == v || 'Must be the same as email address', v => !!v || 'Field Cannot be Empty']" 
                    placeholder="Enter your confirmation email" 
                    density="comfortable">
                </v-text-field>
            </v-col>
        </v-row>                
        <p class="inputLabel">Phone Number<span class="mb-2">*</span></p>             
        <v-text-field :rules="phoneRules" v-model="item.phoneNumber" placeholder="Enter your phone number (only digits)" density="comfortable"  >
        </v-text-field>
        <p class="inputLabel">Street Name and House Number*<span class="mb-2">*</span></p>             
        <v-text-field 
            placeholder="Enter your Street Name and House Number" 
            v-model="item.streetName"
            :rules="inputRules"
            density="comfortable"  >
        </v-text-field>
        <v-row class="">
            <v-col cols="12" md="6">
                <p class="inputLabel">State<span class="mb-2">*</span></p>                  
                <v-select 
                    v-model="item.shippingState"
                    color="green"
                    :items="states" 
                    @change="fetchCities(shippingCountry, shippingState)"
                    :rules="inputRules"
                    hint="**Make sure you select your country first**"
                    :loading="loadingStates"
                    append-inner-icon="mdi mdi-chevron-down" 
                    placeholder="Select State" 
                    density="comfortable"  >
                </v-select>
            </v-col>
            <v-col cols="12" md="6"> 
                <p class="inputLabel">City<span class="mb-2">*</span></p>             
                <v-select 
                    v-model="item.shippingCity" 
                    :items="cities"
                    color="green"
                    :loading="loadingCities"
                    :rules="inputRules"
                    append-inner-icon="mdi mdi-chevron-down" 
                    placeholder="Select City" 
                    hint="**Make sure you select your state first**"
                    density="comfortable"  >
                </v-select>
            </v-col>
        </v-row>   
        <p class="inputLabel">Postal code<span class="mb-2">*</span></p>             
        <v-text-field v-model="item.postalCode" placeholder="Enter your zipcode" density="comfortable"  >
        </v-text-field>             
        <v-btn type="submit" class="textClass px-8" rounded="xl" color="green"  flat>Save Changes</v-btn>          
        <v-btn @click="editAddressIndex = null" variant="tonal" class="textClass ml-2 px-8" rounded="xl" color="green" flat>Cancel</v-btn>
        </v-form>  
    </template>
</template>
<v-card flat   class="cardStyle bg-white rounded-lg mb-4 pa-4 py-6">
    
<div  class=" align-center d-flex just"  >
    <v-checkbox color="green" v-model="addAddress" @click="addAddress = !addAddress" hide-details ></v-checkbox>
    <p style="font-weight: 600; font-size: 16px; line-height: 20px; color: #333333;" class="">Add new address</p>

</div>

<v-form  @submit.prevent="addShippingAddress"  @keydown.enter.prevent="" v-if="addAddress">
    <v-divider class="my-4"></v-divider>
    <v-row class="mt-6">
        <v-col class="pb-0" cols="12">
            <p class="inputLabel">Full Name<span class="mb-2">*</span></p>             
            <v-text-field 
                v-model="fullName" 
                :rules="inputRules" 
                placeholder="Enter your full name" 
                density="comfortable">
            </v-text-field>    
        </v-col> 
    </v-row> 
    <v-row>
        <v-col cols="12" md="6"> 
            <p class="inputLabel">Email Address<span class="mb-2">*</span></p>             
            <v-text-field :rules="emailRules" v-model="email" placeholder="Enter your email address" density="comfortable"  >
            </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
            <p class="inputLabel">Confirmation email<span class="mb-2">*</span></p>             
            <v-text-field :rules="confirmEmail" v-model="confirmationEmail" placeholder="Enter your confirmation email" density="comfortable">
            </v-text-field>
        </v-col>
    </v-row>                
    <p class="inputLabel">Phone Number<span class="mb-2">*</span></p>             
    <v-text-field :rules="phoneRules" v-model="phoneNumber" placeholder="Enter your phone number (only digits)" density="comfortable"  >
    </v-text-field>
    <p class="inputLabel">Street Name and House Number*<span class="mb-2">*</span></p>             
    <v-text-field 
        placeholder="Enter your Street Name and House Number" 
        v-model="streetName"
        :rules="inputRules"
        density="comfortable"  >
    </v-text-field>
    <v-row class="">
        <v-col cols="12" md="6">
            <p class="inputLabel">State<span class="mb-2">*</span></p>                  
            <v-select 
                v-model="shippingState"
                color="green"
                :items="states" 
                @change="fetchCities(shippingCountry, shippingState)"
                :rules="inputRules"
                hint="**Make sure you select your country first**"
                :loading="loadingStates"
                append-inner-icon="mdi mdi-chevron-down" 
                placeholder="Select State" 
                density="comfortable"  >
            </v-select>
        </v-col>
        <v-col cols="12" md="6"> 
            <p class="inputLabel">City<span class="mb-2">*</span></p>             
            <v-select 
                v-model="shippingCity" 
                :items="cities"
                color="green"
                :loading="loadingCities"
                :rules="inputRules"
                append-inner-icon="mdi mdi-chevron-down" 
                placeholder="Select City" 
                hint="**Make sure you select your state first**"
                density="comfortable"  >
            </v-select>
        </v-col>
    </v-row>   
    <p class="inputLabel">Postal code<span class="mb-2">*</span></p>             
    <v-text-field v-model="postalCode" placeholder="Enter your zipcode" density="comfortable"  >
    </v-text-field>  
    <p style="color: red; font-size: 16px;">{{addressError}}</p>           
    <v-btn type="submit" class="textClass px-8" rounded="xl" color="green"  flat>Use this address</v-btn>          
    <v-btn @click="addAddress = false" variant="tonal" class="textClass ml-2 px-8" rounded="xl" color="green" flat>Cancel</v-btn>
</v-form>          
         
</v-card>
</v-card>
<v-card flat   class="cardStyle bg-white rounded-lg my-4 py-6 pa-4">
    
    <v-card flat :color="n.cost == '0.00'? '#EDF3F0': ''"   class="pa-4 cardStyle rounded-lg justify-space-between align-center my-4 d-flex" v-for="n in shippingTypes" :key="n">
   <div  class=" align-center d-flex">

       <input type="radio" :id="'shipping_' + index" :value="n.title" v-model="selectedShippingValue" class="mr-2" style="accent-color: #2C6E63; transform: scale(2);">
       <div class="text-capitalize px-4">
           <p style="" class=" addressName mb-2">{{n.title}}</p>
           <p class="adddressPhone mb-1">{{n.duration}}</p>
        </div>
    </div>
    <v-spacer></v-spacer>
    <p style="" class=" addressName mb-2">€{{n.cost}}</p>

							<v-text-field placeholder="Enter your phone number (only digits)" density="comfortable"> </v-text-field>
							<p class="inputLabel">Street Name and House Number*<span class="mb-2">*</span></p>

</v-col>
<Cartsummary :route="'/order/payment'" :text="'Continue to Payment'" @handleSubmit="handlePayment()"/>
</v-row> 

									<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select City" density="comfortable"> </v-select>
								</v-col>
								<v-col cols="12" md="6">
									<p class="inputLabel mb-8"></p>

									<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select region" density="comfortable"> </v-select>
								</v-col>
							</v-row>
							<p class="inputLabel">Postal code<span class="mb-2">*</span></p>
							<v-text-field placeholder="Enter your zipcode" density="comfortable"> </v-text-field>

							<v-btn class="textClass px-8" rounded="xl" color="green" flat>Use this address</v-btn>
							<v-btn variant="tonal" class="textClass ml-2 px-8" rounded="xl" color="green" flat>Cancel</v-btn>
						</v-card>
					</v-card>
					<v-card flat class="cardStyle bg-white rounded-lg my-4 py-6 pa-4">
						<v-card
							flat
							:color="n.cost == '0.00' ? '#EDF3F0' : ''"
							class="pa-4 cardStyle rounded-lg justify-space-between align-center my-4 d-flex"
							v-for="n in shippingTypes"
							:key="n"
						>
							<div class="align-center d-flex">
								<v-icon
									size="20"
									:color="n.cost == '0.00' ? '#2C6E63' : ''"
									:icon="n.cost == '0.00' ? 'mdi mdi-radiobox-marked' : 'mdi mdi-circle-outline'"
								></v-icon>
								<div class="text-capitalize px-4">
									<p style="" class="addressName mb-2">{{ n.title }}</p>
									<p class="adddressPhone mb-1">{{ n.duration }}</p>
								</div>
							</div>
							<v-spacer></v-spacer>
							<p style="" class="addressName mb-2">€{{ n.cost }}</p>
						</v-card>
					</v-card>
				</v-col>
				<Cartsummary :route="'/order/payment'" :text="'Continue to Payment'" />
			</v-row>
		</v-container>
	</div>
	<Mainfooter />
</template>
<script>
import { useCartStore } from '~/stores/cartStore';
import { allCountries, fetchStates, fetchCities, states, cities, loadingStates, loadingCities } from '~/utils/countryapi';
import {emailRules, inputRules, phoneRules} from '~/utils/formrules'
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';
import {watchEffect, ref} from 'vue';

export default {
setup() {
    definePageMeta({
        middleware: ["auth"]
    });

    const cartStore = useCartStore()
    const shippingState = ref("")
    const shippingCity = ref("")
    const shippingCountry = ref("")

    watchEffect(() => {
	    fetchStates(shippingCountry.value)
    });

    watchEffect(() => {
	    fetchCities(shippingCountry.value, shippingState.value);
    });
    return {
        cartStore,
        shippingCountry,
        shippingCity,
        shippingState
    }
},
  data() {
    return {
        addressError: "",
        selectedAddressIndex: null,
        selectedShippingValue: "",
        editAddressIndex: null,
        email: "",
        fullName: "",
        phoneNumber: "",
        streetName: "",
        postalCode: "",
        confirmationEmail: "",
        shippingAddress: getLocalStorageItem('shippingAddresses', []),
        addAddress: false,
        placescards:false,
        mods:1,
        tab: null,
        chip: 'POPULAR products',
        confirmEmail: [
            v => !!v || 'Confirm your email address',
            v => this.email == v || 'Must be the same as email address'
        ],
        shippingTypes:[
        {
            title: 'Free Shipping',
            duration: '7-30 Business Days',
            cost: '0.00',
        },
        {
            title: 'Regular Shipping',
            duration: '3-14 Business Days',
            cost: '7.50',
        },
        {
            title: 'Express Shipping',
            duration: '1-3 Business Days',
            cost: '22.50',
        },
        ],
        items: [
                {
                    title: 'Cart',
                    disabled: this.cartStore.totalCartItems ==0 ? true : false,
                    href: '/order/cart',
                },
                {
                    title: 'Checkout',
                    disabled: false,
                    highlight: true,
                    href: '/order/checkout',
                },
                {
                    title: 'Payment',
                    disabled: false,
                    href: '/order/payment'
                },
            ],
     paymenthods:[
        {
            name: 'Google Pay',
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1684927396/gpay-new-logo-png-removebg-preview_1_wn3n7e.png'
        },
        {
            name: 'Apple Pay',
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1684926118/icon_q5y7el.png'
        },
        {
            name: 'Stripe',
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1684926107/Stripe_berhja.png'
        },
     ]
    };
  },
  computed: {
    orderSummary(){
        return [
            {
                name: 'Items (3):',
                value: '$1384.32',
            },
            {
                name: 'Shipping & handling:',
                value: '$0.00',
            },
            {
                name: 'Before tax:',
                value: '$100.00',
            },
            {
                name: 'Tax collected',
                value: '$45.32',
            },
        ]
    },
buttons(){
    return [{
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684591614/umoja/Vector_mgadhr.png',

    },
    {
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/facebook_tup8rq.png',
    },
    {
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/instagram_wogd5x.png',
    },
    {
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/globe-americas_annyvh.png',
    },
]
},
  cols() {
      const { lg, sm, md } = this.$vuetify.display;
      return lg
        ? [4, 6, 6, 6, 4, 8, 4, 3, 10, 2]
        : md
        ? [4, 6, 6, 12, 6, 8, 4, 3, 10, 2]
        : sm
        ? [6, 12, 12, 12, 12, 12, 12, 12, 12]
        : [6, 12, 12, 12, 12, 12, 12, 12, 12];
    },
  },
  methods: {
    handlePayment() {
        if (!this.selectedShippingValue && !this.selectedAddressIndex) {
            return
        }
        const shippingIndex = this.shippingTypes.findIndex(option => option.title == this.selectedShippingValue)
        const data = {
            discountCode : "",
            ...this.shippingAddress[this.selectedAddressIndex],
            shippingOption: this.shippingTypes[shippingIndex]
        }
        this.cartStore.saveShippingDetails(data)
        this.$router.push('/order/payment')
    },
    updateShippingAddress(address) {
        if (
            !address.fullName &&
            !address.email &&
            !address.confirmationEmail &&
            !address.phoneNumber &&
            !address.streetName &&
            !address.shippingState &&
            !address.shippingCity
        ) {
            return
        }
        const index = this.shippingAddress.findIndex(item => item.id == address.id)
        if (index !== -1) {
            const data = {
            id: address.id,
            fullName: address.fullName, 
            email: address.email,
            confirmationEmail: address.confirmationEmail,
            phoneNumber: address.phoneNumber,
            streetName: address.streetName,
            shippingState: address.shippingState,
            shippingCity: address.shippingCity,
            shippingCountry: address.shippingCountry,
            postalCode: address.postalCode
            }
            this.shippingAddress[index] = data;
            setLocalStorageItem("shippingAddresses", this.shippingAddress)
            this.editAddressIndex = null;
        }

       
    },
    toggleEditAddress(index) {
      this.editAddressIndex = index;
    },
    addShippingAddress() {
        if (
            this.fullName && 
            this.email && 
            this.confirmationEmail && 
            this.phoneNumber &&
            this.streetName &&
            this.shippingState &&
            this.shippingCity
            ) {
                const data = {
                    id: Math.floor(Math.random() * 1234567890),
                    fullName: this.fullName, 
                    email: this.email,
                    confirmationEmail: this.confirmationEmail,
                    phoneNumber: this.phoneNumber,
                    streetName: this.streetName,
                    shippingState: this.shippingState,
                    shippingCity: this.shippingCity,
                    shippingCountry: this.shippingCountry,
                    postalCode: this.postalCode
                }
                

                this.shippingAddress = [...this.shippingAddress, data];
                setLocalStorageItem("shippingAddresses", this.shippingAddress)

                this.addAddress = false;

                this.fullName = "";
                this.email = "";
                this.confirmationEmail = "";
                this.phoneNumber = "";
                this.streetName = "";
                this.shippingState = "";
                this.shippingCity = "";
                this.postalCode = "";
            }
    },
filt(text){

var newText = text.length > 50 ? text.slice(0, 50) +'...' : text
   return newText

}
  },
};
</script>
