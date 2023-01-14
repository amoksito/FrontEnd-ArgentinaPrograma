/**Modelo para la Autenticación.
*
* Tiene dos atributos: nombreUsuario y password.
*/

export class LoginUsuario {

    nombreUsuario: string;
    password: string;

    constructor(nombreUsuario: string, password: string) {
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }

}
