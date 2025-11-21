import { useState } from "react"
import type { IReceita } from "../../interfaces/Receita"

interface FormularioProps {
  receita: IReceita
  aoEditar: (receita: IReceita) => void
}

const Formulario = ({ receita, aoEditar }: FormularioProps) => {

  const [receitaAtual, setReceitaAtual] = useState(receita)

  return (
    <div className="modal fade" id={`${receita.id}`} tab-index="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <form className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{receita.nome}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <label htmlFor={`${receita.nome}`}>Nome</label>
            <input
              id={receita.nome}
              type="text"
              value={receitaAtual.nome}
              onChange={e => setReceitaAtual({ ...receita, nome: e.target.value })}
            />
            <h2>Ingredientes</h2>
            <ul>
              {receita.ingredientes.map(ingrediente => (
                <li>
                  <input type="text" value={ingrediente.nome} />
                  <input type="number" value={ingrediente.quantidade} />
                  <input type="text" value={ingrediente.medida} />
                </li>
              )
              )}
            </ul>
            <h2>Modo de preparo</h2>
            <ol>
              {receita.instrucoes.map(instrucao => (
                <li>
                  <input 
                    type="text" 
                    value={instrucao} 
                    // onChange={}  
                  />
                </li>
              ))}
            </ol>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => { aoEditar(receitaAtual) }}
              data-bs-dismiss="modal"
            >Salvar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Formulario