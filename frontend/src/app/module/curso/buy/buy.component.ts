import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CursoVenda } from "../../venda/cursovenda";
import { Venda } from "../../venda/venda";
import { VendaService } from "../../venda/venda.service";
import { CursoService } from "../curso.service";
import { Aluno } from "../../aluno/aluno";
import { AlunoService } from "../../aluno/aluno.service";


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['../home/home.component.css','./buy.component.css']
})
export class BuyComponent implements OnInit{
  cpf!:string;
  cpf2!:string;
  carregar: boolean = false;
  aluno!: Aluno;
  nome!: string;
  inputNome:boolean = false;
  cursos: CursoVenda[] = [];
  venda!: Venda;
  valorCompra!:number;



  //compra com cartao
  num1Cartao!:number;
  num2Cartao!:number;
  num3Cartao!:number;
  finalCartao!:number;
  nomeCartao!:number;
  cvvCartao!:number;


  //controlar DOM
  cadastrar: boolean = false;
  naoCoincide: boolean = false;
  aprovado: boolean = false;
  boleto: boolean = false;
  cartao: boolean = false;
  pix: boolean = false;
  opcaoPagamento:string = '';
  meioPagamento: boolean = false;
  data:string = '';
  isImageOpen: boolean = false;


  constructor(
    public cursoService: CursoService,
    public alunoService: AlunoService,
    public vendaService: VendaService,
    private router: Router

    ) {
    this.cursos = cursoService.getCursosCarrinho();
    this.valorCompra = cursoService.valorCarrinho();
    this.opcaoPagamento= 'boleto';
  }


  ngOnInit(): void {
    if(this.cursos.length <=0){
      this.router.navigateByUrl('');
    }


  }
  openImage() {
    this.isImageOpen = true;
  }

  closeImage() {
    this.isImageOpen = false;
  }

  onCpfChange() {
    if (this.cpf.length === 11) {
      if(this.cpf==this.cpf2){
        this.naoCoincide = false;
        this.buscaAluno();
      }
      else if (this.cpf2 && this.cpf2.length === 11){
        this.naoCoincide = true;
      }

    }
  }
  obterCurso(){
    this.router.navigate(['/']);
  }

  buscaAluno(){
    this.carregar=true;
    this.alunoService.findByCPF(this.cpf).subscribe((data: Aluno)=>{
      this.aluno = data;
      this.carregar=false;
      console.log(this.aluno);
      if(this.aluno){
        this.inputNome = false;
        this.cadastrar = false;
        this.nome = this.aluno.nome;
      }
      else{
        this.inputNome = true;
        this.cadastrar = true;
      }

      })
  }

  cadastrarAluno(){
    this.carregar=true;
    this.aluno = {} as Aluno;
    this.aluno.nome = this.nome;
    this.aluno.cpf = this.cpf;
    this.alunoService.create(this.aluno).subscribe((data: Aluno)=>{
      this.aluno = data;
      this.cadastrar = false;
      this.carregar=false;
      })

  }

  // efetuarCompra(){
  //   let validarDados = false;
  //   if(this.opcaoPagamento=='cartao'){
  //     if(!this.num1Cartao || !this.num2Cartao || !this.num3Cartao || !this.finalCartao || !this.nomeCartao || !this.cvvCartao){
  //       alert('Preencha todos os dados do cartão');
  //       return;
  //     }
  //   }
  //   this.carregar=true;
  //   this.venda = {} as Venda
  //   this.venda.cursoVendas = this.cursos;
  //   this.venda.aluno = this.aluno;


  //   console.log(this.venda);
  //   this.vendaService.save(this.venda).subscribe((res)=>{

  //     if (res.cursoVendas) {
  //       this.aprovado = true;
  //       this.cursoService.limpaCarrinho();

  //       this.meioPagamento=true;

  //       if(this.opcaoPagamento=='pix'){
  //         this.pix = true;
  //      }
  //      else if(this.opcaoPagamento=='cartao'){
  //       this.cartao = true;

  //      }
  //      else{
  //       this.dataBoleto();
  //       this.boleto = true;
  //      }
  //     }

  //    this.carregar=false;

  //   })
  // }
  efetuarCompra(){
    let validarDados = false;
    if(this.opcaoPagamento=='cartao'){
      if(!this.num1Cartao || !this.num2Cartao || !this.num3Cartao || !this.finalCartao || !this.nomeCartao || !this.cvvCartao){
        alert('Preencha todos os dados do cartão');
        return;
      }
    }
    this.carregar=true;
    this.venda = {} as Venda
    this.venda.cursoVendas = this.cursos;
    this.venda.aluno = this.aluno;


    console.log(this.venda);
    this.vendaService.save(this.venda).subscribe((res)=>{

      if (res.cursoVendas) {
        this.aprovado = true;
        this.cursoService.limpaCarrinho();

        this.meioPagamento=true;

        if(this.opcaoPagamento=='pix'){
          this.pix = true;
       }
       else if(this.opcaoPagamento=='cartao'){
        this.cartao = true;

       }
       else{
        this.dataBoleto();
        this.boleto = true;
       }
      }

     this.carregar=false;

    })
  }

  opcCompra(opcao:string){
    this.opcaoPagamento=opcao;
    if(this.opcaoPagamento=='cartao'){
      if(this.cartao==false){
        this.cartao=true;
      }
      else{
        this.cartao=false;
      }
    }

  }
  dataBoleto(){
    const dataAtual = new Date();

    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    this.data = `${dia}/${mes}/${ano}`;

  }

   gerarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  verificarTamanho(event: any, proximoInputId: string): void {
    const input = event.target;
    const valor = input.value;

    if (valor.length === 4 && proximoInputId) {
      const proximoInput = document.getElementById(proximoInputId);

      if (proximoInput) {
        proximoInput.focus();
      }
    }
  }

  // dataBoleto(){
  //   const dataAtual = new Date();

  //   const dia = String(dataAtual.getDate()).padStart(2, '0');
  //   const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
  //   const ano = dataAtual.getFullYear();

  //   this.data = `${dia}/${mes}/${ano}`;

  // }

  //  gerarNumeroAleatorio(min: number, max: number): number {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  // verificarTamanho(event: any, proximoInputId: string): void {
  //   const input = event.target;
  //   const valor = input.value;

  //   if (valor.length === 4 && proximoInputId) {
  //     const proximoInput = document.getElementById(proximoInputId);

  //     if (proximoInput) {
  //       proximoInput.focus();
  //     }
  //   }
  // }


}
