<script setup>
import {
  IconBolt,
  IconTool,
  IconMouse,
  IconArrowsSplit,
  IconPalette,
  IconBuildingArch,
  IconPlug,
  IconRefresh,
  IconKeyboard,
  IconPuzzle,
  IconCheck,
  IconTerminal2,
  IconWindow,
  IconLayoutDashboard,
  IconSettings,
  IconBroadcast,
} from '@tabler/icons-vue';
import SectionHeader from './SectionHeader.vue';
import FeatureCard from './FeatureCard.vue';
import SectionWrapper from './SectionWrapper.vue';

const features = [
  {
    icon: IconPalette,
    title: 'UI-Agnostic Renderer',
    description:
      'Tako is completely UI-agnostic. Use Bubble Tea, tview, tcell, or build a custom renderer from scratch. Implement contracts.UIRenderer once, and Tako handles routing, events, and overlays for you.',
    class: 'md:col-span-3 md:row-span-2',
  },
  {
    icon: IconBuildingArch,
    title: 'Clean Architecture',
    description:
      'Organize your terminal application into decoupled layers, components, and services without relying on global state.',
    class: 'md:col-span-3',
  },
  {
    icon: IconKeyboard,
    title: 'Input Routing',
    description:
      'The Input Router ensures keyboard and mouse events only reach the currently active UI elements.',
    class: 'md:col-span-3',
  },
  {
    icon: IconRefresh,
    title: 'Dependency Injection',
    description:
      'A built-in Service Container makes it easy to inject loggers, configuration, and shared state across your application.',
    class: 'md:col-span-2',
  },
  {
    icon: IconPuzzle,
    title: 'Pre-built UI Patterns',
    description:
      'Manage modals, overlays, and complex navigation flows using the provided OverlayManager and DialogService.',
    class: 'md:col-span-4',
  },
  {
    icon: IconPlug,
    title: 'Plugin System',
    description:
      'A built-in plugin architecture allows you to write independent extensions that hook into the core event bus and lifecycle.',
    class: 'md:col-span-4',
  },
  {
    icon: IconBroadcast,
    title: 'Event Bus',
    description:
      'A built-in pub/sub Event Bus lets you broadcast state changes and trigger background tasks without passing channels down the component tree.',
    class: 'md:col-span-2',
  },
];
</script>

