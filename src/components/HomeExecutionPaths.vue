<script setup>
import {
  IconTerminal2,
  IconBrowser,
  IconSearch,
  IconActivity,
  IconKeyboard,
  IconBell,
} from '@tabler/icons-vue';
import SectionHeader from './SectionHeader.vue';
import SectionWrapper from './SectionWrapper.vue';
</script>

<template>
  <SectionWrapper sectionClass="execution-paths pt-12 pb-6 md:pt-20 md:pb-10">
    <!-- Section Header -->
    <SectionHeader
      badge="Dual Kernel"
      title="One codebase. Two modes."
      description="Tako inspects os.Args and routes automatically. Build powerful headless CLI commands and rich interactive TUIs using the exact same services and plugins."
    />

    <!-- Split Screen -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <!-- CLI Mode -->
      <div class="bg-glass group flex flex-col overflow-hidden rounded-xl">
        <div class="flex items-center gap-4 border-b border-border bg-muted/50 p-6">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary"
          >
            <IconTerminal2 class="h-5 w-5" :stroke-width="2" />
          </div>
          <div>
            <h3 class="m-0! border-none! pt-0! font-bold text-base text-text-1">CLI Kernel</h3>
            <div class="text-xs text-text-3">For headless scripts &amp; pipelines</div>
          </div>
        </div>

        <!-- Terminal body -->
        <div class="ep-terminal relative flex-1">
          <!-- Content -->
          <div
            class="ep-terminal__body"
            style="
              font-family: var(--vp-font-family-mono);
              letter-spacing: 0.01em;
              font-size: 12px;
              line-height: 1.6;
            "
          >
            <div class="flex flex-col">
              <div class="ep-text--dim mb-4 flex gap-2">
                <span class="text-primary select-none">$</span>
                <div class="cli-typing-container">
                  <span class="ep-text--bright ep-font-semibold cli-typing-text"
                    >myapp plugin:list --json</span
                  >
                </div>
              </div>
              <div class="cli-json-response">
                <div class="ep-text--green mb-1">[</div>
                <div class="ep-text--cyan ml-4">
                  <span class="ep-text--dim">{"name":</span> "search"<span class="ep-text--dim"
                    >, "status":</span
                  >
                  "active"<span class="ep-text--dim">},</span>
                </div>
                <div class="ep-text--cyan ml-4">
                  <span class="ep-text--dim">{"name":</span> "dashboard"<span class="ep-text--dim"
                    >, "status":</span
                  >
                  "active"<span class="ep-text--dim">}</span>
                </div>
                <div class="ep-text--green mt-1">]</div>
                <div class="ep-text--dim mt-5 flex gap-2">
                  <span class="text-primary select-none">$</span>
                  <span class="ep-cursor animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TUI Mode -->
      <div class="bg-glass group flex flex-col overflow-hidden rounded-xl">
        <div class="flex items-center gap-4 border-b border-border bg-muted/50 p-6">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary"
          >
            <IconBrowser class="h-5 w-5" :stroke-width="2" />
          </div>
          <div>
            <h3 class="m-0! border-none! pt-0! font-bold text-base text-text-1">TUI Kernel</h3>
            <div class="text-xs text-text-3">For rich interactive experiences</div>
          </div>
        </div>

        <!-- Terminal body -->
        <div class="ep-terminal relative flex-1">
          <!-- Content -->
          <div
            class="ep-terminal__body"
            style="font-family: var(--vp-font-family-mono); letter-spacing: 0.01em; font-size: 12px"
          >
            <div class="ep-text--dim mb-4 flex gap-2 text-[13px]">
              <span class="text-primary select-none">$</span>
              <span class="ep-text--bright ep-font-semibold">myapp</span>
            </div>
            <!-- Mock TUI UI (Tako Inspector) -->
            <div
              class="ep-tui-window flex h-[190px] flex-col overflow-hidden p-0! transition-colors duration-500 group-hover:border-primary"
            >
              <!-- Top Bar -->
              <div
                class="relative z-10 flex shrink-0 items-center justify-center gap-2 bg-[var(--vp-c-brand-1)] py-0.5 text-center text-[9px] font-bold text-white shadow-sm"
              >
                <IconSearch class="h-2.5 w-2.5" :stroke-width="3" /> TAKO INSPECTOR
                <span class="font-normal opacity-80">[tako]</span>
              </div>

              <div class="relative z-0 flex flex-1 flex-col gap-1.5 p-2">
                <!-- Health Box -->
                <fieldset
                  class="m-0 shrink-0 rounded-sm border border-[var(--vp-c-border)] px-2 pt-0 pb-1.5"
                >
                  <legend
                    class="ml-1 flex items-center gap-1 px-1 text-[9px] leading-none font-bold text-[var(--vp-c-brand-1)]"
                  >
                    <IconActivity class="h-3 w-3" /> Health, Memory & State
                  </legend>
                  <div
                    class="mt-0.5 grid grid-cols-3 gap-3 font-mono text-[8.5px] text-[var(--vp-c-text-2)]"
                  >
                    <div class="flex flex-col leading-[1.4]">
                      <div class="text-[var(--vp-c-text-1)]">
                        <span class="text-[10px]">⊟</span> System
                      </div>
                      <div class="whitespace-pre">
                        ├─ Uptime : <span class="text-[var(--vp-c-text-1)]">00:00:22</span>
                      </div>
                      <div class="whitespace-pre">
                        └─ Goroutines : <span class="text-[var(--vp-c-text-1)]">13</span>
                      </div>
                    </div>
                    <div class="flex flex-col leading-[1.4]">
                      <div class="text-[var(--vp-c-text-1)]">
                        <span class="text-[10px]">⊟</span> Memory
                      </div>
                      <div class="whitespace-pre">
                        ├─ Allocated : <span class="text-[var(--vp-c-text-1)]">2 MB</span>
                      </div>
                      <div class="whitespace-pre">
                        └─ Sys Mem : <span class="text-[var(--vp-c-text-1)]">13 MB</span>
                      </div>
                    </div>
                    <div class="flex flex-col leading-[1.4]">
                      <div class="text-[var(--vp-c-text-1)]">
                        <span class="text-[10px]">⊙</span> Boot Time
                      </div>
                      <div class="whitespace-pre">
                        ├─ App : <span class="text-[var(--vp-c-text-1)]">0.40 ms</span>
                      </div>
                      <div class="whitespace-pre">
                        └─ Total Boot : <span class="text-[var(--vp-c-text-1)]">0.40 ms</span>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <!-- Split Boxes -->
                <div class="grid min-h-0 flex-1 grid-cols-2 gap-2">
                  <!-- Keybindings -->
                  <fieldset
                    class="m-0 flex h-full flex-col rounded-sm border border-[var(--vp-c-border)] px-2 pt-0 pb-1.5"
                  >
                    <legend
                      class="ml-1 flex items-center gap-1 px-1 text-[9px] leading-none font-bold text-[var(--vp-c-brand-1)]"
                    >
                      <IconKeyboard class="h-3 w-3" /> Registry Keybindings
                    </legend>
                    <div class="mt-0.5 flex flex-col font-mono text-[8.5px]">
                      <div
                        class="mb-0.5 flex justify-between border-b border-[var(--vp-c-border)] pb-0.5 text-[var(--vp-c-text-3)]"
                      >
                        <span>Scope</span><span>Key</span>
                      </div>
                      <div class="nav-item-1 flex justify-between rounded-sm px-1">
                        <span>Global</span><span>?</span>
                      </div>
                      <div class="nav-item-2 flex justify-between rounded-sm px-1">
                        <span>Global</span><span>ctrl+c</span>
                      </div>
                      <div class="nav-item-3 flex justify-between rounded-sm px-1">
                        <span>Local</span><span>esc</span>
                      </div>
                    </div>
                  </fieldset>
                  <!-- Event Bus -->
                  <fieldset
                    class="m-0 flex h-full flex-col rounded-sm border border-[var(--vp-c-border)] px-2 pt-0 pb-1.5"
                  >
                    <legend
                      class="ml-1 flex items-center gap-1 px-1 text-[9px] leading-none font-bold text-[var(--vp-c-brand-1)]"
                    >
                      <IconBell class="h-3 w-3" /> Live Event Bus Stream
                    </legend>
                    <div
                      class="mt-0.5 flex flex-col gap-0.5 font-mono text-[8px] text-[var(--vp-c-text-2)]"
                    >
                      <div class="flex gap-1.5">
                        <span>[11:51:28]</span><span>overlay:shown</span>
                      </div>
                      <div class="flex gap-1.5"><span>[11:51:28]</span><span>fzf:opened</span></div>
                      <div class="cli-json-response flex gap-1.5 text-[var(--vp-c-text-1)]">
                        <span>[11:51:30]</span><span>overlay:closed</span>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
