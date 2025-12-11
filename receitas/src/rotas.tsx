import { BrowserRouter, Route, Routes } from "react-router";
import Cabecalho from "./componentes/Cabecalho/index.tsx";
import { ReceitaProvider } from "./contextos/ReceitaContext.tsx";
import Home from "./paginas/Home/Home.tsx";
import AdicionarReceita from "./paginas/AdicionarReceita/index.tsx";

function App() {
  return (
    <BrowserRouter>
      <ReceitaProvider>
        <Cabecalho texto="Receitas da Vovó" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adicionar" element={<AdicionarReceita />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </ReceitaProvider>
    </BrowserRouter>
  );
}

export default App;
