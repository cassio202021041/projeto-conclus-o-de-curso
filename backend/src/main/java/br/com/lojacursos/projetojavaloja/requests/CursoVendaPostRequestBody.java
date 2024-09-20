package br.com.lojacursos.projetojavaloja.requests;

import br.com.lojacursos.projetojavaloja.model.Curso;
import br.com.lojacursos.projetojavaloja.model.Venda;
import lombok.Data;

@Data
public class CursoVendaPostRequestBody {

	private Curso curso;
	private int quantidade;
	private float valor;
	private Venda venda;
	private long vendaId;

}
