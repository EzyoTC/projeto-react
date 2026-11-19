import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cabecalho from '../Cabecalho'
import Rodape from '../Rodape'
import HomePage from '../pages/homepage'
import ServicosPage from '../pages/servicospage'
import SobreNosPage from '../pages/sobrenospage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/sobrenos" element={<SobreNosPage />} />
        </Routes>
      </main>
      <Rodape />
    </BrowserRouter>
  )
}

export default App
