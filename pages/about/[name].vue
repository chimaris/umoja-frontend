<template>
	<Header2 />
	<div
		style="
			position: sticky;
			top: 0px;
			backdrop-filter: blur(7px);
			background: rgba(255, 255, 255, 0.906);
			z-index: 999;
			border-bottom: 1px solid #ededed;
			border-top: 1px solid #ededed;
			padding: 6px;
		"
	>
		<v-container style="max-width: 1400px; width: 100%">
			<v-breadcrumbs class="pl-0 py-0" :items="['who we are', 'what we do', 'Our impact and goals', '']">
				<template v-slot:divider>
					<v-icon icon="mdi mdi-chevron-right"></v-icon>
				</template>
				<template v-slot:title="{ item }">
					<span @click="selectCategory(item)" :class="{ 'text-green font-weight-bold': select === item }" style="cursor: pointer; font-size: 14px">
						{{ item }}
					</span>
				</template>
			</v-breadcrumbs>
		</v-container>
	</div>

	<div style="margin-bottom: 100px">
		<whoWeAre v-if="select === 'who we are'" />
		<div v-else-if="select === 'what we do'">
			<v-container style="max-width: 1400px; width: 100%">
				<hi>What we do page goes here</hi>
			</v-container>
		</div>
		<our-impact-and-goal v-else-if="select === 'Our impact and goals'" />
		<whoWeAre v-else />
	</div>

	<Mainfooter />
</template>

<script>
export default {
	data() {
		return {
			select: this.$route.params.name,
		};
	},
	methods: {
		selectCategory(category) {
			this.select = category;
			this.$router.push("/about/" + category);
		},
	},
};
</script>
