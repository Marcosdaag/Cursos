import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  standalone: false,
  styleUrl: './zapatillas.component.css'
})
export class ZapatillasComponent implements OnInit, DoCheck {
    public titulo: string = "Componente de zapatillas";

    ngOnInit(): void {
      
    }

    ngDoCheck(): void {
      console.log("DoCheck ejecutado");
    }

    cambiarTitulo(){
      this.titulo = "Componente de zapatillas cambiado";
    }
}