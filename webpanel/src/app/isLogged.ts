/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Component principal de carregamento pos login


COMPONENTS
***********************************************************/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';

/***********************************************************
SERVICES
***********************************************************/
import { GlobalService } from './globals/global';
import { HttpService } from './globals/http';
import { StorageService } from './globals/storage';
import { SessionService } from './globals/session';
import { AlertService } from './globals/alert';

declare var $: any;
@Component({
  template: `
  <div class="wrapper {{this.GlobalService.theme}}" (click)="isLock()">
    <div class="sidebar sidebar-{{this.GlobalService.theme}}">

        <app-sidebar></app-sidebar>

        <footer class="footer-menu">
            <img [src]="this.GlobalService.logoAppFooter">
        </footer>

        <!--<div class="sidebar-background" [ngStyle]="{'background-image': 'url(' + this.GlobalService.imgLogin + ')'}"></div> BACK-->
        <div class="sidebar-background"></div><!--COLOR-->
        
    </div>
    <div class="main-panel" id="main-panel">
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class isLoggedLayout implements OnInit {

  constructor(
    private Router: Router,
    public GlobalService: GlobalService,
    public HttpService: HttpService,
    public StorageService: StorageService,
    public SessionService: SessionService,
    public AlertService: AlertService,
  ) {

    //BLOQUEANDO SESSAO EM 5 MINUTOS SEM USO
    setInterval(() => {
      let momentNow = Date.now();
      let lastClick = Number(this.StorageService.getItem('lastClick'));

      if((momentNow - lastClick) > 300000){
        this.GlobalService.isLock = true;
        this.GlobalService.isLogged = false;
        this.Router.navigate(['/lock']);
        console.log('sessão bloqueada');
      }

    }, 60000);

  }

  ngOnInit() {
    this.GlobalService.scrollToTop();    
    const ps = new PerfectScrollbar('#main-panel');
    //ps.update();
    $.material.init();

  }

  /************
  BLOQUEIO PAGINA
  *************/
  isLock() {
    this.GlobalService.isLock = false;
    this.GlobalService.isLogged = true;
    
    this.StorageService.setItem('lastClick', Date.now());
    console.log('verificando lock');
  }

}
