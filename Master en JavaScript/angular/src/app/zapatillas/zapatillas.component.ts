import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  standalone: false,
  styleUrl: './zapatillas.component.css'
})
export class ZapatillasComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string = "Componente de zapatillas";

    ngOnInit(): void {
      
    }

    ngDoCheck(): void {
      console.log("DoCheck ejecutado");
    }

    cambiarTitulo(){
      this.titulo = "Componente de zapatillas cambiado";
    }
    ngOnDestroy(): void {
      console.log("Se destruyo el componente");
    }
}