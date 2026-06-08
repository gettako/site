<script setup>
defineProps({
  icon: {
    type: [Object, Function],
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  delay: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div
    class="bg-glass group relative flex cursor-default flex-col overflow-hidden rounded-xl p-7"
    :style="{ transitionDelay: delay ? `${delay}ms` : undefined }"
  >
    <slot name="header">
      <div v-if="icon" class="mb-4 flex items-center gap-4">
        <div
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-primary/20"
        >
          <component :is="icon" class="bento-icon h-6 w-6" :stroke-width="2" />
        </div>
        <h3 class="m-0! border-none! pt-0! text-lg font-bold text-text-1">
          {{ title }}
        </h3>
      </div>
    </slot>

    <div class="flex-1">
      <p class="m-0! text-sm leading-relaxed text-text-2">
        <slot>{{ description }}</slot>
      </p>
    </div>

    <slot name="footer"></slot>
  </div>
</template>
