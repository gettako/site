<script setup>
import { IconPackage, IconRoute, IconLifebuoy, IconBolt } from '@tabler/icons-vue';
import SectionHeader from './SectionHeader.vue';
import SectionWrapper from './SectionWrapper.vue';

const pluginLifecycle = [
  {
    icon: IconPackage,
    title: 'plugin.go',
    label: 'Manifest',
    slot: 'manifest',
    description:
      "Declare your plugin's name, version, and dependencies. The framework resolves load order automatically via topological sort.",
  },
  {
    icon: IconBolt,
    title: 'init.go',
    label: 'Boot',
    slot: 'boot',
    description:
      'Subscribe to events, register services, and bind keys during boot — before the UI renders. Zero coupling to core.',
  },
  {
    icon: IconRoute,
    title: 'lifecycle.go',
    label: 'Logic',
    slot: 'logic',
    description:
      "Your plugin's business logic lives here, fully decoupled. Access any service via the IoC container — no globals, no tight coupling.",
  },
];
</script>

<template>
  <SectionWrapper sectionClass="plugin-ecosystem pt-12 pb-6 md:pt-20 md:pb-10">
    <!-- Section Header -->
    <SectionHeader
      badge="Plugin System"
      title="Ship apps with a built-in plugin system"
      description="Tako optionally provides a full plugin infrastructure for your app. Let your users and teams extend your TUI with independent plugins — each with its own lifecycle, services, and events — without touching your core code."
    />

    <!-- Plugin Lifecycle Grid -->
    <div class="relative w-full">
      <!-- Ambient Blob to illuminate glass -->
      <div
        class="pointer-events-none absolute top-1/2 left-1/2 z-[-1] h-[80%] w-[90%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]"
      ></div>

      <div class="stagger-container relative z-10 mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          v-for="(step, idx) in pluginLifecycle"
          :key="step.title"
          class="bg-glass group stagger-item flex flex-col overflow-hidden rounded-xl"
        >
          <!-- Card header -->
          <div class="flex items-center gap-3 border-b border-border bg-muted/50 px-5 py-4">
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
            >
              <component
                :is="step.icon"
                class="h-4.5 w-4.5 text-primary transition-colors group-hover:text-white"
                :stroke-width="2"
              />
            </div>
            <div>
              <div class="font-mono text-sm font-bold text-text-1">{{ step.title }}</div>
              <div class="text-[10px] font-semibold tracking-wider text-primary uppercase">
                {{ step.label }}
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="flex-1 px-5 py-4 text-sm leading-relaxed text-text-2">
            {{ step.description }}
          </div>

          <!-- Code snippet — rendered via Shiki from parent slot -->
          <div
            class="plugin-code bg-glass mx-5 mb-5 overflow-hidden rounded-xl border border-border"
          >
            <slot :name="step.slot" />
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom callout: isolation guarantee -->
    <div
      class="bg-glass relative flex flex-col items-start gap-3 overflow-hidden rounded-xl px-6 py-6 md:flex-row md:items-center md:gap-6 md:px-8"
    >
      <div
        class="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
      ></div>

      <div class="flex items-center gap-3 md:contents">
        <div
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft md:h-12 md:w-12"
        >
          <IconLifebuoy class="h-5 w-5 text-primary md:h-6 md:w-6" :stroke-width="2" />
        </div>
        <div class="mt-0.5 text-[11px] font-bold tracking-widest text-primary uppercase md:hidden">
          Isolation Guarantee
        </div>
      </div>

      <div class="mt-1 flex-1 text-left md:mt-0">
        <div class="hidden md:block">
          <div class="mb-1 text-[11px] font-bold tracking-widest text-primary uppercase">
            Isolation Guarantee
          </div>
        </div>
        <h3
          class="m-0! mb-2 border-none! pt-0! text-[15px] leading-snug font-bold text-text-1 md:mb-1 md:text-base"
        >
          Your app's plugins can't break each other.
        </h3>
        <p class="m-0! max-w-2xl text-sm leading-relaxed text-text-2">
          Each plugin in your app runs in its own isolated scope. The Event Bus and Hook Registry
          are the only communication channels — no shared globals, no direct imports between
          plugins. Remove any plugin and nothing else breaks.
        </p>
      </div>
    </div>
  </SectionWrapper>
</template>

<style>
/* Strip VitePress default styles from Shiki code blocks inside plugin cards */
.plugin-code div[class*='language-'],
html.dark .plugin-code div[class*='language-'] {
  margin: 0 !important;
  border-radius: 0 !important;
  border: none !important;
  background: transparent !important;
}

.plugin-code div[class*='language-'] pre,
html.dark .plugin-code div[class*='language-'] pre {
  margin: 0 !important;
  border-radius: 0 !important;
  padding-bottom: 0.75rem !important;
  background: transparent !important;
  font-size: 12px !important;
}

.plugin-code div[class*='language-'] code {
  font-size: 12px !important;
}

/* Hide the copy button inside plugin cards */
.plugin-code .copy {
  display: none !important;
}

/* Hide the language label */
.plugin-code .lang {
  display: none !important;
}
</style>
