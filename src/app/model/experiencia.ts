/**Modelo para conectar el componente de Experiencia Laboral con la Base de Datos.
*
* Tiene tres atributos: id, nombreE y descripcionE.
*/
export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;

    constructor(parametroNombreExperiencia: string, parametroDescripcionExperiencia: string) {
        this.nombreE = parametroNombreExperiencia;
        this.descripcionE = parametroDescripcionExperiencia;
    }
}