package br.com.lojacursos.projetojavaloja.service;

import org.springframework.web.server.ResponseStatusException;

import br.com.lojacursos.projetojavaloja.model.Aluno;
import br.com.lojacursos.projetojavaloja.repository.AlunoRepository;
import br.com.lojacursos.projetojavaloja.requests.AlunoPostRequestBody;
import br.com.lojacursos.projetojavaloja.requests.AlunoPutRequestBody;
import lombok.RequiredArgsConstructor;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AlunoService {
	private final AlunoRepository alunoRepository;

	public List<Aluno> listAll() {
    	return alunoRepository.findAll();
    }
	
	public Aluno findByIdOrThrowBadRequestException(long id) {
        return alunoRepository.findById(id)
        		.orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Aluno Não encontrado"));
 	    }
	
	public Aluno findByCpf(String cpf) {
    	return alunoRepository.findByCpf(cpf);
    }
    
	public Aluno save(AlunoPostRequestBody alunoPostRequestBody) {
		
		Aluno alunoExistente = alunoRepository.findByCpf(alunoPostRequestBody.getCpf());
		if(alunoExistente != null) {
			new ResponseStatusException(HttpStatus.BAD_REQUEST, "CPF já cadastrado");
		}
    	return alunoRepository.save(Aluno.builder()
    			.nome(alunoPostRequestBody.getNome())
    			.cpf(alunoPostRequestBody.getCpf())
    			.build());
    }

	public void delete(long id) {
		alunoRepository.delete(findByIdOrThrowBadRequestException(id));
		
	}

	public void replace(AlunoPutRequestBody alunoPutRequestBody) {
        Aluno savedAluno = findByIdOrThrowBadRequestException(alunoPutRequestBody.getId());
        Aluno alunoExistente = alunoRepository.findByCpf(alunoPutRequestBody.getCpf());
		if(alunoExistente != null) {
			new ResponseStatusException(HttpStatus.BAD_REQUEST, "CPF já cadastrado");
		}else {
			
        Aluno aluno = Aluno.builder()
                .id(savedAluno.getId())
                .nome(alunoPutRequestBody.getNome())
                .cpf(alunoPutRequestBody.getCpf()) 
                .build();

        alunoRepository.save(aluno);
		}
    }
	     
	    
}
