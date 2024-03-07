import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './i18n'; // Import your i18n configuration
import App from './App';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const root = ReactDOM.createRoot(document.getElementById('root') as any);
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);
