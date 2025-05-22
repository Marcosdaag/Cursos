import { Component } from '@angular/core';
import { configuracion } from './model/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  config = configuracion;
  titulo = "primer aplicacion con angular";
  mostrarZapatillas: boolean = true;

  switchZapatillas(value: boolean){
    this.mostrarZapatillas = value;
  }

  constructor(){
    this.titulo = configuracion.titulo;
  }

}
