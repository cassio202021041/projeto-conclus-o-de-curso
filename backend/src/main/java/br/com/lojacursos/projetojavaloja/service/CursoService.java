package br.com.lojacursos.projetojavaloja.service;

import org.springframework.web.server.ResponseStatusException;

import br.com.lojacursos.projetojavaloja.model.Curso;
import br.com.lojacursos.projetojavaloja.repository.CursoRepository;
import br.com.lojacursos.projetojavaloja.requests.CursoPostRequestBody;
import br.com.lojacursos.projetojavaloja.requests.CursoPutRequestBody;
import lombok.RequiredArgsConstructor;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CursoService {
	

	private final CursoRepository cursoRepository;
    
	public List<Curso> listAll() {
    	return cursoRepository.findAll();
    }
    
	public List<Curso> findByLinguagem(String linguagem) {
    	return cursoRepository.findByLinguagemContaining(linguagem);
    }
    
	public List<Curso> findByIdiomaContaining(String idioma) {
    	return cursoRepository.findByIdiomaContaining(idioma);
    }
    
	public Curso findByIdOrThrowBadRequestException(long id) {
        return cursoRepository.findById(id)
        		.orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Curso Não encontrado"));
 	    }
    
    @Transactional
    public Curso save(CursoPostRequestBody cursoPostRequestBody) {
    	return cursoRepository.save(Curso.builder()
    			.linguagem(cursoPostRequestBody.getLinguagem())
    			.idioma(cursoPostRequestBody.getIdioma())
    			.ano(cursoPostRequestBody.getAno()) 
                .quantidade(cursoPostRequestBody.getQuantidade())
                .valor(cursoPostRequestBody.getValor())
                .imagem(cursoPostRequestBody.getImagem())
    			.build());
    }
    
    @Transactional
    public Curso saveExistingCurso(Curso curso) {
    	return cursoRepository.save(Curso.builder()
    			.linguagem(curso.getLinguagem())
    			.idioma(curso.getIdioma())
    			.ano(curso.getAno())
                .quantidade(curso.getQuantidade())
                .valor(curso.getValor())
                .imagem(curso.getImagem())
    			.build());
    }

    public void delete(long id) {
		cursoRepository.delete(findByIdOrThrowBadRequestException(id));
		
	}
	
    public void replace(CursoPutRequestBody cursoPutRequestBody) {
        Curso savedCurso = findByIdOrThrowBadRequestException(cursoPutRequestBody.getId());
        Curso curso = Curso.builder()
                .id(savedCurso.getId())
                .linguagem(cursoPutRequestBody.getLinguagem())
                .idioma(cursoPutRequestBody.getIdioma())
                /*.ano(cursoPutRequestBody.getAno()) */
                .quantidade(cursoPutRequestBody.getQuantidade())
                .valor(cursoPutRequestBody.getValor())
                .imagem(cursoPutRequestBody.getImagem())
                .build();

        cursoRepository.save(curso);
    }
	     
	    
}