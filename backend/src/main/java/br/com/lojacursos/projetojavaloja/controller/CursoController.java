package br.com.lojacursos.projetojavaloja.controller;

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

import br.com.lojacursos.projetojavaloja.model.Curso;
import br.com.lojacursos.projetojavaloja.requests.CursoPostRequestBody;
import br.com.lojacursos.projetojavaloja.requests.CursoPutRequestBody;
import br.com.lojacursos.projetojavaloja.service.CursoService;
import lombok.RequiredArgsConstructor;
import java.util.List;
import javax.validation.Valid;

@Component
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/cursos")
public class CursoController {
    private final CursoService cursoService;
    
    @GetMapping
    public ResponseEntity<List<Curso>> list(){
        return ResponseEntity.ok(cursoService.listAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Curso> findById(@PathVariable long id){
        return ResponseEntity.ok(cursoService.findByIdOrThrowBadRequestException(id));
    }
    
    @GetMapping(path = "/find")
    public ResponseEntity<List<Curso>> findByLinguagem(@RequestParam(name="nome") String linguagem){
        return ResponseEntity.ok(cursoService.findByLinguagem(linguagem));
    }
    
    @GetMapping(path = "/find2")
    public ResponseEntity<List<Curso>> findByIdiomaContaining(@RequestParam(name="idioma") String idioma){
        return ResponseEntity.ok(cursoService.findByIdiomaContaining(idioma));
    }
    
    @PostMapping
    public ResponseEntity<Curso> save(@RequestBody @Valid CursoPostRequestBody cursoPostRequestBody){
        return new ResponseEntity<>(cursoService.save(cursoPostRequestBody), HttpStatus.CREATED);
    }
    
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id){
    	cursoService.delete(id);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody CursoPutRequestBody cursoPutRequestBody){
    	cursoService.replace(cursoPutRequestBody);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}




