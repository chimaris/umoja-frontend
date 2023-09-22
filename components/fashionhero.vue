<template>
           <v-sheet min-height="100vh" class="d-flex align-center justify-center" color="#CDD6D4">
            <v-container style="max-width:1200px;width: 100%;padding-bottom: 60px;" class="d-flex align-center">
            <v-row>
                <v-col cols="12" style="z-index: 9;" md="4">
            <h1 class="title" 
            style="color: #1A423B;
            font-size: 96px;
            font-weight: 600;
            line-height: 90px;
            letter-spacing: -4.8px;">
            Fashion
            State
            <br>of Mind</h1>
            <p style="color: var(--carbon-4, #333);
            font-size: 24px;
            font-weight: 400;
            line-height: 140%; /* 33.6px */
            letter-spacing: -0.72px;" class="sub my-4">Lorem ipsum dolor sit amet <br> consectetur. Euismod leo <br> habitasse morbi quam dignissim.</p>
            <div class="btn" style="height: 113px;">

                <v-btn width="225"  height="44" rounded="xl" flat  color="green"> Shop Now</v-btn>
            </div>
                </v-col>
                <v-col class=" pl-9 pa-4" cols="12" md="8">
                    <v-row style="min-height: 500px;">
                <v-col cols="12" style="position: relative;" md="6">
                    <!-- <div class="coloredcard bg-green" style="height: 524.781px!important;width:377.291px!important;
border-radius: 16.127px;transform: rotate(5.682deg)" >
                    </div>
                    <v-img class="spiral" cover style="
                        height: auto;
    width: 34%;
    position: absolute;
    right: -21%;top: 10%; z-index: 99;
                     "  src="https://res.cloudinary.com/payhospi/image/upload/v1693848065/group_bkfoar.png" 
                  ></v-img>
                    <v-img class="img" cover style=" position: absolute;    top: 11px;   border-radius: 16.127px;"  :src="items[selected].image" 
                    width="432.291"
height="524.781" ></v-img> -->
                    </v-col>
                    <v-col style="position: relative;min-height:350px" cols="12" md="6">
                    <!-- <div class="coloredcard3 bg-orange" style="width: 288.412px;
height: 350.118px;position: absolute;bottom: -70px;left: 25%;
transform: rotate(5.682deg);border-radius: 16.127px;" >
                    
                       
                    </div> -->
                    <!-- <v-img cover class="spiral3" style=" position: absolute; z-index: 99;      bottom: -22%;
    left: 33%;    height: auto;
    width: 34%;"  src=" https://res.cloudinary.com/payhospi/image/upload/v1693882765/frame_bmfaja.png" 
       ></v-img>
                    <v-img cover class="img3" style="width: 288.412px;
height: 350.118px;position: absolute;border-radius: 16.127px;bottom: -70px;left: 25%;" :src="items[selected2].image" width="288.291px"
height="350.781px"></v-img> -->
<div :ref="'refcard' + i" :class="i == 0? 'selected':'notselected'" v-for="(n, i) in items" :key="i" style="position: absolute;width: 100%;height: 100%;">

<div class="coloredcard3 bg-orange" style="width: 288.412px;
height: 350.118px;position: absolute;bottom: -70px;left: 25%;
transform: rotate(5.682deg);border-radius: 16.127px;" >


</div>
<v-img cover class="spiral3" style=" position: absolute; z-index: 99;      bottom: -22%;
left: 33%;    height: auto;
width: 34%;"  src=" https://res.cloudinary.com/payhospi/image/upload/v1693882765/frame_bmfaja.png" 
></v-img>
<v-img cover class="img3" style="width: 288.412px;
height: 350.118px;position: absolute;border-radius: 16.127px;bottom: -70px;left: 25%;" :src="items[selected2].image" width="288.291px"
height="350.781px"></v-img>
</div>
</v-col>
    
                 
                 
                    </v-row>
                </v-col>
            </v-row>
            </v-container>
        </v-sheet>
</template>

