import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../model/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  standalone: false,
  styleUrl: './zapatillas.component.css',
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: string[]; // Creo el array de marcas
    public color: string;
    public miMarca:string;

constructor(private _zapatillaService: ZapatillaService){
  this.zapatillas = new Array<Zapatilla>;
  this.miMarca = "";
  this.color = 'yellow';
  this.marcas = new Array(); //Aca le doy un valor al array para incializarlo indefinido
}

ngOnInit(): void {
  this.zapatillas = this._zapatillaService.getZapatillas();
  this.marcasList();
}

marcasList(){
  this.zapatillas.forEach((zapatilla, index) =>{
    //Vamos a crear una condicion para que las marcas no esten repetidas
    if(this.marcas.indexOf(zapatilla.marca)<0){
      this.marcas.push(zapatilla.marca);
    }

  });
}

getMarca(){
  alert(this.miMarca);
}

setMarca(){
  this.marcas.push(this.miMarca);
}

borrarMarca(indice: number){
  this.marcas.splice(indice, 1);
}

onBlur(){
  console.log("has salido del input");
}

mostrarPalabra(){
  alert(this.miMarca);
}

}