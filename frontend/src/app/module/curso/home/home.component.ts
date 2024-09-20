import { Component, OnInit } from "@angular/core";
import { Curso } from "../curso";
import { CursoService } from "../curso.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opcaoSelecionada!: string;
  cursos: Curso[] = [];
  cursosFiltradas: Curso[] = [];
  carregar:boolean = true;

  imagens:string[] = [];
  imagemAtualIndex: number = 0;

  idiomas = [
  { nome: 'Java', imagem: '../../../../assets/images/java2.png', nomeBusca: 'Java' },
  { nome: 'Python', imagem: '../../../../assets/images/python.png', nomeBusca: 'Python' },
  { nome: 'PHP', imagem: '../../../../assets/images/php.png', nomeBusca: 'PHP' },
  { nome: 'C#', imagem: '../../../../assets/images/csharp.png', nomeBusca: 'C#' },
  { nome: 'ARDUINO', imagem: '../../../../assets/images/arduino.png', nomeBusca: 'ARDUINO' },
  { nome: 'DESIGNER', imagem: '../../../../assets/images/webdesigner.png', nomeBusca: 'DESIGNER' },
  { nome: 'JavaScript', imagem: '../../../../assets/images/js.png', nomeBusca: 'JavaScript' },
  { nome: 'Banco', imagem: '../../../../assets/images/bd.png', nomeBusca: 'Banco de Dados' },
  { nome: 'Power BI', imagem: '../../../../assets/images/powerb.png', nomeBusca: 'Power BI' }
  ];

  indiceIdiomas = 0;
  contadorIdiomas = 0
  passadorEsquerda = false;
  passadorDireita = true;

  addContadorIdiomas() {
    this.indiceIdiomas += 1;
    if(this.indiceIdiomas==this.idiomas.length-5){
      this.passadorDireita = false;
    }
    else{
      this.passadorDireita = true;
    }
    this.passadorEsquerda = true;

  }
  removeContadorIdiomas() {
    this.indiceIdiomas -= 1;
    if(this.indiceIdiomas==0){
      this.passadorEsquerda = false;
    }
    else{
      this.passadorEsquerda = true;
    }
    this.passadorDireita = true;

  }



  constructor(public cursoService: CursoService) {
    this.opcaoSelecionada = 'Todas';
    this.imagens = [
      '../../../../assets/images/home_picture.jpeg',
      '../../../../assets/images/home_picture2.jpeg',
      '../../../../assets/images/home_picture3.jpeg',
    ];
  }



  ngOnInit(): void {
    this.carregar = true;

    this.cursoService.getCursos().subscribe({
      next: (data: Curso[]) => {
        this.cursos = data;
        this.cursosFiltradas = this.cursos;
      this.carregar = false;
    },
    error: (error: any) => {
      console.error('Ocorreu um erro ao buscar as cursos:', error);
      this.carregar = false; }
    });
  }

    mostrarProximaImagem() {
      this.imagemAtualIndex = (this.imagemAtualIndex + 1) % this.imagens.length;
    }

    mostrarImagemAnterior() {
      this.imagemAtualIndex = (this.imagemAtualIndex - 1 + this.imagens.length) % this.imagens.length;
    }

    selecaoAlterada() {
      let opcao = this.opcaoSelecionada;

      switch (opcao) {
        case 'Todas':
        this.cursosFiltradas = this.cursos;
        break;

        case 'Home':
          this.cursosFiltradas =[];
          this.cursos.forEach(curso => {
            if (curso.linguagem.toLowerCase().includes('home')) {
              this.cursosFiltradas.push(curso);
            }
          });

          break;

        case 'Away':
          this.cursosFiltradas =[];
          this.cursos.forEach(curso => {
            if (curso.linguagem.toLowerCase().includes('away')) {
              this.cursosFiltradas.push(curso);
            }
          });

          break;

        case 'Fan':
          this.cursosFiltradas =[];
          this.cursos.forEach(curso => {
            if (curso.linguagem.toLowerCase().includes('fan')) {
              this.cursosFiltradas.push(curso);
            }
          });

          break;

          case 'Goalkeeper':
          this.cursosFiltradas =[];
          this.cursos.forEach(curso => {
            if (curso.linguagem.toLowerCase().includes('goalkeeper')) {
              this.cursosFiltradas.push(curso);
            }
          });

          break;

        case 'Special':
          this.cursosFiltradas =[];
          this.cursos.forEach(curso => {
            if (curso.linguagem.toLowerCase().includes('special')) {
              this.cursosFiltradas.push(curso);
            }
          });

          break;

        default:
          this.cursosFiltradas = this.cursos;
      }
    }


}
