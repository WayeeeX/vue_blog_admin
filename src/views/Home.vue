<template>
  <div class="main">
    <div class="intro">
        <h2>脚踏实地,笃志前行</h2>
        <span style="margin: 20px 0;">欢迎来到个人博客后台管理系统</span>
		<el-button type='primary' size='medium'>写文章</el-button>
    </div>
    <div class="datas"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.intro{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 300px;
	margin: 20px;
	background-color: gainsboro;
}
h2{
	font-size: 45px;
}
</style>

