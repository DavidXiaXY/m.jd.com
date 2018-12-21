<template>
	<div class="category-page">
		<top-bar>
			<input class="search1" type="search" v-model="keyword" placeholder="海尔京东超级品牌日    每满千减百" />
		</top-bar>

		<ul style="transform: translateY(0px);" id="category2">
			<li class="cur" m_index="1" m_cid="WQR2006" id="category6" commonused="false">
				<a class="J_ping" report-eventparam="2006_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.10" href="javascript:void(0);">热门推荐</a>
			</li>
			<li m_index="2" m_cid="WQ1980" id="category7" commonused="true">
				<a class="J_ping" report-eventparam="1980_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.2500" href="javascript:void(0);">手机数码</a>
			</li>
			<li m_index="3" m_cid="WQ1982" id="category8" commonused="true">
				<a class="J_ping" report-eventparam="1982_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.2900" href="javascript:void(0);">家用电器</a>
			</li>
			<li m_index="4" m_cid="WQ1981" id="category9" commonused="true">
				<a class="J_ping" report-eventparam="1981_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.2700" href="javascript:void(0);">电脑办公</a>
			</li>
			<li m_index="5" m_cid="WQ1988" id="category10" commonused="true">
				<a class="J_ping" report-eventparam="1988_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.4100" href="javascript:void(0);">计生情趣</a>
			</li>
			<li m_index="6" m_cid="WQ2044" id="category11" commonused="false">
				<a class="J_ping" report-eventparam="2044_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.8000" href="javascript:void(0);">美妆护肤</a>
			</li>
			<li m_index="7" m_cid="WQ2046" id="category12" commonused="false">
				<a class="J_ping" report-eventparam="2046_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.9000" href="javascript:void(0);">个护清洁</a>
			</li>
			<li m_index="8" m_cid="WQ1990" id="category13" commonused="true">
				<a class="J_ping" report-eventparam="1990_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.4500" href="javascript:void(0);">汽车用品</a>
			</li>
			<li m_index="9" m_cid="WQ1968" id="category14" commonused="true">
				<a class="J_ping" report-eventparam="1968_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.100" href="javascript:void(0);">京东超市</a>
			</li>
			<li m_index="10" m_cid="WQ1972" id="category15" commonused="true">
				<a class="J_ping" report-eventparam="1972_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.900" href="javascript:void(0);">男装</a>
			</li>
			<li m_index="11" m_cid="WQ1974" id="category16" commonused="true">
				<a class="J_ping" report-eventparam="1974_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.1300" href="javascript:void(0);">男鞋</a>
			</li>
			<li m_index="12" m_cid="WQ1973" id="category17" commonused="true">
				<a class="J_ping" report-eventparam="1973_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.1100" href="javascript:void(0);">女装</a>
			</li>
			<li m_index="13" m_cid="WQ1975" id="category18" commonused="false">
				<a class="J_ping" report-eventparam="1975_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.1500" href="javascript:void(0);">女鞋</a>
			</li>
			<li m_index="14" m_cid="WQ1985" id="category19" commonused="true">
				<a class="J_ping" report-eventparam="1985_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.3500" href="javascript:void(0);">母婴童装</a>
			</li>
			<li m_index="15" m_cid="WQ1996" id="category20" commonused="false">
				<a class="J_ping" report-eventparam="1996_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.5700" href="javascript:void(0);">图书音像</a>
			</li>
			<li m_index="16" m_cid="WQ1989" id="category21" commonused="false">
				<a class="J_ping" report-eventparam="1989_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.4300" href="javascript:void(0);">运动户外</a>
			</li>
			<li m_index="17" m_cid="WQ1976" id="category22" commonused="true">
				<a class="J_ping" report-eventparam="1976_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.1700" href="javascript:void(0);">内衣配饰</a>
			</li>
			<li m_index="18" m_cid="WQ1983" id="category23" commonused="false">
				<a class="J_ping" report-eventparam="1983_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.3100" href="javascript:void(0);">食品生鲜</a>
			</li>
			<li m_index="19" m_cid="WQ1984" id="category24" commonused="false">
				<a class="J_ping" report-eventparam="1984_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.3300" href="javascript:void(0);">酒水饮料</a>
			</li>
			<li m_index="20" m_cid="WQ1992" id="category25" commonused="false">
				<a class="J_ping" report-eventparam="1992_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.4900" href="javascript:void(0);">家具家装</a>
			</li>
			<li m_index="21" m_cid="WQ1991" id="category26" commonused="false">
				<a class="J_ping" report-eventparam="1991_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.4700" href="javascript:void(0);">家居厨具</a>
			</li>
			<li m_index="22" m_cid="WQ1977" id="category27" commonused="false">
				<a class="J_ping" report-eventparam="1977_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.1900" href="javascript:void(0);">箱包手袋</a>
			</li>
			<li m_index="23" m_cid="WQ1979" id="category28" commonused="false">
				<a class="J_ping" report-eventparam="1979_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.2300" href="javascript:void(0);">钟表珠宝</a>
			</li>
			<li m_index="24" m_cid="WQ1986" id="category29" commonused="false">
				<a class="J_ping" report-eventparam="1986_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.3700" href="javascript:void(0);">玩具乐器</a>
			</li>
			<li m_index="25" m_cid="WQ1987" id="category30" commonused="false">
				<a class="J_ping" report-eventparam="1987_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.3900" href="javascript:void(0);">医药保健</a>
			</li>
			<li m_index="26" m_cid="WQ1994" id="category31" commonused="false">
				<a class="J_ping" report-eventparam="1994_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.5300" href="javascript:void(0);">宠物生活</a>
			</li>
			<li m_index="27" m_cid="WQ1993" id="category32" commonused="false">
				<a class="J_ping" report-eventparam="1993_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.5100" href="javascript:void(0);">礼品鲜花</a>
			</li>
			<li m_index="28" m_cid="WQ1998" id="category33" commonused="false">
				<a class="J_ping" report-eventparam="1998_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.7200" href="javascript:void(0);">农资绿植</a>
			</li>
			<li m_index="29" m_cid="WQ1995" id="category34" commonused="false">
				<a class="J_ping" report-eventparam="1995_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.5500" href="javascript:void(0);">生活旅行</a>
			</li>
			<li m_index="30" m_cid="WQ1970" id="category35" commonused="false">
				<a class="J_ping" report-eventparam="1970_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.500" href="javascript:void(0);">奢侈品</a>
			</li>
			<li m_index="31" m_cid="WQ1971" id="category36" commonused="false">
				<a class="J_ping" report-eventparam="1971_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.700" href="javascript:void(0);">海囤全球</a>
			</li>
			<li m_index="32" m_cid="WQ1997" id="category37" commonused="false">
				<a class="J_ping" report-eventparam="1997_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.6600" href="javascript:void(0);">艺术邮币</a>
			</li>
			<li m_index="33" m_cid="WQ2002" id="category38" commonused="false">
				<a class="J_ping" report-eventparam="2002_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.6800" href="javascript:void(0);">二手商品</a>
			</li>
			<li m_index="34" m_cid="WQ1999" id="category39" commonused="false">
				<a class="J_ping" report-eventparam="1999_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.7300" href="javascript:void(0);">特产馆</a>
			</li>
			<li m_index="35" m_cid="WQ2000" id="category40" commonused="false">
				<a class="J_ping" report-eventparam="2000_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.7500" href="javascript:void(0);">京东金融</a>
			</li>
			<li m_index="36" m_cid="WQ1969" id="category41" commonused="false">
				<a class="J_ping" report-eventparam="1969_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.300" href="javascript:void(0);">国际名牌</a>
			</li>
			<li m_index="37" m_cid="WQ2001" id="category42" commonused="false">
				<a class="J_ping" report-eventparam="2001_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.6700" href="javascript:void(0);">拍卖</a>
			</li>
			<li m_index="38" m_cid="WQ2008" id="category43" commonused="false">
				<a class="J_ping" report-eventparam="2008_home" report-eventid="MCategory_1st" report-eventlevel="2" ptag="137886.1.7000" href="javascript:void(0);">房产</a>
			</li>
		</ul>

		<bottom></bottom>
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
		border: solid 1px #CCCCCC;
		outline: none;
		padding-left: 40px;
		background-color: #fff;
		box-sizing: border-box;
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
	
	li,
	ol,
	ul {
		list-style: none outside none;
	}
	
	* {
		margin: 0;
		padding: 0;
		-ms-box-sizing: border-box;
		box-sizing: border-box;
		border: 0;
	}
	
	ul,
	menu,
	dir {
		display: block;
		list-style-type: disc;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		padding-inline-start: 40px;
	}
</style>