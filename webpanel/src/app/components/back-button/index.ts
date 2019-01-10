/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Component Back Button


COMPONENTS
***********************************************************/
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'component-back-button',
  templateUrl: './component.html',
  styleUrls: ['style.scss']
})
export class BackButtonComponent {

  constructor(
    private Location: Location
  ) { }

  /************
  VOLTAR PAGINA
  *************/
  voltar() {
    this.Location.back();
  }

}
