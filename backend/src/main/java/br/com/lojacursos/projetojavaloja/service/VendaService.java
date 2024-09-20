package br.com.lojacursos.projetojavaloja.service;

import org.springframework.web.server.ResponseStatusException;

import br.com.lojacursos.projetojavaloja.model.Curso;
import br.com.lojacursos.projetojavaloja.model.CursoVenda;
import br.com.lojacursos.projetojavaloja.model.Aluno;
import br.com.lojacursos.projetojavaloja.model.Venda;
import br.com.lojacursos.projetojavaloja.repository.VendaRepository;
import br.com.lojacursos.projetojavaloja.requests.VendaPostRequestBody;
import br.com.lojacursos.projetojavaloja.requests.VendaPutRequestBody;
import lombok.RequiredArgsConstructor;
import br.com.lojacursos.projetojavaloja.requests.CursoVendaPostRequestBody;
import br.com.lojacursos.projetojavaloja.requests.CursoVendaPutRequestBody;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
public class VendaService {
	private final VendaRepository vendaRepository;
    private final AlunoService alunoService;
    private final CursoVendaService cursoVendaService;
    private final CursoService cursoService;
	   
	public List<Venda> listAll() {
    	return vendaRepository.findAll();
    }

	public Venda findByIdOrThrowBadRequestException(long id) {
        return vendaRepository.findById(id)
        		.orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Venda Não encontrada"));
 	    }

	public List<Venda> findVendasByAlunoId(long alunoId) {
		Aluno aluno = alunoService.findByIdOrThrowBadRequestException(alunoId);
		List<Venda> arrayDeVendas = aluno.getVendas();
		
		return arrayDeVendas;
	}

	@Transactional
	public Venda save(VendaPostRequestBody vendaPostRequestBody) {
	    Aluno alunoBanco = alunoService.findByIdOrThrowBadRequestException(vendaPostRequestBody.getAluno().getId());
	    
	    Venda venda = Venda.builder()
		        .dia_venda(LocalDate.now())
		        .valor(0)
		        .aluno(alunoBanco)
		        .build();

	    Venda savedVenda = vendaRepository.save(venda);
	    	
		List<CursoVenda> cursosBanco = new ArrayList<>();
		List<CursoVenda> cursosVenda = vendaPostRequestBody.getCursoVendas();
	    	 
	    for (CursoVenda cursoVenda : cursosVenda) {
    	        Curso cursoBanco = cursoService.findByIdOrThrowBadRequestException(cursoVenda.getCurso().getId());
    	        
    	        if (cursoBanco.getQuantidade() >= cursoVenda.getQuantidade()) {
    	            cursoBanco.setQuantidade(cursoBanco.getQuantidade() - cursoVenda.getQuantidade());
    	            cursoService.saveExistingCurso(cursoBanco);
    	        }
    	        else {
    	        	throw new RuntimeException("O curso "+cursoVenda.getCurso().getLinguagem()+" possui "+cursoBanco.getQuantidade()+" disponíveis.");
				}
    	        CursoVenda nova_curso_venda = new CursoVenda();
    	        nova_curso_venda.setCurso(cursoBanco);
    	        nova_curso_venda.setQuantidade(cursoVenda.getQuantidade());
    	        nova_curso_venda.setValor(cursoBanco.getValor());
    	        nova_curso_venda.setVenda(savedVenda);
    	        
    	        cursosBanco.add(nova_curso_venda);
	    }
	    savedVenda.setCursos(cursosBanco);
	    savedVenda.setValor(calcularValorVenda(savedVenda.getCursos()));
    	    
	    return vendaRepository.save(savedVenda);
	}

	public void delete(long id) {
		vendaRepository.delete(findByIdOrThrowBadRequestException(id));	
	}

	@Transactional
	public void replace(VendaPutRequestBody vendaPutRequestBody) {
	    Venda vendaSalva = findByIdOrThrowBadRequestException(vendaPutRequestBody.getId());
	    vendaSalva.setDia_venda(vendaPutRequestBody.getDia_venda());
	    
	    long id_aluno_atual = vendaSalva.getAluno().getId();
	    long id_novo_aluno = vendaPutRequestBody.getAluno().getId();
	    
	    if(id_aluno_atual != id_novo_aluno) {
	    	Aluno aluno_novo = alunoService.findByIdOrThrowBadRequestException(id_novo_aluno);
	    	vendaSalva.setAluno(aluno_novo);
	    }
	    
	    vendaRepository.save(vendaSalva);
	}

