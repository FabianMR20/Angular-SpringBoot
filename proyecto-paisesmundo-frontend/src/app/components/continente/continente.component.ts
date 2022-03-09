import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Continente } from './../../model/continente';
import { ContinenteModalComponent } from './continente-modal/continente-modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { ContinenteService } from 'src/app/service/continente.service';

@Component({
  selector: 'app-continente',
  templateUrl: './continente.component.html',
  styleUrls: ['./continente.component.css'],
})
export class ContinenteComponent implements OnInit {
  displayedColumns = ['idcontinente', 'nombre', 'Controles'];
  dataSource: MatTableDataSource<Continente>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private continenteService: ContinenteService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.continenteService.continenteActualizar.subscribe(
      (data) => (
        (this.dataSource = new MatTableDataSource(data)),
        (this.dataSource.paginator = this.paginator),
        (this.dataSource.sort = this.sort)
      )
    );
    this.continenteService
      .listar()
      .subscribe(
        (data) => (
          (this.dataSource = new MatTableDataSource(data)),
          (this.dataSource.paginator = this.paginator),
          (this.dataSource.sort = this.sort)
        )
      );
  }

  openModal(continente?: Continente) {
    try {
      if (continente == null) {
        this.dialog.open(ContinenteModalComponent, {
          data: new Continente(),
        });
      } else {
        this.dialog.open(ContinenteModalComponent, {
          data: continente,
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
        this.continenteService.eliminar(id).subscribe(() => {
          this.continenteService.listar().subscribe((data) => {
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
