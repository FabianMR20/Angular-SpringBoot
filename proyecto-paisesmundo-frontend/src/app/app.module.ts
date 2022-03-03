import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';

import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinenteComponent } from './components/continente/continente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/continente/confirm-dialog/confirm-dialog.component';
import { ContinenteModalComponent } from './components/continente/continente-modal/continente-modal.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
//import { MatPaginatorEsp } from './resource/mat-paginator';
//import {Promise} from 'es6-promise'



@NgModule({
  declarations: [
    AppComponent,
    ContinenteComponent,
    ConfirmDialogComponent,
    ContinenteModalComponent
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
    MatSortModule
    //Promise
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
