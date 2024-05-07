<template>
	<div>
		<v-container style="position: relative" class="pt-0 padzero" fluid>
			<v-card
				flat
				class="topcard height1 rounded-xl d-flex justify-center align-center"
				height="100vh"
				min-height="900px"
				image="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1300/v1689483514/african-safari-animals-11_k5q3lr.png"
			>
				<div v-if="$vuetify.display.smAndUp" style="position: absolute; top: 0; height: 100%; width: 100%">
					<v-btn style="height: auto; top: 15%; left: 10%" flat rounded="xl" class="rw px-2 py-2" height="auto">
						<v-avatar size="30.88" class="mr-1"
							><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/rw-rwanda-medium_oui3ln.png"></v-img
						></v-avatar>
						<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> RWANDA </span>
					</v-btn>
					<v-btn style="height: auto; position: absolute; right: 25%; top: 8%" flat rounded="xl" class="gh px-2 py-2" height="auto">
						<v-avatar size="30.88" class="mr-1"
							><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/gh-ghana-medium_rvbvcj.png"></v-img
						></v-avatar>
						<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> GHANA </span>
					</v-btn>
					<v-btn style="position: absolute; top: 50%" flat rounded="xl" class="ng px-2 py-2" height="auto">
						<v-avatar size="30.88" class="mr-1"
							><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ng-nigeria_puk1kr.png"></v-img
						></v-avatar>
						<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> NIGERIA </span>
					</v-btn>
					<v-btn style="position: absolute; top: 40%; right: 5%" flat rounded="xl" class="sa px-2 py-2" height="auto">
						<v-avatar size="30.88" class="mr-1"
							><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486634/za-south-africa_h5tfp8.png"></v-img
						></v-avatar>
						<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> SOUTH AFRICA </span>
					</v-btn>
					<v-btn style="position: absolute; bottom: 25%; right: 20%" flat rounded="xl" class="ke px-2 py-2" height="auto">
						<v-avatar size="30.88" class="mr-1"
							><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ke-kenya_bcsssx.png"></v-img
						></v-avatar>
						<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> KENYA </span>
					</v-btn>
				</div>
				<v-container class="">
					<div class="text-center bottom0 mx-auto mt-0" style="position: relative; bottom: 100px; max-width: 834px">
						<p
							class="tinytext1"
							style="
								color: #f38218;
								font-size: 14px;
								font-weight: 500;
								line-height: 120%; /* 16.8px */
								letter-spacing: 0.9px;
								text-transform: uppercase;
							"
						>
							Growing the African Market Space
						</p>
						<p style="color: #1e1e1e; font-size: 64px; font-weight: 600; line-height: 120%; letter-spacing: -1.92px" class="bigTitle mt-4">
							<span style="color: #2c6e63"> Explore </span> a new digital African marketplace from any part of the world!
						</p>
						<p style="color: var(--carbon-4, #333); font-size: 20px; font-weight: 400" class="mt-4">
							The world first and largest e-commerce platform with a wide variety of authentic and sustainable African products.
						</p>

						<div class="py-8">
							<v-btn @click="opendialog()" color="green" flat class="mx-auto" size="x-large" rounded="xl">Join the Waitlist</v-btn>
						</div>
					</div>
				</v-container>
				<div v-if="!$vuetify.display.smAndUp" class="scroll">
					<div class="m-scroll">
						<span class="upspan">
							<v-btn style="height: auto" flat rounded="xl" class="px-2 mx-3 py-2" height="auto">
								<v-avatar size="30.88" class="mr-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/rw-rwanda-medium_oui3ln.png"></v-img
								></v-avatar>
								<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> RWANDA </span>
							</v-btn>
						</span>
						<span class="upspan">
							<v-btn style="height: auto" flat rounded="xl" class="px-2 mx-3 py-2" height="auto">
								<v-avatar size="30.88" class="mr-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/gh-ghana-medium_rvbvcj.png"></v-img
								></v-avatar>
								<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> GHANA </span>
							</v-btn>
						</span>
						<span class="upspan">
							<v-btn style="" flat rounded="xl" class="px-2 mx-3 py-2" height="auto">
								<v-avatar size="30.88" class="mr-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ng-nigeria_puk1kr.png"></v-img
								></v-avatar>
								<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> NIGERIA </span>
							</v-btn>
						</span>
						<span class="upspan">
							<v-btn style="" flat rounded="xl" class="px-2 mx-3 py-2" height="auto">
								<v-avatar size="30.88" class="mr-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486634/za-south-africa_h5tfp8.png"></v-img
								></v-avatar>
								<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500">
									SOUTH AFRICA
								</span>
							</v-btn>
						</span>
						<span class="upspan">
							<v-btn style="" flat rounded="xl" class="px-2 mx-3 py-2" height="auto">
								<v-avatar size="30.88" class="mr-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ke-kenya_bcsssx.png"></v-img
								></v-avatar>
								<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> KENYA </span>
							</v-btn>
						</span>
						<span class="upspan">
							<v-btn style="height: auto" flat rounded="xl" class="px-2 mx-3 py-2" height="auto">
								<v-avatar size="30.88" class="mr-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/rw-rwanda-medium_oui3ln.png"></v-img
								></v-avatar>
								<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> RWANDA </span>
							</v-btn>
						</span>
						<span class="upspan">
							<v-btn style="height: auto" flat rounded="xl" class="px-2 mx-3 py-2" height="auto">
								<v-avatar size="30.88" class="mr-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/gh-ghana-medium_rvbvcj.png"></v-img
								></v-avatar>
								<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> GHANA </span>
							</v-btn>
						</span>
						<span class="upspan">
							<v-btn style="" flat rounded="xl" class="px-2 mx-3 py-2" height="auto">
								<v-avatar size="30.88" class="mr-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ng-nigeria_puk1kr.png"></v-img
								></v-avatar>
								<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> NIGERIA </span>
							</v-btn>
						</span>
						<span class="upspan">
							<v-btn style="" flat rounded="xl" class="px-2 mx-3 py-2" height="auto">
								<v-avatar size="30.88" class="mr-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486634/za-south-africa_h5tfp8.png"></v-img
								></v-avatar>
								<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500">
									SOUTH AFRICA
								</span>
							</v-btn>
						</span>
						<span class="upspan">
							<v-btn style="" flat rounded="xl" class="px-2 mx-3 py-2" height="auto">
								<v-avatar size="30.88" class="mr-1"
									><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ke-kenya_bcsssx.png"></v-img
								></v-avatar>
								<span class="mr-2" style="color: var(--carbon-4, #333); font-size: 14px; letter-spacing: 2.38px; font-weight: 500"> KENYA </span>
							</v-btn>
						</span>
					</div>
				</div>
			</v-card>
		</v-container>
		<v-container style="position: relative; max-width: 1417px" class="pt-0" fluid>
			<webdiscover />
			<webexplore />
		</v-container>
	</div>
