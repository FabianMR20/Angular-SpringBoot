
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Pais } from '../model/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  paisActualizar = new Subject <Pais[]>();

  public url : String = "http://localhost:8080/pais";

  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Pais[]>(this.url + "");
  }

  eliminar(id : number){
    return this.http.delete(this.url + "/" + id);
  }

  registrar(pais : Pais){
    return this.http.post(this.url + "", pais);
  }

  editar(pais : Pais){
    return this.http.put(this.url + "" , pais);
  }
}
