<template>
  <div>
    <b-icon icon="gear-fill" v-b-toggle.collapse-settings />
    <b-collapse id="collapse-settings">
      <b-card></b-card>
    </b-collapse>
  </div>
</template>
<script>
export default {
  name: 'CardFilterArea',
  components: {},
  props: [],
}
</script>
<style lang="less" scoped>
  svg {
    float: right;
    position: Absolute;
    top: 10px;
    right: 10px;
    color: @textMain;

    &:hover {
      color: @textMain;
    }
  }
</style>