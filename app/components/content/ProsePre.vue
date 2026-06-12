<template>
  <ClientOnly v-if="language === 'mermaid'">
    <div class="glass-panel my-4 flex justify-center overflow-x-auto rounded-xl! px-5 py-4">
      <div v-if="error" class="p-4 font-mono text-sm text-red-500">{{ error }}</div>
      <div v-else v-html="svg" class="mermaid-diagram" />
    </div>
    <template #fallback>
      <div class="glass-panel my-4 flex animate-pulse justify-center rounded-xl! px-5 py-4">
        <div class="h-32 w-full max-w-md rounded bg-slate-100 dark:bg-slate-800"></div>
      </div>
    </template>
  </ClientOnly>

  <OriginalPre
    v-else
    v-bind="$props"
    :ui="{
      root: 'glass-panel rounded-xl! overflow-hidden my-4 ring-0',
      header:
        'bg-transparent border-t-0! border-l-0! border-r-0! border-b! border-ui-border-muted! w-full! m-0! px-5!',
      base: 'bg-transparent ring-0 border-0 shadow-none m-0',
      copy: 'glass-badge ring-0! border-ui-border-muted! bg-transparent! hover:bg-ui-bg-muted! transition-colors',
    }"
  >
    <slot />
  </OriginalPre>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import OriginalPre from '../../../node_modules/@nuxt/ui/dist/runtime/components/prose/Pre.vue';

const props = defineProps({
  code: { type: String, default: '' },
  language: { type: String, default: null },
  filename: { type: String, default: null },
  highlights: { type: Array, default: () => [] },
  meta: { type: String, default: null },
  class: { type: String, default: null },
  icon: { type: null, required: false },
  hideHeader: { type: Boolean, required: false },
  ui: { type: Object, required: false },
});

const svg = ref('');
const error = ref('');

const colorMode = useColorMode();

async function renderMermaid() {
  if (props.language !== 'mermaid' || !props.code) return;

  try {
    const mermaid = (await import('mermaid')).default;

    const isDark = colorMode.value === 'dark';
    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? 'dark' : 'default',
      securityLevel: 'loose',
    });

    const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
    const { svg: renderedSvg } = await mermaid.render(id, props.code);

    svg.value = renderedSvg;
    error.value = '';
  } catch (e: any) {
    console.error('Mermaid rendering error:', e);
    error.value = e.message || 'Failed to render diagram';
  }
}

onMounted(() => {
  if (props.language === 'mermaid') {
    renderMermaid();
  }
});

watch(
  () => colorMode.value,
  () => {
    if (props.language === 'mermaid') {
      renderMermaid();
    }
  },
);
</script>

<style>
.mermaid-diagram svg {
  max-width: 100%;
  height: auto;
}
</style>
