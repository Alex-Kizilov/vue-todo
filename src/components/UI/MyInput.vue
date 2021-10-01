<template>
  <input
    class="input"
    type="text"
    placeholder="Название"
    :value="modelValue"
    @change="updateValue"
  >
</template>

<script>
  export default {
    name: "my-input",
    props: {
      modelValue: String
    },
    setup(props, context) {
      const updateValue = (event) => {
        context.emit('update:modelValue', event.target.value)
      }

      return {
        updateValue
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/scss/_variables";
  .input {
    color: $text-color-on-focus;
    height: 27px;
    border-radius: 4px;
    font-size: 18px;
    text-align: center;
    padding: 10px 0;
    border: 1px solid $border-color-on-focus;
    &:focus {
      color: $text-color-on-focus;
      border: 1px solid $border-color-on-focus;
    }
    &::placeholder {
      color: $text-color;
    }
  }
</style>