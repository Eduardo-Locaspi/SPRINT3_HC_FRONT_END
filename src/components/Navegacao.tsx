import { Link } from "react-router-dom"

export default function Navegacao(){


    return ( //ideia -> centralizar items
        <nav className="w-full bg-red-700 text-white">
            <ul className="flex justify-center gap-20 font-medium py-3">
                <li><Link to='/'>HOME</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/integrantes">INTEGRANTES</Link></li>
            </ul>
        </nav>
    )
}