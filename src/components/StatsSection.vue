
<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <StatCard
      v-for="(stat, i) in stats"
      :key="i"
      :title="stat.title"
      :value="stat.value"
      :icon="stat.icon"
    />
  </div>
</template>

<script setup>
import StatCard from './StatCard.vue'

defineProps({
  stats: { type: Array, required: true },
})
</script>