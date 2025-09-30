import { Link } from 'react-router-dom';
import imgChatbot from '../../../assets/img/imgChatbot.png'

export default function ProdutoChatbot() {



  return (
    <main className="flex flex-col gap-12 px-8 py-12">
      <section className="text-center">
        <img
          src={imgChatbot}
          alt="Imagem da assistente virtual Sophie"
          className="w-48 h-48 mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold mb-4 text-red-700">Sophie</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A <span className="font-semibold">Sophie</span> é um chatbot
          inteligente que auxilia pacientes em tarefas do dia a dia como marcar
          consultas, enviar documentos e receber lembretes — tudo via WhatsApp
          e Telegram.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-gray-100 rounded-md shadow">
          <h2 className="text-2xl font-semibold mb-2">📅 Agendamento</h2>
          <p className="text-gray-600">
            Marque e acompanhe suas consultas de forma prática e rápida.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-md shadow">
          <h2 className="text-2xl font-semibold mb-2">📲 Integração</h2>
          <p className="text-gray-600">
            Totalmente integrada ao WhatsApp e Telegram para mais acessibilidade.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-md shadow">
          <h2 className="text-2xl font-semibold mb-2">⏰ Lembretes</h2>
          <p className="text-gray-600">
            Receba notificações importantes sem precisar acessar o sistema.
          </p>
        </div>
      </section>

      <section className="text-center">
        <Link to="/produtos" className='bg-red-700 text-white px-8 py-3 rounded-md hover:bg-red-800'>Voltar</Link>
      </section>
    </main>
  );
}