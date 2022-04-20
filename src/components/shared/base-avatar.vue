<template>
  <div class="c-avatar">
    <Icon icon="clarity:avatar-line" class="c-avatar__icon" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps({
  rightIcon: String,
});
</script>

<style lang="scss" scoped>
.c-avatar {
  width: 52px;
  height: 52px;
  background: antiquewhite;
  border-radius: 50%;
  border: none;
}

.c-avatar__icon {
  height: 75%;
  width: 100%;
  margin: 5px auto;
}
</style>