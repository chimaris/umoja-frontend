<template>
    <div>
        <v-container style="max-width:1200px;min-height:100vh;width: 100%;" class=" py-12">
        <v-row>
            <v-col class=" pr-12" cols="12" md="6">
                <v-img class="bg-grey-lighten-2" style="border-radius: 15px;" cover :src="item.mainImg"  width="535" height="705" ></v-img>
            </v-col>
            <v-col class="d-flex flex-column justify-space-between" cols="12" md="6">
              <div>

            <v-chip class="pa-3" rounded="lg" color="green" style="color:  #2C6E63;
font-size: 12px;
font-weight: 500;
line-height: 140%; /* 16.8px */
letter-spacing: 0.72px;
text-transform: uppercase;" variant="tonal">Newly launched</v-chip> 
<p style="color: #1E1E1E;
font-size: 40px;
font-weight: 600;
line-height: 140%; /* 56px */
letter-spacing: -1.2px;" class="mt-3 mb-2">{{item.title}}</p>
<p style="width: 345px;
color:#969696;
font-size: 16px;
font-weight: 500;
line-height: 140%; /* 22.4px */
letter-spacing: -0.48px;">Lorem ipsum dolor sit amet consectetur et nibh id aliquam proin.</p>
            <div class="d-flex mt-4">
            <v-avatar size="40"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png"></v-img></v-avatar>
            <div style="cursor: pointer;" @click="$router.push('/vendor_page')" class="ml-2 ">
                <p style="color: #1E1E1E;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.14px;">Genevieve Obukeme</p>
    <p style="color: #969696;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.12px;">Accra, Ghana🇬🇭</p>
            </div>
            </div> 
        </div> 
            <v-row class="align-end">
                <v-col v-for="(n, i) in item.items" :key="i" cols="6">
                    <product-component :showVendor="false" :short="true"  :index="0" :item="n" />
                </v-col>
            </v-row>
            </v-col>
        </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            item:   {
        name: 'Orange colored ankara scarf for women designed by Lumi Opeyemi.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png',
        price: '79.00',
        location: 'Accra, Ghana',
        likes: '66',
        oos: true
    }
        }
    },
    props:['item'],
    methods: {
        selectCategory(n) {
            this.select = n
        }
    }
}
</script>