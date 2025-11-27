import { useContext } from "react"
import { ReceitaContext } from "../contextos/ReceitaContext"
import type { IReceita } from "../interfaces/Receita"

const useReceitas = () => {

    const { receitas, setReceitas } = useContext(ReceitaContext)

    function aoDeletar(id: number) {
        setReceitas(receitas.filter(receita => receita.id !== id))
    }

    const aoEditar = (receita: IReceita) => {
        setReceitas(receitas.map(r => (r.id === receita.id ? receita : r)))
    }

    return { aoDeletar, aoEditar }
}

export default useReceitas