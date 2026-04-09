<script setup lang="ts">
import { computed } from 'vue'
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

const bodyVisible = computed(() => props.expanded)
</script>

<template>
  <div class="accordion-item" :class="{ 'is-expanded': bodyVisible }">
    <div class="accordion-item__header">
      <p class="accordion-item__title">{{ title }}</p>
      <ChevronDownIcon class="accordion-item__icon" />
    </div>
    <p v-if="bodyVisible" class="accordion-item__description">{{ description }}</p>
  </div>
</template>

<style scoped>
.accordion-item {
  width: 405px;
  border: 1px solid rgba(235, 235, 235, 0.2);
  border-radius: 8px;
  background: rgba(235, 235, 235, 0.2);
  padding: 20px;
}

.accordion-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
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
}

.accordion-item.is-expanded .accordion-item__icon {
  transform: rotate(180deg);
}

.accordion-item__icon :deep(svg) {
  width: 24px;
  height: 24px;
  display: block;
}

.accordion-item__description {
  margin: 20px 0 0;
  font-family: "DIN Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.03px;
  color: #1d1d1f;
}
</style>
