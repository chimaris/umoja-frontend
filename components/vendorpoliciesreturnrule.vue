<template>
	<div>
		<span class="pa-5 d-flex align-center">
			<v-icon class="mr-4" icon="mdi mdi-arrow-left" @click="vendorStore.renderReturnRule = false"></v-icon>
			<p style="color: #000; font-size: 20px; font-weight: 600" class="">Default Return Rules</p>
		</span>
		<v-divider></v-divider>
		<div class="pa-5 py-8">
			<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">Return Policy</p>
			<v-card class="mx-auto my-2 px-6 cardStyle" flat rel="noopener">
				<div>
					<p class="" style="font-size: 18px; font-weight: 600; color: #333">Return window</p>
					<p class="mb-4" style="font-size: 16px; font-weight: 500; color: #969696">Most stores offer common return windows such as 30 or 90 days.</p>
					<v-radio-group style="font-size: 14px; font-weight: 500; color: #333">
						<v-radio color="#00966D" label="14 Days" value="one"></v-radio>
						<v-radio color="#00966D" label="30 Days" value="two"></v-radio>
						<v-radio color="#00966D" label="90  Days" value="three"></v-radio>
						<v-radio color="#00966D" label="Unlimited" value="four"></v-radio>
						<v-radio color="#00966D" label="Custom Days" value="five"></v-radio>
					</v-radio-group>
				</div>

				<div>
					<p class="" style="font-size: 18px; font-weight: 600; color: #333">Return shipping cost</p>
					<p class="mb-4" style="font-size: 16px; font-weight: 500; color: #969696">Most stores offer common return windows such as 30 or 90 days.</p>
					<v-radio-group style="font-size: 14px; font-weight: 500; color: #333">
						<v-radio color="#00966D" label="Customer provides return shipping" value="one"></v-radio>
						<v-radio color="#00966D" label="Free return shipping" value="two"></v-radio>
						<v-radio color="#00966D" label="Flat rate return shipping" value="three"></v-radio>
					</v-radio-group>
				</div>

				<div>
					<p class="" style="font-size: 18px; font-weight: 600; color: #333">Refund policy</p>
					<p class="mb-4" style="font-size: 16px; font-weight: 500; color: #969696">This is our terms for refunds of a product</p>
					<v-radio-group style="font-size: 14px; font-weight: 500; color: #333">
						<v-radio color="#00966D" label="No refund  (Product will be replaced)" value="one"></v-radio>
						<v-radio color="#00966D" label="Full Refund" value="two"></v-radio>
						<v-radio color="#00966D" label="50% Refund" value="three"></v-radio>
					</v-radio-group>
				</div>

				<!-- <div>
					<p class="mb-4" style="font-size: 18px; font-weight: 600; color: #333">Restocking fee</p>
					<v-checkbox density="comfortable" v-model="selectAll" label="Charge restocking fee"></v-checkbox>
				</div> -->
			</v-card>

			<v-card class="mx-auto my-2 py-5 px-6 cardStyle" flat rel="noopener">
				<div class="d-flex justify-space-between align-center">
					<p style="font-size: 18px; font-weight: 600; color: #333">Return rules summary</p>
					<v-chip color="green" style="border-radius: 6px"> On </v-chip>
				</div>

				<v-card class="mx-auto my-2 py-5 px-6 cardStyle" flat rel="noopener">
					<div>
						<p class="mb-2" style="font-size: 16px; font-weight: 600; color: #333">Default Rules</p>
						<ul
							v-for="item in ['Returns accepted for 30 davs', 'Free return shipping', 'No restocking fee', 'No tina said items']"
							:key="item"
							class="mx-5"
						>
							<li style="font-weight: 500; font-size: 16px; color: #969696">{{ item }}</li>
						</ul>
					</div>
					<div class="my-5">
						<p class="mb-2" style="font-size: 16px; font-weight: 600; color: #333">Refund Policy</p>
						<ul v-for="item in ['Full Refund']" :key="item" class="mx-5">
							<li style="font-weight: 500; font-size: 16px; color: #969696">{{ item }}</li>
						</ul>
					</div>

					<div>
						<p class="mb-2" style="font-size: 16px; font-weight: 600; color: #333">Final Sales Item</p>
						<ul v-for="item in ['No final sale items']" :key="item" class="mx-5">
							<li style="font-weight: 500; font-size: 16px; color: #969696">{{ item }}</li>
						</ul>
					</div>
				</v-card>
			</v-card>
		</div>
		<p class="text-center py-4" style="font-size: 16px; font-weight: 500; color: #969696; width: 85%">
			Learn more about <span style="color: #1273eb">return rules</span>
		</p>
	</div>
</template>

<script>
import { useVendorStore } from "~/stores/vendorStore";

export default {
	data() {
		return {};
	},
	computed: {
		vendorStore() {
			return useVendorStore();
		},
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
