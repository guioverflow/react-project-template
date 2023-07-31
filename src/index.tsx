import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Elemento 'root' não encontrado.");
  
}

const root = ReactDOM.createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
