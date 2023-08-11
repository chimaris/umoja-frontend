<template>
    <v-card style="max-width: 620px;max-height: 80vh; border:none" class=" rounded-lg">
<p style="color: var(--carbon-6, #1E1E1E);
font-size: 20px;
font-weight: 600;" class="pa-6 pb-4">🔥 Popular Products </p>

<div class="px-6 pb-4">
    <v-chip-group>
        <v-chip-group
            selected-class="text-green"
            column 
          >
            <v-chip variant="outlined" rounded="lg"
              v-for="tag in searches"
              :key="tag"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
    </v-chip-group>
</div>
<v-divider></v-divider>

<div class="px-6 mb-4">
    <div class="d-flex justify-space-between align-center py-4">
        <p style="color:#1E1E1E;
font-size: 20px;
font-weight: 600;">🔎 Recent Searches</p>

<v-btn variant="text" color="#C20052">
   <span style="font-size: 14px;font-weight: 500;
">

       Clear Search History
   </span>
   
</v-btn>
    </div>
<div>
    <div v-for="n in searches2" class="py-4 d-flex">
        <v-icon size="20" color="grey" class="mr-2" icon="mdi mdi-clock"></v-icon>
        <span style="color: #1E1E1E;
font-size: 14px;
font-weight: 500;"> {{n}}</span>
       
    </div>
</div>

</div>
<v-divider ></v-divider>

<div class="pa-6 ">
    <p style="color: #1E1E1E;
font-size: 20px;
font-weight: 600;">😎 Recently viewed</p>
<div class="mt-4">
    <v-row>
        <v-col v-for="n in recentitems" cols="2">
            <v-img contain :src="n"></v-img>
        </v-col>
        <v-col v-for="n in recentitems" cols="2">
            <v-img contain :src="n"></v-img>
        </v-col>
    </v-row>
</div>
</div>

</v-card>
</template>
<script>
export default {
    // props:['route', 'text'],
  data() {
    return {
        searches: ['The Fisherman Dress', 'The messeus hat', 'Multicolored Ankara Material ', 'The Fisherman Dress', 'The Nawi Women Gown', 'Woman King Sculpture','Jaeger Hook', 'Za Dress'],
        searches2: ['The Fisherman Dress', 'The messeus hat', 'Multicolored Ankara Material ', 'The Fisherman Dress', 'The Nawi Women Gown'],
        recentitems: [
            'https://res.cloudinary.com/payhospi/image/upload/v1691574327/s-2-gs-x-1-po-l_ckeqxo.png',
            'https://res.cloudinary.com/payhospi/image/upload/v1689252826/matskirt_ecf6ym.png',
            'https://res.cloudinary.com/payhospi/image/upload/v1688130445/ankara-sneakers-1500-x_lnanzk.png'
        ]
    }
}
}
</script>