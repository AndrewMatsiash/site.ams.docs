<script setup lang="ts">
import { DownloadIcon } from './icons'

withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'instruction file.pdf'
  }
)
</script>

<template>
  <button class="download-file-button" type="button">
    <span class="download-file-button__text">{{ label }}</span>
    <DownloadIcon class="download-file-button__icon" />
  </button>
</template>

<style scoped>
.download-file-button {
  width: 405px;
  min-height: 64px;
  border: 1px solid #878787;
  border-radius: 8px;
  background: #ffffff;
  padding: 14px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: #1d1d1f;
  transition: color 180ms ease;
}

.download-file-button:hover {
  color: #878787;
}

.download-file-button__text {
  font-family: "DIN Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.03px;
}

.download-file-button__icon :deep(svg) {
  width: 24px;
  height: 24px;
  display: block;
}
</style>
