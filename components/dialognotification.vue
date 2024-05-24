<template>
	<v-card style="backdrop-filter: blur(7px); background: rgb(255 255 255 / 89%); max-height: 80vh; border: none" class="rounded-lg mx-0">
		<div style="position: sticky; top: 0" class="topbar w-100">
			<div class="d-flex pa-6 justify-space-bewteen">
				<p style="color: #1e1e1e; font-size: 20px; font-weight: 600">Notifications</p>
				<v-spacer></v-spacer>
				<v-btn class="green-hover" flat><span>Mark all as read</span></v-btn>
			</div>
		</div>

		<div v-for="n in ['Shipped', 'Processed']" :key="n">
			<v-divider></v-divider>
			<div class="notihover px-4 px-md-6 py-6">
				<v-row>
					<v-col cols="1">
						<v-icon size="7" color="#1273EB" icon="mdi mdi-circle"></v-icon>
					</v-col>
					<v-col class="pl-8 pl-md-0 pr-md-8" cols="11">
						<p style="color: var(--carbon-6, #1e1e1e); font-size: 14px; font-weight: 500" class="">
							Your Order
							<strong> #ID25725728RS</strong>
							placed on 19-08-23, containing 4 items have been
							<strong>{{ n }}. </strong>
							<span style="color: #1273eb; text-decoration-line: underline">Tap to see order details </span>
						</p>
						<p style="color: var(--carbon-6, #1e1e1e); font-size: 12px; font-weight: 500" class="mt-2">Just Now</p></v-col
					>
				</v-row>
				<div></div>
			</div>
		</div>

		<div v-for="(n, i) in ['Shipped', 'Processed']" :key="n">
			<v-divider></v-divider>
			<div class="notihover px-4 px-md-6 py-6">
				<v-row>
					<v-col style="position: relative" cols="1">
						<v-icon v-if="i == 0" style="position: absolute; top: 5px; left: 5px" size="7" color="#1273EB" icon="mdi mdi-circle"></v-icon>
						<v-avatar size="40">
							<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1688110792/rectangle-22424_cbrmty.png"></v-img>
						</v-avatar>
					</v-col>
					<v-col class="pl-8 pl-md-0 pr-md-8" cols="8">
						<p style="color: #1e1e1e; font-size: 14px; font-weight: 500"><strong> The African fashion Line </strong> just made a new post</p>
						<p style="color: #969696; font-size: 14px; font-weight: 500">
							“Look splendid while rocking our new product in the market. The multicolored Ankara...
						</p>
						<p style="color: var(--carbon-6, #1e1e1e); font-size: 12px; font-weight: 500" class="mt-2">Just Now</p></v-col
					>
					<v-col class="pr-8 d-flex justify-end" cols="3">
						<v-avatar size="70" class="rounded-lg">
							<v-img cover src="https://res.cloudinary.com/payhospi/image/upload/v1690529528/rectangle-64_zmh8cd.png"></v-img>
						</v-avatar>
					</v-col>
				</v-row>
				<div></div>
			</div>
		</div>
		<div v-for="(n, i) in recentitems" :key="n">
			<v-divider></v-divider>
			<div class="notihover px-4 px-md-6 py-6">
				<v-row>
					<v-col style="position: relative" cols="1">
						<!-- <v-icon v-if="i == 0" style="position: absolute;top: 5px;left: 5px;" size="7" color="#1273EB" icon="mdi mdi-circle"></v-icon> -->
					</v-col>
					<v-col class="pl-8 pl-md-0 pr-md-8" cols="8">
						<p style="color: var(--carbon-6, #1e1e1e); font-size: 14px; font-weight: 500" class="">
							Item
							<strong> #ID25725728RS</strong>
							placed on 19-08-23, is in
							<strong>Transit. </strong>
							<span style="color: #1273eb; text-decoration-line: underline">Tap to see order details </span>
						</p>
						<p style="color: var(--carbon-6, #1e1e1e); font-size: 12px; font-weight: 500" class="mt-2">Just Now</p></v-col
					>
					<v-col class="pr-8 d-flex justify-end" cols="3">
						<v-avatar size="70" class="rounded-lg">
							<v-img contain :src="n"></v-img>
						</v-avatar>
					</v-col>
				</v-row>
				<div></div>
			</div>
		</div>
		<div v-for="(n, i) in ['Shipp']" :key="n">
			<v-divider></v-divider>
			<div class="notihover px-4 px-md-6 py-6">
				<v-row>
					<v-col style="position: relative" cols="1">
						<v-icon v-if="i == 0" style="position: absolute; top: 5px; left: 5px" size="7" color="#1273EB" icon="mdi mdi-circle"></v-icon>
						<v-avatar size="40">
							<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1688110792/rectangle-22424_cbrmty.png"></v-img>
						</v-avatar>
					</v-col>
					<v-col class="pl-8 pl-md-0 pr-md-8" cols="8">
						<p style="color: #1e1e1e; font-size: 14px; font-weight: 500"><strong> The African fashion Line </strong> just made a new post</p>
						<p style="color: #969696; font-size: 14px; font-weight: 500">
							“Look splendid while rocking our new product in the market. The multicolored Ankara...
						</p>
						<p style="color: var(--carbon-6, #1e1e1e); font-size: 12px; font-weight: 500" class="mt-2">Just Now</p></v-col
					>
					<v-col class="pr-8 d-flex justify-end" cols="3">
						<v-avatar size="70" class="rounded-lg">
							<v-img cover src="https://res.cloudinary.com/payhospi/image/upload/v1690529528/rectangle-64_zmh8cd.png"></v-img>
						</v-avatar>
					</v-col>
				</v-row>
				<div></div>
			</div>
		</div>
	</v-card>
</template>
<script>
export default {
	// props:['route', 'text'],
	data() {
		return {
			searches: [
				"The Fisherman Dress",
				"The messeus hat",
				"Multicolored Ankara Material ",
				"The Fisherman Dress",
				"The Nawi Women Gown",
				"Woman King Sculpture",
				"Jaeger Hook",
				"Za Dress",
			],
			searches2: ["The Fisherman Dress", "The messeus hat", "Multicolored Ankara Material ", "The Fisherman Dress", "The Nawi Women Gown"],
			recentitems: [
				"https://res.cloudinary.com/payhospi/image/upload/v1691574327/s-2-gs-x-1-po-l_ckeqxo.png",
				"https://res.cloudinary.com/payhospi/image/upload/v1689252826/matskirt_ecf6ym.png",
				"https://res.cloudinary.com/payhospi/image/upload/v1688130445/ankara-sneakers-1500-x_lnanzk.png",
			],
		};
	},
};
</script>
