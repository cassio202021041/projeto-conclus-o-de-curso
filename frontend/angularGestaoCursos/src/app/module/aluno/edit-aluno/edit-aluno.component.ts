import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Aluno } from "../aluno";
import { AlunoService } from "../aluno.service";





@Component({
  selector: 'app-edit-aluno',
  templateUrl: './edit-aluno.component.html',
  styleUrls: ['../../curso/edit/edit.component.css','./edit-aluno.component.css']
})
export class EditAlunoComponent implements OnInit{
  id!: number;
  aluno: Aluno = {} as Aluno;
  form!: FormGroup;
  carregar:boolean = true;

  constructor(
    public alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    if (this.id !== null) {

      this.id = this.route.snapshot.params['id'];
      this.aluno.id = this.id;
      this.alunoService.find(this.id).subscribe((data: Aluno)=>{
      this.aluno = data;
      this.carregar = false;

      });
    }
    else{
      this.router.navigateByUrl('');

    }
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
    });
  }


  get f(){
    return this.form.controls;
  }


  submit(){
    this.carregar = true;
    console.log(this.form.value);
    this.aluno.nome = this.form.value.nome;
    this.aluno.cpf = this.form.value.cpf;
      this.alunoService.update(this.aluno).subscribe(res => {
        this.carregar = false;
        console.log('Aluno atualizado com sucesso!');
        this.router.navigateByUrl('alunos/details/'+this.aluno.id);

    })
  }
}
