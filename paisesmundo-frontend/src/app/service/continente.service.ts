import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Continente } from '../model/continente';

@Injectable({
  providedIn: 'root'
})
export class ContinenteService {

  private url : String = "http://localhost:8080/continente";

  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Continente[]>(this.url + "");
  }

}
