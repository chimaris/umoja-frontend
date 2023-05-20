<template>
  <v-app>
    <div class="mainbg">

    <Header />
    <v-container id="hero" class="" style="min-height: calc(100vh - 96px)">
      <v-row class="mt-12">
        <v-col class="mb-12 pb-12 px-0" id="herotext" style="position: relative" :cols="cols[1]">
          <h1 class=""
            style="color:#333333;
              font-family: ;
              font-style: normal;
              font-weight: 900;
              font-size: 60px;text-indent:190px
            "
          >
          <span style="overflow:visible;position:absolute; left:-195px;" >
<v-img eager width="165" style="    width: 223px;
    position: absolute;
    left: 161px;
    height: 100%;" src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229325/svg_jjolmp.png"></v-img>
            <v-carousel
     class="d-flex" cycle :interval="3000"
    height="auto" width=""
    :hide-delimiters="true"
    :show-arrows="false"
  >
    <v-carousel-item 
      v-for="(slide, i) in ['Buy   ', 'Sell   ', 'Deilver']"
      :key="i"
    >
    
      <span style="width:100px">

          {{slide}}
      </span>
    </v-carousel-item>
    
</v-carousel>
</span>
Quality African products from any part of the world.
          </h1>
          <p class="mt-6 mb-0 headerText">
            The world's first and largest e-commerce platform with a wide
            variety of authentic and sustainable African products.
          </p>
          <p style="color:#1A423B" class="mt-6 headerText">
            Click on any country on the map to explore and discover different
            vendors from across Africa.
          </p>
          <div style="position:relative" class="mt-8">
            <v-btn flat to="/vendor/profile" color="green" size="x-large"
              >Start Exploring <v-avatar rounded="0" size="20" class="ml-4"><v-img src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684373214/Vector_iu4lgn.png"></v-img></v-avatar></v-btn>
            <v-btn to="/user/login" flat variant="text" size="x-large" class="ml-2 howit"><span style="text-decoration:underline">

                How it works
            </span>
            </v-btn>
         
            <img
              class="arrowimage"
              src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684307877/Arrow_01_a5rxq0.png"
            />
        </div>
        </v-col>
        <v-col id="heromap" style="" :cols="cols[2]">
          <v-img eager
            style="position: relative;overflow:visible;"
            class="pa-3"
            contain min-width="700px"
            height="auto" @load="placescards = true"
            width="100%"
            src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684303944/African_Map_fmici3.png"
          >
            <div v-if="placescards"
              class="d-flex justify-center"
              style="width: 250.88px; scale: 0.9;  top: 14%;
    left: 14%; position: absolute"
            >
              <v-card flat class="transparent africacard">
                <div class="pa-5 d-flex align-center justify-center w-100">
                  <div>
                    <v-img
                      width="30px"
                      style="border-radius: 5px !important"
                      height="auto"
                      src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/NG_-_Nigeria_c8g2on.png"
                    />
                  </div>
                  <p class="ml-3">Nigeria</p>
                </div>
                <v-divider></v-divider>

                <div class="d-flex px-5 pt-4 pb-3 justify-center">
                    <div class="list">
                    <v-avatar class="" size="38" :key="i" v-for="(n, i) in images"
                      ><v-img
                        :src="n"
                      ></v-img
                    ></v-avatar>
                    <v-avatar color="green">
                      <span style="font-size: 13px">+1499</span></v-avatar
                    >
                  </div>
                </div>

                <div class="d-flex justify-center">
                  <v-btn size="small" color="blue" variant="text" flat>
                    <span
                      style="
                        font-size: 14px;
                        text-transform: none;
                        color: #0062bc;
                      "
                    >
                      See vendors in this area
                    </span>
                    <v-avatar class="ml-2" size="25" rounded="0"
                      ><v-img
                        src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684302533/Forward_ob8zzj.png"
                      ></v-img
                    ></v-avatar>
                  </v-btn>
                </div>
              </v-card>
              <div class="pointer"></div>
            </div>
            <div v-if="placescards"
              class="d-flex justify-center"
              style="width: 250.88px;    top: -10%;
    right: 23%;
    scale: 0.9; position: absolute"
            >
              <v-card flat class="transparent africacard">
                <div class="pa-5 d-flex align-center justify-center w-100">
                  <div>
                    <v-img
                      width="30px"
                      style="border-radius: 5px !important"
                      height="auto"
                      src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229323/EG_-_Egypt_mlkkl6.png"
                    />
                  </div>
                  <p class="ml-3">Egypt</p>
                </div>
                <v-divider></v-divider>

                <div class="d-flex px-5 pt-4 pb-3 justify-center">
                    <div class="list">
                    <v-avatar class="" size="38" :key="i" v-for="(n, i) in images"
                      ><v-img
                        :src="n"
                      ></v-img
                    ></v-avatar>
                    <v-avatar color="green">
                      <span style="font-size: 13px">+324</span></v-avatar
                    >
                  </div>
                </div>

                <div class="d-flex justify-center">
                  <v-btn size="small" color="blue" variant="text" flat>
                    <span
                      style="
                        font-size: 14px;
                        text-transform: none;
                        color: #0062bc;
                      "
                    >
                      See vendors in this area
                    </span>
                    <v-avatar class="ml-2" size="25" rounded="0"
                      ><v-img
                        src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684302533/Forward_ob8zzj.png"
                      ></v-img
                    ></v-avatar>
                  </v-btn>
                </div>
              </v-card>
              <div class="pointer"></div>
            </div>
            <div v-if="placescards"
              class="d-flex justify-center"
              style="width: 250.88px;    bottom: 7%;
    right: 30%;
    scale: 0.9; position: absolute"
            >
              <v-card flat class="transparent africacard">
                <div class="pa-5 d-flex align-center justify-center w-100">
                  <div>
                    <v-img
                      width="30px"
                      style="border-radius: 5px !important"
                      height="auto"
                      src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_9_cxzweo.png"
                    />
                  </div>
                  <p class="ml-3">South Africa</p>
                </div>
                <v-divider></v-divider>

                <div class="d-flex px-5 pt-4 pb-3 justify-center">
                    <div class="list">
                    <v-avatar class="" size="38" :key="i" v-for="(n, i) in images"
                      ><v-img
                        :src="n"
                      ></v-img
                    ></v-avatar>
                    <v-avatar color="green">
                      <span style="font-size: 13px">+2403</span></v-avatar
                    >
                  </div>
                </div>

                <div class="d-flex justify-center">
                  <v-btn size="small" color="blue" variant="text" flat>
                    <span
                      style="
                        font-size: 14px;
                        text-transform: none;
                        color: #0062bc;
                      "
                    >
                      See vendors in this area
                    </span>
                    <v-avatar class="ml-2" size="25" rounded="0"
                      ><v-img
                        src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684302533/Forward_ob8zzj.png"
                      ></v-img
                    ></v-avatar>
                  </v-btn>
                </div>
              </v-card>
              <div class="pointer"></div>
            </div>
            <div v-if="placescards"
              class="d-flex justify-center"
              style="width: 250.88px;       bottom: 25%;
    right: 0%;
    scale: 0.9; position: absolute"
            >
              <v-card flat class="transparent africacard">
                <div class="pa-5 d-flex align-center justify-center w-100">
                  <div>
                    <v-img
                      width="30px"
                      style="border-radius: 5px !important"
                      height="auto"
                      src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_8_ftnhqn.png"
                    />
                  </div>
                  <p class="ml-3">Madagscar</p>
                </div>
                <v-divider></v-divider>

                <div class="d-flex px-5 pt-4 pb-3 justify-center">
                  <div class="list">
                    <v-avatar class="" size="38" :key="i" v-for="(n, i) in images"
                      ><v-img
                        :src="n"
                      ></v-img
                    ></v-avatar>
                    <v-avatar color="green">
                      <span style="font-size: 13px">+476</span></v-avatar
                    >
                  </div>
                </div>

                <div class="d-flex justify-center">
                  <v-btn size="small" color="blue" variant="text" flat>
                    <span
                      style="
                        font-size: 14px;
                        text-transform: none;
                        color: #0062bc;
                      "
                    >
                      See vendors in this area
                    </span>
                    <v-avatar class="ml-2" size="25" rounded="0"
                      ><v-img
                        src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684302533/Forward_ob8zzj.png"
                      ></v-img
                    ></v-avatar>
                  </v-btn>
                </div>
              </v-card>
              <div class="pointer"></div>
            </div>
          </v-img>
        </v-col>
      </v-row>
      <div class="d-">
          <div  class=" d-flex">

              <p class="bg-green rounded-t-lg pa-8 px-12">Buy</p>
            </div>
          
          <div >
          <v-row class="d-flex mb-8 justify-space-between align-center">
        <v-col  class="d-flex" :cols="cols[8]">
            <v-sheet class="d-flex rounded-lg  pa-8">
                <div class="pr-6 d-flex"  v-for="(n, i) in seachbtns" :key="n.title">
