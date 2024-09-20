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
import org.springframework.web.bind.annotation.RestController;
import br.com.lojacursos.projetojavaloja.model.CursoVenda;
import br.com.lojacursos.projetojavaloja.requests.CursoVendaPostRequestBody;
import br.com.lojacursos.projetojavaloja.requests.CursoVendaPutRequestBody;
import br.com.lojacursos.projetojavaloja.service.CursoVendaService;
import lombok.RequiredArgsConstructor;
import java.util.List;
import javax.validation.Valid;

@Component
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/curso_venda")
public class CursoVendaController {
    private final CursoVendaService cursoVendaService;
    
    @GetMapping
    public ResponseEntity<List<CursoVenda>> list(){
        return ResponseEntity.ok(cursoVendaService.listAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<CursoVenda> findById(@PathVariable long id){
        return ResponseEntity.ok(cursoVendaService.findByIdOrThrowBadRequestException(id));
    }
    
    
    @PostMapping
    public ResponseEntity<CursoVenda> save(@RequestBody @Valid CursoVendaPostRequestBody cursoVendaPostRequestBody){
        return new ResponseEntity<>(cursoVendaService.save(cursoVendaPostRequestBody), HttpStatus.CREATED);
    }
    
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id){
    	cursoVendaService.delete(id);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody CursoVendaPutRequestBody cursoVendaPutRequestBody){
    	cursoVendaService.replace(cursoVendaPutRequestBody);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}




