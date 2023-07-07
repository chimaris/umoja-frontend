<template>
    <v-container height="100%" class=" mx-auto px-5 " width="100%"
        style="overflow:hidden;padding-bottom: 200px;max-width: 1330px;" flat>

        <div class="d-flex pb-4 pt-2 justify-space-between">
            <div class="d-flex align-center">

                <h1 style="font-weight: 700;
                        font-size: 24px;
                        line-height: 30px;
                        letter-spacing: -0.02em;
                        ">Add Products
                </h1>

            </div>

        </div>


        <v-row>
            <v-col cols="12" sm="8">
                <v-sheet class="cardStyle  ">
                    <p class="inputLabel">Email Address</p>

                    <v-text-field hint="Do not exceed 20 characters when entering the product name." persistent-hint
                        placeholder="Enter email address" density="comfortable">
                    </v-text-field>
                    <p class="inputLabel mt-4">Description</p>
                    <v-card height="auto" class=" mx-auto pt-2 coolTable  pb-0 mb-1" width="100%" style="overflow:hidden"
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
                        <div style="min-height: 162px ;" class="bg-grey-lighten-4 pa-4">

                            <editor-content :editor="editor" />
                        </div>
                    </v-card>
                    <p style="color:  #969696;
font-size: 12px;
font-weight: 400;">Do not exceed 100 characters when giving the product description</p>

                </v-sheet>
                <v-sheet class="cardStyle mt-4 ">
                    <div class="d-flex mb-4 align-center">

                        <p style="color: #333;
font-size: 20px;
font-weight: 600;"> Product Image
                        </p>
                        <div class="ml-1">
                            <v-icon size="16" icon="mdi mdi-information"> </v-icon>
                            <v-tooltip activator="parent" location="end" class="text-red">
                                Image</v-tooltip>
                        </div>
                    </div>

                    <v-row>
                        <v-col cols="12" md="4">
                            <v-img contain width="100%" class="bg-grey-lighten-4  rounded-lg" height="298"
                                src="https://res.cloudinary.com/payhospi/image/upload/v1688130445/ankara-sneakers-1500-x_lnanzk.png"></v-img>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div class="d-flex justify-center align-center pa-2 rounded-lg"
                                style="height: 298px;width: 100%;border: 3.4px dashed #e1e1e1 ;">
                                <div class="text-center">

                                    <v-avatar size="41" class="mb-2" rounded="lg">
                                        <v-img
                                            src="https://res.cloudinary.com/payhospi/image/upload/v1688131104/gallery_j91r7n.png"></v-img>
                                    </v-avatar>
                                    <p style="
                        color: #333;
                        font-size: 14px;
                        font-weight: 400;">Drop your images here, or</p>
                                    <p style=" #333;
font-size: 14px;
font-weight: 400;">select <span style="color: #1273EB;">

                                            click to browse
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <div class="d-flex justify-center mb-4 align-center pa-2 rounded-lg"
                                style="height: 141px;width: 100%;border: 3.4px dashed #e1e1e1 ;">
                                <div class="text-center">

                                    <v-avatar size="41" class="mb-2" rounded="lg">
                                        <v-img
                                            src="https://res.cloudinary.com/payhospi/image/upload/v1688131104/gallery_j91r7n.png"></v-img>
                                    </v-avatar>
                                    <p style="
                        color: #333;
                        font-size: 14px;
                        font-weight: 400;">Drop your images here, or</p>
                                    <p style=" #333;
font-size: 14px;
font-weight: 400;">select <span style="color: #1273EB;">

                                            click to browse
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex justify-center align-center mt-2 pa-2 rounded-lg"
                                style="height: 141px;width: 100%;border: 3.4px dashed #e1e1e1 ;">
                                <div class="text-center">

                                    <v-avatar size="41" class="mb-2" rounded="lg">
                                        <v-img
                                            src="https://res.cloudinary.com/payhospi/image/upload/v1688131104/gallery_j91r7n.png"></v-img>
                                    </v-avatar>
                                    <p style="
                        color: #333;
                        font-size: 14px;
                        font-weight: 400;">Drop your images here, or</p>
                                    <p style=" #333;
font-size: 14px;
font-weight: 400;">select <span style="color: #1273EB;">

                                            click to browse
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                            <p style="color:  #969696;
font-size: 12px;
font-weight: 400;" class="mt-4">You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with background color standards. Pictures must be in certain dimensions. Notice that the product shows all the details.
</p>
                </v-sheet>
                <v-sheet class="cardStyle mt-4 ">
                    <div class="d-flex mb-4 align-center">

                        <p style="color: #333;
font-size: 20px;
font-weight: 600;"> Inventory
                        </p>
                        <div class="ml-1">
                            <v-icon size="16" icon="mdi mdi-information"> </v-icon>
                            <v-tooltip activator="parent" location="end" class="text-red">
                                inventory</v-tooltip>
                        </div>
                    </div>
                    <v-checkbox v-model="checkqty" density="compact" color="#00966D">
       <template v-slot:label>
         <div style="color: #333;
