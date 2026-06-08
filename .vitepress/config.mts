import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';
import tailwindcss from '@tailwindcss/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

export default withMermaid(
  defineConfig({
    title: 'Tako',
    description: 'A structured framework for building terminal applications in Go',

    // Ignore dead links to avoid build failures on external repos or README files
    ignoreDeadLinks: true,

    // Clean URLs remove the .html extension
    cleanUrls: true,

    vite: {
      build: {
        // Ensure CSS minification preserves backdrop-filter correctly
        cssMinify: 'esbuild',
      },
      plugins: [
        tailwindcss(),
        Components({
          dirs: ['src/components'],
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
          resolvers: [
            IconsResolver({
              prefix: false,
              enabledCollections: ['tabler'],
            }),
          ],
        }),
        Icons({
          compiler: 'vue3',
        }),
      ],
    },

    head: [
      ['link', { rel: 'icon', href: '/logo.png' }],
      ['meta', { property: 'og:title', content: 'Tako Framework' }],
      [
        'meta',
        {
          property: 'og:description',
          content: 'A structured framework for building terminal applications in Go',
        },
      ],
      ['meta', { property: 'og:image', content: 'https://takoterm.com/logo.png' }],
      ['meta', { property: 'og:url', content: 'https://takoterm.com' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'theme-color', content: '#c7775d' }],
      [
        'link',
        {
          rel: 'preload',
          href: '/@fontsource/inter/files/inter-latin-4normal.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
      ],
      [
        'link',
        {
          rel: 'preload',
          href: '/@fontsource/inter/files/inter-latin-7normal.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
      ],
      [
        'link',
        {
          rel: 'preload',
          href: '/@fontsource/iosevka/files/iosevka-latin-4normal.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: '',
        },
      ],
    ],

    // Minimalist high-contrast appearance
    appearance: 'dark', // defaults to dark mode

    // Syntax highlighting
    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },

    // Mermaid diagram theming — matches Tako brand & dark/light modes
    mermaid: {
      theme: 'base',
      themeVariables: {
        // Brand palette
        primaryColor: '#2d1f1a',
        primaryTextColor: '#f1e8e4',
        primaryBorderColor: '#C7775D',
        secondaryColor: '#1e293b',
        secondaryTextColor: '#e2e8f0',
        secondaryBorderColor: '#334155',
        tertiaryColor: '#0f172a',
        tertiaryTextColor: '#cbd5e1',
        tertiaryBorderColor: '#1e293b',

        // General
        background: 'transparent',
        mainBkg: '#1e293b',
        edgeLabelBackground: 'transparent',
        nodeBorder: '#C7775D',
        lineColor: '#D38870',
        textColor: '#f1e8e4',
        fontSize: '14px',

        // Flowchart
        nodeTextColor: '#f1e8e4',

        // Sequence diagram
        actorBkg: '#1e293b',
        actorBorder: '#C7775D',
        actorTextColor: '#f1e8e4',
        activationBorderColor: '#D38870',
        activationBkgColor: '#2d1f1a',
        signalColor: '#e2e8f0',
        signalTextColor: '#f1e8e4',
        sequenceNumberColor: '#020617',
        loopTextColor: '#e2e8f0',
        noteBkgColor: '#2d1f1a',
        noteBorderColor: '#C7775D',
        noteTextColor: '#f1e8e4',
        labelBoxBkgColor: '#1e293b',
        labelBoxBorderColor: '#C7775D',
        labelTextColor: '#f1e8e4',

        // State diagram
        labelColor: '#f1e8e4',
        altBackground: '#0f172a',

        // Pie / other
        pie1: '#C7775D',
        pie2: '#D38870',
        pie3: '#E19982',
        pie4: '#64748b',
      },
    },
    mermaidPlugin: {
      class: 'tako-mermaid',
    },

    themeConfig: {
      search: {
        provider: 'local',
      },
      logo: '/logo.png',
      editLink: {
        pattern: ({ filePath }) => {
          if (filePath.startsWith('docs/')) {
            return `https://github.com/takoterm/docs/edit/main/${filePath.replace('docs/', '')}`;
          }
          return `https://github.com/takoterm/site/edit/main/${filePath}`;
        },
        text: 'Edit this page on GitHub',
      },
      // Navigation bar
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Documentation', link: '/docs/overview' },
        { text: 'Changelog', link: '/docs/changelog' },
        { text: 'GitHub', link: 'https://github.com/takoterm/tako' },
      ],

      // Structured Sidebar for Sequential Learning Path
      sidebar: [
        {
          text: 'Prologue',
          collapsed: false,
          items: [{ text: 'Overview', link: '/docs/overview' }],
        },
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Installation', link: '/docs/getting-started/installation' },
            { text: 'Initialization', link: '/docs/getting-started/initialization' },
            { text: 'Your First Plugin', link: '/docs/getting-started/first-plugin' },
          ],
        },
        {
          text: 'Architecture Concepts',
          collapsed: false,
          items: [
            { text: 'Bootstrap Process', link: '/docs/core-concepts/bootstrap-process' },
            { text: 'The Context', link: '/docs/core-concepts/context' },
            { text: 'Service Container', link: '/docs/core-concepts/service-container' },
            { text: 'Events', link: '/docs/core-concepts/event-bus' },
            { text: 'Hooks', link: '/docs/core-concepts/hooks' },
          ],
        },
        {
          text: 'The Basics',
          collapsed: false,
          items: [
            { text: 'Input Routing', link: '/docs/core-concepts/input-routing' },
            { text: 'Configuration & Storage', link: '/docs/core-concepts/config-storage' },
            { text: 'Logging', link: '/docs/core-concepts/logger' },
          ],
        },
        {
          text: 'Views & UI',
          collapsed: false,
          items: [
            { text: 'Layouts & Zones', link: '/docs/ui/layouts-zones' },
            { text: 'Overlays & Components', link: '/docs/layer-management/overlays-components' },
            { text: 'Dialogs', link: '/docs/layer-management/dialogs' },
            { text: 'Stack Guards', link: '/docs/layer-management/stack-guards' },
          ],
        },
        {
          text: 'Plugins',
          collapsed: false,
          items: [
            { text: 'Plugin Basics', link: '/docs/plugins/plugin-basics' },
            { text: 'Plugin Lifecycle', link: '/docs/plugins/plugin-lifecycle' },
            { text: 'Plugin Dependencies', link: '/docs/plugins/plugin-dependencies' },
          ],
        },
        {
          text: 'Digging Deeper',
          collapsed: false,
          items: [
            { text: 'UI Adapters', link: '/docs/ui/adapters' },
            { text: 'Scheduler', link: '/docs/core-concepts/scheduler' },
            { text: 'Reactive State', link: '/docs/core-concepts/state' },
            { text: 'Theming', link: '/docs/core-concepts/theming' },
            { text: 'Locale', link: '/docs/core-concepts/i18n' },
            { text: 'Developer Tools', link: '/docs/devtools/inspector' },
            { text: 'Hot Reload', link: '/docs/devtools/watcher' },
            { text: 'CLI Commands', link: '/docs/cli/commands' },
            { text: 'Profiler Integration', link: '/docs/ui/profiler-integration' },
          ],
        },
        {
          text: 'Testing',
          collapsed: false,
          items: [{ text: 'Testing Guide', link: '/docs/testing/testing-guide' }],
        },
        {
          text: 'Cookbook & Reference',
          collapsed: false,
          items: [
            { text: 'Cookbook', link: '/docs/recipes/cookbook' },
            { text: 'FAQ & Troubleshooting', link: '/docs/troubleshooting/faq' },
            { text: 'API Reference', link: '/docs/api/reference' },
            { text: 'Changelog', link: '/docs/changelog' },
          ],
        },
      ],

      // Social Links
      socialLinks: [],

      // Footer is handled by the custom HomeFooter.vue on the home page.
      // Doc pages intentionally have no separate footer.
    },
  }),
);
