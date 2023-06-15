<template>
  <button
    class="primary-text-btn btn-container"
    min-width="92"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function as () => void,
    },
  },
};
</script>
