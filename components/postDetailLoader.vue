<template>
    <v-card
      style="height: auto; overflow: hidden; position: relative"
      max-width="700px"
      :min-width="$vuetify.display.mobile ? '90vw' : '60vw'"
      class="rounded-lg"
    >
      <v-row style="height: 100vh">
        <!-- Image Placeholder -->
        <v-col cols="12" class="px-0 py-0 pb-0" md="6">
          <div class="skeleton skeleton-img" style="width: 100%; height: 100%;"></div>
        </v-col>
        <!-- Content Placeholder -->
        <v-col cols="12" style="position: relative" class="px-0 py-0" md="6">
          <v-sheet style="height: 100%; overflow: scroll; position: absolute; width: 100%" class="py-2">
            <div class="d-flex px-6 pt-6 pb-4">
              <div class="skeleton skeleton-avatar mr-5"></div>
              <div class="w-100 d-flex justify-space-between">
                <div>
                  <div class="skeleton skeleton-text" style="width: 70%; height: 16px;"></div>
                  <div class="skeleton skeleton-text" style="width: 30%; height: 14px;"></div>
                </div>
                <div class="skeleton skeleton-icon pr-2"></div>
              </div>
            </div>
            <div class="px-6">
              <div class="skeleton skeleton-content" style="height: 50px;"></div>
              <div class="skeleton skeleton-btn py-2"></div>
            </div>
            <v-divider></v-divider>
            <div style="display: flex; flex-direction: column; justify-content: center; width: 100%; align-items: center">
              <div class="skeleton skeleton-title pa-6"></div>
              <div class="skeleton skeleton-card mb-4 w-75"></div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
</template>
<style scoped>
.skeleton {
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 10px;
}

.skeleton-img {
  width: 100%;
  height: 100%;
}

.skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.skeleton-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.skeleton-text {
  height: 16px;
  width: 70%;
}

.skeleton-content {
  height: 50px;
  width: 100%;
}

.skeleton-btn {
  height: 32px;
  width: 100%;
}

.skeleton-title {
  width: 80%;
  height: 24px;
}

.skeleton-card {
  height: 313px;
  width: 100%;
}
</style>