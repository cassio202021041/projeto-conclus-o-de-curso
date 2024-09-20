package br.com.lojacursos.projetojavaloja.requests;

import java.time.LocalDate;
import java.util.List;

import br.com.lojacursos.projetojavaloja.model.CursoVenda;
import br.com.lojacursos.projetojavaloja.model.Aluno;
import lombok.Data;

@Data
public class VendaPutRequestBody {
	private Long id;
	private LocalDate dia_venda;
	private float valor;
	private Aluno aluno;
	private List<CursoVenda> cursoVendas; 
}