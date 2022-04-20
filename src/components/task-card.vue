<template>
  <div class="c-task-card">
    <div class="c-task-card-header">
      <div
        v-if="!!headerColor"
        class="c-task-card-header__media"
        :class="{
          'c-task-card-header__media--blue-gradient': headerColor == CardHeaderColor.BLUE_GRADIENT,
          'c-task-card-header__media--pink-gradient': headerColor == CardHeaderColor.PINK_GRADIENT,
        }"
      ></div>
      <div class="c-task-card-header__labels">
        <div
          v-for="labelColor of labelColors"
          class="c-task-card-header__label"
          :class="{
            'c-task-card-header__label--purple': labelColor == CardLabelColor.PURPLE,
            'c-task-card-header__label--cyan': labelColor == CardLabelColor.CYAN,
            'c-task-card-header__label--pink': labelColor == CardLabelColor.PINK,
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
import { CardHeaderColor } from '@/shared/constants/card-header-color';
import { CardLabelColor } from '@/shared/constants/card-label-color';

interface IProps {
  title: string;
  labelColors?: CardLabelColor[];
  headerColor?: CardHeaderColor;
  hasMember?: boolean;
  checklistContent?: string;
  dateContent?: string;
  attachmentsCount?: string;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.c-task-card {
  border-radius: $borderRadius;
  background-color: $white;
  overflow: hidden;
}

.c-task-card-header {
  position: relative;

  &__media {
    height: 100px;
    width: 100%;

    &--pink-gradient {
      background: $pinkGradient45;
    }

    &--blue-gradient {
      background: $blueGradient45;
    }
  }

  &__labels {
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    margin-left: 0.7em;
    margin-top: 0.7em;
  }

  &__label {
    width: 45px;
    height: 10px;
    margin-right: 1em;

    &--pink {
      background: $pink;
    }

    &--purple {
      background: $purple;
    }

    &--cyan {
      background: $cyan;
    }
  }
}

.c-task-card-footer {
  &__tags {
    display: flex;
  }

  &__tag {
    margin-right: 1em;
  }
}
</style>
