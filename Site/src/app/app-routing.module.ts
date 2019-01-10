import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ResortComponent } from './resort/resort.component';
import { DiversaoAventuraComponent } from './diversao-aventura/diversao-aventura.component';
import { TranquilidadeLazerComponent } from './tranquilidade-lazer/tranquilidade-lazer.component';
import { KidsComponent } from './kids/kids.component';
import { CaldasComponent } from './caldas-novas/caldas-novas.component';
import { PromocoesComponent } from './promocoes/promocoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resort', component: ResortComponent },
  { path: 'diversao-aventura', component: DiversaoAventuraComponent },
  { path: 'tranquilidade-lazer', component: TranquilidadeLazerComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'caldas-novas', component: CaldasComponent },
  { path: 'promocoes', component: PromocoesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
