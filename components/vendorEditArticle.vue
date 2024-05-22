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
                        Edit Article
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
                        <p style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px; letter-spacing: -0.2px;">Cover Title</p>
                    </div>
                    <v-text-field class="mt-4 headerso" placeholder="Header" :rules="inputRules" v-model="editArticle.title"></v-text-field>
                    <div class="d-flex justify-space-between">
                        <p style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px; letter-spacing: -0.2px;">Category</p>
                    </div>
                    <v-select placeholder="Select article category" :rules="inputRules" :items="categories.map(category => category.name)" v-model="editArticle.category_name" density="comfortable"> </v-select
						>
                    <div class="d-flex justify-space-between">
                        
                        <p style="color: #333;
font-size: 14px;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.2px;">Cover Image</p>

</div>
<div @dragenter.prevent @dragleave.prevent @dragover.prevent @drop.prevent="drop($event)" class=" justify-space-between">
    <v-card v-if="imagePreview.length > 0"
		width="100%"
		:image="imagePreview[0]"
		flat
		style="border-radius: 6px"
		height="266"
		class="d-flex justify-end align-start pa-2"
		color="#F8F8F8">
		<v-btn @click="imagePreview = []" size="x-small" class="rounded-xl" icon="mdi mdi-trash-can-outline"> </v-btn>
	</v-card>
    <v-card v-else width="100%" flat style="border-radius: 6px; border: 3px dashed var(--carbon-2, #CECECE);" height="266" class=" mt-4 d-flex justify-center align-center" color="#F8F8F8">
        <div class=" text-center">
            <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1688740513/gallery_azmmka.png" class="rounded-lg mx-auto mb-2" width="41"></v-img>
            <p style="color: #333; font-size: 14px; max-width: 473px; font-weight: 400;">
                Add a cover image that complements your article to attract more readers.
                We recommend uploading an image that is <span style="font-weight: 700;">1920x1080 pixels
                </span> .
            </p>
            <v-label for="coverImg" style="border: 1px solid #e5e5e5; padding: 8px"  variant="outlined" class="mt-4"><span  style="font-size: 14px;">Upload Cover</span> </v-label>
            <input style="display: none" id="coverImg" type="file" @change="handleFileInputChange($event)"/>
        </div>
    </v-card>
<p style="color: #B00020; font-size: 14px; margin-top: 10px">{{pictureError}}</p>

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

                            <editor-content :editor="editor" v-model="articleContent"/>
                        </div>
                    </v-card>
                    <p style="color: #B00020; font-size: 14px; margin-top: 10px">{{artError}}</p>
             
                </v-sheet>
              
           
               

            </v-col>
            <v-col cols="12" sm="4" v-if="allArticles.length > 0">
                <v-sheet class="cardStyle px-0">
                    <div class="d-flex px-6 mb-6 mt-2 justify-space-between align-center">
                        <p style="color: #333;
                            font-size: 20px;
                            font-weight: 600;"> Latest Articles
                        </p>
                    </div>
              <div v-for="n in allArticles.slice(0, 3)" :key="n" class="px-6">

           <div  class="mb-4 d-flex ">
            <v-avatar size="50">
                <v-img :src="n.vendor_profile_photo"></v-img>
            </v-avatar>
            <div  class="ml-3">

            <div class="d-block   mt-1">
   <div class="d-flex align-center">
    <p style="color: #1E1E1E;
            font-size: 16px;
            font-weight: 600;
            line-height: 140%;">{{n.vendor_firstname}} {{n.vendor_lastname}}</p> 
       <v-icon class="mx-1" size="5" color="grey-lighten-1" icon="mdi mdi-circle"></v-icon>
       <p 
            style="color: #969696;
            font-size: 14px;
            font-weight: 400;
            line-height: 140%;">{{getdateRegistered(n.created_at)}}</p>
   </div>
    </div> 
<div class="d-flex align-center  mt-1">
<p 
    style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;">{{n.category_name}}</p>
</div>


</div>
</div>
<v-card  flat color="grey-lighten-4" :image="n.cover_image" width="100%" height="188px" class="d-flex align-center justify-center rounded-lg">
    
</v-card>
<p class="mt-4 mb-2" style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 700;
line-height: 140%;">{{n.title}}</p>
<div v-html="n.content" style="display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis" class="article-content"></div>
<!-- <p style="color: var(--carbon-3, #969696); font-size: 14px; font-weight: 400; line-height: 140%; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;
">{{n.content}}</p> -->
<v-btn @click="$router.push(`/article_detail/${n.id}`)" size="small" color="#1273EB" class="px-0" variant="text">
    <span style="color: var(--deep-sky-blue-4, #1273EB);
font-size: 14px;
font-weight: 600;">

        Read more 
    </span>
    <v-icon size="small" class="ml-4" icon="mdi mdi-arrow-right"></v-icon></v-btn>
    <v-divider class="my-5"></v-divider>
</div>


<div class="px-5 pt-2 mt-2">

    <v-btn @click="$router.push('/article_page')" block style="    border: 1px solid #e5e5e5;"  variant="outlined"><span style="color: var(--grey-1000, #1A1D1F);

