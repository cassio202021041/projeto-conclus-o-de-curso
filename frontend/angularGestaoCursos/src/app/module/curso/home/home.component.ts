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

  paises = [
  { nome: 'Seleções', imagem: '../../../../assets/images/neymar_home.png', nomeBusca: 'Seleção' },
  { nome: 'Europa', imagem: '../../../../assets/images/lautaro_home.png', nomeBusca: 'Europa' },
  { nome: 'Espanhol', imagem: '../../../../assets/images/bellingham_home.png', nomeBusca: 'Espanha' },
  { nome: 'Inglês', imagem: '../../../../assets/images/bruno_home.png', nomeBusca: 'Inglaterra' },
  { nome: 'Brasileirão', imagem: '../../../../assets/images/suarez_home.png', nomeBusca: 'Brasil' },
  { nome: 'Francês', imagem: '../../../../assets/images/mbappe_home.png', nomeBusca: 'França' },
  { nome: 'Sauditão', imagem: '../../../../assets/images/cr7_home.png', nomeBusca: 'arabia saudita' },
  { nome: 'Italiano', imagem: '../../../../assets/images/rafael_home.png', nomeBusca: 'Italia' },
  { nome: 'Alemão', imagem: '../../../../assets/images/kimmich_home.png', nomeBusca: 'Alemanha' }
  ];

  indicePaises = 0;
  contadorPaises = 0
  passadorEsquerda = false;
  passadorDireita = true;

  addContadorPaises() {
    this.indicePaises += 1;
    if(this.indicePaises==this.paises.length-5){
      this.passadorDireita = false;
    }
    else{
      this.passadorDireita = true;
    }
    this.passadorEsquerda = true;

  }
  removeContadorPaises() {
    this.indicePaises -= 1;
    if(this.indicePaises==0){
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
            if (curso.clube.toLowerCase().includes('home')) {
              this.cursosFiltradas.push(curso);
            }
          });

          break;

        case 'Away':
          this.cursosFiltradas =[];
          this.cursos.forEach(curso => {
            if (curso.clube.toLowerCase().includes('away')) {
              this.cursosFiltradas.push(curso);
            }
          });

          break;

        case 'Fan':
          this.cursosFiltradas =[];
          this.cursos.forEach(curso => {
            if (curso.clube.toLowerCase().includes('fan')) {
              this.cursosFiltradas.push(curso);
            }
          });

          break;

          case 'Goalkeeper':
          this.cursosFiltradas =[];
          this.cursos.forEach(curso => {
            if (curso.clube.toLowerCase().includes('goalkeeper')) {
              this.cursosFiltradas.push(curso);
            }
          });

          break;

        case 'Special':
          this.cursosFiltradas =[];
          this.cursos.forEach(curso => {
            if (curso.clube.toLowerCase().includes('special')) {
              this.cursosFiltradas.push(curso);
            }
          });

          break;

        default:
          this.cursosFiltradas = this.cursos;
      }
    }


}
