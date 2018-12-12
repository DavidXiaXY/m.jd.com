<template>

	<div class="search-page">

		<!--<div class="search-bar weui-flex" :class="{fixed:fixed}">
			<div class="category">
				<span class="fa fa-th-list"></span>
			</div>
			<div class="search weui-flex__item">
				<input type="search" placeholder="请输入搜索内容"  />
			</div>
			<div class="user">
				<span class="fa fa-user"></span>
			</div>
		</div>-->

		<input type="text" v-model="keyword" name="" id="" value="" /> <button @click="search">搜索</button>

		<product v-for="(item,index) in products" :id="item.id" :title="item.title" :image="item.image" :price="item.price"></product>

		<bottom></bottom>

		<search-page v-model="show"></search-page>

	</div>
</template>

<script>
	import Bottom from "@/components/Footer"
	import SearchPage from "@/components/SearchPage"
	import Product from "@/components/SearchProduct"
	import axios from "axios"
	import qs from "qs"
	export default {
		data() {
			return {
				keyword: '',
				products: [],
				show: false,
				fixed: false
			};
		},
		methods: {
			search() {
				axios.post(this.serveRoot + "/index.php/api/index/searchProduct", qs.stringify({
					keyword: this.keyword,
					id:123,
					order:456
				})).then(res => {
					console.log(res);
					this.products = res.data;
				}).catch(err => {});
			}
		},
		components: {
			Bottom,
			SearchPage,
			Product
		},
		created() {
			console.log(this.$route);
			console.log(this.$router);
		}
	}
</script>

<style>
	.search-bar {
		border-bottom: solid 1px #CCCCCC;
	}
</style>