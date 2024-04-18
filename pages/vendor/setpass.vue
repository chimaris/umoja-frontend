<template>
    <div class="authBg">
     <authHeader/>
     <div class="d-flex justify-center py-12 px-2">
 
         <v-card  flat class="pa-12 rounded-lg" width="100%" max-width="562px">
             <h1 style="
 font-style: normal;
 font-weight: 900;
 font-size: 48px;
 line-height: 60px;
 letter-spacing: -0.03em;
 
 /* Carbon/4 */
 
 color: #333333;">Set new password</h1>
             <p class="font-weight-medium mb-12 mt-1">You can now set the password you want to use below;
</p>
 
 
         <p class="inputLabel">New Password</p>             
         
         <v-text-field v-model="password" append-inner-icon="mdi mdi-eye-outline" placeholder="Enter new password" density="comfortable"  >
         </v-text-field>
         <p class="inputLabel">Confirm Password</p>             
         
         <v-text-field placeholder="Repeat password" v-model="c_password" append-inner-icon="mdi mdi-eye-outline" density="comfortable"  >
         </v-text-field>
 <v-btn to="/vendor/login" block color="green" flat size="x-large" class="rounded-lg mr-1 mt-6"> 
             <span style="text-transform: none;">
 
 Set new password
           </span>
         </v-btn>
 
          
         </v-card>
     </div>
    </div> 
 </template>
 <script>
   import { useUserStore } from '~/stores/userStore';

export default {
    data() {
        return {
            email: 'demo@gmail.com',
            password: '123456',
            c_password: '123456',
            first_name: '',
            last_name: '',
            cols: [12, 12, 12],
        }
    },
    computed: {
        userStore() {
            return useUserStore();
        },
        isLoggedIn() {
        return this.userStore.getIsLoggedIn;
      },
    },
    watch:{
    isLoggedIn(val){
        if(val){
            this.$router.push('/')
        }
    }
},
        methods:{
login(){
    this.userStore.login({email: this.email,password: this.password});
}
    }
}
</script>