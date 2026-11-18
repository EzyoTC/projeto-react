import './App.css'
import Cabecalho from './components/Cabecalho'
import { Rodape } from './components/Rodape'
import Homepage from '../pages/Homepage'

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Homepage />
      </main>
      <Rodape />
    </>
  )
}

export default App
