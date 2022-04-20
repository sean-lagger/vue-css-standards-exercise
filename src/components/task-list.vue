<template>
  <div class="c-task-list">
    <div class="c-task-list-header">
      <div class="c-task-list-header__title">
        {{ title }}
      </div>
    </div>
    <div class="c-task-list-cards">
      <!-- Cards Here -->
      <slot></slot>
    </div>
    <div class="c-task-list-footer">
      <!-- Button Here -->
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.c-task-list-header {
  &__title {
    font-weight: bolder;
  }
}
</style>
