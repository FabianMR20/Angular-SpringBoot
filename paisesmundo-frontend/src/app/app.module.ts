import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinenteComponent } from './components/continente/continente.component';
import { HabitantesComponent } from './components/habitantes/habitantes.component';

@NgModule({
  declarations: [
    AppComponent,
    ContinenteComponent,
    HabitantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
