<script setup>
import { IconBrandGithub, IconBook2, IconUsersGroup } from '@tabler/icons-vue';
import SectionWrapper from './SectionWrapper.vue';
</script>

<template>
  <SectionWrapper
    sectionClass="custom-footer mt-0 bg-transparent pt-8 pb-4 md:pt-12 md:pb-6"
    as="footer"
    :noReveal="true"
  >
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
      <!-- Brand -->
      <div class="lg:col-span-1">
        <div class="mb-4 flex items-center gap-3">
          <img src="/logo.png" alt="Tako Logo" class="h-8 w-8" />
          <a href="/" class="tako-wordmark no-underline!" aria-label="Tako home">
            <span class="tako-wordmark__text">TAKO</span>
          </a>
        </div>
        <div class="mb-6 max-w-xs text-sm leading-relaxed text-text-2">
          A structured framework for building rich, scalable terminal applications in Go. UI library
          agnostic. Extensible by design.
        </div>
      </div>

      <!-- Links Container -->
      <div class="grid grid-cols-2 gap-6 md:gap-10 lg:col-span-2">
        <!-- Documentation -->
        <div>
          <div class="mb-5 flex items-center gap-2">
            <IconBook2 class="h-4 w-4 text-text-3" :stroke-width="2" />
            <div class="text-xs font-semibold tracking-widest text-text-3 uppercase">
              Documentation
            </div>
          </div>
          <ul class="m-0! list-none! space-y-2 p-0!">
            <li>
              <a
                href="/docs/overview"
                class="text-sm text-text-2! no-underline! transition-colors hover:text-primary!"
                >Overview</a
              >
            </li>
            <li>
              <a
                href="/docs/getting-started/installation"
                class="text-sm text-text-2! no-underline! transition-colors hover:text-primary!"
                >Installation</a
              >
            </li>
            <li>
              <a
                href="/docs/core-concepts/service-container"
                class="text-sm text-text-2! no-underline! transition-colors hover:text-primary!"
                >Core Concepts</a
              >
            </li>
            <li>
              <a
                href="/docs/layer-management/overlays-components"
                class="text-sm text-text-2! no-underline! transition-colors hover:text-primary!"
                >Layer Management</a
              >
            </li>
            <li>
              <a
                href="/docs/plugins/plugin-basics"
                class="text-sm text-text-2! no-underline! transition-colors hover:text-primary!"
                >Plugin System</a
              >
            </li>
          </ul>
        </div>

        <!-- Community -->
        <div>
          <div class="mb-5 flex items-center gap-2">
            <IconUsersGroup class="h-4 w-4 text-text-3" :stroke-width="2" />
            <div class="text-xs font-semibold tracking-widest text-text-3 uppercase">Community</div>
          </div>
          <ul class="m-0! list-none! space-y-2 p-0!">
            <li>
              <a
                href="https://github.com/takoterm/tako"
                target="_blank"
                class="text-sm text-text-2! no-underline! transition-colors hover:text-primary!"
                >GitHub</a
              >
            </li>
            <li>
              <a
                href="https://github.com/takoterm/tako/issues"
                target="_blank"
                class="text-sm text-text-2! no-underline! transition-colors hover:text-primary!"
                >Issue Tracker</a
              >
            </li>
            <li>
              <a
                href="https://github.com/takoterm/tako/discussions"
                target="_blank"
                class="text-sm text-text-2! no-underline! transition-colors hover:text-primary!"
                >Discussions</a
              >
            </li>
            <li>
              <a
                href="https://github.com/takoterm/tako/releases"
                target="_blank"
                class="text-sm text-text-2! no-underline! transition-colors hover:text-primary!"
                >Changelog</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div
      class="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 sm:flex-row"
    >
      <span class="text-xs text-text-3"> © {{ new Date().getFullYear() }} Tako · MIT License </span>
      <span class="text-xs text-text-3">
        Created by
        <a
          href="https://github.com/OctopyID"
          target="_blank"
          class="text-text-2! no-underline! transition-colors hover:text-primary!"
          >Octopy ID</a
        >
        · Maintained under the
        <a
          href="https://github.com/takoterm"
          target="_blank"
          class="text-text-2! no-underline! transition-colors hover:text-primary!"
          >Takoterm</a
        >
      </span>
    </div>
  </SectionWrapper>
</template>
