<script setup>
defineProps({
  activityName: { type: String, required: true },
  date:         { type: String, required: true },
  type:         {
    type: String,
    required: true,
    validator: (v) => ['submit', 'quiz', 'unlock'].includes(v),
  },
})

const dotColor = {
  submit: 'bg-emerald-500 shadow-lg shadow-emerald-500/50',
  quiz:   'bg-blue-500 shadow-lg shadow-blue-500/50',
  unlock: 'bg-amber-500 shadow-lg shadow-amber-500/50',
}

const bgColor = {
  submit: 'bg-emerald-50 border-emerald-200/50 hover:bg-emerald-100',
  quiz:   'bg-blue-50 border-blue-200/50 hover:bg-blue-100',
  unlock: 'bg-amber-50 border-amber-200/50 hover:bg-amber-100',
}

const textColor = {
  submit: 'text-emerald-900',
  quiz:   'text-blue-900',
  unlock: 'text-amber-900',
}

const iconMap = {
  submit: '<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />',
  quiz:   '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />',
  unlock: '<path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />',
}
</script>

<template>
  <div :class="['relative rounded-lg border p-2.5 transition-all duration-300 cursor-pointer group hover:-translate-y-0.5 hover:shadow-md', `${bgColor[type]}`]">
    <!-- Timeline Dot -->
    <div :class="['absolute -left-3.5 top-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white transition-all duration-300', dotColor[type]]">
      <svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true" v-html="iconMap[type]" />
    </div>

    <!-- Content -->
    <div class="ml-4">
      <p :class="['text-xs font-bold leading-snug group-hover:text-cyan-700 transition-colors duration-300', textColor[type]]">{{ activityName }}</p>
      <p class="text-xs text-slate-500 mt-1 font-medium">{{ date }}</p>
    </div>

    <!-- Activity Badge -->
    <div :class="['absolute top-2.5 right-2.5 rounded-lg px-2 py-0.5 text-xs font-bold capitalize transition-all duration-300 group-hover:scale-105 origin-top-right', 'bg-white/80', textColor[type]]">
      {{ type }}
    </div>
  </div>
</template>
