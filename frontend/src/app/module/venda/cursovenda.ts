import { Curso } from "../curso/curso";


export interface CursoVenda {
    id:number;
    curso: Curso;
    vendaId: number;
    quantidade:number;
    valor:number;
}
