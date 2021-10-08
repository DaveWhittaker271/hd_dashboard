<template>
  <div>
    <b-icon icon="gear-fill" v-b-toggle="'collapse-filter' + uuid" />
    <b-collapse :id="'collapse-filter' + uuid">
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

import Vue from 'vue';

Vue.use((Vue) => {
  // Assign a unique id to each component
  let uuid = 0;
  Vue.mixin({
    beforeCreate: function() {
      this.uuid = uuid.toString();
      uuid += 1;
    },
  });

  // Generate a component-scoped id
  Vue.prototype.$id = function(id) {
    return "uid-" + this.uuid + "-" + id;
  };
});


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