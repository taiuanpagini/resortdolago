/*--------------
V 1.0.0 - Criado por Larner Diogo

DESCIÇÃO:
Modulo para rotas (admin) da aplicacao


COMPONENTS
***********************************************************/
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxMaskModule } from 'ngx-mask';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NgDatepickerModule } from 'ng2-datepicker';

/***********************************************************
ROTEADOR
***********************************************************/
import { Routing } from './routingSystem';

/***********************************************************
SERVICES
***********************************************************/
import { GuardService } from './globals/guard';
import { SessionService } from './globals/session';
import { HttpService } from './globals/http';

/***********************************************************
GLOBALS - SHAREDS
***********************************************************/
import { SideBarComponent } from './shared/sidebar/sidebar';
import { NavBarComponent } from './shared/navbar/navbar';

/***********************************************************
COMPONENTS
***********************************************************/
import { DataTableComponent } from './components/data-table/index';
import { BackButtonComponent } from './components/back-button/index';

/***********************************************************
PAGES
***********************************************************/
import { isLoggedLayout } from './isLogged';
import { noLoggedLayout } from './noLogged';

import { LoginComponent } from './shared/login/login';
import { LockComponent } from './shared/lock/lock';

import { DashComponent } from './shared/dash/dash';
import { NgxEditorModule } from 'ngx-editor';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { UsuarioListComponent } from './pages/usuario/list';
import { UsuarioNewComponent } from './pages/usuario/new';
import { UsuarioEditComponent } from './pages/usuario/edit';

import { SuporteTecnicoComponent } from './shared/suporte/suporte';
import { UsuarioPerfilComponent } from './pages/usuario/perfil';
import { RecuperarSenhaComponent } from './shared/recuperar-senha/recuperar-senha';
import { BannerListComponent } from './pages/banner/list';
import { BannerNewComponent } from './pages/banner/new';
import { BannerEditComponent } from './pages/banner/edit';
import { BannerUploadComponent } from './pages/banner/upload';
import { DepoimentoListComponent } from './pages/depoimento/list';
import { DepoimentoNewComponent } from './pages/depoimento/new';
import { DepoimentoEditComponent } from './pages/depoimento/edit';
import { VideoListComponent } from './pages/video/list';
import { VideoNewComponent } from './pages/video/new';
import { VideoEditComponent } from './pages/video/edit';
import { MidiaListComponent } from './pages/midia/list';
import { MidiaNewComponent } from './pages/midia/new';
import { MidiaEditComponent } from './pages/midia/edit';
import { ContatoListComponent } from './pages/contato/list';
import { ContatoNewComponent } from './pages/contato/new';
import { ContatoEditComponent } from './pages/contato/edit';
import { sanitizeHtmlPipe } from './globals/sanitize-html.pipe';
import { UsuarioSenhaComponent } from './pages/usuario/senha';
import { BannerEditImageComponent } from './pages/banner/edit-image';
import { AtracoesListComponent } from './pages/atracao/list';
import { AtracoesNewComponent } from './pages/atracao/new';
import { AtracoesEditComponent } from './pages/atracao/edit';
import { AtracoesUploadComponent } from './pages/atracao/upload';
import { AtracoesEditImageComponent } from './pages/atracao/edit-image';
import { CaldasListComponent } from './pages/caldas-novas/list';
import { CaldasNewComponent } from './pages/caldas-novas/new';
import { CaldasEditComponent } from './pages/caldas-novas/edit';
import { CaldasUploadComponent } from './pages/caldas-novas/upload';
import { CaldasEditImageComponent } from './pages/caldas-novas/edit-image';
import { ResortListComponent } from './pages/resort/list';
import { ResortNewComponent } from './pages/resort/new';
import { ResortEditComponent } from './pages/resort/edit';
import { ResortUploadComponent } from './pages/resort/upload';
import { ResortEditImageComponent } from './pages/resort/edit-image';
import { PromocaoListComponent } from './pages/promocao/list';
import { PromocaoNewComponent } from './pages/promocao/new';
import { PromocaoUploadComponent } from './pages/promocao/upload';
import { PromocaoEditImageComponent } from './pages/promocao/edit-image';
import { PromocaoEditComponent } from './pages/promocao/edit';

@NgModule({
    declarations: [

        /*COMPONENTS*/
        DataTableComponent,
        BackButtonComponent,
        
        /*GLOBALS - SHAREDS*/
        SideBarComponent,
        NavBarComponent,

        isLoggedLayout,
        noLoggedLayout,
        LoginComponent,
        RecuperarSenhaComponent,
        LockComponent,
        DashComponent,
        
        /*PAGES*/        
        UsuarioListComponent,
        UsuarioNewComponent,
        UsuarioEditComponent,
        UsuarioPerfilComponent,
        UsuarioSenhaComponent,
        BannerListComponent,
        BannerNewComponent,
        BannerEditComponent,
        BannerUploadComponent,
        BannerEditImageComponent,
        PromocaoListComponent,
        PromocaoNewComponent,
        PromocaoEditComponent,
        PromocaoUploadComponent,
        PromocaoEditImageComponent,
        DepoimentoListComponent,
        DepoimentoNewComponent,
        DepoimentoEditComponent,
        VideoListComponent,
        VideoNewComponent,
        VideoEditComponent,
        AtracoesListComponent,
        AtracoesNewComponent,
        AtracoesEditComponent,
        AtracoesUploadComponent,
        AtracoesEditImageComponent,
        MidiaListComponent,
        MidiaNewComponent,
        MidiaEditComponent,
        ContatoListComponent,
        ContatoNewComponent,
        ContatoEditComponent,
        CaldasListComponent,
        CaldasNewComponent,
        CaldasEditComponent,
        CaldasUploadComponent,
        CaldasEditImageComponent,
        ResortListComponent,
        ResortNewComponent,
        ResortEditComponent,
        ResortUploadComponent,
        ResortEditImageComponent,
        SuporteTecnicoComponent,

        sanitizeHtmlPipe
    ],
    imports: [
        HttpClientModule,
        HttpModule,
        FormsModule,
        CommonModule,
        ChartsModule,
        NgxPaginationModule,
        NgxMaskModule.forRoot(),
        CurrencyMaskModule,
        NgDatepickerModule,
        OrderModule,
        NgxEditorModule,
        NgbModule,
        TooltipModule.forRoot(),
        RouterModule.forChild(Routing)
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    providers: [
        GuardService,
        SessionService,
        HttpService,
        CurrencyPipe,
        DatePipe,
        NgbCarouselConfig
    ],
    exports: [
        sanitizeHtmlPipe
    ],
})
export class Module { }
