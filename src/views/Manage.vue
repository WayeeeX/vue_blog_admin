<template>
  <!-- <el-container class="main">
    <el-aside width="200px" class="left"><Aside></Aside></el-aside>
    <el-container class="right">
      <el-header><Header></Header></el-header>
      <el-main></el-main>
    </el-container>
  </el-container> -->
  <div class="container">
    <div class="left" width='auto'>
      <Aside></Aside>
    </div>
    <div class="right">
      <Header></Header>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Aside from '../components/Aside.vue';
import Header from '../components/Header.vue';
export default {
  data () {
    return {}
  },
  components: {
    Aside,
    Header
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  margin: 0;
}

.left {

  
}
.right{
	flex:1
}

</style>