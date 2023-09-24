<template>
           <v-sheet min-height="100vh" class="d-flex align-center justify-center" style="    overflow: hidden;" color="#CDD6D4">
            <div v-if="loader" style="z-index: 9;position: absolute;left: 0;height:772px; width:100%;"  class=" d-flex justify-center align-center rounded-0">

<div>
    <v-progress-linear color="#fff" class="rounded-xl" style="width: 500px;" indeterminate height="5"></v-progress-linear>
</div> 
</div>
            <v-container style="max-width:1200px;width: 100%;padding-bottom: 60px;" class="d-flex align-center">
            <v-row>
                <v-col cols="12" style="z-index: 9;" md="4">
            <h1 class="title" 
            style="color: #1A423B;
            font-size: 96px;opacity: 0;
            font-weight: 600;
            line-height: 90px;
            letter-spacing: -4.8px;">
            Fashion
            State
            <br>of Mind</h1>
            <p style="color: var(--carbon-4, #333);
            font-size: 24px;opacity: 0;
            font-weight: 400;
            line-height: 140%; /* 33.6px */
            letter-spacing: -0.72px;" class="sub my-4">
            Lorem ipsum dolor sit amet 
            <br> consectetur. Euismod leo 
            <br> habitasse morbi quam dignissim.</p>
            <div class="btn" style="opacity: 0;height: 113px;">

                <v-btn width="225"  height="44" rounded="xl" flat  style="" color="green"> Shop Now</v-btn>
            </div>
                </v-col>
                <v-col class=" pl-9 pa-4" cols="12" md="8">
                    <v-row style="min-height: 554px;">
                <v-col cols="12" style="position: relative;" md="6">
               
                    </v-col>
                    <v-col style="position: relative;min-height:350px" cols="12" md="6">
              
<div :class="'selected' + i" class="" :ref="'refcard' + i" v-for="(n, i) in items" :key="i" style="position: absolute;width: 100%;height: 100%;">

<div v-show="false" class="coloredcard3 bg-orange" style="opacity: 0;width: 288.412px;
height: 350.118px;position: absolute;bottom: -0px;left: 25%;
transform: rotate(5.682deg);border-radius: 16.127px;" >


</div>
<v-img cover class="spiral3" v-show="false" style="opacity: 0; position: absolute; z-index: 99;      bottom: -62px;
left: 33%;    height: auto;
width: 34%;"  src=" https://res.cloudinary.com/payhospi/image/upload/v1693882765/frame_bmfaja.png" 
></v-img>
<v-img cover class="imgs3" style="opacity: 0; width: 288.412px;
height: 350.118px;position: absolute;border-radius: 16.127px;bottom: -0px;left: 25%;" :src="n.image" width="288.291px"
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
    interval: null,
    moveInvar: null,
    moveOutvar: null,
    transcendvar: null,
    loader: true,
    items: [
    {
                        image: 'https://img.freepik.com/free-photo/autumn-person-with-beautiful-hat_23-2149137832.jpg?w=900&t=st=1695372157~exp=1695372757~hmac=fdd7dd407529348c4a3b2461b3160ea1e54bb213492fa6304d389c3788d8420e',
    },{image: 'https://img.freepik.com/free-photo/portrait-young-handsome-male_23-2148884407.jpg?w=996&t=st=1695372208~exp=1695372808~hmac=d4ebb4f3c1aff10fb97701a6dcd9d3afc0268c39b560a1169b2641ac49776d2d',

                    },
                    {
                        image: 'https://img.freepik.com/free-photo/fashionable-young-seductive-african-model-with-perfect-curly-hairs-elegant-orange-blouse-silk-pants-sitting-vintage-chair-beige-wall_273443-4086.jpg?w=2000&t=st=1695372432~exp=1695373032~hmac=840219d7884c18409efb09c563761f51f863b4259852ccd665cba251cb685177',
                    },
        {
            image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_400/v1693848018/rectangle-22442_snkvct.png'
        },
        {
            image: 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_400/v1693848011/rectangle-22444_ztqano.png'
        },
  
    //     {
    //         image: 'https://res.cloudinary.com/payhospi/image/upload/v1693848011/rectangle-22444_ztqano.png'
    // },
    ],
    selected: 0,
    
}
},computed: {



selected1() {
  return this.selected;
},

selected2() {
  const nextIndex = this.selected + 1;
  return nextIndex >= (this.items.length) ? 0 : nextIndex;
},

selected3() {
  const nextIndex = this.selected2 + 1;
  return nextIndex >= (this.items.length) ? 0 : nextIndex;
}
},
beforeUnmount(){
  // Kill the GSAP instance
  if (this.interval){

      clearInterval(this.interval);
  }
  if (this.moveInvar) {
      this.moveInvar.kill()
    
  }
    
  if (this.moveOutvar) {
      this.moveOutvar.kill()
    
  }
    
  if (this.transcendvar) {
    
      this.transcendvar.kill()
  }
},
mounted(){
    // clearInterval(this.interval);
  gsap.registerPlugin(CSSPlugin);
  this.$nextTick(()=>{

    this.imgloader()  
  })
        },
        methods: {
imgloader(){
    const imageArray = this.items.map((item) => item.image);
    let loadedImages = 0;
    const sn = this
    
    function trackProgress() {
        loadedImages++;
        if (loadedImages === imageArray.length) {
            // sn.startall(0);
            const title = document.querySelector('.title');

const sub = document.querySelector('.sub');
    const btn = document.querySelector('.btn');
sn.loader = false;
    sn.$nextTick(()=>{

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
            onStart:()=>{
                
                sn.animateCards()

                // sn.anim23()
            }
        }) 
    })
    }
}

    for (let i = 0; i < imageArray.length; i++) {
        const tempImage = new Image();
        tempImage.addEventListener('load', trackProgress, true);
        tempImage.src = imageArray[i];
    }

