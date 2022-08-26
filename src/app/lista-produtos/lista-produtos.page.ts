import { Component, OnInit } from '@angular/core';
import { ServicoFirebaseService } from 'src/services/servico-firebase.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],
})
export class ListaProdutosPage implements OnInit {

  public Produtos : any[] = [];

  constructor(private _service : ServicoFirebaseService) {}

  ngOnInit() {
    this.buscarSalgados();
  }


  doRefresh(event) {
      event.target.complete();
  }

  public buscarSalgados(event?){
    this.Produtos = [];
    this._service.getAll().subscribe(resp => {
      resp.forEach(item => {
        this.Produtos.push(item);
      });
      
      if(event){
        event.target.complete();
      }
      console.log(this.Produtos);
    })
  }

  public editSalgado(item : any){
    console.log(item);
  }

}
