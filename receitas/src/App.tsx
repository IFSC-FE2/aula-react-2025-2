import { ReceitaProvider } from "./contextos/ReceitaContext.tsx"
import Home from "./paginas/Home/Home.tsx"

function App() {

  return (
    <ReceitaProvider>
      <Home />
    </ReceitaProvider>
    )
}

export default App