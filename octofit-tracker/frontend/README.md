# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Environment variables

Copy `.env.example` to `.env.local` and set `VITE_CODESPACE_NAME` to your GitHub Codespace name
(e.g. the value of the `CODESPACE_NAME` environment variable). The app uses it to build the
logic-tier API base URL: `https://${VITE_CODESPACE_NAME}-8000.app.github.dev`. If unset, the app
falls back to `http://localhost:8000`.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
