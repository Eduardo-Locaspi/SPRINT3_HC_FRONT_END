import { Link } from "react-router-dom";
import imgDashboard from '../../assets/img/quadroDashboard.png'
import imgChatbot from '../../assets/img/imgChatbot.png'




export default function Solucao(){

    return(
        <main className="p-10">
            <h1 className="text-center text-5xl p-10 underline">Produtos</h1>
            <div className="flex flex-col gap-8">
                <section className="bg-gray-200 rounded-md p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                   
                        <img src={imgChatbot} alt="" className="w-60 items-center justify-center"/>
                   
                    <div className="">
                        <h2 className="text-2xl font-semibold mb-2">SOPHIE</h2>
                        <p className="text-gray-700 mb-5">
                            Sophie é um assistente virtual que simplifica tarefas complexas do dia a dia do paciente.
                            Ela permite marcar e lembrar consultas, enviar documentos para médicos e acessar funcionalidades essenciais de forma prática.<br/>
                            Graças à integração com WhatsApp e Telegram, o contato se torna rápido, humano e acessível, economizando tempo e garantindo uma experiência muito mais amigável.
                        </p>
                    
                        <Link to="/produtos/chatbot" className="bg-red-500 px-4 py-2 rounded-md text-white hover:underline text-center">Ver detalhes </Link>
                    </div>
                </section>

                {/* DashTech */}
                <section className="bg-gray-200 rounded-md p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                    
                        <img src={imgDashboard} alt="Amostra do DashTech" className="w-60 items-center justify-center" />
                    
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">DASHTECH</h2>
                        <p className="text-gray-700 mb-5">
                            O DashTech é um painel inteligente que reúne estatísticas de navegação do site do Hospital das Clínicas.
    Ele mostra, por exemplo, as áreas mais clicadas e as perguntas mais frequentes no chatbot, ajudando a equipe a criar campanhas segmentadas para cada perfil de paciente.<br/>
                            Além disso, oferece exportação de relatórios em PDF, CSV e XLSX, facilitando a análise e a tomada de decisões estratégicas.
                        </p>
                        <Link to="/produtos/dashboard" className="bg-red-500 px-4 py-2 rounded-md text-white hover:underline text-center">Ver detalhes</Link>
                    </div>
                </section>  
            </div>
        </main>
    )
}