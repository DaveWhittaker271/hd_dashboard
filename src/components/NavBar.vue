<template>
  <b-nav align="center">
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item>Link</b-nav-item>
    <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</template>

<style lang="less" scoped>
ul.nav {
  background: @primary;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, @primary, @primaryLight1);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, @primary, @primaryLight1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  a {
    color: white;
  }
}
</style>