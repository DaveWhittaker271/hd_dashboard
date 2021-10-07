<template>
  <div class="h-100 w-100">
    <div class="text-center text-danger v-center my-2 align-middle">
      <b-spinner class="align-middle"></b-spinner>
      <strong>Loading...</strong>
    </div>
  </div>
</template>

<style lang="less" scoped>
  div.v-center {
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
</style>