<div style="width:201px">

                <p>{{n.title}}</p>
                <v-menu
                style="width:90%"
      transition="scale-transition"
    >
      <template v-slot:activator="{ props }">
        <p  style="width:90%;font-size:14px"
          variant="text" class="d-flex text-grey-darken-1 justify-space-between px-0"
          v-bind="props"
        >
          {{n.value}} <v-icon icon="mdi mdi-chevron-down"></v-icon>
        </p>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, o) in items[i]"
          :key="o"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>  </div>
   
    <v-divider inset vertical></v-divider>
           </div>
           <v-btn variant="text">
            <v-img width="30px" src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684311511/Magnifer_fexs3d.png"></v-img>
           </v-btn>
            </v-sheet>
        </v-col>
        <v-col class="d-flex justify-end" :cols="cols[9]">
          <v-btn-toggle mandatory model-value="2" v-model="mods" style="background:rgb(255 255 255 / 36%)" rounded="xl">
            <v-btn :style="mods == 2 ? '    background: transparent!important;': ''" value="1"    style="border-radius: 50%!important;
" icon="mdi mdi-weather-night"></v-btn>
            <v-btn :style="mods == 1 ? '    background: transparent!important;': ''" value="2" style="border-radius: 50%!important;
" icon="mdi mdi-weather-sunny"></v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>    
      </div>
      </div>

    </v-container>    </div>

  </v-app>
