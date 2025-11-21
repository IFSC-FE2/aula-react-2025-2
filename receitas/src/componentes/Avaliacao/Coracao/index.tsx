import { FaHeart, FaRegHeart } from "react-icons/fa";

interface CoracaoProps {
    selecionado: boolean
    aoSelecionar: () => void
}

const Coracao = ({ selecionado, aoSelecionar }: CoracaoProps) => {

    return (<button className="border-0 bg-transparent" onClick={aoSelecionar}>
        {selecionado ? 
            <FaHeart color={'red'}/> : 
            <FaRegHeart color="red"/>
        }        
    </button>)
}

export default Coracao