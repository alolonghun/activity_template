<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './styles/reset.css';
@import './styles/_reset.less';

body {
  font-family: 'Microsoft Yahei UI Light';
  font-size: .28rem;
  color: #222;
}
</style>
