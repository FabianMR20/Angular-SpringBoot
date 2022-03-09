import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Habitante } from 'src/app/model/habitante';
import { Pais } from 'src/app/model/pais';
import { HabitanteService } from 'src/app/service/habitante.service';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-habitante-modal',
  templateUrl: './habitante-modal.component.html',
  styles: [
  ]
})
export class HabitanteModalComponent implements OnInit {
  pais: Pais[];
  habitante: Habitante;

  constructor(
    private dialogRef: MatDialogRef<HabitanteModalComponent>,
    private habitanteService: HabitanteService,
    private paisService: PaisService,
    @Inject(MAT_DIALOG_DATA)
    private data: Habitante
  ) {}

  ngOnInit(): void {

    this.habitante = this.data;
    this.habitante.usuario = this.data.usuario;
    this.habitante.contrasenna = this.data.contrasenna;
    this.habitante.nombre = this.data.nombre;
    this.habitante.apellidos = this.data.apellidos;
    this.habitante.usuario = this.data.usuario;
    this.habitante.contrasenna = this.data.contrasenna;
    this.habitante.telefono = this.data.telefono;
    this.paisService.listar().subscribe((data) => {
      this.pais = data;
    });


  }

  aceptar() {
    if (this.habitante != null && this.habitante.idhabitante > 0) {
      this.habitanteService.editar(this.habitante).subscribe(() => {
        return this.habitanteService.listar().subscribe((data) => {
          this.habitanteService.habitanteActualizar.next(data);
        });
      });

    } else {

      this.habitanteService.registrar(this.habitante).subscribe(() => {
        return this.habitanteService.listar().subscribe((data) => {
          this.habitanteService.habitanteActualizar.next(data);
        });
      });
    }
    this.cancelar();
  }

  cancelar() {
    this.dialogRef.close();
  }
}
