import { Injectable } from "@angular/core";
import { Zapatilla } from "../model/zapatilla";

@Injectable()
export class ZapatillaService {

    public zapatillas: Array<Zapatilla>;

    constructor() {
        this.zapatillas = [ //Nuevo array de elementos Zapatilla dentro del array zapatillas
            new Zapatilla('Airforce', 'Nike', 'Blanco', 12000, true),
            new Zapatilla('Runner MD', 'Nike', 'Negro', 6000, true),
            new Zapatilla('Yeezy', 'Adidas', 'Rojo', 10000, false)
        ];
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
    
}