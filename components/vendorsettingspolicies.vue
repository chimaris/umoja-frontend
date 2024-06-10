<template>
	<div>
		<p style="color: #000; font-size: 20px; font-weight: 600" class="pa-5">Policies</p>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<p style="font-size: 20px; font-weight: 600">Store Policies</p>
			<p style="font-size: 16px; font-weight: 500; color: #969696; width: 85%">
				Saved policies are automatically linked in the footer of your checkout and can be
				<span style="color: #1273eb">added to your online store menu.</span> Templates aren’t legal advice. By using these templates, you agree that
				you’ve read and agree to the <span style="color: #1273eb">disclaimer.</span>
			</p>

			<div class="mt-5" style="border: 1px solid #cecece; border-radius: 15px">
				<div class="d-flex justify-space-between align-center w-100 pa-4">
					<p style="font-size: 18px; font-weight: 600; color: #333">Return Policy</p>
					<v-btn variant="text" class="ml-4 menubar text-grey-darken-3" size="default" style="font-weight: 600; font-size: 16px">
						<v-icon class="mr-2" icon="mdi mdi-pencil-outline"></v-icon>
						Edit
					</v-btn>
				</div>
				<v-divider></v-divider>

				<div class="pa-4">
					<div class="d-flex justify-space-between align-center w-100">
						<div class="d-flex py-2">
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">Return Rule</p>
								<p style="font-size: 16px; font-weight: 500; color: #969696; width: 85%">
									Define conditions for <span style="color: #1273eb">customer return requests</span> and returns using Point of Sale. Return rules
									will only apply to items purchased after the return rules were turned on or updated.
								</p>
							</div>
						</div>
						<div>
							<v-btn
								@click="deliveryDateModal = true"
								style="border: 1px solid #e5e5e5"
								variant="outlined"
								size="default"
								class="ml-4 menubar text-grey-darken-3"
							>
								Update
							</v-btn>
						</div>
					</div>

					<div class="d-flex justify-space-between align-center pa-4" style="border: 1px solid #cecece; border-radius: 15px">
						<div>
							<ul
								v-for="item in ['Returns accepted for 30 davs', 'Free return shipping', 'No restocking fee', 'No tina said items']"
								:key="item"
								class="mx-5"
							>
								<li style="font-weight: 500; font-size: 16px; color: #969696">{{ item }}</li>
							</ul>
						</div>
						<span @click="isConditionPrice = !isConditionPrice" style="color: #1273eb; font-weight: 500; font-size: 14px; cursor: pointer">
							<span>Manage</span>
						</span>
					</div>
				</div>
			</div>
		</div>
		<v-card class="pa-5 cardStyle mx-5 my-4">
			<div class="mb-5">
				<p class="inputLabel mt-4">Written return and refund policy</p>
				<p>Create the written return policy that your customers will see on your online store.</p>
				<v-card height="auto" class="mx-auto pt-2 coolTable pb-0 mb-1" width="100%" style="overflow: hidden" flat>
					<div class="bg-white d-flex justify-space-between px-2 pb-2" v-if="editor">
						<!-- :disabled="!editor.can().chain().focus().toggleBold().run()" -->
						<div>
							<v-btn
								flat
								icon="mdi mdi-format-italic"
								class="mr-1"
								@click="editor.chain().focus().toggleItalic().run()"
								:class="{ 'is-active': editor.isActive('italic') }"
							>
							</v-btn>
							<v-btn
								flat
								icon="mdi mdi-format-bold"
								class="mr-1"
								@click="editor.chain().focus().toggleBold().run()"
								:class="{ 'is-active': editor.isActive('bold') }"
							>
							</v-btn>
							<v-btn
								flat
								class="mr-1"
								@click="editor.chain().focus().toggleUnderline().run()"
								icon="mdi mdi-format-underline"
								:class="{ 'is-active': editor.isActive('underline') }"
							>
							</v-btn>
							<v-btn
								flat
								icon="mdi mdi-format-strikethrough"
								class="mr-1"
								@click="editor.chain().focus().toggleStrike().run()"
								:class="{ 'is-active': editor.isActive('strike') }"
							>
							</v-btn>
							<v-btn flat icon="mdi mdi-link-variant" class="mr-1" @click="setLink" :class="{ 'is-active': editor.isActive('link') }"> </v-btn>
							<v-btn
								flat
								icon="mdi mdi-link-variant-off"
								class="mr-1"
								@click="editor.chain().focus().unsetLink().run()"
								:disabled="!editor.isActive('link')"
							>
							</v-btn>
							<v-btn flat icon="mdi mdi-format-align-left" class="mr-1" @click="editor.chain().focus().setTextAlign('left').run()"> </v-btn>
							<v-btn flat icon="mdi mdi-format-align-center" class="mr-1" @click="editor.chain().focus().setTextAlign('center').run()"> </v-btn>
							<v-btn flat icon="mdi mdi-format-align-right" class="mr-1" @click="editor.chain().focus().setTextAlign('right').run()"> </v-btn>
							<v-btn
								flat
								icon="mdi mdi-format-list-bulleted"
								class="mr-1"
								@click="editor.chain().focus().toggleBulletList().run()"
								:class="{ 'is-active': editor.isActive('bullet') }"
							>
							</v-btn>
						</div>
						<div>
							<v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-left"></v-btn>
							<v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-right"></v-btn>
						</div>
					</div>
					<div style="min-height: 162px" class="bg-grey-lighten-4 pa-4">
						<editor-content :editor="editor" v-model="editorContent" />
					</div>
				</v-card>
				<p style="color: #b00020; font-size: 14px; margin: 5px 0">{{ descError }}</p>
				<p style="color: #969696; font-size: 12px; font-weight: 400">Do not exceed 500 characters when giving the product description</p>
			</div>
			<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="default" class="menubar text-grey-darken-3"> Create from template </v-btn>
		</v-card>
		<v-card class="pa-5 cardStyle mx-5 my-4">
			<div class="mb-5">
				<p class="inputLabel mt-4">Privacy</p>
				<v-card height="auto" class="mx-auto pt-2 coolTable pb-0 mb-1" width="100%" style="overflow: hidden" flat>
					<div class="bg-white d-flex justify-space-between px-2 pb-2" v-if="editor">
						<!-- :disabled="!editor.can().chain().focus().toggleBold().run()" -->
						<div>
							<v-btn
								flat
								icon="mdi mdi-format-italic"
								class="mr-1"
								@click="editor.chain().focus().toggleItalic().run()"
								:class="{ 'is-active': editor.isActive('italic') }"
							>
							</v-btn>
							<v-btn
								flat
								icon="mdi mdi-format-bold"
								class="mr-1"
								@click="editor.chain().focus().toggleBold().run()"
								:class="{ 'is-active': editor.isActive('bold') }"
							>
							</v-btn>
							<v-btn
								flat
								class="mr-1"
								@click="editor.chain().focus().toggleUnderline().run()"
								icon="mdi mdi-format-underline"
								:class="{ 'is-active': editor.isActive('underline') }"
							>
							</v-btn>
							<v-btn
								flat
								icon="mdi mdi-format-strikethrough"
								class="mr-1"
								@click="editor.chain().focus().toggleStrike().run()"
								:class="{ 'is-active': editor.isActive('strike') }"
							>
							</v-btn>
							<v-btn flat icon="mdi mdi-link-variant" class="mr-1" @click="setLink" :class="{ 'is-active': editor.isActive('link') }"> </v-btn>
							<v-btn
								flat
								icon="mdi mdi-link-variant-off"
								class="mr-1"
								@click="editor.chain().focus().unsetLink().run()"
								:disabled="!editor.isActive('link')"
							>
							</v-btn>
							<v-btn flat icon="mdi mdi-format-align-left" class="mr-1" @click="editor.chain().focus().setTextAlign('left').run()"> </v-btn>
							<v-btn flat icon="mdi mdi-format-align-center" class="mr-1" @click="editor.chain().focus().setTextAlign('center').run()"> </v-btn>
							<v-btn flat icon="mdi mdi-format-align-right" class="mr-1" @click="editor.chain().focus().setTextAlign('right').run()"> </v-btn>
							<v-btn
								flat
								icon="mdi mdi-format-list-bulleted"
								class="mr-1"
								@click="editor.chain().focus().toggleBulletList().run()"
								:class="{ 'is-active': editor.isActive('bullet') }"
							>
							</v-btn>
						</div>
						<div>
							<v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-left"></v-btn>
							<v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-right"></v-btn>
						</div>
					</div>
					<div style="min-height: 162px" class="bg-grey-lighten-4 pa-4">
						<editor-content :editor="editor" v-model="editorContent" />
					</div>
				</v-card>
				<p style="color: #b00020; font-size: 14px; margin: 5px 0">{{ descError }}</p>
				<p style="color: #969696; font-size: 12px; font-weight: 400">Do not exceed 500 characters when giving the product description</p>
			</div>
		</v-card>
	</div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
export default {
	data() {
		return {
			editor: null,
		};
	},

	mounted() {
		this.editor = new Editor({
			extensions: [
				StarterKit,
				Link,
				Underline,
				TextAlign.configure({
					types: ["heading", "paragraph"],
				}),
			],
		});

		this.editor.on("update", ({ editor }) => {
			this.editorContent = editor.getText(); // or use getText() for plain text
		});
	},
};
</script>

<style scoped>
.inputLabel {
	font-size: 14px;
	font-weight: 500;
	color: #333;
}
.v-text-field {
	cursor: pointer;
}
</style>
