package br.com.lojacursos.projetojavaloja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.lojacursos.projetojavaloja.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long>{

	Aluno findByCpf(String cpf);
	
}
