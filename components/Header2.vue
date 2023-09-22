<template>
    <div @click="$router.push('/user/signup')" class="tophead heroimg">
    <p class="text-white text-center pa-4">Sign up and GET 20% OFF for your first order🎉. 
<span class="pointhere">Sign up now
</span></p>
  </div>
  <div :style="sticky? ' position: relative;':' position: sticky;'" class="topbar"> 

      <v-container  class="py-0" :style="'max-width:'+maxw">
        <div class="d-flex justify-space-between align-center">
        <div class="d-flex  align-center">
         <v-avatar class="mr-8" @click="$router.push('/home2')" size="102" height="" style="cursor: pointer;height:65px!important" rounded="0">
    <v-img eager src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png"></v-img>
  </v-avatar>
      <div class="d-flex">
          <v-btn  :to="n.route" variant="text" v-show="!n.disabled" class="mx-2" flat v-for="n in urls" :key="n.title">
            {{n.title}} 
          </v-btn>
      </div>
    </div>   
      <div class="d-flex">
        <v-menu persistent="" v-model="searchmenu" :close-on-content-click="false" location="bottom" offset="28px">
      <template v-slot:activator="{ props, isActive }">
        <div class="d-flex align-center">
        <div  v-bind="props">
          <v-slide-x-reverse-transition  leave-absolute origin="center center"> 
          <v-btn v-if="!isActive" icon size="48" v-bind="props" rounded="xl" flat color="transparent">
  <v-avatar rounded="0" size="28">
  <v-img contain src="https://res.cloudinary.com/payhospi/image/upload/v1691742708/outline-search-minimalistic-magnifer_eez0ab.png"></v-img>
</v-avatar></v-btn>
</v-slide-x-reverse-transition>
          </div>
          <v-slide-x-reverse-transition  leave-absolute origin="center center"> 
           <v-text-field v-if="isActive" variant="outline" style="min-width: 500px;" class="search  "  hide-details="" prepend-inner-icon="mdi mdi-magnify" placeholder="Ankara"
           density="compact">
           <template v-slot:append-inner>
      <v-icon color="grey"
        @click="searchmenu = false"
        icon="mdi mdi-close-circle"
      />
    </template>
          </v-text-field>
        </v-slide-x-reverse-transition>
        </div>

      </template>
      <dialogsearch />
    </v-menu>
  
<v-btn rounded="xl" v-if="!isLoggedIn" to="/user/login" class="ml-4" icon flat color="transparent">
  <v-avatar size="35">
    <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1693034207/User_Rounded_xfgovv.png"></v-img>
  </v-avatar></v-btn>
  <v-btn v-else rounded="xl" to="/user/profile" class="ml-4" icon flat color="transparent">
    <v-avatar size="35">
    <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689338074/frame-481584_vquap5.png"></v-img>
  </v-avatar></v-btn>
<v-btn to="/order/cart" class="ml-4 text-none" icon size="48" rounded="xl" flat color="transparent"
 >
      <v-badge  offset-y="20" :dot="cartStore.totalCartItems == 0" :content="cartStore.totalCartItems" color="error">
        <v-avatar rounded="0" size="32">
  <v-img contain src="https://res.cloudinary.com/payhospi/image/upload/v1691742709/outline-shopping-ecommerce-bag-4_aibbld.png"></v-img>
</v-avatar>
      </v-badge>
    </v-btn>
    <v-menu  v-if="isLoggedIn" open-on-hover="" :close-on-content-click="false" location="bottom" offset="10px">
      <template v-slot:activator="{ props }">
<v-btn class="ml-4"  icon size="48" v-bind="props" rounded="xl" flat color="transparent">
  <v-avatar rounded="0" size="23">
  <v-img contain src="https://res.cloudinary.com/payhospi/image/upload/v1691742990/outline-notifications-vector_vkwg9h.svg"></v-img>
</v-avatar></v-btn>
</template>
<dialognotification />
</v-menu>
      </div>
    </div>
      </v-container>
    </div>
       <!-- <v-card height="500px" class=" d-flex align-end">{{ hasScrolledPastPoint }}</v-card> -->

  </template>
  <style>



.search .v-input__control{
  border-radius: 6px;
  border: 1px solid var(--carbon-2, #CECECE);
}
</style>
  <script>
  import { useTheme } from 'vuetify'
  import { useCartStore } from '~/stores/cartStore';
  import { useUserStore } from '~/stores/userStore';

  export default {
      data() {
      return {
        theme: useTheme(),
        btn_radio: null,
        searchmenu: false,
   
      };
    },
    props: ['maxwidth', 'sticky'],
  computed: {
    sticky() {
    return this.sticky !== undefined ? this.sticky : false
  },
  maxw() {
    return this.maxwidth? this.maxwidth : '1400px'
  },
      urls() {
        const loggedIn = this.isLoggedIn;
        return [
          {title:'Buy', route:'/user/login', disabled: false},
          {title:'Sell', route:'/vendor/login', disabled: false},
          {title:'Discovery', route:'/discovery_page', disabled: false},
          {title:'Market Place', route:'/market_place', disabled: false},
          {title:'ERP Solution', route:'/vendor/dashboard', disabled: false},
          ]},
      cartStore() {
        return useCartStore();
      },      
      userStore() {
        return useUserStore();
      },      
      isLoggedIn() {
        return this.userStore.getIsLoggedIn? this.userStore.getIsLoggedIn : false;
      },      
    },
    methods: {
      toggleTheme() {
        this.theme.global.name.value = this.theme.global.current.value.dark ? 'light' : 'dark';
      },
    },
    }
  
  </script>