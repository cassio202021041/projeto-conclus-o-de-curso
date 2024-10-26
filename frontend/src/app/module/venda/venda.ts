import { Aluno } from "../aluno/aluno";
import { CursoVenda } from "./cursovenda";


export interface Venda {
    id: number;
    dia_venda:string;
    valor:number;
    aluno:Aluno;
    cursoVendas: CursoVenda[];
}
