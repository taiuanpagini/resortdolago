/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Component para bloqueio de sessão no sistema


COMPONENTS
***********************************************************/
import { Component, OnInit } from '@angular/core';

/**********************************************************
SERVICES
***********************************************************/
import { GlobalService } from '../../globals/global';
import { SessionService } from '../../globals/session';
import { StorageService } from '../../globals/storage';

declare var $: any;
@Component({
  selector: 'app-lock',
  templateUrl: './lock.html'
})
export class LockComponent implements OnInit {

  dadosUser: any;
  dataHoje: Date = new Date();

  constructor(
    public GlobalService: GlobalService,
    public SessionService: SessionService,
    private StorageService: StorageService
  ) { }

  ngOnInit() {
    this.dadosUser = JSON.parse(this.StorageService.getItem('dataUser'));
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
