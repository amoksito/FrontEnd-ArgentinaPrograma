/**Modelo para conectar el componente de Experiencia Laboral con la Base de Datos.
*
* Tiene tres atributos: id, nombreE y descripcionE.
*/
export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;

    constructor(nombreE: string, descripcionE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
    }
}