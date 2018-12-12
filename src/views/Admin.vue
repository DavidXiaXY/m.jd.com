<template>

	<div class="admin">

		<header>
			<router-view name="header"></router-view>
		</header>
		<div class="main">
			<aside>
				<router-view name="aside"></router-view>
			</aside>
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
	</div>

</template>

<script>
</script>

<style>
	html,
	body,
	#app,
	.admin .main {
		height: 100%;
	}
	
	.admin {
		width: 100%;
		height: 100%;
	}
	
	.admin .main {
		overflow: hidden;
		box-sizing: border-box;
	}
	
	.admin header {
		height: 60px;
		width: 100%;
		z-index: 9999;
		position: fixed;
		top: 0px;
		left: 0px;
		background-color: #fff;
		border-bottom: solid 1px #CCCCCC;
	}
	
	.admin aside {
		width: 260px;
		height: 100%;
		position: fixed;
		z-index: 9999;
		top: 60px;
		left: 0px;
		border-right: solid 1px #CCCCCC;
		box-sizing: border-box;
	}
	
	.admin .content {
		width: 100%;
		height: 100%;
		margin-top: 60px;
		padding-left: 260px;
		overflow-y: auto;
		overflow-x: auto;
	}
</style>