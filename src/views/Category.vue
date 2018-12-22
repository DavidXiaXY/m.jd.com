<template>
	<div class="category-page">
		<top-bar>
			<input class="search1" type="search" v-model="keyword" placeholder="海尔京东超级品牌日    每满千减百" />
		</top-bar>

		<ul class="list1" style="transform: translateY(0px);" id="category2">
			<li class="cur" m_index="1" m_cid="WQR2006" commonused="false">
				<a class="J_ping" id="category6">热门推荐</a>
			</li>
			<li m_index="2" m_cid="WQ1980" id="category7" commonused="true">
				<a class="J_ping">手机数码</a>
			</li>
			<li m_index="3" m_cid="WQ1982" id="category8" commonused="true">
				<a class="J_ping">家用电器</a>
			</li>
			<li m_index="4" m_cid="WQ1981" id="category9" commonused="true">
				<a class="J_ping">电脑办公</a>
			</li>
			<li m_index="5" m_cid="WQ1988" id="category10" commonused="true">
				<a class="J_ping">计生情趣</a>
			</li>
			<li m_index="6" m_cid="WQ2044" id="category11" commonused="false">
				<a class="J_ping">美妆护肤</a>
			</li>
			<li m_index="7" m_cid="WQ2046" id="category12" commonused="false">
				<a class="J_ping">个护清洁</a>
			</li>
			<li m_index="8" m_cid="WQ1990" id="category13" commonused="true">
				<a class="J_ping">汽车用品</a>
			</li>
			<li m_index="9" m_cid="WQ1968" id="category14" commonused="true">
				<a class="J_ping">京东超市</a>
			</li>
			<li m_index="10" m_cid="WQ1972" id="category15" commonused="true">
				<a class="J_ping">男装</a>
			</li>
			<li m_index="11" m_cid="WQ1974" id="category16" commonused="true">
				<a class="J_ping">男鞋</a>
			</li>
			<li m_index="12" m_cid="WQ1973" id="category17" commonused="true">
				<a class="J_ping">女装</a>
			</li>
			<li m_index="13" m_cid="WQ1975" id="category18" commonused="false">
				<a class="J_ping">女鞋</a>
			</li>
			<li m_index="14" m_cid="WQ1985" id="category19" commonused="true">
				<a class="J_ping">母婴童装</a>
			</li>
			<li m_index="15" m_cid="WQ1996" id="category20" commonused="false">
				<a class="J_ping">图书音像</a>
			</li>
			<li m_index="16" m_cid="WQ1989" id="category21" commonused="false">
				<a class="J_ping">运动户外</a>
			</li>
			<li m_index="17" m_cid="WQ1976" id="category22" commonused="true">
				<a class="J_ping">内衣配饰</a>
			</li>
			<li m_index="18" m_cid="WQ1983" id="category23" commonused="false">
				<a class="J_ping">食品生鲜</a>
			</li>
			<li m_index="19" m_cid="WQ1984" id="category24" commonused="false">
				<a class="J_ping">酒水饮料</a>
			</li>
			<li m_index="20" m_cid="WQ1992" id="category25" commonused="false">
				<a class="J_ping">家具家装</a>
			</li>
			<li m_index="21" m_cid="WQ1991" id="category26" commonused="false">
				<a class="J_ping">家居厨具</a>
			</li>
			<li m_index="22" m_cid="WQ1977" id="category27" commonused="false">
				<a class="J_ping">箱包手袋</a>
			</li>
			<li m_index="23" m_cid="WQ1979" id="category28" commonused="false">
				<a class="J_ping">钟表珠宝</a>
			</li>
			<li m_index="24" m_cid="WQ1986" id="category29" commonused="false">
				<a class="J_ping">玩具乐器</a>
			</li>
			<li m_index="25" m_cid="WQ1987" id="category30" commonused="false">
				<a class="J_ping">医药保健</a>
			</li>
			<li m_index="26" m_cid="WQ1994" id="category31" commonused="false">
				<a class="J_ping">宠物生活</a>
			</li>
			<li m_index="27" m_cid="WQ1993" id="category32" commonused="false">
				<a class="J_ping">礼品鲜花</a>
			</li>
			<li m_index="28" m_cid="WQ1998" id="category33" commonused="false">
				<a class="J_ping">农资绿植</a>
			</li>
			<li m_index="29" m_cid="WQ1995" id="category34" commonused="false">
				<a class="J_ping">生活旅行</a>
			</li>
			<li m_index="30" m_cid="WQ1970" id="category35" commonused="false">
				<a class="J_ping">奢侈品</a>
			</li>
			<li m_index="31" m_cid="WQ1971" id="category36" commonused="false">
				<a class="J_ping">海囤全球</a>
			</li>
			<li m_index="32" m_cid="WQ1997" id="category37" commonused="false">
				<a class="J_ping">艺术邮币</a>
			</li>
			<li m_index="33" m_cid="WQ2002" id="category38" commonused="false">
				<a class="J_ping">二手商品</a>
			</li>
			<li m_index="34" m_cid="WQ1999" id="category39" commonused="false">
				<a class="J_ping">特产馆</a>
			</li>
			<li m_index="35" m_cid="WQ2000" id="category40" commonused="false">
				<a class="J_ping">京东金融</a>
			</li>
			<li m_index="36 " m_cid="WQ1969 " id="category41 " commonused="false ">
				<a class="J_ping ">国际名牌</a>
			</li>
			<li m_index="37 " m_cid="WQ2001 " id="category42 " commonused="false ">
				<a class="J_ping ">拍卖</a>
			</li>
			<li m_index="38 " m_cid="WQ2008 " id="category43 " commonused="false ">
				<a class="J_ping ">房产</a>
			</li>
		</ul>

		<div class="category-content">

			<div class="img1"><img src="//img20.360buyimg.com/mcoss/jfs/t1/17970/5/1976/51492/5c189253E07d143ed/5df8a82661807e7f.png"></div>
			<div class="fenlei">
				<h4>热门分类</h4>
				<ul class="jd-category-style-1">
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
				</ul>
				<ul class="jd-category-style-1">
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
				</ul>
				<ul class="jd-category-style-1">
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
				</ul>
				
				<h4>家电热搜</h4>
				<ul class="jd-category-style-1">
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
				</ul>
				<ul class="jd-category-style-1">
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
				</ul>
				<ul class="jd-category-style-1">
					<li>
						<img src="../assets/images/5be6ebd8Nb07ef492.png" />
						<p>手机</p>
					</li>
				</ul>
				
			</div>
		</div>

		<bottom style="clear: both;"></bottom>
	</div>

