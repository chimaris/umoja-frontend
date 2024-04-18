<template>
	<div style="background-color: #f8f8f8; padding: 20px 0">
		<!-- <regHeader /> -->

		<v-row class="">
			<v-col cols="12" style="max-width: 400px" class="pb-0 dash" md="3">
				<!-- <div class="w-100" style="height: calc(100vh - 96px); position: sticky; top: 69px"> -->

				<v-card class="rounded-0 py-4 pl-4" flat color="#F6F7F9" min>
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
				<!-- </div> -->
			</v-col>
			<v-col cols="12" class="pb-0 dash" md="7">
				<v-card min-height="100vh" height="auto" class="pa-4" flat min style="background-color: #f8f8f8">
					<v-window v-model="window">
						<v-window-item value="Business Info">
							<business @submit="submit" />
						</v-window-item>
						<v-window-item value="Contact">
							<editcontact @submit="submit" />
						</v-window-item>
						<v-window-item value="Account">
							<editvendoraccount @submit="submit" />
						</v-window-item>
						<v-window-item value="Subcription">
							<subscription @submit="submit" />
						</v-window-item>
					</v-window>
				</v-card>
			</v-col>
			<v-col cols="12" class="pt-8" md="2">
				<v-progress-linear :model-value="(100 / 4) * formSect" color="light-green-darken-4"></v-progress-linear>
				<span class="mt-2 float-right" style="font-weight: 600; font-size: 14px; text-align: right">{{ formSect }}/4 Complete</span>
			</v-col>
		</v-row>
	</div>
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
			stage: "Business Info",
			formSect: 1,
			items: [
				{
					id: 1,
					name: "Business Info",
				},
				{
					id: 2,
					name: "Contact",
				},
				{
					id: 3,
					name: "Account",
				},
				{
					id: 4,
					name: "Subcription",
				},
			],
		};
	},
	computed: {
		window() {
			return this.stage;
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
			this.stage = item.name;
		},
		submit(e) {
			this.stage = this.items[this.formSect].name;
			this.$router.push("/vendor/dashboard/ProfileSetup/" + this.stage);
		},
	},
	mounted() {
		window.scrollTo(0, 0);
		this.window = this.$route.params.name ? this.$route.params.name : "Business";
		this.getIdFromName(this.window);
	},
};
</script>