<template>
  <SectionWrapper sectionClass="features-section pt-12 pb-6 md:pt-20 md:pb-10">
    <!-- Section Header -->
    <SectionHeader
      title="Core primitives for Go terminal applications"
      description="Essential patterns designed to help you structure and scale complex TUIs."
    />

    <!-- Feature Grid -->
    <div class="stagger-container grid grid-cols-1 gap-6 md:grid-cols-6">
      <FeatureCard
        v-for="(feature, idx) in features"
        :key="feature.title"
        :icon="feature.icon"
        :title="feature.title"
        :description="feature.description"
        :delay="idx * 100"
        :class="['stagger-item justify-between', feature.class]"
      >
        <template #footer>
          <!-- Extra visual decorations for specific bento boxes -->
          <div v-if="feature.title === 'UI-Agnostic Renderer'" class="mt-6 pt-4">
            <!-- Modern 2D Sliding Terminal for BYOU -->
            <div class="byou-modern-demo mt-6 flex w-full justify-center">
              <div
                class="byou-window bg-glass transition-colors duration-500 group-hover:border-primary/50"
              >
                <div class="byou-header">
                  <div class="byou-dots">
                    <div class="byou-dot"></div>
                    <div class="byou-dot"></div>
                    <div class="byou-dot"></div>
                  </div>
                </div>
                <div class="byou-body byou-code-block">
                  <div class="byou-line">
                    <span class="text-text-2">app</span>.<span class="text-blue-400">Container</span
                    >().<span class="text-blue-400">Singleton</span>(
                  </div>
                  <div class="byou-line ml-6">
                    <span class="text-primary">new</span>(contracts.<span class="text-blue-400"
                      >UIRenderer</span
                    >),
                  </div>
                  <div class="byou-line ml-6 flex items-center">
                    <div class="byou-chip-wrapper">
                      <div class="byou-chip byou-chip-btea">
                        <IconPalette class="h-3.5 w-3.5" />
                        <span>Bubble Tea</span>
                      </div>
                      <div class="byou-chip byou-chip-tview">
                        <IconLayoutDashboard class="h-3.5 w-3.5" />
                        <span>tview</span>
                      </div>
                      <div class="byou-chip byou-chip-tcell">
                        <IconTerminal2 class="h-3.5 w-3.5" />
                        <span>tcell</span>
                      </div>
                    </div>
                    <span class="ml-1 text-text-2">,</span>
                    <span class="ml-3 text-text-3 italic">// Inject adapter</span>
                  </div>
                  <div class="byou-line ml-2">)</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 🥞 Layered Architecture: 3D Isometric Layers -->
          <div v-if="feature.title === 'Clean Architecture'" class="layered-3d-demo mt-4">
            <div class="iso-stack">
              <div class="iso-layer bg-glass iso-bot">
                <IconSettings class="h-3.5 w-3.5" :stroke-width="2" />
                <span>Service</span>
              </div>
              <div class="iso-layer bg-glass iso-mid">
                <IconLayoutDashboard class="h-3.5 w-3.5" :stroke-width="2" />
                <span>Component</span>
              </div>
              <div class="iso-layer bg-glass iso-top">
                <IconWindow class="h-3.5 w-3.5" :stroke-width="2" />
                <span>Overlay</span>
              </div>
            </div>
          </div>

          <!-- 🧩 Extensible Ecosystem: Magnetic Snap -->
          <div v-if="feature.title === 'Plugin System'" class="ecosystem-magnetic mt-4">
            <!-- Core Framework -->
            <div class="mag-core bg-glass">
              <div
                class="mag-label absolute top-1 left-1/2 flex -translate-x-1/2 items-center gap-1 font-mono text-[10px] whitespace-nowrap text-text-2 transition-colors group-hover:text-primary"
              >
                <IconPlug class="h-3 w-3" /> Your Host App
              </div>
              <div class="mag-data-flow"></div>
              <div
                class="mag-contact-track absolute bottom-0 left-1/2 flex w-[140px] -translate-x-1/2 justify-between"
              >
                <div class="mag-contact-wrapper"><div class="mag-contact"></div></div>
                <div class="mag-contact-wrapper"><div class="mag-contact"></div></div>
                <div class="mag-contact-wrapper"><div class="mag-contact"></div></div>
              </div>
            </div>

            <!-- Plugins -->
            <div class="mag-plugins">
              <div class="mag-plugin plug-1 bg-glass">
                <div class="mag-pin-group">
                  <div class="mag-pin"></div>
                  <div class="mag-pin"></div>
                  <div class="mag-pin"></div>
                </div>
                <IconBolt class="mag-icon h-4 w-4 text-text-3" />
              </div>
              <div class="mag-plugin plug-2 bg-glass">
                <div class="mag-pin-group">
                  <div class="mag-pin"></div>
                  <div class="mag-pin"></div>
                  <div class="mag-pin"></div>
                </div>
                <IconPalette class="mag-icon h-4 w-4 text-text-3" />
              </div>
              <div class="mag-plugin plug-3 bg-glass">
                <div class="mag-pin-group">
                  <div class="mag-pin"></div>
                  <div class="mag-pin"></div>
                  <div class="mag-pin"></div>
                </div>
                <IconPuzzle class="mag-icon h-4 w-4 text-text-3" />
              </div>
            </div>
          </div>

          <!-- 🧩 UI Abstractions: Wireframe -->
          <div v-if="feature.title === 'Pre-built UI Patterns'" class="ui-abs-wireframe mt-4">
            <div class="wf-window bg-glass">
              <!-- Background UI -->
              <div class="wf-bg-lines">
                <div class="wf-line w-3/4"></div>
                <div class="wf-line w-1/2"></div>
                <div class="wf-line w-full"></div>
                <div class="wf-line w-5/6"></div>
              </div>
              <!-- Dialog Box -->
              <div
                class="wf-dialog bg-glass transition-all duration-300 group-hover:scale-105 group-hover:border-primary"
              >
                <div class="wf-dialog-icon transition-colors group-hover:text-primary">
                  <IconCheck class="h-3.5 w-3.5" :stroke-width="3" />
                </div>
                <div class="wf-dialog-lines">
                  <div class="wf-line w-full"></div>
                  <div class="wf-line w-2/3"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- 🔄 Inversion of Control (Compact) -->
          <div v-if="feature.title === 'Dependency Injection'" class="ioc-demo-compact mt-3">
            <div class="ioc-hub">
              <!-- Injections -->
              <div class="ioc-inject left-inject">
                <div class="inject-node bg-glass"><IconSettings class="h-3.5 w-3.5" /></div>
                <div class="inject-line"></div>
              </div>
              <div
                class="ioc-core bg-glass transition-all duration-500 group-hover:border-primary/50"
              >
                <IconRefresh class="core-spin h-4.5 w-4.5 text-primary" :stroke-width="2" />
              </div>
              <div class="ioc-inject right-inject">
                <div class="inject-line"></div>
                <div class="inject-node bg-glass"><IconTool class="h-3.5 w-3.5" /></div>
              </div>
            </div>
          </div>

          <div v-if="feature.title === 'Input Routing'" class="smart-routing-demo mt-4">
            <div
              class="router-container relative flex w-full max-w-[280px] items-center justify-between"
            >
              <!-- Background connection lines and animated packets -->
              <svg
                class="pointer-events-none absolute inset-0 h-full w-full"
                style="z-index: 1"
                viewBox="0 0 280 80"
              >
                <!-- Base faint lines -->
                <path d="M 28 20 C 74 20, 74 40, 120 40" class="route-line-base" />
                <path d="M 28 60 C 74 60, 74 40, 120 40" class="route-line-base" />
                <path d="M 160 40 C 208 40, 208 40, 256 40" class="route-line-base" />

                <!-- Animated Packets -->
                <!-- Input to Router (Top) -->
                <path d="M 28 20 C 74 20, 74 40, 120 40" class="route-packet-in" />
                <!-- Input to Router (Bottom) -->
                <path d="M 28 60 C 74 60, 74 40, 120 40" class="route-packet-in route-delay" />
                <!-- Router to Target -->
                <path d="M 160 40 C 208 40, 208 40, 256 40" class="route-packet-out" />
              </svg>

              <!-- Inputs -->
              <div class="relative z-10 flex flex-col gap-3">
                <div
                  class="input-node bg-glass transition-colors duration-300 group-hover:border-primary"
                >
                  <IconKeyboard
                    class="h-4 w-4 text-text-3 transition-colors group-hover:text-primary"
                  />
                </div>
                <div
                  class="input-node bg-glass transition-colors delay-100 duration-300 group-hover:border-primary"
                >
                  <IconMouse
                    class="h-4 w-4 text-text-3 transition-colors group-hover:text-primary"
                  />
                </div>
              </div>

              <!-- Router -->
              <div
                class="router-node bg-glass relative z-10 transition-all duration-500 group-hover:shadow-[0_0_15px_var(--vp-c-brand-1)]"
              >
                <IconArrowsSplit
                  class="h-5 w-5 text-text-2 transition-colors group-hover:text-primary"
                />
              </div>

              <!-- Targets -->
              <div class="relative z-10 flex flex-col gap-2">
                <div class="target-el bg-glass">
                  <div class="target-inner"></div>
                </div>
                <div
                  class="target-el bg-glass active-el transition-all duration-500 group-hover:border-primary"
                >
                  <div class="target-inner active-inner"></div>
                  <div class="target-glow"></div>
                </div>
                <div class="target-el bg-glass">
                  <div class="target-inner"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- 📡 Event Bus: Broadcast Waves -->
          <div v-if="feature.title === 'Event Bus'" class="event-bus-demo mt-5">
            <div class="eb-container">
              <!-- Background connection lines -->
              <svg class="eb-lines" viewBox="0 0 160 100" fill="none">
                <path d="M80 50 L30 50" class="eb-line" stroke-dasharray="4 4" />
                <path d="M80 50 L130 25" class="eb-line" stroke-dasharray="4 4" />
                <path d="M80 50 L130 75" class="eb-line" stroke-dasharray="4 4" />
              </svg>
              <!-- Center Hub -->
              <div class="eb-node center-node bg-glass">
                <IconBroadcast class="relative z-10 h-4 w-4 text-primary" :stroke-width="2" />
                <div class="eb-pulse ring-1"></div>
                <div class="eb-pulse ring-2"></div>
                <div class="eb-pulse ring-3"></div>
              </div>
              <!-- Satellites -->
              <div class="eb-satellite sat-1 bg-glass">
                <div class="sat-inner"></div>
                <div class="sat-ping"></div>
              </div>
              <div class="eb-satellite sat-2 bg-glass">
                <div class="sat-inner"></div>
                <div class="sat-ping"></div>
              </div>
              <div class="eb-satellite sat-3 bg-glass">
                <div class="sat-inner"></div>
                <div class="sat-ping"></div>
              </div>
            </div>
          </div>
        </template>
      </FeatureCard>
    </div>
  </SectionWrapper>
