package br.com.lojacursos.projetojavaloja.requests;

import java.util.List;

import br.com.lojacursos.projetojavaloja.model.Venda;
import lombok.Data;

@Data
public class AlunoPutRequestBody {
	private Long id;
	private String nome;
	private String cpf;
	private List<Venda> vendas;
}

