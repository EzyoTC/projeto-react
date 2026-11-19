import { Link, NavLink } from "react-router-dom"
import "./style.css"

export default function Cabecalho() {
    return (
        <header>
            <Link to="/">Contabilidade Simples</Link>

            <nav>
                <NavLink to="/servicos">Serviços</NavLink>
                <NavLink to="/sobrenos">Sobre Nós</NavLink>
            </nav>
        </header>
    )
}