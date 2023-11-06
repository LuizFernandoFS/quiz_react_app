import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Pergunta } from './components/Pergunta.tsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <App />
  },
  {
    path: "perguntas",
    element: <Pergunta />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
