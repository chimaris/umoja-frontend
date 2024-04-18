<template>
     <v-card  width="254" style="overflow: visible;" flat class="bg-white parent-card rounded-lg mb-2">
        <v-img class=" bg-grey-lighten-4" cover style="border-radius: 16px;" width="100%" height="237" >
        </v-img>
<div class="px-4">

        <v-avatar style="    margin-top: -37px;" size="67">
            <v-img class=" bg-grey-lighten-4" cover style="border-radius: 16px;" width="100%" height="237" >
        </v-img>
        </v-avatar>
     
      <p style="width: 62%;height: 20px;
    " class="d-flex my-1 mt-4 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>
      <div class="d-block   mt-1">
   <div class="d-flex align-center">
               <p style="width: 30%;height: 14px;
    " class="d-flex my-1 mt-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>
       <v-icon class="mx-1" size="5" color="grey-lighten-4" icon="mdi mdi-circle"></v-icon>
    
                       <p style="width: 30%;height: 14px;
    " class="d-flex my-1 mt-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>
   </div>
    </div> 
   <p style="font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    " class="d-flex text-grey-lighten-2 mb-1  pb-0 pt-1 align-center">
        <v-rating readonly
        model-value="0"
        color="grey-lighten-2"
        active-color="#E7CE5D"
        class="rts" density="compact"
        size="x-small"
        ></v-rating><span style="margin-left:3px;margin-top: 3px ;" >(0)</span> 
    </p>
    <p style="width: 90%;height: 12px;
    " class="d-flex my-1 mt-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>
  </div>

            
            </v-card>
</template>
<script>
export default {
    props: ['vendorShow', 'short'],
};
</script>