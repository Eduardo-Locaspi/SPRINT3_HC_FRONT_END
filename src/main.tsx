import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Home from './routes/Home/index.tsx'
import Desenvolvedores from './routes/Desenvolvedores/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import ProdutoChatbot from './routes/ProdutoDetalhe/Chatbot/index.tsx'
import ProdutoDashboard from './routes/ProdutoDetalhe/Dashboard/index.tsx'
import Sobre from './routes/Sobre/index.tsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {path:'/', element:<Home/>},
    {path:'/integrantes', element:<Desenvolvedores/>},
    {path:'/produtos', element:<Produtos/>},
    {path:'/produtos/dashboard', element:<ProdutoDashboard />},
    {path:'/produtos/chatbot', element:<ProdutoChatbot />},
    {path:'/sobre', element:<Sobre/>}
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
