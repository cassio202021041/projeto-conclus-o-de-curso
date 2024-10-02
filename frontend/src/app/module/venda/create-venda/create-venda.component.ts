import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { VendaService } from "../venda.service";

@Component({
  selector: 'app-create-venda',
  templateUrl: './create-venda.component.html',
  styleUrls: ['../../curso/edit/edit.component.css','./create-venda.component.css']
})
export class CreateVendaComponent implements OnInit{
  form!: FormGroup;
  id!: number;
  carregar:boolean = true;

  constructor(
    public vendaService: VendaService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.form = new FormGroup({
      id: new FormControl('', [Validators.required])
      });
      this.carregar = false;
      }

      get f(){
        return this.form.controls;
      }

      submit(){
        this.carregar = true;
        this.id= this.form.get('id')!.value;
        this.vendaService.create(this.id).subscribe(res => {
          this.carregar = false;
             alert('Atualize os dados a seguir!');
             this.router.navigateByUrl('vendas/edit/'+res);
        })
      }
}
