interface ItemCabecalhoProps {
    texto: string,
    link: string
}

const ItemCabecalho = ({ texto, link }: ItemCabecalhoProps) => {

    return (<li className="nav-item">
        <a className="nav-link text-light" aria-current="page" href={link}>{texto}</a>
    </li>)
}

export default ItemCabecalho