export class Zapatilla{
    /* public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;

    constructor(nombre: string, marca:string, color:string, precio:number, stock:boolean){
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    } */

        // Podemos definir las propiedades y asignarselas al constructor en un mismo bloque de codigo

    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean){

    }

}