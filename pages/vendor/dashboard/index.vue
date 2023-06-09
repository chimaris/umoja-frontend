<template>
    <div>
        <v-row class="d-flex ">
          
          <v-col  cols="12" :class="!(window == 'dash')?'pr-0':''" style="max-width: 400px;background-color: #F6F7F9;position: relative;" :md="!sidebar? '12': '3'" class="pb-0 pt-0">
            <v-slide-x-transition >
              <VendorsidePanel :window="window" :sidebar="sidebar"   @sideFn="sideFn"  @changePage="changePage"  v-show="sidebar" />
            </v-slide-x-transition>
            </v-col>
              
            <v-col style="position: fixed;
    right: 0;z-index: 99;
    height: 102vh;transition: all 0.2s ease-out;" :class="sidebar ?'px-0 ':'px-0'" cols="12" :md="!sidebar? '12': '9'"> 
                         <keep-alive>
   <v-card style="overflow: scroll;" min-height="100vh" height="100%" :class="!(window == 'dash')?'':'pr-8 py-8'" class=" " flat color="#fff" min>
                  <div style="height: 83px;
    background: white;
    height: 83px;
    position: sticky;
    z-index: 99;
    top: 0; border-bottom: 0.4px #EFEFEF solid;
" class=" d-flex align-center ">

<v-btn class="mx-4" icon flat rounded="xl" @click="sidebar = !sidebar"><v-icon icon="mdi mdi-menu"></v-icon></v-btn> 
<p 
style="font-weight: 600;
font-size: 24px;
line-height: 32px;
color: #1A1D1F;">{{window}}</p>
</div>

<!-- :value="$route.params.section -->
                    <v-window
                    v-model="window">
                    <v-window-item :value="'Website Preview'">
                
                        <Vendorpreview />
                        </v-window-item>
                        <v-window-item :value="'Dashboard'">
                          
                          <Vendordashboard />
                        </v-window-item>
                        <v-window-item :value="'Orders'">
                    
                            <Vendororders />
                            </v-window-item>
        </v-window>
        </v-card>            </keep-alive>

        </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
   window:'Dashboard',
   sidebar:true
    }
},
methods:{
  changePage(n){
    this.window = n
  },
  sideFn(){
    this.sidebar = false
  },
}
}
</script>