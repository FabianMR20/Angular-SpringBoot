
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Habitante } from '../model/habitante';


@Injectable({
  providedIn: 'root'
})
export class HabitanteService {

  habitanteActualizar = new Subject <Habitante[]>();

  public url : String = "http://localhost:8080/habitante";

  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<Habitante[]>(this.url + "");
  }

  eliminar(id : number){
    return this.http.delete(this.url + "/" + id);
  }

  registrar(habitante : Habitante){
    return this.http.post(this.url + "", habitante);
  }

  editar(habitante : Habitante){
    return this.http.put(this.url + "" , habitante);
  }
}
