import { Link } from "react-router"

interface ItemCabecalhoProps {
    texto: string,
    link: string
}

const ItemCabecalho = ({ texto, link }: ItemCabecalhoProps) => {

    return (<li className="nav-item">
        <Link className="nav-link text-light" to={link}>{texto}</Link>
    </li>)
}

export default ItemCabecalho