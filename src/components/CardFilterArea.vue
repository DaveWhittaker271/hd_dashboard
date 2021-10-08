<template>
  <div>
    <b-icon icon="gear-fill" v-b-toggle.collapse-filter{{uuid}} />
    <b-collapse id="collapse-filter{{uuid}}">
      <b-card></b-card>
    </b-collapse>
  </div>
</template>
<script>
let uuid = 0;
export default {
  name: 'CardFilterArea',
  components: {},
  props: [],
  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  },
};
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