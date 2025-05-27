import { Pipe, PipeTransform } from "@angular/core"; // Modulo de las pipes

@Pipe({
    name: 'calculadora',
    standalone: false
})
export class CalculadoraPipe implements PipeTransform{
    // dato | calculadora: otro dato
    // parametro 1 es el dato del html
    // parametro 2 es el pipe con la espeficicacion
    transform(value: any, value2: any){
        let operaciones = `
            Suma: ${value+value2} <br/>
            Resta: ${value-value2} <br/>
            Multiplicacion: ${value*value2} <br/>
            Division: ${value/value2}
        `;

        return operaciones;
    }
}