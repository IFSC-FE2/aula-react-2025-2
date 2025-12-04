import { useNavigate } from "react-router"

const AdicionarReceita = () => {

    const navegar = useNavigate()

    return (
        <div className="container">
            <h1>Adicionando nova receita</h1>
            <button 
                className="btn btn-primary"
                onClick={() => navegar('/')}
            >
                Voltar para a página principal
            </button>
        </div>
    )
}

export default AdicionarReceita