<template>
    <v-container class="pa-8" fluid="">
        <p style="color:#333;
font-size: 24px;
font-weight: 500;">Manage your account settings</p>
<v-sheet class="cardStyle mt-4 mb-12 py-0">
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
            <v-window v-model="selected">
                <v-window-item value="My Profile">
                <Vendorsettingsprofile />
                          </v-window-item>
                <v-window-item value="Billing">
                <Vendorsettingsbilling />
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