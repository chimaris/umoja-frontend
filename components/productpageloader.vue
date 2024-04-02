<template>
	<v-row>
		<v-col cols="12" lg="6">
			<v-card height="349px" class="mb-2" flat width="100%" color="grey-lighten-4"></v-card>
			<v-row dense>
				<v-col v-for="n in 4" cols="3">
					<v-card flat color="grey-lighten-4" style="border-radius: 6px !important" height="103px"></v-card>
				</v-col>
			</v-row>
		</v-col>
		<v-col cols="12" lg="6">
			<p style="width: 100%; height: 32px" class="my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-xl"></p>
			<p style="width: 70%; height: 32px" class="my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-xl"></p>
			<div class="d-flex align-center">
				<v-rating
					:model-value="0"
					readonly=""
					active-color="#F0B136"
					half-increments
					density="comfortable"
					color="grey-lighten-2"
					size="x-small"
				></v-rating>
			</div>
			<p style="width: 40%; height: 36px" class="my-8 bg-grey-lighten-4 rounded-xl"></p>
			<div class="d-flex mb-2 align-center">
				<p class="text-grey-lighten-1" style="font-size: 14px; font-weight: 600; line-height: 140%">Available Size</p>
			</div>
			<div style="max-width: 295px">
				<v-row dense>
					<v-col cols="4" v-for="(n, i) in ['XXS', 'XL', 'XS', 'S', 'M', 'L', 'XXL', '3XL', '4XL']">
						<p class="bg-grey-lighten-4 text-grey w-100 d-flex align-center justify-center" style="height: 40px; border-radius: 6px">{{ n }}</p>
					</v-col>
				</v-row>
			</div>
			<div class="d-flex mt-4 align-center">
				<p style="font-size: 14px; font-weight: 600; line-height: 140%" class="text-grey-lighten-1">Color</p>
			</div>
			<div class="d-flex my-2">
				<div
					class="d-flex mr-2"
					v-for="(n, i) in 4"
					:key="i"
					style="background: #dfdfdf; border-radius: 50%; overflow: hidden; height: 26px; width: 26px"
				>
					<div style="width: 50%"></div>
					<div style="background: #fff; opacity: 0.5; width: 50%"></div>
				</div>
			</div>
		</v-col>
	</v-row>
	<v-divider color="#EDEDED" class="my-6"></v-divider>
	<p style="font-size: 28px; font-weight: 600; line-height: 140%; /* 39.2px */ letter-spacing: -0.84px" class="mb-4 text-grey-lighten-1">
		Product Description
	</p>
	<div>
		<p style="width: 90px; height: 16px" class="my-1 mb-4 pb-0 bg-grey-lighten-4 rounded-xl"></p>
		<p style="width: 100%; height: 13px" class="my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-xl"></p>
		<p style="width: 100%; height: 13px" class="my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-xl"></p>
		<p style="width: 70%; height: 13px" class="my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-xl"></p>
	</div>
	<div>
		<p style="width: 90px; height: 16px" class="my-4 mt-10 pb-0 bg-grey-lighten-4 rounded-xl"></p>
		<p style="width: 100%; height: 13px" class="my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-xl"></p>
		<p style="width: 100%; height: 13px" class="my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-xl"></p>
		<p style="width: 70%; height: 13px" class="my-1 mb-2 pb-0 bg-grey-lighten-4 rounded-xl"></p>
	</div>
</template>
