# Dottequir Site

Site React publicado com Vite e GitHub Pages.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Publicacao

Cada push na branch `main` executa automaticamente o workflow de deploy em
`.github/workflows/deploy.yml`.

No repositorio do GitHub, abra **Settings > Pages** e selecione **GitHub Actions**
como fonte de build. O site sera publicado em:

https://diogoottequir.github.io/dottequirSite/

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
