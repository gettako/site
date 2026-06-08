# Contributing Guide

Thank you for your interest in contributing to the Tako documentation! This guide will help you understand the contribution process for this repository.

## Running the Project Locally

This project uses [Bun](https://bun.sh/) as the package manager. **Please ensure you always use Bun**, not `npm`, `yarn`, or `pnpm`.

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd takoterm/site
   ```

2. Install dependencies using Bun:
   ```bash
   bun install
   ```

3. Run the development server (VitePress):
   ```bash
   bun run docs:dev
   ```

## Project Structure

This documentation is built using VitePress. Here is the main directory structure:

- `docs/` - Contains Markdown (`.md`) files for documentation pages.
- `src/` - Contains Vue components used within the documentation.
- `.vitepress/` - Contains VitePress configuration and themes.
- `public/` - Contains static assets (images, fonts, etc.).

## Commit Guidelines (Conventional Commits)

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages in this repository. This helps in automatically generating the changelog and keeping the commit history clean.

Commit message format:
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Supported Commit Types:

- `feat`: Addition of a new feature or documentation page
- `fix`: Bug fix or correction in text/code
- `docs`: Changes that only affect documentation
- `style`: Formatting changes (spaces, semicolons, etc.) that do not affect logic or meaning
- `refactor`: Code/text structure changes that are neither bug fixes nor feature additions
- `perf`: Code changes that improve performance
- `test`: Adding or correcting missing tests
- `chore`: Updating build tasks, package manager configurations, etc.

**Examples of Correct Commits:**
- `docs: add guide for keybindings`
- `fix(ui): fix HomeArchitecture component layout on mobile screens`
- `feat(layer): create documentation page for overlay manager`
- `chore: update vitepress dependency`

**Examples of Incorrect Commits:**
- `update docs`
- `fix typo`
- `added new page`

## Pull Request (PR)

1. Create a new branch from `main` with a descriptive format (e.g., `feat/docs-keybindings` or `fix/typo-overlay`).
2. Make your changes and ensure your commit messages follow the Conventional Commits guidelines above.
3. Push your branch and create a Pull Request to the `main` branch.
4. Explain the changes you made in the PR description.
5. Wait for the review process from the maintainers.

Thank you again for your contribution!
