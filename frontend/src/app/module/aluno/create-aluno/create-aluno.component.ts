import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Aluno } from "../aluno";
import { AlunoService } from "../aluno.service";

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['../../curso/edit/edit.component.css','./create-aluno.component.css']
})
export class CreateAlunoComponent implements OnInit {
  form!: FormGroup;
  aluno!: Aluno;
  carregar: boolean = true;

  constructor(
    public alunoService: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])

    });
    this.carregar = false;
  }

  get f() {
    return this.form.controls;
  }
  voltarParaHome() {
    this.router.navigate(['/']);
  }

  submit() {
    this.carregar = true;

    console.log(this.form.value);
    this.alunoService.create(this.form.value).subscribe(res => {
      this.carregar = false;
      alert('Aluno criado com sucesso!');
      this.router.navigateByUrl('/');
    });
  }
}
