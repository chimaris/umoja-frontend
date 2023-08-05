<template>
    <div class="tophead">
    <p class="text-white text-center pa-4">Sign up and GET 20% OFF for your first order🎉. 
<span class="pointhere">Sign up now
</span></p>
  </div>
      <v-container class="py-1" style="max-width:1400px">
        <div class="d-flex justify-space-between align-center">
        <div class="d-flex  align-center">
         <v-avatar class="mr-8" @click="$router.push('/home2')" size="102" height="" style="cursor: pointer;height:65px!important" rounded="0">
    <v-img eager src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png"></v-img>
  </v-avatar>
      <div class="d-flex">
          <v-btn :to="n.route" variant="text" class="mx-2" flat v-for="n in urls" :key="n.title">
            {{n.title}}
          </v-btn>
      </div>
    </div>   
      <div>
<v-btn icon="mdi mdi-magnify" rounded="xl" flat color="transparent"></v-btn>
<v-btn icon="mdi mdi-account-outline" rounded="xl" flat color="transparent"></v-btn>
<v-btn rounded="xl" icon flat color="transparent"><v-avatar size="35">
  <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689338074/frame-481584_vquap5.png"></v-img>
</v-avatar></v-btn>
<v-btn icon size="48" rounded="xl" flat color="transparent"
class="text-none" >
      <v-badge offset-y="20" content="2" color="error">
        <v-icon icon="mdi mdi-shopping-outline"></v-icon>
      </v-badge>
    </v-btn>
      </div>
    </div>
      </v-container>
  </template>
  <script>
  import { useTheme } from 'vuetify'
  
  export default {
      data() {
      return {
        theme: useTheme(),
        btn_radio: null,
        urls: [
          {title:'Buy', route:'/discovery'},
          {title:'Sell', route:'/vendor/registeration/form'},
          {title:'Discovery', route:'/discovery_page'},
          {title:'Market Place', route:'/market_place'},
          {title:'About Us', route:'/vendor/dashboard'},
          ]
      };
    },
    methods: {
      toggleTheme() {
        this.theme.global.name.value = this.theme.global.current.value.dark ? 'light' : 'dark';
      },
    },
    }
  
  </script>