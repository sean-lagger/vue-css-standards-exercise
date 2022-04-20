<template>
  <div class="c-input">
    <input class="c-input__field" />

    <Icon v-if="rightIcon" :icon="rightIcon" class="c-input__icon" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps({
  rightIcon: String,
});
</script>

<style lang="scss" scoped>
.c-input {
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
}

.c-input__field {
  border-radius: 5px;
  min-height: 20px;
}

.c-input__icon {
  position: absolute;
  right: 2px;
}
</style>