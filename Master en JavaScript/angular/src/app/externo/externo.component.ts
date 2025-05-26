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

  constructor(private _peticionesService: PeticionesService) { 
    this.userId = 2;
  }

  ngOnInit(): void {
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
