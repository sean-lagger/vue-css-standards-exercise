<template>
  <button class="c-button">
    <Icon v-if="leftIcon" :icon="leftIcon" class="c-button__icon" />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps({
  leftIcon: String,
});
</script>

<style lang="scss" scoped>
.c-button {
  display: flex;
  flex-direction: row;
  background: #77777747;
  border: 0px;
}

.c-button__icon {
  width: 47px;
  height: 47px;
}
</style>