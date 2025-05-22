import { Component } from '@angular/core';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  standalone: false,
  styleUrl: './zapatillas.component.css'
})
export class ZapatillasComponent{
    public titulo: string = "Componente de zapatillas";

    cambiarTitulo(){
      this.titulo = "Componente de zapatillas cambiado";
}

}