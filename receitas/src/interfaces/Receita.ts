export interface IReceita {
  id: number
  nome: string
  ingredientes: {
    nome: string
    quantidade: number
    medida: string
  }[]
  instrucoes: string[]
  imagem?: string
}