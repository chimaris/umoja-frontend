<template>
    <v-card flat width="290"  class="bg-transparent  rounded-lg mb-2">
        <v-img class="rounded-lg bg-grey-lighten-4"  width="100%" :height="short?'221px': '303px'" >
       </v-img>
 
   <p style="width: 100%;height: 14px;
    " class="d-flex my-2 mt-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>
   <p style="width: 60%;height: 14px;
    " class="d-flex my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>
   <p style="width: 50%;height: 12px;
    " class="d-flex my-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>
   <!-- <p style="width: 40%;height: 10px;
    " class="d-flex mt-2 pb-0  bg-grey-lighten-4 rounded-lg  align-center">
   </p> -->

    <div v-if="vendorShow" >
    <div class="d-flex mt-4">
        <v-avatar size="40"><v-img class="bg-grey-lighten-4" ></v-img></v-avatar>
        <div  class="ml-2 ">
      
  <p style="width: 150px;height: 14px;
    " class="d-flex my-1 mt-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p> 
    <p style="width: 60%;height: 12px;
    " class="d-flex my-1 mt-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>
        </div>
        </div>
        <v-divider color="#a4a4a4" class="my-4"></v-divider>
    </div>
                          <div class="d-flex align-end justify-space-between">
                <div class="">
                    <p style="width: 80px;height: 24px;
    " class="d-flex my-1 mt-2 pb-0 bg-grey-lighten-4 rounded-lg  align-center">
   </p>
                </div>
                <v-btn width="100"  rounded="xl"  style="
    border-radius: 6px;"  color="grey-lighten-4"  flat  class="parent-btn ml-2">
                    
                </v-btn>
    
                </div>
            </v-card>
</template>
<script>
export default {
    props: ['vendorShow', 'short'],
};
</script>