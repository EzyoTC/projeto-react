import './style.css'

export default function Rodape() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Contabilidade Simples.</p>
            <p>Todos os direitos reservados.</p>
        </footer>
    )
}