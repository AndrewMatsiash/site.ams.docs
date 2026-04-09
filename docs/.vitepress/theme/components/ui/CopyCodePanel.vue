<script setup lang="ts">
import { computed } from 'vue'
import { CopyIcon } from './icons'

const props = withDefaults(
  defineProps<{
    text?: string
    showIcon?: boolean
    hoverStyle?: 'default' | 'icon' | 'panel'
  }>(),
  {
    text: 'there will be a code here',
    showIcon: true,
    hoverStyle: 'default'
  }
)

const panelClass = computed(() => ({
  'is-hover-panel': props.hoverStyle === 'panel',
  'is-hover-icon': props.hoverStyle === 'icon'
}))

const copyToClipboard = async () => {
  if (!props.text || typeof navigator === 'undefined' || !navigator.clipboard) return
  await navigator.clipboard.writeText(props.text)
}
</script>

<template>
  <div class="copy-code-panel" :class="panelClass">
    <p class="copy-code-panel__text">{{ text }}</p>

    <button
      v-if="showIcon"
      class="copy-code-panel__copy"
      type="button"
      aria-label="Copy code"
      @click="copyToClipboard"
    >
      <CopyIcon class="copy-code-panel__copy-icon" />
    </button>
  </div>
</template>

<style scoped>
.copy-code-panel {
  width: 405px;
  min-height: 64px;
  border: 1px solid #878787;
  border-radius: 8px;
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 20px;
}

.copy-code-panel.is-hover-panel {
  border-color: #5f5f5f;
}

.copy-code-panel__text {
  margin: 0;
  flex: 1;
  font-family: "DIN Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.03px;
  color: #1d1d1f;
}

.copy-code-panel__copy {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
}

.copy-code-panel__copy-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.copy-code-panel.is-hover-icon .copy-code-panel__copy,
.copy-code-panel.is-hover-panel .copy-code-panel__copy {
  color: #7a7a7a;
}
</style>
