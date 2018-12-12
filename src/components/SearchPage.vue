<template>
	<div class="search-mask" v-show="show">
		<header class="top-bar weui-flex">

			<div class="go-back">
				<a href="#" @click.prevent="hide"><i class="fa fa-angle-left"></i></a>
			</div>
			<div class="search weui-flex__item">
				<input type="search" placeholder="请输入搜索内容" />
			</div>
			<div class="menu" style="width: 60px;">
				<a>搜索</a>
			</div>
		</header>

		<div id="msHistory" class="recent-search" style="display: block;" hide="0">
			<div class="recent-search-head cf clear">
				<p>最近搜索</p><i id="msHistoryDel" class="garbage-pic"></i></div>
			<div id="msHistoryTags" class="recent-search-tags clear">
				<span tourl="//so.m.jd.com/ware/search.action?keyword=%E8%8A%9D%E9%BA%BB&amp;searchFrom=search&amp;sf=11&amp;as=1" ind="1">
					<a href="javascript:void(0);">芝麻</a></span><span tourl="//so.m.jd.com/shop/searchShop.action?keyword=%E8%8A%9D%E9%BA%BB&amp;searchFrom=search&amp;sf=16&amp;as=1" ind="2">
						<a href="javascript:void(0);">芝麻"店铺"</a>
					</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			};
		},
		props: ['value'],
		created() {
			this.show = this.value;

		},
		watch: {
			value(val) {
				this.show = val;
				if(val) {
					document.body.style.overflow = "hidden";
				} else {
					document.body.style.overflow = "auto";
				}
			}
		},
		methods: {
			hide() {
				this.show = false;
				this.$emit('input', false);
				document.body.style.overflow = "auto";
			}
		}
	}
</script>

<style>
	.search-mask {
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		z-index: 999;
		background-color: #FFFFFF;
	}
	
	.search-mask .top-bar .search {
		padding-top: 7px;
	}
	
	.search-mask .top-bar input {
		width: 100%;
		height: 30px;
		border-radius: 15px;
		border: solid 1px #CCCCCC;
		outline: none;
		padding-left: 40px;
		background-color: #fff;
		box-sizing: border-box;
	}
	
	.search-mask .top-bar .menu a {
		position: static;
		padding: 6px;
		box-sizing: border-box;
		background-color: #e93b3d;
		color: #fff;
		border-radius: 4px;
		font-size: 14px;
		line-height: 44px;
	}
	
	.recent-search {
		display: block;
		padding-left: 13px;
		margin-top: 15px;
		box-sizing: border-box;
	}
	
	.recent-search-head {
		padding: 0 15px 11px 0;
		box-sizing: border-box;
	}
	
	.recent-search-head p {
		font-size: 15px;
		line-height: 15px;
		color: #232326;
		float: left;
		width: 100px;
		padding-left: 1px;
		margin: 0;
		padding: 0;
		vertical-align: baseline;
	}
	
	.garbage-pic {
		float: right;
		display: block;
		background: url(//st.360buyimg.com/so/images/layout/search-sprites.png) no-repeat;
		height: 15px;
		width: 15px;
		background-position: 0 -35px;
		background-size: 50px 50px;
		position: relative;
		top: -1px;
	}
	
	em,
	i {
		font-style: normal;
	}
	
	.recent-search-tags span {
		display: block;
		max-width: 100%;
		overflow: hidden;
		padding-right: 10px;
		padding-bottom: 10px;
		float: left;
	}
	
	.search-land .recent-search .recent-search-tags {
		padding-right: 2px;
		overflow: hidden;
		font-size: 12px;
		text-align: center;
	}
	
	div {
		box-sizing: border-box;
	}
	
	* {
		cursor: pointer !important;
	}
	
	#msHistoryTags a {
		display: inline-block;
		height: 23px;
		line-height: 24px;
		border-radius: 3px;
		display: block;
		width: 100%;
		color: #686868;
		background-color: #f0f2f5;
		padding-left: 13px;
		padding-right: 13px;
		overflow: hidden;
		box-sizing: border-box;
	}
	
	a,
	a:visited {
		text-decoration: none;
		color: #333;
	}
</style>