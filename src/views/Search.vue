<template>

	<div class="search-page">

		<top-bar><input class="search1" type="text" v-model="keyword" name="" id="" placeholder="请输入搜索内容" value="" @focus="show=true" />
</top-bar>

		
		<product v-for="(item,index) in products" :id="item.id" :title="item.title" :image="item.image" :price="item.price"></product>

		<bottom></bottom>

		<search-page v-model="show" @search="search"></search-page>

	</div>
</template>

<script>
	import Bottom from "@/components/Footer"
	import TopBar from "@/components/TopBar"
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
			search(val){
				this.products = val;	
			}
		},
		components: {
			Bottom,
			SearchPage,
			Product,
			TopBar
		},
		created() {
			console.log(this.$route);
			
			if(this.$route.params.product!=null){
				this.products = this.$route.params.product;
			}
			
//			console.log(this.$router);
		}
	}
</script>

<style >
	.search-bar {
		border-bottom: solid 1px #CCCCCC;
	}
    .search1{
		border: 1px solid darkgray;
		display: block;
		width: 500px;
		height: 24px;
		border-radius: 20px;
		margin:0 auto;
		margin-top: 9px;
		padding-left: 40px;
	}
</style>