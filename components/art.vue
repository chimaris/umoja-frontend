<template>
    
    <div class="d-flex align-center bg-black text-center justify-center" style="position: relative; height: 100vh;">
        <div style="position: absolute; height: 100vh; width: 100%;">
        <div style="position: relative; height: 100vh; width: 100%;">
        <div style="height: 33.333%;position: relative;" v-for="(n, i) in images" :key="i" >
        <div style="height: 100%;"  :class="'photobanner'+i" class=" d-flex justify-start">
            <v-img height="100%" contain :width="(i == 0 && j == 0) ? '468': 'auto'"  width="auto" :src="n" v-for="(n, j) in n.images" :key="j"></v-img>
            <v-img height="100%" :width="(i == 0 && k == 0) ? '468': 'auto'"  contain width="auto" :src="n" v-for="(n, k) in n.images" :key="k"></v-img>
        </div>
    </div>
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
                        'https://res.cloudinary.com/payhospi/image/upload/v1694773175/rectangle-22450jgfuc675_ehh9oq.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074693/rectangle-22451mj_cdxcsi.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074694/rectangle-22452_i5wnhh.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694773340/rectangle-22453mhtdjy5d6_lfgtxo.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694773340/rectangle-22454mhgcjytc56_ezrqa0.png'
                    ]
                },
                {
                    images: [
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074696/rectangle-22450jh_q76cm0.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074698/rectangle-22451kh_ltabbn.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074698/rectangle-22453mjgf_lsbdjm.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694774815/rectangle-22452nghfxh_bqcqvp.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694774817/rectangle-22454gfxhy_kbmbdh.png'
                    ]
                },
                {
                    images: [
                        'https://res.cloudinary.com/payhospi/image/upload/v1694775032/rectangle-22450khjg875875_smeumb.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074696/rectangle-22451dyig_kcur1m.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074696/rectangle-22452hydyewy_vilxk4.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694074699/rectangle-22453hdydhch_ehqtvi.png',
                        'https://res.cloudinary.com/payhospi/image/upload/v1694774987/rectangle-22454jhfu64_ov13pm.png'
                    ]
                }
            ]
        }
    },
}
</script>
<style>
#container {
  height:350px; 
  position:relative; 
  overflow:hidden;
}
@keyframes bannermove {
  0% {
      transform: translate(0, 0);
  }
  100% {
      transform: translate(-50%, 0);
  }
}
@keyframes bannermove3 {
  0% {
      transform: translate(0, 0);
  }
  100% {
      transform: translate(-50%, 0);
  }
}
@keyframes bannermove2 {
  0% {
      transform: translate(0%, 0);
  }
  100% {
      transform: translate(50%, 0);
  }
}
.photobanner0 {
  position:absolute; 
  top:0px; 
  left:0px; 
  overflow:hidden; 
  white-space: nowrap;
  animation: bannermove 30s linear infinite;
}
.photobanner1 {
  position:absolute; 
  top:0px; 
  right:0px; 
  overflow:hidden; 
  white-space: nowrap;
  animation: bannermove2 50s linear infinite;
}
.photobanner2 {
  position:absolute; 
  top:0px; 
  left:0px; 
  overflow:hidden; 
  white-space: nowrap;
  animation: bannermove3 30s linear infinite;
}


</style>