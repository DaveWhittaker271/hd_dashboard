<template>
  <b-card class="mb-2 col-md-4" bg-variant="light" :header="title" >
    <slot />
  </b-card>
</template>
<script>
export default {
  name: 'Card',
  props: [
    'title',
  ],
}
</script>
<style lang="less">
.card-header {
  font-weight: bold;
}
.card-body {
  padding: 0;

  th {
    font-weight: normal;
  }
}
</style>