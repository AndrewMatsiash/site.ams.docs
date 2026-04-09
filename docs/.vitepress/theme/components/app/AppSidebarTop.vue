<script setup lang="ts">
import { ChevronLeftIcon, SearchIcon } from '../ui/icons'
</script>

<template>
  <div class="app-sidebar-top">
    <a class="app-sidebar-top__back" href="/">
      <ChevronLeftIcon class="app-sidebar-top__back-icon" />
      Go to BiXBiT
    </a>

    <div class="app-sidebar-top__search">
      <SearchIcon class="app-sidebar-top__search-icon" />
      <input type="text" placeholder="Search" aria-label="Search" />
    </div>
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

.app-sidebar-top__search {
  height: 44px;
  border: 1px solid #878787;
  border-radius: 8px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.app-sidebar-top__search-icon {
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
}

.app-sidebar-top__back-icon :deep(svg),
.app-sidebar-top__search-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.app-sidebar-top__search input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: #878787;
  font-family: "DIN Pro", sans-serif;
  font-size: 16px;
  line-height: 1.35;
  letter-spacing: -0.03px;
}
</style>
