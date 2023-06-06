import { Injectable } from '@angular/core';
import {UsuarioModel} from '../../modelos/usuario.interface'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://jsonplaceholder.typicode.com/users/";

  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(this.url);
  }

  getUsersiD(id:number): Observable<UsuarioModel> {
    const FullUrl = this.url +  id
    return this.http.get<UsuarioModel>(FullUrl);
  }

  crearUsuario(form: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(this.url,form);
  }

  modificarUsuario(userId: number, form: UsuarioModel): Observable<UsuarioModel> {
    const FullUrl = this.url + userId;
    return this.http.put<UsuarioModel>(FullUrl, form);
  }

  eliminarUsuario(id: number): Observable<UsuarioModel> {
    const FullUrl = this.url +  id
    return this.http.delete<UsuarioModel>(FullUrl);
  }
}

