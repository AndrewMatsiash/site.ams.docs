---
title: UI Kit
---

<script setup lang="ts">
import AccordionItem from './.vitepress/theme/components/ui/AccordionItem.vue'
import BackButtonDesktop from './.vitepress/theme/components/ui/BackButtonDesktop.vue'
import BackButtonMobile from './.vitepress/theme/components/ui/BackButtonMobile.vue'
import DownloadFileButton from './.vitepress/theme/components/ui/DownloadFileButton.vue'
import FeedbackButton from './.vitepress/theme/components/ui/FeedbackButton.vue'
import StepButton from './.vitepress/theme/components/ui/StepButton.vue'
</script>

# UI Kit

Компоненты из Figma, реализованные через MCP.

## DownloadFileButton

<div style="display: grid; gap: 16px;">
  <DownloadFileButton />
</div>

## StepButton

<div style="display: grid; gap: 16px;">
  <StepButton variant="next" />
  <StepButton variant="previous" />
</div>

## FeedbackButton

<div style="display: grid; grid-template-columns: repeat(2, max-content); gap: 16px 32px;">
  <FeedbackButton kind="like" />
  <FeedbackButton kind="dislike" />
</div>

## BackButtonDesktop

<div style="display: grid; gap: 16px;">
  <BackButtonDesktop />
</div>

## BackButtonMobile

<div style="display: grid; gap: 16px;">
  <BackButtonMobile />
</div>

## AccordionItem

<div style="display: grid; gap: 16px;">
  <AccordionItem :expanded="false" />
  <AccordionItem :expanded="true" />
</div>
