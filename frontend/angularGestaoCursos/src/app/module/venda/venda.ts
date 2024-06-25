import { Cliente } from "../cliente/cliente";
import { CursoVenda } from "./cursovenda";


export interface Venda {
    id: number;
    dia_venda:string;
    valor:string;
    cliente:Cliente;
    cursoVendas: CursoVenda[];
}
