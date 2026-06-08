# Tako Framework Documentation

This repository contains the official documentation site for the Tako Framework, built with [VitePress](https://vitepress.dev/). It serves as a comprehensive guide for developers looking to understand the architecture, core concepts, and API of the Tako ecosystem.

## 🚀 Getting Started

To run this documentation site locally, you will need to have [Bun](https://bun.sh/) installed on your machine.

### Prerequisites

- [Bun](https://bun.sh/)
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd takoterm/site
   ```

2. Install the dependencies:
   ```bash
   bun install
   ```

3. Start the local development server:
   ```bash
   bun run docs:dev
   ```
   The VitePress server will start, typically available at `http://localhost:5173`.

## 📁 Project Structure

- `docs/`: Contains all the Markdown (`.md`) files that make up the documentation pages.
- `src/`: Houses custom Vue components used to make the documentation interactive.
- `.vitepress/`: Contains VitePress configuration, theme customizations, and sidebar routing.
- `public/`: Stores static assets such as images, icons, and fonts.

## 🛠️ Build & Deployment

To generate a static production build of the documentation:

```bash
bun run docs:build
```

### Deployment

This documentation site is deployed using **Cloudflare Pages**. You can manually trigger a build and deployment using the following command (requires appropriate Wrangler setup):

```bash
bun run deploy
```

## 🤝 Contributing

We welcome contributions to improve the Tako documentation! Whether it's fixing typos, adding new sections, or clarifying existing concepts.

Please refer to our [Contributing Guide](CONTRIBUTING.md) for detailed instructions on how to set up the project, our commit conventions, and the pull request workflow.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/takoterm/site/blob/main/LICENSE) file for more details.
