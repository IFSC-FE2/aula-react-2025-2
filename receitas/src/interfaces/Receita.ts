export interface IReceita {
  id: number;
  nome: string;
  ingredientes: string[];
  instrucoes: string[];
  imagem?: string;
}
