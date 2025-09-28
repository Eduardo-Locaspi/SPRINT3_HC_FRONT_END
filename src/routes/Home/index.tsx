

export default function Principal() {
  return (
    <main className="flex flex-col items-center gap-8 p-6 bg-white flex-1">
      {/* Duas divs lado a lado em telas md+ e empilhadas no mobile */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="flex-1 p-6 bg-gray-200 rounded-md shadow h-60"></div>
        <div className="flex-1 p-6 bg-gray-200 rounded-md shadow h-60"></div>
      </div>

      <button className="bg-red-700 text-white px-6 py-3 rounded-md shadow hover:border-black ">
        Confira os nossos produtos
      </button>
    </main>)
    }