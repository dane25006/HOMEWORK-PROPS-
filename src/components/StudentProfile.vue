<template>
  <div class="rounded-lg border border-slate-200/70 bg-gradient-to-br from-white to-slate-50/50 p-4 shadow-sm hover:shadow-md transition-all duration-300">
    <!-- Header Section with Avatar -->
    <div class="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:justify-start sm:text-left pb-3 border-b border-slate-200/50">
      <!-- Avatar -->
      <div class="relative flex-shrink-0">
        <div class="h-16 w-16 overflow-hidden rounded-lg border-2 border-slate-200 bg-slate-100 shadow-md">
          <img 
            :src="avatar" 
            :alt="`${fullName}'s avatar`" 
            class="h-full w-full object-cover"
            @error="handleImageError"
            loading="lazy"
          />
        </div>
        <!-- Batch Badge -->
        <div class="absolute -bottom-1.5 -right-1.5 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-700 px-2 py-0.5 text-xs font-bold text-white shadow-lg">{{ batch }}</div>
      </div>

      <!-- Profile Info -->
      <div class="flex-1">
        <h2 class="text-base font-bold text-slate-900">{{ fullName }}</h2>
        <p class="text-xs text-slate-600 mt-0.5">{{ email }}</p>
        <div class="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-2.5 py-0.5">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          <span class="text-xs font-semibold text-emerald-700">Active</span>
        </div>
        <p class="mt-2 text-xs text-slate-600">
          Track: <span class="font-bold text-slate-900">{{ track }}</span>
        </p>
      </div>
    </div>

    <!-- Info Grid -->
    <div class="grid gap-2 sm:grid-cols-2 mt-3">
      <!-- Profile Status -->
      <div class="rounded-lg bg-slate-100/60 border border-slate-200/50 p-2.5 transition-all duration-300 hover:bg-slate-100 cursor-pointer group">
        <div class="flex items-start gap-2">
          <div class="h-6 w-6 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <svg class="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.15em] font-semibold text-slate-600">Status</p>
            <p class="mt-0.5 text-xs font-semibold text-slate-900">Active</p>
          </div>
        </div>
      </div>

      <!-- Next Milestone -->
      <div class="rounded-lg bg-gradient-to-br from-cyan-100/60 to-blue-100/40 border border-cyan-200/50 p-2.5 transition-all duration-300 hover:shadow-md cursor-pointer group">
        <div class="flex items-start gap-2">
          <div class="h-6 w-6 rounded-lg bg-cyan-200 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <svg class="w-3 h-3 text-cyan-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.15em] font-semibold text-cyan-700">Milestone</p>
            <p class="mt-0.5 text-xs font-semibold text-cyan-900">Finish Props</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid gap-2 sm:grid-cols-2 mt-2">
      <!-- Study Streak -->
      <div class="rounded-lg bg-amber-50/60 border border-amber-200/50 p-2.5 transition-all duration-300 hover:bg-amber-50 cursor-pointer group">
        <div class="flex items-start gap-2">
          <div class="h-6 w-6 rounded-lg bg-amber-200 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <svg class="w-3 h-3 text-amber-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657L13.414 14.414m4.243 4.243l-1.414 1.414m0 0L9.585 21.585a2 2 0 11-2.828-2.828l7.071-7.071m0 0L5.586 5.586a2 2 0 012.828 0" />
            </svg>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.15em] font-semibold text-amber-700">Streak</p>
            <p class="mt-0.5 text-xs font-bold text-amber-900">5 days 🔥</p>
          </div>
        </div>
      </div>

      <!-- Upcoming Quiz -->
      <div class="rounded-lg bg-purple-50/60 border border-purple-200/50 p-2.5 transition-all duration-300 hover:bg-purple-50 cursor-pointer group">
        <div class="flex items-start gap-2">
          <div class="h-6 w-6 rounded-lg bg-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <svg class="w-3 h-3 text-purple-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.15em] font-semibold text-purple-700">Quiz</p>
            <p class="mt-0.5 text-xs font-bold text-purple-900">Composition</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="mt-3 flex flex-col gap-2 sm:flex-row">
      <button class="flex-1 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 px-3 py-2 text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:translate-y-0">
        <span class="flex items-center justify-center gap-1.5">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Learning Path
        </span>
      </button>
      <button class="flex-1 rounded-lg border-2 border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition-all duration-300 hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
        <span class="flex items-center justify-center gap-1.5">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Schedule
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  avatar: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  batch: { type: String, required: true },
  track: { type: String, required: true },
})

const handleImageError = (event) => {
  // Fallback to a placeholder/avatar generator on error
  event.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()}`
}
</script>