</template>
<style>
.scroll {
	position: absolute;
	width: 100vw;
	bottom: 37px;
	overflow: hidden;
	z-index: 1;
	margin: 0;
	padding: 0;
}

.m-scroll {
	overflow: hidden;
	height: 100%;
	white-space: nowrap;
	animation: scrollText 20s infinite linear;
	margin: 0;
	font-size: 0;
	display: flex;
	justify-content: space-between;
	width: fit-content;
}

.upspan {
	display: inline-block;
	margin: 0;
	padding: 0;
	color: white;
}

@keyframes scrollText {
	from {
		transform: translateX(0%);
	}
	to {
		transform: translateX(-50%);
	}
}
.bto .v-btn__overlay {
	display: none;
}
.smlimg {
	animation: float 6s ease-in-out infinite;
	transform: translatey(0px);
}
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}
.imgs {
	transition: all 0.5s ease !important;
	transform: rotate(-15deg);
	right: -160px;
}
.discoimgs {
	transition: all 0.5s ease !important;
	scale: 1;
}
.discocard:hover .discoimgs,
.discoimgs:hover {
	scale: 1.05;
}
.customimgs {
	transition: all 0.5s ease !important;
	top: 30%;
	left: 30%;
}
.customcard:hover .customimgs,
.customimgs:hover {
	top: 22%;
	left: 24%;
}
.rw {
	background: #fff;
	backdrop-filter: blur(3px);
	animation: slide 20s linear infinite;
}

@keyframes slide {
	0% {
		transform: translateX(0px);
	}
	50% {
		transform: translateX(50px);
	}
	100% {
		transform: translateX(0px);
	}
}
.ng {
	background: #fff;
	backdrop-filter: blur(3px);
	animation: slide2 13s linear infinite;
}

@keyframes slide2 {
	0% {
		transform: translateX(0px);
	}
	50% {
		transform: translateX(15px);
	}
	100% {
		transform: translateX(0px);
	}
}
.sa {
	animation: slide3 12s linear infinite;
	background: #fff;
	backdrop-filter: blur(3px);
}

@keyframes slide3 {
	0% {
		transform: translateX(0px);
	}
	50% {
		transform: translateX(45px);
	}
	100% {
		transform: translateX(0px);
	}
}

