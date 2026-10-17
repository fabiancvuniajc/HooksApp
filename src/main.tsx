import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { MemoHook } from './memos/MemoHook';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemoHook />
  </StrictMode>,
);
