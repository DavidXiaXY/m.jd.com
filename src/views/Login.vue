<template>

	<div class="login-page">
		<top-bar>用户登录</top-bar>
		<div class="weui-cells weui-cells_form">
			<div class="weui-cell">
				<div class="weui-cell__hd"><label class="weui-label">用户名</label></div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="text" v-model="name" placeholder="请输入用户名/手机号/邮箱">
				</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd"><label class="weui-label">密码</label></div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="password" v-model="pwd" placeholder="请输入密码">
				</div>
			</div>
		</div>
		<div class="weui-btn-area ">
			<a class="weui-btn weui-btn_primary" :class="{'weui-btn_disabled':!loginEnable}" @click.prevent="login">登录</a>
		</div>

		<div id="loadingToast" :class="{'toast-hidden':!loading}">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content">登录中</p>
			</div>
		</div>

		<div id="toast" class="toast-hidden">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-icon-success-no-circle weui-icon_toast"></i>
				<p class="weui-toast__content">已完成</p>
			</div>
		</div>

	</div>

</template>

<script>
	import TopBar from "@/components/TopBar";
	import axios from "axios";
	import qs from "qs";
	export default {

		data() {
			return {
				loginUrl: "http://api.niyinlong.com/index.php/api/index/login",
				name: '',
				pwd: '',
				loading:false
			};
		},
		props: {},
		// 方法的集合
		methods: {
			login() {
				// 提交数据:name,pwd
				// 地址：loginUrl
				// 方式：post

				if(this.loginEnable) {
					this.loading = true;
					axios.post(this.loginUrl, qs.stringify({
						name: this.name,
						pwd: this.pwd
					})).then(res => {
						alert(res.data.msg);
						if(res.data.code>0){
							
							this.$store.commit('setLoginState',true);
							this.$router.push('/');
						}
						this.loading = false;
					}).catch(err => {
						this.loading = false;
					});

				}

			}
		},
		computed: {
			loginEnable() {
				if(this.name.length >4 && this.pwd.length > 4) {
					return true;
				} else {
					return false;
				}
			}
		},
		watch: {},
		created() {},
		mounted() {},
		updated() {},
		components: {
			TopBar
		}
	}
</script>

<style>
	.toast-hidden {
		opacity: 0!important;
		display: none!important;
	}
</style>