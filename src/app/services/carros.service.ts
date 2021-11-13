import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private key: string = '8dc64840096344fa85b276aa106a01d3';
  private urlEnpoint: string = 'https://crudcrud.com/api/' + this.key +'/pasajero';
  constructor(private http: HttpClient) { }

  public guardarPasajero(nombrePasajero: string): Observable<any> {
    let data = {
        nombrePasajero: nombrePasajero
    };

    return this.http.post(`${this.urlEnpoint}`, data);
  }

  public listarPasajeros(): Observable<any> {

    return this.http.get(`${this.urlEnpoint}`);
  }
}
