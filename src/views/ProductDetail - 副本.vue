<template>

	<div>
		<!--		{{$route.params.id}}-->
		<top-bar>
			<router-link :to="'/product/'+id+'/goods'">商品</router-link>
			<router-link :to="'/product/'+id+'/detail'">详情</router-link>
			<router-link :to="'/product/'+id+'/comment'">评价</router-link>
			<router-link :to="'/product/'+id+'/recommend'">推荐</router-link>
			<router-view/>
		</top-bar>

		<div class="mod_slider mod_slider_s1 " id="loopImgDiv">
			<div class="inner">
				<ul class="pic_list" data-slide-ul="firstUl" id="loopImgUl">
					<li id="firstImgLi" data-ul-child="child"><img src="../assets/images/vivo find x.webp"></li>
				</ul>
			</div>
			<div class="decoration" style="display:none;" id="decorationWrap">
				<div class="text_wrap"></div>
				<div class="remind"></div>
			</div>
			<img id="imgLabel" followfirstimg="1" class="activity_tag" src="../assets/images/12.12.webp" style="">
			<img class="service_tag" id="imgLeftDown" followfirstimg="1" src="../assets/images/lijian.webp">
		</div>

		<div class="bar_wrap">
			<ul class="bar" id="loopImgBar">
				<li no="1" class="cur"></li>
				<li no="2" class=""></li>
				<li no="3" class=""></li>
				<li no="4" class=""></li>
				<li no="5" class=""></li>
				<li no="6" class=""></li>
			</ul>
		</div>

		<div class="detail_decoration" id="bigPromoteBanner">
			<div class="banner"><img src="../assets/images/banner.webp"></div>
		</div>

		<div class="buy_area" id="buyArea">
			<div class="fn_wrap">
				<h1 class="fn fn_goods_name" id="favWrap">
                <div class="fn_text_wrap" id="itemName" ptag="7001.1.163"><i class="mod_tag mod_tag_big"><img src="../assets/images/12.12.png"></i><i class="mod_tag mod_tag_big"><img src="../assets/images/wuliu.png"></i>OPPO Find X手机【6期免息+智能手环】4G游戏手机 未来旗舰曲面全景屏全网通 8GB+128GB波尔多红</div>
            </h1>
				<div class="J_ping desc right_shorter" id="itemDesc" ptag="7001.1.59" style="">
					<a href="//item.jd.com/32445108781.html"> 【Find x 12.6日京东秒杀日 顺丰/自营极速发货 【未来旗舰】 骁龙845+曲面全面屏+隐藏式摄像头+3D结构光 【购机好礼】 6期免息0首付+智能手环+抽奖礼 【新品权益】一年全国联保+OPPO会员+30天换货（询客服）+运费险 【京东秒杀】购秒杀套装加赠头戴式蓝牙耳机 立即购买！！！</a>
				</div>
				<div class="book_desc" id="actTitleDesc" style="display:none" ptag="7001.1.50"></div>
				<div class="art_desc" id="artAuthor" style="display:none"></div>
			</div>
			<div id="priceWrap">
				<div class="price_wrap" id="priceBlock">
					<span class="price large_size" id="priceSale">¥<em>4999</em>.00</span>
				</div>
			</div>

			<div class="sku_window" id="skuWindow">
				<div class="sku_choose_info">
					<h3>已选</h3>
					<span id="skuChoose1">8GB+128GB波尔多红,1个</span>
				</div>
			</div>
		</div>
		<div class="de_btn_wrap fixed" id="btnTools">
			<div class="de_row de_btn_bar">
				<div class="icon_btn icon_dong" id="shopIM" style="">
					<i class="icon"></i>
					<span class="txt">联系客服</span>
				</div>
				<div class="icon_btn icon_shop" id="gotoShop" style="">
					<i class="icon"></i>
					<span class="txt">进店</span>
				</div>
				<div class="icon_btn icon_cart" id="gotoCart">
					<i class="icon"><span class="num" id="cartNum" style="display: none;"></span></i>
					<span class="txt">购物车</span>
				</div>
				<div class="de_span btn_group">
					<div class="de_row">
						<div class="btn btn_orange promoteCartBtn" id="addCart2">
							<span class="txt">加入购物车</span>
						</div>
						<div class="btn btn_buy promoteBuyBtn" id="buyBtn2"><span class="txt">立即购买</span></div>
					</div>
				</div>
			</div>
		</div>
		
		<div style="height: 200px;"></div>
	</div>

