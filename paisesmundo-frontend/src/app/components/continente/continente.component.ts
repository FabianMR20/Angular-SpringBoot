import { ContinenteService } from './../../service/continente.service';
import { Continente } from './../../model/continente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continente',
  templateUrl: './continente.component.html',
  styleUrls: ['./continente.component.css']
})
export class ContinenteComponent implements OnInit {
  continente: Continente[] = [];

  constructor(private continenteService: ContinenteService ) { }

  ngOnInit(): void {
    this.continenteService.listar().subscribe(data => this.continente = data);
  }

}
