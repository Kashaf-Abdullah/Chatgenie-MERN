# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Environment setup

Create a `.env` file in this directory using `.env.example` as a template. Set
`VITE_SERVER_URL` to your backend URL (the app defaults to the deployed Chatgenie
backend when this is unset). For local development, set `GEMINI_API_KEY` in
`backend/.env`; Gemini requests are sent through the backend so the key is not
exposed in the browser.

For the deployed frontend, set `VITE_SERVER_URL` to
`https://chatgenie-mern.vercel.app` in the frontend host's environment variables,
then redeploy.

For the deployed backend, add `GEMINI_API_KEY` to the backend project's
environment variables in Vercel and enable it for **Production** (and Preview
if needed). Redeploy the backend after saving it. Do not add the key to the
frontend project or prefix it with `VITE_`, because frontend variables are
bundled into browser code. A missing backend key causes `/api/chat/generate` to
return `503` with a “Gemini API key is not configured” message.
The backend defaults to `gemini-3.5-flash-lite`. If `GEMINI_MODEL` is set in
Vercel, update it to this model or remove the override to use the default.

Restart the relevant local server after changing local environment variables.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
