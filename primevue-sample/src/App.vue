<script setup lang="ts">
import Button from 'primevue/button';
import { infoToast } from './util/toastService';
</script>

<template>
  <div>
    <Button label="Click Me" @click="infoToast('Button Clicked')" />
  </div>
</template>
