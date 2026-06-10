<script setup>
import ActivityItem from './ActivityItem.vue'

defineProps({
  activities: { type: Array, required: true },
})
</script>

<template>
  <div class="rounded-lg border border-slate-200/70 bg-gradient-to-br from-white to-slate-50/50 p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <!-- Header -->
    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
      <div>
        <h3 class="text-xs font-bold uppercase tracking-[0.3em] text-slate-700">Recent Activities</h3>
        <p class="mt-1 text-xs text-slate-500">Activity feed for your dashboard.</p>
      </div>
      <span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">{{ activities.length }} updates</span>
    </div>

    <!-- Timeline -->
    <div class="relative pl-6">
      <div class="absolute left-2 top-6 bottom-6 w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent" aria-hidden="true" />
      <div class="space-y-2.5">
        <ActivityItem
          v-for="(a, i) in activities"
          :key="i"
          :activity-name="a.activityName"
          :date="a.date"
          :type="a.type"
        />
      </div>
    </div>
  </div>
</template>
