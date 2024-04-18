<template>
    <Header2 />
    <v-divider></v-divider>
    <div style="background-color;">

    <v-container class="mt-4" style="max-width: 1400px;width: 100%;">
        <v-row>
                <v-col cols="12" lg="8" >  
<v-card class="overflow-visible" flat  color="#F7F7F7" min-height="" width="100%">
        <v-card flat style="border-radius: 10px;" class="pt-2 pb-4 px-4">
           <div class="d-flex align-center justify-space-between">

               <h1 style="font-weight: 600;
font-size: 32px;
line-height: 40px;">Cart (3)</h1>
    <v-btn  color="#333" class="red-hover" variant="text"><span class="smallBtn"></span>  <v-icon size="15" class="mr-1 " icon="mdi mdi-trash-can-outline"></v-icon>Remove all</v-btn>

</div>

<v-sheet>
    <v-table class="mt-4" style="    height: 80%; !important;
   overflow: scroll;">
   <thead>
     <tr style="border-radius: 6px;" class="  rounded-lg">
       <th style="
   width: 50px;
" class="  font-weight-medium px-1  text-left">
          <v-checkbox color="green" v-model="selectAll" hide-details ></v-checkbox>
       </th>
       <th  style="font-size: 14px;width: 100px;" class="  font-weight-medium  text-left">
         Product Details
       </th>
       <th style="font-size: 14px;" class=" text-center px-1  font-weight-medium">
         Quantity
       </th>

       <th style="font-size: 14px;" class=" text-right px-1  font-weight-medium">
        Price
       </th>
    
     </tr>
   </thead>
   
   <tbody>
       <!-- @click="chosen = item.sn" -->
       <tr   v-for="item in items"
       :key="item.sn"
       >
       <td  class="text-grey-lighten-1 pl-1 ">   
              <v-checkbox color="green" v-model="item.selected" hide-details></v-checkbox>
       </td>
       <td style="position:relative;font-size: 14px;height: 100px;" 
        >
        <div style="position: ;top: 24px; width: ;">

      <div  v-bind="props"
        class=" d-flex align-start pr-4 pl-1"
        >
          <v-avatar color="grey-lighten-4" style="border-radius: 15px;" class="  mr-3 ml-0" size="100" ><v-img cover :src="item.image"></v-img></v-avatar>
          <div>
            <p class="mb-1" style="font-weight: 600;
font-size: 16px!important;
line-height: 20px;
color: #333333;">The Benin stone sculpture, made of clay in the 1900’s. </p>
            <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #969696;" class="text-truncate">Category: Stone, Art, Sculpting, Carving.</p>
            <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #969696;" class="text-truncate">Location: Lagos Nigeria.</p>
<v-chip size="x-small" color="green" style="font-weight: 500;" class="mt-1" rounded="lg">IN STOCK</v-chip>
          </div>
        </div>
        </div>

       

    </td>
    
   <td style="height: 189px;" class=" align-center d-flex px-1">  
    <div class="text-center w-100  py-8 ">
            <div class="d-flex w-100 justify-center align-center ">
                <v-btn-group
        border width="122"
         rounded="lg"
        divided density="compact"
      >
        <v-btn class="dark-hover" rounded="0">
          <v-icon icon="mdi mdi-minus "></v-icon>
        </v-btn>

        <v-btn  :ripple="false" rounded="0">
         2
        </v-btn>
        <v-btn class="green-hover" rounded="0">
          <v-icon icon="mdi mdi-plus"></v-icon>
        </v-btn>
</v-btn-group>     
</div>
<v-btn  color="#333" variant="text" class="red-hover mt-2"><span class="smallBtn"></span>  <v-icon size="15" class="mr-1" icon="mdi mdi-trash-can-outline"></v-icon>Remove</v-btn>
</div>

          </td>

    
       <td  class="tableLight text-right px-1"><p style="color: #333;
font-size: 16px;
font-style: normal;
font-weight: 600;">€ 5,829.00 </p></td>
   
  </tr>
</tbody>
</v-table>
  
</v-sheet>

</v-card>
       
</v-card>
</v-col>
<v-col cols="12" lg="4">

