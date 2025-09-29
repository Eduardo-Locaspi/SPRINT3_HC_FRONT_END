

export default function Solucao(){

    return(
        <main className="p-10">
            <h1 className="text-center text-5xl p-10 underline">Produtos</h1>
            <div className="flex flex-col gap-8">
            {/* Card Sophi */}
            <section className="bg-gray-200 rounded-md p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                    <div className="w-40 h-40 bg-gray-400 flex items-center justify-center">
                        IMAGEM DA SOPHIE
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">SOPHIE</h2>
                    <p className="text-gray-700">
                        Sophie é um assistente virtual que simplifica tarefas complexas do dia a dia do paciente.
                        Ela permite marcar e lembrar consultas, enviar documentos para médicos e acessar funcionalidades essenciais de forma prática.
                    </p>
                    <p >
                        Graças à integração com WhatsApp e Telegram, o contato se torna rápido, humano e acessível, economizando tempo e garantindo uma experiência muito mais amigável.
                    </p>
                </div>
            </section>

            {/* DashTech */}
            <section className="bg-gray-200 rounded-md p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div>
                    <div className="w-40 h-40 bg-gray-400 flex items-center justify-center">
                        IMAGEM DO DASHTECH
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">DASHTECH</h2>
                    <p className="text-gray-700">
                        O DashTech é um painel inteligente que reúne estatísticas de navegação do site do Hospital das Clínicas.
Ele mostra, por exemplo, as áreas mais clicadas e as perguntas mais frequentes no chatbot, ajudando a equipe a criar campanhas segmentadas para cada perfil de paciente.
                    </p>
                    <p>
                        Além disso, oferece exportação de relatórios em PDF, CSV e XLSX, facilitando a análise e a tomada de decisões estratégicas.
                    </p>
                </div>
            </section>
            </div>
        </main>
    )
}