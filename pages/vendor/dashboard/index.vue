<template>
    <div>
        <v-row>
            <v-col cols="12" style="max-width: 400px;" class="pb-0" sm="3">
              <sidePanel />
            </v-col>
            <v-col cols="12" sm="9"> 
                <v-card min-height="100vh" height="100%" class=" pr-8 py-8" flat color="#fff" min>
    
        <v-window
    v-model="window"
  >
    <v-window-item :value="'dash'">
        <dashboard />
        </v-window-item>
        </v-window>
        </v-card>
        </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
   window:'dash'
    }
}
}
</script>