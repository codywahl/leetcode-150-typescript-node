# 🧰 TypeScript Dev Container Boilerplate

A modern, pre-configured TypeScript development environment using **Dev Containers** in VS Code.

## 🚀 Features

- **TypeScript** with strict config
- **ESLint** using the modern `eslint.config.mjs` flat config
- **Prettier** for consistent formatting
- **CSpell** for spellchecking
- **Vitest** for testing with a Jest-like API
- **pnpm** as the package manager
- **Husky** + **lint-staged** for fast, staged-only checks before each commit
- Optimized for usage in **VS Code Dev Containers**

---

## 🛠️ Requirements

To use this setup, you'll need:

1. **Docker Desktop**
   - [Download Docker](https://www.docker.com/products/docker-desktop/)
   - Ensure Docker is running.

2. **Visual Studio Code**
   - [Download VS Code](https://code.visualstudio.com/)

3. **Dev Containers Extension**
   - [Dev Containers (Official Extension)](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
   - Install this in your VS Code.

---

## 🧑‍💻 Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/dev-container-typescript.git
cd dev-container-typescript
```

### Step 2: Open in VS Code

Launch **VS Code** and open the project folder. Then:

1. Press `F1` or `Cmd+Shift+P` (Mac) / `Ctrl+Shift+P` (Windows/Linux)
2. Select **Dev Containers: Reopen in Container**
3. VS Code will build the Docker container and open the workspace inside it

That’s it — you’re now running inside a fully configured TypeScript dev environment!

---

## 🧼 Linting, Formatting, and Spellcheck

This project uses **Husky** and **lint-staged** to enforce standards on every commit:

- ESLint (`pnpm lint:fix`) checks for code quality and auto-fixes where possible
- Prettier (`pnpm lint:format-fix`) formats code and docs consistently
- CSpell (`pnpm lint:spellcheck`) catches spelling mistakes
- TypeScript (`pnpm lint:type-check`) ensures strict type safety

Only **staged files** are checked during commits to keep things fast.

---

## 📖 Notes

- This project is not currently configured for GitHub Codespaces. If you'd like to add support, you'll need to include a `devcontainer.json` or `.devcontainer.json` in your repository root.
- If you run into issues related to file paths inside the container, make sure your `eslint.config.mjs` and `tsconfig.json` have correct relative paths and dev container compatibility settings.

---

Feel free to fork this and use it as a **template for new TypeScript projects** with modern tooling and a reproducible development environment.