</template>
<script>
import { useTheme } from "vuetify";

export default {
  data() {
    return {
        placescards:false,
        mods:1,
       images:['https://res.cloudinary.com/dkbt6at26/image/upload/v1684302547/Rectangle_8_bjr2cm.png',
    'https://res.cloudinary.com/dkbt6at26/image/upload/v1684302547/Rectangle_7_h4lxnd.png',
'https://res.cloudinary.com/dkbt6at26/image/upload/v1684302543/Rectangle_6_1_qlrzss.png',
'https://res.cloudinary.com/dkbt6at26/image/upload/v1684302543/Rectangle_5_ucb5ag.png',
'https://res.cloudinary.com/dkbt6at26/image/upload/v1684302543/Rectangle_4_tzf2yf.png',
'https://res.cloudinary.com/dkbt6at26/image/upload/v1684298703/profile_ievpza.png'],
        eComCategories: ['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty & Personal Care', 'Sports & Outdoors', 'Books & Media', 'Toys & Games', 'Automotive', 'Health & Wellness', 'Jewelry & Accessories'],

     countries:[ {
    name: ['Algeria', 'Nigeria', 'South Africa'],
    states: ['Algiers', 'Oran', 'Constantine', 'Annaba', 'Batna', 'Blida']
  },
  {
    name: 'Nigeria',
    states: ['Lagos', 'Kano', 'Abuja', 'Ibadan', 'Kaduna', 'Port Harcourt']
  },
  {
    name: 'South Africa',
    states: ['Gauteng', 'KwaZulu-Natal', 'Western Cape', 'Eastern Cape', 'Free State', 'Mpumalanga']
  }],
        theme: useTheme(),
    };
  },
  computed: {
    items(){
    
    return [
            this.countries[0].name,
            this.countries[1].states,
            this.eComCategories
        ]},
    seachbtns(){
        return [
        { title: 'Country',
    value: 'Nigeria'},
        { title: 'State',
    value: 'Enugu Nigeria'},
        { title: 'Category',
    value: 'Fashion and Design', content: this.eComCategories}]},
    cols() {
      const { lg, sm, md } = this.$vuetify.display;
      return lg
        ? [4, 6, 6, 6, 4, 8, 4, 3, 10, 2]
        : md
        ? [4, 6, 6, 12, 6, 8, 4, 3, 10, 2]
        : sm
        ? [6, 12, 12, 12, 12, 12, 12, 12, 12]
        : [6, 12, 12, 12, 12, 12, 12, 12, 12];
    },
  },
  methods: {
    toggleTheme() {
      this.theme.global.name.value = this.theme.global.current.value.dark
        ? "light"
        : "dark";
    },
  },
};
</script>
