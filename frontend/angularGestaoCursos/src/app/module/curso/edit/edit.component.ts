import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Curso } from "../curso";
import { CursoService } from "../curso.service";



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  curso: Curso = {} as Curso;
  form!: FormGroup;
  imagem!: string;
  carregar:boolean = true;


  constructor(
    public cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    if (this.id !== null) {

      this.id = this.route.snapshot.params['id'];
      this.curso.id = this.id;
      this.cursoService.find(this.id).subscribe((data: Curso)=>{
      this.curso = data;
      this.carregar=false;


      });
    }
    else{
      this.router.navigateByUrl('');

    }
    this.form = new FormGroup({
      clube: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      ano: new FormControl('', [Validators.required]),
      quantidade: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      imagem: new FormControl('', [Validators.required])
    });
  }


  get f(){
    return this.form.controls;
  }

  submit(){
    this.carregar=true;
    console.log(this.form.value);
    this.curso.clube = this.form.value.clube;
    this.curso.ano = this.form.value.ano;
    this.curso.quantidade = this.form.value.quantidade;
    this.curso.valor = this.form.value.valor;
    this.curso.imagem = this.form.value.imagem;
      this.cursoService.update(this.curso).subscribe(res => {
        this.carregar=false;
        console.log('Curso atualizada com sucesso!');
        this.router.navigateByUrl('details/'+this.curso.id), { target: '_blank' };
    })
  }


}
