<template>
	<div>
		<el-menu default-active="1-4-1" class="el-menu-vertical" :collapse="isCollapse" background-color="#252933"
		router
			text-color="#fff" active-text-color="#1E80FF">
			<el-menu-item index="/">
				<i class="el-icon-s-home"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span slot="title">文章</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="2-1">写文章</el-menu-item>
					<el-menu-item index="2-2">文章列表</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item index="3">
				<i class="el-icon-s-comment"></i>
				<span slot="title">评论</span>
			</el-menu-item>
			<el-menu-item index="/user">
				<i class="el-icon-user-solid"></i>
				<span slot="title">用户</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	import bus from '../bus.js'
	export default {
		data() {
			return {
				isCollapse: false
			}
		},
		created() {
			bus.$on('collapse', data => {
				console.log('data' + data);
				this.isCollapse = data
			})
		}
	}
</script>

<style scoped>
	.el-menu-vertical:not(.el-menu--collapse) {
		width: 200px;
		height: 100vh;
	}
</style>
