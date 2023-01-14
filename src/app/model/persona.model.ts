/**Modelo para la el Servicio persona.service.
*
* Tiene cuatro atributos: id, nombre, apellido, img.
*/
export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, apellido: string, img: string, descripcion: string) {
        this.nombre = nombre;
        this.apellido = nombre;
        this.img = img;
        this.descripcion = descripcion;
    }
}

