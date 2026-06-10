<template>
  <header class="sticky top-0 z-20 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl shadow-sm transition-all duration-300">
    <div class="max-w-screen-xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3">
      <!-- Main Header Layout -->
      <div class="flex items-center justify-between gap-2 sm:gap-3">
        <!-- Logo & Branding Section -->
        <div class="flex items-center gap-2 sm:gap-2.5 md:gap-3 flex-1 min-w-0">
          <!-- Logo Badge -->
          <div class="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700 px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200 flex-shrink-0">
            <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 30 30"><path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/></svg>
            <span class="hidden sm:inline">Dane </span>
          </div>

          <!-- App Name & Description -->
          <div class="min-w-0 flex-1">
            <p class="text-xs sm:text-sm md:text-base font-bold text-slate-900 truncate">{{ appName }}</p>
            <p class="text-xs text-slate-500 truncate hidden md:block">{{ pageTitle }}</p>
          </div>
        </div>

        <!-- Actions Section -->
        <div class="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 flex-shrink-0">
          <!-- Search Button - Hidden on mobile, visible from sm -->
          <button class="hidden sm:inline-flex h-8 sm:h-9 md:h-10 px-2.5 sm:px-3 md:px-4 items-center gap-1.5 sm:gap-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 text-xs transition-all duration-200 hover:bg-slate-100 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1 whitespace-nowrap" aria-label="Search">
            <svg class="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span class="hidden lg:inline text-xs">Search</span>
          </button>

          <!-- Notification Bell -->
          <button class="relative inline-flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-1 flex-shrink-0" aria-label="Notifications">
            <svg class="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <!-- Notification Badge -->
            <span class="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-red-500 text-xs font-bold text-white flex items-center justify-center text-[10px] sm:text-xs">3</span>
          </button>

          <!-- User Avatar -->
          <div class="inline-flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-600 to-cyan-700 text-xs sm:text-xs md:text-sm font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105 flex-shrink-0" :title="`User: ${userName}`">
            {{ initials(userName) }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  appName:   { type: String, required: true },
  pageTitle: { type: String, required: true },
  userName:  { type: String, required: true },
})

const initials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase()
</script>

