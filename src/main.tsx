import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.tsx'
import { HashRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from '@/components/theme-provider.tsx'
// import About from './About'
// import Contact from './Contact'
// import Services from './Services'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <HashRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} /> */}
          {/* Puedes agregar más rutas aquí según lo necesites */}
        </Routes>
      </StrictMode>
    </HashRouter>
  </ThemeProvider>
)