<v-card style="border-radius: 15px;
border: 1px solid var(--carbon-2, #CECECE);" flat class="pa-6">
<div class="mb-3">
   
<div class="d-flex  pb-3 align-center justify-space-between">
<p style="font-weight: 500;
font-size: 14px;
color: #969696;">Subtotal</p>
    <p style="color: var(--carbon-4, #333);
font-size: 16px;
font-weight: 600;" class="">€ 5,829.00</p>
</div>
<div class="d-flex  pb-3 align-center justify-space-between">
<p style="font-weight: 500;
font-size: 14px;
color: #969696;">Discount</p>
    <p style="color: var(--carbon-4, #333);
font-size: 16px;
font-weight: 600;" class="">€ 0.00</p>
</div>
<hr  class="dashed-2 my-8" />
<div class="d-flex  pb-3 align-center justify-space-between">
<p style="font-weight: 500;
font-size: 14px;
color: #969696;">Grand Total</p>
    <p style="color: var(--carbon-4, #333);
font-size: 24px;
font-weight: 600;" class="">€ 5,829.00 </p>
</div>


<div class="d-flex mt-4 align-center">
    <v-icon class="mr-2" icon="mdi mdi-information" color="green" size="18"></v-icon>
    <p class="textClass text-grey">Delivery fees not Included</p>
</div>

</div>
<v-btn to="/order/checkout" flat block size="x-large" class="mt-8" rounded="xl" color="green"><span style="font-size: 14px;
font-style: normal;
font-weight: 600;"> Checkout Now</span></v-btn>
</v-card>
<v-card style="border-radius: 15px;
border: 1px solid var(--carbon-2, #CECECE);" flat class="mt-6 pa-6">
<p style="color: #333;
font-size: 20px;
font-weight: 600;
line-height: 20px; /* 100% */
letter-spacing: -0.2px;" class="mb-4">Returns are easy</p>

<p style="color:#969696;
font-size: 14px;
font-weight: 500;
">Free return within 15 days for Official Store items and 7 days for other eligible items See more</p>
</v-card>
<v-img style="position: relative;border-radius: 10px;" class="mt-6  shine pt-10 bg-grey-lighten-1 pa-6 rounded-lg" width="100%" max-height="674px" cover eager src="https://res.cloudinary.com/payhospi/image/upload/v1684673782/Rectangle_465_sohqlg.png" height="100%">
    <div  class=" ">
                <h1 style="font-size: 50.4px;
line-height: 53px;" class=" mb-0 text-white font-weight-bold">Nawi’s long
scarf</h1>
                <p class="textClass mb-4 text-white">known to be used by the Nawi people</p>
                <div>
                  <v-btn  rounded="xl" flat to="/vendor/profile" color="orange" 
              ><span class="smallBtn">
                See product
            </span>
        </v-btn>
            <v-btn to="/user/login"  flat variant="text"  class="ml-2 text-white howit"><span style="text-decoration:underline">
                <span class="smallBtn">
                Not now
            </span>
            </span>
            </v-btn>
                </div>
            </div>
            <div v-if="false" class="pa-6" style="position: absolute;bottom:0;left: 0;width: 100%;">
                <v-card style="
background: rgba(0, 0, 0, 0.7);
backdrop-filter: blur(25px); bottom: 0;
/* Note: backdrop-filter has minimal browser support */

border-radius: 20px;" class=" d-flex align-center  pa-4">
<v-avatar size="50" class="mr-4"><v-img class="bg-grey-lighten-2" src="https://res.cloudinary.com/payhospi/image/upload/v1684658586/Frame_481586_piaotu.png"></v-img></v-avatar> 
<p class="text-white">@nawi_the_skulptur_queen</p>
</v-card>     
            </div>
       
</v-img>
</v-col>
</v-row> 

</v-container> 
<product-row :maxwidth="'1400px'" :showVendor="false" title="😎 Recently viewed" />
<product-row :maxwidth="'1400px'" :showVendor="false" title="🎩 Top Selling Items" />
<Mainfooter />

   </div>

</template>
<script>
export default {
  watch: {
    selectAll(value) {
      this.items.forEach(item => {
        item.selected = value
      })
    }
  },
  data() {
    return {
      selectAll: false,
        placescards:false,
        mods:1,
        tab: null,
        chip: 'POPULAR products',
        tags: [
            {
            name: 'POPULAR products',
            image: ''
            },
            {
            name:   'top selling products',
            image: 'seal-variant'
            },
            {
            name: 'products on promo',
            image: 'sale-outline'
            },
            {
            name: 'top auction',
            image: 'trending-up'
            },
      ],
        items:[
            {
              selected:false,  
              name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_dfuzam.png',
                price: '115.32',
                location: 'Accra, Ghana',
                likes: '1.2k'
            },
            {
              selected:false,  
              name: 'Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602010/Rectangle_459_1_wnr1ld.png',
                price: '57.00',
                location: 'Madagascar',
                likes: '456',
                oos: true
            },
          
            {
              selected:false,  
              name: 'Green and brown kente scarf material, Made in Lagos Nigeria..',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602019/Rectangle_459_2_m9thyj.png',
                price: '57.00',
                location: 'Mumbasa, Kenya',
                likes: '456',
            },
            {
              selected:false,  
              name: 'Orange colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_4_w3hzqw.png',
                price: '79.00',
                location: 'Lagos, Nigeria',
                likes: '66',
                oos: true
            },
            {
              selected:false,  
              name: 'Bento Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602018/Rectangle_459_5_y4qlrw.png',
                price: '179.00',
                location: 'Accra, Ghana',
                likes: '966',
            },
            {
              selected:false,  
              name: 'Multi colored ankara scarf for women designed by Lumi Opeyemi.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1684602016/Rectangle_459_3_eoyq3v.png',
                price: '57.00',
                location: 'Mumbasa, Kenya',
                likes: '456',
            },
        
        ]

    };
  },
  computed: {
buttons(){
    return [{
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684591614/umoja/Vector_mgadhr.png',

    },
    {
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/facebook_tup8rq.png',
    },
    {
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/instagram_wogd5x.png',
    },
    {
        icon: 'https://res.cloudinary.com/payhospi/image/upload/v1684592133/umoja/globe-americas_annyvh.png',
    },
]
},
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
filt(text){

var newText = text.length > 50 ? text.slice(0, 50) +'...' : text
   return newText

}
  },
};
</script>