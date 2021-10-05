<template>
  <div class="d-flex flex-column flex-shrink-0 sidebar" style="width: 4.5rem;">
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        <a href="#" class="nav-link active py-3" aria-current="page" title="" data-bs-toggle="tooltip"
           data-bs-placement="right" data-bs-original-title="Home">
          <svg class="bi" width="24" height="24" role="img" aria-label="Home">
            <use xlink:href="#home"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right"
           data-bs-original-title="Dashboard">
          <svg class="bi" width="24" height="24" role="img" aria-label="Dashboard">
            <use xlink:href="#speedometer2"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right"
           data-bs-original-title="Orders">
          <svg class="bi" width="24" height="24" role="img" aria-label="Orders">
            <use xlink:href="#table"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right"
           data-bs-original-title="Products">
          <svg class="bi" width="24" height="24" role="img" aria-label="Products">
            <use xlink:href="#grid"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right"
           data-bs-original-title="Customers">
          <svg class="bi" width="24" height="24" role="img" aria-label="Customers">
            <use xlink:href="#people-circle"></use>
          </svg>
        </a>
      </li>
    </ul>
    <div class="dropdown border-top">
      <a href="#"
         class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
         id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle">
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    index: Number,
    text: String,
    checked: Boolean,
  },
  data: () => {
    return {
      isChecked: false
    }
  },
  watch: {
    isChecked(value) {
      this.$emit('updateTodo', {value, index: this.index})
    }
  },
  mounted() {
    this.isChecked = this.checked
  },
  updated() {
    this.isChecked = this.checked
  }
}
</script>
<style lang="less">
  div.sidebar {
    background: @primaryLight2;

    .nav-pills .nav-link {
      border-radius: 0;

      &.active {
        background-color: @primaryLight1;
      }

      &:hover {
        background-color: @primary;
      }
    }
  }
</style>