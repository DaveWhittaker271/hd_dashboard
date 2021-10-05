<template>
  <b-nav vertical>
    <b-nav-item active>
      <b-icon icon="camera" font-scale="1" />
    </b-nav-item>
    <b-nav-item>
      <b-icon icon="asterisk" font-scale="1" />
    </b-nav-item>
    <b-nav-item>
      <b-icon icon="award-fill" font-scale="1" />
    </b-nav-item>
    <b-nav-item disabled>
      <b-icon icon="bag-check" font-scale="1" />
    </b-nav-item>
    <b-nav-item>
      <b-icon icon="bar-chart-fill" font-scale="1" />
    </b-nav-item>
    <b-nav-item>
      <b-icon icon="gear-fill" font-scale="1" />
    </b-nav-item>
  </b-nav>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    index: Number,
    text: String,
    checked: Boolean,
  },
}
</script>
<style lang="less" scoped>
  ul {
    background: @primaryLight2;

    li {
      display: block;

      a {
        width: @navBarIconSize;
        height: @navBarIconSize;

        border-radius: 0;
        padding: 0;

        display: flex;
        align-items: center;

        color: @navbarLinkColor;

        &.active, &:active {
          color: @navbarLinkColor;
          background-color: @primaryLight1;
        }

        &:hover {
          color: @navbarLinkColorHover;
          background-color: @primary;
        }

        svg {
          margin: auto;
        }
      }
    }
  }
</style>