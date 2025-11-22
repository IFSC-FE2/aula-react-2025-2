import { Fragment, useContext, useState } from "react"
import CartaoReceita from "../CartaoReceita"
import "./style.css"
import Formulario from "../Formulario"
import type { IReceita } from "../../interfaces/Receita"
import { v4 as uuidv4 } from 'uuid';
import { ReceitaContext } from "../../contextos/ReceitaContext"

const Corpo = () => {

  const { receitas, setReceitas } = useContext(ReceitaContext)

  function aoDeletar(id: number) {
    setReceitas(receitas.filter(receita => receita.id !== id))
  }

  const aoEditar = (receita: IReceita) => {
    setReceitas(receitas.map(r => (r.id === receita.id ? receita : r)))
  }

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