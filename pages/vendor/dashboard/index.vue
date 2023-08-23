<template>
  <div>
    <v-row class="d-flex ">

      <v-col cols="12" :class="!(window == 'dash') ? 'px-0' : ''"
        style="background-color: #F6F7F9;position: absolute;top: 0;left: 0;z-index: 99;" :md="!sidebar ? '3' : '3'"
        class="pb-0 pt-0">
        <v-slide-x-transition>
          <VendorsidePanel :window="window" :sidebar="sidebar" @sideFn="sideFn" @changePage="changePage" />
        </v-slide-x-transition>
      </v-col>

      <v-col style="position: fixed;
    right: 0;z-index: 99;
    height: 102vh;transition: all 0.2s ease-out;" class="maincont" :class="sidebar ? 'px-0 ' : 'px-0'" cols="12"
        :md="!sidebar ? '12' : '9'">

        <v-card style="overflow: scroll;" min-height="100vh" height="100%" :class="!(window == 'dash') ? '' : 'pr-8 py-8'"
          class=" " flat color="#fff" min>
          <div style="position: fixed;z-index: 99;width: 100%;">
            <div style="height: 67px;
    background: rgb(255 255 255 / 65%);
    backdrop-filter: blur(3px);    position: sticky;
    z-index: 99;
    top: 0; border-bottom: 0.4px #EFEFEF solid;">

              <div v-if="(window != 'Order details') && (window != 'Add Products') && (window != 'createorder') && (window !== 'Import Product')" class="h-100 d-flex align-center ">
                <v-btn class="mx-4" icon flat rounded="xl" @click="sidebar = !sidebar"><v-icon
                    icon="mdi mdi-menu"></v-icon></v-btn>

                <p style="font-weight: 600;
font-size: 24px;
line-height: 32px;
color: #1A1D1F;" class="text-capitalize">{{ window }}</p>
              </div>
              <div v-else class="h-100 px-8 d-flex align-center ">
                <v-btn class="mr-4" icon flat rounded="xl" @click="sidebar = !sidebar"><v-icon
                    icon="mdi mdi-menu"></v-icon></v-btn>

                <v-btn @click="window = (window == 'Add Products' ) || (window == 'Import Product') ? 'Products' : 'Orders'" size="large" v-bind="props"
                  style="    border: 1px solid #e5e5e5;
  " variant="outlined" class=" text-grey-darken-3">
                  <v-icon size="16" class="mr-2" icon="mdi mdi-arrow-left-top"></v-icon>
                  Back to {{ ((window !== 'Add Products' ) && (window !== 'Import Product')) ? 'Orders' : 'Products' }}
                </v-btn>
              </div>
            </div>
          </div>
          <!-- :value=" -->
          <v-window :touch="false"  style="padding-top: 67px;" v-model="window">
            <v-window-item :value="'Order details'">
              <Vendororderdetails />
            </v-window-item>

            <v-window-item :value="'Homepage'">

              <Vendorpreview />
            </v-window-item>
            <v-window-item :value="'Dashboard'">

              <Vendordashboard />
            </v-window-item>
            <v-window-item :value="'Orders'">

              <Vendororders @changePage="changePage" />
            </v-window-item>
            <v-window-item :value="'Add Products'">
              <Vendoraddproducts />
            </v-window-item>
            <v-window-item :value="'Import Product'">
              <Vendorimportproduct />
            </v-window-item>
            <v-window-item :value="'Products'">
              <Vendorproducts @changePage="changePage" />
            </v-window-item>
            <v-window-item :value="'cpage'">
              <Vendorordcustomerpage />
            </v-window-item>
            <v-window-item :value="'createorder'">
              <Vendorcreateorder />
            </v-window-item>
            <v-window-item :value="'Posts'">
              <Vendorcreatepost />
            </v-window-item>
            <v-window-item :value="'Articles'">
              <Vendorcreatearticle />
            </v-window-item>
            <v-window-item @changeTab="changePage" :value="'Customers'">

              <Vendorcustomers />
            </v-window-item>
            <v-window-item :value="'Sales'">

              <Vendorsales />
            </v-window-item>
            <v-window-item :value="'Reviews'">

              <Vendorreviews />
            </v-window-item>
            <v-window-item :value="'Notifications'">
              <Vendornotifications/>
            </v-window-item>
            <v-window-item :value="'Settings'">
              <Vendorsettings/>
            </v-window-item>
            <v-window-item :value="'All Apps'">
              <Vendorapps/>
            </v-window-item>
          </v-window>
        </v-card>

      </v-col>
    </v-row>
  </div>
</template>
<style>
.maincont.v-col-md-12 {
  max-width: calc(100% - 85px);
}
</style>
<script>
export default {
  data() {
    return {
      window: "Homepage",
      sidebar: true,
      edit: true,
    };
  },
  methods: {
    changePage(n) {
      this.window = n;
    },
    sideFn() {
      this.sidebar = false;
    },
  },
}
</script>