import ItemCabecalho from "./ItemCabecalho";

interface CabecalhoProps {
  texto: string;
}

const Cabecalho = ({ texto }: CabecalhoProps) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          {texto}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <ItemCabecalho texto="Home" link="/" />
            <ItemCabecalho texto="Adicionar receita" link="/adicionar" />
            <ItemCabecalho texto="Sobre" link="#" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Cabecalho;
