<template>
 <v-container height="100%" class=" mx-auto px-5 " width="100%"
    style="overflow:hidden;padding-bottom: 200px;max-width: 1330px;" flat>   <p style="color: var(--carbon-4, #333);
font-size: 24px;
font-weight: 600;">App Integrations</p>
   <p style="color: #969696;
font-size: 16px;
font-weight: 400;">Lorem ipsum dolor sit amet consectetur. Mattis vitae.</p>

<v-row class="mt-4"> 
 
    <v-col cols="12" v-for="(n, i) in availableApps" :key="i" md="6" lg="4">
        <v-sheet style="min-height: 220px;" class="cardStyle">
            <div class="d-flex mb-4 justify-space-between">

                <v-avatar size="50" class="pa-2" :color="n.color" rounded="lg">
                <v-img style="opacity: 0.4;" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718889186/umoja-backup/frame_hcvde3_o3mogj.png"></v-img></v-avatar>

                <v-btn class="rounded-lg" v-if="isIntegrated(n.id)" variant="tonal" color="green" @click="uninstall(n.id)" > <v-icon class="mr-1" icon="mdi mdi-lightning-bolt-outline"></v-icon>  <span style="
                font-size: 14px;
                font-weight: 600;">Connected</span></v-btn>
                <v-btn  v-else style="    border: 1px solid #e5e5e5;"  class=" rounded-lg " @click="integrate(n.id)"  color="white" variant="tonal"> <v-icon color="#333" class="mr-1" icon="mdi mdi-lightning-bolt-circle"></v-icon> 
                <span style="color: var(--carbon-4, #333);
                font-size: 14px;
                font-weight: 600;">Connect</span> </v-btn>
            </div>
            <p style="color: var(--carbon-4, #333);
font-size: 18px;
font-weight: 600;
line-height: 20px; /* 111.111% */" class="mb-3">{{n.title}}</p>
<p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;"> {{n.description}}</p>
        </v-sheet>
    </v-col>
</v-row>
    </v-container>
</template>
<script>
import { useAppStore } from '@/stores/appStore';

export default {
    setup() {
    const appStore = useAppStore();

    return {
      integratedApps: appStore.integratedApps,
      availableApps: appStore.availableApps,
      isIntegrated: appStore.isIntegrated,
      integrate: appStore.integrate,
      uninstall: appStore.uninstall
    };
  },
    methods: {
        openDialog() {
            this.dialog = true
        },
        closeDialog() {
            this.dialog = false
        }
    },
    data: () => ({
        dialog: false,
     
    }),
}
</script>