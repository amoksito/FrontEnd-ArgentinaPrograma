import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroments';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
// Clase
export class EducacionService {

  //URL = 'http://localhost:8080/educacion/'
  URL = enviroment.URL + 'educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    /** Explain label here */
    return this.httpClient.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}