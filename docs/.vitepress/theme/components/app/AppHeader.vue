<script setup lang="ts">
import { BixbitLogoIcon } from '../ui/icons'
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <a class="app-header__brand" href="/">
        <span class="app-header__logo-wrap">
          <BixbitLogoIcon class="app-header__logo" />
        </span>
        <span class="app-header__title">Documentation</span>
      </a>

      <a class="app-header__cta" href="/guide">Get in touch</a>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1px solid #e6e6e6;
}

.app-header__inner {
  max-width: 1440px;
  height: 50px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-header__brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.app-header__logo-wrap {
  width: 88px;
  height: 24px;
  display: inline-flex;
  align-items: center;
}

.app-header__logo {
  display: block;
}

.app-header__logo :deep(svg) {
  width: 80px;
  height: 24px;
  display: block;
}

.app-header__title {
  margin-left: 8px;
  font-family: "Gotham Pro", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.03px;
  color: #101010;
}

.app-header__cta {
  font-family: "DIN Pro", sans-serif;
  color: #ffffff;
  text-decoration: none;
  background: #000000;
  border-radius: 4px;
  padding: 5px 16px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.165px;
}

@media (max-width: 768px) {
  .app-header__inner {
    padding: 0 16px;
  }

  .app-header__title {
    display: none;
  }
}
</style>
