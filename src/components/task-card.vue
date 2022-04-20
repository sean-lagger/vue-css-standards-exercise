<template>
  <div class="c-task-card">
    <div class="c-task-card-header">
      <div class="c-task-card-header__hero"></div>
      <div class="c-task-card-header__labels">
        <div
          v-for="labelColor of labelColors"
          class="c-task-card-header__label"
          :class="{
            'c-task-card-header__label--purple': labelColor == LabelColor.PURPLE,
            'c-task-card-header__label--cyan': labelColor == LabelColor.CYAN,
            'c-task-card-header__label--pink': labelColor == LabelColor.PINK,
          }"
        ></div>
      </div>
    </div>
    <div class="c-task-card-content">
      <div class="c-task-card-content__title">{{ title }}</div>
    </div>
    <div class="c-task-card-footer">
      <div class="c-task-card-footer__tags">
        <div v-if="hasMember" class="c-task-card-footer__tag"><Icon icon="mdi:eye-outline"></Icon></div>
        <div v-if="!!attachmentsCount" class="c-task-card-footer__tag">
          <Icon icon="mdi:attachment"></Icon>
          <span>{{ attachmentsCount }}</span>
        </div>
        <div v-if="!!attachmentsCount" class="c-task-card-footer__tag">
          <Icon icon="mdi:clock-outline"></Icon>
          <span>{{ dateContent }}</span>
        </div>
        <div v-if="!!checklistContent" class="c-task-card-footer__tag">
          <Icon icon="mdi:checkbox-marked-outline"></Icon>
          <span>{{ checklistContent }}</span>
        </div>
      </div>
      <div class="c-task-card-footer__members">
        <!-- Members -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LabelColor } from '@/shared/constants/label-color';

interface IProps {
  title: string;
  labelColors?: LabelColor[];
  hasMember?: boolean;
  checklistContent?: string;
  dateContent?: string;
  attachmentsCount?: string;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.c-task-card-header {
  position: relative;

  &__hero {
    height: 400px;
    width: 100%;
  }

  &__labels {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__label {
    width: 40px;
    height: 5px;
  }
}
</style>
