<template>
    <v-card width="100%" flat class="cardStyle pa-4 pb-3">
      <div class="ma-0 d-flex">
        <v-avatar size="45" class="skeleton-avatar">
          <v-skeleton-loader type="avatar" />
        </v-avatar>
  
        <div class=" w-100" style="min-width: 0">
          <div class="d-flex justify-space-between align-center w-100">
            <div class="d-flex align-center">
              <p style="width: 100px" class="text-truncate ma-0">
                <v-skeleton-loader type="text" width="100px" />
              </p>
              <v-icon class="mr-1" size="3" color="grey-lighten-2" icon="mdi mdi-circle"></v-icon>
              <p style="font-size: 11px; font-weight: 400">
                <v-skeleton-loader type="text" width="60px" />
              </p>
            </div>
            <v-icon icon="mdi mdi-dots-horizontal"></v-icon>
          </div>
  
          <div class="d-block">
            <div class="d-flex align-center">
              <v-skeleton-loader type="text" width="100px" />
              <v-icon class="" size="3" color="grey-lighten-1" icon="mdi mdi-circle"></v-icon>
              <div class="text-truncate" style="color: #1e1e1e; font-size: 11px !important; font-weight: 400">
                <v-skeleton-loader type="text" width="100px" />
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <v-skeleton-loader type="image" width="100%" height="300px" />
  
      <p style="color: #1e1e1e; font-size: 14px; font-weight: 400" class="text-wrap">
        <v-skeleton-loader type="text" width="100%" />
      </p>
  
      <p style="color: #1e1e1e; cursor: pointer; font-size: 14px; font-weight: 400" class="text-wrap mt-0">
        <v-skeleton-loader type="text" width="50px" />
      </p>
  
      <div class="d-flex  align-center justify-space-between">
        <div class="d-flex align-center">
          <v-icon size="19" icon="mdi mdi-heart"></v-icon>
          <p style="color: #1e1e1e; font-size: 11.822px; font-weight: 400; line-height: 26.486px;">
            <v-skeleton-loader type="text" width="20px" />
          </p>
        </div>
        <div>
          <v-img width="19" height="19" :src="getCloudinaryImageUrl('https://res.cloudinary.com/dd26v0ffw/image/upload/v1717990442/umoja/export_n0gjxv_u56e1i.svg', 19)" />
        </div>
      </div>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "SkeletonCard",
  };
  </script>
  

  
 
  
 
  