</template>

<style scoped>
/* ─── Event Bus Demo ────────────────────────────────────────────────────── */
.event-bus-demo {
  position: relative;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.eb-container {
  position: relative;
  width: 160px;
  height: 100px;
}

.eb-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.eb-line {
  stroke: var(--vp-c-border);
  stroke-width: 1.5;
}

.eb-node.center-node {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.eb-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid var(--vp-c-brand-1);
  opacity: 0;
  animation: radarPulse 6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
}

.eb-pulse.ring-1 {
  width: 32px;
  height: 32px;
  animation-delay: 0s;
}
.eb-pulse.ring-2 {
  width: 32px;
  height: 32px;
  animation-delay: 2s;
}
.eb-pulse.ring-3 {
  width: 32px;
  height: 32px;
  animation-delay: 4s;
}

@keyframes radarPulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
    border-width: 2px;
  }
  100% {
    transform: translate(-50%, -50%) scale(3.5);
    opacity: 0;
    border-width: 1px;
  }
}

.eb-satellite {
  position: absolute;
  width: 16px;
  height: 16px;
  background: var(--vp-c-bg);
  border: 1.5px solid var(--vp-c-text-3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s;
}

.sat-1 {
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
}
.sat-2 {
  top: 25px;
  left: 130px;
  transform: translate(-50%, -50%);
}
.sat-3 {
  top: 75px;
  left: 130px;
  transform: translate(-50%, -50%);
}

.sat-inner {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--vp-c-text-3);
  transition: background 0.3s;
}

