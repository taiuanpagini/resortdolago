/*--------------
V 1.0.0 - Criado por Larner Diogo - PADRONIZADO

DESCIÇÃO:
Roteamento principal da aplicacao


COMPONENTS
***********************************************************/
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTERS: Routes = [

  { path: '', loadChildren: './moduleSystem#Module' },
  
];
