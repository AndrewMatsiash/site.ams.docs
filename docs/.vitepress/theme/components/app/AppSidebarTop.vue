<script setup lang="ts">
import { ChevronLeftIcon } from '../ui/icons'
</script>

<template>
  <div class="app-sidebar-top">
    <a class="app-sidebar-top__back" href="/">
      <ChevronLeftIcon class="app-sidebar-top__back-icon" />
      Go to BiXBiT
    </a>
  </div>
</template>

<style scoped>
.app-sidebar-top {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
}

.app-sidebar-top__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #101010;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: -0.03px;
  padding: 10px 0;
}

.app-sidebar-top__back-icon {
  width: 24px;
  height: 24px;
  display: block;
}

.app-sidebar-top__back-icon :deep(svg) {
  width: 24px;
  height: 24px;
}
</style>
