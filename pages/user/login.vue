<template>
	<beta-test />
	<div>
		<v-row style="min-height: 100vh">
			<v-col :cols="cols[0]" class="pb-0">
				<v-card flat tile width="100%" height="100%">
					<v-container style="min-height: 100vh">
						<v-avatar class="" @click="$router.push('/')" size="150" style="cursor: pointer; height: auto !important" rounded="0">
							<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718615349/umoja/Frame_4_emeelq_ajydmg.png"></v-img>
						</v-avatar>
						<div style="height: calc(100% -150px)">
							<div style="max-width: 385px" class="pt-12 mx-auto">
								<h1 style="font-weight: 800; font-size: 48px; line-height: 60px; color: #333333">Welcome Back</h1>
								<p class="font-weight-regular mb-6 mt-1" style="font-size: 20px">Welcome back, please enter your details</p>
								<v-form v-model="valid" @submit.prevent="handleLogin">
									<p class="inputLabel">Email Address</p>

									<v-text-field
										v-model="email"
										:rules="emailRules"
										placeholder="Enter email address"
										density="comfortable"
									>
									</v-text-field>

									<p class="inputLabel">Password</p>
									<v-text-field
										:append-inner-icon="visible ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
										:type="visible ? 'text' : 'password'"
										placeholder="Enter Password"
										density="comfortable"
										@click:append-inner="visible = !visible"
										:rules="passwordRules"
										v-model="password"
									></v-text-field>
									<v-row>
										<v-col cols="6" class="py-0">
											<v-checkbox color="green" v-model="rememberMe" @click="rememberMe = !rememberMe">
												<template v-slot:label>
													<div class="font-weight-medium">Remember me</div>
												</template>
											</v-checkbox>
										</v-col>
										<v-col cols="6" class="d-flex justify-end py-0 align-center">
											<v-btn to="/user/forgot" style="color: #0076ff; text-decoration: none" variant="text" class="px-0 mb-4">
												Forgot Password?
											</v-btn>
										</v-col>
									</v-row>
									<p v-if="loginError" style="color: red">{{ loginError }}</p>
									<v-btn type="submit" :disabled="!valid" block color="green" flat size="x-large" class="rounded-lg mt-3">
										<span class="mr-4"> Sign in</span>
										<v-progress-circular v-if="userStore.loading" indeterminate :width="2" :size="25"></v-progress-circular>
									</v-btn>
								</v-form>
								<div class="d-flex py-5 justify-space-between align-center">
									<v-divider></v-divider>
									<p class="px-2 w-100 text-grey-lighten-1" :style="{ fontSize: $vuetify.display.mobile ? '14px' : '16px' }">or continue with</p>
									<v-divider></v-divider>
								</div>
								<div class="d-flex justify-space-between py-0 mb-4">
									<v-btn flat style="background-color: #ededed" class="text-green green-hover" width="30%" icon="mdi mdi-apple"></v-btn>
									<v-btn
										@click="socialMediaLogin('google')"
										flat
										style="background-color: #ededed"
										class="text-green green-hover"
										width="30%"
										icon="mdi mdi-google"
									></v-btn>
									<v-btn
										@click="socialMediaLogin('facebook')"
										flat
										style="background-color: #ededed"
										class="text-green green-hover"
										width="30%"
										icon="mdi mdi-facebook"
									></v-btn>
								</div>
								<p class="font-weight-regular mb-12 mt-6">
									Don't have an account? <span @click="$router.push('/user/signup')" style="cursor: pointer; color: #0076ff">Sign Up</span>
								</p>
								<p style="font-weight: 400; font-size: 14px; line-height: 17px; color: #cecece" class="font-weight-regular pt-12 mb-4">
									©2022 Umoja. All Rights Reserved.
								</p>
							</div>
						</div>
					</v-container>
				</v-card>
			</v-col>
			<v-col :cols="cols[1]" class="px-0 py-0" :style="{ display: $vuetify.display.mobile ? 'none' : 'block' }">
				<v-carousel :show-arrows="false" :hide-delimiters="true" cycle width="100%" height="auto">
					<v-carousel-item v-for="n in images" :key="n">
						<v-img cover class="bg-grey-lighten-2" eager width="100%" min-height="100vh" height="880px" :src="n"></v-img>
					</v-carousel-item>
				</v-carousel>
			</v-col>
		</v-row>
	</div>
</template>
<script>
import { useUserStore } from "~/stores/userStore";
import { emailRules, passwordRules } from "~/utils/formrules";
import { useRouter } from "#vue-router";
import axios from "axios";
import { useApi } from "#imports";
export default {
	setup() {
		definePageMeta({
			middleware: ["is-auth"]
		});
		const userStore = useUserStore();
		const router = useRouter();

		return {
			userStore,
			emailRules,
			passwordRules,
			router,
		};
	},
	data() {
		return {
			images: [
				"https://res.cloudinary.com/dd26v0ffw/image/upload/v1719308063/portrait-scary-african-shaman-female-with-petrified-cracked-skin-dreadlocks-holds-traditional-mask-dark-background-make-up-concept_1_dr3e2c_vjk8zr.png",
				"https://img.freepik.com/free-photo/side-view-woman-clay-sculpting_23-2149730894.jpg?size=926&ext=jpg",
				"https://img.freepik.com/free-photo/close-up-hands-holding-money_23-2148761613.jpg?size=926&ext=jpg",
				"https://img.freepik.com/free-photo/high-angle-souvenirs-arrangement_23-2149726233.jpg?size=926&ext=jpg",
			],
			email: "",
			password: "",
			rememberMe: false,
			valid: false,
			visible: false,
			loginError: ''
		};
	},
	methods: {
		async handleLogin() {
		if (this.valid) {
			const userStore = useUserStore();

			const result = await userStore.login({ 
			email: this.email, 
			password: this.password 
			});

			if (result.success) {
			this.$router.push("/");
			this.loginError = "";
			this.email = "";
			this.password = "";
			} else {
			// Show error message
			this.loginError = result.message;
			console.error("Login failed");
			}
		}
		},

		async socialMediaLogin(provider) {
			try {
				const response = await this.userStore.socialLogin(provider);
				window.location.href = response.data.url;
			} catch (error) {
				console.log(error);
			}
		},
	},
	watch: {
		isLoggedIn(val) {
			if (val) {
				this.$router.push("/");
			}
		},
	},
	computed: {
		userStore() {
			return useUserStore();
		},
		isLoggedIn() {
			return this.userStore.getIsLoggedIn;
		},
		cols() {
			const { lg, sm, md } = this.$vuetify.display;
			return lg
				? [7, 5, 6, 6, 4, 8, 4, 3, 10, 2]
				: md
				? [7, 5, 6, 12, 6, 8, 4, 3, 10, 2]
				: sm
				? [12, 12, 12, 12, 12, 12, 12, 12, 12]
				: [12, 12, 12, 12, 12, 12, 12, 12, 12];
		},
	},
};
</script>
