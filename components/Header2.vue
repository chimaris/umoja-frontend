<template>
      <v-container  style="max-width:1300px">
        <div class="d-flex justify-space-between align-center">
        <div class="d-flex  align-center">
         <v-avatar class="mr-8" @click="$router.push('/')" size="150" style="height:auto!important" rounded="0">
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
<v-btn icon="mdi mdi-shopping-outline" rounded="xl" flat color="transparent"></v-btn>
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
          {title:'Discovery', route:'/vendor/registeration/form'},
          {title:'Market Place', route:'/vendor/dashboard'},
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