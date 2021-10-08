<template>
  <b-nav vertical>
    <b-nav-item active>
      <b-icon icon="camera" />
    </b-nav-item>
    <b-nav-item>
      <b-icon icon="asterisk" />
    </b-nav-item>
    <b-nav-item>
      <b-icon icon="award-fill"  />
    </b-nav-item>
    <b-nav-item disabled>
      <b-icon icon="bag-check" />
    </b-nav-item>
    <b-nav-item>
      <b-icon icon="bar-chart-fill" />
    </b-nav-item>
    <b-nav-item class="bottom">
      <b-icon icon="gear-fill" />
    </b-nav-item>
    <b-nav-item class="bottom">
      <b-icon icon="gear-fill" />
    </b-nav-item>
  </b-nav>
</template>
<script>

export default {
  name: 'TodoItem',
}
</script>
<style lang="less" scoped>
  .bottom {
    position:absolute;
    bottom: 0px;
  }
  ul {
    background: @primary;

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
          background-color: @primaryLight2;
        }

        svg {
          margin: auto;
        }
      }
    }
  }
</style>