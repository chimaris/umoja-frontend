<template>
    <v-container style="max-width: 1330px;" class="w-100 mt-5 pt-0 pr-8 pl-5">


      <div class="d-flex justify-center">
<v-row style="">
<v-col cols="12" lg="4" >

    <v-card color="green" height="260" min-width="300px" class=" pt-4 px-4 mx-auto cardStyle" width="100%" style=""  flat >
        <div class="d-flex  align-center">
            <p style="font-weight: 400;
font-size: 17px;
line-height: 25px;
letter-spacing: -0.01em;
color: #EDF0EF;"
            >Total Revenue made this year (2023)</p>

     

        </div>
<div class="d-flex align-center  justify-space-between">
    <h1 style="font-weight: 600;
font-size: 40px;
line-height: 60px;
color: #EDF0EF; ">€‎ 23,512.07</h1>
    <div class="pa-4" style="position: absolute;bottom: 0;width: 100%;left: 0;">
      <v-progress-linear class="rounded-xl" model-value="80" :height="5"></v-progress-linear>
      <div class="d-flex pt-3 justify-space-between">
        <p class="tiny">84%</p>
        <p class="tiny">€ 65M Last year</p>
      </div>
    </div>
</div>
    </v-card>
</v-col>
<v-col cols="12" lg="4" >

    <v-card color="" height="260" min-width="300px" class=" pt-4 px-4 mx-auto cardStyle" width="100%" style=""  flat >
           

            <div class="d-flex  justify-space-between">
              <p style="font-weight: 600;
font-size: 24px;
line-height: 30px;
letter-spacing: -0.03em;
color: #333333;"
            >Most Purchased Category</p>
            <v-btn size="small" variant="text" color="#1361F4" class="" >
View All            </v-btn>
        </div>

<div style="position: absolute;bottom: 16px;width: 100%;left: 0;" class="">
   
    <div v-for="n in items" :key="n" class="px-4 py-1" >
      <div class="d-flex pb-2 align-center justify-space-between">
       
       <div class="d-flex align-center">
        <v-avatar size="30" rounded="lg"><v-img :src="n.img"></v-img></v-avatar>
         <p class="ml-2 tiny2">{{n.name}}</p>
       </div>
        <p class="tiny2">€ 0.{{n.sales}}M</p>
      </div>
      <v-progress-linear class="rounded-xl" :color="n.color" :model-value="n.sales" :height="5"></v-progress-linear>
    </div>
  </div>
    </v-card>
</v-col>
<v-col cols="12" lg="4" >

    <v-card color="" height="260" min-width="300px" class=" pt-4 px-4 mx-auto cardStyle" width="100%" style=""  flat >
           

            <div class="d-flex justify-space-between">
              <p style="font-weight: 600;
font-size: 24px;
line-height: 30px;
letter-spacing: -0.03em;
color: #333333;"
            >Most Popular Product</p>
            <v-btn size="small" variant="text" color="#1361F4" class="" >
View All            </v-btn>
        </div>

<div style="position: absolute;bottom: 16px;width: 100%;left: 0;" class="">
   
    <div v-for="n in items2" :key="n" class="px-4 py-1" >
      <div class="d-flex pb-2 align-center justify-space-between">
       
       <div class="d-flex align-center">
         <p class="ml-2 tiny3">{{n.name}}</p>
       </div>
        <p class="tiny2">€ 0.{{n.sales}}M</p>
      </div>
      <v-progress-linear class="rounded-xl" :color="n.color" :model-value="n.sales" :height="5"></v-progress-linear>
    </div>
</div>
    </v-card>
</v-col>

</v-row>
      </div>

<v-row class="py-6">
    <v-col  cols="12" lg="6">
        <v-card  class="mx-auto cardStyle" width="100%" style=""  flat >
         <div class="d-flex justify-space-between">
            <div>
                <p class="mb-2 timernum d-flex align-center text-left">By Product</p> 
              </div>
              
              <v-menu width="auto">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" style="    border: 1px solid #e5e5e5;
" variant="outlined" class="text-grey-darken-3" >
                Last 7 Days <v-icon icon="mdi mdi-chevron-down"></v-icon>
              </v-btn>
  
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in ['Last 7 days', 'This Month', 'This Year', 'Custom']"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
              
            </div>
            <div class="d-flex align-center">
              <p  v-for="n in items" class="mr-2 lightText3"><v-icon size="9.6" :color="n.color" icon="mdi mdi-circle"></v-icon> {{n.name}} </p>
            </div> 
           <!-- <revenuegraph /> -->
           <v-img class="mt-12 mb-5" src="https://res.cloudinary.com/payhospi/image/upload/v1686915235/Untitled_kwgtyz.png" width="100%" height="auto"></v-img>
  </v-card>
    </v-col>
    <v-col  cols="12" lg="6">
        <v-card  class="mx-auto cardStyle" width="100%" style=""  flat >
         <div class="d-flex justify-space-between">
            <div>
                <p class="mb-2 timernum d-flex align-center text-left">By Category</p> 
              </div>
         
                   
              <v-menu width="auto">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" style="    border: 1px solid #e5e5e5;
