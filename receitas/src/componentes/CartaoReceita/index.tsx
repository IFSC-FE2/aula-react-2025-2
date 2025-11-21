import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Avaliacao from "../Avaliacao";

interface CartaoReceitaProps {
  id: number
  nome: string
  ingredientes: {
    nome: string
    quantidade: number
    medida: string
  }[]
  instrucoes: string[]
  imagem?: string
  aoDeletar: (id: number) => void
}

const CartaoReceita = ({ id, nome, ingredientes, instrucoes, imagem, aoDeletar }: CartaoReceitaProps) => {

  return (
    <article className="card rounded col-6 shadow">
      <div className="card-img-top">
        <img className="card-img" src={imagem} alt="" />
      </div>
      <div className="text-center">
        <h2 className="fw-bold display-6">{nome}</h2>
      </div>
      <div className="card-body">
        <h3>Ingredientes</h3>
        <ul>
          {ingredientes.map(ingrediente => (
            <li>{ingrediente.nome} ({ingrediente.quantidade} {ingrediente.medida})</li>
          ))}
        </ul>
        <h3>Como fazer</h3>
        <ol>
          {instrucoes.map(instrucao => (
            <li>{instrucao}</li>
          ))}
        </ol>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <Avaliacao />
        <div>
          <button className="border-0 bg-transparent" data-bs-toggle="modal" data-bs-target={`#${id}`} onClick={() => { }}>
            <FaEdit />
          </button>
          <button className="border-0 bg-transparent" onClick={() => aoDeletar(id)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </article>
  )
}

export default CartaoReceita