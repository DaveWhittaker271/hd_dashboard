<template>
  <div>
    <textarea class="w-100 h-100 no-border" @input="saveText">{{notes}}</textarea>
  </div>
</template>
<script>

export default {
  name: 'NotesCardData',
  props: [],
  components: {},
  data() {
    return {
      notes: ''
    }
  },
  methods: {
    saveText: function (e) {
      this.notes = e.target.value;
    }
  },
  mounted() {
    const notes = localStorage.getItem('notes');
    if (notes === null || notes === undefined) {
      return;
    }
    this.notes = notes;
  },
  watch: {
    notes(newNotes) {
      localStorage.setItem('notes', newNotes);
    }
  }
}
</script>
<style lang="less" scoped>
.no-border {
  border: 0;
}
</style>