<script>
import { gsap, Bounce, Back, CSSPlugin } from 'gsap';
export default {
    data() {
        return {
    prog:0,
    loader: true,
    items: [
        {
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1693848018/rectangle-22442_snkvct.png'
         },
        {
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1693848011/rectangle-22444_ztqano.png'
    },
        {
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1693848011/rectangle-22444_ztqano.png'
    },
        {
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1693848011/rectangle-22444_ztqano.png'
    },
        {
            image: 'https://res.cloudinary.com/payhospi/image/upload/v1693848011/rectangle-22444_ztqano.png'
    },
    ],
    
}
},computed: {

item() {
    return this.items[this.selected];
},
selected(){
    return 0
},
selected2(){
        if (this.selected == (this.items.length -1)) {
            return 0
        }else{
            return this.selected + 1
        }
},
},

mounted(){
  gsap.registerPlugin(CSSPlugin);
        const title = document.querySelector('.title');
            const sub = document.querySelector('.sub');
            const btn = document.querySelector('.btn');
            this.$nextTick(()=>{

                gsap.fromTo([ title,sub, btn ],
                {
                    opacity: 0,
                    yPercent: 100,
                    xPercent: -100,
                    
                },{
                    opacity: 1,
                    yPercent: 0,
                    xPercent: 0,
                    ease: Back.easeOut,
                    stagger: 0.1,
                    delay: 0.4,
                    onComplete:()=>{
                    }
                })
                this.imgloader()

            })
    },
methods: {
 imgloader(){
    const imageArray = this.items.map((item) => item.image);
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
        sn.startall();
    }
}
preloadImages();


},
async startall(){
        const sn = this

        sn.loader = false;
        console.log('All images loaded!');
            const selected = document.querySelector('.selected');
            const img3 = document.querySelector('.selected .img3');
            const spiral3 = document.querySelector('.selected .spiral3');
            const coloredcard3 = document.querySelector('.selected .coloredcard3');

            var tl = gsap.timeline();
            tl.fromTo([ coloredcard3,img3, spiral3 ],
                {
                    opacity: 0,
                    scale:1,
                    translateX:'600px',
                    translateY:'350px',  
                },{
                    opacity: 1,
                    translateX:'0px',
                    translateY:'100px',
                    ease: Back.easeOut,
                    stagger: 0.1,
                    scale:1,
                    duration:1,
                    // onComplete:()=>{
                    //     // this.startall()
                    //     sn.selected = sn.selected === (this.items.length -1) ? 0 : sn.selected + 1;
                    // }
                })
            tl.fromTo([ coloredcard3,img3, spiral3 ],
                {
                    opacity: 1,
                    scale: 1, 
                    translateX:'0px',
                    translateY:'100px',
         
                },{
                    opacity: 1,
                    scale:1.5,
                    translateX:'-400px',
                    translateY:'-150px',
                    ease: Back.easeOut,
                    stagger: 0.2,
                    delay: 2,
                    duration:1,
                    onStart:()=>{
                        // const selected1 = sn.$refs['refcard'+selected];
                        // console.log(selected1)
                        sn.selected = (sn.selected == (sn.items.length - 1) ? 0 : sn.selected + 1);
                        const selected2 = sn.$refs['refcard'+sn.selected];
                        // alert(sn.selected)
                        console.log(selected2)
                        // selected1.classList.remove('selected');
                        selected2.classList.add('unselcted');
                        selected2.classList.add('selcted');
                        sn.startall()
  
                    }
                
                })
                      tl.fromTo([ coloredcard3, ],
                      {            
                    opacity: 1,
                    translateX:'-400px',
                    translateY:'-150px',
                    scale:1.5,
                },{
                    opacity: 0,
                    translateX: '-1400px',
                    scale:1.2,
                    translateY: '-300px',
                    // ease: Back.easeOut,
                    delay: 2,
                    duration:1.5,
                    
                }) 
                tl.fromTo([  img3, spiral3 ],
                {            
                    opacity: 1,
                    scale:1.5,
                    translateX:'-400px',
                    translateY:'-150px',
                    
                },{
                    
                    opacity: 0,
                    scale:1.2,
                    translateY: '-300px',
                    translateX: '-1300px',
                    // ease: Back.easeOut,
                    stagger: 0.2,
                    duration:1,
                    delay: -1.3,
                    onComplete:()=>{
                        sn.selected = sn.selected === (this.items.length -1) ? 0 : sn.selected + 1;
                    }
                
                })

            
    
     
        }
   
        
    },
}
</script>
<style>
.notselected{
    opacity: 0;
    scale: 0;
    transform:translateX(600px);
}</style>