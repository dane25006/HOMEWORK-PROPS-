<script setup>
defineProps({
  title:   { type: String, required: true },
  dueDate: { type: String, required: true },
  status:  {
    type: String,
    required: true,
    validator: (v) => ['pending', 'completed'].includes(v),
  },
})

const statusConfig = {
  completed: {
    bg: 'bg-emerald-50 border-emerald-200/50 hover:bg-emerald-100',
    badge: 'bg-emerald-100 text-emerald-700',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />',
  },
  pending: {
    bg: 'bg-amber-50 border-amber-200/50 hover:bg-amber-100',
    badge: 'bg-amber-100 text-amber-700',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />',
  },
}
</script>

<template>
  <div :class="['rounded-lg border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-pointer group', statusConfig[status].bg]">
    <div class="flex items-center justify-between gap-3">
      <!-- Left Content -->
      <div class="min-w-0 flex-1">
        <!-- Status Icon + Title -->
        <div class="flex items-start gap-2">
          <div :class="['flex-shrink-0 h-4 w-4 rounded-lg flex items-center justify-center transition-all duration-300', statusConfig[status].badge]">
            <svg class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" v-html="statusConfig[status].icon" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-xs font-bold text-slate-900 truncate group-hover:text-slate-700">{{ title }}</p>
            <p class="text-xs text-slate-500 mt-0.5 font-medium">{{ dueDate }}</p>
          </div>
        </div>
      </div>

      <!-- Status Badge -->
      <span :class="[
        'rounded-full px-2 py-0.5 text-xs font-bold capitalize flex-shrink-0 transition-all duration-300 group-hover:scale-105 origin-right',
        status === 'completed'
          ? 'bg-emerald-200/80 text-emerald-700'
          : 'bg-amber-200/80 text-amber-700'
      ]">
        <span v-if="status === 'completed'">✓ Done</span>
        <span v-else>Todo</span>
      </span>
    </div>
  </div>
</template>
