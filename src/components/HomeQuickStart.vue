<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { IconCopy, IconCheck } from '@tabler/icons-vue';
import SectionHeader from './SectionHeader.vue';
import SectionWrapper from './SectionWrapper.vue';

const active = ref('bubbletea');
const typedCommand = ref('');
const fullCommand = 'go get github.com/takoterm/tako';
const commandEl = ref(null);
const btPanel = ref(null);
const ctPanel = ref(null);
const copied = ref(false);

const copyCommand = async () => {
  try {
    await navigator.clipboard.writeText(fullCommand);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (e) {
    console.error('Failed to copy', e);
  }
};

const tabs = [
  { key: 'bubbletea', label: 'Bubble Tea adapter' },
  { key: 'custom', label: 'Custom adapter' },
];

// Re-trigger animation on tab switch by toggling a class
watch(active, async () => {
  const panel = active.value === 'bubbletea' ? btPanel.value : ctPanel.value;
  if (panel) {
    panel.classList.remove('qs-snippet-animate');
    // Force reflow
    void panel.offsetWidth;
    panel.classList.add('qs-snippet-animate');
  }
});

onMounted(() => {
  // Initial animation on the default tab
  if (btPanel.value) {
    btPanel.value.classList.add('qs-snippet-animate');
  }

  if (!commandEl.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          let i = 0;
          setTimeout(() => {
            const timer = setInterval(() => {
              if (i < fullCommand.length) {
                typedCommand.value += fullCommand.charAt(i);
                i++;
              } else {
                clearInterval(timer);
              }
            }, 60);
          }, 400);
        }
      });
    },
    { threshold: 0.5 },
  );

  observer.observe(commandEl.value);
});
</script>

<template>
  <SectionWrapper sectionClass="quick-start pt-12 pb-6 md:pt-20 md:pb-10">
    <!-- Section Header -->
    <SectionHeader
      title="Get Started in Minutes"
      description="Initialize your app, register your dependencies, and let the framework handle the rest."
    />

    <!-- Two-column layout: steps narrower, code wider -->
    <div class="grid grid-cols-1 items-start gap-10 md:grid-cols-5">
      <!-- Left: Steps + CTA (2/5) -->
      <div class="md:sticky md:top-24 md:col-span-2" style="max-height: calc(100vh - 6rem)">
        <!-- Steps -->
        <div class="space-y-0">
          <!-- Step 1 -->
          <div class="flex gap-4 pb-7">
            <div class="flex shrink-0 flex-col items-center">
              <span
                class="flex h-7 w-7 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary"
                >1</span
              >
              <span class="mt-2 w-px flex-1 bg-border"></span>
            </div>
            <div class="pb-1">
              <span class="block text-[15px] leading-7 font-semibold text-text-1"
                >Install Tako</span
              >
              <span class="mt-1 block text-sm leading-relaxed text-text-2"
                >Pull the module into your Go project.</span
              >
              <div
                ref="commandEl"
                class="group bg-glass relative mt-3 flex min-h-[42px] cursor-pointer items-center justify-between gap-3 overflow-hidden rounded-lg border border-transparent px-4 py-2.5 transition-all hover:border-white/10 hover:bg-white/5"
                @click="copyCommand"
              >
                <div
                  class="no-scrollbar flex items-center gap-2 overflow-x-auto"
                  style="
                    font-family:
                      'Iosevka', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
                  "
                >
                  <span class="text-text-3 select-none">$</span>
                  <code
                    class="text-[13px] font-semibold whitespace-nowrap text-primary"
                    style="font-family: inherit !important"
                    >{{ typedCommand
                    }}<span
                      class="animate-pulse text-text-3"
                      v-if="typedCommand.length < fullCommand.length"
                      >_</span
                    ></code
                  >
                </div>
                <button
                  class="flex-shrink-0 cursor-pointer rounded-md p-1 text-text-3 opacity-0 transition-all group-hover:opacity-100 hover:bg-white/10 hover:text-text-1"
                  :title="copied ? 'Copied!' : 'Copy command'"
                  @click.stop="copyCommand"
                >
                  <IconCheck v-if="copied" class="h-4 w-4 text-emerald-400" stroke-width="2.5" />
                  <IconCopy v-else class="h-4 w-4" stroke-width="2" />
                </button>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex gap-4 pb-7">
            <div class="flex shrink-0 flex-col items-center">
              <span
                class="flex h-7 w-7 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary"
                >2</span
              >
              <span class="mt-2 w-px flex-1 bg-border"></span>
            </div>
            <div class="pb-1">
              <span class="block text-[15px] leading-7 font-semibold text-text-1"
                >Choose your UI library</span
              >
              <span class="mt-1 block text-sm leading-relaxed text-text-2">
                Pick any terminal UI library you already know — or start fresh. Wrap it in a single
                <code class="font-mono text-xs text-primary">contracts.UIRenderer</code> interface.
                That's the only surface Tako ever touches.
                <a
                  href="/docs/05-ui/01-adapters"
                  class="font-medium text-primary no-underline! hover:underline"
                  >tview, tcell, Bubble Tea</a
                >
                — all work out of the box.
              </span>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex gap-4">
            <div class="flex shrink-0 flex-col items-center">
              <span
                class="flex h-7 w-7 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary"
                >3</span
              >
            </div>
            <div>
              <span class="block text-[15px] leading-7 font-semibold text-text-1"
                >Build your app</span
              >
              <span class="mt-1 block text-sm leading-relaxed text-text-2">
                Register your services, bind keys, add plugins — then launch with
                <code class="font-mono text-xs text-primary">tako.Run(app)</code>. The framework
                handles the rest.
              </span>
            </div>
          </div>
        </div>

        <!-- CTA buttons -->
        <div class="mt-8 flex gap-3">
          <a
            href="/docs/02-getting-started/01-installation"
            class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-3 px-6 py-2.5 text-sm font-semibold text-white! no-underline! transition-all duration-300 hover:-translate-y-0.5"
          >
            Read the Guide →
          </a>
          <a
            href="https://github.com/takoterm/tako"
            target="_blank"
            class="bg-glass inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-text-1! no-underline!"
          >
            View Source
          </a>
        </div>
      </div>

      <!-- Right: Terminal window (3/5 — wider) -->
      <div
        class="VPTerminalShowcase bg-glass m-0! transition-all duration-500 hover:scale-[1.01] md:col-span-3"
      >
        <!-- Header with tab switcher -->
        <div class="VPTerminalHeader">
          <div class="VPTerminalDots">
            <span class="vp-dot red"></span>
            <span class="vp-dot yellow"></span>
            <span class="vp-dot green"></span>
          </div>

          <!-- Tabs -->
          <div class="qs-tabs">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              class="qs-tab"
              :class="{ 'qs-tab--active': active === tab.key }"
              @click="active = tab.key"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Body: slot-based for Shiki highlighting -->
        <div
          class="VPTerminalBody"
          style="
            font-family:
              'Iosevka', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          "
        >
          <div v-show="active === 'bubbletea'" ref="btPanel" class="qs-snippet-panel">
            <slot name="bubbletea" />
          </div>
          <div v-show="active === 'custom'" ref="ctPanel" class="qs-snippet-panel">
            <slot name="custom" />
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
