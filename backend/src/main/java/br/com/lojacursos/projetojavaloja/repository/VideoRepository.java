package br.com.lojacursos.projetojavaloja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.lojacursos.projetojavaloja.model.Video;

public interface VideoRepository extends JpaRepository<Video, Long> {
}