/* ─── Terminal wrapper — adapts to dark/light ───────────────────────────── */
.ep-terminal {
  background: transparent;
  display: flex;
  flex-direction: column;
}

.ep-terminal__body {
  padding: 16px;
  flex: 1;
  color: var(--vp-c-text-2);
}

/* ─── Text colour tokens — follow dark/light ────────────────────────────── */
.ep-text--bright {
  color: var(--vp-c-text-1);
}
.ep-text--dim {
  color: var(--vp-c-text-3);
}
.ep-text--muted {
  color: var(--vp-c-text-2);
}

.ep-text--green {
  color: #22c55e;
}
.ep-text--cyan {
  color: var(--vp-c-brand-3);
}

/* Custom font weights to avoid custom.css !important overrides */
.ep-font-semibold {
  font-weight: 600;
  font-family: inherit !important;
}
.ep-font-bold {
  font-weight: 700;
  font-family: inherit !important;
}

/* Light mode: soften the colours slightly */
:root:not(.dark) .ep-text--green {
  color: #16a34a;
}
:root:not(.dark) .ep-text--cyan {
  color: var(--vp-c-brand-1);
}

/* ─── Cursor ────────────────────────────────────────────────────────────── */
.ep-cursor {
  display: inline-block;
  width: 7px;
  height: 14px;
  background: var(--vp-c-text-3);
  margin-top: 3px;
  border-radius: 1px;
}