font-size: 14px;
font-weight: 500;
line-height: 20px;" class="ml-2 font-weight-medium">
             Track Quantity

         </div>
       </template>
     </v-checkbox>
                   <div class="d-flex align-center justify-space-between">
<p style="color: var(--carbon-4, #333);
font-size: 14px;
font-weight: 400;
line-height: 24px;">Total available product</p>
<div class="d-flex pa-1" style="border-radius: 6px;
border: 1px solid  #CECECE;width: 141px;">
<v-text-field density="compact" hide-details variant="outline" value="0"></v-text-field>
<div>
    <v-btn size="x-small" height="18px" color="grey-lighten-3" flat class="pa-0 mb-1 d-flex align-center text-grey-darken-2 rounded-lg" icon="mdi mdi-menu-up"></v-btn>
    <v-btn size="x-small" height="18px" color="grey-lighten-3" flat class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg" icon="mdi mdi-menu-down"></v-btn>
</div>
</div>
</div>
<v-divider class="my-4"></v-divider>
<div class="d-flex align-center justify-space-between">

<p style="color:#333;
font-size: 14px;
font-weight: 400;
line-height: 24px;">Mininum Stock Notification</p>
<div class="d-flex pa-1" style="border-radius: 6px;
border: 1px solid  #CECECE;width: 141px;">
<v-text-field density="compact" hide-details variant="outline" value="0"></v-text-field>
<div>
    <v-btn size="x-small" height="18px" color="grey-lighten-3" flat class="pa-0 mb-1 d-flex align-center text-grey-darken-2 rounded-lg" icon="mdi mdi-menu-up"></v-btn>
    <v-btn size="x-small" height="18px" color="grey-lighten-3" flat class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg" icon="mdi mdi-menu-down"></v-btn>
</div>
</div>

 </div>
 <v-divider class="my-4"></v-divider>

 <v-checkbox hide-details density="compact" color="#00966D">
       <template v-slot:label>
         <div 
         style="color: #333;
                font-size: 14px;
                font-weight: 500;
                line-height: 20px;" 
            class="ml-2 font-weight-medium">
           This product has a SKU or barcode

         </div>
       </template>
     </v-checkbox>
           
                </v-sheet>
                <v-sheet class="cardStyle mt-4 ">
                    <div class="d-flex mb-4 align-center">

                        <p style="color: #333;
font-size: 20px;
font-weight: 600;"> Shipping
                        </p>
                   
                    </div>
            
                   <div style="overflow: hidden;" class="cardStyle rounded-lg px-0 py-0">
<div class="pa-4" style="background:#EDF3F0;">
     <v-radio v-model="radioship" hide-details density="compact" color="#00966D">
       <template v-slot:label>
         <div style="color: #00966D;
font-size: 14px;
font-weight: 500;
line-height: 20px;" class="ml-2 font-weight-medium">
           Physical Product

         </div>
       </template>
     </v-radio >
    </div>
    <div class="pa-4">

    <p class="inputLabel">Shipping weight</p>
    <div class="d-flex my-2">

        <v-text-field style="max-width: 180px;" class="mr-3 rounded-lg bg-grey-lighten-3" density="compact" hide-details variant="outline" value="0.00"></v-text-field>
        <div class="d-flex  bg-grey-lighten-3" style="border-radius: 6px;
width: 121px;">
<v-text-field density="compact" hide-details variant="outline" value="lb"></v-text-field>
<div>
    <v-btn size="x-small" height="18px" color="grey-lighten-3" flat class="pa-0 mb-0 d-flex align-center text-grey-darken-2 rounded-lg" icon="mdi mdi-menu-up"></v-btn>
    <v-btn size="x-small" height="18px" color="grey-lighten-3" flat class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg" icon="mdi mdi-menu-down"></v-btn>
</div>
</div>
</div>
<v-checkbox hide-details density="compact" color="#00966D">
      <template v-slot:label>
        <div style="color: #333;
font-size: 14px;
font-weight: 500;
line-height: 20px;" class="ml-2 font-weight-medium">
         This product ships internationally

        </div>
      </template>
    </v-checkbox>
    </div>

</div>
<div style="overflow: hidden;" class="rounded-lg cardStyle px-0 mt-4 py-0">
<div class="pa-4" style="background:#fff;">
     <v-radio  hide-details density="compact" color="#00966D">
        <template v-slot:label>
         <div style="color: #333;
font-size: 14px;
font-weight: 500;
line-height: 20px;" class="ml-2 font-weight-medium">
           Digital product or services

         </div>
       </template>
        </v-radio>
        </div>
        </div>

           
                </v-sheet>
                <v-sheet class="cardStyle mt-4 ">
                    <div class="d-flex  align-center">

                        <p style="color: #333;
