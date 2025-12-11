import { FaHeart, FaRegHeart } from "react-icons/fa";

interface CoracaoProps {
  selecionado: boolean;
  aoSelecionar: () => void;
}

const Coracao = ({ selecionado, aoSelecionar }: CoracaoProps) => {
  return (
    <button
      data-testid="coracao"
      className="border-0 bg-transparent"
      onClick={aoSelecionar}
    >
      {selecionado ? (
        <FaHeart data-testid="preenchido" color={"red"} />
      ) : (
        <FaRegHeart data-testid="vazado" color="blue" />
      )}
    </button>
  );
};

export default Coracao;
