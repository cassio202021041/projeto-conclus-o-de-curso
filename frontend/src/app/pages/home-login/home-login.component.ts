import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrl: './home-login.component.scss'
})
export class HomeLoginComponent implements OnInit {
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
}