</template>

<script>
	import TopBar from "@/components/TopBar"
	import Bottom from "@/components/Footer"
	export default {
		data() {
			return {};
		},
		methods: {

		},
		components: {
			TopBar,
			Bottom
		}
	}
</script>

<style>
	.search1 {
		width: 100%;
		height: 30px;
		border-radius: 15px;
		outline: none;
		padding-left: 40px;
		background-color: whitesmoke;
		box-sizing: border-box;
		border: 0px;
	}
	
	element.style {
		transform: translateY(0px);
	}
	
	.category-categoryNewUi .jd-category-tab ul {
		width: 85px;
	}
	
	.category-viewport li,
	.category-viewport ul {
		display: block;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	
	ul,
	menu,
	dir {
		display: block;
		list-style-type: disc;
		margin-block-start: 0em;
		margin-block-end: 0em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		padding-inline-start: 0px;
		list-style: none;
	}
	
	.jd-category-tab li {
		height: 46px;
		line-height: 46px;
		background: #fff;
		text-align: center;
		position: relative;
	}
	
	.category-viewport li,
	.category-viewport ul {
		display: block;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
	
	.J_ping {
		display: block;
		margin-left: 0px;
		width: 85px;
		height: 46px;
		line-height: 46px;
		text-decoration: none;
		font-size: 14px;
		color: #080808;
		overflow: hidden;
		text-overflow: ellipsis;
		background-color: whitesmoke;
		text-align: center;
	}
	
	#category6 {
		color: #e93b3d;
		background-color: white;
	}
	
	.category-page ul {
		display: block;
		width: 85px;
		float: left;
	}
	
	.list1 li {
		line-height: 0px;
	}
	
	.category-content {
		float: left;
		width: 275px;
	}
	
	.category-content img {
		width: 254px;
		padding-top: 5px;
		padding-left: 10px;
	}
	
	.fenlei {
		margin: 19px 7px 0;
	}
	
	.jd-category-content .jd-category-style-1 {
		border: 0;
		font-size: 0;
		padding: 7px 10px 0;
		overflow: hidden;
	}
	
	.jd-category-style-1 li {
		float: left;
	}
	
	.jd-category-style-1 img {
		width: 60px;
		height: 60px;
	}
	
	.jd-category-style-1 p {
		color: #333;
		height: 35px;
		margin-top: 5px;
		padding-left: 3px;
		font-size: 12px;
		text-align: center;
	}
</style>