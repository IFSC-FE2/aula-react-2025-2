import Cabecalho from "../../componentes/Cabecalho"
import Corpo from "../../componentes/Corpo"

function Home() {

    return (<>
        <Cabecalho texto="Receitas da Vovó" />
        <div className="container">
            <Corpo />
        </div>
    </>)
}

export default Home