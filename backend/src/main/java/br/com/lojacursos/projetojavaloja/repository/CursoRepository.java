package br.com.lojacursos.projetojavaloja.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.lojacursos.projetojavaloja.model.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long>{
	
	List<Curso> findByLinguagemContaining(String linguagem);
	List<Curso> findByIdiomaContaining(String idioma);
	
}
