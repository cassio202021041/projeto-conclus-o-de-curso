package br.com.lojacursos.projetojavaloja.requests;

import java.time.LocalDate;
import java.util.List;

import br.com.lojacursos.projetojavaloja.model.Aluno;
import br.com.lojacursos.projetojavaloja.model.CursoVenda;

import lombok.Data;

@Data
public class VendaPostRequestBody {
	private float valor;
	private LocalDate dia_venda;
	private Aluno aluno;
	private List<CursoVenda> cursoVendas; 
}