font-size: 12px;
font-weight: 600;">View all Articles</span></v-btn>
</div>
</v-sheet>
              
            </v-col>
        </v-row>
        <p class="d-flex justify-end"  style="color: #B00020; font-size: 14px; margin-bottom: 10px; margin-top: 10px">{{postStore.errorArticle}}</p>
		<div class="d-flex justify-end">
			<v-btn @click="handleArticle()" class="mx-2" style="border: 1px solid #e5e5e5" size="large" color="green" flat>
				<span style="font-size: 14px; margin-right: 10px; font-weight: 600; line-height: 20px"> Save changes </span>
				<v-progress-circular v-if="postStore.load4" indeterminate :width="2" :size="18"></v-progress-circular>
			</v-btn>
        </div>
    </v-container>
</template>
<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import {inputRules} from '~/utils/formrules'
import {ref, onMounted, computed} from 'vue'
import {getdateRegistered} from '~/utils/date'
import { fetchCategories, getCategoryId } from "~/composables/useCategories";
import {useCreateStore} from '~/stores/createPostStore'

export default {
    setup(){
        const postStore = useCreateStore()
        const allArticles = computed(() => postStore.articles)
        const editArticle = computed(() => postStore.articleToEdit)
        const categories = ref([])
        const imagePreview = ref([editArticle.value.cover_image])
        const editor =  ref(null)
        const pictureError = ref("")
        const artError = ref("")
        const articleContent = ref("")


        onMounted(async () => {
            categories.value = await fetchCategories()
        })
    function handleFileInputChange(event) {
      const file = event.target.files[0]; // Get the first selected file
      if (!file) return; // Return if no file is selected
	  		const allowedFiles = [".svg", ".png", ".jpeg", ".jpg"]
			const maxFileSize = 5 * 1024 * 1024;
			const fileExtension = file.name.split(".").pop().toLowerCase();
    
		if (!allowedFiles.includes("." + fileExtension)) {
			pictureError.value = "Please upload files having extensions: " + allowedFiles.join(', ');
			return;
		}


        pictureError.value = ""

		if (file.size > maxFileSize) {
            pictureError.value = "File size exceeds the maximum allowed size of 5MB";
		return;
		}
      const reader = new FileReader();

      // Define onload event handler
      reader.onload = () => {
        // Update imagePreviews array with Base64 data of the selected file
		
		imagePreview.value[0] = reader.result
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    }
    function drop(event) {
        const file= event.dataTransfer.files[0] // Get the first selected file
      if (!file) return; // Return if no file is selected
	  		const allowedFiles = [".svg", ".png", ".jpeg", ".jpg"]
			const maxFileSize = 5 * 1024 * 1024;
			const fileExtension = file.name.split(".").pop().toLowerCase();
    
		if (!allowedFiles.includes("." + fileExtension)) {
			pictureError.value = "Please upload files having extensions: " + allowedFiles.join(', ');
			return;
		}

        pictureError.value = ""

		if (file.size > maxFileSize) {
            pictureError.value = "File size exceeds the maximum allowed size of 5MB";
		return;
		}
      const reader = new FileReader();

      // Define onload event handler
      reader.onload = () => {
        // Update imagePreviews array with Base64 data of the selected file
		
		imagePreview.value[0] = reader.result
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    }

        return{
            editArticle,
            categories,
            handleFileInputChange,
            imagePreview,
            pictureError,
            drop,
            postStore,
            articleContent,
            allArticles
        }
    },
    components: {
        EditorContent,
    },
    data() {
        return {
            tags:['Fashion', 'Sneakers', 'Unisex shoes', 'Men shoes', 'Black', 'Fashion and style', 'Ghana Ankara Material'],
            checkqty: true,
            window: 'basic',
            radioship:true,
            chip: 'All',
            chosen: '',
        }
    },
    methods: {
        async handleArticle(){
            this.artError = ""
            if (this.articleContent.length < 200){
                this.artError = "length of character is less than the minimum required length of 150 characters"
                return
            }   
            // if (articleContent.value.length > 600){
            //     artError.value = "length of character exceeds the maximum limit of 600 characters"
            //     return
            // }
            if (this.editArticle.category_name && this.articleContent && this.editArticle.title && this.imagePreview){
                const data = {
                    title: this.editArticle.title,
                    content: this.articleContent,
                    category_id: getCategoryId(this.editArticle.category_name, this.categories)
                }
                const res = await this.postStore.editArticle(this.imagePreview, data)
                if (res){
                    this.postStore.errorArticle = ""
                    this.$router.push('/vendor/dashboard/Articles')
                }
            }
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
            content: this.editArticle.content,
        })

        this.editor.on('update', ({ editor }) => {
      	this.articleContent = editor.getHTML() // or use getText() for plain text
    	});
        this.editor.commands.setContent(this.editArticle.content);
    },
    beforeDestroy() {
    if (this.editor) {
        this.editor.destroy();
    }
    }
}
</script>