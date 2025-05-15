import './app.css'; // Correct path to app.css
import App from './App.svelte'; // Ensure App.svelte is in the same directory as main.js

const app = new App({
  target: document.getElementById('app'),
});

export default app;