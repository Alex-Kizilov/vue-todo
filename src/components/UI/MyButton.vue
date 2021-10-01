<template>
  <button class="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "my-button",

  }
</script>

<style scoped lang="scss">
  @import "@/scss/_variables";
  .btn {
    max-width: 100%;
    min-height: 48px;
    font-size: 18px;
    text-align: center;
    padding: 10px;
    border-radius: 4px;
    background-color: inherit;
    border: 1px solid $border-color;
    transition: .3s;
    &:hover {
      border: 1px solid $border-color-on-focus;
    }
  }

</style>