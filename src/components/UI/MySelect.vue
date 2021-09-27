<template>
  <select
    class="select"
    required
    :value="modelValue"
    @change="updateValue"
  >
    <slot></slot>
  </select>
</template>

<script>
  import {useStore} from "vuex";

  export default {
    name: "my-select",
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