.sat-ping {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  opacity: 0;
}

/* Active states on hover */
.group:hover .eb-satellite {
  border-color: var(--vp-c-brand-1);
}
.group:hover .sat-inner {
  background: var(--vp-c-brand-1);
}

.group:hover .sat-1 .sat-ping {
  animation: receivePing 6s infinite 1.2s;
}
.group:hover .sat-2 .sat-ping {
  animation: receivePing 6s infinite 1.4s;
}
.group:hover .sat-3 .sat-ping {
  animation: receivePing 6s infinite 1.6s;
}

@keyframes receivePing {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

/* ─── Compact IoC Demo ─────────────────────────────────────────── */
.ioc-demo-compact {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
}

.ioc-hub {
  position: relative;
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ioc-core {
  width: 36px;
  height: 36px;
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--terminal-border);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  box-shadow: 0 0 15px transparent;
}

.group:hover .ioc-core {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 20px color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent);
}

.core-spin {
  transition: transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.group:hover .core-spin {
  transform: rotate(180deg);
}

.ioc-inject {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  transition: all 0.3s;
}

.left-inject {
  left: 10px;
  flex-direction: row;
}
.right-inject {
  right: 10px;
  flex-direction: row-reverse;
}

.inject-line {
  width: 30px;
  height: 2px;
  background: var(--terminal-border);
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
}

.inject-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--vp-c-brand-1);
  opacity: 0;
}

.group:hover .left-inject .inject-line::after {
  animation: flowRight 1.5s infinite ease-in-out;
  opacity: 1;
}

.group:hover .right-inject .inject-line::after {
  animation: flowLeft 1.5s infinite ease-in-out;
  opacity: 1;
}

