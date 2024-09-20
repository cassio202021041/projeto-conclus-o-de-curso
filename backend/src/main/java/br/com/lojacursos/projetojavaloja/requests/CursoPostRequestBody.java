package br.com.lojacursos.projetojavaloja.requests;

import javax.validation.constraints.NotEmpty;
import lombok.Data;
@Data
public class CursoPostRequestBody {

	@NotEmpty(message = "Curso não pode estar vazio.")
	private String linguagem;
	private String idioma;
	private int ano;
	private int quantidade;
	private float valor;
	private String imagem;
}
