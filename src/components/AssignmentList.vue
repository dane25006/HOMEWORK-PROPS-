<script setup>
import AssignmentCard from './AssignmentCard.vue'

defineProps({
  assignments: { type: Array, required: true },
})
</script>

<template>
  <div class="rounded-lg border border-slate-200/70 bg-gradient-to-br from-white to-slate-50/50 p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <!-- Header -->
    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
      <div>
        <h3 class="text-xs font-bold uppercase tracking-[0.3em] text-slate-700">Upcoming Assignments</h3>
        <p class="mt-1 text-xs text-slate-500">Stay on top of your goals.</p>
      </div>
      <div class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
        <span class="h-1.5 w-1.5 rounded-full" :class="assignments.some(a => a.status === 'pending') ? 'bg-amber-500' : 'bg-emerald-500'"></span>
        {{ assignments.length }} tasks
      </div>
    </div>

    <!-- Assignment Cards -->
    <div class="space-y-2">
      <AssignmentCard
        v-for="(a, i) in assignments"
        :key="i"
        :title="a.title"
        :due-date="a.dueDate"
        :status="a.status"
      />
    </div>
  </div>
</template>
