<template>
  <div class="hero-terminal-wrapper relative z-10 mx-auto w-full max-w-lg lg:mt-0 lg:mr-0">
    <!-- Glow behind terminal -->
    <div
      class="hero-glow pointer-events-none absolute -inset-2 rounded-xl bg-gradient-to-tr from-primary/30 to-primary-3/30 opacity-50 blur-2xl"
    ></div>

    <div
      class="VPTerminalShowcase bg-glass relative m-0! overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
    >
      <div class="VPTerminalHeader">
        <div class="VPTerminalDots">
          <div class="vp-dot red"></div>
          <div class="vp-dot yellow"></div>
          <div class="vp-dot green"></div>
        </div>
        <div class="VPTerminalTitle">boot.go</div>
      </div>
      <div
        class="VPTerminalBody min-h-[180px] text-left text-[11.5px] leading-relaxed text-text-2 md:min-h-[200px] md:text-[12.5px]"
        style="
          font-family: 'Iosevka', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          letter-spacing: 0.01em;
        "
      >
        <div class="flex flex-col gap-1 px-3 py-4 md:px-4 md:py-6">
          <div class="mb-2 flex gap-2">
            <span class="text-primary-2 select-none">$</span>
            <span class="font-semibold text-text-1">go run main.go</span>
          </div>
          <div class="animate-seq-1 flex gap-2 opacity-0">
            <span class="text-text-3 select-none">[tako]</span>
            <span class="font-semibold text-emerald-500 dark:text-emerald-400">INFO</span>
            <span class="text-text-2">Booting IoC Container...</span>
          </div>
          <div class="animate-seq-2 flex gap-2 opacity-0">
            <span class="text-text-3 select-none">[tako]</span>
            <span class="font-semibold text-emerald-500 dark:text-emerald-400">INFO</span>
            <span class="text-text-2">Registered 4 core contracts</span>
          </div>
          <div class="animate-seq-3 flex gap-2 opacity-0">
            <span class="text-text-3 select-none">[tako]</span>
            <span class="font-semibold text-emerald-500 dark:text-emerald-400">INFO</span>
            <span class="text-text-2">EventBus listening</span>
          </div>
          <div class="animate-seq-4 flex gap-2 opacity-0">
            <span class="text-text-3 select-none">[tako]</span>
            <span class="font-semibold text-sky-500 dark:text-sky-400">LOAD</span>
            <span class="text-text-2">plugin: Search</span>
            <span class="mt-0.5 ml-auto text-[11px] text-text-3">14ms</span>
          </div>
          <div class="animate-seq-5 flex gap-2 opacity-0">
            <span class="text-text-3 select-none">[tako]</span>
            <span class="font-semibold text-sky-500 dark:text-sky-400">LOAD</span>
            <span class="text-text-2">plugin: Dashboard</span>
            <span class="mt-0.5 ml-auto text-[11px] text-text-3">6ms</span>
          </div>
          <div class="animate-seq-5b flex gap-2 opacity-0">
            <span class="text-text-3 select-none">[tako]</span>
            <span class="font-semibold text-sky-500 dark:text-sky-400">LOAD</span>
            <span class="text-text-2">plugin: Network</span>
            <span class="mt-0.5 ml-auto text-[11px] text-text-3">8ms</span>
          </div>
          <div class="animate-seq-6 mt-3 flex gap-2 border-t border-border pt-3 opacity-0">
            <span class="text-text-3 select-none">[tako]</span>
            <span class="font-semibold text-emerald-500 dark:text-emerald-400">OK</span>
            <span class="text-text-2">BubbleTea renderer mounted.</span>
          </div>
          <div class="animate-seq-7 mt-1 font-semibold text-primary-3 opacity-0">
            Starting interactive TUI...
            <span class="ml-1 inline-block h-4 w-2 animate-pulse bg-primary-3 align-middle"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-glow {
  background:
    radial-gradient(circle at 50% 50%, var(--vp-c-brand-1) 0%, transparent 60%),
    radial-gradient(circle at 80% 20%, var(--vp-c-brand-3) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, var(--vp-c-brand-2) 0%, transparent 50%);
  opacity: 0.15;
  animation: blobFloat 10s ease-in-out infinite alternate;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

@keyframes blobFloat {
  0% {
    transform: scale(0.9) translate(0, 0);
  }
  33% {
    transform: scale(1.05) translate(3%, -3%);
  }
  66% {
    transform: scale(0.95) translate(-3%, 3%);
  }
  100% {
    transform: scale(1.1) translate(0, 0);
  }
}

@keyframes typeLine {
  0% {
    opacity: 0;
    transform: translateY(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-seq-1 {
  animation: typeLine 0.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
  animation-delay: 0.5s;
}
.animate-seq-2 {
  animation: typeLine 0.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
  animation-delay: 0.9s;
}
.animate-seq-3 {
  animation: typeLine 0.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
  animation-delay: 1.2s;
}
.animate-seq-4 {
  animation: typeLine 0.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
  animation-delay: 1.8s;
}
.animate-seq-5 {
  animation: typeLine 0.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
  animation-delay: 2.1s;
}
.animate-seq-5b {
  animation: typeLine 0.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
  animation-delay: 2.4s;
}
.animate-seq-6 {
  animation: typeLine 0.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
  animation-delay: 2.8s;
}
.animate-seq-7 {
  animation: typeLine 0.2s cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
  animation-delay: 3.2s;
}
</style>
