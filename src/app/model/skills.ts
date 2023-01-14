/**Modelo para las habilidades duras y blandas.
*
* Tiene tres atributos: id, nombre, porcentaje.
* Recibe dos parámetros en su constructor.
*/

export class Skills {
    id?: number;
    nombre: string;
    porcentaje: number;

    constructor(nombre: string, porcentaje: number) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }
}