// preloadImages();
// const selected = document.querySelector('.selected');
// const selected2 = sn.$refs['refcard'+sn.selected][0];


},
async animateCards(){
    this.anim23()
       this.interval = await setInterval(() => {
        
            this.anim23()
        }, 3000);

},
async anim23(){
            const img = await document.querySelector('.selected'+ this.selected1 +' .imgs3');
            const spiral = await document.querySelector('.selected'+ this.selected1 +' .spiral3');
            const coloredcard = await document.querySelector('.selected'+ this.selected1 +' .coloredcard3');
            const img2 = await document.querySelector('.selected'+ this.selected2 +' .imgs3');
            const spiral2 = await document.querySelector('.selected'+ this.selected2 +' .spiral3');
            const coloredcard2 = await document.querySelector('.selected'+ this.selected2 +' .coloredcard3');
            const img3 = await document.querySelector('.selected'+ this.selected3 +' .imgs3');
            const spiral3 = await document.querySelector('.selected'+ this.selected3 +' .spiral3');
            const coloredcard3 = await document.querySelector('.selected'+ this.selected3 +' .coloredcard3');
            await this.moveOut(coloredcard,img, spiral)
            await this.transcend(coloredcard2,img2, spiral2)
            await this.moveIn(coloredcard3,img3, spiral3)
            
},
startover(){
    const sn = this
    sn.selected = sn.selected === (this.items.length -1) ? 0 : sn.selected + 1;
    sn.startall(sn.selected)
    
},
async startall(x){
        const sn = this
        sn.loader = false;
            const selectedDiv = document.querySelector('.selected'+ x);
            alert(9)
            const img3 = document.querySelector('.selected'+ x +' .imgs3');
            const spiral3 = document.querySelector('.selected'+ x +' .spiral3');
            const coloredcard3 = document.querySelector('.selected'+ x +' .coloredcard3');
            this.moveIn(coloredcard3,img3, spiral3)
            this.transcend(coloredcard3,img3, spiral3)
            this.moveOut(coloredcard3,img3, spiral3)

},
    moveIn(coloredcard3,img3, spiral3){
       this.moveInvar = gsap.fromTo([ coloredcard3,img3, spiral3 ],
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
            onStart:()=>{  
                //   selectedDiv.classList.remove('notselected');
                }
            })
    },
    transcend(coloredcard3,img3, spiral3){
        const sn = this
       this.transcendvar = gsap.fromTo([ coloredcard3,img3, spiral3 ],
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
                stagger: 0.1,
                duration:1,
        
            
            })
        },
        moveOut(coloredcard3,img3, spiral3)
        {
                const sn = this
               this.moveOutvar = gsap.fromTo([ coloredcard3, img3, spiral3 ],
                {            
                    opacity: 1,
                    scale:1.5,
                    translateX:'-400px',
                    translateY:'-150px',
                    
                },{
                    
                    opacity: 0,
                    scale:1.1,
                    translateY: '-300px',
                    translateX: '-1400px',
                    // ease: Back.easeOut,
                    stagger: 0.1,
                    duration:1,
                    // delay: -1.4,
                    onComplete:()=>{
                    // sn.startover()
                    sn.selected = sn.selected === (this.items.length - 1) ? 0 : sn.selected + 1;

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
}</style>