
import Cabecalho from "./components/Cabecalho"
import Navegacao from "./components/Navegacao"



export default function App() {
  // const [message,setMessage] = useState("Olá Mundo")
  //message -> é a valor -> "Olá Mundo"
  //setMessage -> é a função para alterar o valor

  return(
    <div className="w-screen h-screen p-4 flex flex-col justify-center">
      <Cabecalho/>
      <Navegacao/>
      
    </div>

  )
}
