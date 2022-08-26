import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { ServicoFirebaseService } from 'src/services/servico-firebase.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/lista-produtos', icon: 'mail' },
   
  ];

  constructor() {}  

}
