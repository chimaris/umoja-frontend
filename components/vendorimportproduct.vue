<template>
    <v-container class="pt-0 pb-12">

        <p style="color: #333;
font-size: 24px;
font-weight: 600;" class="my-6">Import Product</p>
        <v-row>
            <v-col cols="12" md="4">
                <v-sheet class="cardStyle pb-2 mb-4">
                    <p 
                    style="color: #333;
font-size: 20px;
font-weight: 600;" class="mt-4 mb-6">Import definitions</p>
        <p class="inputLabel">Select setting</p>             
     <v-select hide-details="" prepend-inner-icon="mdi mdi-lock"   append-inner-icon="mdi mdi-chevron-down"  placeholder="Default" density="compact"  >
         </v-select>
         <v-switch inset color="green"  hide-details>
            <template v-slot:label>
      <p style="color:#333;
font-size: 14px;
font-weight: 500;">Save as new preset</p>
    </template>
         </v-switch>
                </v-sheet>
                <v-sheet class="cardStyle pb-2">
                    <p 
                    style="color: #333;
font-size: 20px;
font-weight: 600;" class="mt-4 mb-6">Import settings</p>
        <p class="inputLabel">Data Source</p>             
     <v-select hide-details=""  append-inner-icon="mdi mdi-chevron-down"  placeholder="Shop" density="compact"  >
         </v-select>
     <v-select hide-details="" class="mt-4"  append-inner-icon="mdi mdi-chevron-down"  placeholder="Shop" density="compact"  >
         </v-select>
         <v-switch inset color="green"  hide-details>
            <template v-slot:label>
      <p style="color:#333;
font-size: 14px;
font-weight: 500;">Body mode</p>
    </template>
         </v-switch>
         <p class="inputLabel">Pictures</p>             
     <v-select hide-details=""  append-inner-icon="mdi mdi-chevron-down"  placeholder="Do not read" density="compact"  >
         </v-select>
         <v-text-field  class="mt-4" placeholder="Search terms seperated by commas" density="comfortable"  >
  </v-text-field>
  <v-switch inset color="green"  hide-details>
            <template v-slot:label>
      <p style="color:#333;
font-size: 14px;
font-weight: 500;">Only import new articles</p>
    </template>
         </v-switch>
         <v-switch inset color="green"  hide-details>
            <template v-slot:label>
      <p style="color:#333;
font-size: 14px;
font-weight: 500;">Enable inventory reconcilation</p>
    </template>
         </v-switch>
                </v-sheet>
            </v-col>
            <v-col cols="12" md="8">
                <v-sheet class="cardStyle">
                    <p 
                    style="color: #333;
font-size: 20px;
font-weight: 600;" class="mt-4 mb-6">Data Selection</p>  
  <v-table style="    height: 80%; !important;
    overflow: scroll;">
    <thead>
      <tr style="background: #F8F8F8;
border-radius: 6px;" class="  rounded-lg">
 
        <th  style="font-size: 14px;width: 100px;" class="  font-weight-medium  text-center">
         Property
        </th>
        <th style="font-size: 14px;" class=" text-center px-1  font-weight-medium">
          Don't Import
        </th>
        <th style="font-size: 14px;" class=" text-center px-1  font-weight-medium">
          Always Import
        </th>
        <th style="font-size: 14px;" class=" text-center px-1  font-weight-medium">
          Import if <br> not empty
        </th>
        <th style="font-size: 14px;" class=" text-center px-1  font-weight-medium">
            Only when <br> empty in Umoja
        </th>
  
      </tr>
    </thead>
    <tbody>
        <!-- @click="chosen = item.sn" -->
        <tr  
       
        v-for="item in items"
        :key="item"
        >
    
        <td  class="tableLight pl-5 px-1">
        <span style="color: #333;
font-size: 14px;
font-weight: 500;">
          {{item}}
        </span> 
        </td>
        <td  class="tableThick px-1"> 
            <div >
            <v-radio color="green" class="d-flex w-100 justify-center" v-model="rad"></v-radio>
        </div>
    </td>
        <td  class="tableThick px-1"> 
            <div >
            <v-radio color="green" class="d-flex w-100 justify-center" :value="true"></v-radio>
        </div>
    </td>
        <td  class="tableThick px-1"> 
            <div >
            <v-radio color="green" class="d-flex w-100 justify-center" :value="true"></v-radio>
        </div>
    </td>
        <td  class="tableThick px-1"> 
            <div >
            <v-radio color="green" class="d-flex w-100 justify-center" :value="true"></v-radio>
        </div>
    </td>
    
    </tr>
</tbody>
</v-table>
                </v-sheet>
            </v-col>
        </v-row>
        <v-divider class="my-8"></v-divider>
        <div class="d-flex justify-end">
            <v-btn  disabled size="large" color="green" flat>
<span style="font-size: 14px;
font-weight: 600;
line-height: 20px;">

    Save Draft Order
</span>
</v-btn>
        </div>
    </v-container>
</template>
<script>
export default {
     data() {
          return {
            rad:true,
            items: [
                'Title',
                'Description',
                'Short Description',
                'Invoice text',
                'Material',
                'Tags',
                'Main features',
                'Purchasing price',
                'Price',
                'Duration',
                'SKU',
                'Weight',
                'Tax rate',
                'Unit / units per item',
                'Manufacturer',
                'Category assignments',
                'Shipping profile',
                'Export Description',
            ]
          }
     },
  
}
</script>