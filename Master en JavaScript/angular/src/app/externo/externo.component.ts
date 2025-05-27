import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  standalone: false,
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.css',
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: number;
  public fecha: any;

  constructor(private _peticionesService: PeticionesService) { 
    this.userId = 2;
  }

  ngOnInit(): void {
    this.fecha = new Date(2019, 5,20); // Le signamos una fecha espeficica, en caso de no asignarle se usa la fecha actual
    this.cargaUsuario();
  }

  cargaUsuario() {
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