</template>

<script>
	import TopBar from "@/components/TopBar"
	export default {
		data() {
			return {
				id: 0,
			};
		},
		created() {
			this.id = this.$route.params.id;
		},
		components: {
			TopBar
		}

	}
</script>

<style>
	a {
		margin: 5px;
		font-size: 20px;
	}
	
	#loopImgDiv {
		height: 640px;
		width: 640px;
		cursor: pointer;
		max-width: 640px;
		max-height: 640px;
		margin: 0 auto;
		padding: 0;
		background-color: #e8e8ed;
		position: relative;
		overflow: hidden;
		outline: 0;
		display: block;
		font-size: 12px;
	}
	
	.inner {
		height: 100%;
		width: 100%;
		display: block;
		cursor: pointer;
		position: relative;
	}
	
	#loopImgUl {
		left: 0px;
		width: 3840px;
		height: 640px;
		z-index: 10;
		position: relative;
		list-style-type: none;
		margin: 0;
		padding: 0;
		list-style: none;
		vertical-align: baseline;
		display: block;
	}
	
	#firstImgLi {
		height: 640px;
		width: 640px;
		transition: all 0ms ease 0s;
		transform: translate3d(0px, 0px, 0px);
		background: #fff;
		padding: 0;
		position: relative;
		float: left;
		list-style-type: none;
		margin: 0;
		vertical-align: baseline;
		display: list-item;
		text-align: -webkit-match-parent;
		list-style: none;
	}
	
	#firstImgLi img {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate3d(-50%, -50%, 0);
		max-width: 100%;
		max-height: 100%;
		line-height: 100%;
		border: 0 none;
		vertical-align: top;
		list-style-type: none;
		text-align: -webkit-match-parent;
		list-style: none;
	}
	
	#imgLabel {
		z-index: 11;
		position: absolute;
		top: 0;
		right: 10px;
		width: 100px;
		height: 100px;
		border: 0 none;
		vertical-align: top;
	}
	
	#imgLeftDown {
		z-index: 11;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100px;
		height: 100px;
		border: 0 none;
		vertical-align: top;
		cursor: pointer;
	}
	
	.bar_wrap {
		line-height: 4px;
		bottom: 10px;
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		text-align: center;
		z-index: 20;
	}
	
	#loopImgBar {
		padding: 0 4px;
		min-width: 58px;
		overflow: hidden;
		text-align: center;
		list-style-type: none;
		margin: 0;
		list-style: none;
		vertical-align: baseline;
		display: block;
		line-height: 4px;
	}
	
	.bar li {
		width: 6px;
		height: 6px;
		margin: 4.5px 3.8px;
		list-style-type: none;
		background: #b9b9b9;
		border-radius: 50%;
		float: left;
	}
	
	.bar li.cur {
		background: #e93b3d;
	}
	
	.banner {
		margin-top: 100px;
		width: 100%;
		padding-top: 13.3333%;
		overflow: hidden;
	}
	
	.banner img {
		position: absolute;
		width: 100%;
		margin-top: -150px;
		border: 0 none;
		vertical-align: top;
	}
	
	.fn_wrap {
		margin-top: 30px;
		padding-bottom: 10px;
		position: relative;
		padding: 15px 10px;
		overflow: hidden;
	}
	
	#favWrap {
		min-height: 36px;
		padding-right: 52px;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		position: relative;
		color: #333;
		overflow: hidden;
		font-size: 16px;
		font-weight: 400;
		line-height: 18px;
		font-family: inherit;
		margin: 0;
		padding: 0;
		vertical-align: baseline;
	}
	
	#itemName {
		display: block;
		color: #333;
		font-size: 16px;
		font-weight: 400;
		line-height: 18px;
		font-family: inherit;
	}
	
	.mod_tag_big {
		height: 15px;
		display: inline-block;
		vertical-align: middle;
		margin-top: -2px;
		margin-right: 5px;
		font-style: normal;
	}
	
	.mog_tag_big img {
		display: inline-block;
		width: 40%;
		border: 0 none;
		vertical-align: top;
		font-style: normal;
		color: #333;
		line-height: 18px;
	}
	
	#itemDesc {
		color: #e4393c;
		padding: 5px 0 0;
		line-height: 1.3;
		position: relative;
		font-size: 12px;
		max-height: 46px;
		overflow: hidden;
	}
	
	#itemDesc a {
		color: #e4393c;
		text-decoration: underline;
		line-height: 1.3;
		font-size: 12px;
	}
	
	#priceBlock {
		padding: 0 10px;
		line-height: 20px;
		margin-bottom: 5px;
		font-size: 12px;
	}
	
	#priceSale {
		font-size: 12px;
		color: #e4393c;
		font-weight: 700;
		line-height: 1.3;
		display: inline-block;
		font-family: arial, sans-serif;
	}
	
	#priceSale em {
		font-size: 18px;
		font-style: normal;
		color: #e4393c;
		font-weight: 700;
		line-height: 1.3;
	}
	
	#skuWindow {
		background: #fff;
		padding: 12px 0 12px 10px;
		position: relative;
		font-size: 12px;
		color: #999;
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
	
	#skuChoose1 {
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
	
	#btnTools {
		max-width: 100000px!important;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		z-index: 106;
	}
	
	.de_btn_bar {
		padding-bottom: env(safe-area-inset-bottom);
		background-color: hsla(0, 0%, 100%, .95);
		position: relative;
		height: 50px;
		display: flex;
	}
	
	.de_btn_bar:before {
		z-index: 2;
		content: "";
		height: 0;
		display: block;
		border-top: 1px solid #ddd;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
	}
	
	#shopIM {
		width: 14%;
		position: relative;
		text-align: center;
		cursor: pointer;
		display: block;
	}
	
	#shopIM i {
		background: url(../assets/images/kefu.png) 50% no-repeat;
		background-size: auto 20px;
		display: block;
		width: 20px;
		height: 25px;
		margin: 5px auto 0;
		position: relative;
		font-style: normal;
	}
	
	.text {
		font-size: 10px;
		color: #666;
		display: block;
		line-height: 20px;
		text-align: center;
		cursor: pointer;
	}
	
	#gotoShop {
		width: 14%;
		position: relative;
		text-align: center;
		cursor: pointer;
		display: block;
	}
	
	.icon_shop .icon {
		background: url(../assets/images/shop.png) 50% no-repeat;
		background-size: auto 20px;
		display: block;
		width: 20px;
		height: 25px;
		margin: 5px auto 0;
		position: relative;
		font-style: normal;
	}
	
	#gotoCart {
		width: 14%;
		position: relative;
		text-align: center;
		cursor: pointer;
		display: block;
	}
	
	#gotoCart .icon {
		background: url(../assets/images/shoppingCart.png) 50% no-repeat;
		background-size: auto 20px;
		display: block;
		width: 20px;
		height: 25px;
		margin: 5px auto 0;
		position: relative;
		font-style: normal;
	}
	
	.btn_group {
		position: relative;
		height: 50px;
		display: block;
		width: 100%;
		-webkit-box-flex: 1;
		flex: 1;
	}
	
	#addCart2 {
		position: relative;
		z-index: 10;
		line-height: 50px;
		text-align: center;
		color: #fff;
		font-size: 14px;
		cursor: pointer;
		display: block;
		width: 100%;
		-webkit-box-flex: 1;
		flex: 1;
		background: linear-gradient(to right, #FFC740, #FF961E) !important;
	}
</style>