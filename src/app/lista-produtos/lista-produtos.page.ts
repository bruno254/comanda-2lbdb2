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

  public buscarSalgados(event?){
    this._service.getAll().subscribe(resp => {
      this.Produtos = [];
      resp.forEach(item => {
        let i : any = item.value;
        if(i.disponivel)
          this.Produtos.push(item);
      });

      resp.forEach(item => {
        let i : any = item.value;
        if(!i.disponivel)
          this.Produtos.push(item);
      });

      if(event){
        event.target.complete();
      }
    })
  }

  public editSalgado(item : any){
    let key = item.key;
    let value : any = item.value;

    if(value.disponivel){
      value.disponivel = false;
    } else {
      value.disponivel = true;
    }

    this._service.update(value,key);

    this.buscarSalgados();
  }

}
