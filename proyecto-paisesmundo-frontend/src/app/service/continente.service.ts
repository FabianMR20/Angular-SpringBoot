import { Continente } from './../model/continente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContinenteService {

  continenteActualizar = new Subject <Continente[]>();

  public url : String = "http://localhost:8080/continente";

  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Continente[]>(this.url + "");
  }

  eliminar(id : number){
    return this.http.delete(this.url + "/" + id);
  }

  registrar(continente : Continente){
    return this.http.post(this.url + "", continente);
  }

  editar(continente : Continente){
    return this.http.put(this.url + "" , continente);
  }
}
