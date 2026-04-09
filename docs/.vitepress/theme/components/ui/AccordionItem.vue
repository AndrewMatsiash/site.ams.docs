<script setup lang="ts">
import { ChevronDownIcon } from './icons'

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    expanded?: boolean
  }>(),
  {
    title: 'Title',
    description:
      'Before powering on, make sure that your electrical supply, wiring, and circuit breakers are rated for the device’s power consumption.',
    expanded: false
  }
)

</script>

<template>
  <details class="accordion-item" :open="expanded">
    <summary class="accordion-item__header">
      <span class="accordion-item__title">{{ title }}</span>
      <ChevronDownIcon class="accordion-item__icon" />
    </summary>
    <p class="accordion-item__description">{{ description }}</p>
  </details>
</template>

<style scoped>
.accordion-item {
  width: 405px;
  border: 1px solid rgba(235, 235, 235, 0.2);
  border-radius: 8px;
  background: rgba(235, 235, 235, 0.2);
  padding: 20px;
  height: 64px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}

.accordion-item[open] {
  height: auto;
  flex-direction: column;
  align-items: flex-end;
}

.accordion-item__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
}

.accordion-item__header::-webkit-details-marker {
  display: none;
}

.accordion-item__title {
  margin: 0;
  font-family: "DIN Pro", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.03px;
  color: #1d1d1f;
}

.accordion-item__icon {
  color: #1d1d1f;
  transform: rotate(-90deg);
  transition: transform 180ms ease;
  flex: 0 0 24px;
  margin-left: auto;
}

.accordion-item[open] .accordion-item__icon {
  transform: rotate(180deg);
}

.accordion-item__icon :deep(svg) {
  width: 24px;
  height: 24px;
  display: block;
}

.accordion-item__description {
  margin: 0;
  width: 100%;
  font-family: "DIN Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.03px;
  color: #1d1d1f;
}
</style>
