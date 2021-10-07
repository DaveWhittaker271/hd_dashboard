<template>
  <div>
    <textarea class="w-100 h-100 no-border" v-model="myHTML"></textarea>
  </div>
</template>
<script>
import wysiwyg from "vue-wysiwyg";

export default {
  name      : 'NotesCardData',
  props     : [],
  components: {wysiwyg},
  data()
  {
    return {myHTML: 'test'}
  }
}
</script>
<style lang="less" scoped>
.no-border {
  border: 0;
}
</style>