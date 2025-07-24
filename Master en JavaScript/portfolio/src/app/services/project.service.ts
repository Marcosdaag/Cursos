import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; // Para poder hacer peticiones ajax
import { Observable } from "rxjs";
import { Project } from "../models/project"; // Modelo de proyectos
import { Global } from "./global"; // Archivo de variables globales que voy a estar usando en varias situaciones

@Injectable() // Decordaror para decirle a la clase que vamos a inyectarla en otro lado despues
export class ProjectService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Probando el servicio de angular';
    }

}