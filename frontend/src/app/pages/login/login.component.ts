import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUsuario } from '../../interfaces/IUsuario';
import { UsuarioService } from '../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  formLogin!: FormGroup;
  email: string = '';
  senha: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.formLogin = this.formBuilder.group({
      email: ['cassio@gratuito.com', [Validators.required, Validators.email]],
      senha: ['admin', [Validators.required]]
    });
  }
  aluno() {
    this.router.navigate(['videos']);
  }

  admin() {
    if (this.email === 'admin@cursogratuito.com' && this.senha === 'admin') {
      this.router.navigate(['admin']);
    } else {
      alert('Email do Administrador inválido!\n Tente novamente mais tarde' );
    }
  }



  logar() {
    if (this.formLogin.invalid) return;

    const usuario = this.formLogin.getRawValue() as IUsuario;
    this.usuarioService.logar(usuario).subscribe((response: { sucesso: boolean; }) => {
      if (!response.sucesso) {
        this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
          duration: 3000
        });
      }
    });
  }
}
