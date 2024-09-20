package br.com.lojacursos.projetojavaloja.requests;

import lombok.Data;

@Data
public class CursoPutRequestBody {
	private Long id;
	private String linguagem;
	private String idioma;
	private int ano; 
	private int quantidade;
	private float valor;
	private String imagem;
}
