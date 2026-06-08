<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';

const { site } = useData();

const goHome = () => {
  window.location.href = site.value.base;
};
</script>

<template>
  <div class="NotFound">
    <div class="container">
      <div class="mascot">
        <!-- ASCII Octopus Mascot -->
        <pre class="tako-ascii">
   _   _
  (o) (o)
 (       )
 /|\ /|\ /|\
</pre
        >
      </div>
      <p class="code">404</p>
      <h1 class="title">Directory Not Found</h1>
      <div class="divider"></div>
      <blockquote class="quote">
        Looks like Tako couldn't find the requested path in the container.
      </blockquote>

      <div class="action">
        <a class="link" :href="site.base" aria-label="go to home"> Take me home </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
  min-height: calc(100vh - var(--vp-nav-height));
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--terminal-border);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
}

html.dark .container {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.mascot {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.tako-ascii {
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-brand-1);
  font-size: 20px;
  line-height: 1.2;
  font-weight: bold;
  animation: float 4s ease-in-out infinite;
  text-shadow: 0 4px 12px var(--color-brand-soft-light);
}

html.dark .tako-ascii {
  text-shadow: 0 4px 12px var(--color-brand-soft-dark);
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    var(--vp-c-brand-3) 0%,
    var(--vp-c-brand-1) 50%,
    var(--vp-c-brand-2) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: var(--font-heading);
}

.title {
  padding-top: 12px;
  letter-spacing: -0.02em;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
  font-family: var(--font-heading);
  color: var(--vp-c-text-1);
}

.divider {
  margin: 24px auto;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 320px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.action {
  padding-top: 32px;
}

.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background-color: var(--color-brand-soft-light);
  transition: all 0.25s ease;
}

html.dark .link {
  background-color: var(--color-brand-soft-dark);
}

.link:hover {
  background-color: var(--vp-c-brand-1);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--color-brand-soft-light);
}

html.dark .link:hover {
  box-shadow: 0 4px 12px var(--color-brand-soft-dark);
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
