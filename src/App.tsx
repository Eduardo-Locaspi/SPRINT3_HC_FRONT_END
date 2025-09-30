
import Cabecalho from "./components/Cabecalho"
import Navegacao from "./components/Navegacao"

import Rodape from "./components/Rodape"

import { Outlet } from "react-router-dom"


export default function App() {

  return(
    <div className="w-screen h-screen  flex flex-col ">
      <Cabecalho/>
      <Navegacao/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}
