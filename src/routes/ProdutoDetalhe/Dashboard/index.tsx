import { Link } from 'react-router-dom';
import imgDashboard from '../../../assets/img/dashboard1.png'

export default function ProdutoDashboard() {
  return (
    <main className="flex flex-col gap-12 px-8 py-12">
      
      <section className="text-center">
        <img
          src={imgDashboard}
          alt="Imagem do painel DashTech"
          className="h-90 mx-auto mb-6 rounded-md"
        />
        <h1 className="text-5xl font-bold mb-4 text-red-700">DashTech</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          O <span className="font-semibold">DashTech</span> é um painel
          inteligente que reúne estatísticas e relatórios do Hospital das
          Clínicas, auxiliando a equipe na tomada de decisões estratégicas.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-gray-100 rounded-md shadow">
          <h2 className="text-2xl font-semibold mb-2">📊 Estatísticas</h2>
          <p className="text-gray-600">
            Veja quais áreas do site são mais acessadas e quais dúvidas os
            pacientes mais têm.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-md shadow">
          <h2 className="text-2xl font-semibold mb-2">📈 Insights</h2>
          <p className="text-gray-600">
            Gere relatórios estratégicos para campanhas personalizadas.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-md shadow">
          <h2 className="text-2xl font-semibold mb-2">📂 Exportação</h2>
          <p className="text-gray-600">
            Exporte relatórios em PDF, CSV e XLSX para análise detalhada.
          </p>
        </div>
      </section>

      <section className="text-center">
        <Link to="/produtos" className='bg-red-700 text-white px-8 py-3 rounded-md hover:bg-red-800'>Voltar</Link>
      </section>
    </main>
  );
}