" variant="outlined" class="text-grey-darken-3" >
               This year <v-icon icon="mdi mdi-chevron-down"></v-icon>
              </v-btn>
  
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in ['Last 7 days', 'This Month', 'This Year', 'Custom']"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
            </div>
            <div class="d-flex align-center">
              <p  v-for="n in items2" class="mr-2 lightText3"><v-icon size="9.6" :color="n.color" icon="mdi mdi-circle"></v-icon> {{n.name}} </p>
            </div> 
           <!-- <revenuegraph /> -->
           <v-img class="mt-12 mb-5" src="https://res.cloudinary.com/payhospi/image/upload/v1686903729/Group_1175_pm9ipd.png" width="100%" height="auto"></v-img>
  </v-card>
    </v-col>
  
    <v-col cols="12">
        <v-card  class="mx-auto cardStyle" width="100%" style=""  flat >
          <div class="d-flex justify-space-between">
          <div>

            <h4 class="mb-2 timernum d-flex align-center text-left">Revenue Growth <span class="ml-2 lightText">(EUR)</span></h4> 
            <p style="font-weight: 600;
font-size: 48px;
line-height: 60px;
color: #333333;">€ 534,780.00 </p>
          </div>
        
    <v-chip-group variant="outlined"
    mandatory style="font-size: 14px;
line-height: 17px;font-weight: 600!important;
letter-spacing: 0.03em;
text-transform: uppercase;
color: #333333;" class=" text-capitalize"
v-model="chip"
          selected-class=" chipselected2"
          >
          <v-chip  :class="chip == tag? 'chipselected2':''"  style="border: 1px solid #CED2D6
;font-size: 14px;font-weight: 600!important;"
          size="x-large"  class=" pa-4"
            v-for="tag in ['Last 24 hours','Last 7 days', 'This Month', 'This Year']"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>  
        </div>
           <!-- <revenuegraph /> -->
           <v-img class="mt-8 " src="https://res.cloudinary.com/payhospi/image/upload/v1686915796/Frame_548_s0rovu.png" width="100%" height="auto"></v-img>
  </v-card>
    </v-col>
  


</v-row>
</v-container>

</template>
<style>
 .v-rating__item .v-btn{
    scale: 0.8;
    margin-left: -13px;

}
.reviewstab .v-carousel .v-btn--icon .v-icon{
font-size: 9px;
}
.reviewstab .v-carousel--hide-delimiter-background .v-carousel__controls {
    bottom: -33px;
}
.reviewstab .v-carousel .v-btn--icon.v-btn--active .v-icon{
color: orange;
}
.reviewstab .rev .v-rating__item .v-btn{
  scale: 2!important;
    margin-left: -13px!important;


}

</style>
<script>
export default {
  data() {
    return {
        menu:true,
        rating:4,
        show_more:false,
   text:'1',
   chosen:'',
   chip: 'Last 24 hours',
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
   countries:[
    {
    name: 'united states',
    growth: 38,
    img: 'https://res.cloudinary.com/payhospi/image/upload/v1685693849/Flags_q0wr5w.png'
   },
    {
    name: 'united kingdom',
    growth: 27,
    img: 'https://res.cloudinary.com/payhospi/image/upload/v1685693849/Flags_1_tjfkib.png'
   },
    {
    name: 'France',
    growth: 20,
    img: 'https://res.cloudinary.com/payhospi/image/upload/v1685693849/Flags_2_gq15ze.png'
   },
    {
    name: 'Argentina',
    growth: 16,
    img: 'https://res.cloudinary.com/payhospi/image/upload/v1685693849/Flags_3_hqmdge.png'
   },
],
  items:[
    {
      name: 'Buju Golden Bracelet',
      sales: 80,
      color: '#CBDED6',
      img:'https://res.cloudinary.com/payhospi/image/upload/v1686877087/Rectangle_1916_s0h5tz.png'
    },
    {
      name: 'Ankara Sneaker',
      sales: 20,
      color: '#00966D',
      img:'https://res.cloudinary.com/payhospi/image/upload/v1686877087/Rectangle_1916_1_lacsng.png'
    },
    {
      name: 'Multi-Colored Kente',
      sales: 90,
      color: '#005A41',
      img:'https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png'
    },
  ],                                                                                    
  items2:[
    {
      name: 'Clothing',
      sales: 70,
      color: '#F38218',
      img:'https://res.cloudinary.com/payhospi/image/upload/v1686877087/Rectangle_1916_s0h5tz.png'
    },
    {
      name: 'Shoes',
      sales: 40,
      color: '#FADACC',
      img:'https://res.cloudinary.com/payhospi/image/upload/v1686877087/Rectangle_1916_1_lacsng.png'
    },
    {
      name: 'Bracelets',
      sales: 50,
      color: '#914E0E',
      img:'https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png'
    },
  ],                                                                                    
   imgs:['https://res.cloudinary.com/payhospi/image/upload/v1685693850/Rectangle_1895_u1foj0.png','https://res.cloudinary.com/payhospi/image/upload/v1685693851/Rectangle_1896_x07ole.png','https://res.cloudinary.com/payhospi/image/upload/v1685693851/Rectangle_1897_ca06qx.png'],
 
    }
},

}
</script>