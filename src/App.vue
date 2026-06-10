
<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-cyan-50 text-slate-900 font-sans">
    <Header
      :app-name="'Props Practice'"
      :page-title="'Props Practice Dashboard'"
      :user-name="student.fullName"
    />

    <main class="max-w-screen-xl mx-auto px-4 py-6 space-y-4">
      <!-- Hero Section - Compact -->
      <section class="overflow-hidden rounded-xl border border-slate-200/70 bg-gradient-to-br from-white via-slate-50/80 to-cyan-50/60 p-5 shadow-sm">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div class="max-w-2xl flex-1">
            <p class="text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 inline-flex items-center gap-2">
              <span class="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
              Student Dashboard
            </p>
            <h1 class="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">Student Dashboard</h1>
            <p class="mt-3 max-w-xl text-sm leading-6 text-slate-600">Track your course progress, upcoming assignments, and recent activity from one polished dashboard.</p>
          </div>
          <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            <div class="rounded-lg border border-slate-200/80 bg-gradient-to-br from-slate-50 to-slate-100 p-3 shadow-sm">
              <p class="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Course</p>
              <p class="mt-1.5 text-sm font-bold text-slate-900">{{ course.courseName }}</p>
            </div>
            <div class="rounded-lg border border-slate-200/80 bg-gradient-to-br from-slate-50 to-slate-100 p-3 shadow-sm">
              <p class="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Instructor</p>
              <p class="mt-1.5 text-sm font-bold text-slate-900">{{ course.instructor }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats and Course Overview -->
      <div class="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
        <StatsSection class="self-start" :stats="stats" />
        <CourseInfo
          :course-name="course.courseName"
          :instructor="course.instructor"
          :progress="course.progress"
        />
      </div>

      <!-- Profile, Activity, and Assignments -->
      <div class="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div class="space-y-4">
          <StudentProfile
            :avatar="student.avatar"
            :full-name="student.fullName"
            :email="student.email"
            :batch="student.batch"
            :track="student.track"
          />
          <ActivityTimeline :activities="activities" />
        </div>
        <AssignmentList :assignments="assignments" />
      </div>
    </main>

    <Footer />
  </div>
</template>


<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import CourseInfo from './components/CourseInfo.vue'
import StatsSection from './components/StatsSection.vue'
import StudentProfile from './components/StudentProfile.vue'
import AssignmentList from './components/AssignmentList.vue'
import ActivityTimeline from './components/ActivityTimeline.vue'
import Footer from './components/Footer.vue'
import image from './assets/avatar.png'

const student = ref({
  avatar: image,
  fullName: 'Miok Dane',
  email: 'danemiok@gmail.com',
  batch: '2026-A',
  track: 'Frontend Development',
})

const course = ref({
  courseName: 'Frontend Frameworks Vue.js',
  instructor: 'HEY HIM',
  progress: 60,
})

const stats = ref([
  { title: 'Lessons Completed', value: '12 / 20', icon: 'book-open' },
  { title: 'Exercises Done',    value: '8 / 10',  icon: 'pencil'    },
  { title: 'Current Score',     value: '92%',      icon: 'star'      },
  { title: 'Attendance Rate',   value: '95%',      icon: 'calendar'  },
])

const assignments = ref([
  { title: 'Composition API Quiz', dueDate: 'June 15', status: 'completed' },
  { title: 'Props Lab Exercise',   dueDate: 'June 15', status: 'pending'   },
  { title: 'Laravel CRUD', dueDate: 'June 20', status: 'completed'   },
  { title: 'Submit CV & CL (PL4)', dueDate: 'June 20', status: 'pending'   },
])

const activities = ref([
  { activityName: 'Submitted Exercise',   date: '2 mins ago',  type: 'submit' },
  { activityName: 'Quiz Completed',       date: '1 hour ago',  type: 'quiz'   },
  { activityName: 'Unlocked New Module',  date: 'Yesterday',   type: 'unlock' },
  { activityName: 'Joined Live Session',  date: '2 days ago',  type: 'submit' },
])
</script>