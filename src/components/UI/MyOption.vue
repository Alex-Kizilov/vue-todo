<template>
  <option class="select__option"
  >
    {{label}}
  </option>
</template>

<script>
  export default {
    name: "MyOption",
    props: {
      modelValue: String,
      label: String,
      color: String,
      select: Object
    },
  }
</script>

<style scoped>
  .red {
    background-color: indianred;
  }

  .yellow {
    background-color: yellow;
  }

  .blue {
    background-color: cornflowerblue;
  }
</style>