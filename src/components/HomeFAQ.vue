<script setup>
import { ref, onMounted } from 'vue';
import { IconChevronDown } from '@tabler/icons-vue';
import SectionHeader from './SectionHeader.vue';
import SectionWrapper from './SectionWrapper.vue';

const faqs = [
  {
    question: 'Do I have to use Bubble Tea?',
    answer:
      'No. Tako is completely UI-agnostic. Bubble Tea is popular so we ship an official adapter for it, but you can use tview, tcell, termbox, or write your own renderer. Just implement the contracts.UIRenderer interface.',
  },
  {
    question: 'Can I migrate an existing tview or Bubble Tea app?',
    answer:
      'Yes. You can wrap your existing UI code inside a UIRenderer adapter and incrementally adopt Tako features like the service container, event bus, and key routing without rewriting everything at once.',
  },
  {
    question: 'How stable is Tako?',
    answer:
      'Tako is under active development. The core APIs (Container, EventBus, KeyRouter, Hooks) are stable. We follow semantic versioning — breaking changes only happen in major releases with migration guides.',
  },
  {
    question: 'What Go version do I need?',
    answer:
      'Tako requires Go 1.26 or later. We use generics and other modern Go features to provide a clean, type-safe API.',
  },
  {
    question: 'Is Tako suitable for production apps?',
    answer:
      'Yes. Tako is designed for building maintainable, testable terminal applications that scale. The architecture patterns (IoC, event-driven, layered rendering) are battle-tested concepts from web frameworks, adapted for the terminal.',
  },
];

const openIndex = ref(null);
const visible = ref(false);
const faqContainer = ref(null);

function toggle(idx) {
  openIndex.value = openIndex.value === idx ? null : idx;
}

onMounted(() => {
  if (!faqContainer.value) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  observer.observe(faqContainer.value);
});
</script>

<template>
  <SectionWrapper
    sectionClass="faq-section pt-12 pb-6 md:pt-20 md:pb-10"
    containerClass="max-w-3xl"
  >
    <!-- Section Header -->
    <SectionHeader
      title="Frequently asked questions"
      description="Common questions about Tako, answered."
    />

    <!-- FAQ Items -->
    <div class="relative w-full">
      <!-- Ambient Blob to illuminate glass -->
      <div
        class="pointer-events-none absolute top-1/2 left-1/2 z-[-1] h-[80%] w-[90%] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px]"
      ></div>

      <div ref="faqContainer" class="bg-glass no-hover relative z-10 overflow-hidden rounded-xl">
        <div
          v-for="(faq, idx) in faqs"
          :key="idx"
          class="faq-item border-b border-border transition-colors duration-150 last:border-b-0"
          :class="[
            openIndex === idx ? 'bg-black/5 dark:bg-white/5' : '',
            visible ? 'faq-item-visible' : '',
          ]"
          :style="{ transitionDelay: visible ? `${idx * 80}ms` : '0ms' }"
        >
          <!-- Question -->
          <button
            class="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-6 py-4 text-left outline-none"
            @click="toggle(idx)"
          >
            <span class="text-sm leading-snug font-semibold text-text-1">{{ faq.question }}</span>
            <IconChevronDown
              class="h-4 w-4 shrink-0 text-text-3 transition-transform duration-200"
              :class="openIndex === idx ? 'rotate-180' : ''"
              :stroke-width="2.5"
            />
          </button>

          <!-- Answer -->
          <div
            class="overflow-hidden transition-all duration-200"
            :style="{
              maxHeight: openIndex === idx ? '200px' : '0',
              opacity: openIndex === idx ? 1 : 0,
            }"
          >
            <div class="px-6 pb-5 text-sm leading-relaxed text-text-2">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
.faq-item {
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease,
    background-color 0.15s ease;
}

.faq-item.faq-item-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
