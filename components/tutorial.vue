<template >
    <div v-show="tutorialbol"  style="width: 100vw;height: 100vh;position: fixed;top: 0; left: 0;z-index: 9999;">

    </div>
    <div v-show="tutorialbol" style="z-index: 99999; position: fixed;bottom: 40px;right: 30px;" class="scroll">
        <div :ripple="false"  :style="'width:' + ('64px')" style="cursor: pointer; z-index: 99;height: 200px; background-color: transparent;
 background-repeat: no-repeat;   background-position: right;overflow: hidden;
 position: relative; right: 3px; " class=" py-4 px-6 card d-flex  align-center">
            <img height="200" width="30" style="position: absolute;left: 0;"
                src="https://res.cloudinary.com/payhospi/image/upload/v1696060844/Paper_left_ibphsv.png" class="left" />
            <img height="200" width="500" style="position: absolute;"
                src="https://res.cloudinary.com/payhospi/image/upload/v1696060863/Paper_center_u1gxbz.png" class="center" />
            <div v-if="timer" style="position: absolute;height: 150px; width: calc(500px - 48px);overflow-y: scroll;"
                class="text-center pa-3">

                <p class="nishi">Tutorial starts in</p>
                <h1 class="nishi countdown text-black" style="    border: 1px solid black;
    font-size: 55px;
    width: 87px;
    border-radius: 50%;
    height: 87px;    padding-bottom: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 9px;">{{ count }}</h1>
            </div>
            <div v-show="!timer" style="position: absolute;height: 150px;width: calc(500px - 48px);overflow-y: scroll;"
                class="d-flex  align-end pa-3">
                <p style="  width: 500px!important;   position: ;
    bottom: ; font-size: 20px;" v-html="text" class="rower nishi"> </p>
            </div>
            <img height="200" width="30" style="position: absolute;right: -2px;"
                src="https://res.cloudinary.com/payhospi/image/upload/v1696060847/Paper_right_llq8uq.png" class="right" />
        </div>


    </div>
    <div  style="z-index: 99999; position: fixed;bottom: 5px;right: 30px;"
        class="d-flex justify-space-between align-center btns ">
        <v-btn v-show="tutorialbol" size="x-small" @click="resetTutorial()" class="btns ml-2" rounded="xl" color="red"
            icon="mdi mdi-close"></v-btn>
        <!-- <v-btn v-show="tutorialbol" size="x-small" @click="mute()" class="btns ml-2" rounded="xl" color="black"
            :icon="muted ? 'mdi mdi-volume-high' : 'mdi mdi-volume-off'"></v-btn> -->
        <v-btn v-show="tutorialbol" size="small" class="btns ml-2" @click="!scrollbol ? stopscroll() : continuescroll()" rounded="xl"
            :color="!scrollbol ? 'grey' : 'black'">{{!scrollbol? 'manual scrolling': 'auto scrolling'}}</v-btn>
        <v-btn v-show="tutorialbol" size="x-small" class="btns ml-2" @click="previous()" rounded="xl" color="black"
            icon="mdi mdi-arrow-left"></v-btn>
        <v-btn v-show="tutorialbol" size="x-small" class="btns ml-2" @click="nextRoute()" rounded="xl" color="black"
            icon="mdi mdi-arrow-right"></v-btn>
    </div>
</template>

<script>
import { gsap, Back } from 'gsap';
import { Howl, Howler } from 'howler';
import { useTutorialStore } from '~/stores/tutorialStore';


