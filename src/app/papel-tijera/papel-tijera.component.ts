import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papel-tijera',
  templateUrl: './papel-tijera.component.html',
  styleUrls: ['./papel-tijera.component.css']
})
export class PapelTijeraComponent {

  constructor() { }

  comparaEleccion(){
    if (eligeEquipo === comparo) {
      if (comparo ==='piedra'

    }
  }

  eligeEquipo(){
    const eleccionEquipo= Math.floor(Math.random()*3);
    switch(eleccionEquipo){
     case 0:
       return 'piedra';
      case 1:
        return 'papel';
      case 2:
        return 'tijera';
      default:
        console.log ('error');
        break;
      } 
  }

  comparo(recibido){
      // alert ('Eleccion usuario '+ recibido + ' Eleccion máquina ' + this.eligeEquipo() )
  }
}
