<template>
  <b-card class="mb-2 w-100 h-100" bg-variant="light" :header="title" header-html="">
    <CardFilterArea/>
    <slot/>
  </b-card>
</template>
<script>
import CardFilterArea from './CardFilterArea.vue'

export default {
  name: 'Card',
  components: {CardFilterArea},
  props: [
    'title',
  ],
}
</script>
<style lang="less" scoped>
.card {
  display: inline-flex;

  .card-header {
    font-weight: bold;
    font-size: @fontSizeBigger;
  }

  .card-body {
    padding: 0;

    th {
      font-weight: normal;
    }
  }
}
</style>