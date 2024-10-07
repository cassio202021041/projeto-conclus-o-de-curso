package br.com.lojacursos.projetojavaloja.requests;

import lombok.Data;
import java.util.List;
import br.com.lojacursos.projetojavaloja.model.Venda;

@Data
public class AlunoPutRequestBody {
    private Long id;
    private String nome;
    private String cpf;
    private String email;  // novo campo
    private String senha;  // novo campo
    private List<Venda> vendas;
}
