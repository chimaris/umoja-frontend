<template>

      <v-container class="">
        <div class="d-flex justify-space-between align-center">
  <v-avatar class="" @click="$router.push('/')" size="150" style="height:auto!important" rounded="0">
  
    <v-img eager src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png"></v-img>
  </v-avatar>
     
      <div>
        <v-btn to="/" flat color="grey-lighten-4" class=""><v-icon class="mr-6">mdi mdi-arrow-left</v-icon> Back</v-btn>
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
        btn_radio: null
      };
    },
    methods: {
      toggleTheme() {
        this.theme.global.name.value = this.theme.global.current.value.dark ? 'light' : 'dark';
      },
    },
    }
  
  </script>