<template>
      <input
        type="checkbox"
        id="checkbox"
        class="checkbox"
        :checked="modelValue"
        :value="modelValue"
        :input="updateValue"
      >
</template>

<script>
  export default {
    name: "MyCheckbox",
    props: {
      modelValue: Boolean
    },
    setup(props, context) {
      const updateValue = (event) => {
        console.log(event.target.value)
        context.emit('update:modelValue', event.target.value)
      }

      return {
        updateValue
      }
    }
  }
</script>
<style scoped lang="scss">
  .checkbox {
    transform: scale(1.5);
  }
</style>