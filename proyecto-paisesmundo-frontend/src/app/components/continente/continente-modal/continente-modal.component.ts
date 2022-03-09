import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Continente } from 'src/app/model/continente';

import { ContinenteService } from 'src/app/service/continente.service';

@Component({
  selector: 'app-continente-modal',
  templateUrl: './continente-modal.component.html',
  styleUrls: ['./continente-modal.component.css'],
})
export class ContinenteModalComponent implements OnInit {
  continente: Continente;

  constructor(
    private dialogRef: MatDialogRef<ContinenteModalComponent>,
    private continenteService: ContinenteService,
    @Inject(MAT_DIALOG_DATA) private data: Continente
  ) {}

  ngOnInit(): void {

    this.continente = this.data;
    this.continente.idcontinente = this.data.idcontinente;
    this.continente.nombre = this.data.nombre;
  }

  aceptar() {
    if (this.continente != null && this.continente.idcontinente > 0) {
      this.continenteService.editar(this.continente).subscribe(() => {
        return this.continenteService.listar().subscribe((data) => {
          this.continenteService.continenteActualizar.next(data);
        });
      });
      this.cancelar();
    } else {

      this.continenteService.registrar(this.continente).subscribe(() => {
        return this.continenteService.listar().subscribe((data) => {
          this.continenteService.continenteActualizar.next(data);
        });
      });
    }
  }

  cancelar() {
    this.dialogRef.close();
  }
}