/* ─── TUI mock window ───────────────────────────────────────────────────── */
.ep-tui-window {
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: var(--vp-c-brand-soft); /* Subtle brand tint for both light and dark modes */
  padding: 12px;
  color: var(--vp-c-text-3);
}

.ep-tui-header {
  border-bottom: 1px solid var(--terminal-border);
  padding-bottom: 8px;
  margin-bottom: 12px;
}

.ep-tui-item {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11.5px;
  color: var(--vp-c-text-3);
  cursor: default;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-item-1 {
  animation: navSelect1 6s infinite;
}
.nav-item-2 {
  animation: navSelect2 6s infinite;
}
.nav-item-3 {
  animation: navSelect3 6s infinite;
}

@keyframes navSelect1 {
  0%,
  30%,
  90%,
  100% {
    background: var(--vp-c-brand-1);
    color: white;
    font-weight: 600;
  }
  35%,
  85% {
    background: transparent;
    color: inherit;
    font-weight: inherit;
  }
}

@keyframes navSelect2 {
  0%,
  30%,
  65%,
  100% {
    background: transparent;
    color: inherit;
    font-weight: inherit;
  }
  35%,
  60% {
    background: var(--vp-c-brand-1);
    color: white;
    font-weight: 600;
  }
}

@keyframes navSelect3 {
  0%,
  60%,
  100% {
    background: transparent;
    color: inherit;
    font-weight: inherit;
  }
  65%,
  85% {
    background: var(--vp-c-brand-1);
    color: white;
    font-weight: 600;
  }
}

/* ─── Typing Animation for CLI ─────────────────────────────────────────── */
.cli-typing-container {
  display: inline-flex;
}

.cli-typing-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--vp-c-brand-1);
  animation: typing 6s steps(25, end) infinite;
  letter-spacing: normal;
}

@keyframes typing {
  0%,
  10% {
    width: 0;
    border-right-color: var(--vp-c-brand-1);
  }
  40% {
    width: 25ch;
    border-right-color: var(--vp-c-brand-1);
  }
  45%,
  85% {
    width: 25ch;
    border-right-color: transparent;
  }
  90%,
  100% {
    width: 0;
    border-right-color: transparent;
  }
}

.cli-json-response {
  opacity: 0;
  animation: jsonFade 6s infinite;
}

@keyframes jsonFade {
  0%,
  43% {
    opacity: 0;
    transform: translateY(5px);
  }
  48%,
  85% {
    opacity: 1;
    transform: translateY(0);
  }
  90%,
  100% {
    opacity: 0;
    transform: translateY(0);
  }
}
</style>
