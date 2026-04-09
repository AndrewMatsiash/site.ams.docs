<script setup lang="ts">
import BackButtonDesktop from './BackButtonDesktop.vue'
import { HomeOutlineIcon } from './icons'
</script>

<template>
  <BackButtonDesktop label="Go to BiXBiT">
    <template #icon>
      <HomeOutlineIcon />
    </template>
  </BackButtonDesktop>
</template>
