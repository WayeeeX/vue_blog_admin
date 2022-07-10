<template>
	<section>
		<at-card style="width: 300px" :bordered="false">
			<at-input v-model="account" placeholder="请输入账号" prepend-button>
				<template slot="prepend">
					<span>账号</span>
				</template>
			</at-input>
			<at-input v-model="passwd" type="password" placeholder="请输入密码" prepend-button>
				<template slot="prepend">
					<span>密码</span>
				</template>
			</at-input>
			<div class="box">
				<at-button type="primary" @click="login">登陆</at-button>
				<at-button type="warning" @click="resetForm">重置</at-button>
			</div>
		</at-card>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				account: 'admin',
				passwd: 'admin',
			}
		},
		methods: {
			login() {
				const loginForm = {
					account: this.account,
					passwd: this.passwd
				}


				this.$api.login(loginForm).then(res => {
					console.log(res.data);
				}).catch(err => {
					console.log(err);
				})
			},
			resetForm() {
				this.account = ''
				this.passwd = ''
			}
		}
	}
</script>
<style scoped>
	section {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.at-card {
		padding-top: 20px;
	}

	.at-input {
		margin-bottom: 25px;
	}

	.box {
		display: flex;
		justify-content: space-around;
	}

	.at-button {
		flex: 1;
	}
</style>
