import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiversaoAventuraRoutingModule } from './diversao-aventura-routing.module';
import { HeaderComponent } from '../layouts/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    DiversaoAventuraRoutingModule
  ],
  declarations: []
})
export class DiversaoAventuraModule { }
