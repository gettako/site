<script setup>
import {
  IconLayersIntersect,
  IconBolt,
  IconTool,
  IconCpu,
  IconPalette,
  IconPlug,
  IconRocket,
} from '@tabler/icons-vue';
import SectionHeader from './SectionHeader.vue';
import FeatureCard from './FeatureCard.vue';
import SectionWrapper from './SectionWrapper.vue';

const steps = [
  {
    icon: IconPalette,
    label: 'Your Renderer',
    description:
      'tview, Bubble Tea, tcell, termbox, or any custom renderer — your choice, your code.',
  },
  {
    icon: IconPlug,
    label: 'Implement One Interface',
    description:
      "contracts.UIRenderer is the only interface Tako interacts with. Implement one interface, and you're done.",
  },
  {
    icon: IconRocket,
    label: 'Full Framework Activates',
    description:
      'Key routing, events, overlays, and plugins activate automatically without extra configuration.',
  },
];

const pillars = [
  {
    icon: IconLayersIntersect,
    title: 'Layered Rendering',
    description:
      'Build UI layouts using overlays and dialogs without manually managing complex coordinate states.',
  },
  {
    icon: IconBolt,
    title: 'Event-Driven',
    description:
      'Decouple components using the built-in Event Bus to broadcast state changes across your application.',
  },
  {
    icon: IconTool,
    title: 'Developer Tooling',
    description:
      'Debug visually with the built-in Inspector. Monitor container bindings, events, and performance in real-time.',
  },
];
</script>

