package br.com.lojacursos.projetojavaloja.requests;

import lombok.Data;

@Data
public class AlunoPostRequestBody {
    private String nome;
    private String cpf;
    private String email;  // novo campo
    private String senha;  // novo campo
}
