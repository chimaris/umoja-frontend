<template>

      <v-container class="">
        <div class="d-flex justify-space-between align-center">
  <v-avatar class="" @click="$router.push('/')" size="150" style="height:auto!important" rounded="0">
  
    <v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718615349/umoja/Frame_4_emeelq_ajydmg.png"></v-img>
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