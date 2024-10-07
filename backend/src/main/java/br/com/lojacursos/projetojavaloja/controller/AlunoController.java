package br.com.lojacursos.projetojavaloja.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.lojacursos.projetojavaloja.model.Aluno;
import br.com.lojacursos.projetojavaloja.requests.AlunoPostRequestBody;
import br.com.lojacursos.projetojavaloja.requests.AlunoPutRequestBody;
import br.com.lojacursos.projetojavaloja.service.AlunoService;
import lombok.RequiredArgsConstructor;

@Component
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/alunos")
public class AlunoController {

    private final AlunoService alunoService;

    // Endpoint para listar todos os alunos
    @GetMapping
    public ResponseEntity<List<Aluno>> list() {
        return ResponseEntity.ok(alunoService.listAll());
    }

    // Endpoint para buscar aluno por ID
    @GetMapping(path = "/{id}")
    public ResponseEntity<Aluno> findById(@PathVariable long id) {
        return ResponseEntity.ok(alunoService.findByIdOrThrowBadRequestException(id));
    }

    // Endpoint para buscar aluno por CPF
    @GetMapping(path = "/find")
    public ResponseEntity<Aluno> findByCpf(@RequestParam(name="cpf") String cpf) {
        return ResponseEntity.ok(alunoService.findByCpf(cpf));
    }

    // Endpoint para criar um novo aluno
    @PostMapping
    public ResponseEntity<Aluno> save(@RequestBody AlunoPostRequestBody alunoPostRequestBody) {
        return new ResponseEntity<>(alunoService.save(alunoPostRequestBody), HttpStatus.CREATED);
    }

    // Endpoint para deletar um aluno
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id) {
        alunoService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Endpoint para atualizar um aluno existente
    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody AlunoPutRequestBody alunoPutRequestBody) {
        alunoService.replace(alunoPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
