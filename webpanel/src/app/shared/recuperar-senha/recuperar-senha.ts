/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Component para autenticacao no sistema


COMPONENTS
***********************************************************/
import { Component, OnInit } from '@angular/core';

/**********************************************************
SERVICES
***********************************************************/
import { GlobalService } from '../../globals/global';
import { SessionService } from '../../globals/session';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './recuperar-senha.html'
})
export class RecuperarSenhaComponent implements OnInit {

  usuarioDEMO: string = 'demo';
  senhaDEMO: string = 'cheff';
  dataHoje: Date = new Date();

  constructor(
    public GlobalService: GlobalService,
    public SessionService: SessionService,
  ) { }

  ngOnInit() {
    this.GlobalService.setTituloPage();

    this.checkFullPageBackgroundImage();
    setTimeout(function () {
      $('.card').removeClass('card-hidden');
    }, 700)
  }

  /************
  CARREGANDO BACKGROUND
  *************/
  checkFullPageBackgroundImage() {
    var $page = $('.full-page');
    //var image_container = `<div class="full-page-background" style="background-image: url(${this.GlobalService.imgLogin}) "/>`;//IMG BACK
    var image_container = `<div class="full-page-background sidebar-innsere"/>`;//COLOR BACK
    $page.append(image_container);
  };

}
