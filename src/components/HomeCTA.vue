<script setup>
import { IconTerminal2 } from '@tabler/icons-vue';
import SectionWrapper from './SectionWrapper.vue';
</script>

<template>
  <SectionWrapper
    sectionClass="cta-section relative overflow-hidden pt-12 pb-6 md:pt-20 md:pb-10 bg-grid-pattern"
    containerClass="max-w-6xl text-center relative z-10"
  >
    <!-- Ambient background glow -->
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div class="cta-glow h-[300px] w-[600px] rounded-full bg-primary/10 blur-3xl"></div>
    </div>

    <h2
      class="mb-4 flex items-center justify-center gap-3 text-3xl font-extrabold tracking-tight text-text-1 md:text-4xl"
    >
      <IconTerminal2 class="h-8 w-8 text-primary md:h-10 md:w-10" :stroke-width="2" />
      Ready to build robust terminal apps?
    </h2>
    <div class="mx-auto mb-8 max-w-xl leading-relaxed text-base text-text-2 md:text-lg">
      Stop reinventing the wheel. Start building TUIs that are as reliable and maintainable as your
      backend services.
    </div>

    <div class="flex flex-wrap justify-center gap-4">
      <a
        href="/docs/01-overview"
        class="cta-btn-primary rounded-lg px-8 py-3 font-bold no-underline! transition-all duration-200"
      >
        Get Started Now
      </a>
      <a
        href="https://github.com/takoterm/tako"
        target="_blank"
        class="cta-btn-alt rounded-lg px-8 py-3 font-bold no-underline! transition-all duration-200"
      >
        View on GitHub
      </a>
    </div>
  </SectionWrapper>
</template>
