<template>
	
	<div>
		
			
		<!--字符串   -->
		<button @click="$router.push('/')">首页</button>
		<!-- 对象-->
		<button @click="$router.push({ path: '/category' })">分类</button>
		<!--命名的路由-->
		<!--
			
			参数传递：params（不会显示到路径中）  query（会显示到路径中）
			
		-->
		<button @click="$router.push({ name: 'search', params: { userId: 123 }, query: { plan: 'private' }})">搜索-name</button>
		<button @click="$router.push({ path: '/search', params: { userId: 123 }, query: { plan: 'private' }})">搜索-path</button>
		<button>购物车</button>
		<button>个人中心</button>
		
		
		<!--$router 同样的规则也适用于 router-link 组件的 to 属性。-->
		<router-link to="/">首页</router-link>
		<router-link :to="{ path: '/category' }">分类</router-link>
		<router-link :to="{ name: 'search', params: { userId: 123 }, query: { plan: 'private' }}">搜索</router-link>
		
	</div>
	
</template>

<script>
	export default{
		
	}
</script>

<style scoped="">
	button{
		margin: 10px;
		font-size: 20px;
	}
</style>