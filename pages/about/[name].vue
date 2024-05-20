<template>
	<Header2 />
	<div
		style="
			position: sticky;
			top: 0;
			backdrop-filter: blur(7px);
			background: rgba(255, 255, 255, 0.906);
			z-index: 999;
			border-bottom: 1px solid #ededed;
			border-top: 1px solid #ededed;
			padding: 6px;
		"
	>
		<v-container style="max-width: 1400px; width: 100%; overflow: hidden">
			<v-breadcrumbs class="pl-0 py-0 w-full" :items="breadcrumbItems">
				<template v-slot:divider>
					<v-icon icon="mdi mdi-chevron-right"></v-icon>
				</template>
				<template v-slot:item="{ item }">
					<span
						@click="selectCategory(item.text)"
						class="d-inline-block text-truncate"
						:class="{ 'text-green font-weight-bold': select === item.text }"
						style="cursor: pointer; font-size: 14px"
						:style="{ 'max-width': $vuetify.display.mobile ? '100px' : '100%' }"
					>
						{{ item.text }}
					</span>
				</template>
			</v-breadcrumbs>
		</v-container>
	</div>

	<div style="margin-bottom: 100px">
		<who-we-are v-if="select === 'who we are'" />
		<what-we-do v-else-if="select === 'what we do'" />
		<our-impact-and-goal v-else-if="select === 'Our impact and goals'" />
		<who-we-are v-else />
	</div>

	<mainfooter :maxwidth="'1200px'" />
</template>

<script>
export default {
	data() {
		return {
			select: this.$route.params.name || "who we are",
			breadcrumbItems: [{ text: "who we are" }, { text: "what we do" }, { text: "Our impact and goals" }, { text: "" }],
		};
	},
	watch: {
		"$route.params.name": {
			immediate: true,
			handler(newValue) {
				this.select = newValue || "who we are";
			},
		},
	},
	methods: {
		selectCategory(category) {
			this.select = category;
			this.$router.push(`/about/${category}`);
		},
	},
};
</script>

<style scoped>
.text-green {
	color: green;
}
.font-weight-bold {
	font-weight: bold;
}
</style>