export default {
    data() {
        return {
            select: '',
            // selectIndex: 0,
            menubol: true,
            timer: false,
            muted: false,
            scrollbol: false,
            text: '',
            count: 5,
            scrollTimeline: null,
            sound: null,
            sound2: null,
            started: false,
            nextBolean: false,
            prevBolean: false,
            scrollTarget: null,
            done: false,
            donezo: [],
            scrollHeights: 0,

        }
    },
beforeUnmount() {
   if(this.sound) this.sound.stop()
   if(this.sound) this.sound.unload()
   if(this.sound2) this.sound2.stop()
   if(this.sound2) this.sound2.unload()
   if(this.scrollTimeline) this.scrollTimeline.kill()
},
    computed: {
        tutorialbol() {
            return this.tutorialStore.tutorial;
        },
        loading() {
            return this.tutorialStore.loading;
        },
        databank() {
            return this.tutorialStore.databank;
        },
        tutorialStore() {
            return useTutorialStore();

        },

        res() {
            return this.databank.find((el) => {
                return el.route == this.$route.path
            })
        },
        selectIndex() {
            return this.databank.findIndex((el) => {
                return el.route == this.$route.path
            })
        },
        prev() {
            var dat = {}
            if (this.selectIndex == 0) {
                dat = this.databank[this.databank.length - 1]
            } else {

                dat = this.databank[this.selectIndex - 1]
            }
            return dat
        },
        nextR() {
            var dat = {}
            if (this.selectIndex == (this.databank.length - 1)) {
                dat = this.databank[0]
            } else {

                dat = this.databank[this.selectIndex + 1]
            }
            return dat
        },
    },
watch: {   
    tutorialbol(x) {
        if (this.$route.path == '/home2') {

            if(x) this.startTutorial(true)
        }
  
},
},
    mounted() {
        this.sound = new Howl({
                src: ['https://res.cloudinary.com/payhospi/video/upload/v1696066412/gamevideo-item-turning-page-paper-sound-effect-186184608_nw_prev33_ce5igm.wav'],
            })
//   this.voicenotesloader();
 if(this.tutorialbol ){
    
     this.startTutorial()
 } 
 
    },
    methods: {

        mute() {
            this.muted = !this.muted
            if (this.muted) {
                this.sound.mute()
                this.sound2.mute()
            } else {
                this.sound.unmute()
                this.sound2.unmute()
            }
        },

        async resetTutorial() {
            await this.sound.stop(); // Call the setTutorial action
            this.started = false
            await this.animateBtn(true)
            
            await this.sound2.stop(); // Call the setTutorial action
            if (this.scrollTimeline)this.scrollTimeline.kill()
        },
        async startTutorial(x) {
            if (x) {
        this.tutorialStore.setTutorial()
    }
            if (this.started) return
            this.started = true
            this.scrollTarget = document.documentElement; // You can also use document.body
            await gsap.to(this.scrollTarget, { scrollTop: 0, })
                this.timer = false
                // this.countdown()
                this.animateBtn(false)
                this.scrolltobottom()
            
        },
        stopscroll() {
            this.donezo.push(1)
            this.scrollbol = !this.scrollbol
            this.scrollTimeline.pause()
        },
        continuescroll() {
            this.donezo.push(1)
            this.scrollbol = !this.scrollbol
            this.scrollTimeline.play()
        },
        async scrolltobottom() {
            ; // You can also use document.body
            await this.scrollTarget.scrollTo({ x: 0, y: 0, behavior: 'smooth' });
            const sn = this
            sn.scrollTarget = document.documentElement; // You can also use document.body
            gsap.to(sn.scrollTarget, { scrollTop: 0, })
            if (document.getElementById('footer') !== null) {
                sn.scrollHeights = sn.scrollTarget.scrollHeight - (document.getElementById('footer').offsetHeight + 300)
            } else {
                sn.scrollHeights = sn.scrollTarget.scrollHeight
            }
            let duration = 45; // Duration in seconds
            if (this.scrollHeights >= 8500) {
        duration = 45;
      } else if (this.scrollHeights >= 6000) {
        duration = 35;
      } else if (this.scrollHeights >= 3000) {
        duration = 20;
      } else {
        duration = 15;
      }
            const delay = this.$route.path == '/home2' ? 18: 2; 
            const from = this.$route.path == '/home2' ? 500: 0; 
            if(this.$route.path == '/home2'){
                setTimeout(() => {
                    gsap.to(sn.scrollTarget, { scrollTop: 500, duration:1.5 })
                    
                }, 8000);   // Delay in seconds
            }
            // Create a GSAP timeline for the scrolling animation
            const scrollTimeline = gsap.timeline();
            this.scrollTimeline = scrollTimeline
            // Add a scroll animation to the timeline
            scrollTimeline.to(sn.scrollTarget,
                {
                    scrollTop: sn.scrollHeights, // Scroll to the bottom
                    duration: duration,  // Duration of the scroll animation
                    delay: delay, // Easing function (optional)

                });
            scrollTimeline.to(this.scrollTarget,
                {
                    scrollTop: 0,
                    duration: 5,
                    delay: -3,
                    onComplete: () => {
                        sn.donezo.push(1)
                        if (sn.donezo.length >= 3) {
                            setTimeout(() => {
                                sn.nextRoute()
                            }, 800);
                        }
                    }
                } 
            )
        },
        previous() {
            if (this.prevBolean) return
            this.prevBolean = true
            if (this.scrollTimeline)this.scrollTimeline.kill()
            if (this.sound2)this.sound2.stop()
        
            this.animateBtn(true)
            setTimeout(() => {
                this.$router.push(this.prev.route)
            }, 700);
        },
        nextRoute() {
            if (this.nextBolean) return
            this.nextBolean = true
            if (this.scrollTimeline)this.scrollTimeline.kill()
            if (this.sound2)this.sound2.stop()
            this.animateBtn(true)
            setTimeout(() => {
                this.$router.push(this.nextR.route)
            }, 700);
        },
        aimateText() {
            this.text = '';
            const sn = this
            const res2 = this.res.function;
            let textPosition = 0;
            let speed = 50;
            const typeWriter = () => {
              
                this.text = res2.substring(0, textPosition);
                if (textPosition++ < res2.length && this.tutorialbol) {
                    setTimeout(typeWriter, speed);
                } else {
                    sn.donezo.push(1)
                    if (sn.donezo.length >= 3) {
                        setTimeout(() => {
                            sn.nextRoute()
                        }, 700);
                    }
                    return
                };
            }
            typeWriter();
        },
        countdown() {
            // if(this.count == 0) return
            const intv = setInterval(() => {
                if (this.count > 0) {
                    this.count--
                } else {
                    this.timer = false
                    this.aimateText()

                    clearInterval(intv)
                    return
                }
            }, 1000);
        },
        mksound() {
            this.sound = new Howl({
                src: ['https://res.cloudinary.com/payhospi/video/upload/v1696066412/gamevideo-item-turning-page-paper-sound-effect-186184608_nw_prev33_ce5igm.wav'],
                volume: 0.3,
            });
        },
        playVoiceNote(x) {
            this.sound2 = new Howl({
                src: [x],
                volume: 0.7,
                onend: () => {
                    this.sound2.unload()
                    this.donezo.push(1)
                    if (this.donezo.length >= 2) {
                        var timeout = this.donezo.length >= 3? 800: 2000
                        setTimeout(() => {
                            this.nextRoute()
                        }, timeout);
                    }
                }
            });
            if (this.sound2)this.sound2.stop()
            this.sound2.play()
        },

        animateBtn(x) {


            const sn = this
            if (!this.sound) this.mksound()
            // this.text = '';
            const img = document.querySelector('.img');
            // const img2 = document.querySelector('.img2');
            const card = document.querySelector('.card');

            var tl = gsap.timeline({   onComplete: () => {
                        sn.text = ''
                        if (x) {
                         
                         if (!sn.started) {
                            
                             sn.tutorialStore.resetTutorial()
                         }  
                        }  else{
                            if (!sn.muted) sn.playVoiceNote(sn.res.audio)
                            sn.aimateText()
                        }
                    }});

            tl.fromTo([card],
                {
                    width: '64px',
                    duration: 0.5,
                 

                },
                {
                    width: '500px',
                    duration: 0.5,
                    delay: 0,
                    reversed: x,
                    onStart: () => {
                        if (!this.muted) this.sound.play()
                    },
                    ease: Back.easeOut.config(1.7)
                })

        }
    }
}
</script>
