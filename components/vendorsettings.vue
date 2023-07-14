<template>
    <v-container class="pa-8" fluid="">
        <p style="color:#333;
font-size: 24px;
font-weight: 500;">Manage your account settings</p>
<v-sheet class="cardStyle mt-4 py-0">
    <v-row>
        <v-col class="py-4" cols="12" lg="2">
            <div class="py-3" :key="n" v-for="n in ['My Profile', 'Security', 'Notifcations', 'Account Details', 'Billing', 'Integrations']">
                <v-btn size="large" variant="tonal"  @click="selected = n" rounded="xl" flat :color="selected == n? 'green': 'white'">
                  <v-scale-transition>

                      <v-icon v-if="selected == n" icon="mdi mdi-star-four-points" class="mr-2"></v-icon>
                      </v-scale-transition>
                      <span style="font-size: 14px;
                      color: #333;
font-weight: 600;" :style="selected == n? 'color:#2C6E63': ''">

                        {{ n }}
                    </span>
                </v-btn>
            </div>
        </v-col>
        <v-divider style="    margin-bottom: 12px;
    margin-top: 12px;
    max-height: calc(100% - 24px);" vertical="" inset=""></v-divider>
        <v-col cols="12" class="px-0" lg="10">
            <v-window>
                <v-window-item value="My Profile">
                    <p 
                    style="color: #000;
                    font-size: 20px;
                    font-weight: 600;" class="pa-5">My Profile</p>
                    <v-divider></v-divider>

<div class="pa-5 d-flex align-center justify-space-between">
<div class=" d-flex align-center">
<v-avatar size="100"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689338074/frame-481584_vquap5.png" size="100"></v-img></v-avatar>
<div class="ml-2">
    <p style="font-size: 20px;
font-weight: 600;">Thatdesignpro </p>
    <p style="color:#969696;
font-size: 16px;
font-weight: 500;">Fashions and Style</p>
</div>
</div>
<v-btn @click="choose('Import Product')"  style="    border: 1px solid #e5e5e5;
" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3" >
                <v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
               Edit
           </v-btn>
</div>

                    <v-divider></v-divider>
                    <div class="pa-5 pb-8">

                    <div class="mb-4 d-flex align-center justify-space-between">
    <p style="font-size: 20px;
font-weight: 600;">Personal Information </p>

<v-btn @click="choose('Import Product')"  style="    border: 1px solid #e5e5e5;
" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3" >
                <v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
               Edit
           </v-btn>

</div>
            <div class="mt-4" style="max-width: 559px;">
                <v-row class="mb-2">
                    <v-col cols="12" lg="6">
        <p style="color:#969696;
            font-size: 14px;
            font-weight: 500;" class="mb-2">Name</p>
            <p  style="color: #333;
            font-size: 14px;
            font-weight: 500;
            ">Franklin O.</p>
                    </v-col>
                    <v-col cols="12" lg="6">
        <p style="color:#969696;
            font-size: 14px;
            font-weight: 500;" class="mb-2">Last Name</p>
            <p  style="color: #333;
            font-size: 14px;
            font-weight: 500;
            ">Benjamin</p>
                    </v-col>
                    <v-col cols="12" lg="6">
        <p style="color:#969696;
            font-size: 14px;
            font-weight: 500;" class="mb-2">Email Address</p>
            <p  style="color: #333;
            font-size: 14px;
            font-weight: 500;
            ">sylvesterfranklin007@gmailcom</p>
                    </v-col>
                    <v-col cols="12" lg="6">
        <p style="color:#969696;
            font-size: 14px;
            font-weight: 500;" class="mb-2">Phone</p>
            <p  style="color: #333;
            font-size: 14px;
            font-weight: 500;
            ">08033685498</p>
                    </v-col>
                </v-row>
            </div>
                <p style="color:#969696;
            font-size: 14px;
            font-weight: 500;" class="mb-2">Short Bio</p>
            <p  style="max-width:856px;color: #333;
            font-size: 14px;
            font-weight: 500;
            ">Lorem ipsum dolor sit amet consectetur. Lobortis sagittis porta tincidunt nibh eget lacus. Tristique tellus tempus dolor semper aliquam amet ipsum at. Ultricies porttitor scelerisque elementum nullam amet.
Mi blandit donec lorem donec condimentum gravida pulvinar. Egestas dictum interdum tempor elit felis molestie aliquet ut sapien.</p>

</div>
                    <v-divider></v-divider>
                    <div class="pa-5">

                    <div class="mb-4 d-flex align-center justify-space-between">
    <p style="font-size: 20px;
font-weight: 600;">Address </p>

<v-btn @click="choose('Import Product')"  style="    border: 1px solid #e5e5e5;
" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3" >
                <v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
               Edit
           </v-btn>

</div>
            <div class="mt-4" style="max-width: 559px;">
                <v-row class="mb-4">
                    <v-col cols="12" lg="6">
        <p style="color:#969696;
            font-size: 14px;
            font-weight: 500;" class="mb-2">Country</p>
            <p  style="color: #333;
            font-size: 14px;
            font-weight: 500;
            ">Ghana</p>
                    </v-col>
                    <v-col cols="12" lg="6">
        <p style="color:#969696;
            font-size: 14px;
            font-weight: 500;" class="mb-2">City/Sate</p>
            <p  style="color: #333;
            font-size: 14px;
            font-weight: 500;
            ">9b Nza street, Ghana</p>
                    </v-col>
                    <v-col cols="12" lg="6">
        <p style="color:#969696;
            font-size: 14px;
            font-weight: 500;" class="mb-2">Postal Code</p>
            <p  style="color: #333;
            font-size: 14px;
            font-weight: 500;
            ">ERT 2354</p>
                    </v-col>
                    <v-col cols="12" lg="6">
        <p style="color:#969696;
            font-size: 14px;
            font-weight: 500;" class="mb-2">Tax ID</p>
            <p  style="color: #333;
            font-size: 14px;
            font-weight: 500;
            ">08033685498</p>
                    </v-col>
                </v-row>
            </div>
      
</div>
                    <v-divider></v-divider>
                    <div class="pa-5">

                    <div class="mb-4 d-flex align-center justify-space-between">
    <p style="font-size: 20px;
font-weight: 600;">Delete Account </p>
<div>

    <v-btn  color="red"   flat size="default" class="ml-4 menubar text-grey-darken-3" >
        <v-icon class="mr-2" icon="mdi mdi-trash-can-outline"></v-icon>
                Delete Account
            </v-btn>
    <v-btn   style="    border: 1px solid #e5e5e5;
" variant="outlined" size="default" class="ml-4 menubar text-grey-darken-3" >
                Learn More
            </v-btn>
        </div>

</div>
            <div class="mt-4 mb-8" style="max-width: 470px;">
                <p style="color: #333;
font-size: 14px;
font-weight: 500;">When you delete your account, you lose access to Umojas account
services, and we permanently delete your personal data. You can cancel
the deletion for 14 days.</p>
            </div>
      
</div>
                   </v-window-item>

            </v-window>
        </v-col>
    </v-row>

</v-sheet>
    </v-container>
</template>

<script>
export default {
 
  data() {
    return {
        tab: '',
        selected: 'My Profile',
   items: []  
}
},
mounted(){
    this.items = this.items1;
  },
  methods:{
    choose(x){
      this.$emit('changePage', 'Order details');
    },
    choose2(x){
      this.$emit('changePage', 'createorder');
    },
    sort(x, y){
      var itm = this.items1;
      this.items = itm.filter((item) => {
      return item[x] == y;
    });
  }
}
}
</script>