<template >
  <div v-if="stepsCompleted >= 1 && stepsCompleted < 2" class="w-100 position-fixed rounded-xl pa-4" style="background-color: #FDF5ED; z-index: 100; top: 5px; left: 5px; right: 5px;">
    <div class="d-flex align-center justify-space-between px-10">
        <div cols="4">
            <div class="d-flex align-center ga-5">
                <div class="d-flex align-center justify-center" style="background-color: #F9E5CE; border-radius: 50%; width: 45px; height: 45px; padding: 8px;">
                    <v-img aspect-ratio="1/1" height="100%" cover src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719461901/Settings_x2kdu9.png"></v-img>
                </div>
                <div>
                    <h3 style="color: #C5912C; font-weight: 700; font-size: 16px;">Unfinished Business</h3>
                    <p style="color: #333333; font-size: 15px; font-weight: 500;">There's still some stuff left in your business settings</p>
                </div>
            </div>
        </div>
        <div cols="4">
            <div class="d-flex align-center ga-5">
                <div class="text-center">
                    <v-progress-circular :model-value="progress" :rotate="360" :size="45" :width="3" bg-color="#90BEAA" color="#00966D">
                    <template v-slot:default> 
                        <div class="d-flex justify-center align-center" style="width: 45px; height: 45px; border-radius: 50%; padding: 10px; background-color: #CBDED6;">
                            <v-img cover height="20" aspect-ratio="1/1" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719461883/Hourglass_vpkuto.png"></v-img>
                        </div>
                    </template>
                    </v-progress-circular>
                </div>
                <div>
                    <p style="color: #333333; font-weight: 600; font-size: 16px;">{{stepsCompleted}}/2 steps completed</p>
                </div>
            </div>
        </div>
        <div cols="4">
            <div @click="navigateToNextStep()" class="d-flex align-center justify-center ga-1" style="cursor: pointer;">
                <p  style="color: #0E5EC1; font-weight: 600; font-size: 16px;">Tap to complete your business settings</p>
                <div>
                    
                </div>
                <div style="width: 30px;">
                    <v-img height="20" cover src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719462523/Forward_uzsfxd.png"></v-img>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useVendorStore } from '~/stores/vendorStore';

    const vendorStore = useVendorStore();
    const router = useRouter();

    const stepsCompleted = computed(() => {
    let count = 0;
    if (vendorStore.vendor.complete_setup === 1) count++;
    if (vendorStore.vendor.vendor_details?.policy) count++;
    return count;
    });

    const progress = computed(() => (stepsCompleted.value / 3) * 100);

    const navigateToNextStep = () => {
    if (vendorStore.vendor.complete_setup !== 1) {
        router.push('/vendor/dashboard/Profile Setup');
    }else if (!vendorStore.vendor.vendor_details?.policy) {
        router.push('/vendor/dashboard/Settings/Policies');
    } 
};
watch(() => stepsCompleted.value, () => {
    if (stepsCompleted.value == 2){
        vendorStore.showNotif = false
    }
})

</script>

