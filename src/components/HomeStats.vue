<template>
  <SectionWrapper sectionClass="pt-8 pb-4 md:pt-12 md:pb-6 delay-200">
    <div
      ref="statsGrid"
      class="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border"
    >
      <div
        v-for="(stat, idx) in stats"
        :key="stat.label"
        class="flex flex-col items-center px-6 text-center"
      >
        <component
          :is="stat.icon"
          class="mb-3 h-8 w-8 text-primary opacity-80"
          :stroke-width="1.5"
        />
        <div class="mb-1 text-3xl font-extrabold text-text-1">
          <span
            class="stat-value"
            :class="{ 'stat-visible': visible }"
            :style="{ transitionDelay: `${idx * 100}ms` }"
          >
            {{ stat.value }}
          </span>
        </div>
        <div class="text-xs font-semibold tracking-widest text-text-2 uppercase">
          {{ stat.label }}
        </div>
      </div>
    </div>

    <!-- Tagline -->
    <div
      class="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-text-2 md:text-base"
    >
      A structured framework for building production-grade terminal applications in Go — without the
      global state, spaghetti keybindings, or renderer lock-in.
    </div>
  </SectionWrapper>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IconBrandGolang, IconCertificate, IconPuzzle, IconFeather } from '@tabler/icons-vue';
import SectionWrapper from './SectionWrapper.vue';

const stats = [
  { value: 'Go 1.26+', label: 'Minimum Go version', icon: IconBrandGolang },
  { value: 'Minimal', label: 'Dependencies', icon: IconFeather },
  { value: '100%', label: 'UI library agnostic', icon: IconPuzzle },
  { value: 'MIT', label: 'Open-source license', icon: IconCertificate },
];

const visible = ref(false);
const statsGrid = ref(null);

onMounted(() => {
  if (!statsGrid.value) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  observer.observe(statsGrid.value);
});
</script>

<style scoped>
.stat-value {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px) scale(0.8);
  transition:
    opacity 0.5s ease,
    transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.stat-value.stat-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
