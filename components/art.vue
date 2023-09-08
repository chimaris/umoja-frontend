<template>
    
    <div class="d-flex align-center bg-black text-center justify-center" style="position: relative; height: 100vh;">
        <div style="position: absolute; height: 100vh; width: 100%;">
        <div style="height: 33.333%;" v-for="(n, i) in images" :key="i" class="d-flex">
            <v-img height="100%" cover width="auto" :src="n" v-for="(n, i) in n.images" :key="i"></v-img>
        </div>
    </div>
    <div class="w-100  h-100" style="position: absolute; background-color: black;opacity: 0.7;">
    </div>
    <div style="z-index: 99;" class="mb-8">
        <p style="color: #FFF;
font-size: 120px;
font-weight: 600;
letter-spacing: -3.6px;"> Art is Life</p>
<p style="color: #FFF;
font-size: 20px;
font-weight: 500;
letter-spacing: 4px;
text-transform: uppercase;" class="mb-8">Unleashing Artistry Beyond Boundaries</p>
<v-btn rounded="xl" color="orange" height="44" style="width: 225px;
padding: 12px 20px;">Shop Now</v-btn>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            images: [
                {
                    images: [
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074693/rectangle-22450_eyxedq.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074693/rectangle-22451mj_cdxcsi.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074694/rectangle-22452_i5wnhh.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074695/rectangle-22453_bgo2al.png'
                    ]
                },
                {
                    images: [
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074696/rectangle-22450jh_q76cm0.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074698/rectangle-22451kh_ltabbn.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074698/rectangle-22453mjgf_lsbdjm.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074690/rectangle-22452khgjc_tczutt.png'
                    ]
                },
                {
                    images: [
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074696/rectangle-22451dyig_kcur1m.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074696/rectangle-22452hydyewy_vilxk4.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074699/rectangle-22453hdydhch_ehqtvi.png'
                    ]
                }
            ]
        }
    },
}
</script>