.gh {
	animation: slide4 10s linear infinite;
}

@keyframes slide4 {
	0% {
		transform: translateX(0px);
	}
	50% {
		transform: translateX(-50px);
	}
	100% {
		transform: translateX(0px);
	}
}
.ke {
	background: #fff;
	backdrop-filter: blur(3px);
	animation: slide5 10s linear infinite;
}

@keyframes slide5 {
	0% {
		transform: translateX(0px);
	}
	50% {
		transform: translateX(-50px);
	}
	100% {
		transform: translateX(0px);
	}
}

.bentcard:hover .imgs,
.imgs:hover {
	transform: rotate(0deg) !important;
	right: 0 !important;
}
.height0 {
	height: 436px !important;
}
@media only screen and (max-width: 768px) {
	.row0 {
		margin-top: 0px !important;
	}
	.imgs {
		transform: rotate(0deg) !important;
		right: 0 !important;
	}
	.height1 {
		min-height: 852px !important;
	}
	.bottom0 {
		bottom: 0 !important;
		padding-top: 49px !important;
	}
	.topcard {
		align-items: start !important;
	}
	.height0 {
		height: 376px !important;
	}
	.padzero {
		padding: 0 !important;
	}
	.rotimg {
		top: -11% !important;
		left: 65% !important;
	}
	/* CSS rules for smaller screens */
	.bigTitle {
		font-size: 48px !important;
	}
	.gh {
		scale: 0.9;
		right: -9% !important;
		top: 2% !important;
	}
	.rw {
		scale: 0.9;
		top: 7% !important;
		left: -6% !important;
	}
	.ng {
		scale: 0.9;
		bottom: 9% !important;
		top: unset !important;
		left: 3% !important;
	}
	.ke {
		scale: 0.9;
		bottom: 19% !important;
		top: unset !important;
		right: -9% !important;
	}
	.sa {
		scale: 0.9;
		bottom: 28% !important;
		top: unset !important;
		right: 55% !important;
	}
	.logo {
		width: 122px !important;
		height: 80px !important;
	}
	.card2 {
		padding-top: 45px !important;
		padding-left: 24px !important;
	}
	.card2div {
		padding-right: 24px !important;
	}
	.titlesub {
		font-size: 18px !important;
	}
	.subtitles {
		font-size: 36px !important;
	}
	.alignc {
		text-align: center !important;
	}

	.dialogrow {
		padding: 12px 12px 0px 12px !important;
		text-align: center !important;
	}
	/* Add more rules here as needed */
	.cardtitle {
		font-size: 28px !important;
	}
	.tinytext1 {
		font-size: 12px !important;
	}
	.cardsub {
		font-size: 16px !important;
	}
	.footcard {
		padding-bottom: 100px !important;
	}
	.footbot {
		padding-bottom: 20px !important;
	}
	.conte {
		padding-left: 0 !important;
		padding-right: 0 !important;
	}
	.customimgs {
		scale: 1 !important;
		position: relative !important;
		bottom: -5px !important;
		transition: all 0.5s ease !important;
		top: unset !important;
		left: 0 !important;
	}
}
</style>
<script>
import axios from "axios";

export default {
	data() {
		return {
			dialog: false,
			mods: 1,
			name: "",
			dialog2: false,
			loading: false,
			category: null,
			email: "",
			emailtxt: "",
			rules: {
				email: (value) => {
					const pattern =
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return pattern.test(value) || "Invalid e-mail.";
				},
			},
		};
	},
	computed: {
		required() {
			return (value) => {
				if (!value) {
					return "Required.";
				} else if (value.length < 3) {
					return "Must be at least 3 characters.";
				} else {
					return true;
				}
			};
		},
	},
	methods: {
		opendialog() {
			this.dialog = true;
		},
		async submitForm() {
			var validator = await this.$refs.form.validate();
			if (validator.valid) {
				this.loading = true;
				axios
					.post("https://umoja-eaac4dc3d4d4.herokuapp.com/api/join_waitlist", {
						name: this.name,
						category: this.category,
						email: this.email,
					})
					.then((response) => {
						this.loading = false;
						this.emailtxt = this.email;
						this.name = "";
						this.email = "";
						this.category = null;
						this.dialog = false;
						this.dialog2 = true;

						console.log(response.data);
						// Handle successful response here
					})
					.catch((error) => {
						this.dialog = false;
						this.loading = false;
						console.error(error);
						alert("An error occurred");
						// Handle error here
					});
			} else {
				this.loading = false;
			}
		},
	},
};
</script>
