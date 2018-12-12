<template>

	<div class="search-page">

		<input type="text" name="" @focus="show=true" id="" value="" /> 
		
		
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
	export default {
		data() {
			return {
				keyword: '',
				products: [],
				show:false,
			};
		},
		methods: {
			search() {
				axios.get(this.serveRoot + "/index.php/api/index/searchProduct?keyword=" + this.keyword).then(res => {
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
	img {
		border: 0 none;
		vertical-align: top;
	}
	
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	
	.product {
		width: 50%;
		float: left;
		padding-right: 2px;
		padding-bottom: 4px;
		box-sizing: border-box;
	}
	
	.product a {
		background-color: #FFFFFF;
		display: block;
		text-decoration: none;
	}
	
	.product:nth-child(2n) {
		padding-right: 0px;
		padding-left: 2px;
	}
	
	.product-image img {
		width: 100%;
	}
	
	.product-title {
		box-sizing: border-box;
		height: 31px;
		font-size: 13px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-word;
		color: #232326;
		margin-top: 5px;
		line-height: 16px;
		margin-bottom: 3px;
		padding: 0 4px;
		background-color: #fff;
	}
	
	.product-price {
		color: #f23030;
		display: inline-block;
		padding: 0 5px 0 4px;
		position: relative;
		top: 1px;
		height: 25px;
		line-height: 25px;
	}
	
	.similar-info {
		height: 26px;
	}
</style>