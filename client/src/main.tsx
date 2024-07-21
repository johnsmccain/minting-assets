import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from './store/provider.tsx'
import { ThemeProvider } from "./components/theme-provider"
import {BrowserRouter} from "react-router-dom"
import { Toaster } from './components/ui/toaster.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Provider>
          <App />
          <Toaster />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
