import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pais } from 'src/app/model/pais';
import { PaisService } from 'src/app/service/pais.service';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PaisModalComponent } from './pais-modal/pais-modal.component';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
})
export class PaisComponent implements OnInit {

    displayedColumns = ['idpais' , 'nombrepais','capitalpais', 'codTel', 'iso2',  'iso3' , 'continente' , 'Controles'];
    dataSource: MatTableDataSource<Pais>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
      private paisService: PaisService,
      private dialog: MatDialog
    ) {}

    ngOnInit(): void {
      this.paisService.paisActualizar.subscribe(
        (data) => (
          (this.dataSource = new MatTableDataSource(data)),
          (this.dataSource.paginator = this.paginator),
          (this.dataSource.sort = this.sort)
        )
      );
      this.paisService
        .listar()
        .subscribe(
          (data) => (
            (this.dataSource = new MatTableDataSource(data)),
            (this.dataSource.paginator = this.paginator),
            (this.dataSource.sort = this.sort)
          )
        );
    }

    openModal(pais?: Pais) {
      try {
        if (pais == null) {
          this.dialog.open(PaisModalComponent, {
            data: new Pais(),
          });
        } else {
          this.dialog.open(PaisModalComponent, {
            data: pais,
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
          this.paisService.eliminar(id).subscribe(() => {
            this.paisService.listar().subscribe((data) => {
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
