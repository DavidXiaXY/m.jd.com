<template>
	
	<div>
		{{$route.params.id}}
		
		<router-link :to="'/product/'+id+'/goods'">商品</router-link>
		<router-link :to="'/product/'+id+'/detail'">详情</router-link>
		<router-link :to="'/product/'+id+'/comment'">评价</router-link>
		<router-link :to="'/product/'+id+'/recommend'">推荐</router-link>
		<router-view/>
	</div>
	
</template>

<script>
	
	export default{
		data(){
			return{
				id:0,
			};
		},created(){
			this.id = this.$route.params.id;
		}
	}
	
</script>

<style scoped>
	
	a{
		margin: 5px;
		font-size: 20px;
	}
</style>