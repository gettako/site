<script setup>
defineProps({
  badge: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="mb-14 text-center">
    <div
      v-if="badge"
      class="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase"
    >
      {{ badge }}
    </div>
    <h2 class="mb-3 text-2xl font-bold text-text-1 md:text-3xl">
      <slot name="title">{{ title }}</slot>
    </h2>
    <div
      v-if="description || $slots.default"
      class="mx-auto max-w-2xl text-sm leading-relaxed text-text-2 md:text-base"
    >
      <slot>{{ description }}</slot>
    </div>
  </div>
</template>
