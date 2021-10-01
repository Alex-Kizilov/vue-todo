<template>
  <div class="select">
    <select
      class="select__body"
      :value="modelValue"
      @change="updateValue"
      :class="color"
    >
      <option value="" disabled selected style='display:none;'>Выберите из списка</option>
      <slot></slot>
    </select>
  </div>
</template>

<script>

  export default {
    name: "my-select",
    props: {
      modelValue: String,
      color: String
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
  .select__body {
    position: relative;
    width: 200px;
    height: 48px;
    border-radius: 4px;
    border: 1px solid $border-color;
    font-size: 18px;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      border: 1px solid $border-color-on-focus;
    }
    &:after {
    }
  }
  .red {
    background-color: indianred;
  }

  .blue {
    background-color: cornflowerblue;

    .yellow {
      background-color: yellow;
    }
  }
</style>