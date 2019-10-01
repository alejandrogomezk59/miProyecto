import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PapelTijeraComponent } from './papel-tijera/papel-tijera.component' 

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    PapelTijeraComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
