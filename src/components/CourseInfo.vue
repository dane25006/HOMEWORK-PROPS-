<template>
  <div class="rounded-lg border border-slate-200/70 bg-gradient-to-br from-white to-slate-50/50 p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <!-- Header -->
    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
      <div>
        <p class="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Course Overview</p>
        <h2 class="mt-1.5 text-base font-bold text-slate-900">{{ courseName }}</h2>
        <p class="mt-1 text-xs text-slate-600">Instructor: <span class="font-semibold text-slate-900">{{ instructor }}</span></p>
      </div>
      <div class="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 px-3 py-1 shadow-sm">
        <span class="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
        <span class="text-xs font-bold text-cyan-700">Ongoing</span>
      </div>
    </div>

    <!-- Progress Section -->
    <div class="space-y-2">
      <!-- Progress Header -->
      <div class="flex items-center justify-between gap-2">
        <div>
          <span class="text-xs font-semibold text-slate-700">Progress</span>
          <p class="text-xs text-slate-500 mt-0.5">{{ progress }}% complete</p>
        </div>
        <span class="text-sm font-bold text-cyan-600">{{ progress }}%</span>
      </div>

      <!-- Progress Bar -->
      <div class="overflow-hidden rounded-full bg-slate-200 shadow-inner h-2">
        <div class="h-full rounded-full bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 transition-all duration-700 shadow-lg" :style="{ width: progress + '%' }" />
      </div>

      <!-- Motivational Message -->
      <div class="mt-2 rounded-lg bg-amber-50/60 border border-amber-200/50 p-2">
        <p class="text-xs text-amber-900 font-medium leading-relaxed">
          <span class="font-bold">Keep going!</span> You're {{ progress }}% through.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  courseName: { type: String, required: true },
  instructor: { type: String, required: true },
  progress: { type: Number, required: true },
})
</script>
