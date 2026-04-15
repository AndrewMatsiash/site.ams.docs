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
  color: var(--vp-c-text-1);
  transition: color 180ms ease, filter 180ms ease;
  cursor: pointer;
}

.back-button-desktop:hover,
.back-button-desktop:focus-visible {
  color: var(--vp-c-brand-1);
}

.back-button-desktop:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.back-button-desktop:active {
  color: var(--vp-c-brand-1);
  filter: brightness(1.12);
}

/* Тёмная тема: чуть мягче «нажатие», чтобы не выбеливать */
.dark .back-button-desktop:active {
  filter: brightness(1.06);
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