<template>
  <SectionWrapper sectionClass="architecture-preview pt-12 pb-6 md:pt-20 md:pb-10">
    <!-- Section Header -->
    <SectionHeader
      badge="How Tako works"
      title="You provide the renderer. Tako handles the structure."
      description="Tako acts as the structure between your UI renderer and application logic. By implementing a single interface, key routing, events, overlays, and plugins work automatically."
    />

    <!-- 3-Step Concept Flow -->
    <div class="stagger-container relative mb-14 grid grid-cols-1 gap-4 md:grid-cols-3">
      <!-- Connector lines (desktop only) -->
      <div
        class="pointer-events-none absolute top-1/2 right-[calc(33.33%+1rem)] left-[calc(33.33%+1rem)] hidden h-px -translate-y-1/2 border-t-2 border-dashed border-border md:block"
      ></div>

      <div
        v-for="(step, idx) in steps"
        :key="step.label"
        class="bg-glass group stagger-item relative flex cursor-default flex-col items-center rounded-xl p-6 text-center"
        :class="{ 'border-primary/40 bg-primary-soft/30': idx === 1 }"
      >
        <!-- Step number badge -->
        <div
          class="absolute -top-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-white"
        >
          {{ idx + 1 }}
        </div>

        <div
          class="mt-2 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white transition-colors duration-300"
        >
          <component :is="step.icon" class="h-6 w-6" :stroke-width="2" />
        </div>

        <h3 class="m-0! mb-1 border-none! pt-0! text-sm font-bold text-text-1">{{ step.label }}</h3>
        <p class="m-0! text-xs leading-relaxed text-text-2">{{ step.description }}</p>
      </div>
    </div>

    <!-- Animated Architecture Diagram -->
    <div
      class="bg-glass relative mx-auto hidden w-full max-w-4xl overflow-hidden rounded-xl md:block"
    >
      <div class="relative flex items-center justify-between px-12 py-10">
        <!-- Single continuous SVG Glowing Pipe connecting all nodes -->
        <div
          class="pointer-events-none absolute inset-x-0 top-[calc(3.25rem+12px)] flex items-center justify-center px-16"
        >
          <!-- Glowing data pipe -->
          <svg
            class="h-8 w-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 100 10"
            fill="none"
          >
            <!-- Background dim pipe -->
            <path
              d="M 10 5 L 90 5"
              stroke="currentColor"
              stroke-width="0.3"
              class="text-border"
              stroke-dasharray="1 1"
            />
            <!-- Request flow (Forward) - Dot -->
            <path
              d="M 10 5 L 90 5"
              stroke="var(--vp-c-brand-1)"
              stroke-width="2.5"
              class="pipe-flow-forward"
              stroke-linecap="round"
            />
            <!-- Response flow (Reverse) - Dash -->
            <path
              d="M 90 5 L 10 5"
              stroke="var(--vp-c-brand-3)"
              stroke-width="1.5"
              class="pipe-flow-reverse"
              stroke-linecap="butt"
            />
          </svg>
        </div>

        <!-- Node: Input/IO -->
        <div class="relative z-10 flex w-36 flex-col items-center gap-3">
          <div
            class="group/n relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-border bg-[var(--vp-c-bg)] transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_var(--vp-c-brand-soft)]"
          >
            <div class="absolute inset-0 bg-muted"></div>
            <!-- Custom Animated Keyboard -->
            <div
              class="custom-kb bg-vp-c-bg relative z-10 flex h-[22px] w-9 flex-col justify-between rounded-[4px] border-2 border-text-3/50 p-[2px] transition-all duration-300 group-hover/n:scale-110 group-hover/n:border-primary group-hover/n:shadow-[0_0_8px_var(--vp-c-brand-soft)]"
            >
              <div class="flex h-[3px] w-full justify-between">
                <div class="kb-key k1"></div>
                <div class="kb-key k2"></div>
                <div class="kb-key k3"></div>
                <div class="kb-key k4"></div>
                <div class="kb-key k5"></div>
              </div>
              <div class="flex h-[3px] w-full justify-between px-[2px]">
                <div class="kb-key k6"></div>
                <div class="kb-key k7"></div>
                <div class="kb-key k8"></div>
                <div class="kb-key k9"></div>
              </div>
              <div class="flex h-[3px] w-full justify-center">
                <div class="kb-key space-bar"></div>
              </div>
            </div>
          </div>
          <span class="text-sm font-bold text-text-1 transition-colors group-hover/n:text-primary"
            >Input / IO</span
          >
          <span
            class="bg-vp-c-bg rounded border border-border px-1.5 font-mono text-[10px] text-text-3"
            >Keys • Signals</span
          >
        </div>

        <!-- Node: Tako Kernel (center, highlighted) -->
        <div
          class="group/kernel relative z-10 flex w-40 cursor-default flex-col items-center gap-3"
        >
          <div
            class="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border-2 border-primary bg-[var(--vp-c-bg)] transition-all duration-300 group-hover/kernel:scale-105 group-hover/kernel:shadow-[0_0_20px_var(--vp-c-brand-soft)]"
          >
            <div class="absolute inset-0 bg-primary-soft"></div>
            <div
              class="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover/kernel:opacity-10"
            ></div>
            <IconCpu class="relative z-10 h-9 w-9 text-primary" :stroke-width="1.5" />
          </div>
          <span
            class="text-sm font-bold text-text-1 transition-colors group-hover/kernel:text-primary"
            >Tako Kernel</span
          >
          <div class="kernel-badges flex gap-1.5">
            <span
              class="badge-seq b-1 bg-vp-c-bg rounded border border-border px-2 py-0.5 font-mono text-[9px] font-semibold text-text-3 transition-colors duration-300"
              >IoC</span
            >
            <span
              class="badge-seq b-2 bg-vp-c-bg rounded border border-border px-2 py-0.5 font-mono text-[9px] font-semibold text-text-3 transition-colors duration-300"
              >Bus</span
            >
            <span
              class="badge-seq b-3 bg-vp-c-bg rounded border border-border px-2 py-0.5 font-mono text-[9px] font-semibold text-text-3 transition-colors duration-300"
              >Router</span
            >
          </div>
        </div>

        <!-- Node: UI Renderer (Terminal Miniature) -->
        <div class="relative z-10 flex w-36 flex-col items-center gap-3">
          <div
            class="group/ui relative flex h-16 w-20 cursor-default flex-col overflow-hidden rounded-lg border border-border bg-[var(--vp-c-bg)] transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_var(--vp-c-brand-soft)]"
          >
            <div class="absolute inset-0 z-0 bg-muted"></div>
            <!-- Terminal Header -->
            <div
              class="relative z-10 flex h-3.5 items-center gap-1 border-b border-border bg-border/50 px-1.5 transition-colors group-hover/ui:bg-primary/20"
            >
              <span
                class="term-dot term-dot-1 h-1.5 w-1.5 rounded-full bg-text-3/40 transition-all duration-300"
              ></span>
              <span
                class="term-dot term-dot-2 h-1.5 w-1.5 rounded-full bg-text-3/40 transition-all duration-300"
              ></span>
              <span
                class="term-dot term-dot-3 h-1.5 w-1.5 rounded-full bg-text-3/40 transition-all duration-300"
              ></span>
            </div>
            <!-- Terminal Body -->
            <div
              class="bg-vp-c-bg relative z-10 flex flex-1 flex-col justify-center gap-1.5 overflow-hidden p-2"
            >
              <div
                class="term-line term-line-1 h-1 w-full rounded bg-text-3/20 transition-all duration-300"
              ></div>
              <div
                class="term-line term-line-2 h-1 w-2/3 rounded bg-text-3/20 transition-all duration-300"
              ></div>
              <div
                class="term-line term-line-3 h-1 w-1/2 rounded bg-text-3/20 transition-all duration-300"
              ></div>
            </div>
          </div>
          <span class="text-sm font-bold text-text-1 transition-colors group-hover/ui:text-primary"
            >UI Renderer</span
          >
          <span
            class="bg-vp-c-bg rounded border border-border px-1.5 font-mono text-[10px] text-text-3"
            >Your library</span
          >
        </div>
      </div>

      <!-- Bottom label -->
      <div class="flex items-center justify-center gap-8 border-t border-border px-6 py-3">
        <div class="flex items-center gap-2">
          <span
            class="h-2.5 w-2.5 animate-pulse rounded-full bg-primary"
            style="box-shadow: 0 0 8px var(--vp-c-brand-1)"
          ></span>
          <span class="font-mono text-[10px] tracking-wider text-text-3 uppercase"
            >Request flow</span
          >
        </div>
        <div class="flex items-center gap-2">
          <span
            class="h-1 w-4 rounded-sm bg-primary-3 opacity-90"
            style="box-shadow: 0 0 8px var(--vp-c-brand-3)"
          ></span>
          <span class="font-mono text-[10px] tracking-wider text-text-3 uppercase"
            >Response flow</span
          >
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
/* Data Pipe Flow Animation */
.pipe-flow-forward {
  stroke-dasharray: 0 100;
  animation: flowDot 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  /* Removed heavy drop-shadow filter for better performance */
}
.pipe-flow-reverse {
  stroke-dasharray: 8 100;
  animation: flowDash 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: 2s;
  opacity: 0.9;
  /* Removed heavy drop-shadow filter for better performance */
}

