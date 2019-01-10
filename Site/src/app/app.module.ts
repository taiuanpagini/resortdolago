import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { DiversaoAventuraComponent } from './diversao-aventura/diversao-aventura.component';
import { TranquilidadeLazerComponent } from './tranquilidade-lazer/tranquilidade-lazer.component';
import { KidsComponent } from './kids/kids.component';
import { CaldasComponent } from './caldas-novas/caldas-novas.component';
import { ResortComponent } from './resort/resort.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import {NgxMaskModule} from 'ngx-mask';
import { StorageService } from './providers/storage';
import { GlobalsService } from './providers/globals';
import { HttpService } from './providers/http';
import { ConnectService } from './providers/connect';
import { Http, HttpModule } from '@angular/http';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiversaoAventuraComponent,
    TranquilidadeLazerComponent,
    KidsComponent,
    CaldasComponent,
    ResortComponent,
    PromocoesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    OwlModule,
    ParallaxModule,
    LightboxModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    SnotifyModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    StorageService,
    GlobalsService,
    HttpService,
    ConnectService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
