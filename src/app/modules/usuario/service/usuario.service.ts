import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private httpClient: HttpClient) { }

  get(object: Usuario): Observable<Usuario> {
    let param = new HttpParams()
      .append('email', object.email)
      .append('senha', object.senha);
    return this.httpClient.get<Usuario>(`${'http://desktop-nrm99hp:9000'}/${'usuarios'}`, { params: param });
  }

  post(object: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${'http://desktop-nrm99hp:9000'}/${'usuarios'}`, object);
  }

}
