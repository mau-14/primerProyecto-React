import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style.css'
import { TodoApp } from './components/TodoApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <TodoApp></TodoApp>
  </StrictMode>,
)
