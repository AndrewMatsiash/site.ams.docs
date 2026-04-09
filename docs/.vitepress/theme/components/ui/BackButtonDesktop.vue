<script setup lang="ts">
import { ChevronLeftIcon } from './icons'

withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'Go to BiXBiT'
  }
)
</script>

<template>
  <button class="back-button-desktop" type="button">
    <span class="back-button-desktop__icon">
      <slot name="icon">
        <ChevronLeftIcon />
      </slot>
    </span>
    <span class="back-button-desktop__label">{{ label }}</span>
  </button>
</template>

<style scoped>
.back-button-desktop {
  width: 305px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  padding: 10px 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #101010;
  transition: color 180ms ease;
}

.back-button-desktop:hover {
  color: #e947a0;
}

.back-button-desktop:active {
  color: #d9017a;
}

.back-button-desktop__label {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: -0.03px;
}

.back-button-desktop__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.back-button-desktop__icon :deep(svg) {
  width: 24px;
  height: 24px;
  display: block;
}
</style>
