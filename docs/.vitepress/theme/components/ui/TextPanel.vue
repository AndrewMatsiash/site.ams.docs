<script setup lang="ts">
import { computed } from 'vue'
import {
  CheckCircleIcon,
  ErrorCircleIcon,
  InfoCircleIcon,
  NoteIcon,
  WarningTriangleIcon
} from './icons'

type PanelType = 'info' | 'note' | 'error' | 'success' | 'warning'

const props = withDefaults(
  defineProps<{
    type?: PanelType
    text?: string
  }>(),
  {
    type: 'info',
    text: 'text pannel'
  }
)

const iconComponent = computed(() => {
  switch (props.type) {
    case 'note':
      return NoteIcon
    case 'error':
      return ErrorCircleIcon
    case 'success':
      return CheckCircleIcon
    case 'warning':
      return WarningTriangleIcon
    default:
      return InfoCircleIcon
  }
})

const panelStyleClass = computed(() => ({
  'is-info': props.type === 'info',
  'is-note': props.type === 'note',
  'is-error': props.type === 'error',
  'is-success': props.type === 'success',
  'is-warning': props.type === 'warning'
}))
</script>

<template>
  <div class="text-panel" :class="panelStyleClass">
    <component :is="iconComponent" class="text-panel__icon" />
    <p class="text-panel__text">{{ text }}</p>
  </div>
</template>

<style scoped>
.text-panel {
  width: 405px;
  min-height: 64px;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.text-panel.is-info {
  background: #eaf2fd;
}

.text-panel.is-note {
  background: #f6eefd;
}

.text-panel.is-error {
  background: #fceceb;
}

.text-panel.is-success {
  background: #ebfff6;
}

.text-panel.is-warning {
  background: #fff0dd;
}

.text-panel__icon {
  width: 24px;
  height: 24px;
  display: block;
  flex: 0 0 24px;
}

.text-panel__icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.text-panel__text {
  margin: 0;
  flex: 1;
  font-family: "DIN Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.03px;
  color: #1d1d1f;
}
</style>
