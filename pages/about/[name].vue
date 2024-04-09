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
		"
	>
		<div style="width: 95%; margin: auto" class="py-2">
			<div class="d-flex" style="">
				<p
					style="cursor: pointer; font-size: 14px"
					:class="select == n ? 'text-green font-weight-bold' : ''"
					@click="selectCategory(n)"
					class="font-weight-medium text-capitalize py-3 px-2 mr-4 text-grey"
					v-for="(n, i) in ['who we are', 'what we do', 'Our impact and goals']"
					:key="n"
				>
					{{ n }} <v-icon :style="i === 2 ? 'display : none' : ''" icon="mdi mdi-chevron-right"></v-icon>
				</p>
			</div>
		</div>
	</div>

	<whoWeAre v-if="select == 'who we are'" style="margin-bottom: 100px" />
	<div v-else-if="select == 'what we do'" style="margin-bottom: 100px">
		<hi>What we do</hi>
	</div>
	<our-impact-and-goal v-else-if="select == 'Our impact and goals'" style="margin-bottom: 100px" />
	<whoWeAre v-else style="margin-bottom: 100px" />

	<Mainfooter />
</template>
<script>
export default {
	data() {
		return {
			showImg: false,
		};
	},
	computed: {
		select() {
			return this.$route.params.name;
		},
		categoryColor() {
			return this.select == "who we are"
				? "EDF0EF"
				: this.select == "what we do"
				? "FDF1ED"
				: this.select == "Our impact and goals"
				? "EDEDED"
				: "EDF0EF";
		},
	},
	// mounted() {
	// 	this.imgloader();
	// },
	methods: {
		selectCategory(n) {
			this.$router.push("/about/" + n);
		},
	},
};
</script>
