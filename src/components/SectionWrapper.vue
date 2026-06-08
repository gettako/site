<script setup>
defineProps({
  sectionClass: {
    type: String,
    default: 'py-6 md:py-10',
  },
  containerClass: {
    type: String,
    default: 'max-w-6xl',
  },
  noReveal: {
    type: Boolean,
    default: false,
  },
  as: {
    type: String,
    default: 'div',
  },
});
</script>

<template>
  <component
    :is="as"
    :class="['custom-section px-4 md:px-8 xl:px-0', !noReveal && 'reveal', sectionClass]"
  >
    <div :class="['mx-auto', containerClass]">
      <slot />
    </div>
  </component>
</template>
