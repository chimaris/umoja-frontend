<template>
  <div class="tophead">
    <p class="text-white text-center pa-4">The biggest market space for all all african products.
<span class="pointhere">Click here to read more🚀
</span></p>
  </div>
    <v-container  style="max-width:1300px">
      <div class="d-flex justify-space-between align-center">
        <v-avatar class="" @click="$router.push('/')" size="150" style="height:auto!important" rounded="0">
  
  <v-img eager src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png"></v-img>
</v-avatar>
        <v-text-field placeholder="Search items, collections or accounts" density="comfortable"  hide-details style="width:100%;max-width:390px">
          <template v-slot:prepend-inner>
          <v-icon icon="mdi mdi-magnify"></v-icon>
          </template>
        </v-text-field>
        <div class="d-flex">
        <v-btn :to="n.route" variant="text" class="mx-1" flat v-for="n in urls" :key="n.title">
          {{n.title}}
        </v-btn>

      
     
    </div>
    <div>
      <v-btn to="/user/login" variant="text" size="x-large" flat>Login</v-btn>
      <v-btn to="/vendor/registeration" size="x-large" color="green" flat class="ml-2">Sign up</v-btn>
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
        {title:'About us', route:'/vendor/dashboard'},
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