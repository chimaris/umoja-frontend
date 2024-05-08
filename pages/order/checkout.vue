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
<template v-if="cartStore.shippingAdress.length > 0">
    <template v-for="(item, index) in cartStore.shippingAdress" :key="index">
        <v-card flat class="pa-4 cardStyle rounded-lg justify-space-between align-center my-4 d-flex" >
       <div  class=" align-center d-flex">
        <input type="radio" :id="'address_' + index" :value="item.id" v-model="selectedAddress" class="mr-2" style="accent-color: #2C6E63; transform: scale(2);">
           <label :for="'address_' + index" class="text-capitalize px-4">
               <p style="" class=" addressName mb-2">{{item.full_name}}</p>
               <p class="adddressPhone mb-1">{{item.shipping_address}}, {{item.shipping_city}}, {{item.shipping_region}} {{item.shipping_country}}</p>
               <p class="adddressPhone ">{{item.phone_number}}</p>
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
                    v-model="item.full_name" 
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
                    v-model="item.email" 
                    :rules="[v => item.email == v || 'Must be the same as email address', v => !!v || 'Field Cannot be Empty']" 
                    placeholder="Enter your confirmation email" 
                    density="comfortable">
                </v-text-field>
            </v-col>
        </v-row>                
        <p class="inputLabel">Phone Number<span class="mb-2">*</span></p>             
        <v-text-field :rules="phoneRules" v-model="item.phone_number" placeholder="Enter your phone number (only digits)" density="comfortable"  >
        </v-text-field>
        <p class="inputLabel">Street Name and House Number*<span class="mb-2">*</span></p>             
        <v-text-field 
            placeholder="Enter your Street Name and House Number" 
            v-model="item.shipping_address"
            :rules="inputRules"
            density="comfortable"  >
        </v-text-field>
        <v-row class="">
            <v-col cols="12" md="6">
                <p class="inputLabel">State<span class="mb-2">*</span></p>                  
                <v-select 
                    v-model="item.shipping_region"
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
                    v-model="item.shipping_city" 
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
        <p style="color: red; font-size: 16px;">{{cartStore.addressError}}</p>   
        <p class="inputLabel">Postal code<span class="mb-2">*</span></p>             
        <v-text-field v-model="item.shipping_postal_code" placeholder="Enter your zipcode" density="comfortable"  >
        </v-text-field>             
        <v-btn type="submit" class="textClass px-8" rounded="xl" color="green"  flat>
            <span class="mr-4"> Save Changes</span>
		    <v-progress-circular v-if="cartStore.loading" indeterminate :width="2" :size="20"></v-progress-circular>
        </v-btn>          
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
    <p style="color: red; font-size: 16px;">{{cartStore.addressError}}</p>           
    <v-btn type="submit" class="textClass px-8" rounded="xl" color="green"  flat>
        
        <span class="mr-4"> Use this address</span>
    </v-btn>          
    <v-btn @click="addAddress = false" variant="tonal" class="textClass ml-2 px-8" rounded="xl" color="green" flat>Cancel</v-btn>
</v-form>          
         
</v-card>
</v-card>
<v-card flat   class="cardStyle bg-white rounded-lg my-4 py-6 pa-4">
    
    <v-card flat :color="n.cost == '0.00'? '#EDF3F0': ''"   class="pa-4 cardStyle rounded-lg justify-space-between align-center my-4 d-flex" v-for="n in shippingTypes" :key="n">
   <div  class=" align-center d-flex">

       <input type="radio" :id="'shipping_' + index" :value="n" v-model="selectedShippingValue" class="mr-2" style="accent-color: #2C6E63; transform: scale(2);">
       <div class="text-capitalize px-4">
           <p style="" class=" addressName mb-2">{{n.type}}</p>
           <p class="adddressPhone mb-1">{{n.duration}}</p>
        </div>
    </div>
    <v-spacer></v-spacer>
    <p style="" class=" addressName mb-2">{{formattedPrice(n.amount)}}</p>

</v-card>
    </v-card>

</v-col>
<Cartsummary :route="'/order/payment'" :cartError="cartError" :text="'Continue to Payment'" @handleSubmit="handlePayment()"/>
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
import {watchEffect, ref, onMounted} from 'vue';
import {formattedPrice} from '~/utils/price';


export default {
setup() {
    definePageMeta({
        middleware: ["auth"]
    });

    const cartStore = useCartStore()
    const shippingState = ref("")
    const shippingCity = ref("")
    const shippingCountry = ref("")
    const shippingTypes = ref();

    watchEffect(() => {
	    fetchStates(shippingCountry.value)
    });

    watchEffect(() => {
	    fetchCities(shippingCountry.value, shippingState.value);
    });
    onMounted(async () => {
        const response = await cartStore.shippingMethods();
        shippingTypes.value = response.data.data;
        await cartStore.fetchShippingAdress();
        
    });

    watch(
	() => cartStore.totalCheckoutItems,
	(newVal) => {
		if (newVal === 0) {
			router.push("/order/cart");
		}
	},
	{ immediate: true }
    );
    return {
        cartStore,
        shippingCountry,
        shippingCity,
        shippingState,
        shippingTypes
    }
},
  data() {
    return {
        addressError: "",
        cartError: "",
        selectedAddress: null,
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
        this.cartError = ""
        if (!this.selectedAddress) {
            this.cartError = "Please select shipping address, if you don't have click on add new address to create new shipping address."
            return
        }
        if (!this.selectedShippingValue) {
            this.cartError = "Please select shipping method"
            return
        }

        const data = {
            discountCode : "",
            shippingOption: this.selectedShippingValue,
            shippingAddressId: this.selectedAddress
        }
        this.cartStore.saveShippingDetails(data)
        console.log(this.cartStore.shippingDetails)
        this.$router.push('/order/payment')
    },
    async updateShippingAddress(address) {
        if (
            !address.full_name &&
            !address.email &&
            !address.phone_number &&
            !address.shipping_address &&
            !address.shipping_region &&
            !address.shipping_city
        ) {
            return
        }
        const response = await this.cartStore.updateShippingAddress(address);
        if (response){
            this.editAddressIndex = null;
            await this.cartStore.fetchShippingAdress();

        }
    },
    toggleEditAddress(index) {
      this.editAddressIndex = index;
    },
    async addShippingAddress() {
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
                    shipping_full_name: this.fullName, 
                    shipping_email: this.email,
                    shipping_phone_number: this.phoneNumber,
                    shipping_address: this.streetName,
                    shipping_region: this.shippingState,
                    shipping_city: this.shippingCity,
                    shipping_country: this.shippingCountry,
                    shipping_postal_code: this.postalCode
                }
            const response = await this.cartStore.createShippingAddress(data);
            if (response) {
                await this.cartStore.fetchShippingAdress();
                this.addAddress = false;
            }

                this.fullName = "";
                this.email = "";
                this.confirmationEmail = "";
                this.phoneNumber = "";
                this.streetName = "";
                this.shippingState = "";
                this.shippingCity = "";
                this.postalCode = "";
                this.shippingCountry = "";
            }
    },
filt(text){

var newText = text.length > 50 ? text.slice(0, 50) +'...' : text
   return newText

}
  },
  
};
</script>
