package br.com.lojacursos.projetojavaloja.requests;

import br.com.lojacursos.projetojavaloja.model.Curso;
import lombok.Data;

@Data
public class CursoVendaPutRequestBody {
	
	private long id;
	private Curso curso;
	private int quantidade;
	private float valor;
	private long vendaId;
}
