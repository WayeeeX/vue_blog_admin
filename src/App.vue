<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  width: 100%;
  background-color: #ecf0f1;
}
</style>