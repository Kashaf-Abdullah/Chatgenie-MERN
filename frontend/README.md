# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Environment setup

Create a `.env` file in this directory using `.env.example` as a template. Set
`VITE_SERVER_URL` to your backend URL (the app defaults to the deployed Chatgenie
backend when this is unset) and set `VITE_GEMINI_API_KEY` to your Gemini API key.
Restart the Vite dev server after changing environment variables. Vite exposes
`VITE_` variables in the browser bundle, so do not put a private API key here in
production; proxy Gemini requests through the backend instead.

For the deployed frontend, set `VITE_SERVER_URL` to
`https://chatgenie-mern.vercel.app` in the frontend host's environment variables,
then redeploy.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
