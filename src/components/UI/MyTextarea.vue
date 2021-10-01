<template>
  <textarea
    class="textarea"
    placeholder="Описание"
    :value="modelValue"
    @change="updateValue"
  ></textarea>
</template>

<script>
  export default {
    name: "my-textarea",
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
  .textarea {
    border-radius: 4px;
    padding: 10px;
    max-width: 100%;
    font-size: 18px;
    border: 1px solid $border-color;
    &:focus {
      border: 1px solid $border-color-on-focus;
    }
  }
</style>