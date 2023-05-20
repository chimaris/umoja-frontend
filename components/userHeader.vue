<template>

      <v-container  style="max-width:1300px">
        <div class="d-flex justify-space-between align-center">
          <v-avatar class="" @click="$router.push('/')" size="150" style="height:auto!important" rounded="0">
    
    <v-img eager src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png"></v-img>
  </v-avatar>
  <div class="d-flex align-center">

      <div class="d-flex mx-4">
          <v-btn :to="n.route" variant="text" class="mx-2" flat v-for="n in urls" :key="n.title">
            {{n.title}}
        </v-btn>
        
        

    </div>
    <div style="width:400px">
    <v-text-field placeholder="Search items, collections or accounts" density="comfortable"  hide-details style="width:100%;max-width:390px">
        <template v-slot:prepend-inner>
            <v-icon icon="mdi mdi-magnify"></v-icon>
        </template>
    </v-text-field>
</div>
    </div>
        <div>
            <v-btn to="/vendor/create" size="x-large" color="green" flat class="ml-2"><v-icon icon="mdi mdi-plus" class="mr-2"></v-icon> create</v-btn>
            <v-btn class="ml-2 py-1"  rounded size="small" flat stacked>
      <v-badge
        content="3"
        color="error"
      >
        <v-icon icon="mdi mdi-cart-outline"></v-icon>
      </v-badge>

      
    </v-btn>
    <v-btn   rounded size="small" flat  stacked>
      <v-badge
        content="3"
        color="error"
      >
        <v-icon icon="mdi mdi-bell-outline"></v-icon>
      </v-badge>

      
    </v-btn>
    <v-avatar class="ml-3" size="60"><v-img src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684497818/Frame_481586_zfgoph.png"></v-img></v-avatar>      
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
          {title:'Discover', route:'/buy'},
          {title:'Market Place', route:'/vendor/prevendor'},
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