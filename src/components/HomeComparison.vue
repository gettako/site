<script setup>
import { IconX, IconCheck } from '@tabler/icons-vue';
import SectionHeader from './SectionHeader.vue';
import SectionWrapper from './SectionWrapper.vue';

const comparisons = [
  {
    topic: 'State management',
    raw: 'Giant global struct or scattered package-level vars',
    tako: 'IoC Service Container — resolve by interface, no globals',
  },
  {
    topic: 'Key routing',
    raw: 'Giant switch-case on every keypress, no context awareness',
    tako: 'Zone-aware Key Router — keys only fire in the active focus context',
  },
  {
    topic: 'Overlays & modals',
    raw: 'Manual stack push, focus shift, render flag, teardown logic',
    tako: 'ctx.Overlay().Show("name", renderFn) — one elegant call',
  },
  {
    topic: 'Plugin integrations',
    raw: 'Hard imports, tight coupling, rewrite to add features',
    tako: 'Decoupled plugins via Event Bus + Hook Registry',
  },
  {
    topic: 'UI library choice',
    raw: 'Locked in — refactoring means rewriting the whole app',
    tako: 'contracts.UIRenderer — swap tview, tcell, Bubble Tea any time',
  },
  {
    topic: 'DevTools',
    raw: 'fmt.Println debugging, manual log tailing',
    tako: 'Built-in Inspector TUI with live FPS, events & hook timings',
  },
];

const renderers = [
  { label: 'tview', color: '#34d399' } /* emerald-400 */,
  { label: 'tcell', color: '#60a5fa' } /* blue-400 */,
  { label: 'Bubble Tea', color: '#818cf8' } /* indigo-400 */,
  { label: 'termbox', color: '#fbbf24' } /* amber-400 */,
  { label: 'your own', color: '#f472b6' } /* pink-400 */,
];
</script>

<template>
  <SectionWrapper sectionClass="comparison-section pt-12 pb-6 md:pt-20 md:pb-10 delay-100">
    <!-- Section Header -->
    <SectionHeader badge="Architecture matters">
      <template #title
        >Beyond drawing boxes — <span class="text-primary">a true foundation</span></template
      >
      While other libraries focus on terminal rendering, Tako focuses on
      <strong class="font-semibold text-primary">how your application communicates</strong>.
      <span style="color: var(--vp-c-text-2)">
        Decouple your business logic from your view layer. Here's what that means in practice.</span
      >
    </SectionHeader>

    <!-- Comparison Table -->
    <div class="relative w-full">
      <!-- Local Ambient Blob to illuminate glass -->
      <div
        class="pointer-events-none absolute top-1/2 left-1/2 z-[-1] h-[80%] w-[90%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]"
      ></div>

      <div class="bg-glass no-hover comparison-table-wrap relative z-10 overflow-x-auto rounded-xl">
        <div class="stagger-container min-w-[700px]">
          <!-- Column headers -->
          <div class="grid grid-cols-[180px_1fr_1fr] border-b border-[var(--terminal-border)]">
            <div
              class="px-6 py-3.5 text-[11px] font-bold tracking-widest text-text-3 uppercase"
            ></div>
            <div
              class="flex items-center gap-1.5 px-6 py-3.5 text-[11px] font-bold tracking-widest text-text-3 uppercase"
            >
              <IconX class="h-3.5 w-3.5 text-red-400/70" :stroke-width="2.5" />
              Raw TUI library
            </div>
            <div
              class="flex items-center gap-1.5 px-6 py-3.5 text-[11px] font-bold tracking-widest text-primary uppercase"
            >
              <IconCheck class="h-3.5 w-3.5 text-emerald-500" :stroke-width="2.5" />
              With Tako
            </div>
          </div>

          <!-- Rows -->
          <div
            v-for="(row, i) in comparisons"
            :key="row.topic"
            class="comparison-row group stagger-item grid grid-cols-[180px_1fr_1fr] border-b border-border transition-colors duration-150 last:border-b-0 hover:bg-black/5 dark:hover:bg-white/5"
          >
            <!-- Topic -->
            <div class="flex items-center px-6 py-4">
              <span class="text-sm leading-snug font-semibold text-text-1">{{ row.topic }}</span>
            </div>

            <!-- Raw -->
            <div class="flex items-start gap-2.5 px-6 py-4">
              <div
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10"
              >
                <IconX class="h-3 w-3 text-red-400" :stroke-width="3" />
              </div>
              <span class="text-sm leading-relaxed text-text-3">{{ row.raw }}</span>
            </div>

            <!-- Tako -->
            <div class="tako-cell flex items-start gap-2.5 px-6 py-4">
              <div
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15"
              >
                <IconCheck class="h-3 w-3 text-emerald-500" :stroke-width="3" />
              </div>
              <span class="text-sm leading-relaxed text-text-2">{{ row.tako }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Comparison Table -->
  </SectionWrapper>
</template>
