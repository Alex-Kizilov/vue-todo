<template>
  <input
    class="todo-form__input input"
    required=""
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

<style scoped>

</style>