font-size: 20px;
font-weight: 600;"> Selling Type
                        </p>
                   
                    </div>
                    <v-divider class="my-4"></v-divider>
                    <v-checkbox v-model="radioship" hide-details density="compact" color="#00966D">
      <template v-slot:label>
        <div style="color: #333;
font-size: 14px;
font-weight: 500;
line-height: 20px;" class="ml-2 font-weight-medium">
        In-store selling only

        </div>
      </template>
    </v-checkbox>
                    <v-checkbox  hide-details density="compact" color="#00966D">
      <template v-slot:label>
        <div style="color: #333;
font-size: 14px;
font-weight: 500;
line-height: 20px;" class="ml-2 font-weight-medium">
        Online selling only

        </div>
      </template>
    </v-checkbox>
                    <v-checkbox  hide-details density="compact" color="#00966D">
      <template v-slot:label>
        <div style="color: #333;
font-size: 14px;
font-weight: 500;
line-height: 20px;" class="ml-2 font-weight-medium">
      Available both in-store and online

        </div>
      </template>
    </v-checkbox>

           
                </v-sheet>
                <v-sheet class="cardStyle mt-4 pb-8">
                    <div class="d-flex  align-center">

                        <p style="color: #333;
font-size: 20px;
font-weight: 600;"> Variants
                        </p>
                   
                    </div>
                    <v-divider class="my-4"></v-divider>
            <p style="color: #1273EB;
font-size: 14px;
font-weight: 600;" class=" d-flex align-center"><v-icon icon="mdi mdi-plus" class="mr-2"></v-icon> Add Options like size or color</p>

           
                </v-sheet>





            </v-col>
            <v-col cols="12" sm="4">
                <v-sheet class="cardStyle">
                    <div class="d-flex  align-center">

                        <p style="color: #333;
font-size: 20px;
font-weight: 600;"> Product status
                        </p>
                    </div>
                    <v-select class="mt-4" append-inner-icon="mdi mdi-chevron-down" placeholder="Active" density="comfortable"  >
     </v-select>
           
                </v-sheet>
                <v-sheet class="cardStyle px-0 mt-4">
                    <div class="px-5">

                    <div class="d-flex  align-center">

                        <p style="color: #333;
font-size: 20px;
font-weight: 600;"> Pricing
                        </p>
                    </div>
                    <v-row class="mt-6">
                 <v-col> 
        <p class="inputLabel">Price</p>             
     <v-text-field placeholder="€ 0.00" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col> 
                     <p class="inputLabel">Compare-at price</p>             
            
     <v-text-field placeholder="€ 0.00" density="comfortable"  >
         </v-text-field></v-col>
         </v-row>  
         <v-checkbox  hide-details density="compact" color="#00966D">
      <template v-slot:label>
        <div style="color: #333;
font-size: 14px;
font-weight: 500;
line-height: 20px;" class="ml-2 font-weight-medium">
     Charge tax on this product

        </div>
      </template>
    </v-checkbox>  
</div>
         <v-divider class="my-4"></v-divider>  
         <div class="px-5">

         <p class="inputLabel">Cost per item</p>             
     <v-text-field placeholder="€ 0.00" density="comfortable"  >
         </v-text-field>  <p class="inputLabel">Profit</p>             
     <v-text-field placeholder="€ 0.00" density="comfortable"  >
         </v-text-field>  <p class="inputLabel">Margin</p>             
     <v-text-field placeholder="€ 0.00" density="comfortable"  >
         </v-text-field>         </div>  

                </v-sheet>
                <v-sheet class="cardStyle mt-4">
                    <div class="d-flex  align-center">

                        <p style="color: #333;
font-size: 20px;
font-weight: 600;"> Product status
                        </p>
                    </div>
                    <p class="inputLabel mt-4">Category</p>             

                    <v-select  class="mt-4" append-inner-icon="mdi mdi-chevron-down" placeholder="Fashion and style" density="comfortable"  >
     </v-select>
                    <p class="inputLabel">Sub Category</p>             

                    <v-select class="mt-4" append-inner-icon="mdi mdi-chevron-down" placeholder="Sneakers" density="comfortable"  >
     </v-select>
                    <p class="inputLabel">Gender</p>             

                    <v-select class="mt-4" append-inner-icon="mdi mdi-chevron-down" placeholder="Unisex" density="comfortable"  >
     </v-select>
     <p class="inputLabel">Tags</p>             
     <v-text-field placeholder="Find or create tags" density="comfortable"  >
         </v-text-field>         
           <div>
            <v-chip size="small" class="ma-1" style="border: 0.5px solid var(--magnetic-green-3, #94AAA5);" close-icon="mdi mdi-close-circle-outline" rounded="lg" v-for="n in tags" :key="n" closable>
  {{n}}
</v-chip>
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
            radioship:true,
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
            content: '<p>This sneakers is made from one of the best  ankara material in Ghana</p>',
        })
    },
    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>