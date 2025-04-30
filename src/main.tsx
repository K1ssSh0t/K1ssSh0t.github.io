import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from '@/components/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <HashRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          {/* Add more routes here as needed */}
          {/* Example: <Route path="/about" element={<About />} /> */}

        </Routes>
      </StrictMode>
    </HashRouter>
  </ThemeProvider>
)
