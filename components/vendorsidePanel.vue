<template>
        
                <v-card width="calc(100% - 5px)" height="100%" min-height="1000px" class="rounded-0 py-10 p style-0" flat="" color="#F6F7F9" min="">
                  <v-slide-x-transition>

                  <v-menu v-if="sidebar">
      <template v-slot:activator="{ props }">
      <div class="px-8">

        <v-card color="#EDEDED" flat="" v-bind="props" class="rounded-xl  " width="100%" height="">
 <div class="d-flex pa-4 align-center justify-space-between ">

     <v-avatar size="48" color="white"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1685685306/Frame_427320539_v9jme9.png"></v-img></v-avatar>
     <div class="text-left px-4">
         <p style="color: #1A1D1F;
              font-weight: 600;
              font-size: 16px;
              line-height: 24px;">Umoja</p>
         <p style="font-weight: 500;
font-size: 12px;
line-height: 18px;
display: flex;
color: #596066;">Nweke Franklin</p>
        </div>
        <v-spacer></v-spacer>
        <v-icon color="green" icon="mdi mdi-chevron-down"></v-icon>
    </div>
                    </v-card>
      </div>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in ['Account','Settings', 'Logout']" :key="index">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>                  </v-slide-x-transition>

<div v-for="(item, i) in items" :key="i" class="pt-8">
    <p v-show="sidebar" class="mb-3 px-8 text-capitalize style-1">{{item.name}}</p>
  <div  @click="selectItem(n.text)" class="align-center px-8 text-capitalize justify-space-between py-2 d-flex style-2" v-for="(n, i) in item.list" :key="i">
    <div class="d-flex align-center">

        <v-icon size="18" :color="selectedItem == n.text? 'green ':'#969696'" class="mr-2" :icon="n.icon"></v-icon>
        <p v-show="sidebar" :class="selectedItem == n.text? 'text-green ':'text-grey'" class="style-3">{{ n.text }}</p>
</div>
<v-badge rounded="lg" color="green" content="2" size="12" v-if="n.text == 'Notification'"></v-badge>
<v-icon color="green" size="6" v-if="selectedItem == n.text &amp;&amp; (n.text !== 'Notification')" icon="mdi mdi-circle"></v-icon>
  </div>
</div>
<div v-if="!sidebar" class="d-flex pt-12 px-4 justify-space-between align-center style-4">
  <v-avatar class="style-5" @click="$router.push('/')" size="57" rounded="0">
    <v-img eager="" src="https://res.cloudinary.com/payhospi/image/upload/v1688141514/Frame_2_gfd65l.png"></v-img>
  </v-avatar>
  </div>
<div v-else="" class="d-flex pt-12 px-8 justify-space-between align-center style-6">

  <v-avatar class="style-7" @click="$router.push('/')" size="135" rounded="0">
  
    <v-img eager="" src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png"></v-img>
  </v-avatar>
     
</div>
                </v-card>
</template>
<style>.style-0 { z-index: 99 }
.style-1 { font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #333333 }
.style-2 { cursor: pointer }
.style-3 { font-weight: 600;
font-size: 16px;
line-height: 24px }
.style-4 {  bottom: 22px;margin-top: 100px }
.style-5 { height:auto!important }
.style-6 {  bottom: 22px;margin-top: 100px }
.style-7 { height:auto!important }
</style>
<script>
export default {
  mounted(){
    this.selectedItem = this.window
  },
  props: ['window', 'sidebar'],
  data() {
    return {
        list: '',
           selectedItem: 'Homepage',
      items: [ 
        {
        name: 'website',
        list: [
            { text: 'Homepage', icon: 'fas fa-globe' },
        ]
      },
        {
        name: 'Menu',
        list: [
            { text: 'Dashboard', icon: 'mdi mdi-view-grid' },
            { text: 'Orders', icon: 'mdi mdi-shopping' },
            { text: 'Products', icon: 'mdi mdi-tag' },
            { text: 'Customers', icon: 'mdi mdi-account-group' },
            { text: 'Sales', icon: 'mdi mdi-trending-up' },
            { text: 'Reviews', icon: 'mdi mdi-star' },
            { text: 'Merchandise', icon: 'mdi mdi-warehouse' },
        ]
      },
        {
        name: 'Content Media',
        list: [
            { text: 'Posts', icon: 'mdi mdi-note-text' },
            { text: 'Articles', icon: 'mdi mdi-note-text' },
        ]
      },
        {
        name: 'Others',
        list: [
            { text: 'Notifications', icon: 'mdi mdi-message-badge' },
            { text: 'Help', icon: 'mdi mdi-help-circle' },
            { text: 'Settings', icon: 'mdi mdi-cog' },
        ]
      },
        {
        name: 'Apps',
        list: [
            { text: 'All Apps', icon: 'mdi mdi-message-badge' },
        ]
      },
       
      ],
    }
},
methods:{
  selectItem(n){
    this.selectedItem = n
    this.$emit('changePage', n)
  },
  sideFn(){
   if( this.sidebar ) this.$emit('sideFn')
  },
}
}
</script>