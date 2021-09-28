<template>
  <textarea
    class="todo-form__textarea textarea"
    required
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

<style scoped>

</style>