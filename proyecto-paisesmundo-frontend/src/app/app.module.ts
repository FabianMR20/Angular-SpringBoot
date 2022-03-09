import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinenteComponent } from './components/continente/continente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/continente/confirm-dialog/confirm-dialog.component';
import { ContinenteModalComponent } from './components/continente/continente-modal/continente-modal.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { HabitanteComponent } from './components/habitante/habitante.component';
import { HabitanteModalComponent } from './components/habitante/habitante-modal/habitante-modal.component';
import { PaisComponent } from './components/pais/pais.component';
import { PaisModalComponent } from './components/pais/pais-modal/pais-modal.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

//import { MatPaginatorEsp } from './resource/mat-paginator';
//import {Promise} from 'es6-promise'



@NgModule({
  declarations: [
    AppComponent,
    ContinenteComponent,
    ConfirmDialogComponent,
    ContinenteModalComponent,
    HabitanteComponent,
    HabitanteModalComponent,
    PaisComponent,
    PaisModalComponent,
    CabeceraComponent,
    PieComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatGridListModule,

    //Promise
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
