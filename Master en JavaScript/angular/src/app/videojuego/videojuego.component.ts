import { Component } from '@angular/core';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuego.component.html',
  standalone: false,
  styleUrl: './videojuego.component.css'
})
export class VideojuegosComponent {
  public identificado: boolean;

  constructor(){
    this.identificado = false;
  }

  setIdentificado(){
    this.identificado = true;
  }

  unsetIdentificado(){
    this.identificado = false;
  }
}
