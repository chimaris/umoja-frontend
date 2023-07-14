<template>
    <v-container height="100%" class=" mx-auto px-5 " width="100%"
    style="overflow:hidden;padding-bottom: 200px;max-width: 1330px;" flat>
    
 
        <div class="d-flex pb-8 pt-4 justify-space-between">
            <div class=" align-center">

                <h1 style="font-weight: 700;
                        font-size: 24px;
                        line-height: 30px;
                        letter-spacing: -0.02em;
                        ">
                        Write Article
                </h1>
                <p 
                style="color: #969696;
                font-size: 16px;
                font-weight: 400;">
Write compelling articles for you customers and audience            </p>
                <div></div>
            </div>
        </div>
        <v-row>
            <v-col cols="12" sm="8">
                <v-sheet class="cardStyle  ">
                    <div class="d-flex justify-space-between">
                        
                        <p style="color: #333;
font-size: 14px;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.2px;">Cover Image</p>
</div>
<v-text-field class="mt-4 headerso" placeholder="Header"></v-text-field>
                    <div class="d-flex justify-space-between">
                        
                        <p style="color: #333;
font-size: 14px;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.2px;">Cover Image</p>

</div>
<div class=" justify-space-between">

        <v-card width="100%" flat style="border-radius: 6px;
border: 3px dashed var(--carbon-2, #CECECE);" height="266" class=" mt-4 d-flex justify-center align-center" color="#F8F8F8">
<div class=" text-center">
    <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1688740513/gallery_azmmka.png" class="rounded-lg mx-auto mb-2" width="41"></v-img>
    <p style="color: #333;
font-size: 14px; max-width: 473px;
font-weight: 400;
">Add a cover image that complements your article to attract more readers.
We recommend uploading an image that is <span style="font-weight: 700;">1920x1080 pixels
</span> .</p>

<v-btn style="    border: 1px solid #e5e5e5;"  variant="outlined" class="mt-4"><span style="font-size: 14px;">Upload Cover</span> </v-btn>

</div>
</v-card>

           

                 </div>
                    <v-card height="auto" class=" mt-4 mx-auto pt-2 coolTable  pb-0 mb-1" width="100%" style="overflow:hidden"
                        flat>

                        <div class="bg-white d-flex justify-space-between px-2 pb-2" v-if="editor">
                            <!-- :disabled="!editor.can().chain().focus().toggleBold().run()" -->
                            <div>

                                <v-btn flat icon="mdi mdi-format-italic" class="mr-1"
                                    @click="editor.chain().focus().toggleItalic().run()"
                                    :class="{ 'is-active': editor.isActive('italic') }">
                                </v-btn>
                                <v-btn flat icon="mdi mdi-format-bold" class="mr-1"
                                    @click="editor.chain().focus().toggleBold().run()"
                                    :class="{ 'is-active': editor.isActive('bold') }">
                                </v-btn>
                                <v-btn flat class="mr-1" @click="editor.chain().focus().toggleUnderline().run()"
                                    icon="mdi mdi-format-underline" :class="{ 'is-active': editor.isActive('underline') }">
                                </v-btn>
                                <v-btn flat icon="mdi mdi-format-strikethrough" class="mr-1"
                                    @click="editor.chain().focus().toggleStrike().run()"
                                    :class="{ 'is-active': editor.isActive('strike') }">
                                </v-btn>
                                <v-btn flat icon="mdi mdi-link-variant" class="mr-1" @click="setLink"
                                    :class="{ 'is-active': editor.isActive('link') }">
                                </v-btn>
                                <v-btn flat icon="mdi mdi-link-variant-off" class="mr-1"
                                    @click="editor.chain().focus().unsetLink().run()" :disabled="!editor.isActive('link')">
                                </v-btn>
                                <v-btn flat icon="mdi mdi-format-align-left" class="mr-1"
                                    @click="editor.chain().focus().setTextAlign('left').run()">
                                </v-btn>
                                <v-btn flat icon="mdi mdi-format-align-center" class="mr-1"
                                    @click="editor.chain().focus().setTextAlign('center').run()">
                                </v-btn>
                                <v-btn flat icon="mdi mdi-format-align-right" class="mr-1"
                                    @click="editor.chain().focus().setTextAlign('right').run()">
                                </v-btn>
                                <v-btn flat icon="mdi mdi-format-list-bulleted" class="mr-1"
                                    @click="editor.chain().focus().toggleBulletList().run()"
                                    :class="{ 'is-active': editor.isActive('bullet') }">

                                </v-btn>
                            </div>
                            <div>
                                <v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-left"></v-btn>
                                <v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-right"></v-btn>
                            </div>
                        </div>
                        </v-card>
                        <v-card height="auto" class=" mt-4 mx-auto coolTable  pb-0 mb-1" width="100%" style="overflow:hidden"
                        flat>
                        <div style="min-height: 602px ;" class="bg-grey-lighten-5 pa-4">

                            <editor-content :editor="editor" />
                        </div>
                    </v-card>
             
                </v-sheet>
              
           
               

            </v-col>
            <v-col cols="12" sm="4">
                <v-sheet class="cardStyle px-0">
                    <div class="d-flex px-6 mb-6 mt-2 justify-space-between align-center">
                        <p style="color: #333;
                            font-size: 20px;
                            font-weight: 600;"> Latest Articles
                        </p>
                    </div>
              <div v-for="n in 2" :key="n" class="px-6">

           <div  class="mb-4 d-flex ">
            <v-avatar size="50">
                <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1687702335/rectangle-1939_khvhag.png"></v-img>
            </v-avatar>
            <div  class="ml-3">
            <div class=" d-flex"><p style="color: #1E1E1E;
            font-size: 16px;
            font-weight: 600;
            line-height: 140%;">Thatdesignpro</p> <p 
            style="color: #969696;
            font-size: 14px;
            font-weight: 400;
            line-height: 140%;"> . 27th Nov, 2023</p></div>
<div class="d-flex align-center  mt-1">
<p 
    style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;">Fashion and Beauty</p>
</div>


</div>
</div>
<v-card  flat color="grey-lighten-4" image="https://res.cloudinary.com/payhospi/image/upload/v1688744934/rectangle-29_obwwlu.png" width="100%" height="188px" class="d-flex align-center justify-center rounded-lg">
    
</v-card>
<p class="mt-4 mb-2" style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 700;
line-height: 140%;">Ankara Beauty Essentials: Elevate Your Style with Confidence</p>
<p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 400;
line-height: 140%;
">Lorem ipsum dolor sit amet consectetur. Id et ornare tristique tempus egestas neque tincidunt lobortis. Integer arcu sit massa orci phasellus ipsum tincidunt et amet.</p>
<v-btn size="small" color="#1273EB" class="px-0" variant="text">
    <span style="color: var(--deep-sky-blue-4, #1273EB);
font-size: 14px;
font-weight: 600;">

        Read more 
    </span>
    <v-icon size="small" class="ml-4" icon="mdi mdi-arrow-right"></v-icon></v-btn>
    <v-divider class="my-5"></v-divider>
</div>

<div class="px-6">

<div  class="mb-4 d-flex ">
 <v-avatar size="50">
     <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1688715270/rectangle-22429_agrgwa.png"></v-img>
 </v-avatar>
 <div  class="ml-3">
 <div class=" d-flex"><p style="color: #1E1E1E;
font-size: 16px;
font-weight: 600;
line-height: 140%;">Thatdesignpro</p> <p 
style="color: #969696;
font-size: 14px;
font-weight: 400;
line-height: 140%;"> . 27th Nov, 2023</p></div>
<div class="d-flex align-center  mt-1">
<p 
style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;">Fashion and Beauty</p>
</div>


</div>
</div>
<v-card  flat color="grey-lighten-4" image="https://res.cloudinary.com/payhospi/image/upload/v1688745018/rectangle-29_ofcoa9.png" width="100%" height="188px" class="d-flex align-center justify-center rounded-lg">

</v-card>
<p class="mt-4 mb-2" style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 700;
line-height: 140%;">Ankara Beauty Essentials: Elevate Your Style with Confidence</p>
<p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 400;
line-height: 140%;
">Lorem ipsum dolor sit amet consectetur. Id et ornare tristique tempus egestas neque tincidunt lobortis. Integer arcu sit massa orci phasellus ipsum tincidunt et amet.</p>
<v-btn size="small" color="#1273EB" class="px-0" variant="text">
<span style="color: var(--deep-sky-blue-4, #1273EB);
font-size: 14px;
font-weight: 600;">

Read more 
</span>
<v-icon size="small" class="ml-4" icon="mdi mdi-arrow-right"></v-icon></v-btn>
</div>
<div class="px-5 pt-12 mt-12">

    <v-btn block style="    border: 1px solid #e5e5e5;"  variant="outlined"><span style="color: var(--grey-1000, #1A1D1F);

font-size: 12px;
font-weight: 600;">View all Articles</span></v-btn>
</div>
</v-sheet>
              
            </v-col>
        </v-row>
       

    </v-container>
</template>
<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'

export default {
    components: {
        EditorContent,
    },
    data() {
        return {
            tags:['Fashion', 'Sneakers', 'Unisex shoes', 'Men shoes', 'Black', 'Fashion and style', 'Ghana Ankara Material'],
            checkqty: true,
            window: 'basic',
            radioship:true,
            dialog:false,
            editor: null,
            tab: 'Customer Details',
            chip: 'All',
            chosen: '',
            notes: [{
                name: 'Benjamin Franklin O.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1687265847/Rectangle_1929_qzdwmq.png'
            },
            {
                name: 'Nweke Franklin',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1687265844/Rectangle_1929_1_x8i5ic.png'
            },
            {
                name: 'Nweke Franklin',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1687265844/Rectangle_1929_1_x8i5ic.png'
            },

            ],
            summary: [
                {
                    title: 'Total Quantity',
                    value: '4 Items'
                },
                {
                    title: 'Grand Total',
                    value: '€ 1,829.00'
                }, {
                    title: 'Sub-Total',
                    value: '€ 1,817.00'
                },
                {
                    title: 'Shipping International',
                    value: '€ 12.00'
                },
                {
                    title: 'Taxes',
                    value: '€ 0.00'
                }
            ],
            items: [
                {
                    sn: '#23942',
                    name: 'Leather crop top & pants......',
                    date: '17 May',
                    total: '€2,349‎',
                },
                {
                    sn: '#23442',
                    name: 'Leather crop top & pants......',
                    date: '17 May',
                    total: '€2,349‎',
                },
                {
                    sn: '#26042',
                    name: 'Leather crop top & pants......',
                    date: '17 May',
                    total: '€2,349‎',
                },


            ],
        }
    },
    computed: {
        orderDetails() {
            return [
                {
                    title: 'Name',
                    value: 'Benjamin Franklin O.'
                },
                {
                    title: 'Email',
                    value: 'sylvesterfranklin007@gmail.com'
                },
                {
                    title: 'Phone',
                    value: '+145789900'
                },
                {
                    title: 'Billing',
                    value: 'Michael Johnson, Michael’s Corp LLC Rose Str. 120 New York, PH 10000 United States (US)'
                },
                {
                    title: 'Shipping',
                    value: 'Michael Johnson, Michael’s Corp LLC Rose Str. 120 New York, PH 10000 United States (US)'
                },
                {
                    title: 'Shipping Company',
                    value: 'Umoja Free Shipping',
                    img: 'https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png'
                },
            ]
        }
    },
    mounted() {
        this.items = this.items1;

        this.editor = new Editor({
            extensions: [
                StarterKit,
                Link,
                Underline,
                TextAlign.configure({
                    types: ['heading', 'paragraph'],
                }),
            ],
            content: '<p>Start Typing...</p>',
        })
    },
    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>