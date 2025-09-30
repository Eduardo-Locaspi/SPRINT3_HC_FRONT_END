import imgChatbot from '../../assets/img/imgChatbot2.png'
import imgDashboard from '../../assets/img/dashboard.png'

import { useNavigate } from "react-router-dom";


export default function Principal() {
  const navigate = useNavigate()

  return (
    <main className="flex flex-col items-center gap-8 p-6 bg-white flex-1">
      
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="flex-1 p-6 bg-gray-200 rounded-md shadow h-60">
          <img
            src={imgChatbot}
            alt="Imagem do Chatbot Sophi"
            className="w-32 h-32 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2 hover:underline">Chatbot Sophie</h2>
        </div>

        <div className="flex-1 p-6 bg-gray-200 rounded-md shadow h-60">
          <img
            src={imgDashboard}   
            alt="Imagem do Dashboard DashTech"
            className="w-32 h-32 object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2 hover:underline">DashTech</h2>
        </div>
      </div>

      <button onClick={()=> navigate('/produtos')} className="bg-red-700 text-white px-6 py-3 rounded-md shadow hover:underline " >
         Confira os nossos produtos
      </button>
    </main>
  )
}