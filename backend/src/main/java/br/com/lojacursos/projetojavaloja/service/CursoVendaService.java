package br.com.lojacursos.projetojavaloja.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import br.com.lojacursos.projetojavaloja.model.Curso;
import br.com.lojacursos.projetojavaloja.model.CursoVenda;
import br.com.lojacursos.projetojavaloja.repository.CursoVendaRepository;
import br.com.lojacursos.projetojavaloja.requests.CursoVendaPostRequestBody;
import br.com.lojacursos.projetojavaloja.requests.CursoVendaPutRequestBody;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CursoVendaService {
	
private final CursoVendaRepository cursoVendaRepository;
private final CursoService cursoService;
    
    public List<CursoVenda> listAll() {
    	return cursoVendaRepository.findAll();
    }
    
    
    public CursoVenda findByIdOrThrowBadRequestException(long id) {
        return cursoVendaRepository.findById(id)
        		.orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Curso Não encontrada"));
 	    }
    
    @Transactional
    public CursoVenda save(CursoVendaPostRequestBody cursoVendaPostRequestBody) {
    	Long cursoId = cursoVendaPostRequestBody.getCurso().getId();
    	Curso cursoBanco = cursoService.findByIdOrThrowBadRequestException(cursoId);
    	
    	return cursoVendaRepository.save(CursoVenda.builder()
    			.curso(cursoBanco)
                .quantidade(cursoVendaPostRequestBody.getQuantidade())
                .valor(cursoBanco.getValor())
                .venda(cursoVendaPostRequestBody.getVenda())
    			.build());
    }

	public void delete(long id) {
		cursoVendaRepository.delete(findByIdOrThrowBadRequestException(id));
		
	}
	
	public void replace(CursoVendaPutRequestBody cursoVendaPutRequestBody) {
        CursoVenda savedCurso = findByIdOrThrowBadRequestException(cursoVendaPutRequestBody.getId());
        CursoVenda curso = CursoVenda.builder()
                .id(savedCurso.getId())
                .curso(savedCurso.getCurso())
                .quantidade(cursoVendaPutRequestBody.getQuantidade())
                .valor(savedCurso.getValor())
                .build();

        cursoVendaRepository.save(curso);
    }
}
