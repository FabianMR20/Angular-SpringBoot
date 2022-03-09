import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Continente } from 'src/app/model/continente';
import { Pais } from 'src/app/model/pais';
import { ContinenteService } from 'src/app/service/continente.service';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-pais-modal',
  templateUrl: './pais-modal.component.html',
  styleUrls: ['./pais-modal.component.css'],
})
export class PaisModalComponent implements OnInit {
  continente: Continente[];
  pais: Pais;

  constructor(
    private dialogRef: MatDialogRef<PaisModalComponent>,
    private continenteService: ContinenteService,
    private paisService: PaisService,
    @Inject(MAT_DIALOG_DATA) private data: Pais
  ) {}

  ngOnInit(): void {
    this.pais = this.data;
    this.pais.idpais = this.data.idpais;
    this.pais.nombrepais = this.data.nombrepais;
    this.pais.capitalpais = this.data.capitalpais;
    this.pais.codTel = this.data.codTel;
    this.pais.iso2 = this.data.iso2;
    this.pais.iso3 = this.data.iso3;
    this.continenteService.listar().subscribe((data) => {
      this.continente = data;
    });
  }

  aceptar() {
    if (this.pais != null && this.pais.idpais > 0) {
      this.paisService.editar(this.pais).subscribe(() => {
        return this.paisService.listar().subscribe((data) => {
          this.paisService.paisActualizar.next(data);
        });
      });
    } else {
      this.paisService.registrar(this.pais).subscribe(() => {
        return this.paisService.listar().subscribe((data) => {
          this.paisService.paisActualizar.next(data);
        });
      });
    }
    this.cancelar();
  }

  cancelar() {
    this.dialogRef.close();
  }
}
