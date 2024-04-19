<template>
         <div style="display: flex; align-items: center; gap: 10px;">
            <v-icon style="font-size: 4rem; color: red;" icon="mdi mdi-file-document"></v-icon>
            <div>
              <p style="font-weight: 500; color: #344054;">{{ file.name }}</p>
              <span style="font-size: 15px; font-weight: 300; color: #475467;">{{ file.loading }}% uploaded</span>
            </div>
          </div>
          <v-progress-circular color="#7F56D9" :model-value="file.loading"></v-progress-circular>
</template>

<script setup>
  import {defineProps} from "vue"

  const props = defineProps({
    file: {
      type: Object,
      required: true
    }
  })
</script>

