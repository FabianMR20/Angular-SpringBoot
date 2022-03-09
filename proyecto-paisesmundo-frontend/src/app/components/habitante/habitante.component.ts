import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Habitante } from 'src/app/model/habitante';
import { HabitanteService } from 'src/app/service/habitante.service';
import { HabitanteModalComponent } from '../habitante/habitante-modal/habitante-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-habitante',
  templateUrl: './habitante.component.html',
  styles: [
  ]
})
export class HabitanteComponent implements OnInit {
  displayedColumns = ['idhabitante', 'nombre',  'apellidos' ,'fechanac', 'telefono' , 'Pais', 'Controles' ];
  dataSource: MatTableDataSource<Habitante>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private habitanteService: HabitanteService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.habitanteService.habitanteActualizar.subscribe(
      (data) => (
        (this.dataSource = new MatTableDataSource(data)),
        (this.dataSource.paginator = this.paginator),
        (this.dataSource.sort = this.sort)
      )
    );
    this.habitanteService
      .listar()
      .subscribe(
        (data) => (
          (this.dataSource = new MatTableDataSource(data)),
          (this.dataSource.paginator = this.paginator),
          (this.dataSource.sort = this.sort)
        )
      );
  }

  openModal(habitante?: Habitante) {
    try {
      if (habitante == null) {
        this.dialog.open(HabitanteModalComponent, {
          data: new Habitante(),
        });
      } else {
        this.dialog.open(HabitanteModalComponent, {
          data: habitante,
        });
      }
    } catch (error) {
      console.log(error + 'error');
    }
  }

  onDelete(id: number) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.habitanteService.eliminar(id).subscribe(() => {
          this.habitanteService.listar().subscribe((data) => {
            this.dataSource = new MatTableDataSource(data);
          });
        });
      }
    });
  }

  applyFilter(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }
}
