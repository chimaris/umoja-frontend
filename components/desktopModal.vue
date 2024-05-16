<template>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <p>Please use a desktop computer to access the vendor dashboard for the best experience.</p>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
    showModal: {
        type: Boolean,
        required: true
    }
})
const emits = defineEmits(['close'])
function closeModal(){
    emits('close')
}
</script>