@keyframes flowRight {
  0% {
    transform: translateX(-100%);
  }
  50%,
  100% {
    transform: translateX(100%);
  }
}

@keyframes flowLeft {
  0% {
    transform: translateX(100%);
  }
  50%,
  100% {
    transform: translateX(-100%);
  }
}

.inject-node {
  width: 26px;
  height: 26px;
  background: var(--vp-c-bg);
  border: 1px solid var(--terminal-border);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--vp-c-text-3);
  transition: all 0.3s;
  z-index: 5;
}

.group:hover .inject-node {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-soft) 20%, transparent);
}

/* ─── Compact UI Abstractions Wireframe ────────────────────────────────── */
.ui-abs-wireframe {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wf-window {
  position: relative;
  width: 150px;
  height: 60px;
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--terminal-border);
  border-radius: 6px;
  padding: 10px;
  overflow: hidden;
}

.wf-bg-lines {
  display: flex;
  flex-direction: column;
  gap: 6px;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.group:hover .wf-bg-lines {
  opacity: 0.25;
}

.wf-line {
  height: 3px;
  border-radius: 1.5px;
  background: var(--vp-c-text-3);
  transition: background 0.3s;
}

.wf-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  background: var(--vp-c-bg);
  border: 1px solid var(--terminal-border);
  border-radius: 5px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 10px transparent;
}

.group:hover .wf-dialog {
  box-shadow: 0 4px 15px color-mix(in srgb, var(--vp-c-brand-1) 15%, transparent);
}

.wf-dialog-icon {
  color: var(--vp-c-text-3);
  display: flex;
  align-items: center;
}

.wf-dialog-lines {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.group:hover .wf-dialog-lines .wf-line {
  background: var(--vp-c-brand-1);
}

/* ─── 3D Isometric Layers ─────────────────────────────────────────────── */
.layered-3d-demo {
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.iso-stack {
  position: relative;
  width: 120px;
  height: 44px;
  transform-style: preserve-3d;
  transform: rotateX(60deg) rotateZ(-40deg);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.group:hover .iso-stack {
  transform: rotateX(65deg) rotateZ(-45deg);
}

.iso-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: color-mix(in srgb, var(--vp-c-bg-mute) 85%, transparent);
  border: 1.5px solid var(--terminal-border);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  /* Removed backdrop-filter for performance */
}

/* Base stack positions */
.iso-top {
  transform: translateZ(15px);
}
.iso-mid {
  transform: translateZ(0px);
}
.iso-bot {
  transform: translateZ(-15px);
}

/* Hover: expand the layers into a tall tower with distinct colors */
.group:hover .iso-top {
  transform: translateZ(40px);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-bg) 90%, transparent);
}
/* ─── Smart Input Routing Demo ─────────────────────────────────────────── */
.smart-routing-demo {
  position: relative;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-container {
  height: 80px;
}

.input-node {
  width: 28px;
  height: 28px;
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--terminal-border);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-node {
  width: 40px;
  height: 40px;
  background: var(--vp-c-bg);
  border: 1.5px solid var(--terminal-border);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.group:hover .router-node {
  border-color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-brand-soft) 20%, transparent);
}

.target-el {
  width: 24px;
  height: 16px;
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--terminal-border);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
}

.target-el.active-el {
  opacity: 1;
  position: relative;
  z-index: 2;
}

.target-inner {
  width: 10px;
  height: 4px;
  background: var(--terminal-border);
  border-radius: 2px;
}

.target-inner.active-inner {
  background: var(--vp-c-brand-1);
}

.target-glow {
  position: absolute;
  inset: -2px;
  border-radius: 4px;
  background: var(--vp-c-brand-1);
  opacity: 0;
  /* Removed filter: blur for performance */
  transition: opacity 0.3s;
}

.group:hover .active-el .target-glow {
  animation: targetPulse 1.5s infinite 1.2s;
}

@keyframes targetPulse {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
}

.group:hover .active-el {
  transform: scale(1.1);
  box-shadow: 0 0 12px color-mix(in srgb, var(--vp-c-brand-1) 20%, transparent);
}

