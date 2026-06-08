import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import './custom.css';
import '@fontsource/inter';
import '@fontsource/geist-sans';
import '@fontsource/iosevka';
import NotFound from './components/NotFound.vue';

export default {
  extends: DefaultTheme,
  Layout: Layout,
  NotFound: NotFound,
  enhanceApp({ app, router }) {
    if (typeof window !== 'undefined') {
      const setupObserver = () => {
        // Section-level reveal
        const sectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                sectionObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
        );

        document.querySelectorAll('.reveal').forEach((el) => {
          sectionObserver.observe(el);
        });

        // Staggered child reveal for grid items
        const staggerObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const children = entry.target.querySelectorAll('.stagger-item');
                children.forEach((child, idx) => {
                  child.style.transitionDelay = `${idx * 80}ms`;
                  child.classList.add('stagger-visible');
                });
                staggerObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
        );

        document.querySelectorAll('.stagger-container').forEach((el) => {
          staggerObserver.observe(el);
        });
      };

      router.onAfterRouteChanged = () => {
        setTimeout(setupObserver, 100);
      };
      setTimeout(setupObserver, 500);
    }
  },
};
