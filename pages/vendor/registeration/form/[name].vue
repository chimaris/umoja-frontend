<template>
	<div style="background-color: #f8f8f8">
		<regHeader />

		<v-row>
			<v-col cols="12" style="max-width: 400px" class="pb-0 dash" md="3">
				<div class="w-100" style="height: calc(100vh - 96px); position: sticky; top: 69px">
					<div style="position: absolute; left: 24px; bottom: 22px" class="d-flex pt-12 mt-12 justify-space-between align-center">
						<v-avatar class="" @click="$router.push('/home2')" size="135" style="cursor: pointer; height: auto !important" rounded="0">
							<v-img eager src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png"></v-img>
						</v-avatar>
					</div>
					<v-card class="rounded-0 py-4 pl-4 pt-12" height="256px" flat color="#F6F7F9" min>
						<v-timeline density="compact" side="end" truncate-line="start">
							<v-timeline-item
								v-model="stage"
								fill-dot
								v-for="item in items"
								:key="item.id"
								style="cursor: pointer"
								@click="stageFn(item)"
								:dot-color="item.id == formSect ? '#00966D' : formSect > item.id ? '#00966D' : 'grey-lighten-2'"
								size="x-small"
							>
								<template v-slot:icon> <v-icon size="14" color="white" :icon="formSect > item.id ? 'mdi mdi-check' : ''"></v-icon> </template>
								<p style="font-weight: 500; font-size: 16px" :class="item.id == formSect ? 'text-black' : 'text-grey'">
									{{ item.id + ". " + item.name }}
								</p>
							</v-timeline-item>
						</v-timeline>
					</v-card>
				</div>
			</v-col>
			<v-col cols="12" class="pb-0 dash" md="9">
				<v-card min-height="100vh" height="auto" class="pa-4 py-8" flat color="#fff" min>
					<v-window v-model="window">
						<v-window-item value="Companys Information">
							<tellus @submit="submit" />
						</v-window-item>
						<v-window-item value="Ownership Information">
							<Ownerinfo @submit="submit" />
						</v-window-item>
						<v-window-item value="Business Documentation">
							<Documentation @submit="submit" />
						</v-window-item>
						<v-window-item value="Review and Submit">
							<Reviewsubmit @submit="submit" />
						</v-window-item>
					</v-window>
				</v-card>
			</v-col>
		</v-row>
	</div>
	<tutorial />
</template>
<style>
.v-timeline--vertical .v-timeline-item:last-child .v-timeline-divider__after {
	display: none;
}
</style>
<script>
export default {
	data() {
		return {
			stage: "Companys Information",
			formSect: 1,
			items: [
				{
					id: 1,
					name: "Companys Information",
				},
				{
					id: 2,
					name: "Ownership Information",
				},
				{
					id: 3,
					name: "Business Documentation",
				},
				{
					id: 4,
					name: "Review and Submit",
				},
			],
		};
	},
	mounted() {
		window.scrollTo(0, 0);
		this.window = this.$route.params.name ? this.$route.params.name : "Companys Information";
		this.getIdFromName(this.window);
	},
	computed: {
		window() {
			return this.$route.params.name ? this.$route.params.name : "Companys Information";
		},
	},
	methods: {
		getIdFromName(name) {
			this.items.forEach((item, index) => {
				if (item.name == name) {
					this.formSect = item.id;
				}
			});
		},
		stageFn(item) {
			this.formSect = item.id;
			// alert(9)
			this.$router.push("/vendor/registeration/form/" + item.name);
			this.window = item.name;
			this.stage = item.name;
		},
		submit() {
			// this.formSect = parseInt(this.formSect) + 1;
			this.stage = this.items[this.formSect].name;
			this.$router.push("/vendor/registeration/form/" + this.stage);
			// alert(this.stage)
		},
	},
};
</script>
