<template>
	<div class="Header">
		<div class="left">
			<div class="collapse" @click="changeCollapse">
				<i class="el-icon-s-fold"></i>
			</div>
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="right">
			<div class="tools">
				<div class="right-hover">
					<i class="el-icon-full-screen"></i>
				</div>
			</div>
			<!-- <div class="dropdown">
        <div class="avatar">
          <el-avatar
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
          ></el-avatar>
        </div>
        <i class="el-icon-caret-bottom"></i>
      </div> -->
			<el-dropdown trigger="click" class="dropdown">
				<div class="dropdown">
					<div class="avatar">
						<el-avatar
							src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80">
						</el-avatar>
					</div>
					<i class="el-icon-caret-bottom"></i>
				</div>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item >首页</el-dropdown-item>
					<el-dropdown-item >项目地址</el-dropdown-item>
					<el-dropdown-item  divided>退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
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
		methods: {
			changeCollapse() {
				this.isCollapse = !this.isCollapse
				bus.$emit('collapse', this.isCollapse)
			}
		}
	}
</script>

<style scoped>
	.Header {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
	}

	.left {
		display: flex;
		align-items: center;
	}

	.right {
		display: flex;
	}

	.right-hover {
		display: flex;
		height: 100%;
		padding: 0 8px;
		justify-content: center;
		align-items: center;
		transition: background-color 0.5s;
		font-size: large;
	}

	.right-hover:hover {
		cursor: pointer;
		background-color: rgb(245, 245, 245);
	}

	.avatar {
		padding: 0 4px;
	}

	.dropdown {
		display: flex;
		align-items: center;
		transition: background-color 0.5s;
	}

	.dropdown:hover {
		cursor: pointer;
	}

	.dropdown:hover .avatar {
		background-color: rgb(245, 245, 245);
	}

	.collapse {
		display: flex;
		align-items: center;
		margin-right: 5px;
		height: 100%;
		padding: 0 10px;
		font-size: x-large;
		transition: background-color 0.5s;
	}

	.collapse:hover {
		cursor: pointer;
		background-color: rgb(245, 245, 245);
	}
</style>
