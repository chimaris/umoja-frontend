<template>
                <v-card  style="position: absolute;z-index: 99;" width="calc(100% - 5px)"  height="100%" min-height="1000px"  class="rounded-0 py-10" :class="$vuetify.display.smAndDown? 'elevation-20':''" flat color="#F6F7F9" min>
                
                    <v-menu
    >
      <template v-slot:activator="{ props }">
      <div class="px-8">

        <v-card  color="#EDEDED"  flat v-bind="props"
 class="rounded-xl  " width="100%" height=""  >
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
        <v-list-item
          v-for="(item, index) in ['items', 'hello']"
          :key="index"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
<div  v-for="(item, i) in items"
            :key="i" class="pt-8">
    <p  style="font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #333333; " class="mb-3 px-8 text-capitalize">{{item.name}}</p>
  <div v-ripple  style="cursor: pointer;" @click="selectItem(n.text)" class="align-center px-8 text-capitalize  justify-space-between py-2 d-flex" v-for="(n, i) in item.list" :key="i">
    <div class="d-flex align-center">

        <v-icon size="18" :color="selectedItem == n.text? 'green ':'#969696'" class="mr-2" :icon="n.icon"></v-icon>
        <p  :class="selectedItem == n.text? 'text-green ':'text-grey'" 
        style="font-weight: 600;
font-size: 16px;
line-height: 24px;">{{ n.text }}</p>
</div>
<v-badge rounded="lg" color="green" content="2" size="12" v-if="n.text == 'Notification'" ></v-badge>
<v-icon color="green" size="6" v-if="selectedItem == n.text && (n.text !== 'Notification')" icon="mdi mdi-circle"></v-icon>
  </div>
</div>
<div style="position: absolute; bottom: 22px;margin-top: 300px;" class="d-flex pt-12 px-8  justify-space-between align-center">
  <v-avatar class="" @click="$router.push('/')" size="135" style="height:auto!important" rounded="0">
  
    <v-img eager src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png"></v-img>
  </v-avatar>
     
</div>
                </v-card>
   
</template>
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
            { text: 'Post', icon: 'mdi mdi-note-text' },
            { text: 'Articles', icon: 'mdi mdi-note-text' },
        ]
      },
        {
        name: 'Others',
        list: [
            { text: 'Notification', icon: 'mdi mdi-message-badge' },
            { text: 'Help', icon: 'mdi mdi-help-circle' },
            { text: 'Settings', icon: 'mdi mdi-cog' },
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