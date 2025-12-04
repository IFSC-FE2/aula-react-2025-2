import React, { createContext, useEffect, useState } from "react";
import type { IReceita } from "../interfaces/Receita";

import receitasJson from "../json/receitas.json"

interface ReceitaProviderProp {
    children: React.ReactNode
}

interface IReceitaContext {
    receitas: IReceita[]
    setReceitas: React.Dispatch<React.SetStateAction<IReceita[]>>
}

const ReceitaContext = createContext<IReceitaContext>({
    receitas: [],
    setReceitas: () => { },
})

const ReceitaProvider = ({ children }: ReceitaProviderProp) => {

    const [receitas, setReceitas] = useState<IReceita[]>([])

    // useEffect(() => {
    //     const carregarReceitas = async () => {
    //         try {
    //             const respostas = await fetch('http://localhost:3000/receitas')
    //             const dados = await respostas.json();
    //             setReceitas(dados)
    //         }
    //         catch (e) {
    //             console.error('Erro ao carregar receitas: ', e)
    //             setReceitas(receitasJson.receitas)
    //         }
    //     }
    //     carregarReceitas()
    // }, [])

    useEffect(() => {
        const carregarReceitas = async () => {
            try {
                const respostas = await fetch('https://dummyjson.com/recipes')
                const dados = await respostas.json();
                const receitasCarregadas = dados['recipes'].map((receita: any) => ({
                    id: receita.id,
                    nome: receita.name,
                    ingredientes: receita.ingredients,
                    instrucoes: receita.instructions,
                    imagem: receita.image
                }))
                // console.log(receitasCarregadas)
                setReceitas(receitasCarregadas)
            }
            catch (e) {
                console.error('Erro ao carregar receitas: ', e)
                setReceitas(receitasJson.receitas)
            }
        }
        carregarReceitas()
    }, [])

    return (
        <ReceitaContext.Provider value={{ receitas, setReceitas, }}>
            {children}
        </ReceitaContext.Provider>
    )
}

export { ReceitaContext, ReceitaProvider }