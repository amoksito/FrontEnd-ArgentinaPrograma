/**Modelo para el Json Web Token.
*/

export class JwtDto {

    token!: string;
    type!: string;
    nombreUsuario!: string;
    authorities!: string[];
}