/* SVG Lines */
.route-line-in,
.route-line-out {
  fill: none;
  stroke: var(--terminal-border);
  stroke-width: 1.5;
  stroke-dasharray: 4 4;
  opacity: 0.4;
  transition: all 0.3s;
}

.group:hover .route-line-in {
  stroke: var(--vp-c-brand-1);
  opacity: 0.8;
  animation: flowLineIn 1s linear infinite;
}

.group:hover .route-line-in.route-delay {
  animation-delay: 0.5s;
}

@keyframes flowLineIn {
  from {
    stroke-dashoffset: 16;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.route-line-out.dim {
  opacity: 0.2;
}

.route-line-out.active {
  stroke-dasharray: 6 6;
}

.group:hover .route-line-out.active {
  stroke: var(--vp-c-brand-1);
  opacity: 1;
  stroke-width: 2;
  animation: flowLineOut 1.5s linear infinite 0.5s;
}

@keyframes flowLineOut {
  from {
    stroke-dashoffset: 24;
  }
  to {
    stroke-dashoffset: 0;
  }
}
.group:hover .iso-mid {
  transform: translateZ(0px);
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
  background: color-mix(in srgb, var(--vp-c-bg) 90%, transparent);
}

.group:hover .iso-bot {
  transform: translateZ(-40px);
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-3);
  background: color-mix(in srgb, var(--vp-c-bg) 90%, transparent);
}

/* ─── Extensible Ecosystem: Magnetic Snap ──────────────────────────────── */
.ecosystem-magnetic {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.mag-core {
  width: 160px;
  height: 44px;
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--terminal-border);
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 8px transparent;
  transition: all 0.3s ease;
}

.group:hover .mag-core {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 15px color-mix(in srgb, var(--vp-c-brand-1) 15%, transparent);
}

.mag-data-flow {
  position: absolute;
  top: 60%;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--vp-c-text-3);
  opacity: 0.3;
}

.mag-data-flow::after {
  content: '';
  position: absolute;
  top: -1px;
  left: -100%;
  width: 50%;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--vp-c-brand-1), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.group:hover .mag-data-flow::after {
  opacity: 1;
  animation: dataFlow 1.5s infinite 0.5s ease-in-out;
}

@keyframes dataFlow {
  0% {
    left: -50%;
  }
  100% {
    left: 100%;
  }
}

.mag-contact-wrapper {
  width: 36px;
  display: flex;
  justify-content: center;
}

.mag-contact {
  width: 20px;
  height: 3px;
  background: var(--vp-c-text-3);
  border-radius: 2px 2px 0 0;
  transition: all 0.3s ease;
  opacity: 0.5;
}

.group:hover .mag-contact {
  background: var(--vp-c-brand-1);
  box-shadow: 0 0 6px var(--vp-c-brand-1);
  opacity: 1;
}

.mag-plugins {
  display: flex;
  gap: 16px;
  width: 140px;
}

.mag-plugin {
  width: 36px;
  height: 36px;
  background: var(--vp-c-bg);
  border: 1px solid var(--terminal-border);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateY(12px);
}

.mag-pin-group {
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2px;
}

.mag-pin {
  width: 3px;
  height: 5px;
  background: var(--vp-c-text-3);
  border-radius: 1px 1px 0 0;
  transition: all 0.3s ease;
  opacity: 0.7;
}

.group:hover .mag-plugin {
  transform: translateY(-8px);
  border-color: var(--vp-c-brand-1);
  background: color-mix(in srgb, var(--vp-c-bg-mute) 50%, transparent);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--vp-c-brand-1) 20%, transparent);
}

.group:hover .mag-pin {
  background: var(--vp-c-brand-1);
  box-shadow: 0 -2px 6px var(--vp-c-brand-1);
  opacity: 1;
}

.mag-icon {
  transition: all 0.3s ease;
}

.group:hover .mag-plugin .mag-icon {
  color: var(--vp-c-brand-1) !important;
  transform: scale(1.15);
}

/* Staggered transition for snapping */
.plug-1 {
  transition-delay: 0s;
}
.plug-2 {
  transition-delay: 0.1s;
}
.plug-3 {
  transition-delay: 0.2s;
}
</style>