/* Menggerakkan offset dari panjang total (dash + gap) menuju 0 
   agar berjalan maju (forward) mengikuti arah deklarasi M ... L ... di SVG */
@keyframes flowDot {
  0% {
    stroke-dashoffset: 102px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}
@keyframes flowDash {
  0% {
    stroke-dashoffset: 108px;
  }
  100% {
    stroke-dashoffset: 0px;
  }
}

/* Custom Keyboard Animation (Hover Only) */
.kb-key {
  width: 4px;
  height: 3px;
  background-color: var(--vp-c-text-3);
  opacity: 0.5;
  border-radius: 0.5px;
  transition:
    background-color 0.3s,
    opacity 0.3s,
    box-shadow 0.3s;
}
.custom-kb .space-bar {
  width: 14px;
}

@keyframes keyTap {
  0%,
  100% {
    background-color: var(--vp-c-text-3);
    opacity: 0.5;
    box-shadow: none;
  }
  15%,
  25% {
    background-color: var(--vp-c-brand-1);
    opacity: 1;
    box-shadow: 0 0 3px var(--vp-c-brand-1);
  }
}

.group\/n:hover .k1 {
  animation: keyTap 1.5s infinite 0.1s;
}
.group\/n:hover .k2 {
  animation: keyTap 1.5s infinite 0.8s;
}
.group\/n:hover .k3 {
  animation: keyTap 1.5s infinite 1.4s;
}
.group\/n:hover .k4 {
  animation: keyTap 1.5s infinite 0.5s;
}
.group\/n:hover .k5 {
  animation: keyTap 1.5s infinite 1.2s;
}
.group\/n:hover .k6 {
  animation: keyTap 1.5s infinite 0.3s;
}
.group\/n:hover .k7 {
  animation: keyTap 1.5s infinite 1.1s;
}
.group\/n:hover .k8 {
  animation: keyTap 1.5s infinite 1.7s;
}
.group\/n:hover .k9 {
  animation: keyTap 1.5s infinite 0.6s;
}
.group\/n:hover .space-bar {
  animation: keyTap 2s infinite 1s;
}

/* CPU Pulse Animation (Hover Only) */
@keyframes cpuPulse {
  0%,
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: scale(0.95);
    filter: drop-shadow(0 0 5px var(--vp-c-brand-1));
  }
}
.group\/kernel:hover .IconCpu,
.group\/kernel:hover svg.text-primary {
  animation: cpuPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Tako Kernel Badges (Hover Only) */
@keyframes kernelBadgeCycle {
  0%,
  40%,
  100% {
    background: var(--vp-c-bg);
    color: var(--vp-c-text-3);
    border-color: var(--vp-c-border);
  }
  15%,
  25% {
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    border-color: var(--vp-c-brand-1);
  }
}
.group\/kernel:hover .b-1 {
  animation: kernelBadgeCycle 2s infinite 0s;
}
.group\/kernel:hover .b-2 {
  animation: kernelBadgeCycle 2s infinite 0.6s;
}
.group\/kernel:hover .b-3 {
  animation: kernelBadgeCycle 2s infinite 1.2s;
}

/* UI Renderer Animations (Hover Only) */
@keyframes renderLine {
  0%,
  100% {
    transform: scaleX(0.85);
    background-color: color-mix(in srgb, var(--vp-c-text-3) 20%, transparent);
    opacity: 0.8;
  }
  50% {
    transform: scaleX(1);
    background-color: var(--vp-c-brand-1);
    opacity: 1;
  }
}

.term-line {
  transform-origin: left;
}
.group\/ui:hover .term-line-1 {
  animation: renderLine 1.5s ease-in-out infinite 0s;
}
.group\/ui:hover .term-line-2 {
  animation: renderLine 1.2s ease-in-out infinite 0.4s;
}
.group\/ui:hover .term-line-3 {
  animation: renderLine 1.8s ease-in-out infinite 0.8s;
}

@keyframes termLed {
  0%,
  100% {
    opacity: 0.4;
    box-shadow: none;
    background-color: color-mix(in srgb, var(--vp-c-text-3) 40%, transparent);
  }
  50% {
    opacity: 1;
    background-color: currentColor;
    box-shadow: 0 0 4px currentColor;
  }
}

.group\/ui:hover .term-dot-1 {
  color: #f87171;
  animation: termLed 1.5s infinite 0s;
}
.group\/ui:hover .term-dot-2 {
  color: #facc15;
  animation: termLed 1.5s infinite 0.5s;
}
.group\/ui:hover .term-dot-3 {
  color: #4ade80;
  animation: termLed 1.5s infinite 1s;
}
</style>
