<template>
	<el-card>
		<div class="header">
			<div class="oparate">
				<el-input placeholder="请输入搜索内容"></el-input>
				<el-button icon="el-icon-search"></el-button>
				<el-button type="primary">添加用户</el-button>
			</div>
			<div style="flex:1"></div>
		</div>
		<div class="table">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="id" label="id" type="index" width="50">
				</el-table-column>
				<el-table-column prop="avatar" label="头像" width="80">
					<template slot-scope="scope">

						<el-avatar :src="scope.row.avatar">
						</el-avatar>
					</template>
				</el-table-column>
				<el-table-column prop="nickname" label="昵称" width="120">
				</el-table-column>
				<el-table-column prop="create_date" label="注册时间" width="200px">
				</el-table-column>
				<el-table-column prop="last_login" label="上次登录时间" width="200px">
				</el-table-column>
				<el-table-column prop="permission" label="角色">
				</el-table-column>
				<el-table-column prop="status" label="状态">
					<template slot-scope="scope">
						<el-switch v-model="scope.row.status" active-color="#13ce66">
						</el-switch>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="pagination">
			<el-pagination
			      @current-change="handleCurrentChange"
			      :current-page.sync="page.currentPage"
			      :page-size="page.pagesize"
				  background
			      layout="total, prev, pager, next"
			      :total="page.total">
			    </el-pagination>
		</div>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [],
				page:{
					total:100,
					pagesize:10,
					currentPage:1
				}
			}
		},
		created() {
			this.getUser()
		},
		methods:{
			getUser(){
				this.$api.getAllUser(this.page.currentPage).then(res => {
					this.page.total = res.data.length
					for (let i = 0; i < res.data.length; i++) {
						if (res.data[i].status) {
							res.data[i].status = true
						} else {
							res.data[i].status = false
						}
						res.data[i].create_date = this.$fmtTime(res.data[i].create_date)
						res.data[i].last_login = this.$fmtTime(res.data[i].last_login)
						if (res.data[i].permission == 2) {
							res.data[i].permission = '超级管理员'
						} else if (res.data[i].permission == 1) {
							res.data[i].permission = '普通用户'
						} else {
							res.data[i].permission = '游客'
						}
					}
					this.tableData = res.data
				}).catch(err => {
					this.$message({
						type: 'error',
						message: err,
						showClose: true
					})
				})
			},
			handleCurrentChange(pageNum){
				this.page.currentPage=pageNum
				this.getUser()
			}
		}
	}
</script>

<style scoped>
	.header {
		display: flex;
	}

	.oparate {
		display: flex;
		flex: 1;
	}

	.oparate .el-input {
		width: 400px;
		margin-right: 5px;
	}
</style>
