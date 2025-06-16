<template>
  <button :class="buttonClass">
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: 'YButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: value => ['default', 'primary', 'info', 'success', 'warning', 'danger'].includes(value)
    }
  },
  computed: {
    buttonClass() {
      return ['y-button', `y-button--${this.type}`];
    }
  }
}
</script>
<style scoped lang="scss">
$default: #333;
$primary: #42b983;
$info: #2080f0;
$success: #2ecc71;
$warning: #f39c12;
$danger: #e74c3c;

@mixin button-style($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;

  &:hover {
    background-color: lighten($bg-color, 10%);
  }

  &:active {
    background-color: darken($bg-color, 10%);
  }

  &:disabled {
    background-color: lighten($bg-color, 20%);
    cursor: not-allowed;
  }
}

//   按钮
.y-button {
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &--default {
    @include button-style(#ccc, $default);
  }

  &--primary {
    @include button-style($primary, white);
  }

  &--info {
    @include button-style($info, white);
  }

  &--success {
    @include button-style($success, white);
  }

  &--warning {
    @include button-style($warning, white);
  }

  &--danger {
    @include button-style($danger, white);
  }
}
</style>