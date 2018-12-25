<template>

	<div style="background-color: whitesmoke;">

		<top-bar>

			<ul>
				<li :class="{active:navIndex==index}" v-for="(item,index) in nav" @click="navIndex=index;scroll(item.ref)"> <span v-text="item.title"></span> </li>
			</ul>

		</top-bar>

		<div id="product" ref="product" style="background-color: whitesmoke;">
			<div class="banner">
				<img src="../assets/images/cimuqiu.webp" />
			</div>
			<div class="banner2">
				<img src="../assets/images/banner2.jpg" />
			</div>
			<div class="fn_wrap" style="background-color: white;">
				<h1 class="fn_goods_name" id="favWrap">
                <div class="fn_text_wrap" id="itemName" >网易严选 新年礼物 年会奖品 茨球公仔 阴阳师 10cm</div>             
                </h1>
				<div class="J_ping desc right_shorter" id="itemDesc">
					网易严选暖暖礼物季，新年好礼抢先购，部分3件7折，关注店铺领10元券，
					<a href="#">立即查看礼物清单！</a>
				</div>

			</div>
			<div id="priceWrap" style="background-color: white;">
				<div class="price_wrap">
					<span class="price large_size" id="priceSale">¥<em>59</em>.00</span>
				</div>
			</div>
			<div class="sku_window" id="skuWindow">
				<div class="sku_choose_info">
					<h3>已选</h3>
					<span class="skuChoose1">8GB+128GB波尔多红,1个</span>
				</div>
			</div>
			<div class="sku_window" id="skuWindow">
				<div class="sku_choose_info">
					<h3>送至</h3>
					<span class="skuChoose1">北京朝阳区三环到四环之间</span>
				</div>
				<div class="sku_choose_info skuChoose2">
					<h3>运费</h3>
					<span class="skuChoose1">店铺单笔订单不满88元，收运费10元 </span>
				</div>
			</div>

		</div>

		<div id="comment" ref="comment">
			<img src="../assets/images/pingjia.png" />
		</div>
		<div id="detail" ref="detail">
			<img src="../assets/images/xiangqing1.png" />
			<img src="../assets/images/tuijian2.jpg" />
			<img src="../assets/images/tuijian3.jpg" />
			<img src="../assets/images/tuijian4.jpg" />
			<img src="" />
		</div>
		<div id="recommend" ref="recommend">
			<img src="../assets/images/tuijian.png" />
		</div>
		
		<div style="background-color: white;height: 400px;"></div>

	</div>

</template>

<script>
	import TopBar from "@/components/TopBar";
	export default {
		data() {
			return {
				nav: [{
					ref: 'product',
					title: '商品'
				}, {
					ref: 'comment',
					title: '评价'
				}, {
					ref: 'detail',
					title: '详情'
				}, {
					ref: 'recommend',
					title: '推荐'
				}],
				navIndex: 0,
			};
		},

		methods: {
			scroll(ref) {

				console.log(this.$refs[ref]);
				var top = this.$refs[ref].offsetTop;
				//				var tmp = document.documentElement.scrollTop;
				//				var count = 20;
				//				var step = (top-tmp)/count;
				//				var t = setInterval(()=>{
				//					
				//					tmp += step;
				//					document.documentElement.scrollTop = tmp;
				//					count--;
				//					
				//					if(count<=0){
				//						clearInterval(t);
				//					}
				//					
				//				},50);

				document.documentElement.scrollTop = top;
				//				document.body.scrollTop = top;
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

<style>
	#comment {
		padding-top: 40px;
	}
	
	#comment img {
		width: 100%;
	}
	#detail {
		padding-top: 40px;
	}
	
	#detail img {
		width: 100%;
	}
	#recommend {
		padding-top: 40px;
	}
	
	#recommend img {
		width: 100%;
	}
	
	.top-bar {
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
	
	.banner img {
		width: 100%;
		margin-top: 41px;
	}
	
	.banner2 img {
		width: 100%;
	}
	
	.fn_wrap {
		padding: 15px 10px;
		overflow: hidden;
		padding-top: 12px;
		padding-bottom: 10px;
		position: relative;
	}
	
	.fn_goods_name {
		min-height: 36px;
		padding-right: 52px;
		position: relative;
		color: #333;
		overflow: hidden;
		font-size: 16px;
		font-weight: 400;
		line-height: 18px;
	}
	
	.fn_wrap .desc {
		color: #e4393c;
		padding: 5px 0 0;
		line-height: 1.3;
		position: relative;
		font-size: 12px;
		max-height: 46px;
		overflow: hidden;
	}
	
	.fn_wrap .desc a {
		color: #e4393c;
		text-decoration: underline;
	}
	
	.price_wrap {
		padding: 0 10px;
		line-height: 20px;
		margin-bottom: 5px;
		font-size: 12px;
	}
	
	.price_wrap .price {
		font-size: 12px;
		color: #e4393c;
		font-weight: 700;
		line-height: 1.3;
		display: inline-block;
	}
	
	.price_wrap .price.large_size em {
		font-size: 18px;
		font-style: normal;
	}
	
	.sku_window {
		background: #fff;
		padding: 12px 0 12px 10px;
		position: relative;
		font-size: 12px;
		color: #999;
		margin-top: 10px;
	}
	
	.sku_choose_info {
		position: relative;
		padding: 0 40px 0 33px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.sku_choose_info h3 {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: 35px;
		font-weight: 400;
		font-size: 100%;
		font-family: inherit;
		margin: 0;
		padding: 0;
		vertical-align: baseline;
	}
	
	.skuChoose1 {
		font-size: 14px;
		color: #333;
		line-height: 22px;
	}
	
	.sku_window:after {
		content: "";
		position: absolute;
		right: 15px;
		top: 22px;
		width: 15px;
		height: 3px;
		background-image: url(../assets/images/sprite_detail_sku_v1.png);
		background-repeat: no-repeat;
		background-size: 15px;
		background-position: 0 0;
	}
	
	.skuChoose2 {
		padding-top: 10px;
	}
</style>