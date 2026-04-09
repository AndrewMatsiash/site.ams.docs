<script setup lang="ts">
import { computed } from 'vue'
import { ThumbsDownIcon, ThumbsUpIcon } from './icons'

const props = withDefaults(
  defineProps<{
    kind?: 'like' | 'dislike'
    pressed?: boolean
  }>(),
  {
    kind: 'like',
    pressed: false
  }
)

const isLike = computed(() => props.kind === 'like')
const text = computed(() => (isLike.value ? 'Very useful' : "Didn't help"))
</script>

<template>
  <button class="feedback-button" :class="{ 'is-like': isLike, 'is-dislike': !isLike, 'is-pressed': pressed }" type="button">
    <span class="feedback-button__label">{{ text }}</span>
    <ThumbsUpIcon v-if="isLike" class="feedback-button__icon" />
    <ThumbsDownIcon v-else class="feedback-button__icon" />
  </button>
</template>

<style scoped>
.feedback-button {
  border-radius: 8px;
  border: 1px solid #ebebeb;
  background: #ffffff;
  padding: 12px 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #1d1d1f;
}

.feedback-button__label {
  font-family: "DIN Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.03px;
}

.feedback-button.is-pressed.is-like {
  color: #30c035;
}

.feedback-button.is-pressed.is-dislike {
  color: #e85950;
}

.feedback-button.is-pressed .feedback-button__label {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -0.198px;
}

.feedback-button__icon :deep(svg) {
  width: 24px;
  height: 24px;
  display: block;
}
</style>
