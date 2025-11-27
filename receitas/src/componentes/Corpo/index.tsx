import { Fragment, useContext } from "react"
import CartaoReceita from "../CartaoReceita"
import "./style.css"
import Formulario from "../Formulario"
import { v4 as uuidv4 } from 'uuid';
import { ReceitaContext } from "../../contextos/ReceitaContext"
import useReceitas from "../../hooks/useReceitas";

const Corpo = () => {

  const { receitas } = useContext(ReceitaContext)
  const { aoDeletar, aoEditar } = useReceitas()

  return (
    <ul>
      <div className="d-flex justify-content-center gap-3">
        {receitas.map(receita => (
          <Fragment key={uuidv4()}>
            <CartaoReceita
              id={receita.id}
              nome={receita.nome}
              ingredientes={receita.ingredientes}
              instrucoes={receita.instrucoes}
              imagem={receita.imagem}
              aoDeletar={aoDeletar}
            />
            <Formulario
              receita={receita}
              aoEditar={aoEditar}
            />
          </Fragment>
        ))}
      </div>
    </ul>
  )
}

export default Corpo