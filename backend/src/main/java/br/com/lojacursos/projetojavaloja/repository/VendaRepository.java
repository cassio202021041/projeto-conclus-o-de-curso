package br.com.lojacursos.projetojavaloja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.lojacursos.projetojavaloja.model.Venda;

public interface VendaRepository extends JpaRepository<Venda, Long>{
	
}
