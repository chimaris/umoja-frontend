<template>
 
 <div v-if="loader" :style="'background:'+item.color" style="z-index: 9;position: absolute;left: 0;height:722px; width:100%;"  class=" d-flex justify-center align-center rounded-0">

<div>
    <v-progress-linear color="#fff" class="rounded-xl" style="width: 500px;" indeterminate height="5"></v-progress-linear>
</div> 
</div>
    <v-card class="colorcont rounded-0 d-flex justify-center" :style="'background:'+item.color" flat height="722px" width="100%" >
        <v-container style="max-width:1200px;width: 100%;height: 722px; z-index: 99;"  class="d-flex align-center py-1">
           <div style="width: 536px;">
               <p class="title" style="color: #FFF;
font-size: 96px;
width: 695px;
font-weight: 600;
line-height: 100%; /* 96px */
letter-spacing: -2.88px;">{{ item.title }}</p>
<p class="my-6 sub" style="color: #FFF;
font-size: 24px;
font-weight: 500;
">{{ item.sub }}</p>
<div style="width: 695px;" class="btn">

    <v-btn rounded="xl" color="#F8B735" height="44" style="width: 225px;
padding: 12px 20px;" flat ><span style="color: var(--carbon-6, #1E1E1E);
text-align: center;font-weight: 600;
font-size: 14px;">
    Shop Now
</span>
</v-btn>
</div>
</div>
</v-container>
<div class=" igj d-flex justify-end align-end" style="">
    <img class="img imgcl"  style=""  :src="item.image" />
</div>


</v-card>
<div style="width: 100%;height: 5px;">

<div style="height: 5px;background-color:#F8B735 ;" :style="'width:'+ prog+'%;background:'+item.color"></div>
</div> 
</template>
<script>
import { gsap, Power2, Bounce,Back, CSSPlugin } from 'gsap';
export default {
    data() {
    return {
        prog:0,
        loader: true,
        carouseldata: [
            {
                title: 'Unveil Your Beauty',
                color: 'radial-gradient(50% 50% at 50% 50%, #3AA3C7 0%, #1D7291 100%)',
                sub: 'Step into a world where beauty knows no bounds, and empowerment is painted in vibrant hues.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1000/v1694074737/photo-shot-asian-african-white-304050-year-old-woman-with-her-beauty-regime-copy-1_ads5t3.png'
            },
            {
                title: 'Unveil Your Beauty',
                color: 'radial-gradient(50% 50% at 50% 50%, #348C5B 0%, #29593E 100%)',
                sub: 'Step into a world where beauty knows no bounds, and empowerment is painted in vibrant hues.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1000/v1694074729/young-black-man-taking-care-his-skin-with-nourishing-face-cream-copy-1_egaibh.png'
            },
        ],
        selected: 0,
    }
},computed: {

    item() {
        return this.carouseldata[this.selected];
    }
    },
    mounted(){
  gsap.registerPlugin(CSSPlugin);
this.startall()
},
methods: {
  async startall(){

    const imageArray = this.carouseldata.map((item) => item.image);
      let loadedImages = 0;
const sn = this
      function preloadImages() {
        for (let i = 0; i < imageArray.length; i++) {
          const tempImage = new Image();
          tempImage.addEventListener('load', trackProgress, true);
          tempImage.src = imageArray[i];
        }
      }

      function trackProgress() {
        loadedImages++;
        if (loadedImages === imageArray.length) {
          imagesLoaded();
        }
      }

      function imagesLoaded() {
        sn.loader = false;
        console.log('All images loaded!');
    const img = document.querySelector('.img');
    const title = document.querySelector('.title');
    const sub = document.querySelector('.sub');
    const btn = document.querySelector('.btn');
    var tl = gsap.timeline({repeat: -1,  onUpdate: () => {
          const progress = tl.progress();
          sn.prog = progress * 100
        },})
    tl.fromTo([img ],
    {
        opacity: 0,
        scale: 1.35,
        
    },{
        opacity: 1,
        scale: 1,
        ease: Bounce.easeOut,
        duration: 1.4,
      
        
    })
    // sn.prog = tl.progress();
  tl.fromTo([, title,btn, sub, ],
    {
      opacity: 0,
      xPercent: -100,
      
    },{
        opacity: 1,
        xPercent: 0,
        ease: Back.easeOut,
        stagger: 0.1,
        delay: -0.8,
      
  })
  tl.to([title,sub, btn , img],
    {
      opacity: 0,
      xPercent: 100,
      ease: Back.easeOut,
      stagger: 0.1,
      delay: 5,
       onComplete: () => {
        sn.selected = sn.selected === 0 ? 1 : 0;
        },
        // onUpdate: () => {
        //   const progress = tl.progress();
        //   sn.prog = progress
        // },
  })
  }
  preloadImages();
  }
},
}
</script>
<style>
.colorcont{
    transition: all 3s ease-in-out;
    position: relative;
}
.imgcl{
    position: absolute;bottom: 0%!important;right: 0px;width: auto;z-index: 99;max-height: 700px;
}
.igj{
    position: absolute;
    width: 100%;
    height: 722px;
    max-width: 1400px;
}</style>