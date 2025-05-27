import { Component } from '@angular/core';
import { ContactoUsuario } from '../model/contacto.usuario';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  public usuario: ContactoUsuario;

  constructor(){
    this.usuario = new ContactoUsuario('','','','');
  }

  onSubmit(){
    console.log("Evento submit lanzado");
    console.log(this.usuario);
  }
}
