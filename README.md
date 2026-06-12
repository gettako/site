# Takoterm Site

Welcome to the official repository for the **Takoterm Site**. This project is built using [Nuxt 4](https://nuxt.com) and the [Docus Layer](https://docus.dev) to serve our documentation and web presence.

## 📁 Repository Structure

- **`gettako/site`**: The main repository containing the web application, routing, and UI configurations.
- **`content/`**: A Git Submodule linking to `gettako/docs`. This folder contains all the markdown documentation files.

## 🚀 Quick Start

### 1. Clone the Repository

Because this project uses a Git Submodule for the `content` folder, ensure you clone it recursively:

```bash
git clone --recursive git@github.com:gettako/site.git
cd site
```

If you have already cloned the repository without the submodule, run:

```bash
git submodule update --init --recursive
```

### 2. Install Dependencies

We use `npm` (or your preferred package manager):

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Your site will be running at `http://localhost:3000`.

## 🛠️ Modifying Content

The documentation files are located in the `content/` directory, which is a Git Submodule pointing to `gettako/docs`.
Please refer to [AGENTS.md](./AGENTS.md) or [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on how to update and sync documentation content.

## 🤝 Contributing

We welcome contributions! Please review our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to submit issues, pull requests, and our commit message conventions.

## 📄 License

[MIT License](https://opensource.org/licenses/MIT)