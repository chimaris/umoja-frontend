<template>
	<div>
		<p style="color: #000; font-size: 20px; font-weight: 600" class="pa-5">Shipping and Delivery</p>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<p style="font-size: 20px; font-weight: 600">Two-factor Authentication</p>

			<v-select
				v-model="selected"
				:items="items"
				item-value="value"
				item-title="none"
				:label="computedLabel"
				outlined
				append-inner-icon=""
				class="my-5"
			>
				<template v-slot:selection="{ item }">
					<v-list-item>
						<div class="d-flex py-2">
							<v-avatar class="mr-4" size="50" color="#FDF1ED">
								<v-icon>{{ item.raw.icon }}</v-icon>
							</v-avatar>
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">{{ item.raw.text }}</p>
								<p style="font-size: 14px; font-weight: 400; color: #333333">{{ item.raw.description }}</p>
							</div>
						</div>
					</v-list-item>
				</template>
				<template v-slot:item="{ props, item }">
					<v-list-item v-bind="props">
						<div class="d-flex py-2">
							<v-avatar class="mr-4" size="50" color="#FDF1ED">
								<v-icon>{{ item.raw.icon }}</v-icon>
							</v-avatar>
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">{{ item.raw.text }}</p>
								<p style="font-size: 14px; font-weight: 400; color: #333333">{{ item.raw.description }}</p>
							</div>
						</div>
					</v-list-item>
				</template>
			</v-select>

			<v-card class="mx-auto my-5 pa-6 cardStyle" flat rel="noopener">
				<p style="font-size: 18px; font-weight: 600; color: #333">
					Expected Delivery Dates <v-icon icon="mdi mdi-information-outline" size="24"></v-icon>
				</p>
				<p style="font-size: 16px; font-weight: 500; color: #969696">Choose where you ship and how much you charge for shipping at checkout.</p>
			</v-card>
			<v-card class="my-5 pa-6 cardStyle" flat style="justify-content: between">
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 18px; font-weight: 600; color: #333">
							Local Delivery <v-icon icon="mdi mdi-information-outline" size="24"></v-icon>
						</p>
						<p style="font-size: 16px; font-weight: 500; color: #969696">Deliver orders directly to customers in the area.</p>
					</div>
					<v-btn class="" size="small" text="Set up" variant="outlined"></v-btn>
				</div>
			</v-card>
			<v-card class="my-5 pa-6 cardStyle" flat style="justify-content: between">
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 18px; font-weight: 600; color: #333">Local Pickups <v-icon icon="mdi mdi-information-outline" size="24"></v-icon></p>
						<p style="font-size: 16px; font-weight: 500; color: #969696">Deliver orders directly to customers in the area.</p>
					</div>
					<v-btn class="" size="small" text="Set up" variant="outlined"></v-btn>
				</div>
			</v-card>

			<v-card class="mx-auto my-5 pa-6 cardStyle" flat rel="noopener" style="justify-content: between">
				<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">
					Saved Packages <v-icon icon="mdi mdi-information-outline" size="24"></v-icon>
				</p>
				<div class="cardStyle">
					<div class="d-flex justify-space-between align-center w-100">
						<div class="d-flex py-2">
							<v-avatar class="mr-4" size="50" color="#FDF1ED">
								<v-icon icon="mdi mdi-equal-box"></v-icon>
							</v-avatar>
							<div>
								<p style="font-size: 16px; font-weight: 600; color: #333333">Beispielbox</p>
								<p style="font-size: 14px; font-weight: 400; color: #333333">22 × 13.7 × 4.2 cm, 0 kg</p>
							</div>
						</div>
						<div class="d-flex">
							<v-btn class="mr-4" size="small" text="Default package" variant="outlined"></v-btn>
							<!-- <v-icon icon="mdi mdi-dots-horizontal"></v-icon> -->
							<v-menu>
								<template v-slot:activator="{ props }">
									<!-- <v-btn class="pa-0" flat icon="mdi mdi-dots-horizontal" v-bind="props"></v-btn> -->
									<v-icon icon="mdi mdi-dots-horizontal" v-bind="props"></v-icon>
								</template>

								<v-card class="bg-white d-flex flex-column text-left pa-4 h-auto">
									<span class="pa-2 text-left">
										<v-icon icon="mdi mdi-logout"></v-icon> <span style="font-size: 14px; font-weight: 600"> Edit </span>
									</span>
									<span class="pa-2" flat>
										<v-icon icon="mdi mdi-logout"></v-icon> <span style="font-size: 14px; font-weight: 600">Set as default </span>
									</span>
									<span class="pa-2" flat>
										<v-icon icon="mdi mdi-delete"></v-icon> <span style="font-size: 14px; font-weight: 600">Delete </span>
									</span>
								</v-card>
							</v-menu>
						</div>
					</div>
					<v-alert
						text="Used to calculate shipping rates at checkout and pre-selected when buying labels"
						icon="mdi mdi-information-outline"
						type="warning"
						variant="tonal"
						class="mt-5"
					></v-alert>

					<span class="d-flex align-center mt-5" style="color: #1273eb">
						<v-icon icon="mdi mdi-plus" size="24"></v-icon>
						<span>Saved Packages</span>
					</span>
				</div>
			</v-card>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selected: null,
			items: [
				{
					value: "umoja-logistics",
					text: "Umoja Logistics",
					description: "Let Umoja handle your entire business logistics and make it easier for you",
					icon: "mdi mdi-truck",
					none: "",
				},
				{
					value: "manual-shipping",
					text: "Manual Shipping",
					description: "The business owners handles everything concerns shipping their product",
					icon: "mdi mdi-package-variant",
					none: "",
				},
			],
		};
	},
	computed: {
		computedLabel() {
			return this.selected ? "" : "Select Shipping Method";
		},
	},
};
</script>

<style scoped></style>
