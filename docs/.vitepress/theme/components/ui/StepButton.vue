<script setup lang="ts">
import { computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from './icons'

const props = withDefaults(
  defineProps<{
    variant?: 'next' | 'previous'
  }>(),
  {
    variant: 'next'
  }
)

const isNext = computed(() => props.variant === 'next')
</script>

<template>
  <button class="step-button" :class="{ 'is-next': isNext, 'is-previous': !isNext }" type="button">
    <template v-if="isNext">
      <span class="step-button__label">Next step</span>
      <ChevronRightIcon class="step-button__icon" />
    </template>
    <template v-else>
      <ChevronLeftIcon class="step-button__icon" />
      <span class="step-button__label">Previous step</span>
    </template>
  </button>
</template>

<style scoped>
.step-button {
  border-radius: 8px;
  border: 1px solid #ebebeb;
  background: #ffffff;
  padding: 12px 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #1d1d1f;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease;
}

.step-button.is-next {
  border-color: #1d1d1f;
  background: #1d1d1f;
  color: #ffffff;
}

.step-button.is-next:hover {
  border-color: #2a2a2d;
  background: #2a2a2d;
}

.step-button.is-previous:hover {
  border-color: #cfcfcf;
  background: #f7f7f7;
}

.step-button__label {
  font-family: "DIN Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.03px;
}

.step-button__icon :deep(svg) {
  width: 24px;
  height: 24px;
  display: block;
}
</style>
