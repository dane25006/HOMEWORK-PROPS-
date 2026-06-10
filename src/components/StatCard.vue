<script setup>
defineProps({
  title: { type: String,         required: true },
  value: { type: [String, Number], required: true },
  icon:  { type: String,         required: true },
})

const iconMap = {
  'book-open': `<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />`,
  'pencil':    `<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />`,
  'star':      `<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />`,
  'calendar':  `<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />`,
}

const iconColorMap = {
  'book-open': 'bg-blue-50 text-blue-600 ring-blue-200',
  'pencil':    'bg-emerald-50 text-emerald-600 ring-emerald-200',
  'star':      'bg-amber-50 text-amber-600 ring-amber-200',
  'calendar':  'bg-teal-50 text-teal-600 ring-teal-200',
}
</script>

<template>
  <div class="rounded-lg border border-slate-200/70 bg-white p-3 flex flex-col gap-2 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group">
    <!-- Icon Container -->
    <div :class="['w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ring-1 ring-offset-1', iconColorMap[icon] || 'bg-slate-100 text-slate-500 ring-slate-200', 'group-hover:scale-105 group-hover:ring-opacity-100']">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24" aria-hidden="true" v-html="iconMap[icon]" />
    </div>
    
    <!-- Content -->
    <div>
      <p class="text-lg font-bold text-slate-900 leading-tight">{{ value }}</p>
      <p class="text-xs text-slate-500 mt-1 font-medium">{{ title }}</p>
    </div>
  </div>
</template>
