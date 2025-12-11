import { useState } from "react";
import Coracao from "./Coracao";
import { v4 as uuidv4 } from "uuid";

const Avaliacao = () => {
  const numCoracoes = 5;
  const coracoes = [...Array(numCoracoes)];

  const [avaliacao, setAvaliacao] = useState(0);

  return (
    <div data-testid="avaliacao">
      {coracoes.map((_, i) => (
        <Coracao
          key={uuidv4()}
          selecionado={avaliacao > i}
          aoSelecionar={() => {
            setAvaliacao(i + 1);
          }}
        />
      ))}
    </div>
  );
};

export default Avaliacao;
