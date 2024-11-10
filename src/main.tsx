import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound.tsx'
import Layer from './pages/Layer.tsx'

const Home =lazy(()=> import('./pages/App.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layer />}>
          <Route index element={<Home/>}/>
          <Route path='*' element={<Notfound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
