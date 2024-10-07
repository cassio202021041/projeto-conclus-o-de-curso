package br.com.lojacursos.projetojavaloja.service;

import org.springframework.web.server.ResponseStatusException;

import br.com.lojacursos.projetojavaloja.model.Aluno;
import br.com.lojacursos.projetojavaloja.model.Aluno.AlunoBuilder;
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
		if (alunoExistente != null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "CPF já cadastrado");
		}
		
		return alunoRepository.save(((AlunoBuilder) Aluno.builder()
				.nome(alunoPostRequestBody.getNome())
				.cpf(alunoPostRequestBody.getCpf()))
				.email(alunoPostRequestBody.getEmail())  // mapeando email
				.senha(alunoPostRequestBody.getSenha())  // mapeando senha
				.build());
	}
	public void delete(long id) {
		alunoRepository.delete(findByIdOrThrowBadRequestException(id));
		
	}

	public void replace(AlunoPutRequestBody alunoPutRequestBody) {
		Aluno savedAluno = findByIdOrThrowBadRequestException(alunoPutRequestBody.getId());
		
		Aluno aluno = Aluno.builder()
				.id(savedAluno.getId())
				.nome(alunoPutRequestBody.getNome())
				.cpf(alunoPutRequestBody.getCpf())
				.email(alunoPutRequestBody.getEmail())  // mapeando email
				.senha(alunoPutRequestBody.getSenha())  // mapeando senha
				.build();
		
		alunoRepository.save(aluno);
	}
	
    }
	
	     
	    

