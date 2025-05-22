import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../model/zapatilla';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  standalone: false,
  styleUrl: './zapatillas.component.css'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;

constructor(){
  this.zapatillas = [ //Nuevo array de elementos Zapatilla dentro del array zapatillas
    new Zapatilla('Airforce','Nike','Blanco',12000, true),
    new Zapatilla('Runner MD','Nike','Negro',6000, true),
    new Zapatilla('Yeezy','Adidas','Rojo',10000, false)
  ];
}

ngOnInit(): void {
  console.log(this.zapatillas);
}

}