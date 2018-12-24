<template>

	<div>

		<top-bar>

			<ul>
				<li :class="{active:navIndex==index}" v-for="(item,index) in nav" @click="navIndex=index"> <span v-text="item.title"></span> </li>
			</ul>

		</top-bar>

		<div id="product" style="height: 300px;background-color: red;"></div>
		<div id="comment" style="height: 300px;background-color: green;"></div>
		<div id="detail" style="height: 300px;background-color: blue;"></div>
		<div id="recommend" style="height: 300px;background-color: deeppink;" @click="scroll" ></div>

	</div>

</template>

<script>
	import TopBar from "@/components/TopBar";
	export default {
		data() {
			return {
				nav: [{
					ref: '',
					title: '商品'
				}, {
					ref: '',
					title: '评价'
				}, {
					ref: '',
					title: '详情'
				}, {
					ref: '',
					title: '推荐'
				}],
				navIndex: 0,
			};
		},
		
		methods:{
			scroll(){
				
				
				
				document.body.scrollTop = 0;
			}
		},
		mounted() {
			
			console.log(document.body.scrollTop);
			
		},
		components: {
			TopBar
		}
	}
</script>

<style scoped>
	
	.top-bar{
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
	}
	.top-bar ul {
		margin: 0;
		padding: 0;
		text-align: center;
		list-style: none;
		padding: 0px 40px;
	}
	
	.top-bar ul li {
		float: left;
		width: 25%;
	}
	
	.top-bar ul li.active span {
		color: #e4393c;
		font-weight: bold;
		padding-left: 13px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 8px;
	}
</style>