	     @Transactional
		public Venda adicionarCursosParaUmaVenda(CursoVendaPostRequestBody curso) {
			Long cursoId = curso.getCurso().getId();
		    Curso cursoBanco = cursoService.findByIdOrThrowBadRequestException(cursoId);

		    if(cursoBanco.getQuantidade() < curso.getQuantidade()) {
		    	throw new RuntimeException("O curso "+curso.getCurso().getLinguagem()+" possui "+cursoBanco.getQuantidade()+" disponíveis.");
		    }
		    
		    Venda venda = findByIdOrThrowBadRequestException(curso.getVendaId());
		    
		    List<CursoVenda> cursos = venda.getCursos();
		    
		    boolean cursoJaExistente = cursos.stream()
		            .anyMatch(cursoVenda -> cursoVenda.getCurso().getId().equals(cursoId));

		    if (cursoJaExistente) {
		    	CursoVenda cursoVendaEncontrada = cursos.stream()
		                .filter(cursoVenda -> cursoVenda.getCurso().getId().equals(cursoId))
		                .findFirst()
		                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Erro ao procurar o curso"));
		    	
		    	int quantidade = cursoVendaEncontrada.getQuantidade() + curso.getQuantidade();
		    	
		    	cursoVendaEncontrada.setQuantidade(quantidade);
		    }
		    else {
			    CursoVenda nova_curso = new CursoVenda();
			    nova_curso.setCurso(cursoBanco);
			    nova_curso.setValor(cursoBanco.getValor());
			    nova_curso.setVenda(venda);
			    nova_curso.setQuantidade(curso.getQuantidade());
			    cursos.add(nova_curso);
		    }
		    cursoBanco.setQuantidade(cursoBanco.getQuantidade() - curso.getQuantidade());
		    cursoService.saveExistingCurso(cursoBanco);
		    
		    venda.setCursos(cursos);
		    
		    venda.setValor(calcularValorVenda(venda.getCursos()));
	
		    return vendaRepository.save(venda);
		}
	     
	     @Transactional
			public Venda atualizarCursosDeUmaVenda(CursoVendaPutRequestBody curso) {
				Long cursoId = curso.getCurso().getId();
			    CursoVenda cursoVendaBanco = cursoVendaService.findByIdOrThrowBadRequestException(curso.getId());
			    Curso cursoBanco = cursoService.findByIdOrThrowBadRequestException(cursoId);
			    Venda venda = findByIdOrThrowBadRequestException(cursoVendaBanco.getVenda().getId());
    
			    List<CursoVenda> cursos = venda.getCursos();
			    
	
			    CursoVenda cursoVendaEncontrada = cursos.stream()
		                .filter(cursoVenda -> cursoVenda.getCurso().getId().equals(cursoId))
		                .findFirst()
		                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Erro ao procurar curso"));
		    	
			    if(curso.getQuantidade() == 0) {
			    	cursoBanco.setQuantidade(cursoBanco.getQuantidade()+cursoVendaEncontrada.getQuantidade());
			    	cursoVendaService.delete(cursoVendaEncontrada.getId());
			    	cursos.remove(cursoVendaEncontrada);
			    }
			    else {
			    	if(curso.getQuantidade() > cursoVendaEncontrada.getQuantidade()) {
			    		int quantidade = curso.getQuantidade() - cursoVendaEncontrada.getQuantidade();
			    		cursoBanco.setQuantidade(cursoBanco.getQuantidade() - quantidade);
			    	}
			    	else if(curso.getQuantidade() < cursoVendaEncontrada.getQuantidade()) {
			    		int quantidade =  cursoVendaEncontrada.getQuantidade() - curso.getQuantidade();
			    		cursoBanco.setQuantidade(cursoBanco.getQuantidade() + quantidade);
			    	}
			    	cursoVendaEncontrada.setQuantidade(curso.getQuantidade());
			    	cursoService.saveExistingCurso(cursoBanco);
			    }
			    venda.setValor(calcularValorVenda(venda.getCursos()));
			    venda.setCursos(cursos);
			    
			    return vendaRepository.save(venda);
			}
	     
	     @Transactional
	 	public Long inserirVendaManualmente(long id) {
	 	    Aluno alunoBanco = alunoService.findByIdOrThrowBadRequestException(id);
	 	    
	 	    Venda venda = Venda.builder()
	 		        .dia_venda(LocalDate.now())
	 		        .valor(0)
	 		        .aluno(alunoBanco)
	 		        .build();

	 	    return vendaRepository.save(venda).getId();
	     }

		 public static float calcularValorVenda(List<CursoVenda> cursos){
			float valor = 0;
			for(CursoVenda curso : cursos){
				valor += curso.getValor() * curso.getQuantidade();
			}
			return valor;
		 }
}