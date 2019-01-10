/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Modulo principal da aplicacao


COMPONENTS
***********************************************************/
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpModule } from '@angular/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

/***********************************************************
ROTEADOR
***********************************************************/
import { ROUTERS } from './routing';

/***********************************************************
GLOBALS - SERVICES
***********************************************************/
import { AlertService } from './globals/alert';
import { GlobalService } from './globals/global';
import { HttpService } from './globals/http';
import { StorageService } from './globals/storage';
import { SuccessErrorsServices } from './globals/sucess.errors';
import { ConnectService } from './globals/connect';

/***********************************************************
GLOBALS - SHAREDS
***********************************************************/

/***********************************************************
SERVICES
***********************************************************/

/***********************************************************
PAGES
***********************************************************/
import { AppInnsereComponent } from './app';

@NgModule({
  declarations: [
    AppInnsereComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(ROUTERS, { useHash: true })
  ],
  providers: [

    /*GLOBALS - SERVICES*/
    AlertService,
    GlobalService,
    HttpService,
    StorageService,
    SuccessErrorsServices,
    ConnectService,

    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppInnsereComponent]
})
export class AppInnsereModule { }
