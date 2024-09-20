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
import org.springframework.web.bind.annotation.RestController;
import br.com.lojacursos.projetojavaloja.model.Venda;
import br.com.lojacursos.projetojavaloja.requests.CursoVendaPostRequestBody;
import br.com.lojacursos.projetojavaloja.requests.CursoVendaPutRequestBody;
import br.com.lojacursos.projetojavaloja.requests.VendaPostRequestBody;
import br.com.lojacursos.projetojavaloja.requests.VendaPutRequestBody;
import br.com.lojacursos.projetojavaloja.service.VendaService;
import lombok.RequiredArgsConstructor;

@Component
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/vendas") 
public class VendaController {
    private final VendaService vendaService;
    
    @GetMapping
    public ResponseEntity<List<Venda>> list(){
        return ResponseEntity.ok(vendaService.listAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Venda> findById(@PathVariable long id){
        return ResponseEntity.ok(vendaService.findByIdOrThrowBadRequestException(id));
    }
    
    @GetMapping(path = "aluno/{id}")
    public ResponseEntity<List<Venda>> findVendasByAlunoId(@PathVariable long id){
        return ResponseEntity.ok(vendaService.findVendasByAlunoId(id));
    }
    
    @PostMapping
    public ResponseEntity<Venda> save(@RequestBody VendaPostRequestBody vendaPostRequestBody){
        return new ResponseEntity<>(vendaService.save(vendaPostRequestBody), HttpStatus.CREATED);
    }
    @PostMapping(path = "aluno/{id}")
    public ResponseEntity<Long> inserirVendaManualmente(@PathVariable long id){
        return new ResponseEntity<>(vendaService.inserirVendaManualmente(id), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id){
    	vendaService.delete(id);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody VendaPutRequestBody vendaPutRequestBody){
    	vendaService.replace(vendaPutRequestBody);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PutMapping(path = "/add_curso")
    public ResponseEntity<Void> adicionarCursosParaUmaVenda(@RequestBody CursoVendaPostRequestBody cursoVenda){
    	vendaService.adicionarCursosParaUmaVenda(cursoVenda);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PutMapping(path = "/atualiza_curso")
    public ResponseEntity<Void> atualizarCursosDeUmaVenda(@RequestBody CursoVendaPutRequestBody cursoVenda){
    	vendaService.atualizarCursosDeUmaVenda(cursoVenda);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}

